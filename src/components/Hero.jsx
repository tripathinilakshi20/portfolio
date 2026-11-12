import React from 'react';
import { 
  ArrowRight, 
  Send, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  Terminal,
  Activity
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import AiAvatarIllustration from './AiAvatarIllustration';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Futuristic Top Status HUD */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-card/80 border border-electric-cyan/30 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-electric-cyan animate-pulse" />
          <span className="text-xs font-mono text-electric-cyan tracking-wide uppercase">
            AI INNOVATION LAB // B.TECH AIML 3RD YEAR
          </span>
          <span className="text-navy-border">|</span>
          <span className="text-xs font-mono text-brand-muted hidden sm:inline-flex items-center gap-1">
            <Activity className="w-3 h-3 text-electric-purple" />
            READY FOR INTERNSHIP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Greeting */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm sm:text-base text-electric-cyan tracking-wider uppercase font-semibold">
                  // HELLO WORLD
                </span>
                <span className="h-px w-12 bg-electric-cyan/40" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-brand-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-white via-brand-white to-electric-cyan bg-clip-text text-transparent">
                  Nilakshi Tripathi
                </span>
                <span className="text-electric-cyan">.</span>
              </h1>
            </div>

            {/* Professional Title & Tagline */}
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-mono text-electric-purple font-semibold">
                AI & Machine Learning Student
              </h2>
              <p className="text-lg sm:text-xl font-display text-electric-cyan font-medium tracking-wide">
                Exploring Intelligence. Building Tomorrow.
              </p>
            </div>

            {/* Short Introduction Quote */}
            <div className="relative pl-4 border-l-2 border-electric-cyan/60 bg-navy-card/40 backdrop-blur-sm p-4 rounded-r-xl border-y border-r border-navy-border/40">
              <p className="text-base sm:text-lg text-brand-white/90 leading-relaxed font-normal">
                "{personalInfo.bio}"
              </p>
            </div>

            {/* Academic & Geographic Quick Tags */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-brand-muted">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-surface/70 border border-navy-border">
                <GraduationCap className="w-4 h-4 text-electric-cyan" />
                <span>Buddha Institute of Technology, Gorakhpur</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-surface/70 border border-navy-border">
                <MapPin className="w-3.5 h-3.5 text-electric-purple" />
                <span>India</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-navy-deep bg-electric-cyan hover:bg-electric-cyan/90 active:scale-95 transition-all shadow-lg shadow-electric-cyan/20 flex items-center gap-2 group"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-mono text-sm font-semibold text-brand-white bg-navy-card hover:bg-navy-surface border border-electric-purple/40 hover:border-electric-purple active:scale-95 transition-all shadow-md shadow-electric-purple/10 flex items-center gap-2 group"
              >
                <span>Let's Connect</span>
                <Send className="w-4 h-4 text-electric-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Micro telemetry footer in hero */}
            <div className="pt-4 border-t border-navy-border/60 flex items-center gap-6 text-[11px] font-mono text-brand-muted">
              <div>
                <span className="text-electric-cyan font-bold">PROJECT:</span> AEGISNOVA
              </div>
              <div>
                <span className="text-electric-purple font-bold">FOCUS:</span> COMPUTER VISION
              </div>
              <div>
                <span className="text-emerald-400 font-bold">OBJECTIVE:</span> AI/ML INTERNSHIP
              </div>
            </div>

          </div>

          {/* Right Column: Original Illustrated AI Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative">
              <AiAvatarIllustration />
              
              {/* Avatar Context Banner */}
              <div className="mt-2 text-center">
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-brand-muted bg-navy-card/80 border border-navy-border px-3 py-1 rounded-full">
                  <Terminal className="w-3 h-3 text-electric-cyan" />
                  <span>ORIGINAL AI RESEARCHER AVATAR // NILAKSHI.EXE</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
