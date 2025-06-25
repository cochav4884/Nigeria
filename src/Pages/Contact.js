import React, { useState } from "react";
import "../Styles/Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    doNotSell: false,
    acceptedTermsAndPrivacy: false,  // single checkbox state
  });

  const [status, setStatus] = useState("");

  // Generalized handleChange for text inputs and checkbox
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate single checkbox acceptance
    if (!formData.acceptedTermsAndPrivacy) {
      setStatus("Please accept the terms and privacy policy to proceed.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          doNotSell: false,
          acceptedTermsAndPrivacy: false,
        });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <div className="main_container">
      <div className="container-fluid">
        <div className="page">
          <header className="page-header">
            <h1>Contact Us</h1>
          </header>
          <h2 className="section">
            * We would love to hear from you! Please fill out the form below. *
          </h2>
          <hr />
          <section className="container">
            <form onSubmit={handleSubmit}>
              <input
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
                value={formData.message}
                required
              />
              <div className="checkbox-container">
                <label className="checkbox-label" htmlFor="doNotSell">
                  <input
                    id="doNotSell"
                    type="checkbox"
                    name="doNotSell"
                    checked={formData.doNotSell}
                    onChange={handleChange}
                  />
                  &nbsp;I am a California resident and I wish to opt out of the sale or sharing of my personal information.
                </label>
                <p className="opt-out-note">
                  Please see "Do Not Sell My Personal Information" in our{" "}
                  <Link className="privacy-inline-link" to="/PrivacyPolicy">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <div className="checkbox-container">
                <label className="checkbox-label" htmlFor="acceptedTermsAndPrivacy">
                  <input
                    id="acceptedTermsAndPrivacy"
                    type="checkbox"
                    name="acceptedTermsAndPrivacy"
                    checked={formData.acceptedTermsAndPrivacy}
                    onChange={handleChange}
                    required
                  />
                  &nbsp;I agree to the{" "}
                  <Link className="privacy-inline-link" to="/TermsOfUse">
                    Terms of Use
                  </Link>{" "}
                  and{" "}
                  <Link className="privacy-inline-link" to="/PrivacyPolicy">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button className="custom-button" type="submit">
                Send
              </button>
            </form>

            {status && <p>{status}</p>}
          </section>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Contact;
