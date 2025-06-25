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
        <h2 className="section">* Privacy Policy *</h2>
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
              Collection and Use of Personally Identifiable Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S05">
              Website Accessibility Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S06">
              Do Not Sell My Personal Information
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S07">
              Updates to this Policy
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S08">
              Intellectual Property and Content Ownership
            </a>
          </li>
          <li>
            <a className="btn-link" href="#S09">
              Contact Us
            </a>
          </li>
        </ul>
        <h3>* Last updated June 24, 2025 *</h3>
        <div className="container">
          <p>
            Welcome to our website at{" "}
            <a
              href="https://cochav4884.github.io/cochav4884github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://cochav4884.github.io/cochav4884github.io/
            </a>
            . We are committed to protecting the personal privacy of visitors
            and guests using our site.
          </p>
          <ol>
            {/* 1. Privacy Poclicy Section */}
            <li>
              <h2 className="section-title" id="S01">
                Privacy Policy
              </h2>
              <p className="text">
                This policy explains how we collect, use, and protect your
                personal information in compliance with applicable laws,
                including the California Consumer Privacy Act (CCPA) and U.S.
                privacy regulations.
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
                This privacy policy applies to all pages and content on{" "}
                <a
                  href="https://cochav4884.github.io/cochav4884github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cochav4884.github.io/cochav4884github.io/
                </a>
                .
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
                We collect different types of information from users, including
                personally identifiable information (PII) such as your name,
                mailing and email addresses, financial data like credit card
                numbers, and demographic data including age and zip code. PII is
                information that can specifically identify you.
              </p>
              <p className="text">
                We also collect Traffic Data automatically, such as your IP
                address, browser type, domain server, and computer type, which
                is anonymous and used for analytics and improving your
                experience.
              </p>
              <p className="text">
                Cookies and similar technologies may be used to collect Traffic
                Data and remember your preferences.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 4. Use of Information Section */}
            <li>
              <h2 className="section-title" id="S04">
                Collection and Use of Personally Identifiable Information
              </h2>
              <h3>* Registration *</h3>
              <p className="text">
                Access to some parts of our site may require you to provide
                personal information voluntarily. You are never obligated to
                provide such information, but if you choose not to, some
                features may be inaccessible.
              </p>

              <h3>
                * Sharing Personally Identifiable Information with Third Parties
                *
              </h3>
              <p className="text">
                We may share your personal information with trusted service
                providers to help operate the site and improve your experience.
                We will not sell your personal information without your explicit
                consent, consistent with CCPA requirements. You may opt out of
                such sharing by contacting us through the contact page.
              </p>

              <h3>*Legal Disclosures *</h3>
              <p className="text">
                We may disclose your personal information if required by law or
                to protect our rights, comply with legal processes, or enforce
                our Terms of Use.
              </p>

              <h3>* Traffic Data *</h3>
              <p className="text">
                Traffic Data is collected regardless of registration status to
                help us analyze usage patterns and improve services. This data
                may be shared with partners but does not identify you
                personally.
              </p>

              <h3>* Cookies *</h3>
              <p className="text">
                Cookies are small data files stored on your device that help
                enhance website functionality and user experience. You can
                disable cookies through your browser settings, but some site
                features may not work properly without them.
              </p>

              <h3>* Children’s Privacy *</h3>
              <p className="text">
                Our site is not intended for children under 13, and we do not
                knowingly collect personal information from minors without
                parental consent, in compliance with the Children’s Online
                Privacy Protection Act (COPPA).
              </p>

              <h3>* IP Addresses *</h3>
              <p className="text">
                IP addresses may be collected for system administration, audit,
                and security purposes. We do not link IP addresses to personally
                identifiable information unless necessary to enforce site
                policies or legal requirements.
              </p>

              <h3>* Third-Party Relationships *</h3>
              <p className="text">
                Our site may include links or services provided by trusted third
                parties. We are not responsible for their privacy policies and
                recommend reviewing those separately. If you have concerns
                regarding any third-party use of your information, please
                contact us.
              </p>

              <h3>* Security *</h3>
              <p className="text">
                We employ industry-standard security measures to protect your
                data but cannot guarantee absolute security. Please promptly
                notify us of any unauthorized use of your account information.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 5. Website Accessibility Policy Section */}
            <li>
              <h2 className="section-title" id="S05">
                Website Accessibility Policy
              </h2>
              <p className="text">
                We are committed to providing accessible digital experiences in
                accordance with WCAG 2.0 “A” and “AA” guidelines, including
                support for screen readers, keyboard navigation, and
                color-independent information.
              </p>
              <p className="text">
                We welcome feedback to improve accessibility; please contact us
                at{" "}
                <a href="mailto:corinnepadilla04@gmail.com">
                  corinnepadilla04@gmail.com
                </a>{" "}
                or by phone at 000-000-0000.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 6. Do Not Sell My Personal Information Section */}
            <li>
              <h2 className="section-title" id="S06">
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

            {/* 07. Updates to this Policy Section */}
            <li>
              <h2 className="section-title" id="S07">
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

            {/* 08. Intellectual Property and Content Ownership Section */}
            <li>
              <h2 className="section-title" id="S08">
                Intellectual Property and Content Ownership
              </h2>
              <p className="text">
                All content, including text, design, graphics, and images, on
                this website are the intellectual property of Corinne Padilla
                (the site creator) and Richie Osborne (the photographer), unless
                otherwise indicated.
              </p>
              <p className="text">
                Unauthorized use, reproduction, modification, or distribution of
                any website content or photographs without explicit written
                permission from Corinne Padilla and Richie osborne is strictly
                prohibited.
              </p>
              <p className="text">
                Visitors and users may view and download content for personal,
                non-commercial use only. Any other use, including commercial
                exploitation or publication, requires prior written consent.
              </p>
              <p className="text">
                We actively protect our copyrights and may take legal action
                against infringement or unauthorized use.
              </p>
              <p className="text">
                For permissions or licensing inquiries, please contact us via
                the {" "} 
                <Link className="btn-link2" to="/contact">
                contact us
                </Link>
                <br />
                page.
              </p>
              <button className="btn-link" onClick={scrollToTop}>
                Back to Top
              </button>
            </li>

            {/* 09. Contact Us Section */}
            <li>
              <h2 className="section-title" id="S09">
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
      <hr />
    </div>
  );
};

export default PrivacyPolicy;
