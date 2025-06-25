import React from "react";
import "../Styles/TermPrivacy.css";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="main_container" id="top">
      <div className="container-fluid">
        <header className="page-header">
          <h1 className="header">Akute, Ogun State, Nigeria</h1>
        </header>

        <h2 className="section">* Term of Use *</h2>

        <ul class="container">
          <div id="top" aria-label="Top of page" tabIndex="-1"></div>
          <h2 class="section text-dark">* Table of Contents *</h2>
          <li>
            <a className="btn-link" href="#S01">
              Agreements to Terms
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S02">
              Intellectual Property Rights
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S03">
              User Representations
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S04">
              Prohibited Activities
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S05">
              User Generated Contributions
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S06">
              Contribution License
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S07">
              Guidlines For Reviews
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S08">
              Mobile Application License
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S09">
              Submissions
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S10">
              Third-Party Website and Content
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S11">
              Advertisers
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S12">
              Site Management
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S13">
              Privacy Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S14">
              Term and Termination
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S15">
              Modifications and Interruptions
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S16">
              Governing Law
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S17">
              Dispute Resolution
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S18">
              Corrections
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S19">
              Disclaimer
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S20">
              Limitations and Liability
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S21">
              Indemnification
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S22">
              User Data
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S23">
              Electronic Communications, Transactions, and Signatures
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S24">
              California Users and Residents
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S25">
              Miscellaneous
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S26">
              Contact Us
            </a>
          </li>
        </ul>
        <h3>Last updated June 24, 2025</h3>
        <div className="container">
          <ol>
            {/* 1. Agreements to Terms */}
            <li>
              <h2 className="section-title" id="S01">
                Agreements to Terms
              </h2>
              <p className="text">
                By accessing and using this Site, you accept and agree to be
                bound by these Terms of Use and all applicable laws and
                regulations. If you do not agree with any of these terms, you
                are prohibited from using or accessing this Site.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 2. Intellectual Property Rights */}
            <li>
              <h2 className="section-title" id="S02">
                Intellectual Property Rights
              </h2>
              <p className="text">
                All content on the Site, including text, graphics, logos,
                images, and software, is our property or licensed to us and is
                protected by copyright, trademark, and other laws.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 3. User Representations */}
            <li>
              <h2 className="section-title" id="S03">
                User Representations
              </h2>
              <p className="text">
                You represent and warrant that your use of the Site complies
                with these Terms and all applicable laws.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 4. Prohibited Activities */}
            <li>
              <h2 className="section-title" id="S04">
                Prohibited Activities
              </h2>
              <p className="text">
                You agree not to use the Site for any unlawful or prohibited
                activities including uploading harmful content.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 5. User Generated Contributions */}
            <li>
              <h2 className="section-title" id="S05">
                User Generated Contributions
              </h2>
              <p className="text">
                By submitting content to the Site, you grant us a worldwide,
                royalty-free, perpetual license to use, reproduce, modify, and
                display such content.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 6. Contribution License */}
            <li>
              <h2 className="section-title" id="S06">
                Contribution License
              </h2>
              <p className="text">
                You agree that your contributions are licensed to us under terms
                that allow us to use and distribute them.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 7. Guidlines For Reviews */}
            <li>
              <h2 className="section-title" id="S07">
                Guidlines For Reviews
              </h2>
              <p className="text">
                Reviews should be honest, respectful, and not violate anyone’s
                rights.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 8. Mobile Application License */}
            <li>
              <h2 className="section-title" id="S08">
                Mobile Application License
              </h2>
              <p className="text">
                The license terms for mobile apps provided via the Site are
                outlined here.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 9. Submissions */}
            <li>
              <h2 className="section-title" id="S09">
                Submissions
              </h2>
              <p className="text">
                Any submissions made by you may be used by us in accordance with
                these Terms.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 10. Third-Party Website and Content */}
            <li>
              <h2 className="section-title" id="S10">
                Third-Party Website and Content
              </h2>
              <p className="text">
                The Site may contain links to third-party websites. We do not
                control and are not responsible for their content or practices.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 11. Advertisers */}
            <li>
              <h2 className="section-title" id="S11">
                Advertisers
              </h2>
              <p className="text">
                Advertisers on the Site are responsible for their ads and
                compliance with laws.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 12. Site Management */}
            <li>
              <h2 className="section-title" id="S12">
                Site Management
              </h2>
              <p className="text">
                We reserve the right to manage, modify, or remove content and
                users from the Site.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 13. Privacy Policy */}
            <li>
              <h2 className="section-title" id="S13">
                Privacy Policy
              </h2>
              <p className="text">
                Your use of the Site is also governed by our Privacy Policy,
                which is incorporated by reference into these Terms of Use.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 14. Term and Termination */}
            <li>
              <h2 className="section-title" id="S14">
                Term and Termination
              </h2>
              <p className="text">
                We may terminate or suspend your access at any time without
                notice for violation of these Terms or harmful conduct.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 15. Modifications and Interruptions */}
            <li>
              <h2 className="section-title" id="S15">
                Modifications and Interruptions
              </h2>
              <p className="text">
                We reserve the right to change, modify, or remove the contents
                of the Site at any time or for any reason without notice...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 16. Governing Law */}
            <li>
              <h2 className="section-title" id="S16">
                Governing Law
              </h2>
              <p className="text">
                These Terms of Use and your use of the Site are governed by the
                laws of the State of California...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 17. Dispute Resolution */}
            <li>
              <h2 className="section-title" id="S17">
                Dispute Resolution
              </h2>
              <h3>Informal Negotiations</h3>
              <p className="text">
                To expedite resolution and control the cost of any dispute...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 18. Corrections */}
            <li>
              <h2 className="section-title" id="S18">
                Corrections
              </h2>
              <p className="text">
                There may be information on the Site that contains typographical
                errors, inaccuracies, or omissions...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 19. Disclaimer */}
            <li>
              <h2 className="section-title" id="S19">
                Disclaimer
              </h2>
              <p className="text">
                THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 20. Limitations and Liability */}
            <li>
              <h2 className="section-title" id="S20">
                Limitations and Liability
              </h2>
              <p className="text">IN NO EVENT WILL WE OR OUR DIRECTORS...</p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 21. Indemnification */}
            <li>
              <h2 className="section-title" id="S21">
                Indemnification
              </h2>
              <p className="text">
                You agree to defend, indemnify, and hold us harmless...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 22. User Data */}
            <li>
              <h2 className="section-title" id="S22">
                User Data
              </h2>
              <p className="text">
                We will maintain certain data that you transmit to the Site...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 23. Electronic Communications, Transactions, and Signatures */}
            <li>
              <h2 className="section-title" id="S23">
                Electronic Communications, Transactions, and Signatures
              </h2>
              <p className="text">
                Visiting the Site, sending us emails, and completing online
                forms...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 24. California Users and Residents */}
            <li>
              <h2 className="section-title" id="S24">
                California Users and Residents
              </h2>
              <p className="text">
                If any complaint with us is not satisfactorily resolved...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 25. Miscellaneous */}
            <li>
              <h2 className="section-title" id="S25">
                Miscellaneous
              </h2>
              <p className="text">
                These Terms of Use and any policies or operating rules posted by
                us...
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 26. Contact Us */}
            <li>
              <h2 className="section-title" id="S26">
                Contact Us
              </h2>
              <p className="text">
                For any questions or concerns regarding these Terms, please{" "}
                <Link className="btn-link2" to="/contact">
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
    </main>
  );
};

export default TermsOfUse;
