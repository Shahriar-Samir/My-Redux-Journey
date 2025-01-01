const Navbar = () => {
  return (
    <nav className="w-11/12 max-w-[700px] flex justify-between mx-auto py-6">
      <section className="flex gap-2 items-center">
        <img src="/icon.png" className="w-[40px] h-[40px]" />
        <h1 className="text-xl font-bold">Task-Manager</h1>
      </section>
    </nav>
  );
};

export default Navbar;
