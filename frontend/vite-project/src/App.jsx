import React, { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginAsTenant from "../components/LoginAsTenant";
import Login from "../components/Login";
import Home from "../components/Home.jsx";
import THome from "../Tcomp/THome.jsx";
import Shome from "../Scomp/Shome.jsx";
import Personnels from "../Scomp/Personnels.jsx";
import Feedback from "../Scomp/feedbacks.jsx";
import CreateFacture from "../Scomp/CreateFacture.jsx";
import UppPers from "../Scomp/UppPers.jsx";
import Factures from "../Tcomp/Factures";
import Claims from "../Tcomp/Claims.jsx";
import Profile from "../Tcomp/Profile";
import Update from "../Tcomp/Update";
function App() {
  const [inter, setInter] = useState(0)
  function setInterFn(int) {
    setInter(int)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginAsSyndic" element={<LoginAsTenant />} />
        <Route path="/login" element={<Login />} />
        <Route path="/personnels" element={<Personnels />} />
        <Route path="/" element={<Home inter={setInterFn} />} />
        <Route path="/shome" element={ <Shome />} />
        <Route path="/personnels" element={<Personnels />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/createFacture" element={< CreateFacture />} />
        <Route path="/uppPers" element={<UppPers />} />
        <Route path="/Thome" element={<THome />} />
        <Route path="/facture" element={<Factures />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/update" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;