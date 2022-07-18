import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Fifth from "./components/Fifth";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Fifth />
    </BrowserRouter>
  );
}

export default App;
