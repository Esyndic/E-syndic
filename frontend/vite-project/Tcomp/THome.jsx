import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Navbar from "../Scomp/navBar.jsx";
function THome(props) {
  return (
    <div>
      <div>
        <Navbar />
        <div />
        <br></br>
        <section class="section-2">
          <div class="sheet">
            <p class="description">
              Hello in your interface , here you can send claims , feedbacks and check
              factures .
              If you have any issue feel free and send what you want 
              we are here 7/7 24h in your service  
            </p>
            <img
              class="img2"
              src="https://www.coprolib.com/wp-content/uploads/2019/08/visuel-devenir-coprolib.svg"
            />
            <br></br>
          </div>
        </section>

        <section class="section-3">
          <div class="sheet">
            <h2 class="heading">Start Now!</h2>
            <button id="shbtn">
              <Link
                to="/Thome"
                href="login.html"
                class="button"
                onClick={() => {
                  props.inter(1);
                }}
              ></Link>

              <Link
                to="/Thome"
                class="button"
                onClick={() => {
                  setInter(1);
                }}
              >
                Login As Tenant
              </Link>
              <></>
            </button>
            <button id="shbtn">
              <Link
                to="/Shome"
                href="login.html"
                class="button"
                onClick={() => {
                  props.inter(2);
                }}
              >
                Login As Syndic
              </Link>
            </button>
          </div>
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
        </section>
      </div>
    </div>
  );
}

export default THome;
