import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Terminal, ArrowUpRight, Sparkles, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ theme = 'dark', onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-deep/90 backdrop-blur-md border-b border-navy-border shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group transition-transform duration-200 active:scale-95"
          >
            <div className="w-8 h-8 rounded-lg bg-electric-cyan/10 border border-electric-cyan/40 flex items-center justify-center text-electric-cyan group-hover:border-electric-cyan group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-mono font-bold text-base sm:text-lg tracking-wider text-brand-white group-hover:text-electric-cyan transition-colors">
                  {personalInfo.brandName}
                </span>
                <span className="inline-block w-1.5 h-4 bg-electric-cyan animate-pulse" />
              </div>
              <span className="text-[10px] font-mono text-brand-muted hidden sm:inline-block">
                AI_INNOVATION_LAB // 2025
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-navy-card/60 backdrop-blur-md border border-navy-border px-3 py-1.5 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'text-white bg-electric-cyan/20 border border-electric-cyan/40 shadow-sm'
                      : 'text-brand-muted hover:text-brand-white hover:bg-navy-surface/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Availability pill & Connect */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#internship"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking Internships</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold text-navy-deep bg-gradient-to-r from-electric-cyan to-electric-purple hover:brightness-110 active:scale-95 transition-all shadow-md shadow-electric-cyan/20"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle p-2 rounded-lg border border-navy-border text-brand-white hover:text-electric-cyan transition-all"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-navy-card border border-navy-border text-brand-white hover:text-electric-cyan hover:border-electric-cyan transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 pb-6 pt-2 bg-navy-card/98 backdrop-blur-xl border-b border-navy-border animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-mono transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-electric-cyan/15 text-electric-cyan border border-electric-cyan/30'
                      : 'text-brand-muted hover:text-brand-white hover:bg-navy-surface/40'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan" />}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-navy-border flex flex-col gap-2.5">
            <a
              href="#internship"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking AI/ML Internships</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold text-navy-deep bg-gradient-to-r from-electric-cyan to-electric-purple"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
