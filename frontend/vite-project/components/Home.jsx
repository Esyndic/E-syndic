import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
import Navbar from "../Scomp/SNavBar.jsx";
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
              id="img2"
              src="https://www.coprolib.com/wp-content/uploads/2019/08/visuel-devenir-coprolib.svg"
            />
          </div>
          <p class="parag">
            Manage your co-ownership in complete freedom! For more than 10
            years, E-SYNDIC makes life easier for co-owners. A clear platform
            and effective, for the volunteer trustee. The support of a team
            experts to meet your needs. Together, let's build a sustainable
            condominium project!
          </p>
          <br></br>
        </section>
        <section class="section-3">
          <div class="sheet">
            <h2 class="heading">Start Now!</h2>

            <button>
              <Link
                to="/Thome"
                class="button"
                onClick={() => {
                  setInter(1);
                }}
              >
                Login As Tenant
              </Link>
            </button>
            <br/>
            <br/>
            <button>
              
              <Link
                to="/Shome"
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
export default Home;
