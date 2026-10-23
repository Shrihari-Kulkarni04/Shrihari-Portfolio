
import React from "react";

const certificates = [
  {
    number: "01",
    title: "AI / Machine Learning",
    issuer: "Certificate details to be added",
    description:
      "A place to showcase a verified AI or machine learning certification.",
  },
  {
    number: "02",
    title: "Data Analytics",
    issuer: "Certificate details to be added",
    description:
      "A place to showcase a verified data analytics or Power BI certification.",
  },
];

function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <span className="section-eyebrow">
          03 / CERTIFICATES
        </span>

        <h2 className="certificates-title">
          My <span>Certificates</span>
        </h2>

        <p className="certificates-intro">
          Certifications and learning milestones from my technical journey.
        </p>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.number}>
              <span className="certificate-number">
                {certificate.number}
              </span>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p>{certificate.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
