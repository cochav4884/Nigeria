import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Credits.css";
import { creditsData } from "../data/creditsData";

function Credits() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (item) => setModalImage(item);
  const closeModal = () => setModalImage(null);

  return (
    <div className="main_container">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Akute, Ogun State, Nigeria</h1>
          <p>
            Developed by Corinne Padilla & Richie Osborne. Content from
            community contributors.
          </p>
        </header>

        <h2 className="section">* Credits *</h2>
        <div className="container">
          <h3>Website Design & Development</h3>
          <p>
            <strong>Corinne Padilla</strong> – Frontend Development, UI/UX
            Design, Backend Development, Database Management
          </p>
          <p>
            <strong>Richie Osborne</strong> – Photographer, Interviewer,
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

        <div className="card-container">
          {creditsData.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-header">{item.title}</div>
              <div className="card-body">
                <img
                  src={item.img}
                  alt={item.title}
                  className="card-img"
                  onClick={() => openModal(item)}
                />
              </div>
              <div
                className="card-footer"
                dangerouslySetInnerHTML={{ __html: item.credit }}
              />
            </div>
          ))}
        </div>

        {modalImage && (
          <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <img src={modalImage.img} alt={modalImage.title} />
              <div className="modal-caption">
                <h4>{modalImage.title}</h4>
                {modalImage.credit.includes("Unsplash") ? (
                  <p>
                    <a
                      href="https://unsplash.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#228b22", textDecoration: "underline" }}
                    >
                      {modalImage.credit}
                    </a>
                  </p>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: modalImage.credit }} />
                )}
              </div>
              <button className="modal-close" onClick={closeModal}>
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Credits;
