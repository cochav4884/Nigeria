import React from 'react';
import '../Styles/Church.css';

// Image imports
import HBG_bw3 from '../images/HBG_bw3.jpg';
import HBG_bw2 from '../images/HBG_bw2.jpg';
import HBG_bw4 from '../images/HBG_bw4.jpg';

const Church = () => {
  return (
    <main className="church-main">
      <header>
        <h1 className="church-header">
          Akute, Ogun State, Nigeria <br />
          *Church Page*
        </h1>
      </header>

      <section className="church-section">
        <img
          src={HBG_bw3}
          alt="HBG Church building"
          className="church-image"
          id="church-image-1"
        />
        <p>
          This beautiful community church is in the heart of Akute, Ogun State,
          Nigeria. It's a place to worship, gather with friends, repent & be
          forgiven, and enjoy the Holy Spirit... the Heartbeat of God (HBG) is
          the place for you.
        </p>
      </section>

      <section className="church-section">
        <img
          src={HBG_bw2}
          alt="HBG Church building"
          className="church-image"
          id="church-image-2"
        />
        <p>
          Home away from home, people from all over town gather to support each
          other in spiritual growth. The inspiring Pastor Amos Onogwu leads the
          congregation with love, guidance, and obedience.
        </p>
      </section>

      <section className="church-section">
        <img
          src={HBG_bw2}
          alt="HBG Church building"
          className="church-image"
          id="church-image-3"
        />
        <p>
          Pastor Amos Onogwu offers a safe place to open up to God, feel His
          healing through the Holy Spirit, and connect with fellow disciples.
          Come speak with Pastor Amos and discover your purpose through Jesus
          Christ and the Fruit of the Spirit.
        </p>
      </section>

      <section className="church-section">
        <img
          src={HBG_bw2}
          alt="HBG Church building"
          className="church-image"
          id="church-image-4"
        />
        <p>
          Service is held on Sundays at 9:00 AM. Supporting staff includes:
          (staff names/titles here). Thank you for your interest in our church,
          and may God bless you and your loved ones in Jesus's Mighty Name...
          AMEN!
        </p>
      </section>

      <h2 className="church-subheader">*Heartbeat of God*</h2>
      <div className="church-contact">
        <p>Address: Akute, Ogun State, Nigeria</p>
        <p>
          Contact: <br />
          (phone number) <br />
          (email)
        </p>
      </div>

      <section className="church-section">
        <img
          src={HBG_bw2}
          alt="Community church building in Akute"
          className="church-image"
          id="church-image-5"
        />
        <p>
          This beautiful community church is in the heart of the town of Akute,
          Ogun State, Nigeria. Need a place to worship, a place to gather amongst
          friends, a place to repent & be forgiven, a place to enjoy the Holy
          Spirit... the Heartbeat of God (HBG) is the place for you.
        </p>
      </section>

      <h2 className="church-subheader">*Pastor Amos Onogwu*</h2>
      <section className="church-section">
        <img
          src={HBG_bw4}
          alt="Pastor Amos Onogwu portrait"
          className="church-image"
          id="church-image-6"
        />
        <p>
          Pastor Amos Onogwu has been with HBG since 2010. Born in Akute, he was
          raised by a strong Christian family. After completing his education,
          Pastor Amos felt called by God to serve as a leader.
        </p>
      </section>

      <h2 className="church-subheader">*Interview with Pastor Amos Onogwu*</h2>
      <section className="church-interview">
        <blockquote>
          <p>
            <strong>Richie:</strong> What is the first thought that comes to mind
            when you think of this Church building?
          </p>
          <p>
            <strong>Pastor Amos Onogwu:</strong> "This building holds memories,
            life-changing stories, and transformations. It has seen countless
            moments of prayer, faith, and love. We consider it holy ground."
          </p>

          <p>
            <strong>Richie:</strong> What does HBG mean to you personally?
          </p>
          <p>
            <strong>Pastor Amos Onogwu:</strong> "HBG is a place where people
            come together to build a relationship with Christ. It's a place where
            we all grow, as individuals and as a community."
          </p>
        </blockquote>
      </section>
    </main>
  );
};

export default Church;
