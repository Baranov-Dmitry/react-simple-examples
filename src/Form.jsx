import { useReducer, useRef } from "react";
import { formReducer, INITIAL_STATE, ACTION_TYPES_FORM } from "./formReducer";
import "./form.css";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const refTeg = useRef();

  const handleChage = (e) => {
    dispatch({
      type: ACTION_TYPES_FORM.CHAGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    });
    console.log(e.target.name);
  };

  const handleTag = (e) => {
    if (refTeg.current.value === "") return;
    const tags = refTeg.current.value.split(",");

    tags.forEach((element) => {
      dispatch({
        type: ACTION_TYPES_FORM.ADD_TAG,
        payload: {
          value: element,
        },
      });
    });

    refTeg.current.value = "";
  };

  console.log(state);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChage}
        />
        <input
          type="text"
          placeholder="Desc"
          name="desc"
          onChange={handleChage}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          onChange={handleChage}
        />
        <p>Category:</p>
        <select name="category">
          <option value="sneakers">Sneakers</option>
          <option value="tshirts">T-shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={refTeg}
          placeholder="Seperate tags with commas..."
        ></textarea>
        <button type="button" onClick={handleTag}>
          Add Tags
        </button>
        <div className="tags">
          {state.tags.map((tag, index) => (
            <small
              onClick={() =>
                dispatch({
                  type: ACTION_TYPES_FORM.REMOVE_TAG,
                  payload: { value: tag },
                })
              }
              key={index}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="quantity">
          <button
            type="button"
            onClick={(e) => dispatch({ type: ACTION_TYPES_FORM.DECREASE })}
          >
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button
            type="button"
            onClick={(e) => dispatch({ type: ACTION_TYPES_FORM.INCREASE })}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
