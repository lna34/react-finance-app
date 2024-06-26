import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
