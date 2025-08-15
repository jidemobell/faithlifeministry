import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`nav ${scrollY > 50 ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <img src="/faithlifeministry.png" alt="FaithLife Ministry" className="nav-logo" />
            <span className="nav-title">FaithLife Ministry</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('events')} className="nav-link">Events</button>
            <button onClick={() => scrollToSection('community')} className="nav-link">Community</button>
            <button onClick={() => scrollToSection('donate')} className="nav-link">Support</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>

          <button 
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">FaithLife Ministry</span>
          </h1>
          <p className="hero-subtitle">
            Connecting hearts across continents through prayer, fellowship, and unwavering faith
          </p>
          <div className="hero-buttons">
            <a 
              href="https://chat.whatsapp.com/DKdmCbNa3w3L5LB1ZEA6mr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Join Our Community
            </a>
            <button 
              onClick={() => scrollToSection('about')} 
              className="btn btn-outline"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card">
            <div className="card-content">
              <h3>Next Gathering</h3>
              <p>Wednesday Prayer & Fellowship</p>
              <span className="live-indicator">🟢 Live on Zoom</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Our Ministry</h2>
            <p className="section-subtitle">United in faith, connected by love</p>
          </div>
          
          <div className="about-grid">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                FaithLife Ministry is a vibrant online church community that transcends geographical boundaries. 
                We bring together believers from the USA, Ghana, UK, and beyond for meaningful worship, 
                prayer, and spiritual growth through digital fellowship.
              </p>
              
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Countries</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Weekly</span>
                  <span className="stat-label">Gatherings</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Growing</span>
                  <span className="stat-label">Community</span>
                </div>
              </div>
            </div>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🙏</div>
                <h4>Prayer & Worship</h4>
                <p>Join us for powerful prayer sessions and uplifting worship experiences</p>
              </div>
              <div className="feature">
                <div className="feature-icon">🌍</div>
                <h4>Global Community</h4>
                <p>Connect with believers from around the world in our inclusive fellowship</p>
              </div>
              <div className="feature">
                <div className="feature-icon">📖</div>
                <h4>Biblical Teaching</h4>
                <p>Grow in faith through inspiring messages and Bible study sessions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership">
        <div className="container">
          <div className="leader-card">
            <div className="leader-image">
              <div className="leader-avatar">MF</div>
            </div>
            <div className="leader-content">
              <h3>Mrs. Marina Frimpong</h3>
              <p className="leader-title">Ministry Convener & Spiritual Leader</p>
              <p className="leader-quote">
                "Blessed to serve as a vessel for God's love, bringing together hearts from across the world 
                in fellowship and faith. Every gathering reminds us that in Christ, there are no borders."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-subtitle">Join us for worship and fellowship</p>
          </div>
          
          <div className="events-grid">
            <div className="event-card">
              <div className="event-date">
                <span className="day">Wed</span>
                <span className="time">7:00 PM</span>
              </div>
              <div className="event-content">
                <h4>Prayer & Fellowship</h4>
                <p>Weekly gathering for prayer, worship, and community connection</p>
                <div className="event-details">
                  <span className="platform">📹 Zoom Meeting</span>
                  <span className="recurring">🔄 Weekly</span>
                </div>
              </div>
            </div>
            
            <div className="event-card special">
              <div className="event-badge">Special</div>
              <div className="event-date">
                <span className="day">Sun</span>
                <span className="time">Monthly</span>
              </div>
              <div className="event-content">
                <h4>Community Testimony</h4>
                <p>Share and celebrate God's goodness in our lives together</p>
                <div className="event-details">
                  <span className="platform">📹 Zoom Meeting</span>
                  <span className="recurring">📅 Monthly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="community">
        <div className="container">
          <div className="community-content">
            <div className="community-text">
              <h2>Join Our WhatsApp Community</h2>
              <p>
                Stay connected with fellow believers, receive prayer requests, event notifications, 
                and daily encouragements through our active WhatsApp group.
              </p>
              <div className="community-features">
                <div className="community-feature">
                  <span className="feature-icon">💬</span>
                  <span>Daily Devotionals</span>
                </div>
                <div className="community-feature">
                  <span className="feature-icon">📢</span>
                  <span>Event Notifications</span>
                </div>
                <div className="community-feature">
                  <span className="feature-icon">🤝</span>
                  <span>Prayer Requests</span>
                </div>
              </div>
              <a 
                href="https://chat.whatsapp.com/DKdmCbNa3w3L5LB1ZEA6mr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg viewBox="0 0 24 24" className="whatsapp-icon">
                  <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Join WhatsApp Group
              </a>
            </div>
            <div className="community-visual">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="chat-header">
                    <div className="chat-avatar">FL</div>
                    <div className="chat-info">
                      <h4>FaithLife Ministry</h4>
                      <span>Active now</span>
                    </div>
                  </div>
                  <div className="chat-messages">
                    <div className="message">Good morning family! 🌅</div>
                    <div className="message">Prayer request: Please pray for...</div>
                    <div className="message">Reminder: Tonight's meeting at 7PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="donate" className="support">
        <div className="container">
          <div className="support-content">
            <h2>Support Our Ministry</h2>
            <p>
              Your generous donations help us continue spreading God's love and maintaining our 
              online community. Every contribution makes a difference in our global ministry.
            </p>
            
            <div className="support-options">
              <div className="support-card">
                <h4>One-Time Donation</h4>
                <p>Support our ministry with a one-time gift</p>
                <button className="btn btn-primary">Donate Now</button>
              </div>
              <div className="support-card">
                <h4>Monthly Support</h4>
                <p>Become a monthly partner in our mission</p>
                <button className="btn btn-outline">Set up Monthly</button>
              </div>
            </div>

            <div className="support-info">
              <p><strong>How your donations help:</strong></p>
              <ul>
                <li>Maintain our Zoom meeting platform</li>
                <li>Support ministry outreach programs</li>
                <li>Provide resources for spiritual growth</li>
                <li>Assist community members in need</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>We'd love to connect with you and answer any questions about our ministry.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h4>WhatsApp Community</h4>
                    <p>Join our active group for daily connection</p>
                    <a href="https://chat.whatsapp.com/DKdmCbNa3w3L5LB1ZEA6mr" target="_blank" rel="noopener noreferrer">
                      Join Group
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">📹</div>
                  <div>
                    <h4>Zoom Meetings</h4>
                    <p>Every Wednesday at 7:00 PM</p>
                    <span>Meeting link shared in WhatsApp</span>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">🌍</div>
                  <div>
                    <h4>Global Reach</h4>
                    <p>USA • Ghana • UK • More</p>
                    <span>All time zones welcome</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <img src="/faithlifeministry.png" alt="FaithLife Ministry" className="footer-logo" />
              <h3>FaithLife Ministry</h3>
              <p>Connecting hearts across continents</p>
            </div>
            
            <div className="footer-links">
              <div className="footer-section">
                <h4>Ministry</h4>
                <button onClick={() => scrollToSection('about')}>About Us</button>
                <button onClick={() => scrollToSection('events')}>Events</button>
                <button onClick={() => scrollToSection('community')}>Community</button>
              </div>
              
              <div className="footer-section">
                <h4>Connect</h4>
                <a href="https://chat.whatsapp.com/DKdmCbNa3w3L5LB1ZEA6mr" target="_blank" rel="noopener noreferrer">
                  WhatsApp Group
                </a>
                <span>Zoom Meetings</span>
                <button onClick={() => scrollToSection('contact')}>Contact</button>
              </div>
              
              <div className="footer-section">
                <h4>Support</h4>
                <button onClick={() => scrollToSection('donate')}>Donate</button>
                <span>Prayer Requests</span>
                <span>Ministry Resources</span>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 FaithLife Ministry. All rights reserved.</p>
            <div className="footer-indicators">
              <span className="indicator">🟢 Active Community</span>
              <span className="indicator">🌍 Global Ministry</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
