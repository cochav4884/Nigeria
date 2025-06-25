import React from "react";
import "../Styles/TermPrivacy.css";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const PrivacyPolicy = () => {
  return (
    <div className="main_container">
      <div className="container-fluid">
        <header className="page-header">
          <h1 className="header">Akute, Ogun State, Nigeria</h1>
        </header>
        <h2 className="section">*Privacy Policy*</h2>
        <hr />
        <ul className="container">
          <div id="top" aria-label="Top of Page" tabIndex="-1"></div>
          <h2 className="section text-dark">* Table of Contents *</h2>
          <li>
            <a className="btn-link" href="#S01">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S02">
              Coverage
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S03">
              Definitions of Types of Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S04">
              Use of Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S05">
              Cookies
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S06">
              Data Security
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S07">
              Third-Party Links
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S08">
              Children’s Privacy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S09">
              Do Not Sell My Personal Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S10">
              Updates to this Policy
            </a>
          </li>

          <li>
            <a className="btn-link" href="#S11">
              Contact Us
            </a>
          </li>
        </ul>
        <h3>Last updated June 24, 2025</h3>
        <div className="container">
          <ol>
            {/* 1. Privacy Poclicy Section */}
            <li>
              <h2 className="section-title" id="S01">
                Privacy Policy
              </h2>
              <p className="text">
                This privacy policy describes how we handle personal information
                collected through this website. By using this site, you agree to
                the collection and use of information in accordance with this
                policy.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 2. Coverage Section */}
            <li>
              <h2 className="section-title" id="S02">
                Coverage
              </h2>
              <p className="text">
                This privacy policy applies to the full site listed above.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 3. Definitions of Types of Information Section */}
            <li>
              <h2 className="section-title" id="S03">
                Definitions of Types of Information
              </h2>
              <p className="text">
                The site collects some information automatically upon your
                visit, like IP addresses and browser type, for analytics. It may
                also collect voluntarily submitted data such as names and email
                addresses when users fill out forms.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 4. Use of Information Section */}
            <li>
              <h2 className="section-title" id="S04">
                Use of Information
              </h2>
              <p className="text">
                Any collected data is used strictly to improve website
                performance, personalize content, and respond to user inquiries.
                Data is not sold or shared with third parties without consent
                unless required by law.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 5. Cookies Section */}
            <li>
              <h2 className="section-title" id="S05">
                Cookies
              </h2>
              <p className="text">
                Cookies may be used to remember user preferences and enable
                functionality. You can disable cookies in your browser settings.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 6. Data Security Section */}
            <li>
              <h2 className="section-title" id="S06">
                Data Security
              </h2>
              <p className="text">
                We use reasonable technical and organizational measures to
                protect your data. However, no online service is 100% secure.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 7. Third-Party Links Section */}
            <li>
              <h2 className="section-title" id="S07">
                Third-Party Links
              </h2>
              <p className="text">
                Our site may contain links to external websites. We are not
                responsible for their privacy practices or content.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 8. Children’s Privacy Section */}
            <li>
              <h2 className="section-title" id="S08">
                Children's Privacy
              </h2>
              <p className="text">
                This website is not intended for children under 13. We do not
                knowingly collect personal data from minors.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 9. Do Not Sell My Personal Information Section */}
            <li>
              <h2 className="section-title" id="S09">
                Do Not Sell My Personal Information
              </h2>
              <p className="text">
                Under the California Consumer Privacy Act (CCPA) and California
                Privacy Rights Act (CPRA), California residents have the right
                to opt-out of the sale or sharing of their personal information.
                Although this website does not sell personal information in
                exchange for money, we may share information with service
                providers to improve functionality.
              </p>
              <p className="text">
                If you are a California resident and would like to exercise your
                right to opt-out, please{" "}
                <Link className="btn-link2" to="/Contact">
                  contact us
                </Link>{" "}
                and include "Do Not Sell My Info" in your message subject or
                body.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 10. Updates to this Policy Section */}
            <li>
              <h2 className="section-title" id="S10">
                Updates to this Policy
              </h2>
              <p className="text">
                We may update this policy periodically. Changes will be posted
                on this page with a new effective date.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 11. Contact Us Section */}
            <li>
              <h2 className="section-title" id="S11">
                Contact Us
              </h2>
              <p className="text">
                If you have any questions about this privacy policy, please{" "}
                <Link className="btn-link2" to="/Contact">
                  contact us
                </Link>
                .
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
