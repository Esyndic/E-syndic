import React from 'react'
import { Link } from 'react-router-dom'

function Scard() {
  return (
    

    
<div>
  
<article class="article-wrapper">
  <Link to = "/personnels">
  <div class="rounded-lg container-project">
  <img class="rounded-lg container-project" src="https://webgenery-images.s3.eu-west-1.amazonaws.com/5469FAAE7685D490160164/espace_dynamique/3/538-1.jpg"/>
    </div>
    <div class="project-info">
      <div class="flex-pr"></div>
        <div class="project-title text-nowrap">Personnels</div>
    </div>
    </Link>
</article>

<article class="article-wrapper">
  <Link to = "/tenants">
  <div class="rounded-lg container-project">
  <img class="rounded-lg container-project" src="https://assets-global.website-files.com/5f18a24d02bace2ac2d05bac/5fef987e79132384aae6b6ad_landlord-excessive-normal-wear-tear-rental-properties-1920_d5c9cd489407a6c4ae3ce89745072131.png"/>
    </div>
    <div class="project-info">
      <div class="flex-pr"></div>
        <div class="project-title text-nowrap">Tenants</div>
    </div>
    </Link>
</article>


<article class="article-wrapper">
  <Link to = "/feedback">
  <div class="rounded-lg container-project">
  <img class="rounded-lg container-project" src="https://i0.wp.com/ketto.blog/wp-content/uploads/2021/09/shutterstock_1100033681-min-1.jpg?fit=5000%2C2813&ssl=1"/>
    </div>
    <div class="project-info">
      <div class="flex-pr"></div>
        <div class="project-title text-nowrap">Feedbacks</div>
    </div>
    </Link>
</article>

<article class="article-wrapper">
  <Link to = "//tenant/factures">
  <div class="rounded-lg container-project">
  <img class="rounded-lg container-project" src="https://www.vilogi.com/images/externaliser-comptabilite-syndic-copropriete-15.jpg"/>
    </div>
    <div class="project-info">
      <div class="flex-pr"></div>
        <div class="project-title text-nowrap">Factures</div>
    </div>
    </Link>
</article>
</div>


  )
}

export default Scard