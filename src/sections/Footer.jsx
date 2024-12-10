import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: 'transparent' }}>
      <div className="flex">
        <a href="https://instagram.com/shimmw.a" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}><img src="/instagram.png" alt="social"/></a>
        <a href="https://github.com/Aimekelvin" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}><img src="/github.png" alt="social"/></a>
        <a href="https://linkedin.com/shimwa-kelvin-4b0630297" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}><img src="/linkedin.png" alt="social"/></a>
      </div>
      <p style={{ marginTop: '10px', color: '#333' }}>Built with enthusiasm by Aime👾</p>
    </footer>
  );
};

export default Footer;
