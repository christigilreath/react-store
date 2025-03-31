import { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import { Outlet } from "react-router-dom";
// import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <NavigationBar cart={cart} />
      <Outlet context={[cart, setCart]} />
    </>
  );
}

export default App;
