// src/screens/HomeScreen.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ChatBotComponent from '../components/ChatBotComponent';
import Register from '../components/Register';
import '../styles/HomeScreen.css';

const HomeScreen = () => {
  const [showRegister, setShowRegister] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowRegister(false);
      }
    };

    if (showRegister) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showRegister]);

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="logo">DuraAcademy</div>
        <ul className="nav-links">
          <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/career-support">Career Support</Link></li>
            <li><Link to="/success-stories">Success Stories</Link></li>
            <li><Link to="/enterprise">Enterprise</Link></li>
            <li><Link to="/for-recruiters">For Recruiters</Link></li>
            <li><Link to="/more">More ▼</Link></li>
        </ul>
        <button className="login-btn" onClick={() => setShowRegister(true)}>
          Register
        </button>
      </nav>

      <div className="hero-section">
        <div className="left-content">
          <h1>Welcome to <br /> DuraAcademy</h1>
          <p>Empowering learners with high-impact, real-world skills across industries.</p>
          <p><strong>4/5 learners landed their dream role*</strong></p>
          <Link to="/courses">
            <button className="explore-btn">Browse Courses →</button>
          </Link>

          <div className="ratings">
            <span>⭐ 4.8 Learner Reviews</span>
            <span>⭐ 4.9 Course Experience</span>
            <span>⭐ 5.0 Support</span>
            <span>⭐ 4.7 Career Uplift</span>
          </div>
        </div>

        <div className="right-content">
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2"
            alt="Mentor"
            className="hero-image"
            style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
      </div>

      {/* Chatbot Integration */}
      <ChatBotComponent />

      {/* Register Popup */}
      {showRegister && (
        <div
          ref={popupRef}
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1500,
            backgroundColor: '#f0f0f0',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            width: '270px',
            padding: '16px',
          }}
        >
          <Register onClose={() => setShowRegister(false)} />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
