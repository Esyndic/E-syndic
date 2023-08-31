import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Personnel.css';
import SNavBar from "../Scomp/SNavBar.jsx"




function Personnels(props) {



  const [data, setdata] = useState([]);
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/personnel/getAll")
      .then((result) => { setdata(result.data); })
      .catch(function (error) { console.log(error); });
  }, [trigger]);


  const deletepersonnel = (id) => {
    axios
      .delete(`http://localhost:3000/api/personnel/delete/${id}`)
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
            <Link to="/addPer">Add Personnel</Link>
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
                  </div><div className="card-title">
                    <p>
                      Name: {e.name}<br />
                      <span>Num: {e.num}</span><br />
                      <span>Email:{e.email} </span><br />
                      <span>Role:{e.role}</span><br />



                      <button className="edit-button" onClick={() => {
                        props.upval(e)
                      }}>
                        <Link to="/uppPers"> <svg className="edit-svgIcon" viewBox="0 0 512 512">
                        </svg></Link>

                      </button>



                      <button className="delete-button"
                        onClick={() => {
                          deletepersonnel(e.idpersonnel);
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







  );

}

export default Personnels;
