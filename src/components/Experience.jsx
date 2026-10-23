
import React from "react";

const experiences = [
  {
    number: "01",
    role: "Data Science Intern",
    organization: "Internship Experience",
    period: "Internship",
    type: "INTERNSHIP",
    description:
      "Worked on data science and analytics-related tasks, developing practical skills in data analysis, Python, and AI-driven solutions.",
    tags: ["Python", "Data Analytics", "AI/ML"],
  },
  {
    number: "02",
    role: "AI Engineer",
    organization: "Code Intelligence Project",
    period: "Project Experience",
    type: "PROJECT EXPERIENCE",
    description:
      "Contributed to an AI-powered developer intelligence platform focused on repository analysis, software architecture understanding, and automated documentation.",
    tags: ["AI Integration", "Node.js", "GitHub"],
  },
  {
    number: "03",
    role: "Student Coordinator",
    organization: "Chess Sports Week",
    period: "LIT 2K26",
    type: "LEADERSHIP",
    description:
      "Took responsibility as a boys' chess coordinator, supporting event coordination and participation during the college sports week.",
    tags: ["Coordination", "Leadership", "Teamwork"],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <span className="section-eyebrow">
          <span className="status-dot" />
          07 / EXPERIENCE
        </span>

        <div className="experience-heading">
          <h2>
            Experience & <span>Leadership</span>
          </h2>
          <p>
            Practical learning, project contributions, and responsibilities
            that have shaped my professional journey.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-card" key={item.number}>
              <div className="experience-number">{item.number}</div>

              <div className="experience-details">
                <div className="experience-meta">
                  <span>{item.type}</span>
                  <span>{item.period}</span>
                </div>

                <h3>{item.role}</h3>
                <h4>{item.organization}</h4>
                <p>{item.description}</p>

                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
