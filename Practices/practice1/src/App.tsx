import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counterslice";

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h3>0</h3>
      <button onClick={() => dispatch(increment({ count: 1 }))}>
        Increment
      </button>
      <button>Increment by 5</button>
      <button onClick={() => dispatch(decrement({ count: 1 }))}>
        Decrement
      </button>
    </div>
  );
};

export default App;
