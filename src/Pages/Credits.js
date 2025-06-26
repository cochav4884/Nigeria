import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Credits.css"; // your custom styles

import afterRain from "../images/after_rain_bw1.jpg";

// const scrollToTop = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };

function Credits() {
  return (
    <div className="main_container">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Akute, Ogun State, Nigeria</h1>
          <p>
            Developed by [Corinne Padilla & Richie Osborne]. Content from
            community contributors.
          </p>
        </header>
        <h2 className="section">* Credits *</h2>
        <div className="container">
          <h3>Website Design & Development</h3>
          <p>
            <strong>Corinne Padilla</strong> - Frontend Development, UI/UX
            Design, Backend Development, Database Management
          </p>
          <p>
            <strong>Richie Osborne</strong> - Photographer, Interviewer,
            Collaborator
          </p>

          <h3>Content Contributors</h3>
          <p>
            Local residents and community members who provided valuable insights
            and content.
          </p>

          <h3>Special Thanks</h3>
          <p>
            To all the residents of Akute for their support and contributions to
            this project.
          </p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="card-header">After Rain</div>
          <div className="card-body">
            <img src={afterRain} alt="After Rain" className="card-img" />
          </div>
          <div className="card-footer">
            Photo By: Richie Osborne &copy; 2022 | ROC
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credits;
