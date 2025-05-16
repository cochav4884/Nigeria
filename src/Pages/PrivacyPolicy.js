import React from "react";
import "../Styles/TermPrivacy.css";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="header">Akute, Ogun State, Nigeria</h1>
        <h2 className="sub-header">*Privacy Policy*</h2>

        <section className="pp-content">
          <p>
            Home / https://cochav4884.github.io/cochav4884github.io/ Website Policies / Privacy Policy <br />
            This site is committed to protecting the personal privacy of visitors and guests using its Internet site.
          </p>

          <ul className="pp-ul">
            <li>
              <h2>PRIVACY POLICY</h2>
            </li>

            <li>
              <h2>COVERAGE</h2>
              <p>This privacy policy applies to the full site listed above.</p>
            </li>

            <li>
              <h2>DEFINITIONS OF TYPES OF INFORMATION</h2>
              <p>
                The site collects some information automatically upon your visit, like IP addresses and browser type, for analytics. It may also collect voluntarily submitted data such as names and email addresses when users fill out forms.
              </p>
            </li>

            <li>
              <h2>USE OF INFORMATION</h2>
              <p>
                Any collected data is used strictly to improve website performance, personalize content, and respond to user inquiries. Data is not sold or shared with third parties without consent unless required by law.
              </p>
            </li>

            <li>
              <h2>COOKIES</h2>
              <p>
                Cookies may be used to remember user preferences and enable functionality. You can disable cookies in your browser settings.
              </p>
            </li>

            <li>
              <h2>DATA SECURITY</h2>
              <p>
                We use reasonable technical and organizational measures to protect your data. However, no online service is 100% secure.
              </p>
            </li>

            <li>
              <h2>THIRD-PARTY LINKS</h2>
              <p>
                Our site may contain links to external websites. We are not responsible for their privacy practices or content.
              </p>
            </li>

            <li>
              <h2>CHILDREN’S PRIVACY</h2>
              <p>
                This website is not intended for children under 13. We do not knowingly collect personal data from minors.
              </p>
            </li>

            <li>
              <h2>UPDATES TO THIS POLICY</h2>
              <p>
                We may update this policy periodically. Changes will be posted on this page with a new effective date.
              </p>
            </li>

            <li>
              <h2>CONTACT US</h2>
              <p>
                If you have any questions about this privacy policy, please{" "}
                <Link to="/contact">contact us</Link>.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
