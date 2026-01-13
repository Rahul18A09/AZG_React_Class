import { Decrement_count, Increment_count, Reset_count } from "./actionType";

const intialstate = {
  count: 0,
};

const counterReducer = (state = intialstate, action) => {
  switch (action.type) {
    case Increment_count:
      return {
        ...state,
        count: state.count + 1,
      };

    case Decrement_count:
      return {
        ...state,
        count: state.count - 1,
      };

    case Reset_count:
      return {
        count: state.count = 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
