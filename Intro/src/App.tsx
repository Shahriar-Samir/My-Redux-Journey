import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const incrementHandler = (amount: number) => {
    dispatch(increment({ amount }));
  };

  const decrementHandler = (amount: number) => {
    dispatch(decrement({ amount }));
  };

  return (
    <main className="bg-[#63c0ca] h-[100vh] flex justify-center items-center text-white">
      <div className="shadow-md shadow-[#3e335f52] p-5 rounded-lg flex flex-col items-center w-11/12 max-w-max">
        <h1 className="text-4xl font-semibold text-center">
          Counter with Redux
        </h1>
        <h2 className="text-3xl font-bold mt-10">{count}</h2>
        <div className="gap-5 flex justify-between mt-10">
          <button
            onClick={() => incrementHandler(5)}
            className="rounded px-4 py-2 shadow-sm transition-all font-semibold shadow-[#29214244]"
          >
            Increment By 5
          </button>
          <button
            onClick={() => incrementHandler(1)}
            className="rounded px-4 py-2 shadow-sm transition-all font-semibold shadow-[#29214244]"
          >
            Increment
          </button>
          <button
            onClick={() => decrementHandler(1)}
            className="rounded px-4 py-2 shadow-sm font-semibold shadow-[#29214244]"
          >
            Decrement
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
