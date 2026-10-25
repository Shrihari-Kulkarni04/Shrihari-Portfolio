import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ParticleBackground from "./components/ParticleBackground";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
    <Experience />
    <Resume />
    <Contact />
    <main>
    </main>
    <Footer />
  </>;
}
export default App;