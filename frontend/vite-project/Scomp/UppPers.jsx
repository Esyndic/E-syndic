
import React from 'react';
import { Link } from 'react-router-dom';
import './AddPers.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


function UppPers() {

  const addPersonnel = (obj,id) => {
    axios
      .put(``)
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
        <div className="heading">Update Personnel</div>
        <form action="" className="form">
          <input required className="input" type="text" name="name" id="name" placeholder="Name" />
          <input required className="input" type="text" name="num" id="num" placeholder="Number" />
          <input required className="input" type="text" name="email" id="email" placeholder="Email" />
          <input required className="input" type="text" name="role" id="role" placeholder="Role" />
          <input required className="input" type="text" name="image" id="image" placeholder="Image URL" />

          <input className="Uppbutton" 
                type="submit" 
                value="Update Personnel" />

        </form>
      </div>
    </div>
  );
}




export default UppPers;
