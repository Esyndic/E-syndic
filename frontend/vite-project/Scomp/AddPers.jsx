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
  const [image, setImage] = useState(null);

  const addPersonnel = (e) => {
    e.preventDefault();

    if (image) {
      uploadImage();
    } else {
      createPersonnel({});
    }
  };

  const createPersonnel = (imageData) => {
    const obj = {
      name: name,
      num: num,
      email: email,
      role: role,
      image: imageData,
      syndic_idsyndic: 1,
    };

    axios
      .post(`http://localhost:3000/api/personnel/add`, obj)
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
          createPersonnel(response.data.secure_url);
        } else {
          console.log("Image upload failed");
        }
      })
      .catch((error) => {
        console.error("Cloudinary upload error:", error);
      });
  };
  // const uploadImage = () => {
  //   const formaData = new FormData();
  //   formaData.append("file", image);
  //   formaData.append("upload_preset", "t2mwv0gn");

  //   axios
  //     .post("https://api.cloudinary.com/v1_1/djjf52bsy/upload", formaData)
  //     .then((response) => {
  //       response.data.secure_url.length > 3
  //         ? setUploadedImageUrl(response.data.secure_url)
  //         : console.log("not done");
  //       console.log(response.data.secure_url, "state image upload");
  //     });
  // };

  return (
    <div>
      <SNavBar />
      <div />
      <section className="section-2">
        <p className="parag">
          Our "Add Personnel" page simplifies the task of managing your
          co-ownership team effortlessly. With this feature-rich page, you can
          swiftly onboard new personnel members to enhance your co-ownership
          experience. Just input their names, contact details, roles, and even
          upload profile images to personalize your records. This user-friendly
          platform seamlessly integrates with Cloudinary, ensuring your uploaded
          images are securely stored and linked to each personnel profile. It's
          never been easier to maintain an organized team and provide a
          professional touch to your co-ownership management. Click the "Add"
          button to create new personnel profiles and optimize your co-ownership
          operations with ease.
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
                  accept="image/*"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                />
                <button>Upload Image</button>
                <Link to="/personnels">
                  <button
                    className="addbutton"
                    type="submit"
                    value="Add Personnel"
                  />
                </Link>
              </form>
            </div>
          </div>
        </p>
        <br></br>
        <footer className="footer">
          <div className="footer-div">
            <button type="button" className="social-button">
              <a className="footer-link" href="https://www.facebook.com">
                <img
                  className="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                  alt="Facebook"
                />
              </a>
            </button>
            <button type="button" className="social-button">
              <a className="footer-link" href="https://www.instagram.com">
                <img
                  className="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                  alt="Instagram"
                />
              </a>
            </button>
            <button type="button" className="social-button">
              <a className="footer-link" href="https://www.youtube.com">
                <img
                  className="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
                  alt="YouTube"
                />
              </a>
            </button>
          </div>
          <div className="text-center">© 2023 - All rights reserved</div>
        </footer>
      </section>
    </div>
  );
}
export default AddPers;
