import { decrement, increment } from "./redux/features/counterslice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment({ count: 1 }))}>
        Increment
      </button>
      <button onClick={() => dispatch(increment({ count: 5 }))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrement({ count: 1 }))}>
        Decrement
      </button>
    </div>
  );
};

export default App;
