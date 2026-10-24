import {
  GraduationCap,
  School,
  BookOpen,
  MapPin,
  CalendarDays,
} from "lucide-react";

const educationData = [
  {
    level: "UNDERGRADUATE",
    degree: "B.E. Computer Science & Engineering",
    institute: "Laxmi Institute of Technology",
    location: "Sarigam, Gujarat",
    duration: "July 2023 – July 2027",
    icon: GraduationCap,
    current: true,
  },
  {
    level: "SENIOR SECONDARY · CLASS XII",
    degree: "Higher Secondary Education",
    institute:
      "Gujarat Secondary and Higher Secondary Education Board",
    location: "Bhilad, Gujarat",
    duration: "May 2022 – May 2023",
    icon: BookOpen,
    current: false,
  },
  {
    level: "SECONDARY · CLASS X",
    degree: "Secondary Education",
    institute: "CBSE",
    location: "Ankleshwar, Gujarat",
    duration: "March 2020 – August 2021",
    icon: School,
    current: false,
  },
];

export default function Education() {
  return (
    <section
      className="education-section section-wrap"
      id="education"
    >
      <div className="education-heading">
        <p className="education-eyebrow">
          02 / EDUCATION
        </p>

        <h2>
          My academic <span>journey.</span>
        </h2>

        <p className="education-description">
          My educational background and academic progress in
          computer science and engineering.
        </p>
      </div>

      <div className="education-timeline">
        {educationData.map((item) => {
          const Icon = item.icon;

          return (
            <article
              className="education-card"
              key={item.level}
            >
              <div className="education-marker">
                <Icon size={23} />
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
                    <CalendarDays size={16} />
                    {item.duration}
                  </span>

                  <span>
                    <MapPin size={16} />
                    {item.location}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}