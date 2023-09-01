import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../Scomp/SNavBar.jsx";

import Scard from "../Scomp/Scard.jsx";
function Home(props) {
  return (
    <div>
      <div>
        <NavBar />

        <section class="section-2">
          <div class="sheet">
            <p class="parag">
            <img id="img2" src="https://www.coprolib.com/wp-content/uploads/2019/12/visuel-communaute-2.svg"></img>
            <br/>
            <br/>
            <br/>
              Hello! Welcome to our platform's interface. This is your space to
              effortlessly submit claims, provide valuable feedback, and
              conveniently access your invoices. If you encounter any challenges
              or have questions, don't hesitate to reach out. Our dedicated
              support team is available round the clock, 7 days a week, to
              assist you. Your satisfaction is our priority, and we're here to
              serve you anytime, day or night.
              <br/>
              <br/>
            
              <br/>
              <Scard />
            </p>
          </div>
        </section>

        <footer class="footer">
          <div class="footer-div">
            <button type="button" class="social-button">
              <a class="footer-link" href="https://www.facebook.com">
                <img
                  class="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                />
              </a>
            </button>
            <button type="button" class="social-button">
              <a class="footer-link" href="https://www.instagram.com">
                <img
                  class="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                />
              </a>
            </button>
            <button type="button" class="social-button">
              <a class="footer-link" href="https://www.youtube.com">
                <img
                  class="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
                />
              </a>
            </button>
          </div>
          <div class="text-center">© 2023 - All rights reserved</div>
        </footer>
      </div>
    </div>
  );
}
export default Home;