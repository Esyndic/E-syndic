import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Personnel.css";
import SNavBar from "../Scomp/SNavBar.jsx";

function Personnels(props) {
  console.log(props);

  const [data, setdata] = useState([]);
  const [trigger, setTrigger] = useState(true);

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
                              <svg
                                className="delete-svgIcon"
                                viewBox="0 0 448 512"
                              ></svg>
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
