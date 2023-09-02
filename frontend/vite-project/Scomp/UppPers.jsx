import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UppPers.css";
import SNavBar from "../Scomp/SNavBar.jsx";

import axios from "axios";

function UppPers(props) {
  const obj = props.upval;
  const [name, setName] = useState(obj.name);
  const [num, setNum] = useState(obj.num);
  const [email, setEmail] = useState(obj.email);
  const [role, setRole] = useState(obj.role);
  const [image, setImage] = useState(obj.image);

  const editPersonnel = (id) => {
    const updatedItem = {
      name: name,
      num: num,
      email: email,
      role: role,
      image: image,
      syndic_idsyndic: 1,
    };

    axios
      .put(
        `http://localhost:3000/api/personnel/update/${obj.idpersonnel}`,
        updatedItem
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <SNavBar />
      <div />

      <section class="section-2">
        <p class="parag">
          The "UppPers" component serves as an interface for editing personnel
          information within our syndic management application. This component
          allows syndic users to make updates to personnel records effortlessly.
          Users can modify fields such as name, contact number, email address,
          role, and even upload a profile image. The form fields are pre-filled
          with the existing personnel data, making it convenient for users to
          make necessary changes. Once the edits are complete, users can click
          the "Edit Personnel" button to save the updated information. This
          component streamlines the process of maintaining accurate personnel
          records, ensuring that the syndic team's information is always
          up-to-date.
          <br></br>
          <br></br>
          <br></br>
          <div id="adlog">
            <div className="container2">
              <div className="heading">Edit Personnel</div>
              <form action="" className="form">
                <input
                  required
                  className="inputs"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  defaultValue={obj.name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <input
                  required
                  className="inputs"
                  type="text"
                  name="num"
                  id="num"
                  placeholder="Number"
                  defaultValue={obj.num}
                  onChange={(e) => {
                    setNum(e.target.value);
                  }}
                />

                <input
                  required
                  className="inputs"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  defaultValue={obj.email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />

                <input
                  required
                  className="inputs"
                  type="text"
                  name="role"
                  id="role"
                  placeholder="Role"
                  defaultValue={obj.role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />

                <input
                  required
                  className="inputs"
                  type="text"
                  name="image"
                  id="image"
                  placeholder="Image URL"
                  defaultValue={obj.image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />

                <Link to="/personnels" >
                  
                  <input
                    className="editbutton"
                    type="submit"
                    value="Edit Personnel"
                    onClick={() => {
                      editPersonnel();
                    }}
                  />
                </Link>
              </form>
            </div>
          </div>
        </p>
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

export default UppPers;
