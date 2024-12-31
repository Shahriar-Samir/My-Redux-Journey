const App = () => {
  return (
    <main className="bg-[#4c4c4c] h-[100vh] flex justify-center items-center text-white">
      <div className="shadow-lg shadow-[#a8a8cf] p-5 rounded-lg flex flex-col items-center w-11/12 max-w-max">
        <h1 className="text-4xl font-semibold text-center">
          Counter with Redux
        </h1>
        <h2 className="text-3xl font-bold mt-10">0</h2>
        <div className="gap-5 flex justify-between mt-10">
          <button className="rounded px-4 py-2 shadow-sm transition-all font-semibold shadow-[#a8a8cf]">
            Increment
          </button>
          <button className="rounded px-4 py-2 shadow-sm font-semibold shadow-[#a8a8cf]">
            Decrement
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
