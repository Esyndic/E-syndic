import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Personnel.css";
import SNavBar from "../Scomp/SNavBar.jsx";

function Personnels(props) {
  const [data, setdata] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/personnel/getAll")
      .then((result) => {
        setdata(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [trigger]);

  const deletepersonnel = (id) => {
    axios
      .delete(`http://localhost:3000/api/personnel/delete/${id}`)
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
          The "Personnels" page empowers you to effortlessly manage your
          co-ownership team, providing a streamlined overview of all personnel
          members. This user-friendly interface displays essential information
          such as names, contact numbers, emails, and roles, allowing you to
          keep track of your team with ease. You can even upload profile images
          to make each record more personalized. The page offers quick access to
          edit personnel details or delete records as needed, giving you full
          control over your co-ownership team's information. Whether you're
          adding new members, making updates, or simply staying organized, the
          "Personnels" page is your go-to tool for efficient co-ownership
          management.
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
                  placeholder="Search Personnel"
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
                              Name: {e.name}
                              <br />
                              <span>Num: {e.num}</span>
                              <br />
                              <span>Email:{e.email} </span>
                              <br />
                              <span>Role:{e.role}</span>
                              <br />
                            </p>
                          </div>
                          <div id="coll">
                            <button
                              className="edit-button"
                              onClick={() => {
                                props.upval(e);
                              }}
                            >
                              <Link to="/uppPers">edit</Link>
                            </button>
                            <button
                              className="delete-button"
                              onClick={() => {
                                deletepersonnel(e.idpersonnel);
                              }}
                            >
                              Delete
                            </button>
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
              <Link to="/addPer">Add Personnel</Link>
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

export default Personnels;
