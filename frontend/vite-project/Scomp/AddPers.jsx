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
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [image,setImage]=useState("")
  console.log(uploadedImageUrl,"image url");


  const addPersonnel = (e) => {
e.preventDefault()
const obj = {
  name: name,
  num: num,
  email: email,
  role: role,
  image: uploadedImageUrl,
  syndic_idsyndic: 1
};
console.log(obj,"the obj");
    axios
      .post(`http://localhost:3000/api/personnel/add`, obj)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(obj);console.log(uploadedImageUrl)
    
  };
const uploadImage=   ()=>{
  const formaData= new FormData()
  formaData.append("file",image)
  formaData.append("upload_preset","t2mwv0gn")

  axios.post("https://api.cloudinary.com/v1_1/djjf52bsy/upload",formaData)
  .then((response)=>{ response && setUploadedImageUrl(response.data.secure_url);console.log(uploadedImageUrl,"state image upload")})

}

  return (
    <div>
      <SNavBar />
      <div
      ></div>

      <div className="container1">
        
        <div className="heading">Add Personnel</div>
        <form onSubmit={(e)=>addPersonnel(e)} className="form">
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
            type="file"  
            name="image"
            id="image"
            placeholder="Image URL"
            onChange={async(e) => {
              setImage(e.target.files[0]);
              
              
            }}
            
          />
         <button onClick={ uploadImage }>Upload Image</button>
          <Link to="/personnels">
            <button
              className="addbutton"
              type="submit"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default AddPers;
