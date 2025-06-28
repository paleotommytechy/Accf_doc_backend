// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-white py-5"
    style={{
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        }}
    >
      <div className="container">
        <div className="row text-start gy-4">

          {/* LOGO + NAME */}
          <div className="col-md-3">
            <h1 className="navbar-brand text-white logo-jilem" to="/">JILEM</h1>
          </div>

          {/* LOCATION & CONTACT */}
          <div className="col-md-3">
            <h5 className="footer-title">Location</h5>
            <p>123 Church Avenue<br />Lagos, Nigeria</p>
            <h5 className="footer-title mt-4">Contact</h5>
            <p className="mb-1">+234 800 123 4567</p>
            <p>info@jilem.org</p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled text-uppercase">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="col-md-3">
            <h5 className="footer-title">Stay Connected</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-5"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-white fs-5"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
          < br />
          <div className="container col-md-3 text-center mymt">
              <p className="mb-1">Paleotommytechy © {new Date().getFullYear()}</p>
        <small>Designed with love and purpose.</small>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;