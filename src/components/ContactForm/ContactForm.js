import React, { useState } from 'react';
import emailjs from '@emailjs/browser';  // ✅ correct import
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    setLoading(true);

    emailjs.send(
      'service_rywobz8',
      'template_hr4iolj',
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      '-4CAsNbCXUOQhfA0k'
    )
    .then((result) => {
      console.log("Email sent successfully:", result.text);
      alert('✅ Thank you for your inquiry! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      alert('❌ Something went wrong, please try again later.');
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Phone:</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </div>

      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? 'Sending...' : 'Submit Inquiry'}
      </button>
    </form>
  );
};

export default ContactForm;
