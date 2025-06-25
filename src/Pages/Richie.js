import React from "react";
import richie from "../images/Richie.jpg";
import "../Styles/CRA_Biography.css";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Richie = () => {
  const handlePrint = () => {
    window.print();
  };

  const generatePDF = () => {
    const input = document.getElementById("richie-content");
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Richie_Osborne_Biography.pdf");
    });
  };

  return (
    <div className="main_container" id="richie-content">
      <div className="container">
        {/* Action buttons */}
        <div className="d-flex justify-content-end mb-3">
          <button
            className="btn-link"
            onClick={handlePrint}
            aria-label="Print biography page"
          >
            🖨️ Print
          </button>
          <button
            className="btn-link"
            onClick={generatePDF}
            aria-label="Download biography as PDF"
          >
            📄 Download PDF
          </button>
        </div>

        <header className="page-header text-center mb-4">Richie Osborne</header>

        <div
          className="row align-items-start"
          id="richie-content"
          style={{
            backgroundColor: "#ffd700",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          {/* Image on left */}
          <div className="col-md-5 mb-4">
            <img
              src={richie}
              alt="Portrait of Richie Osborne"
              className="page-image img-fluid"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 6px #000",
              }}
            />
          </div>

          {/* Biography content on right */}
          <div className="col-md-7 born">
            <article>
              <section>
                <h2>Early Life</h2>
                <p className="born">
                  I was born third out of four children to my mother Josie and
                  father Osborn. I was brought up in the West side of Africa,
                  Nigeria from Edo state. I was a very quiet young boy who
                  preferred to hang on my own. I grew up loving spaghetti which
                  is still my favorite dish to this day. Red and black are my
                  best colors which you can see me wear a lot when I go out
                  sightseeing. Night life is my favorite time of day. I love the
                  comradery, joy, and lights as I walk down the street.
                </p>
              </section>

              <section>
                <h2>Music Passion</h2>
                <p className="born">
                  I had a strong passion for music growing up. The lyrics, the
                  melody, and how it was put together. I love listening to music
                  while chilling with others or by myself. I started playing
                  around with lyrics and found that I could write them pretty
                  easily. I could hear the beat...the melody in my head as I was
                  writing down the words. Along with some help with a few
                  friends, I was able to produce a few songs that I hope will
                  gain exposure and put me out there as a singer.
                </p>
              </section>

              <section>
                <h2>Spiritual Journey</h2>
                <p className="born">
                  I love honest people. Meeting Corinne was a real experience
                  for me. She was God sent. We met on September 14, 2021 early
                  in the morning. Before I met Corinne I was really negative
                  about everything in my life. Corinne opened me up to see
                  everything in my life in a positive way. She spoke to me about
                  God and it was surprising for me because I did not know that
                  other people could be so spiritual. We began speaking
                  spiritually in all aspects of our lives...especially after I
                  returned to church and got to know Pastor Amos Onogwu.
                  Together Pastor Amos Onogwu and Corinne have led me in a more
                  positive direction in my life. They guide me spiritually and
                  emotionally helping me see that there is a brighter future for
                  me and that I have a purpose through God.
                </p>
              </section>

              <section>
                <h2>Work Experience</h2>
                <p className="born">
                  When I was about 16 years old I was working at a factory that
                  made bread. I was a bit tired one day and when I was putting
                  ingredients into the big mixer, I fell and the mixer cut my
                  face open. Someone at the factory tried to do first aid on me
                  and then sent me home. Thankfully my mom was a nurse at the
                  time and she was able to tend to my wound and stitch up my
                  face. I tried working in foreign exchange trading for a while.
                  I really enjoy it and will most likely get back into it once I
                  have the time to. Foreign exchanging helped me to not be
                  greedy with money because I had to be careful and sometimes
                  accept low wins or risk losing all my money. I loved learning
                  new ways to understand the exchange and run numbers to make
                  more money at the end of the day. Even when those extra
                  earnings were only pennies more.
                </p>
              </section>

              <section>
                <h2>Core Values</h2>
                <p className="born">
                  My core and values are integrity, honesty and kindness. I help
                  others when I can and always am grateful when someone offers
                  help to me. At first it was hard to accept help from others,
                  but it is what we should do for each other without expecting
                  something in return.
                </p>
              </section>
              <section className="section-richie">
                <header>
                  <h1>Music by: TRIPP</h1>
                </header>
                <hr />
                
                <h2 className="section text-dark">Song List:</h2>
                <ol>
                  <li>
                    <a
                      href="/assets/trippFlip_SideProdBySolDre.mp3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-link3">FLIP SIDE</button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/tripp_Freestyle1Mastered.mp3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-link3">FREESTYLE</button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="assets/goGerman_TrippMastered.mp3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-link3">GO GERMAN</button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/backChick_TrippFtSolDre.mp3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btn-link3">BAD CHICK</button>
                    </a>
                  </li>
                </ol>
              </section>

              <p className="text-center fs-1 mt-4">*Last Update June 25, 2025*</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Richie;

