import { decrement, increment } from "../redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const App = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <main>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment({ count: 1 }))}>
        Increment
      </button>
      <button onClick={() => dispatch(increment({ count: 5 }))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrement({ count: 1 }))}>
        decrement
      </button>
    </main>
  );
};

export default App;
