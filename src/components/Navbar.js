import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/book');
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          {/* Replaced the ambulance emoji with your actual logo graphic */}
          <div className="logo-icon-container">
            <img 
              src="/AbsoluteMobilityLogo.png" 
              alt="Absolute Mobility Solutions LLC" 
              className="nav-logo-img"
            />
          </div>
          <span className="logo-text">Absolute Mobility Solutions</span>
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link to="/fleet" onClick={() => setMobileMenuOpen(false)}>Fleet</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <button onClick={handleBookNow} className="nav-book-btn">Book Now</button>
        </div>
        
        <div className="mobile-menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;