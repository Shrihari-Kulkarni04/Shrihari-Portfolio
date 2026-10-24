import React, { useState } from "react";

import bootstrapIcon from "../assets/icons/bootstrap.svg";
import cIcon from "../assets/icons/c.svg";
import communicationIcon from "../assets/icons/communication.png";
import cssIcon from "../assets/icons/css.svg";
import databaseIcon from "../assets/icons/database.svg";
import expressIcon from "../assets/icons/express.svg";
import figmaIcon from "../assets/icons/figma.svg";
import flaskIcon from "../assets/icons/flask.svg";
import gitIcon from "../assets/icons/git.svg";
import githubIcon from "../assets/icons/github.svg";
import htmlIcon from "../assets/icons/html5.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import leadershipIcon from "../assets/icons/leadership.png";
import micIcon from "../assets/icons/mic.svg";
import mongodbIcon from "../assets/icons/mongodb.svg";
import nodeIcon from "../assets/icons/nodedotjs.svg";
import powerbiIcon from "../assets/icons/powerbi.svg";
import pythonIcon from "../assets/icons/python.svg";
import reactIcon from "../assets/icons/react.svg";
import streamlitIcon from "../assets/icons/streamlit.svg";
import tailwindIcon from "../assets/icons/tailwindcss.svg";
import teamworkIcon from "../assets/icons/team.svg";
import tensorflowIcon from "../assets/icons/tensorflow.svg";
import viteIcon from "../assets/icons/vite.svg";
import problemSolvingIcon from "../assets/icons/problem solving.svg";

const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    color: "#ff38a8",
    glow: "rgba(255, 56, 168, 0.25)",
    icon: "</>",
    skills: [
      { name: "Python", icon: pythonIcon, color: "#ffd343" },
      { name: "JavaScript", icon: javascriptIcon, color: "#f7df1e" },
      { name: "SQL", icon: databaseIcon, color: "#4db6ac" },
      { name: "C", icon: cIcon, color: "#5b9bd5" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    color: "#398bff",
    glow: "rgba(57, 139, 255, 0.3)",
    icon: "✧",
    skills: [
      { name: "HTML5", icon: htmlIcon, color: "#ff7043" },
      { name: "CSS3", icon: cssIcon, color: "#42a5f5" },
      { name: "React", icon: reactIcon, color: "#61dafb" },
      { name: "Bootstrap", icon: bootstrapIcon, color: "#b388ff" },
      { name: "Tailwind CSS", icon: tailwindIcon, color: "#38bdf8" },
      { name: "Vite", icon: viteIcon, color: "#bd93f9" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    color: "#00d99a",
    glow: "rgba(0, 217, 154, 0.25)",
    icon: "▤",
    skills: [
      { name: "Node.js", icon: nodeIcon, color: "#7cc84a" },
      { name: "Express.js", icon: expressIcon, color: "#ffffff" },
      { name: "Flask", icon: flaskIcon, color: "#ffffff" },
      { name: "MongoDB", icon: mongodbIcon, color: "#47b881" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Analytics",
    color: "#f5a623",
    glow: "rgba(245, 166, 35, 0.25)",
    icon: "⚙",
    skills: [
      { name: "Power BI", icon: powerbiIcon, color: "#f2c811" },
      { name: "Git", icon: gitIcon, color: "#f05032" },
      { name: "GitHub", icon: githubIcon, color: "#ffffff" },
      { name: "Figma", icon: figmaIcon, color: "#a259ff" },
      { name: "Streamlit", icon: streamlitIcon, color: "#ff4b4b" },
      { name: "TensorFlow", icon: tensorflowIcon, color: "#ff9a32" },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.25)",
    icon: "♧",
    skills: [
      { name: "Team Leadership", icon: leadershipIcon, color: "#c084fc" },
      { name: "Communication", icon: communicationIcon, color: "#67e8f9" },
      { name: "Public Speaking", icon: micIcon, color: "#f9a8d4" },
      { name: "Teamwork", icon: teamworkIcon, color: "#86efac" },
      {
        name: "Problem Solving",
        icon: problemSolvingIcon,
        color: "#fcd34d",
      },
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
          <span className="skills-section-label">05 / SKILLS</span>

          <h2>
            Skills <span>Universe</span>
          </h2>

          <p>Technologies orbiting in perfect harmony</p>

          <div className="skills-instructions">
            Hover over skills · Click center to pause
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
                    <span className="orbit-skill-icon">
                      <img
                        src={skill.icon}
                        alt=""
                        aria-hidden="true"
                        className="skill-brand-icon"
                        draggable="false"
                      />
                    </span>
                  </button>
                ))}
              </div>

              <button
                className="skill-universe-center"
                onClick={() => setPaused((current) => !current)}
                aria-label={`${
                  paused ? "Resume" : "Pause"
                } orbit animations`}
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
              <strong>
                {activeSkill.substring(activeSkill.indexOf("-") + 1)}
              </strong>
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