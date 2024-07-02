import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer-text">Contact Us</h4>
          <p className="footer-text">Email: thomas.augot@hotmail.fr</p>
          <p className="footer-text">Phone: +34 645 52 12 46</p>
          <p className="footer-text">Address: Corralejo, Spain</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Thomas' React E-Commerce. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
