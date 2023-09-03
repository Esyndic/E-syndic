import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SNavBar from "../Scomp/SNavBar.jsx";

function Reply(props) {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const sendEmail = () => {
    console.log(emailData);
    axios
      .post("http://localhost:3000/send-email", emailData)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  };
  return (
    <div>
      <SNavBar />
      <div />

      <section class="section-2">
        <p class="parag">
          This page empowers Syncic by providing them with a convenient platform
          to communicate their concerns and feedback effectively. Syndic can use
          this page to reply claims, share valuable insights, or report any
          issues related to tenants property .<br></br>
          <br></br>
          <br></br>
          <div id="adten">
            <div className="container2">
              <div className="heading">Reply</div>
              <form onSubmit={(e) => addTenant(e)} className="form">
                <input
                  required
                  className="inputs"
                  type="email"
                  id="name"
                  defaultValue={props.email}
                  placeholder="Email"
                  onChange={(e) =>
                    setEmailData({ ...emailData, to: e.target.value })
                  }
                />
                <input
                  required
                  className="inputs"
                  type="text"
                  id="name"
                  placeholder="Subject"
                  onChange={(e) =>
                    setEmailData({ ...emailData, subject: e.target.value })
                  }
                />
                <textarea
                  className="inputs"
                  placeholder="Message"
                  id="name"
                  value={emailData.text}
                  onChange={(e) =>
                    setEmailData({ ...emailData, text: e.target.value })
                  }
                />

                <Link to="/">
                  <input
                    className="addbutton"
                    type="submit"
                    value="Send e-mail"
                  />
                </Link>
              </form>
            </div>
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

export default Reply;
