import React, { useEffect, useState } from "react";
import "../Scomp/Sprofile.css";
import NavBar from "./SNavBar";
import axios from "axios";
import cookie from "js-cookie";

function Sprofile(props) {
  const [SName, setSName] = useState("");
  const [Id, setId] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/api/auth",
        { cookie: cookie.get("jwt") },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response.data.payload);
        setSName(response.data.payload.name);
        setId(response.data.payload.id);
        setEmail(response.data.payload.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div>
      <div>
        <NavBar />

        <section class="section-2">
          <div class="sheet">
            <div class="page-content page-container" id="page-content">
              <div class="padding">
                <div class="row container d-flex justify-content-center">
                  <div class="col-xl-6 col-md-12">
                    <div class="prcard user-prcard-full">
                      <div class="row m-l-0 m-r-0">
                        <div class="col-sm-4 bg-c-lite-green user-profile">
                          <div class="prcard-block text-center text-white">
                            <div class="m-b-25">
                              <img
                                src="https://www.artesia-syndic.fr/wp-content/uploads/Calque-11-300x277.png"
                                class="img-radius"
                                alt="User-Profile-Image"
                              />
                            </div>
                            <h6 class="f-w-600">{SName}</h6>
                            <p>Syndic</p>
                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="prcard-block">
                            <div class="row">
                              <div class="col-sm-6">
                                <p class="m-b-10 f-w-600">Email:</p>
                                <h6 class="text-muted f-w-400">{email}</h6>
                                <p class="m-b-10 f-w-600">id: {Id}</p>
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="parag">
            <br />
            Hello! Welcome to our platform's interface. This is your space to
            effortlessly submit claims, provide valuable feedback, and
            conveniently access your invoices. If you encounter any challenges
            or have questions, don't hesitate to reach out. Our dedicated
            support team is available round the clock, 7 days a week, to assist
            you. Your satisfaction is our priority, and we're here to serve you
            anytime, day or night.
            <br />
          </p>
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

export default Sprofile;
