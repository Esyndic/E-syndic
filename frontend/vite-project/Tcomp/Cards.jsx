import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

function Cards() {
  return (
    <div id="tcards">
      <article class="article-wrapper">
      <Link to="/claims">
        <div>
          <img
            class="rounded-lg container-project"
            src="data:image/png;base64,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"
          />
        </div>
        <hr color="black"/>
        <div class="project-info">
          <div class="flex-pr">
            <div class="project-title">
              
                Send <br />
                Claims
              
            </div>
          </div>
        </div>
        </Link>
      </article>
      <article class="article-wrapper">
      <Link to="/tenant/factures">
        <div>
          <img
            class="rounded-lg container-project"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIiIEO799VuH50uy3OH8p6tmxOc5tKmdWPWaJ4stBKDS-mSqOTpVGu0RIJeW93hgtyz_8&usqp=CAU"
          />
        </div>
        <hr color="black"/>
        <div class="project-info">
          <div class="flex-pr">
            <div class="project-title">
              
                Check
                <br /> Factures
              
            </div>
          </div>
        </div>
        </Link>
      </article>
    </div>
  );
}

export default Cards;
