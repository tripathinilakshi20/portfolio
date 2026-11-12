import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  CheckCircle,
  Building,
  Award
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>// ACADEMIC FOUNDATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Academic <span className="text-electric-cyan">Education</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base">
            Undergraduate degree progression at Buddha Institute of Technology.
          </p>
        </div>

        {/* Main Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 sm:p-10 border border-navy-border hover:border-electric-cyan/40 transition-all shadow-xl space-y-8">
            
            {/* Top Degree Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-navy-border pb-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-electric-cyan/20 text-electric-cyan border border-electric-cyan/30">
                    B.TECH UNDERGRADUATE
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-electric-purple/20 text-electric-purple border border-electric-purple/30">
                    3RD YEAR
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-2">
                  {educationData.degree}
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Enrollment</span>
              </div>
            </div>

            {/* Institution & Location details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-navy-deep/80 border border-navy-border flex items-start gap-3">
                <Building className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="text-brand-muted block">Institution</span>
                  <strong className="text-white text-sm mt-0.5 block">
                    {educationData.institution}
                  </strong>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-deep/80 border border-navy-border flex items-start gap-3">
                <MapPin className="w-4 h-4 text-electric-purple shrink-0 mt-0.5" />
                <div>
                  <span className="text-brand-muted block">Location</span>
                  <strong className="text-white text-sm mt-0.5 block">
                    {educationData.location}
                  </strong>
                </div>
              </div>
            </div>

            {/* Core Coursework & Subject Areas */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-electric-cyan font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Core Academic Curriculum & Focus Areas</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {educationData.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-navy-surface/40 border border-navy-border/70 flex items-center gap-2.5 text-xs font-mono text-brand-white"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-electric-cyan shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Ethics / No fake stats disclosure */}
            <div className="p-4 rounded-xl bg-navy-deep/90 border border-navy-border flex items-start gap-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-xs font-mono text-brand-muted leading-relaxed">
                <strong className="text-white">Academic Integrity Pledge: </strong>
                {educationData.academicEthicsNote} Unofficial metrics, unverified CGPA figures, and fabricated awards are strictly omitted.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
