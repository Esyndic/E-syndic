import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'; 
import './Personnel.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';




function Personnels() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/personnel/getAll")
      .then((result) => {setdata(result.data); })
      .catch(function (error) {console.log(error);});
  }, []);

  const deletepersonnel = (id) => {
    axios
      .delete(`http://localhost:3000/api/personnel/delete/${id}`)
      .then((result) => { console.log(result)})
      .catch(function (error) {console.log(error) });
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


    <div>
      <button type="button" class="addbutton">
  <span class="addbutton__text">Add Personnel</span>
  <span class="addbutton__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" 
  viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor"
   height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line>
   <line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
</button>
 </div>

  {data && data.map((e, i) => {
    <div className="card" >
      <div>
        <img className="card-photo" src={e.image} alt="Icon" />
      </div>
      <div className="card-title">
        <p>
                Name: {e.name}<br />
          <span>Num: {e.num}</span><br />
          <span>Email: {e.email}</span><br />
          <span>Role:{e.role}</span><br />

          <button className="edit-button">
            <svg className="edit-svgIcon" viewBox="0 0 512 512">
            </svg>
          </button>

          <button className="delete-button" 
          onClick={() => {
                    deletepersonnel(e.idpersonnel);}}>
            <svg className="delete-svgIcon" viewBox="0 0 448 512">
            </svg>
          </button>
        </p>
      </div>
    </div>
  })}
  </div>
  
  );
  
}

export default Personnels;
