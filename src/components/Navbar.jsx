import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{
    background: '#fff',
    padding: '15px 30px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  }}>
    <h2 style={{ display: 'inline-block', marginRight: '30px' }}>DuraAcademy</h2>
    <Link to="/" style={{ marginRight: '20px' }}>Register</Link>
    <Link to="/courses">Courses</Link>
  </nav>
);

export default Navbar;
