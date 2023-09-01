import React from "react";
import ResponsiveAppBar from "../components/NavBar";
import "./AboutUs.css";
import Navbar from "./NavBar.jsx";

function AboutUs(props) {
  return (
    <div>
      <div>
        <Navbar />
        <section class="section-2">
          <div class="sheet">
            <p class="parag">
              <div class="abcard">
                <p class="abcard-title">Welcome to Syndic Website</p>
                <p class="small-desc">
                  Welcome to our Syndic website! We're dedicated to providing
                  top-notch solutions for all your syndication needs. Our
                  experienced team is here to assist you every step of the way,
                  ensuring seamless and efficient processes.
                </p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
              <div class="abcard">
                <p class="abcard-title">Our Services</p>
                <p class="small-desc">
                  Explore our wide range of syndication services tailored to
                  meet your unique requirements. From content distribution to
                  audience engagement, we've got you covered with innovative
                  solutions that deliver results.
                </p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
              <div class="abcard">
                <p class="abcard-title">Why Choose Us</p>
                <p class="small-desc">
                  With years of industry experience, we take pride in being a
                  trusted partner for syndication. Our commitment to excellence,
                  attention to detail, and client-centric approach set us apart.
                  Join us in shaping the future of syndication.
                </p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
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

export default AboutUs;
