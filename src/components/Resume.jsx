
import React from "react";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">
        <span className="section-eyebrow">
          06 / RESUME
        </span>

        <div className="resume-content">
          <div className="resume-text">
            <span className="resume-tag">MY CAREER PROFILE</span>

            <h2>
              Let's take a look at my <span>Resume.</span>
            </h2>

            <p>
              Explore my academic background, technical skills, projects,
              and experience in data analytics, Python, and AI-driven
              development.
            </p>

            <div className="resume-actions">
              <a
                href="/resume.pdf"
                className="resume-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume <span>↗</span>
              </a>

              <a
                href="/resume.pdf"
                className="resume-button resume-button-outline"
                download="Shrihari-Kulkarni-Resume.pdf"
              >
                Download PDF <span>↓</span>
              </a>
            </div>
          </div>

          <div className="resume-preview">
            <div className="resume-preview-top">
              <span />
              <span />
              <span />
              <small>RESUME.PDF</small>
            </div>

            <div className="resume-paper">
              <div className="resume-paper-header">
                <div>
                  <div className="resume-skeleton resume-name" />
                  <div className="resume-skeleton resume-subtitle" />
                </div>
                <div className="resume-avatar">SK</div>
              </div>

              <div className="resume-paper-line" />

              <div className="resume-skeleton resume-heading-line" />
              <div className="resume-skeleton" />
              <div className="resume-skeleton resume-short-line" />

              <div className="resume-skeleton resume-heading-line" />
              <div className="resume-skeleton" />
              <div className="resume-skeleton" />
              <div className="resume-skeleton resume-short-line" />

              <div className="resume-skeleton resume-heading-line" />
              <div className="resume-skeleton" />
              <div className="resume-skeleton resume-short-line" />

              <div className="resume-skeleton resume-heading-line" />
              <div className="resume-skeleton" />
              <div className="resume-skeleton resume-short-line" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
