import React, { useState } from "react";
import "../styles/components/Contact.css";
import ContactConstants from "../utils/ContactConstants.js";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaComments } from 'react-icons/fa';
import GeminiChatbot from "./GeminiChatbot.js";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",  
    phone: "",
    subject: "",
    message: "",
    inquiryType: ContactConstants.INQUIRY_TYPES[0],
  });

  const [submitted, setSubmitted] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: ContactConstants.INQUIRY_TYPES[0],
      });
    }, 3000);
  };

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Reach out for any inquiries, support, or collaboration opportunities. Our team is ready to assist you.</p>

      <div className="contact-info">
        <div>
          <FaPhone size={24} style={{ marginBottom: '10px', color: '#4a6bff' }} />
          <strong>Phone</strong>
          <a href={`tel:${ContactConstants.PHONE}`}>{ContactConstants.PHONE}</a>
        </div>
        <div>
          <FaEnvelope size={24} style={{ marginBottom: '10px', color: '#4a6bff' }} />
          <strong>Email</strong>
          <a href={`mailto:${ContactConstants.EMAIL}`}>{ContactConstants.EMAIL}</a>
        </div>
        <div>
          <FaMapMarkerAlt size={24} style={{ marginBottom: '10px', color: '#4a6bff' }} />
          <strong>Address</strong>
          <p style={{ margin: 0 }}>{ContactConstants.ADDRESS}</p>
        </div>
      </div>

      <div className="social-links">
        <a href={ContactConstants.SOCIAL_MEDIA.FACEBOOK} target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href={ContactConstants.SOCIAL_MEDIA.TWITTER} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href={ContactConstants.SOCIAL_MEDIA.INSTAGRAM} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={ContactConstants.SOCIAL_MEDIA.LINKEDIN} target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="phone" 
          placeholder="Your Phone" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
        <select 
          name="inquiryType" 
          value={formData.inquiryType} 
          onChange={handleChange}
        >
          {ContactConstants.INQUIRY_TYPES.map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>
        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required
        ></textarea>
        <button type="submit">
          {submitted ? "Message Sent!" : "Send Message"}
        </button>
      </form>

      <div className="google-map">
        <iframe
          title="NGO Location"
          src={ContactConstants.GOOGLE_MAPS_LINK}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="chatbot-container">
        <FaComments size={36} style={{ color: '#28a745', marginBottom: '15px' }} />
        <h3>Need Immediate Assistance?</h3>
        <p>Chat with our AI assistant powered by Gemini. Get instant answers to your questions 24/7.</p>
        <button className="chatbot-btn" onClick={toggleChatbot}>
          {isChatbotOpen ? "Close Chat" : "Start Chat Now"}
        </button>
      </div>

      <GeminiChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />

      <div className="call-to-action">
        <h3>Join Us in Making a Difference</h3>
        <p>Your support can help us create lasting change. Consider donating or joining our volunteer network today.</p>
        <div>
          <button>Donate Now</button>
          <button>Become a Volunteer</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;