import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/about">About</a>
        </div>
        <div className="footer-contact">
          <span><a href="tel:+91-87542-10499">+91-87542-10499</a></span>
          <span className="separator">|</span>
          <span><a href="mailto:indiautoledger@outlook.in">indiautoledger@outlook.in</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
