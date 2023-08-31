import React, { useState, useEffect } from "react"
import axios from "axios"
import SNavBar from "../Scomp/SNavBar"
import "./Facture.css"
function FactureList() {
  const [factures, setFactures] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/facture/get")
      .then((response) => {
        console.log(response.data)
        setFactures(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <SNavBar />
      <section className="facture-list-container">
        <h1>Facture List</h1>
        <div class="card">
          <ul className="facture-list">
          {factures.map((facture) => {
           return (
             <li key={facture.id
             }>
              <p className="Tenant">Tenant: {facture.id}</p>
              <p>Creation Date: {facture.date}</p>
              <p>Rent Facture: {facture.location}</p>
              <p>STEG Facture: {facture.STEG}</p>
              <p>SONED Facture: {facture.SONEDE}</p>
              <p>Topnet Facture: {facture.Topnet}</p>
              <p>Notes: {facture.decription
}</p>
            </li>
            ) 
})}
        </ul>
       </div>

      
      </section>
    </div>
  )
}

export default FactureList
