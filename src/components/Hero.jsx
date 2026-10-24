
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";

const roles = [
  "Data Analyst",
  "Data Scientist",
  "Python Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let delay = deleting ? 45 : 90;

    if (!deleting && displayText === currentRole) {
      delay = 1400;
    } else if (deleting && displayText === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && displayText === currentRole) {
        setDeleting(true);
      } else if (deleting && displayText === "") {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else if (deleting) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span className="hero-status-dot" />
          DATA-DRIVEN. INSIGHT-FOCUSED.
        </p>

        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">
          Shrihari <span>Kulkarni!</span>
        </h1>

        <h2 className="hero-role">
          I'm a <span>{displayText}</span>
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          I transform raw data into meaningful insights and
          actionable solutions. I enjoy exploring datasets,
          discovering patterns, and using analytical thinking
          to solve real-world problems.
        </p>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>8.61</strong>
            <span>SPI · Semester 6</span>
          </div>

          <div className="hero-stat-divider" />

          <div className="hero-stat">
            <strong>8.63</strong>
            <span>CGPA</span>
          </div>

          <div className="hero-stat-divider" />

          <div className="hero-stat">
            <strong>8.57</strong>
            <span>CPI</span>
          </div>
        </div>

        <div className="hero-actions">
          <a
            className="hero-button hero-button-primary"
            href="/resume.pdf"
            download
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            className="hero-button hero-button-secondary"
            href="#contact"
          >
            Contact Me
            <ArrowUpRight size={18} />
          </a>
        </div>

        <a className="hero-scroll" href="#about">
          <ArrowDown size={16} />
          <span>Scroll to explore</span>
        </a>
      </div>      
        <div className="hero-image-wrapper">
        <div className="hero-image-glow" />
        <div className="hero-image-frame">
            <img
            src="/shrihari.png"
            alt="Shrihari Kulkarni"
            className="hero-image"
            />
        </div>
        <div className="hero-image-caption">
            <span className="hero-status-dot" />
        </div>
      </div>
    </section>
  );
}
