import React from "react";
import "./styles/App.css";
import "./styles/pages.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import YieldPredict from "./pages/yieldPredictPage";
import YieldResult from "./pages/yieldResultPage";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {" "}<Route path="/" element={<Home />} />{" "}
          <Route path="/YieldPage" element={<YieldPredict />} />
          <Route path="/Yieldresult" element={<YieldResult />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />

        </Routes>
      </Router>


    </div>
  );
}

export default App;
