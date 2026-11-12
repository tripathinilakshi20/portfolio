import React from 'react';
import { 
  Code, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Terminal
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming Languages":
        return Code;
      case "AI & ML Learning":
        return Cpu;
      case "Development Tools":
        return Wrench;
      default:
        return Layers;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-purple/10 border border-electric-purple/30 text-electric-purple text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>// TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Verified <span className="text-electric-cyan">Technical Skills</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base">
            Skill levels displayed honestly based on 3rd-year coursework and practical project application.
          </p>
        </div>

        {/* Honest Representation Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-4 rounded-xl bg-navy-card/80 border border-electric-cyan/20 backdrop-blur-md flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-electric-cyan shrink-0 mt-0.5" />
          <div className="text-xs font-mono space-y-1">
            <p className="text-brand-white font-semibold">
              Transparent Skill Philosophy
            </p>
            <p className="text-brand-muted leading-relaxed">
              As an undergraduate AI & ML student, I believe in absolute engineering integrity. Skills are strictly categorized by actual experience without exaggerated claims or unconfirmed libraries.
            </p>
          </div>
        </div>

        {/* Skills Categorized Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {technicalSkills.map((cat, catIdx) => {
            const IconComponent = getCategoryIcon(cat.category);
            return (
              <div
                key={catIdx}
                className="glass-card rounded-2xl p-6 border border-navy-border hover:border-electric-cyan/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-navy-border">
                    <div className="w-10 h-10 rounded-xl bg-navy-surface border border-navy-border flex items-center justify-center text-electric-cyan">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        {cat.category}
                      </h3>
                      <p className="text-[11px] font-mono text-brand-muted">
                        {cat.skills.length} Verified Items
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-brand-muted mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-xl bg-navy-deep/80 border border-navy-border hover:border-electric-purple/40 transition-all"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-mono font-bold text-sm text-white">
                            {skill.name}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                              skill.badgeColor === 'cyan'
                                ? 'bg-electric-cyan/15 text-electric-cyan border-electric-cyan/30'
                                : 'bg-electric-purple/15 text-electric-purple border-electric-purple/30'
                            }`}
                          >
                            {skill.levelBadge}
                          </span>
                        </div>
                        <p className="text-xs text-brand-muted leading-relaxed">
                          {skill.experience}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer badge */}
                <div className="mt-6 pt-3 border-t border-navy-border flex items-center justify-between text-[11px] font-mono text-brand-muted">
                  <span>CATEGORY // 0{catIdx + 1}</span>
                  <span className="text-electric-cyan flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Confirmed
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Skill Context Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-brand-muted">
            Continuously advancing fundamentals in machine learning algorithms, model optimization, and backend architectures.
          </p>
        </div>

      </div>
    </section>
  );
}
