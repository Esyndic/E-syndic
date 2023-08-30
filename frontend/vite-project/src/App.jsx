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
import TFeedback from "../Tcomp/Feedback.jsx";
import CreateFacture from "../Scomp/CreateFacture.jsx";
import UppPers from "../Scomp/UppPers.jsx";
import AddPers from "../Scomp/AddPers";
import Factures from "../Tcomp/Factures";
import Claims from "../Tcomp/Claims.jsx";
import Profile from "../Tcomp/Profile";
import Tenants from "../Scomp/Tenants.jsx"

function App() {
  const [inter, setInter] = useState(0)
  function setInterFn(int) {
    setInter(int)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home inter={setInterFn} />} />


        <Route path="/shome" element={<Shome />} />
        <Route path="/personnels" element={<Personnels />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/createFacture" element={< CreateFacture />} />
        <Route path="/uppPers" element={<UppPers />} />
<<<<<<< HEAD
        <Route path="/addPer" element={<AddPers />} />

=======
        <Route path="/tenants" element={<Tenants />} />
>>>>>>> 60c5e2112ca0577b8fe86862addf60d51a72b807


        <Route path="/Thome" element={<THome />} />
        <Route path="/tenant/factures" element={<Factures />} />
        <Route path="/tenant/feedbacks" element={<TFeedback />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;