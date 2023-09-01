import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TNavbar from "./TNavBar.jsx";

import cookie from "js-cookie";
import axios from "axios";
import "./claims.css";
function Claims(props) {
  const [TName, setTName] = useState("");
  const [Id, setId] = useState("");
  const [email, setemail] = useState("");
  const [num, setnum] = useState("");
  const [syndicid, setsyndicid] = useState("");
  const [message, setmessage] = useState("ffff");

  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/api/auth",
        { cookie: cookie.get("jwt") },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data);

        setTName(response.data.payload.name);
        setId(response.data.payload.id);
        axios
          .get(`http://localhost:3000/api/tenants/${Id}`)
          .then((response) => {
            console.log(response.data);
            setemail(response.data[0].email);
            setsyndicid(response.data[0].syndic_idsyndic);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [claims, setClaims] = useState({
    contactNumber: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/claims/add", {
        name: TName,
        email: email,
        tenants_syndic_idsyndic: syndicid,
        syndic_idsyndic: syndicid,
        message: message,
        num: num,
        tenants_id: Id,
      })
      .then((response) => {
        console.log("claims sent :", response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  return (
    <div>
      {console.log(email, syndicid)}
      <div>
        <TNavbar />

        <section class="section-2">
          <div class="sheet">
            <p class="parag">
              <br />
              This page empowers tenants by providing them with a convenient
              platform to communicate their concerns and feedback effectively.
              Tenants can use this page to submit claims, share valuable
              insights, or report any issues related to their property or syndic
              management. Whether it's addressing maintenance requests,
              highlighting concerns, or offering suggestions for improvement,
              this interface ensures that tenants' voices are heard and their
              needs are addressed promptly. With a user-friendly form and secure
              authentication, tenants can trust that their submissions will be
              processed efficiently, ultimately enhancing their overall
              experience and satisfaction in their co-ownership arrangement.
              <br />
              <br />
            </p>
            <br />
            <div class="ccards">
              <form class="cform">
                <label>
                  <input
                    required=""
                    placeholder="email"
                    type="email"
                    class="input"
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </label>

                <label>
                  <input
                    required=""
                    type="tel"
                    placeholder="contact number"
                    class="input"
                    onChange={(e) => {
                      setnum(e.target.value);
                    }}
                  />
                </label>
                <label>
                  <textarea
                    required=""
                    rows="3"
                    placeholder="message"
                    class="input01"
                    onChange={(e) => {
                      setmessage(e.target.value);
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
                  <Link to="/Thome">
                    <span class="text">Submit</span>
                  </Link>
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
