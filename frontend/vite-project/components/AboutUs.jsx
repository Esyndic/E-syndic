import React from 'react';
import ResponsiveAppBar from '../components/NavBar';
import './AboutUs.css';


function AboutUs() {
  return (

    <div>
        <ResponsiveAppBar/>

        <div class="cardContainer">
  <div class="card">
    <p class="city">E-Syndic: Your complete and secure platform</p> <br />

    <div class="checkbox-wrapper-31">
      <input checked="" type="checkbox" />
      <svg viewBox="0 0 35.6 35.6">
        <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
        <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
      </svg>
      <p class="text">A simple and educational software for efficient and fast management that simplifies the work of the Syndicate Council</p>
    </div>

    <div class="checkbox-wrapper-31">
      <input checked="" type="checkbox" />
      <svg viewBox="0 0 35.6 35.6">
        <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
        <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
      </svg>
      <p class="text">Automated accounting ensures compliance with the law.</p>
    </div>

    <div class="checkbox-wrapper-31">
      <input checked="" type="checkbox" />
      <svg viewBox="0 0 35.6 35.6">
        <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
        <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
        <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
      </svg>
      <p class="text">No more Excel or accounting posting, copying and pasting in the journals and above all errors. Don't wait any longer, start now and take advantage of the full potential of web and mobile</p>
    </div>
  </div>
</div>

        
    </div>
    
  )
}

export default AboutUs