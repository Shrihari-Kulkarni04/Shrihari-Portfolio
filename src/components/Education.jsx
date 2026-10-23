
import { GraduationCap, School, BookOpen, MapPin, CalendarDays } from "lucide-react";

const educationData = [
  {
    level: "UNDERGRADUATE",
    degree: "B.E. Computer Science & Engineering",
    institute: "Laxmi Institute of Technology",
    location: "Sarigam, Gujarat",
    duration: "July 2023 – July 2027",
    result: [
      { label: "CPI", value: "8.66" },
      { label: "Semester 6 SPI", value: "8.61" },
    ],
    icon: GraduationCap,
    current: true,
  },
  {
    level: "SENIOR SECONDARY · CLASS XII",
    degree: "Higher Secondary Education",
    institute: "Gujarat Secondary and Higher Secondary Education Board",
    location: "Bhilad, Gujarat",
    duration: "May 2022 – May 2023",
    result: [{ label: "Percentage", value: "65.00%" }],
    icon: BookOpen,
    current: false,
  },
  {
    level: "SECONDARY · CLASS X",
    degree: "Secondary Education",
    institute: "CBSE",
    location: "Ankleshwar, Gujarat",
    duration: "March 2020 – August 2021",
    result: [{ label: "Percentage", value: "80.00%" }],
    icon: School,
    current: false,
  },
];

export default function Education() {
  return (
    <section className="education-section section-wrap" id="education">
      <div className="education-heading">
        <p className="education-eyebrow">02 / EDUCATION</p>
        <h2>
          My academic <span>journey.</span>
        </h2>
        <p className="education-description">
          My educational background and academic progress in
          computer science and engineering.
        </p>
      </div>

      <div className="education-timeline">
        {educationData.map((item, index) => {
          const Icon = item.icon;

          return (
            <article className="education-card" key={item.level}>
              <div className="education-marker">
                <Icon size={21} />
              </div>

              <div className="education-card-content">
                <div className="education-card-top">
                  <span className="education-level">
                    {item.level}
                  </span>

                  {item.current && (
                    <span className="education-current">
                      <span className="education-current-dot" />
                      IN PROGRESS
                    </span>
                  )}
                </div>

                <h3>{item.degree}</h3>
                <p className="education-institute">
                  {item.institute}
                </p>

                <div className="education-meta">
                  <span>
                    <CalendarDays size={14} />
                    {item.duration}
                  </span>

                  <span>
                    <MapPin size={14} />
                    {item.location}
                  </span>
                </div>

                <div className="education-results">
                  {item.result.map((result) => (
                    <div className="education-result" key={result.label}>
                      <span>{result.label}</span>
                      <strong>{result.value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
