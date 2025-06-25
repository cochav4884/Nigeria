import React from "react";
import "../Styles/LocalTalent.css";
import "bootstrap/dist/css/bootstrap.min.css";

import singerImg from "../images/singer.jpg";
import musicWriterImg from "../images/music_writer.jpg";
const LocalTalent = () => {
  return (
    <div className="main_container">
      <div className="container-fluid">
        <header>
          <h1 className="page-header">Akute, Ogun State, Nigeria</h1>
        </header>

        <h2 className="section">* Meet Akute's Local Talent! *</h2>

        <div className="container">
          {/* First Box */}
          <div className="box mb-4">
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-12 col-md-3 text-center">
                  <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                        <div className="bg-dark text-center">
                          <img
                            src={singerImg}
                            alt="TRIPP"
                            width="165"
                            height="200"
                            className="mb-2"
                          />
                          <img
                            src={musicWriterImg}
                            alt="TRIPP writing"
                            width="165"
                            height="200"
                          />
                        </div>
                      </div>
                      <div className="flip-box-back p-3">
                        <p>
                          <b>TRIPP - FLIP SIDE</b>
                          <br />
                          Listen Below!
                          <br />
                          <a
                            href="/assets/trippFlip_SideProdBySolDre.mp3"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="btn-link">FLIP SIDE</button>
                          </a>
                          <br />
                          Want more of TRIPP's music!
                          <br />
                          <a
                            href="//src/Pages/Richie.js"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <button className="btn-link">TRIPP</button>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Text below the flip card */}
                  <div>
                    <h4>
                      <b>Richie Osborne</b> <br />
                      Artist Name: TRIPP
                      <br />
                      Singer
                      <br />
                      Lyricist
                      <br />
                      Melodist
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalTalent;
