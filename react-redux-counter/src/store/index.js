
import { createStore } from "redux";

const reducerFun = (state = { counter: 0 }, action) => {
  if (action.type === "INCR") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DECR") {
    return { counter: state.counter - 1 };
  }
  if(action.type === "ADD"){
    return { counter: state.counter + action.payload}
  }
  return state;
};

const store = createStore(reducerFun);

export default store;
