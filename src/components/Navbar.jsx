import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["education", "Education"],
  ["certificates", "Certificates"],
  ["projects", "Projects"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const updateActiveSection = () => {
      const activationLine = window.innerHeight * 0.35;
      let currentSection = "home";
      let smallestDistance = Infinity;

      for (const [id] of navItems) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (
          rect.top <= activationLine &&
          rect.bottom > activationLine
        ) {
          currentSection = id;
          break;
        }

        const distance = Math.abs(rect.top - activationLine);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          currentSection = id;
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    const handleHashChange = () => {
      const id = window.location.hash.replace("#", "");

      if (navItems.some(([sectionId]) => sectionId === id)) {
        setActiveSection(id);
      }

      window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  function handleNavClick(id) {
    setActiveSection(id);
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <a
        href="#home"
        className="brand"
        onClick={() => handleNavClick("home")}
      >
        <img src="/logo.png" alt="SK Logo" />
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
            aria-current={
              activeSection === id ? "location" : undefined
            }
            onClick={() => handleNavClick(id)}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        className="nav-cta"
        href="#contact"
        onClick={() => handleNavClick("contact")}
      >
        Let's talk <ArrowUpRight size={15} />
      </a>
    </header>
  );
}