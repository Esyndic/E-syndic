import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddTenant.css";
import SNavBar from "../Scomp/SNavBar.jsx";
import axios from "axios";

function AddTenant(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [image, setImage] = useState(null);

  const addTenant = (e) => {
    e.preventDefault();

    if (image) {
      uploadImage();
    } else {
      createTenant({});
    }
  };
  const createTenant = (imageData) => {
    const obj = {
      name: name,
      email: email,
      password: password,
      image: imageData,
      syndic_idsyndic: 1,
    };
    axios
      .post(`http://localhost:3000/api/tenants/add`, obj)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "t2mwv0gn");

    axios
      .post("https://api.cloudinary.com/v1_1/djjf52bsy/upload", formData)
      .then((response) => {
        console.log("Cloudinary response:", response.data);
        if (response.data.secure_url) {
          setUploadedImageUrl(response.data.secure_url);
          createTenant(response.data.secure_url);
        } else {
          console.log("Image upload failed");
        }
      })
      .catch((error) => {
        console.error("Cloudinary upload error:", error);
      });
  };

  return (
    <div>
      <SNavBar />
      <div />

      <section class="section-2">
        <p class="parag">
          Welcome to our platform's interface, where you can manage your
          co-ownership with unparalleled ease and flexibility! The "Add Tenant"
          feature empowers you to effortlessly expand your co-ownership
          community. With just a few clicks, you can invite new tenants to join
          your co-ownership venture. Enter their essential details, including
          name, email, and password, and even add a profile image to personalize
          their account. Our platform ensures a seamless experience,
          facilitating your co-ownership management journey. Join us today and
          streamline your operations with the "Add Tenant" page, making
          co-ownership management a breeze.
          <br></br>
          <br></br>
          <br></br>
          <div id="adten">
            <div className="container2">
              <div className="heading">Add Tenant</div>
              <form onSubmit={(e) => addTenant(e)} className="form">
                <input
                  required
                  className="inputs"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
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
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <input
                  required
                  className="inputs"
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  placeholder="Image URL"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <button>Upload Image</button>
                <Link to="/tenants">
                  <input
                    className="addbutton"
                    type="submit"
                    value="Add Tenant"
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

export default AddTenant;
