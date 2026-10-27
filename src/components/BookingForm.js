import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './BookingForm.css';

function BookingForm() {
  const initialFormState = {
    firstName: '',
    middleInitial: '',
    lastName: '',
    phone: '',
    email: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    serviceType: 'wheelchair',
    returnTrip: false,
    returnDate: '',
    returnTime: '',
    specialAssistance: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : (name === 'middleInitial' ? value.substring(0, 1).toUpperCase() : value)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these 3 values with your actual EmailJS dashboard credentials
    const SERVICE_ID = 'service_6bho30d';
    const TEMPLATE_ID = 'template_78tcpye';
    const PUBLIC_KEY = 'Jp9gVxXDHGxPvbVy7';

    // Map your form state into template parameters
    const templateParams = {
      passenger_name: `${formData.firstName} ${formData.middleInitial ? formData.middleInitial + '. ' : ''}${formData.lastName}`,
      phone: formData.phone,
      email: formData.email || 'N/A',
      service_type: formData.serviceType,
      pickup_address: formData.pickup,
      dropoff_address: formData.dropoff,
      pickup_date: formData.date,
      pickup_time: formData.time,
      round_trip: formData.returnTrip ? 'Yes' : 'No',
      return_date: formData.returnTrip ? formData.returnDate : 'N/A',
      return_time: formData.returnTrip ? formData.returnTime : 'N/A',
      special_assistance: formData.specialAssistance || 'None',
      additional_info: formData.message || 'None'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('Email successfully sent!', response.status, response.text);
        setSubmitted(true);
        setFormData(initialFormState); // Reset form data
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Something went wrong. Please try again or call us directly.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-header">
        <h2>Booking Request</h2>
        <p>Fill out the form below and we'll get back to you within 30 minutes to confirm your ride.</p>
      </div>
      
      <form className="booking-form" onSubmit={handleSubmit}>
        {submitted && <div className="success-message">✓ Booking request submitted! We'll contact you within 30 minutes.</div>}
        
        {/* Contact Information Section */}
        <div className="form-section">
          <h3 className="section-title">Contact Information</h3>
          
          <div className="form-row name-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input 
                type="text" 
                id="firstName"
                name="firstName" 
                placeholder="John" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group mi-input">
              <label htmlFor="middleInitial">M.I.</label>
              <input 
                type="text" 
                id="middleInitial"
                name="middleInitial" 
                placeholder="D" 
                maxLength="1"
                value={formData.middleInitial} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <input 
                type="text" 
                id="lastName"
                name="lastName" 
                placeholder="Doe" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone"
                name="phone" 
                placeholder="(555) 123-4567" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                placeholder="john@example.com" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group full-width-row">
              <label htmlFor="serviceType">Service Type *</label>
              <select name="serviceType" id="serviceType" value={formData.serviceType} onChange={handleChange} required>
                <option value="wheelchair">Wheelchair Transport</option>
                <option value="ambulatory">Ambulatory / Sitting</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Trip Details Section */}
        <div className="form-section">
          <h3 className="section-title">Trip Details</h3>
          
          <div className="form-row">
            <div className="form-group full-width-row">
              <label htmlFor="pickup">Pickup Address *</label>
              <input 
                type="text" 
                id="pickup"
                name="pickup" 
                placeholder="Street address, city, zip code" 
                value={formData.pickup} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group full-width-row">
              <label htmlFor="dropoff">Dropoff Address *</label>
              <input 
                type="text" 
                id="dropoff"
                name="dropoff" 
                placeholder="Street address, city, zip code" 
                value={formData.dropoff} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Pickup Date *</label>
              <input 
                type="date" 
                id="date"
                name="date" 
                value={formData.date} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Pickup Time *</label>
              <input 
                type="time" 
                id="time"
                name="time" 
                value={formData.time} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input 
                type="checkbox" 
                name="returnTrip" 
                checked={formData.returnTrip} 
                onChange={handleChange} 
              />
              <span>Need round trip / return transport?</span>
            </label>
          </div>
          
          {formData.returnTrip && (
            <div className="form-row return-trip-fields">
              <div className="form-group">
                <label htmlFor="returnDate">Return Date</label>
                <input 
                  type="date" 
                  id="returnDate"
                  name="returnDate" 
                  value={formData.returnDate} 
                  onChange={handleChange} 
                  required={formData.returnTrip}
                />
              </div>
              <div className="form-group">
                <label htmlFor="returnTime">Return Time (approx.)</label>
                <input 
                  type="time" 
                  id="returnTime"
                  name="returnTime" 
                  value={formData.returnTime} 
                  onChange={handleChange} 
                  required={formData.returnTrip}
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Special Requirements Section */}
        <div className="form-section">
          <h3 className="section-title">Special Requirements</h3>
          <div className="form-group">
            <label htmlFor="specialAssistance">Do you need any special assistance?</label>
            <select name="specialAssistance" id="specialAssistance" value={formData.specialAssistance} onChange={handleChange}>
              <option value="">No special assistance needed</option>
              <option value="door-to-door">Door-to-door assistance</option>
              <option value="escort">Need escort / attendant</option>
              {/* <option value="oxygen">Oxygen support</option> */}
              <option value="other">Other (please specify)</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Additional Information or Special Instructions</label>
            <textarea 
              id="message"
              name="message" 
              placeholder="Please let us know about any special needs, medical equipment, or specific requirements..." 
              value={formData.message} 
              onChange={handleChange} 
              rows="4"
            ></textarea>
          </div>
        </div>
        
        <div className="form-actions">
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Sending Request...' : <>Request Ride <span className="arrow">→</span></>}
          </button>
          <p className="form-note">* Required fields. We'll respond within 30 minutes to confirm your booking.</p>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;