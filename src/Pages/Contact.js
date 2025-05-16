import React, { useState } from 'react';
import "../App.css"

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Here you could connect to a backend or email service
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
        <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
        <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
