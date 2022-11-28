export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const ACTION_TYPES_FORM = {
  CHAGE_INPUT: "CHAGE_INPUT",
  ADD_TAG: "ADD_TAG",
  REMOVE_TAG: "REMOVE_TAG",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES_FORM.CHAGE_INPUT:
      return {
        ...state,
        [action.payload.name]: [action.payload.value],
      };
    case ACTION_TYPES_FORM.ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload.value],
      };
    case ACTION_TYPES_FORM.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((item) => item !== action.payload.value),
      };
    case ACTION_TYPES_FORM.INCREASE:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case ACTION_TYPES_FORM.DECREASE:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
