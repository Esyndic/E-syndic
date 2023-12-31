import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import "../Scomp/Sprofile.css";
import NavBar from "../Tcomp/TNavBar.jsx";
import axios from "axios";
function Profile(props) {
  const [TName, setTName] = useState("");
  const [Id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(
    "https://www.artesia-syndic.fr/wp-content/uploads/Calque-11-300x277.png"
  );
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
        setEmail(response.data.payload.email);
        response.data.payload.image && setImage(response.data.payload.image);
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
                                src={image}
                                class="img-radius"
                                alt="User-Profile-Image"
                              />
                            </div>
                            <h6 class="f-w-600">{TName}</h6>
                            <p>Tenant</p>
                            <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                          </div>
                        </div>
                        <div class="col-sm-8">
                          <div class="prcard-block">
                            <div class="row">
                              <div class="col-sm-6">
                                <h6 class="text-muted f-w-400">id:{Id}</h6>
                                <h6 class="text-muted f-w-400">
                                  email:{email}
                                </h6>
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
            This page offers tenants a comprehensive view of their profile
            within the platform. It displays essential information such as the
            tenant's name, unique ID, and email address. Tenants can also upload
            a personalized profile image to enhance their identity within the
            community. With this page, tenants can easily manage and update
            their profile details for a more personalized experience.
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

export default Profile;
