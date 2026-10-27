import React from 'react';
import './Fleet.css';

function Fleet() {
  const vehicles = [
    { 
      type: 'Wheelchair Accessible Vans', 
      icon: '🚐', 
      capacity: 'Up to 2 Wheelchairs (or Ambulatory Passengers)', 
      features: [
        'Side or rear low-floor entry ramp', 
        'Heavy-duty 4-point wheelchair securement ties', 
        'Versatile seating configurations for companions',
        'Full climate control for patient comfort'
      ] 
    },
    { 
      type: 'Ambulatory & Sitting Transport', 
      icon: '🚙', 
      capacity: 'Comfortable seating for ambulatory passengers', 
      features: [
        'Low step-in height for easy boarding', 
        'Extra legroom and spacious interior layout', 
        'Assisted door-to-door boarding support', 
        'Ideal for independent riders and senior transit'
      ] 
    }
  ];

  return (
    <div className="fleet-page">
      {/* Header Section */}
      <div className="page-header">
        <div className="container">
          <h1>Our Fleet</h1>
          <p>Modern, clean, and fully equipped vehicles for every need</p>
        </div>
      </div>
      
      {/* Vehicles Array Showcase */}
      <section className="fleet-showcase">
        <div className="container">
          <div className="fleet-grid">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="fleet-card">
                <div className="fleet-icon">{vehicle.icon}</div>
                <h3>{vehicle.type}</h3>
                <p className="capacity">{vehicle.capacity}</p>
                <ul>
                  {vehicle.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Rigorous Safety Equipment Features Section */}
      <section className="fleet-features">
        <div className="container">
          <h2>Rigorous Safety & Compliance Standards</h2>
          <p className="safety-subtext">
            Every vehicle in our fleet undergoes strict oversight to protect our passengers and guarantee absolute peace of mind.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">🛡️</span>
              <div>
                <strong>Daily Vehicle Inspections</strong>
                <p>Complete mechanical and safety-lock checkups conducted every single morning before taking the road.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📹</span>
              <div>
                <strong>Dual Dashboard Cameras</strong>
                <p>Front-facing and rear-facing cameras that continuously monitor driver speed and traffic safety metrics.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🧯</span>
              <div>
                <strong>Dual Fire Extinguishers</strong>
                <p>Fully compliant emergency fire extinguishers mounted both in the front cab and the rear passenger cabin.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🧼</span>
              <div>
                <strong>Bloodborne Pathogen Spill Kit</strong>
                <p>Specialized medical-grade spill kits on board for immediate response and biohazard management.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📡</span>
              <div>
                <strong>Real-Time GPS Tracking</strong>
                <p>Live satellite positioning coordinates shared continuously with our local dispatch center.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🩹</span>
              <div>
                <strong>Fully Stocked First Aid Kits</strong>
                <p>Equipped with complete emergency response materials, hand sanitizers, and sanitation gear.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fleet;