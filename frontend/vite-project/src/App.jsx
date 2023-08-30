import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginAsTenant from "../components/LoginAsTenant";
import Login from "../components/Login";
import Home from "../components/Home";
import Personnels from "../Scomp/Personnels";

function App() {
  return (
    <BrowserRouter>
    
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginAsSyndic" element={<LoginAsTenant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personnels" element={<Personnels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
