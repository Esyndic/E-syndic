import React, { useEffect, useState } from "react";
import SNavbar from "./SNavBar.jsx";
import axios from "axios";
import "../Tcomp/facture.css";
function Feedbacks(props) {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/claims/getAll")
      .then((response) => {
        console.log(response.data);
        setClaims(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <SNavbar />
        <section class="section-2">
          <div class="sheet">
            <p class="parag">
              <br />
              Hello! Welcome to our platform's interface. This is your space to
              effortlessly submit claims, provide valuable feedback, and
              conveniently access your invoices. If you encounter any challenges
              or have questions, don't hesitate to reach out. Our dedicated
              support team is available round the clock, 7 days a week, to
              assist you. Your satisfaction is our priority, and we're here to
              serve you anytime, day or night.
              <br />
              <br />
            </p>
            <br />
            <div id="fact">
              {claims.map((claim, i) => {
                return (
                  <div class="parent">
                    <div class="fcard">
                      <div class="content-box">
                        <span class="card-title">claim</span>
                        <ol className="claim-list">
                          <li key={claim.id}>
                           
                            <p className="Tenant">id claim: {claim.idclaims}</p>
                            <p className="Tenant">name : {claim.name}</p>
                            <p className="Tenant">num : {claim.num}</p>
                            <p className="Tenant">email: {claim.email}</p>
                            <p className="Tenant"> message: {claim.message}</p>
                          </li>
                        </ol>
                      </div>
                      <div class="date-box">
                        <span class="date">{i}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
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

export default Feedbacks;
