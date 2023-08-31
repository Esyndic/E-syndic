import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Scomp/SNavBar.jsx";
import './s.css';
import Scard from "../Scomp/Scard.jsx";
function Home(props) {
  return (
    <div>
      <div>
        <NavBar />
        <div />
        <br></br>
        <section class="section-2">
          <div class="sheet">
            <img
              class="img2"
              src="https://fac.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Ffac.2F2022.2F01.2F12.2F895946b4-9bbf-4f04-9228-cd4748f48d86.2Ejpeg/1200x600/quality/80/crop-from/center/focus-point/657%2C419/copropriete-tout-ce-qu-il-faut-savoir-pour-changer-de-syndic.jpeg"
            />
            <br></br>
            <p class="description">
            Welcome to E-SYNDIC, your ultimate solution for efficient co-ownership management! With over a decade of experience, we've been simplifying the lives of co-owners just like you. Our platform offers unparalleled clarity and effectiveness, designed especially for dedicated administrators like yourself.

Say goodbye to the complexities of managing co-ownership – E-SYNDIC empowers you with complete freedom. Our team of experts is here to provide unwavering support, ensuring all your needs are met seamlessly.

Let's join hands and craft a sustainable condominium project together. Welcome to a new era of hassle-free syndic administration!
            </p>
            <Scard/>
          </div>
        </section>
        <section class="section-3">
          
        


        </section>
      </div>
    </div>
  );
}
export default Home;