import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";
import "./App.css";
export default function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((store) => store.counter);
  const handleIncrement = () => {
    dispatch(increment());
  };
  return (
    <div className="app">
      <h1>Counter: {value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
