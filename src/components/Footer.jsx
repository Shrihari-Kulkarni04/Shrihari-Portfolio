import React, { useState } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Shrihari-Kulkarni04",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shrihari-kulkarni-aa57b931b/",
    },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Main Footer */}
        <div className="footer-main">
          <div className="footer-brand-section">
          {/* Row 1: Logo */}
          <a href="#home" className="footer-brand" aria-label="Go to home">
            <img src="/logo.png" alt="SK." />
          </a>

          {/* Row 2: Tagline */}
          <p className="footer-tagline">
            Turning data into insights.
            <br />
            Turning ideas into reality.
          </p>

          {/* Row 3: Availability Button */}
          <a href="#contact" className="footer-opportunity">
            <span className="footer-status-dot" />
            <span>Open to opportunities</span>
          </a>
        </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-column">
            <h3>Connect With Me</h3>

            <ul>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    <span className="footer-external-icon">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <a className="footer-contact-link" href="#contact">
              Let's work together <span>→</span>
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © {currentYear} <span>Shrihari Kulkarni</span>. All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to top <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;