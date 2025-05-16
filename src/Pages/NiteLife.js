import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/NiteLife.css"; // your custom styles

// Import images
import gasStation1 from "../images/gas_station1.jpg";
import gasStation2 from "../images/gas_station2.jpg";
import niteLife1 from "../images/nitelife1.jpg";
import img2 from "../images/IMG-20220504-WA0004_2.jpg";
import clothingStore1 from "../images/clothing_store1.jpg";
import groceryStore2 from "../images/grocery_store2.jpg";
import niteLife2 from "../images/nitelife2.jpg";
import niteLife3 from "../images/nitelife3.jpg";
import niteLife4 from "../images/nitelife4.jpg";
import niteLife6 from "../images/nitelife6.jpg";
import niteLife7 from "../images/nitelife7.jpg";
import niteLife8 from "../images/nitelife8.jpg";

const NiteLife = () => {
  return (
    <div className="main_container">
      <h1 className="header">
        Akute, Ogun State, Nigeria <br /> <em>*Nitelife*</em>
      </h1>

      <div className="container">
        <hr />
        <section className="section-nitelife">
          <img src={gasStation1} className="nitelife-pics" alt="Gas Station 1" />
          <img src={gasStation2} className="nitelife-pics" alt="Gas Station 2" />
          <img src={niteLife1} className="nitelife-pics" alt="Nite Life 1" />
        </section>

        <br />

        <section className="section-nitelife">
          <img src={img2} className="nitelife-pics" alt="IMG 2" />
          <img src={clothingStore1} className="nitelife-pics" alt="Clothing Store 1" />
          <img src={groceryStore2} className="nitelife-pics" alt="Grocery Store 2" />
        </section>

        <br />

        <section className="section-nitelife">
          <img src={niteLife2} className="nitelife-pics" alt="Nite Life 2" />
          <img src={niteLife3} className="nitelife-pics" alt="Nite Life 3" />
          <img src={niteLife4} className="nitelife-pics" alt="Nite Life 4" />
        </section>

        <br />

        <section className="section-nitelife">
          <img src={niteLife6} className="nitelife-pics" alt="Nite Life 6" />
          <img src={niteLife7} className="nitelife-pics" alt="Nite Life 7" />
          <img src={niteLife8} className="nitelife-pics" alt="Nite Life 8" />
        </section>

        <hr />
      </div>
    </div>
  );
};

export default NiteLife;
