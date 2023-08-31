import React, { useState, useEffect } from "react";
import axios from "axios";
import "./createFacture.css";
import { Link } from "react-router-dom";
import SNavBar from "../Scomp/SNavBar";

export default function CreateFacture() {
  const [selectedTenant, setSelectedTenant] = useState([]);
  const [creationDate, setCreationDate] = useState("");
  const [id_syndic, setIdSyndic] = useState("");
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
      tenants_id: id_syndic
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
      <SNavBar />
      <section className="container">
        <header>Create facture</header>

        <div className="column">
          <label>Select tenant</label>
          <div className="select-box">
            <select>
              <option hidden value="">
                Tenant
              </option>

              {selectedTenant.map((e) => {
                return (
                  <option
                    value={id_syndic}
                    onChange={(event) => setIdSyndic(event.target.value)}
                  >
                    {e.id}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="input-box">
            <label>Creation Date</label>
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

            <Link to="/shome">
              <button
                onClick={() => {
                  handleSubmit;
                }}
                type="submit"
              >
                Submit
              </button>
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
