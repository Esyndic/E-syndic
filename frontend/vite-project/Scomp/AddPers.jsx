import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddPers.css";
import SNavBar from "../Scomp/SNavBar.jsx";
import axios from "axios";

function AddPers() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const obj = {
    name: name,
    num: num,
    email: email,
    role: role,
    image: image,
    syndic_idsyndic: 1,
  };

  const addPersonnel = () => {
    axios
      .post(`http://localhost:3000/api/personnel/add`, obj)
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

      <div className="container">
        <div className="heading">Add Personnel</div>
        <form action="" className="form">
          <input
            required
            className="input"
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
            className="input"
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
            className="input"
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
            className="input"
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
            className="input"
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <input
            required
            className="input"
            type="file"
            name="image"
            id="image"
            placeholder="Image URL"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <button>click me </button>
          <Link to="/personnels">
            <input
              className="addbutton"
              type="submit"
              value="Add Personnel"
              onClick={addPersonnel}
            />{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddPers;
