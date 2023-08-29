import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "../Scomp/navBar";
import CreateFacture from "../Scomp/CreateFacture";
import Feedback from "../Scomp/feedbacks";
import Personnels from "../Scomp/Personnels";
import UppPers from "../Scomp/UppPers";

function App() {
  return (
    <BrowserRouter>
    
      <NavBar />
      <Routes>
      <Route path="/nvBar" element={<Nav0Bar/>} />
        <Route path="/personnels" element={<Personnels/>} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/createFacture" element={< CreateFacture/>} />
        <Route path="/uppPers" element={<UppPers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
