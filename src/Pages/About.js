import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"; // Make sure you installed leaflet and imported the CSS

function About() {
  useEffect(() => {
    // Initialize the map only once after component mounts
    const map = L.map("map").setView([6.670515, 3.413232], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([6.670515, 3.413232])
      .addTo(map)
      .bindPopup("<b>Akute, Ogun State</b><br>Located here.")
      .openPopup();

    // Cleanup function to remove map on unmount
    return () => {
      map.remove();
    };
  }, []);

  useEffect(() => {
    // Dropdown toggle logic
    const dropdownButtons = document.getElementsByClassName("dropdown-btn");

    const handleClick = function () {
      this.classList.toggle("active");
      const dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    };

    for (let i = 0; i < dropdownButtons.length; i++) {
      dropdownButtons[i].addEventListener("click", handleClick);
    }

    // Cleanup event listeners on unmount
    return () => {
      for (let i = 0; i < dropdownButtons.length; i++) {
        dropdownButtons[i].removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      {/* Map container */}
      <div
        id="map"
        style={{ height: "400px", width: "100%", marginBottom: "1rem" }}
      ></div>

      {/* Example dropdown menu */}
      <button className="dropdown-btn">Dropdown</button>
      <div className="dropdown-container" style={{ display: "none" }}>
        <p>Dropdown content here</p>
      </div>
    </div>
  );
}

export default About;
