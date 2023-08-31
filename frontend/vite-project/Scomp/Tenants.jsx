import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Tenants.css';
import SNavBar from "../Scomp/SNavBar.jsx"



function Tenants(props) {

  const [data, setdata] = useState([]);
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/tenants/getAll")
      .then((result) => { setdata(result.data); })
      .catch(function (error) { console.log(error); });
  }, [trigger]);


  const deletetenant = (id) => {
    axios
      .delete(`http://localhost:3000/api/tenants/delete/${id}`)
      .then((result) => {
        console.log(result)
        setTrigger(!trigger)
      })
      .catch(function (error) { console.log(error) });
  };



  return (
    <div>
      <SNavBar />

      <div>
        <button type="button" class="addbutton">

          <span class="addbutton__text">
            <Link to="/addTenant">Add Tenant</Link>
          </span>

        </button>

      </div>
      <div>
        {data && data.map((e, i) => {
          return (
            <div className="card" key={i}  >
              {
                <>
                <div>
                    <img className="card-photo" src={e.image} alt="Icon" />
                  </div>
                 <div className="card-title">
                    <p>
                      <span>Name: {e.name}</span><br />
                      <span>Email:{e.email} </span><br />
                      <span>Password:{e.password}</span><br />



                      <button className="edit-button" onClick={() => {
                        props.upval(e)
                      }}>
                        <Link to="/uppTenant"> <svg className="edit-svgIcon" viewBox="0 0 512 512">
                        </svg></Link>

                      </button>



                      <button className="delete-button"
                        onClick={() => {
                          deletetenant(e.id);
                        }}>
                        <svg className="delete-svgIcon" viewBox="0 0 448 512">
                        </svg>
                      </button>




                    </p>
                  </div>
                </>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tenants