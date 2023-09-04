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
  const [term, setTerm] = useState("");

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

  const search = (input) => {
    if (!input) {
      setTrigger(!trigger);
    }
    return setdata(
      data.filter((e) => e.name.toLowerCase().includes(input.toLowerCase()))
    );
  };
  const handleChange = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
    search(newTerm);
  };

  return (
    <div>
      <SNavBar />
      <div />
      <section class="section-2">
        <p class="parag">
          The "Tenants" component is a central feature of our syndic management
          application, designed to efficiently manage co-ownership tenant
          information. It provides syndic users with a comprehensive overview of
          all tenants associated with a property or co-ownership. The component
          displays crucial details such as tenant names, email addresses, and
          profile images, enhancing the user experience. Users can easily update
          tenant information or remove records as needed, ensuring accurate and
          up-to-date tenant data. With its user-friendly design, the "Tenants"
          page streamlines tenant management, making it an essential tool for
          syndic users in their daily operations.
          <br></br>
          <br></br>
          <br></br>
          <div id="serachdiv">
              <form class="searchform">
                <label for="search">
                  <input
                    class="input"
                    type="text"
                    required=""
                    placeholder="Search Tenants"
                    id="search"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <div class="fancy-bg"></div>
                  <div class="search">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr"
                    >
                      <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                      </g>
                    </svg>
                  </div>
                  <button class="close-btn" type="reset">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </label>
              </form>
            </div>
            <br></br>
          <br></br>
          <div id="centrage">
            <div id="flex">
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
                              <br />
                              <br />
                              <button
                                className="edit-button"
                                onClick={() => {
                                  props.upval(e);
                                }}
                              >
                                <Link to="/uppTenant">edit</Link>
                              </button>

                              <button
                                className="delete-button"
                                onClick={() => {
                                  deletetenant(e.id);
                                }}
                              >
                                delete
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
