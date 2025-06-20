import React, { useState } from "react";
import "../Styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setFormData({ name: "", email: "", message: "" }); // reset form
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
