import React from 'react';
import { 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  Calendar, 
  ArrowRight,
  Code,
  Lightbulb,
  Users,
  Compass
} from 'lucide-react';
import { internshipOpportunity, personalInfo } from '../data/portfolioData';

export default function Internship() {
  return (
    <section id="internship" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/10 via-electric-cyan/10 to-transparent blur-3xl pointer-events-none" />

        {/* Section Container Card */}
        <div className="relative glass-card rounded-3xl p-6 sm:p-12 border border-emerald-500/30 shadow-2xl overflow-hidden">
          
          {/* Top Banner Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-border pb-6 mb-8">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
                OPEN TO AI/ML INTERNSHIP OPPORTUNITIES
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-brand-muted bg-navy-deep px-3 py-1.5 rounded-lg border border-navy-border">
              <Calendar className="w-3.5 h-3.5 text-electric-cyan" />
              <span>3rd Year B.Tech Undergraduate</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-tight">
                  Open to <span className="text-electric-cyan">AI/ML Internship</span> Opportunities
                </h2>
                <p className="text-base sm:text-lg text-brand-muted font-normal">
                  {internshipOpportunity.subtitle}
                </p>
              </div>

              {/* Roles Chips */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-electric-purple font-semibold block">
                  Targeted Internship Roles:
                </span>
                <div className="flex flex-wrap gap-2">
                  {internshipOpportunity.preferredRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-navy-surface border border-navy-border text-brand-white hover:border-electric-cyan/40 transition-all"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {internshipOpportunity.valueProps.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-navy-deep/80 border border-navy-border/80 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <h4 className="font-mono font-semibold text-xs text-white">
                        {val.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-brand-muted leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Trigger */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${personalInfo.email}?subject=Internship Opportunity for Nilakshi Tripathi&body=Hi Nilakshi,%0D%0A%0D%0AWe came across your portfolio and project AEGISNOVA and would like to discuss an internship opportunity with our team.`}
                  className="px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-navy-deep bg-emerald-400 hover:bg-emerald-300 active:scale-95 transition-all shadow-lg shadow-emerald-400/20 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Reach Out for Internship</span>
                </a>

                <a
                  href="#contact"
                  className="px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold text-white bg-navy-surface hover:bg-navy-surface/80 border border-navy-border hover:border-electric-cyan/50 transition-all flex items-center gap-2"
                >
                  <span>View Contact Details</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Card: Recruiter Quick Summary */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-navy-deep/90 border border-electric-cyan/20 space-y-6">
                <div className="flex items-center justify-between border-b border-navy-border pb-4">
                  <span className="font-mono text-xs text-electric-cyan font-bold uppercase tracking-wider">
                    RECRUITER SNAPSHOT
                  </span>
                  <span className="text-[11px] font-mono text-brand-muted">STATUS: OPEN</span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="flex justify-between items-center py-1 border-b border-navy-border/50">
                    <span className="text-brand-muted">Candidate:</span>
                    <span className="text-white font-semibold">Nilakshi Tripathi</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-navy-border/50">
                    <span className="text-brand-muted">Degree:</span>
                    <span className="text-white font-semibold">B.Tech AI & ML</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-navy-border/50">
                    <span className="text-brand-muted">Year:</span>
                    <span className="text-electric-cyan font-semibold">3rd Year</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-navy-border/50">
                    <span className="text-brand-muted">College:</span>
                    <span className="text-white text-right max-w-[200px] truncate font-semibold">
                      Buddha Inst. of Tech
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-navy-border/50">
                    <span className="text-brand-muted">Core Language:</span>
                    <span className="text-electric-cyan font-semibold">Python</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-navy-border/50">
                    <span className="text-brand-muted">Hands-on Work:</span>
                    <span className="text-electric-purple font-semibold">AEGISNOVA (YOLO + FastAPI)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-brand-muted">Location:</span>
                    <span className="text-white font-semibold">Gorakhpur / India</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-navy-surface/60 border border-navy-border text-[11px] font-mono text-brand-muted leading-relaxed">
                  "Ready to relocate for on-site internships or join remote engineering teams globally."
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
