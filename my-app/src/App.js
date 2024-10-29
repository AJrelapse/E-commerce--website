import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Login from "./pages/login";
import Signup from "./pages/signup";
import ItemPage from "./pages/itempage";
import { ShopContextProvider } from "./components/shop-context";
import useLocalStorage from "use-local-storage";

const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark] = useLocalStorage("isDark", preference);
  return (
<div className="App" data-theme={isDark ? "dark" : "light"}>

      <ShopContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Itempage" element={<ItemPage/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
