import React, { useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../components/Home.jsx";
import AboutUs from "../components/AboutUs";

import LoginAsTenant from "../components/LoginAsTenant";
import Login from "../components/Login";

import Shome from "../Scomp/Shome.jsx";
import Personnels from "../Scomp/Personnels.jsx";
import Feedback from "../Scomp/Feedbacks.jsx";
import CreateFacture from "../Scomp/CreateFacture.jsx";
import UppPers from "../Scomp/UppPers.jsx";
import AddPers from "../Scomp/AddPers";
import Tenants from "../Scomp/Tenants.jsx";
import UppTenant from "../Scomp/UppTenant";
import Sprofile from "../Scomp/Sprofile";

import THome from "../Tcomp/THome.jsx";
import Factures from "../Tcomp/Factures";
import Claims from "../Tcomp/Claims.jsx";
import Profile from "../Tcomp/Profile";
import AddTenant from "../Scomp/AddTenant";

function App() {
  const [up, setup] = useState({});
  function upval(obj) {
    setup(obj);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />



     
        <Route path="/shome" element={<Shome />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/loginastenant" element={<LoginAsTenant />} />
        <Route path="/shome" element={<Shome />} />
        <Route path="/personnels" element={<Personnels upval={upval} />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/sprofile" element={<Sprofile />} />

        <Route path="/feedback" element={<Feedback />} />
        <Route path="/createFacture" element={<CreateFacture />} />
        <Route path="/uppPers" element={<UppPers upval={up} />} />
        <Route path="/addPer" element={<AddPers />} />
        <Route path="/addTenant" element={<AddTenant />} />
        <Route path="/uppTenant" element={<UppTenant />} />

        <Route path="/Thome" element={<THome />} />
        <Route path="/tenant/factures" element={<Factures />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
