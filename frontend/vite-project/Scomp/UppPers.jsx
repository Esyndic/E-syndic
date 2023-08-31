import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './UppPers.css';
import SNavBar from "../Scomp/SNavBar.jsx"

import axios from 'axios';





function UppPers(props) {
  const obj = props.upval
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
      syndic_idsyndic: 1
    }

    axios
      .put(`http://localhost:3000/api/personnel/update/${obj.idpersonnel}`, updatedItem)
      .then((result) => { console.log(result) })
      .catch((error) => { console.log(error) });
  };


  return (
    <div>
      <SNavBar />

      <div className="container">
        <div className="heading">Edit Personnel</div>
        <form action="" className="form">

          <input required className="input" type="text"
            name="name" id="name" placeholder="Name" defaultValue={obj.name}
            onChange={(e) => { setName(e.target.value) }} />

          <input required className="input" type="text"
            name="num" id="num" placeholder="Number" defaultValue={obj.num}
            onChange={(e) => { setNum(e.target.value) }}
          />

          <input required className="input" type="text"
            name="email" id="email" placeholder="Email" defaultValue={obj.email}
            onChange={(e) => { setEmail(e.target.value) }}
          />

          <input required className="input" type="text"
            name="role" id="role" placeholder="Role" defaultValue={obj.role}
            onChange={(e) => { setRole(e.target.value) }} />


          <input required className="input" type="text"
            name="image" id="image" placeholder="Image URL" defaultValue={obj.image}
            onChange={(e) => { setImage(e.target.value) }}
          />

          <Link to="/personnels"> <input className="editbutton"
            type="submit"
            value="Edit Personnel"
            onClick={() => { editPersonnel() }}
          /> </Link>

        </form>
      </div>
    </div>
  )
}

export default UppPers;
