import React from "react";
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const PrivacyPolicy = () => {
  return (
    <div className="main_container">
      <h1 className="header">
        Akute, Ogun State, Nigeria
        <br /> *Terms of Use*
      </h1>

      <div className="sidenav">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/church">HBG Church</a>
        <a href="/residents">Residents</a>
        <a href="/nitelife">Nite Life</a>
        <a href="/localtalent">Local Talent</a>

        <button className="dropdown-btn">
          Dropdown <FontAwesomeIcon icon={faCaretDown} />
        </button>

        <div className="dropdown-container">
          <a href="https://ng.usembassy.gov/" target="_blank" rel="noreferrer">
            Consulate Nigeria
          </a>
          <a href="https://www.usembassy.gov/" target="_blank" rel="noreferrer">
            US Embassy
          </a>
          <hr />
          <a href="/contact">Contact Us</a>
        </div>

        <hr />

        <div className="footer text-center fs-2">
          <p className="text-light">Footer</p>
          <p className="text-light">&copy; 2022 | MFCP & ROC</p>

          <p className="owners">Creator:</p>
          <a href="/cp" target="_blank" rel="noreferrer">
            <p className="name">Corinne Padilla</p>
          </a>

          <p className="owners">Photographer:</p>
          <a href="/roc" target="_blank" rel="noreferrer">
            <p className="name">Richie Osborne</p>
          </a>

          <p className="owners">Pastor:</p>
          <a href="/pastor" target="_blank" rel="noreferrer">
            <p className="name">Amos Onogwu</p>
          </a>

          <p>
            <a href="/pripol">Privacy Policy</a>
          </p>
          <p>
            <a href="/tofu">Terms of Use</a>
          </p>
          <p>
            <a href="/credits">Credits</a>
          </p>

          <img
            className="fimg"
            src="img/looking out bw2.jpg"
            alt="Footer"
            height="200"
          />
        </div>
      </div>

      <div className="pp-content text-light">
        <h1>PRIVACY POLICY</h1>
        <p>
          Home / https://cochav4884.github.io/cochav4884github.io/ Website
          Policies / Privacy Policy
          <br />
          This site is committed to protecting the personal privacy of visitors
          and guests using its Internet site.
        </p>

        <ul className="pp-ul">
          <li>
            <h2>PRIVACY POLICY</h2>
          </li>
          <li>
            <h2>COVERAGE</h2>
          </li>
          <p>This privacy policy applies to the full site listed above.</p>

          <li>
            <h2>DEFINITIONS OF TYPES OF INFORMATION</h2>
          </li>
          <p>
            The site collects some information automatically upon your visit,
            like IP addresses and browser type, for analytics. It may also
            collect voluntarily submitted data such as names and email addresses
            when users fill out forms.
          </p>

          <li>
            <h2>USE OF INFORMATION</h2>
          </li>
          <p>
            Any collected data is used strictly to improve website performance,
            personalize content, and respond to user inquiries. Data is not sold
            or shared with third parties without consent unless required by law.
          </p>

          <li>
            <h2>COOKIES</h2>
          </li>
          <p>
            Cookies may be used to remember user preferences and enable
            functionality. You can disable cookies in your browser settings.
          </p>

          <li>
            <h2>DATA SECURITY</h2>
          </li>
          <p>
            We use reasonable technical and organizational measures to protect
            your data. However, no online service is 100% secure.
          </p>

          <li>
            <h2>THIRD-PARTY LINKS</h2>
          </li>
          <p>
            Our site may contain links to external websites. We are not
            responsible for their privacy practices or content.
          </p>

          <li>
            <h2>CHILDREN’S PRIVACY</h2>
          </li>
          <p>
            This website is not intended for children under 13. We do not
            knowingly collect personal data from minors.
          </p>

          <li>
            <h2>UPDATES TO THIS POLICY</h2>
          </li>
          <p>
            We may update this policy periodically. Changes will be posted on
            this page with a new effective date.
          </p>

          <li>
            <h2>CONTACT US</h2>
          </li>
          <p>
            If you have any questions about this privacy policy, please{" "}
            <a href="/contact">contact us</a>.
          </p>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
