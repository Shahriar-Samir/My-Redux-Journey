import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";

const App = () => {
  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default App;
