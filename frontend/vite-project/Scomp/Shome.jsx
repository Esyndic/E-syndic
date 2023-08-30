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
              src="https://www.coprolib.com/wp-content/uploads/2019/08/visuel-devenir-coprolib.svg"
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