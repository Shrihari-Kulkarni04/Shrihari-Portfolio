import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Milestones from "./components/Milestones";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const navItems = [
  ['home', 'Home'], ['about', 'About'], ['education', 'Education'], ['certificates', 'Certificates'],
  ['projects', 'Projects'], ['skills', 'Skills'], ['resume', 'Resume'], ['experience', 'Experience'], ['contact', 'Contact']
];
const projects = [
  { number: '01', title: 'EduPredict', type: 'AI / Education', description: 'A student-focused learning platform concept that uses academic data to support personalized learning insights.', stack: ['Python', 'Streamlit', 'MongoDB'], link: 'https://github.com/' },
  { number: '02', title: 'CAMOSPHERE', type: 'Web / 3D Experience', description: 'An interactive virtual campus-tour concept featuring panoramic exploration and an event-focused experience.', stack: ['React', 'React Three Fiber', 'Blender'], link: 'https://github.com/' },
  { number: '03', title: 'AI Code Intelligence', type: 'AI / Developer Tools', description: 'A concept for analyzing code repositories and generating useful documentation to help developers understand projects faster.', stack: ['Python', 'LLM APIs', 'React'], link: 'https://github.com/' },
];
const skillGroups = [
  { title: 'Programming', skills: ['Python', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  { title: 'Frontend', skills: ['React', 'Vite', 'Responsive UI', 'React Native'] },
  { title: 'AI & Data', skills: ['Machine Learning', 'Pandas', 'NumPy', 'TensorFlow', 'Generative AI'] },
  { title: 'Tools & Backend', skills: ['Git', 'GitHub', 'MongoDB', 'Supabase', 'Streamlit', 'Power BI'] },
];
const experiences = [
  { date: 'PROJECT EXPERIENCE', title: 'AI & Software Projects', org: 'Academic and independent work', text: 'Building practical projects across web development, data science, and AI-assisted developer workflows.' },
  { date: 'VOLUNTEERING', title: 'Student Activities & Coordination', org: 'College and community activities', text: 'Contributed to event coordination, teamwork, and student-focused activities.' },
];

function SectionHeading({ eyebrow, title, accent, description }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title} <span>{accent}</span></h2>{description && <p className="section-description">{description}</p>}</div>;
}
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const handleContact = (e) => { e.preventDefault(); setSent(true); const data = new FormData(e.currentTarget); const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`); const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`); window.location.href = `mailto:shriharik571@gmail.com?subject=${subject}&body=${body}`; };
  return <>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/><div className="grid-overlay"/>
    <Navbar />
    <ParticleBackground />
    <Hero />
    <About />
    <Education />
    <Certificates />
    <Projects />
    <Skills />
    <Resume />
    <Experience />
    <Milestones />
    <Contact />
    <main>
    </main>
    <Footer />
  </>;
}
export default App;
