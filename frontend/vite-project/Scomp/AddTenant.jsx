import React from 'react'
import { Link } from 'react-router-dom';
import './AddTenant.css';
import SNavBar from "../Scomp/SNavBar.jsx"
import axios from 'axios';



function AddTenant() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  
  const obj={
    name:name,
    email:email,
    password:password,
    image:image,
    syndic_idsyndic:1
  }

  const addTenant = () => {
    axios
      .post(`http://localhost:3000/api/tenants/add`, obj)
      .then((result) => {console.log(result)})
      .catch((error) =>{ console.log(error)});
  };



  return (
    <div>
      <SNavBar/>
      <div className="container">
    
        <div className="heading">Add Tenant</div>
        <form action="" className="form">
          <input required className="input" type="text" 
          name="name" id="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} />
          <input required className="input" type="text" 
          name="email" id="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <input required className="input" type="text" 
          name="password" id="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} />
          <input required className="input" type="text" 
          name="image" id="image" placeholder="Image URL" onChange={(e)=>{setImage(e.target.value)}}/>

        <Link to="/tenants"><input className="addbutton" 
                type="submit" 
                value="Add Tenant" 
                  onClick={AddTenant}
                />  </Link>
          
        </form>
      </div>
     


    </div>
  )
}

export default AddTenant