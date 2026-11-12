import React from 'react';
import { 
  User, 
  Brain, 
  Sparkles, 
  Code2, 
  Target, 
  Compass, 
  CheckCircle,
  GraduationCap,
  Terminal,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      title: "Academic Focus",
      icon: GraduationCap,
      color: "text-electric-cyan",
      borderColor: "border-electric-cyan/30",
      bgColor: "bg-electric-cyan/10",
      description: "Undergraduate student in 3rd Year B.Tech (Artificial Intelligence & Machine Learning) at Buddha Institute of Technology, Gorakhpur."
    },
    {
      title: "Hands-on Practicality",
      icon: Cpu,
      color: "text-electric-purple",
      borderColor: "border-electric-purple/30",
      bgColor: "bg-electric-purple/10",
      description: "Bridging classroom AI algorithms with working prototypes like AEGISNOVA — combining YOLO vision models with FastAPI endpoints."
    },
    {
      title: "Career Objective",
      icon: Target,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      bgColor: "bg-emerald-500/10",
      description: "Actively seeking AI/ML internship opportunities to work on impactful projects, learn team workflows, and grow as an AI engineer."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono">
            <User className="w-3.5 h-3.5" />
            <span>// PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            About <span className="text-electric-cyan">Nilakshi Tripathi</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base font-normal">
            B.Tech AI & ML Student | Passionate about practical intelligence and computer vision
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-navy-border shadow-xl">
              <div className="flex items-center gap-2 border-b border-navy-border pb-3">
                <Terminal className="w-4 h-4 text-electric-cyan" />
                <span className="font-mono text-xs text-electric-cyan uppercase tracking-wider font-semibold">
                  BIOGRAPHY // NILAKSHI_TRIPATHI.MD
                </span>
              </div>

              {personalInfo.extendedBio.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-brand-white/85 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Core Tenets */}
              <div className="pt-4 border-t border-navy-border/60">
                <h4 className="font-mono text-xs text-electric-purple uppercase tracking-wider mb-3 font-semibold">
                  Core Engineering Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-muted">
                    <CheckCircle className="w-4 h-4 text-electric-cyan shrink-0" />
                    <span>Honest Skill Representation</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-muted">
                    <CheckCircle className="w-4 h-4 text-electric-cyan shrink-0" />
                    <span>Fundamental Concepts First</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-muted">
                    <CheckCircle className="w-4 h-4 text-electric-cyan shrink-0" />
                    <span>Real-world Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-muted">
                    <CheckCircle className="w-4 h-4 text-electric-cyan shrink-0" />
                    <span>Continuous Curiosity & Learning</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Banner */}
            <div className="p-5 rounded-xl bg-gradient-to-r from-electric-purple/10 to-electric-cyan/10 border border-electric-purple/30">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-electric-cyan shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm font-mono text-white italic">
                    "{personalInfo.tagline}"
                  </p>
                  <p className="text-[11px] font-mono text-brand-muted mt-1">
                    — Nilakshi's personal vision for learning and applying AI
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars & Verified Information */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-5 border border-navy-border hover:border-electric-cyan/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${pillar.bgColor} ${pillar.borderColor} border flex items-center justify-center shrink-0`}>
                      <Icon className={`w-5 h-5 ${pillar.color}`} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-semibold text-white text-base group-hover:text-electric-cyan transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Quick Profile Summary Card */}
            <div className="glass-card rounded-xl p-5 border border-navy-border bg-navy-surface/40">
              <span className="font-mono text-xs uppercase tracking-wider text-electric-cyan block mb-3 font-semibold">
                Verified Profile Snapshot
              </span>
              <dl className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div>
                  <dt className="text-brand-muted">Status</dt>
                  <dd className="text-white font-semibold mt-0.5">3rd Year B.Tech</dd>
                </div>
                <div>
                  <dt className="text-brand-muted">Branch</dt>
                  <dd className="text-white font-semibold mt-0.5">AI & ML</dd>
                </div>
                <div>
                  <dt className="text-brand-muted">Location</dt>
                  <dd className="text-white font-semibold mt-0.5">Gorakhpur, India</dd>
                </div>
                <div>
                  <dt className="text-brand-muted">Availability</dt>
                  <dd className="text-emerald-400 font-semibold mt-0.5">Open for Internships</dd>
                </div>
              </dl>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
