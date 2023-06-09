import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incr = () => {
    dispatch({ type: "INCR" });
  };
  const decr = () => {
    dispatch({ type: "DECR" });
  };
  const add = () => {
    dispatch({ type: "ADD", payload: 10 });
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
