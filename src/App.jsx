import React, { useState } from 'react';
import './App.css';
import Contact from './components/Contact';

const App = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'wellness', label: 'Wellness', href: '#wellness' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const handleMenuClick = (itemId) => {
    setActiveMenu(itemId);
    setCurrentPage(itemId);
  };

  return (
    <div className="app">
      {/* Navigation Menu */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h1>MyWellHome</h1>
          </div>
          <ul className="nav-menu">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main className="main-content">
        {currentPage === 'home' && (
          <>
            <section className="hero-section" id="home">
              <div className="hero-container">
                <div className="hero-content">
                  <h1 className="hero-title">Welcome to MyWellHome</h1>
                  <p className="hero-subtitle">
                    Your sanctuary for wellness, comfort, and healthy living
                  </p>
                  <p className="hero-description">
                    Discover a space designed to nurture your mind, body, and soul. 
                    We believe that your home should be more than just a place to live—
                    it should be your personal wellness retreat.
                  </p>
                  <div className="hero-buttons">
                    <button className="btn btn-primary">Get Started</button>
                    <button className="btn btn-secondary">Learn More</button>
                  </div>
                </div>
                <div className="hero-image">
                  <img 
                    src={`${import.meta.env.BASE_URL}health.png`} 
                    alt="Smart Healthcare - Telemedicine and Digital Health"
                    className="healthcare-illustration"
                  />
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
              <div className="container">
                <h2 className="section-title">Why Choose MyWellHome?</h2>
                <div className="features-grid">
                  <div className="feature-card">
                    <div className="feature-icon">🌿</div>
                    <h3>Natural Living</h3>
                    <p>Embrace eco-friendly solutions for a healthier lifestyle</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">🧘</div>
                    <h3>Mindful Spaces</h3>
                    <p>Create peaceful environments that promote relaxation</p>
                  </div>
                  <div className="feature-card">
                    <div className="feature-icon">💚</div>
                    <h3>Wellness Focus</h3>
                    <p>Prioritize your health with our wellness-centered approach</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Demo Video Section */}
            <section className="demo-video-section">
              <div className="container">
                <div className="demo-video-card">
                  <h2 className="demo-title">🎥 See MyWellHome in Action</h2>
                  <div className="demo-buttons">
                    <a
                      href="https://www.youtube.com/watch?v=Ep6PalRTMmk&t=5s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-video-btn"
                    >
                      <span className="video-icon">▶️</span>
                      Watch Full Video
                    </a>
                    <a
                      href="https://streamable.com/b7j8dn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="demo-video-btn"
                    >
                      <span className="video-icon">🎬</span>
                      Watch Short Introduction
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'contact' && <Contact />}

        {currentPage !== 'home' && currentPage !== 'contact' && (
          <div className="page-placeholder">
            <div className="container">
              <h1>Coming Soon</h1>
              <p>The {currentPage} page is under development.</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 MyWellHome. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;