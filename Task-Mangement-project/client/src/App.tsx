import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import { Button } from "./components/ui/button";

const App = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default App;
