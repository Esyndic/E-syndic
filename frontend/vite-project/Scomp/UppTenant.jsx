import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './UppTenant.css';
import SNavBar from "../Scomp/SNavBar.jsx";
import axios from 'axios';





function UppTenant(props) {

    const obj = props.upval

    const [name, setName] = useState(obj.name);
    const [email, setEmail] = useState(obj.email);
    const [password, setPassword] = useState(obj.email);
    const [image, setImage] = useState(obj.image);

    const editTenant = (id) => {
         const updatedItem = {
          name: name,
          email: email,
          password:password,
          image:image,
          syndic_idsyndic: 1
        }
        axios
      .put(`http://localhost:3000/api/tenants/update/${obj.id}`, updatedItem)
      .then((result) => { console.log(result) })
      .catch((error) => { console.log(error) });

    }

  return (
    <div>
   <SNavBar />

<div className="container">
  <div className="heading">Edit Tenant</div>
  <form action="" className="form">

    <input required className="input" type="text"
      name="name" id="name" placeholder="Name" defaultValue={obj.name}
      onChange={(e) => { setName(e.target.value) }} />


    <input required className="input" type="text"
      name="email" id="email" placeholder="Email" defaultValue={obj.email}
      onChange={(e) => { setEmail(e.target.value) }}/>


    <input required className="input" type="text"
      name="password" id="password" placeholder="Password" defaultValue={obj.password}
      onChange={(e) => { setPassword(e.target.value) }} />


    <input required className="input" type="text"
      name="image" id="image" placeholder="Image URL" defaultValue={obj.image}
      onChange={(e) => { setImage(e.target.value) }}/>

    <Link to="/tenants"> <input className="editbutton"
      type="submit"
      value="Edit Tenant"
      onClick={() => { editTenant() }}
    /> </Link>

  </form>
</div>

    </div>
  )
}

export default UppTenant; 