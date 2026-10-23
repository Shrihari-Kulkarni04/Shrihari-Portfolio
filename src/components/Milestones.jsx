import React from "react";

const milestones = [
  {
    number: "01",
    title: "Best Idea — Virtual Campus Tour",
    subtitle: "Idea Festival '25",
    detail:
      "Secured first position for the CAMOSPHERE virtual campus tour idea.",
    year: "2025",
    accent: "cyan",
  },
  {
    number: "02",
    title: "Chess — Silver Medal",
    subtitle: "LIT Sports Week 2K26",
    detail:
      "Earned a silver medal in chess during the college sports week.",
    year: "2026",
    accent: "violet",
  },
  {
    number: "03",
    title: "Best Traditional Outfit",
    subtitle: "College Recognition",
    detail:
      "Received recognition for Best Traditional Outfit in the male category.",
    year: "2025",
    accent: "green",
  },
];

function Milestones() {
  return (
    <section className="milestones-section" id="milestones">
      <div className="milestones-container">
        <span className="section-eyebrow">
          08 / MILESTONES
        </span>

        <div className="milestones-heading">
          <h2>
            Achievements & <span>Milestones</span>
          </h2>
          <p>
            Highlights, recognitions, and memorable moments from my journey.
          </p>
        </div>

        <div className="milestones-grid">
          {milestones.map((item) => (
            <article
              className={`milestone-card milestone-${item.accent}`}
              key={item.number}
            >
              <div className="milestone-card-top">
                <span className="milestone-number">{item.number}</span>
                <span className="milestone-year">{item.year}</span>
              </div>

              <div className="milestone-symbol" aria-hidden="true">
                {item.number === "01"
                  ? "✦"
                  : item.number === "02"
                    ? "♟"
                    : "✧"}
              </div>

              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Milestones;
