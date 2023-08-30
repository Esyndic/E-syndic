import React from 'react';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './UppPers.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import axios from 'axios';





function UppPers() {

  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");


  const editPersonnel = (id) => {
const updatedItem={
  name:name,
  num:num,
  email:email,
  role:role,
  image:image
}
    axios
      .put(`http://localhost:3000/api/personnel/update/${id}`, updatedItem)
      .then((result) => {console.log(result)})
      .catch((error) =>{ console.log(error)});
  };


  return (
   <div>
       <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <Link id="title" to="/">
                E-Syndic
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />
            <Box sx={{ flexGrow: 0 }}>contact: +21656251081</Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div className="container">
        <div className="heading">Edit Personnel</div>
        <form action="" className="form">

          <input required className="input" type="text" 
          name="name" id="name" placeholder="Name" value={name}
          onChange={(e)=>{setName(e.target.value)}} />

          <input required className="input" type="text" 
          name="num" id="num" placeholder="Number" value={num} 
          onChange={(e)=>{setNum(e.target.value)}}
          />

          <input required className="input" type="text" 
          name="email" id="email" placeholder="Email" value={email} 
          onChange={(e)=>{setEmail(e.target.value)}}
          />

          <input required className="input" type="text" 
          name="role" id="role" placeholder="Role" value={role}
          onChange={(e)=>{setRole(e.target.value)}} />

          <input required className="input" type="text" 
          name="image" id="image" placeholder="Image URL" value={image} 
          onChange={(e)=>{setImage(e.target.value)}}
          />

         <Link to="/personnels"> <input className="editbutton" 
                type="submit" 
                value="Edit Personnel" 
                  onClick={()=>{editPersonnel(updatedItem)}}
                /> </Link>

        </form>
      </div>
   </div>
  )
}

export default UppPers;
