import React from "react";
import amos from "../images/example_pastor_nigeria.jpg"; // You can replace this with Amos' image if you have one
import "../Styles/CRA_Biography.css";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Amos = () => {
  const handlePrint = () => {
    window.print();
  };

  const generatePDF = () => {
    const input = document.getElementById("amos-content");
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
      pdf.save("Pastor_Amos_Onogwu_Biography.pdf");
    });
  };

  return (
    <div className="main_container">
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

        <header className="page-header text-center mb-4">
          Pastor Amos Onogwu
        </header>

        <div
          className="row align-items-start"
          id="amos-content"
          style={{
            backgroundColor: "#ffd700",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          {/* Image on left */}
          <div className="col-md-5 mb-4">
            <img
              src={amos}
              alt="Portrait of Example Pastor Nigeria"
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
                <p className="col-md-7 born">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti perspiciatis illum nulla recusandae quam molestias.
                  Quaerat perferendis quidem nesciunt ipsum optio consectetur
                  placeat nam nostrum quia fugiat sunt iure, eaque tenetur,
                  veniam minus voluptas id non maxime assumenda doloribus dolor
                  expedita corporis atque sed! Eum expedita nihil nobis quia
                  voluptatum.
                </p>
              </section>

              <section>
                <h2>Family and Suport</h2>
                <p className="born">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, eum ipsa mollitia qui consequuntur veniam eos soluta
                  ratione doloribus expedita vitae provident, non quis cum enim
                  accusamus. Temporibus enim quis ratione harum assumenda, quasi
                  expedita accusamus mollitia officiis quod quaerat consequuntur
                  explicabo iure soluta esse cumque. Dolorum error iste
                  deserunt.
                </p>
              </section>

              <section>
                <h2>Ministry</h2>
                <p className="born">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente, minus! Recusandae eum rem nisi sunt quaerat rerum
                  porro numquam et laudantium sapiente suscipit in, delectus
                  voluptate maiores voluptas assumenda quos aperiam quisquam
                  reprehenderit sit distinctio culpa commodi ipsam! Neque aut,
                  quaerat voluptate hic perspiciatis distinctio perferendis
                  pariatur aperiam dolor officia.
                </p>
              </section>

              <section>
                <h2>Community Involvement</h2>
                <p className="born">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Dicta asperiores error, dolores tempora sed ex sequi atque
                  illum provident non dolor, unde assumenda minima, architecto
                  optio totam natus quo corporis. Exercitationem maxime
                  mollitia, molestias, consequuntur officiis quasi repudiandae
                  laborum nihil repellendus odit aspernatur! Neque iste
                  laudantium similique nostrum. Laudantium, inventore.
                </p>
              </section>

              <section>
                <h2>Legacy</h2>
                <p className="born">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quaerat, ducimus velit quibusdam asperiores doloremque,
                  dolores doloribus perspiciatis nemo cupiditate eos sequi,
                  magni impedit eius ullam maxime odio. Laudantium doloremque,
                  eligendi corrupti architecto odit voluptatum incidunt maxime
                  consectetur corporis cupiditate natus sit quis dicta,
                  temporibus facilis aspernatur molestiae officia cumque.
                </p>
              </section>

              <section>
                <h2>Personal Life</h2>
                <p className="born">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit dolorem porro cum esse, pariatur eligendi eos
                  recusandae voluptas assumenda veniam aspernatur beatae ratione
                  nemo reiciendis corrupti necessitatibus nostrum natus omnis
                  quasi rem similique quidem aliquam, minima quos! Rerum iste
                  nisi odio veritatis modi, animi minus earum aut illo
                  temporibus ex!
                </p>
              </section>

              <br />
              <br />

              <p className="text-center fs-1">*Last Update June 25, 2025*</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amos;
