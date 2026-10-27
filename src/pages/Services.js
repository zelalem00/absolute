import React from 'react';
import './Services.css';

function Services() {
  const services = [
    { icon: '🦽', title: 'Wheelchair Transport', desc: 'Secure, comfortable wheelchair-accessible vehicles with tie-downs and ramps.' },
    { icon: '🏥', title: 'Medical Appointments', desc: 'On-time pickup and drop-off for doctor visits, therapy, and testing.' },
    { icon: '💉', title: 'Dialysis Transport', desc: 'Specialized service for recurring dialysis appointments.' },
    { icon: '🚪', title: 'Hospital Discharge', desc: 'Safe transport from hospital to home or rehab facility.' },
    { icon: '👵', title: 'Senior Transport', desc: 'Extra care and assistance for elderly patients.' },
    { icon: '🏋️', title: 'Physical Therapy', desc: 'Regular transport for ongoing rehabilitation sessions.' }
  ];

  return (
    <div className="services-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive NEMT solutions tailored to your needs</p>
        </div>
      </div>
      
      <section className="services-list">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="service-cta">
        <div className="container">
          <h2>Need a different type of transport?</h2>
          <p>Contact us to discuss your specific medical transportation needs.</p>
          <button className="btn-primary" onClick={() => window.location.href='/contact'}>Contact Us</button>
        </div>
      </section>
    </div>
  );
}

export default Services;