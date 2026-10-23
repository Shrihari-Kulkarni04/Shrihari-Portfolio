import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["education", "Education"],
  ["certificates", "Certificates"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["resume", "Resume"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <a href="#home" className="brand" onClick={closeMenu}>
        SK<span>.</span>
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        aria-label="Main navigation"
      >
        {navItems.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            aria-current={activeSection === id ? "location" : undefined}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact" onClick={closeMenu}>
        Let's talk <ArrowUpRight size={15} />
      </a>
    </header>
  );
}
