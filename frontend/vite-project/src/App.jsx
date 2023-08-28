import { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginAsTenant from "../components/LoginAsTenant";
import Login from "../components/Login";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" elemenet={<Home />} />
        <Route path="/loginAsSyndic" elemenet={<LoginAsTenant />} />
        <Route path="/login" elemenet={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
