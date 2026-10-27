import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Header Section */}
      <div className="page-header">
        <div className="container">
          <h1>About Absolute Mobility Solutions LLC</h1>
          <p>Your trusted partner in non-emergency medical transportation (NEMT)</p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Absolute Mobility Solutions LLC is a small, family-owned NEMT provider deeply rooted in 
                supporting our local community. We were born from a simple observation: many individuals 
                in our neighborhoods face major stress and hurdles safely getting to and from vital healthcare 
                appointments. We stepped up to bridge that gap with care, reliability, and precision.
              </p>
              <p>
                Operating a specialized fleet of 2 modern, fully-equipped wheelchair-accessible vans 
                (which also comfortably transport ambulatory/sitting passengers), we focus completely 
                on quality over quantity. As a family business, we take immense pride in delivering safe, 
                on-time, and dignified transits for every single person who rides with us.
              </p>

              {/* Regulatory Licensing Container */}
              <div className="credentials-container">
                <div className="credential-line">
                  <span className="credential-icon">📋</span>
                  <span><strong>PSC Maryland Licensed:</strong> #7399</span>
                </div>
                <div className="credential-line">
                  <span className="credential-icon">📋</span>
                  <span><strong>WMATC Certified:</strong> #4086</span>
                </div>
              </div>
            </div>

            {/* Replaced the blue emoji placeholder box with your real logo asset */}
            <div className="about-image-container">
              <img 
                src="/AbsoluteMobilityLogo.png" 
                alt="Absolute Mobility Solutions LLC Logo" 
                className="about-logo-img"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Expert Drivers / Certifications Section */}
      <section className="driver-expertise">
        <div className="container">
          <h2>Highly Trained & Certified Drivers</h2>
          <p className="section-subtext">
            Our drivers possess multiple years of prior specialized transit experience. They aren't just operators—they are certified care professionals equipped with:
          </p>
          <div className="certifications-grid">
            <div className="cert-card">❤️ Red Cross CPR / AED & First Aid</div>
            <div className="cert-card">👵 Dedicated Senior Support Training</div>
            <div className="cert-card">🛡️ NEMTAC Certified</div>
            <div className="cert-card">🚘 Defensive Driving Credentials</div>
            <div className="cert-card">🤝 Conflict Resolution Mastery</div>
          </div>
        </div>
      </section>

      {/* Mission & Core Values */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            To provide safe, dependable, and compassionate medical transportation that strengthens access 
            to healthcare, treats riders like extended family, and uplifts our local community.
          </p>
          
          <div className="values">
            <div className="value">
              <h3>Safety First</h3>
              <p>Our wheelchair vans undergo rigorous daily mechanical inspections and safety-lock checkups.</p>
            </div>
            <div className="value">
              <h3>Compassion Always</h3>
              <p>As a family-owned team, we bring genuine patience, respect, and warm support to every journey.</p>
            </div>
            <div className="value">
              <h3>Community Focused</h3>
              <p>We work passionately around the clock to remain an accessible, friendly asset for local families and clinics.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;