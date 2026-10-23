
import React, { useState } from "react";

const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    color: "#ff38a8",
    glow: "rgba(255, 56, 168, 0.25)",
    icon: "</>",
    skills: [
      { name: "Python", icon: "Py", color: "#ffd343" },
      { name: "JavaScript", icon: "JS", color: "#f7df1e" },
      { name: "SQL", icon: "SQL", color: "#4db6ac" },
      { name: "C", icon: "C", color: "#5b9bd5" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    color: "#398bff",
    glow: "rgba(57, 139, 255, 0.3)",
    icon: "✧",
    skills: [
      { name: "HTML5", icon: "5", color: "#ff7043" },
      { name: "CSS3", icon: "3", color: "#42a5f5" },
      { name: "React", icon: "⚛", color: "#61dafb" },
      { name: "Bootstrap", icon: "B", color: "#b388ff" },
      { name: "Tailwind CSS", icon: "≈", color: "#38bdf8" },
      { name: "Vite", icon: "V", color: "#bd93f9" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    color: "#00d99a",
    glow: "rgba(0, 217, 154, 0.25)",
    icon: "▤",
    skills: [
      { name: "Node.js", icon: "JS", color: "#7cc84a" },
      { name: "Express.js", icon: "Ex", color: "#ffffff" },
      { name: "Flask", icon: "F", color: "#ffffff" },
      { name: "MongoDB", icon: "DB", color: "#47b881" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Analytics",
    color: "#f5a623",
    glow: "rgba(245, 166, 35, 0.25)",
    icon: "⚙",
    skills: [
      { name: "Power BI", icon: "BI", color: "#f2c811" },
      { name: "Git", icon: "Git", color: "#f05032" },
      { name: "GitHub", icon: "GH", color: "#ffffff" },
      { name: "Figma", icon: "Fi", color: "#a259ff" },
      { name: "Streamlit", icon: "St", color: "#ff4b4b" },
      { name: "TensorFlow", icon: "TF", color: "#ff9a32" },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.25)",
    icon: "♧",
    skills: [
      { name: "Team Leadership", icon: "TL", color: "#c084fc" },
      { name: "Communication", icon: "CM", color: "#67e8f9" },
      { name: "Public Speaking", icon: "PS", color: "#f9a8d4" },
      { name: "Teamwork", icon: "TW", color: "#86efac" },
      { name: "Problem Solving", icon: "PS", color: "#fcd34d" },
    ],
  },
];

function Skills() {
  const [paused, setPaused] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="skills-universe" id="skills">
      <div className="skills-universe-container">
        <div className="skills-universe-heading">
          <span className="skills-section-label">
            05 / SKILLS
          </span>

          <h2>
            Skills <span>Universe</span>
          </h2>

          <p>Technologies orbiting in perfect harmony</p>

          <div className="skills-instructions">
            <span>/</span> Hover over skills · Click center to pause
          </div>
        </div>

        <div
          className={`skills-orbit-layout ${paused ? "is-paused" : ""}`}
        >
          {skillGroups.map((group) => (
            <div
              className={`skill-universe-group group-${group.id}`}
              key={group.id}
              style={{
                "--group-color": group.color,
                "--group-glow": group.glow,
              }}
            >
              <div className="orbit-rings" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((ring) => (
                  <span className="orbit-ring" key={ring} />
                ))}
              </div>

              <div className="skill-orbit-track">
                {group.skills.map((skill, index) => (
                  <button
                    className={`orbit-skill ${
                      activeSkill === `${group.id}-${skill.name}`
                        ? "skill-selected"
                        : ""
                    }`}
                    key={skill.name}
                    style={{
                      "--skill-index": index,
                      "--skill-count": group.skills.length,
                      "--skill-color": skill.color,
                    }}
                    title={skill.name}
                    aria-label={skill.name}
                    onMouseEnter={() =>
                      setActiveSkill(`${group.id}-${skill.name}`)
                    }
                    onMouseLeave={() => setActiveSkill(null)}
                    onFocus={() =>
                      setActiveSkill(`${group.id}-${skill.name}`)
                    }
                    onBlur={() => setActiveSkill(null)}
                  >
                    <span>{skill.icon}</span>
                  </button>
                ))}
              </div>

              <button
                className="skill-universe-center"
                onClick={() => setPaused((current) => !current)}
                aria-label={`${paused ? "Resume" : "Pause"} orbit animations`}
                aria-pressed={paused}
              >
                <span className="universe-center-icon">{group.icon}</span>
                <strong>{group.title}</strong>
                <small>{group.skills.length} skills</small>
              </button>
            </div>
          ))}
        </div>

        <div className="active-skill-label" aria-live="polite">
          {activeSkill ? (
            <>
              Exploring{" "}
              <strong>{activeSkill.substring(activeSkill.indexOf("-") + 1)}</strong>
            </>
          ) : (
            "Explore my technical and professional skills"
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;
