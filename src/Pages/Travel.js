// ./Pages/Travel.js
import React, { useState, useEffect } from "react";
import "../Styles/Travel.css"; // Custom styles
import { FaGlobe } from "react-icons/fa";

function Travel() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Set browser tab title on load
  useEffect(() => {
    document.title = "Plan Your Visit | Akute, Ogun State";
  }, []);

  return (
    <div className="main_container">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Akute, Ogun State, Nigeria</h1>
        </header>

        <h2 className="section">
          * Travel Information - Plan Your Visit to Akute! *
        </h2>

        <div className="container">
          <h3>* Visa & Passport Information *</h3>

          <p>
            If you're planning to visit Akute, Ogun State, Nigeria, make sure
            your travel documents are in order. Visitors may need a valid visa
            or passport issued through official Nigerian government services.
          </p>

          <h3>* Official Resources *</h3>
          <p>
            Use the dropdown below to access visa application, passport
            services, and other travel resources:
          </p>

          <div className="travel-dropdown-container">
            <button className="travel-dropdown" onClick={toggleDropdown}>
              <FaGlobe
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              {isDropdownOpen ? "Hide Travel Links ▲" : "Show Travel Links ▼"}
            </button>

            <div className={`dropdown-links ${isDropdownOpen ? "show" : ""}`}>
              <a
                href="https://www.nigeriaembassyusa.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nigerian Embassy (Washington, D.C.)
              </a>
              <a
                href="https://nigeria-consulate-atl.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nigerian Consulate General (Atlanta)
              </a>
              <a
                href="https://immigration.gov.ng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nigerian Immigration Service
              </a>
            </div>
          </div>

          <p>
            This site is not affiliated with or endorsed by the Nigerian
            government. We provide links to public resources to help our
            visitors navigate travel planning more easily.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Travel;
