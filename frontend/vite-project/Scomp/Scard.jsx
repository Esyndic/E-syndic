import React from 'react'
import { Link } from 'react-router-dom'

function Scard() {
  return (
    <div>
      <Link to = "/personnels" />
      <div class="card">
        <div class="content">
          <div class="back">
            <div class="back-content">
              <svg stroke="#FFFFFF" xmlns: xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50px" width="50px" fill="#FFFFFF">
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                 <img class="image" src="https://icons.veryicon.com/png/o/miscellaneous/civil-affairs-icon-summary/tenant-management-1.png"/>
              </svg>
              <strong>Personnels</strong>
            </div>
          </div>
          <div class="front">
            <div class="img">
              <div class="circle">
              </div>
              <div class="circle" id="right">
              </div>
              <div class="circle" id="bottom">
              </div>
            </div>
            <div class="front-content">
              <small class="badge">description</small>
              <div class="description">
                <div class="title">
                  <p>uzhfiuzrfzhgzdfiuuzrff</p>
                </div>
                <p class="card-footer">
                  dar num : 50&nbsp; | &nbsp; bloc 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link/>
    </div>

    




  )
}

export default Scard