import React, { useEffect, useState } from "react";
import TNavbar from "./TNavBar.jsx";
import axios from "axios";
import "./Facture.css";
function FactureList(props) {
  const [factures, setFactures] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/facture/get")
      .then((response) => {
        console.log(response.data);
        setFactures(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div>
        <TNavbar />
        <section class="section-2">
          <div class="sheet">
            <p class="parag">
              <br />
              This page empowers tenants with quick access to their financial
              information and invoices. It provides a clear breakdown of rent
              and utility bills, making it easy for tenants to track expenses
              and verify bills. Tenants can also view unique invoice IDs and
              additional notes for each invoice, ensuring they have all the
              necessary details at their fingertips. This platform simplifies
              financial management and enhances transparency for a more seamless
              living experience.
              <br />
              <br />
            </p>
            <br />
            <div id="fact">
              {factures.map((facture) => {
                var total =
                  facture.rent * 1 +
                  facture.STEG * 1 +
                  facture.SONEDE * 1 +
                  facture.Topnet * 1;
                return (
                  <div class="parent">
                    <div class="fcard">
                      <div class="content-box">
                        <span class="card-title">Facture</span>
                        <ol className="facture-list">
                          <li key={facture.id}>
                            <p></p>
                            <p className="Tenant">id Facture: {facture.id}</p>
                            <p>Rent Facture: {facture.rent}dt</p>
                            <p>STEG Facture: {facture.STEG}dt</p>
                            <p>SONED Facture: {facture.SONEDE}dt</p>
                            <p>Topnet Facture: {facture.Topnet}dt</p>
                            <p>Total : {total} dt</p>
                            <p>Notes: {facture.decription}</p>
                          </li>
                        </ol>
                      </div>
                      <div class="date-box">
                        <span class="month">{facture.date.substr(0, 4)}</span>
                        <span class="date">{facture.date.substr(4, 6)}</span>
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

export default FactureList;
