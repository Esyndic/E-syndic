import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TNavbar from "./TNavBar.jsx";

import cookie from "js-cookie"
import axios from "axios";
import "./claims.css";
function Claims(props) {
  const [TName,setTName]=useState("")
  const [Id,setId]=useState("")
  const [email,setemail]=useState("")
  const [num,setnum]=useState("")
  const [syndicid,setsyndicid]=useState("")
  const [message,setmessage]=useState("ffff")
  
  useEffect(()=>{
    axios.post("http://localhost:3000/api/auth",{cookie :cookie.get("jwt")},{ withCredentials: true }).then((response)=>{ console.log(response.data);

     setTName(response.data.payload.name);setId(response.data.payload.id)

     ;axios.get(`http://localhost:3000/api/tenants/${Id}`).then((response)=>{ console.log(response.data); setemail(response.data[0].email);setsyndicid(response.data[0].syndic_idsyndic)}).catch((err)=>{console.log(err)})
    }).catch((err)=>{console.log(err)})
    
  
  },[])
  const [claims, setClaims] = useState({
   
   
    contactNumber: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:3000/api/claims/add", {"name":TName ,"email":email,"tenants_syndic_idsyndic":syndicid,"syndic_idsyndic":syndicid,"message":message,"num":num,"tenants_id":Id})
      .then((response) => {
        console.log("claims sent :", response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  
  return (
    <div>
      {console.log(email,syndicid)}
      <div>
        
        <TNavbar />

        <section class="section-2">
          <div class="sheet">
            <p class="parag">
              <br />
              Hello! We're excited to have you on our platform. This space is
              designed to make your experience as smooth as possible. Whether
              you need to submit claims, share valuable feedback, or access your
              invoices, you're in the right place. Don't hesitate to let us know
              if you encounter any challenges or have questions. Our dedicated
              support team is available 24/7 to assist you. Your satisfaction is
              our top priority, and we're here to cater to your needs day and
              night. Feel free to use this platform to request services like
              plumbing or maintenance. We're here to serve you in every way we
              can!
              <br />
              <br />
            </p>
            <br />
            <div class="ccards">
              <form class="cform">
                
                <label>
                  <input
                    required=""
                    placeholder="email"
                    type="email"
                    class="input"
                    value={claims.email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </label>

                <label>
                  <input
                    required=""
                    type="tel"
                    placeholder="contact number"
                    class="input"
                    onChange={(e) => {
                      setnum(e.target.value);
                    }}
                  />
                </label>
                <label>
                  <textarea
                    required=""
                    rows="3"
                    placeholder="message"
                    class="input01"
                    value={claims.message}
                    onChange={(e) => {
                      setmessage(e.target.value);
                    }}
                  ></textarea>
                </label>

                <button
                  class="fancy"
                  href="#"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <span class="top-key"></span>
                  <span class="text">Submit</span>
                  <span class="bottom-key-1"></span>
                  <span class="bottom-key-2"></span>
                </button>
              </form>
            </div>
          </div>
        </section>

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
      </div>
    </div>
  );
}

export default Claims;
