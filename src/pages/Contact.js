import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  // 1. Set up form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these strings with your actual EmailJS credentials
    const SERVICE_ID = 'service_zg6nxjc';
    const TEMPLATE_ID = 'template_yznxxkz';
    const PUBLIC_KEY = 'Jp9gVxXDHGxPvbVy7';

    // Map your state variables to match the template variables in your EmailJS dashboard
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.message
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        // Reset form on success
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-page">
      {/* Header Section */}
      <div className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We are here to support you and ensure a seamless, reliable journey.</p>
        </div>
      </div>
      
      {/* Core Contact Info & Form Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-details">
              
              {/* Clickable Phone Card */}
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Phone</h3>
                <p className="contact-value">
                  <a href="tel:+12028162344" className="contact-link">
                    (202) 816-2344
                  </a>
                </p>
                <p className="small text-muted">Call anytime—we answer whenever possible!</p>
              </div>
              
              {/* Clickable Email Card */}
              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3>Email</h3>
                <p className="contact-value">
                  <a href="mailto:acket.themo101@gmail.com" className="contact-link">
                    yketema@getabsolutemobility.com
                  </a>
                </p>
                <p className="small text-muted">Fast response within 1 hour</p>
              </div>
              
              {/* Updated: DMV Service Area Card */}
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Service Area</h3>
                <p className="contact-value">DMV Metropolitan Area</p>
                <p className="small text-muted">Fully licensed for DC, Maryland, & Northern Virginia</p>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h3>Send us a message</h3>
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
                  type="tel" 
                  name="phone"
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                
                <button type="submit" className="btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Optional feedback UI */}
                {submitStatus === 'success' && (
                  <p className="status-success" style={{color: 'green', marginTop: '10px'}}>
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="status-error" style={{color: 'red', marginTop: '10px'}}>
                    Oops! Something went wrong. Please try calling us instead.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Hours of Operation Section */}
      <section className="hours-section">
        <div className="container">
          <h1>Hours of Operation</h1>
          <div className="hours-wrapper">
            <div className="hours-card standard-hours">
              <h2>Service Schedule</h2>
              <div className="hours-line">
                <span>Monday – Friday </span>
                <strong>6:00 AM – 6:00 PM</strong>
              </div>
              <div className="hours-line">
                <span>Saturday </span>
                <strong>7:00 AM – 5:00 PM</strong>
              </div>
              <div className="hours-line closed">
                <span>Sunday </span>
                <strong>Closed</strong>
              </div>
            </div>
            
            {/* Extended Care Policy Callout */}
            <div className="hours-notice-card">
              <h3>Our Family Commitment</h3>
              <p>
                Need assistance outside of our standard operating schedule or administrative hours? 
                <strong> Please feel free to call us anyway.</strong>
              </p>
              <p>
                If our team picks up the line and can safely accommodate your needs, we will do absolutely everything 
                within our power to support you and get you where you need to go.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;