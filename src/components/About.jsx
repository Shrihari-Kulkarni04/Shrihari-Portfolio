
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  BrainCircuit,
  Code2,
} from "lucide-react";

const focusAreas = [
  {
    icon: ChartNoAxesCombined,
    title: "Data Analytics",
    description:
      "Exploring datasets, identifying patterns, and presenting insights through meaningful visualizations.",
    color: "cyan",
  },
  {
    icon: BrainCircuit,
    title: "Data Science",
    description:
      "Learning statistical thinking, machine learning, and data-driven approaches to real-world problems.",
    color: "violet",
  },
  {
    icon: Code2,
    title: "Python Development",
    description:
      "Using Python to work with data, automate tasks, and develop practical technical solutions.",
    color: "cyan",
  },
];

export default function About() {
  return (
    <section className="about-section section-wrap" id="about">
      <div className="about-heading">
        <p className="about-eyebrow">01 / ABOUT ME</p>

        <h2>
          Turning data into{" "}
          <span>decisions.</span>
        </h2>

        <p className="about-intro">
          I'm Shrihari Kulkarni, a Computer Science engineering
          student interested in Data Analytics, Data Science,
          and practical AI solutions.
        </p>
      </div>

      <div className="about-layout">
        <div className="about-story">
          <div className="about-story-index">MY APPROACH</div>

          <h3>
            Curious about data.
            <br />
            Focused on <span>impact.</span>
          </h3>

          <p>
            I enjoy exploring datasets, identifying patterns,
            and transforming raw information into meaningful
            insights. My goal is to build solutions that make
            complex information easier to understand and use.
          </p>

          <p>
            I'm continuously developing my skills in Python,
            data visualization, analytics, and machine learning
            while working on practical projects that strengthen
            my problem-solving abilities.
          </p>

          <a className="about-contact-link" href="#contact">
            Let's connect
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="about-focus-list">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <article className="about-focus-card" key={item.title}>
                <div className={`about-focus-icon ${item.color}`}>
                  <Icon size={23} />
                </div>

                <div className="about-focus-content">
                  <span className="about-focus-number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <ArrowUpRight
                  className="about-focus-arrow"
                  size={18}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
