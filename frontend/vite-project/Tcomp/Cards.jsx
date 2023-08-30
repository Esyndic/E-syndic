import React from "react";
import "./cards.css";
function Cards() {
  return (
    <div id="tcards">
      <div class="tcard">
        <div class="card-overlay"></div>
        <div class="card-inner">
          Send <br /> claims
        </div>
      </div>
      <div class="tcard">
        <div class="card-overlay"></div>
        <div class="card-inner">
          Check <br /> Factures
        </div>
      </div>
      <div class="tcard">
        <div class="card-overlay"></div>
        <div class="card-inner">
          Send <br /> Feedbacks
        </div>
      </div>
    </div>
  );
}

export default Cards;
