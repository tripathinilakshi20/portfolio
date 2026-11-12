import React, { useState } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('nilakshi-portfolio-theme') || 'dark'; }
    catch { return 'dark'; }
  });

  const triggerToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 3200);
  };

  const toggleTheme = () => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('nilakshi-portfolio-theme', next); } catch {}
      return next;
    });
  };

  return (
    <div className={`portfolio-app relative min-h-screen selection:bg-electric-purple selection:text-white ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      <NeuralBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects onTriggerToast={triggerToast} />
          <Education />
          <Internship />
          <Contact onTriggerToast={triggerToast} />
        </main>
        <Footer />
      </div>
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
