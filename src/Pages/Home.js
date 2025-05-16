import React, { useEffect } from "react";
import { Carousel as BootstrapCarousel } from "bootstrap";
import images from "../images"; // your images array
import "../Styles/Home.css";

const Home = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("imageCarousel");
    const carouselInstance = new BootstrapCarousel(carouselElement, {
      interval: 3000, // auto-slide every 3 seconds
      ride: "carousel",
      pause: "hover",
      wrap: true,
      keyboard: true,
    });

    return () => {
      carouselInstance.dispose(); // cleanup on unmount
    };
  }, []);

  return (
    <section className="main-container">
      <h2>Welcome to my Homepage</h2>
      <div id="imageCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* indicators */}
        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? "active" : ""}
              aria-current={idx === 0 ? "true" : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* carousel items */}
        <div className="carousel-inner">
          {images.map((imgSrc, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
            >
              <img
                src={imgSrc}
                className="d-block w-100"
                alt={`Slide ${idx + 1}`}
                style={{
                  borderRadius: "10px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>

        {/* controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Home;
