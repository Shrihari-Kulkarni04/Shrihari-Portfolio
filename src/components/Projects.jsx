
import React from "react";

const projects = [
  {
    number: "01",
    title: "EduPredict",
    category: "AI / MACHINE LEARNING",
    description:
      "An AI-powered personalized education system designed to analyze student performance and provide personalized learning recommendations.",
    technologies: ["Python", "TensorFlow", "Keras", "Streamlit", "MongoDB"],
    demo: "https://edupredict-qc6j.streamlit.app/",
    github: "https://github.com/Shrihari-Kulkarni04/EduPredict",
    accent: "cyan",
  },
  {
    number: "02",
    title: "CAMOSPHERE",
    category: "WEB DEVELOPMENT",
    description:
      "A virtual campus tour platform concept that helps visitors explore campus spaces through an interactive digital experience. Some pages and features are still under development.",
    technologies: ["React", "React Three Fiber", "Expo GL", "Blender"],
    demo: "https://camosphere.vercel.app/",
    github: "https://github.com/Shrihari-Kulkarni04/Camosphere",
    accent: "violet",
  },
  {
    number: "03",
    title: "CodeAtlas",
    category: "AI / DEVELOPER TOOLS",
    description:
      "An AI-powered developer intelligence platform for analyzing code repositories, understanding software architecture, and generating documentation.",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "IBM Bob"],
    demo: "https://codeatlas05.vercel.app/",
    github: "https://github.com/Shrihari-Kulkarni04/CodeAltas",
    accent: "green",
  },
  {
    number: "04",
    title: "Securitisation Risk Dashboard",
    category: "DATA ANALYTICS / POWER BI",
    description:
      "A Power BI dashboard focused on securitised loan portfolio analysis, credit-risk monitoring, delinquency patterns, and portfolio loss insights.",
    technologies: ["Power BI", "DAX", "Data Analytics", "Risk Analysis"],
    demo: null,
    github:
      "https://github.com/Shrihari-Kulkarni04/Securitisation-Risk-Dashboard",
    accent: "cyan",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
        <span className="section-eyebrow">
            04 / PROJECTS 
        </span>

        <h4>
            What <span>have </span>I <span>built?</span>
        </h4>
        
        <h2>
            Featured <span>Projects</span>
        </h2>

        <p>
            A selection of projects combining data analytics, artificial
            intelligence, and software development.
        </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card project-${project.accent}`}
              key={project.number}
            >
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  {project.technologies.map((technology) => (
                    <span className="tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                {project.demo && (
                  <a
                    className="project-link project-demo-link"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <span aria-hidden="true">↗</span>
                  </a>
                )}

                <a
                  className="project-link project-github-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-bottom-note">
          <span className="status-dot" />
          Always learning. Always building.
        </div>
      </div>
    </section>
  );
}

export default Projects;
