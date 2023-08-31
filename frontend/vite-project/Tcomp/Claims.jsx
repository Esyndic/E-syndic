import React, { useState } from "react";
import { Link } from "react-router-dom";
import TNavbar from "./TNavBar.jsx";
import "./claims.css";
function Claims(props) {
  const [claims, setClaims] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/claims/add", claims)
      .then((response) => {
        console.log("claims sent :", response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setClaims({
      ...Claims,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <TNavbar />

        <section class="section-2">
          <div class="sheet">
            <p class="parag">
              <br />
              Hello! We're excited to have you on our platform. This space is
              designed to make your experience as smooth as possible. Whether
              you need to submit claims, share valuable feedback, or access your
              invoices, you're in the right place. Don't hesitate to let us know
              if you encounter any challenges or have questions. Our dedicated
              support team is available 24/7 to assist you. Your satisfaction is
              our top priority, and we're here to cater to your needs day and
              night. Feel free to use this platform to request services like
              plumbing or maintenance. We're here to serve you in every way we
              can!
              <br />
              <br />
            </p>
            <br />
            <div class="ccards">
              <form class="cform">
                <div class="flex">
                  <label>
                    <input
                      required=""
                      placeholder="first name"
                      type="text"
                      class="input"
                      value={claims.firstName}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </label>

                  <label id="label2">
                    <input
                      required=""
                      placeholder="last name"
                      type="text"
                      class="input"
                      value={claims.lastName}
                      onChange={(e) => {
                        handleInputChange(e);
                      }}
                    />
                  </label>
                </div>

                <label>
                  <input
                    required=""
                    placeholder="email"
                    type="email"
                    class="input"
                    value={claims.email}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </label>

                <label>
                  <input
                    required=""
                    type="tel"
                    placeholder="contact number"
                    class="input"
                  />
                </label>
                <label>
                  <textarea
                    required=""
                    rows="3"
                    placeholder="message"
                    class="input01"
                    value={claims.message}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  ></textarea>
                </label>

                <button
                  class="fancy"
                  href="#"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <span class="top-key"></span>
                  <span class="text">Submit</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </button>
              </form>
            </div>
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

export default Claims;
