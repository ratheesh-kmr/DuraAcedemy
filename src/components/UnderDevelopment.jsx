import React from 'react';

const UnderDevelopment = () => {
  return (
    <div style={styles.container}>
      <img 
        src="https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif" 
        alt="Under Development" 
        style={styles.gif}
      />
      <h2 style={styles.text}>This page is under development 🚧</h2>
      <p style={styles.subtext}>Please check back soon!</p>
    </div>
  );
};

const styles = {
  container: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  gif: {
    width: '200px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '24px',
    marginBottom: '8px',
  },
  subtext: {
    fontSize: '16px',
    color: '#666',
  },
};

export default UnderDevelopment;
