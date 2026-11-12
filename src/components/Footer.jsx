import React from 'react';
import { 
  ArrowUp, 
  Cpu, 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Terminal 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-navy-border/80 bg-navy-deep/95 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-border/60">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-electric-cyan/10 border border-electric-cyan/40 flex items-center justify-center text-electric-cyan">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-lg text-white tracking-wider">
                {personalInfo.brandName}
              </span>
            </div>

            <p className="text-sm font-mono text-electric-cyan font-medium">
              "{personalInfo.tagline}"
            </p>

            <p className="text-xs text-brand-muted max-w-md leading-relaxed">
              Designed by <strong className="text-white font-semibold">Nilakshi Tripathi</strong>. 3rd-year B.Tech Artificial Intelligence & Machine Learning student at Buddha Institute of Technology, GIDA, Gorakhpur.
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] font-mono text-brand-muted bg-navy-card px-3 py-1.5 rounded-lg border border-navy-border">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Seeking AI/ML Internship Opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase text-brand-white font-semibold tracking-wider text-xs block">
              // Navigation
            </span>
            <ul className="space-y-2 text-brand-muted">
              <li><a href="#hero" className="hover:text-electric-cyan transition-colors">01. Home</a></li>
              <li><a href="#about" className="hover:text-electric-cyan transition-colors">02. About</a></li>
              <li><a href="#skills" className="hover:text-electric-cyan transition-colors">03. Skills</a></li>
              <li><a href="#projects" className="hover:text-electric-cyan transition-colors">04. AegisNova Project</a></li>
              <li><a href="#education" className="hover:text-electric-cyan transition-colors">05. Education</a></li>
              <li><a href="#contact" className="hover:text-electric-cyan transition-colors">06. Contact</a></li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="uppercase text-brand-white font-semibold tracking-wider text-xs block">
              // Channels
            </span>
            <div className="flex flex-col gap-2.5">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-muted hover:text-electric-purple transition-colors"
              >
                <Linkedin className="w-4 h-4 text-electric-purple" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-muted hover:text-electric-cyan transition-colors"
              >
                <Github className="w-4 h-4 text-electric-cyan" />
                <span>GitHub Codebase</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-brand-muted hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>tripathinilakshi20@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-muted">
          <div>
            &copy; {currentYear} NILAKSHI.EXE &bull; Designed by Nilakshi Tripathi
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-brand-muted hidden md:inline">
              Gorakhpur, India &bull; AI Innovation Lab
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-navy-card border border-navy-border hover:border-electric-cyan/40 text-brand-white hover:text-electric-cyan transition-all flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px]">TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
