import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddPers.css";
import SNavBar from "../Scomp/SNavBar.jsx";
import axios from "axios";

function AddPers(props) {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [image, setImage] = useState("");

  const addPersonnel = (e) => {
    e.preventDefault();
    const obj = {
      name: name,
      num: num,
      email: email,
      role: role,
      image: uploadedImageUrl,
      syndic_idsyndic: 1,
    };
    console.log(obj, "the obj");
    axios
      .post(`http://localhost:3000/api/personnel/add`, obj)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(obj);
  };
  const uploadImage = () => {
    const formaData = new FormData();
    formaData.append("file", image);
    formaData.append("upload_preset", "t2mwv0gn");

    axios
      .post("https://api.cloudinary.com/v1_1/djjf52bsy/upload", formaData)
      .then((response) => {
        response.data.secure_url.length > 3
          ? setUploadedImageUrl(response.data.secure_url)
          : console.log("not done");
        console.log(response.data.secure_url, "state image upload");
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
          <div id="adlog">
            <div className="container2">
              <div className="heading">Add Personnel</div>
              <form onSubmit={(e) => addPersonnel(e)} className="form">
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
                  name="num"
                  id="num"
                  placeholder="Number"
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
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                />
                <input
                  required
                  className="inputs"
                  type="file"
                  name="image"
                  id="image"
                  placeholder="Image URL"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <button
                  onClick={() => {
                    uploadImage();
                  }}
                >
                  Upload Image
                </button>
                <Link to="/personnels">
                  <button
                    className="addbutton"
                    type="submit"
                    value="Add Personnel"
                  > Add personnel</button>
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
export default AddPers;
