import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../Tcomp/NavBar.jsx";
import Factures from "../Tcomp/Factures.jsx";
import THome from "../Tcomp/THome.jsx";
import Claims from "./Claims.jsx";
import Profile from "./Profile";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<THome />} />
        <Route path="/facture" element={<Factures />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
