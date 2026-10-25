import React from "react";

const experiences = [
{
number: "01",
role: "AI & Data Analyst Intern",
organization: "InAmigos Foundation",
period: "Internship Experience",
type: "INTERNSHIP",
description:
"Worked on NGO research, social impact data analysis, and AI-assisted growth strategies. Analyzed organizational information and explored data-driven insights to support NGO outreach, volunteer engagement, and fundraising.",
tags: ["Data Analytics", "Power BI", "AI Insights", "Research"],
},
{
number: "02",
role: "AI Engineer",
organization: "Code Intelligence Project",
period: "Project Experience",
type: "AI DEVELOPMENT",
description:
"Contributed to developing CodeAtlas, an AI-powered developer intelligence platform for repository analysis, software architecture insights, and automated documentation. Represented the project at the IBM SkillsBuild Regional Finale in Pune.",
tags: ["AI Integration", "Node.js", "GitHub", "Documentation"],
},
{
number: "03",
role: "Project Lead",
organization: "Code Unnati — Edunet Foundation",
period: "Project Experience",
type: "PROJECT LEADERSHIP",
description:
"Led project activities for an AI-driven personalized education system, contributing to project development, task coordination, and the implementation of technology-based learning solutions.",
tags: ["Project Leadership", "Python", "AI/ML", "Teamwork"],
},
{
number: "04",
role: "Student Coordinator",
organization: "College Events & Activities",
period: "LIT — Events & Sports",
type: "LEADERSHIP",
description:
"Supported student participation and event coordination for college activities, including Logo League and Sports Week. Contributed to organizing activities, coordinating participants, and supporting smooth event execution.",
tags: ["Event Coordination", "Leadership", "Communication", "Teamwork"],
},
];

function Experience() {
return (
<section className="experience-section" id="experience">
<div className="experience-container">
<span className="section-eyebrow">
06 / EXPERIENCE
</span>

    <div className="experience-heading">
      <h2>
        Experience & <span>Leadership</span>
      </h2>

      <p>
        Professional experience, AI project contributions, and
        leadership responsibilities that have shaped my journey.
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