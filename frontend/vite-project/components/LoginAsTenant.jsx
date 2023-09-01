import React, { useState } from "react";
import cookie from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar.jsx";
function LoginAsTenant(props) {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/tenants/login", {
        email: email,
        password: pwd,
      })
      .then((result) => {
        if (result.data.token) {
          cookie.set("jwt", result.data.token);
          navigate("/thome");
        } else {
          alert("wrong credential");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <NavBar />
      <div />

      <section class="section-2">
        <p class="parag">
          <br></br>
          Hello! Welcome to our platform's interface.Manage your co-ownership in
          complete freedom! hare you can Login for your account . if you forgot
          your account please <a href="">contact us !</a>
          <br></br>
          <br></br>
          <div id="lcentrage">
            <form class="login">
              <p class="login-title">Sign in to your account as Tenant</p>
              <div class="login-input-container">
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <span></span>
              </div>
              <div class="login-input-container">
                <input
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => {
                    setpwd(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                class="lsubmit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                 Sign in
              </button>
            </form>
            <img
              id="tloginimg"
              src="https://www.planstudyabroad.uniagents.com/images/login.png"
            ></img>
          </div>
        </p>
        <br></br>
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
  );
}

export default LoginAsTenant;
