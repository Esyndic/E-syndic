import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Tenants.css";
import SNavBar from "../Scomp/SNavBar.jsx";

function Tenants(props) {
  console.log(props);
  const [data, setdata] = useState([]);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tenants/getAll")
      .then((result) => {
        setdata(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [trigger]);

  const deletetenant = (id) => {
    axios
      .delete(`http://localhost:3000/api/tenants/delete/${id}`)
      .then((result) => {
        console.log(result);
        setTrigger(!trigger);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <SNavBar />
      <div />

      <section class="section-2">
        <p class="parag">
          Hello! Welcome to our platform's interface.Manage your co-ownership in
          complete freedom! hare you can Login for your account . if you forgot
          your account please <a href="">contact us !</a>
          <br></br>
          <br></br>
          <br></br>
          <div id="centrage">
            <div id="flex">
              <div>
                {data &&
                  data.map((e, i) => {
                    return (
                      <div className="card" key={i}>
                        {
                          <>
                            <div>
                              <img
                                className="card-photo"
                                src={e.image}
                                alt="Icon"
                              />
                            </div>
                            <div className="card-title">
                              <p>
                                <span>Name: {e.name}</span>
                                <br />
                                <span>Email:{e.email} </span>
                                <br />
                                <button
                                  className="edit-button"
                                  onClick={() => {
                                    props.upval(e);
                                  }}
                                >
                                  <Link to="/uppTenant">
                                    <svg
                                      className="edit-svgIcon"
                                      viewBox="0 0 512 512"
                                    ></svg>
                                  </Link>
                                </button>

                                <button
                                  className="delete-button"
                                  onClick={() => {
                                    deletetenant(e.id);
                                  }}
                                >
                                  <svg
                                    className="delete-svgIcon"
                                    viewBox="0 0 448 512"
                                  ></svg>
                                </button>
                              </p>
                            </div>
                          </>
                        }
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </p>
        <div>
          <button type="button" class="addbutton">
            <span class="addbutton__text">
              <Link to="/addTenant">Add Tenant</Link>
            </span>
          </button>
        </div>
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

export default Tenants;
