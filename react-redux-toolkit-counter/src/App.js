import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { actions } from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incr = () => {
    dispatch(actions.incr());
  };
  const decr = () => {
    dispatch(actions.decr());
  };
  const add = () => {
    dispatch(actions.addBy(20));
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Counter: {counter}</p>
      <button onClick={incr}>Increment</button>
      <button onClick={decr}>Decrement</button>
      <button onClick={add}>Add By 10</button>
    </div>
  );
}

export default App;
