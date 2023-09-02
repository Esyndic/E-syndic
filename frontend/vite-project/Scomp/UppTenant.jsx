import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UppTenant.css";
import SNavBar from "../Scomp/SNavBar.jsx";
import axios from "axios";

function UppTenant(props) {
  const obj = props.upval;
  console.log(obj);
  const [name, setName] = useState(obj.name);
  const [email, setEmail] = useState(obj.email);
  const [password, setPassword] = useState(obj.email);
  const [image, setImage] = useState(obj.image);

  const editTenant = (id) => {
    const updatedItem = {
      name: name,
      email: email,
      password: password,
      image: image,
      syndic_idsyndic: 1,
    };
    axios
      .put(`http://localhost:3000/api/tenants/update/${obj.id}`, updatedItem)
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
          The "UppTenant" component provides an interface for editing tenant
          information within the syndic management application. Here's a
          description of its functionality: Users can access this component to
          edit tenant details, including name, email, password, and tenant
          profile image. The form fields are pre-filled with the existing tenant
          data, making it easy for users to make necessary changes. Users can
          modify the tenant's name, email, password, and image URL as needed.
          After making the desired edits, users can click the "Edit Tenant"
          button to save the updated information. This component offers a
          user-friendly way to ensure that tenant records are accurate and
          up-to-date. It also provides a link to return to the "Tenants" page
          after editing the tenant's information. Overall, "UppTenant"
          simplifies the process of managing tenant records for syndic users,
          helping them maintain accurate tenant information within the system.
          <br></br>
          <br></br>
          <br></br>
          <div id="adlog">
            <div className="container2">
              <div className="heading">Edit Tenant</div>
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
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  defaultValue={obj.password}
                  onChange={(e) => {
                    setPassword(e.target.value);
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

                <Link to="/tenants">
                  {" "}
                  <input
                    className="editbutton"
                    type="submit"
                    value="Edit Tenant"
                    onClick={() => {
                      editTenant();
                    }}
                  />{" "}
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

export default UppTenant;
