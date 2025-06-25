import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../Styles/About.css";

import cityOfPeace from "../images/City of Peace.jpg";
import rainforest from "../images/rainforest.webp";
import population from "../images/population.png";

function About() {
  useEffect(() => {
    const map = L.map("map").setView([6.670515, 3.413232], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([6.670515, 3.413232])
      .addTo(map)
      .bindPopup("<b>Akute, Ogun State</b><br>Located here.")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div className="main_container">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Akute, Ogun State, Nigeria</h1>
        </header>
        <h2 className="section">* Learn More About Akute! *</h2>
        <hr />

        <div className="container">
          <p className="custom-p">Map of Akute, Ogun State, Nigeria</p>
          <div
            className="page-image"
            id="map"
            style={{ height: "400px", width: "100%", marginBottom: "1rem" }}
          ></div>

          <hr />

          <section className="mb-5">
            <p className="custom-p">
              Akute, Ogun State, Nigeria is considered an International City of
              Peace.
            </p>
            <img
              className="img-fluid"
              src={cityOfPeace}
              alt="City of Peace in Akute, Ogun State, Nigeria"
              id="picture"
            />

            <p className="custom-p">
              For more information, please click on the link{" "}
              <a
                href="https://www.internationalcitiesofpeace.org/cities-listing/akute-ogun-nigeria/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-link2" type="button">
                  Click Me
                </button>
              </a>
            </p>
          </section>
          <hr />

          <section className="mb-5">
            <p className="custom-p">
              Ogun State, Nigeria: created in 1976, bounded by the Oyo and Osun
              states to the north, Lagos state to the south, Ondo state to the
              east, and the Republic of Benin to the west. Ogun state produces
              rice, corn, cassava, yams, plantains, and bananas, and is covered
              predominantly by tropical rainforest.
            </p>
            <img
              className="img-fluid"
              src={rainforest}
              alt="Tropical rainforest in Ogun State, Nigeria"
              id="picture1"
            />

            <p className="custom-p">
              For more information, please click on the link{" "}
              <a
                href="https://www.britannica.com/place/Ogun-state-Nigeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-link2" type="button">
                  Click Me
                </button>
              </a>
            </p>
          </section>
          <hr />

          <section className="mb-5">
            <p className="custom-p">
              Nigeria: Home to several indigenous pre-colonial states, a
              multi-national state of more than 250 ethnic groups who speak 500
              distinct languages. Nigeria became independent on October 1, 1960,
              and is a federation of 36 states and one federal capital
              territory. Nigeria is ruled by State and Local Governments.
            </p>
            <img
              className="img-fluid"
              src={population}
              alt="Population statistics of Nigeria"
              id="picture2"
            />

            <p className="custom-p">
              For more information, please click on the link{" "}
              <a
                href="https://en.wikipedia.org/wiki/Nigeria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn-link2" type="button">
                  Click Me
                </button>
              </a>
            </p>
          </section>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default About;
