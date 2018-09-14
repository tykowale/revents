import { DECREMENET_COUNTER, INCREAMENT_COUNTER } from "./testConstants";

const initialSate = {
  data: 34
};

const testReducer = (state = initialSate, action) => {
  switch (action.type) {
    case INCREAMENT_COUNTER:
      return { ...state, data: state.data + 1 };
    case DECREMENET_COUNTER:
      return { ...state, data: state.data - 1 };
    default:
      return state;
  }
};

export default testReducer;