import React from 'react';
import BookingForm from '../components/BookingForm';
import './BookNow.css';

function BookNow() {
  return (
    <div className="booknow-page">
      <div className="page-header">
        <div className="container">
          <h1>Book Your Ride</h1>
          <p>Schedule your non-emergency medical transport in minutes</p>
        </div>
      </div>
      
      <section className="booking-section">
        <div className="container">
          <div className="booking-wrapper">
            
            {/* Informational Sidebar */}
            <div className="booking-info">
              <h2>Why book with us?</h2>
              <div className="info-list">
                <div className="info-item">✓ Instant confirmation</div>
                <div className="info-item">✓ Free cancellation within 2 hours</div>
                <div className="info-item">✓ Text and email reminders</div>
                <div className="info-item">✓ Insurance accepted</div>
                <div className="info-item">✓ No hidden fees</div>
                <div className="info-item">✓ Professional, vetted drivers</div>
              </div>
              
              <div className="insurance-note">
                <h3>Insurance Accepted</h3>
                <p>We work with most major insurance providers including Medicare, Medicaid, and private insurers.</p>
              </div>
            </div>
            
            {/* The Booking Form */}
            <div className="form-container">
              <BookingForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default BookNow;