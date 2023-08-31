import React from 'react';
import ResponsiveAppBar from '../components/NavBar';
import './AboutUs.css';


function AboutUs() {
  return (

    <div id = "ab-out">
        <ResponsiveAppBar/>

       


    <div class="abcard">
      <p class="abcard-title">Welcome to Syndic Website</p>
      <p class="small-desc">
      Welcome to our Syndic website! We're dedicated to providing top-notch
          solutions for all your syndication needs. Our experienced team is
          here to assist you every step of the way, ensuring seamless and
          efficient processes.
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>

    <div class="abcard">
      <p class="abcard-title">Our Services</p>
      <p class="small-desc">
      Explore our wide range of syndication services tailored to meet your
          unique requirements. From content distribution to audience engagement,
          we've got you covered with innovative solutions that deliver results.
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>

    <div class="abcard">
      <p class="abcard-title">Why Choose Us</p>
      <p class="small-desc">
      With years of industry experience, we take pride in being a trusted
          partner for syndication. Our commitment to excellence, attention to
          detail, and client-centric approach set us apart. Join us in shaping
          the future of syndication.
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>

    </div>
    
  )
}

export default AboutUs