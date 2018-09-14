import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

const initialSate = {
  data: 34
};

const testReducer = (state = initialSate, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENT_COUNTER:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};

export default testReducer;