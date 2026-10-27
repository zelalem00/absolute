import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand Section */}
          <div className="footer-section">
            <h3>Absolute Mobility Solutions</h3>
            <p>Providing safe, compassionate non-emergency medical transportation since 2024.</p>
          </div>
          
          {/* Navigation Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/fleet">Fleet</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href="tel:+12028162344">(202) 816-2344</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:yketema@getabsolutemobility.com" className="footer-email">
                yketema@getabsolutemobility.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>DMV Metropolitan Area</span>
            </div>
          </div>
          
          {/* Hours Section */}
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Mon – Fri: 6 AM – 6 PM</p>
            <p>Sat: 7 AM – 5 PM</p>
            <p className="footer-hours-note">Available after-hours if we can pick up and help!</p>
          </div>

        </div>
        
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2026 Absolute Mobility Solutions LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;