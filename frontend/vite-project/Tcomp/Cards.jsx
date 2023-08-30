import React from "react";
import { Link } from "react-router-dom";

import "./cards.css";
function Cards() {
  return (
    <div id="tcards">
      <article class="article-wrapper">
        <div>
          <img
            class="rounded-lg container-project"
            src="https://www.kindpng.com/picc/m/176-1763157_transparent-background-employees-icon-hd-png-download.png"
          />
        </div>
        <div class="project-info">
          <div class="flex-pr">
            <div class="project-title">
              <Link to="/claims">
                Send <br/>Claims
              </Link>
            </div>
          </div>
        </div>
      </article>
      <article class="article-wrapper">
        <div>
          <img
            class="rounded-lg container-project"
            src="https://png.pngtree.com/png-vector/20191011/ourlarge/pngtree-invoice-icon-png-image_1817550.jpg"
          />
        </div>
        <div class="project-info">
          <div class="flex-pr">
            <div class="project-title">
              <Link to="/tenant/factures">
                Check Factures
              </Link>
            </div>
          </div>
        </div>
      </article>
      <article class="article-wrapper">
        <div>
          <img
            class="rounded-lg container-project"
            src="https://www.pngitem.com/pimgs/m/76-768106_feedback-icon-png-transparent-png.png"
          />
        </div>
        <div class="project-info">
          <div class="flex-pr">
            <div class="project-title">
              <Link to="/tenant/feedbacks">
                Send Feedbacks
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Cards;
