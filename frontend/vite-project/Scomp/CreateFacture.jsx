import React, { useState, useEffect } from "react";
import axios from "axios";
import "./createFacture.css";
import { Link } from "react-router-dom";
import SNavBar from "../Scomp/SNavBar";
function CreateFacture(props) {
  const [selectedTenant, setSelectedTenant] = useState([]);
  const [creationDate, setCreationDate] = useState("");
  const [tenants_id, setTenants_id] = useState("");
  const [rentFacture, setRentFacture] = useState("");
  const [stegFacture, setStegFacture] = useState("");
  const [sonedFacture, setSonedFacture] = useState("");
  const [topnetFacture, setTopnetFacture] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tenants/getAll")
      .then((response) => {
        console.log(response.data);
        setSelectedTenant(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      date: creationDate,
      rent: rentFacture * 1,
      STEG: stegFacture * 1,
      SONEDE: sonedFacture * 1,
      Topnet: topnetFacture * 1,
      decription: notes,
      syndic_idsyndic: 1,
      tenants_id: tenants_id,
      tenants_syndic_idsyndic: 1,
    };
    console.log(formData);
    axios
      .post("http://localhost:3000/api/facture/add", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div>
        <SNavBar />

        <section class="section-2">
          <div class="sheet">
            <p class="parag">
              <br />
              Welcome to our platform's "Create Facture" page! This is your
              gateway to easily submit claims, provide valuable feedback, and
              access your invoices hassle-free. We've designed this space with
              your convenience in mind. Simply select the tenant, enter the
              creation date, and input the details for rent, STEG, SONEDE,
              Topnet, and any additional notes. It's a user-friendly process
              that puts you in control. Should you have any questions or need
              assistance, our dedicated support team is available around the
              clock to assist you. We're here to ensure your satisfaction every
              step of the way. Click "Submit" to streamline your facture
              creation process and enjoy a seamless experience.
              <br />
            </p>
            <section className="container">
              <header>Create facture</header>

              <div className="column">
                <label>Select tenant</label>
                <div className="select-box">
                  <select onClick={(e) => setTenants_id(e.target.value)}>
                    <option hidden value="">
                      Tenant
                    </option>
                    {selectedTenant.map((e) => {
                      return <option value={e.id}>{e.id}</option>;
                    })}
                  </select>
                </div>
                <br />
                <div className="input-box">
                  <label>Creation Date</label>
                  <br />
                  <input
                    required
                    type="date"
                    value={creationDate}
                    onChange={(event) => setCreationDate(event.target.value)}
                  />
                </div>
              </div>

              <form className="form" onSubmit={handleSubmit}>
                <div className="input-box">
                  <label>Rent facture</label>
                  <input
                    required
                    placeholder="0000"
                    type="text"
                    value={rentFacture}
                    onChange={(event) => setRentFacture(event.target.value)}
                  />
                </div>

                <div className="input-box address">
                  <label>STEG facture</label>
                  <input
                    required
                    placeholder="0000"
                    type="text"
                    value={stegFacture}
                    onChange={(event) => setStegFacture(event.target.value)}
                  />

                  <label>SONED facture</label>
                  <input
                    required
                    placeholder="0000"
                    type="text"
                    value={sonedFacture}
                    onChange={(event) => setSonedFacture(event.target.value)}
                  />

                  <label>Topnet facture</label>
                  <input
                    required
                    placeholder="0000"
                    type="text"
                    value={topnetFacture}
                    onChange={(event) => setTopnetFacture(event.target.value)}
                  />

                  <label>Notes</label>
                  <input
                    required
                    placeholder="......"
                    type="text"
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                  />

                  <button onClick={handleSubmit} type="submit">
                    <Link to="/shome">Submit</Link>
                  </button>
                </div>
              </form>
            </section>
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

export default CreateFacture;
