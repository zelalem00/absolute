import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Safe & Reliable Non-Emergency Medical Transport</h1>
          <p>Professional, compassionate transportation for medical appointments, dialysis, therapy, and hospital discharges.</p>
          <div className="hero-buttons">
            <button onClick={() => navigate('/book')} className="btn-primary">Schedule a Ride</button>
            <button onClick={() => navigate('/contact')} className="btn-secondary">Call Now: (202) 816-2344</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⏰</div>
              <h3>24/7 Availability</h3>
              <p>Round-the-clock service for early morning appointments and late hospital discharges.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍⚕️</div>
              <h3>Trained Attendants</h3>
              <p>Certified medical transport specialists ensuring patient safety and comfort.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚐</div>
              <h3>ADA Compliant Fleet</h3>
              <p>Wheelchair accessible vehicles with secure locking systems and lifts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Real-Time Tracking</h3>
              <p>GPS tracking and automated notifications for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Schedule Your Ride?</h2>
          <p>Book your non-emergency medical transport online or call us anytime.</p>
          <button onClick={() => navigate('/book')} className="btn-primary">Book Now</button>
        </div>
      </section>
    </>
  );
}

export default Home;