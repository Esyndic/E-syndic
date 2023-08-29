import React from "react";
import "./App.css"; 
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginAsTenant from "../components/LoginAsTenant";
import Login from "../components/Login";
import Home from "../components/Home";
import THome from "../Tcomp/THome";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginAsSyndic" element={<THome/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
