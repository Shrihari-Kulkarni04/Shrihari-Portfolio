import React from "react";
import "../styles.css";

const certificates = [
  {
    number: "01",
    title: "Agentic AI: From Learner to Builder",
    issuer: "IBM SkillsBuild / CSRBOX",
    description: "Four-week project-based learning program.",
    file: "agentic-ai.pdf",
    preview: "agentic-ai.png",
  },
  {
    number: "02",
    title: "Individual Excellence — Regional Finalist",
    issuer: "SkillUp Hackathon 2026",
    description:
      "Recognition for individual excellence at the regional level.",
    file: "hackathon-individual.pdf",
    preview: "hackathon-individual.png",
  },
  {
    number: "03",
    title: "Team Cortex — Regional Finalist",
    issuer: "SkillUp Hackathon 2026",
    description: "Regional finalist recognition for Team Cortex.",
    file: "hackathon-team.pdf",
    preview: "hackathon-team.png",
  },
  {
    number: "04",
    title: "Code Crasher — 1st Position",
    issuer: "EKATRA 2026",
    description:
      "Secured 1st position in Code Crasher at EKATRA 2026, held from 7–9 April 2026.",
    file: "code-crasher-winner.pdf",
    preview: "code-crasher-winner.png",
  },
  {
    number: "05",
    title: "AI Data Analytics Internship",
    issuer: "InAmigos Foundation",
    description:
      "Internship experience in AI-assisted data analytics.",
    file: "inamigos-internship.pdf",
    preview: "inamigos-internship.png",
  },
  {
    number: "06",
    title: "Idea Festival '25 — Best Idea",
    issuer: "Idea Festival 2025",
    description:
      "Secured First Position in the Best Idea category for the Virtual Tour Campus project on 16 April 2025.",
    file: "idea-fest-winner.pdf",
    preview: "idea-fest-winner.png",
  },
  {
    number: "07",
    title: "Code Unnati",
    issuer: "Edunet Foundation",
    description:
      "Training in Python Programming, Data Analysis with Python, Artificial Intelligence and SAP Conversational AI.",
    file: "code-unnati.pdf",
    preview: "code-unnati.png",
    vertical: true,
  },
];

function CertificateCard({ certificate }) {
  const pdfPath = `/certificates/${certificate.file}`;
  const previewPath = `/certificates/previews/${certificate.preview}`;
  const isVertical = certificate.vertical === true;

  return (
    <article
      className={`certificate-card ${
        isVertical ? "certificate-card-vertical" : ""
      }`}
    >
      <a
        className="certificate-preview"
        href={pdfPath}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${certificate.title} PDF`}
      >
        <img
          src={previewPath}
          alt={`${certificate.title} certificate preview`}
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="certificate-info">
        <span className="certificate-number">
          {certificate.number}
        </span>

        <h3>{certificate.title}</h3>

        <p className="certificate-issuer">
          {certificate.issuer}
        </p>

        <p>{certificate.description}</p>

        <a
          className="certificate-link"
          href={pdfPath}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate ↗
        </a>
      </div>
    </article>
  );
}

export default function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <span className="section-eyebrow">
          07 / CERTIFICATES
        </span>

        <h2 className="certificates-title">
          My <span>Certificates</span>
        </h2>

        <p className="certificates-intro">
          Certifications, achievements and learning milestones
          from my technical journey.
        </p>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.number}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}