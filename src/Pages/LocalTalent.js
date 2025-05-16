import React from "react";
import "../Styles/LocalTalent.css";
import "bootstrap/dist/css/bootstrap.min.css";

import singerImg from "../images/singer.jpg";
import musicWriterImg from "../images/music_writer.jpg";
import flipSideAudio from "../assets/TRIPP- FLIP SIDE (PROD BY SOL DRE).mp3";

const LocalTalent = () => {
  return (
    <div className="main_container" id="main-color">
      <h1 className="header text-center my-4">
        Akute, Ogun State, Nigeria <br />
        <span className="text-muted">*Local Talent*</span>
      </h1>

      <div className="container-fluid">
        <hr />

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
                    <div className="flip-box-back bg-dark text-light p-3">
                      <p>
                        <b className="text-info">TRIPP - FLIP SIDE</b>
                        <br />
                        To listen to his song, click below!
                        <br />
                        <a href={flipSideAudio} target="_blank" rel="noreferrer">
                          <button className="button button1 mt-2">
                            Song Title: FLIP SIDE
                          </button>
                        </a>
                        <br />
                        To hear more songs by TRIPP click below!
                        <br />
                        <a
                          href="https://cochav4884.github.io/Akute-Ogun-State-Nigeria/roc.html"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <button className="button button1 mt-2">
                            More songs by: TRIPP
                          </button>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text below the flip card */}
                <div className="text-below-card mt-3">
                  <h4 className="space">
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
  );
};

export default LocalTalent;
