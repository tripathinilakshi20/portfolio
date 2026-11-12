import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  ShieldCheck, 
  Scan, 
  ShieldAlert, 
  Database, 
  Server, 
  Layers, 
  Terminal, 
  AlertCircle,
  HelpCircle,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { aegisNovaProject } from '../data/portfolioData';
import AegisSimulator from './AegisSimulator';

export default function Projects({ onTriggerToast }) {
  const [showRepoModal, setShowRepoModal] = useState(false);

  const handleCopyRepoRequest = () => {
    if (onTriggerToast) {
      onTriggerToast("GitHub notice copied: AegisNova repository is available upon request.");
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-electric-cyan text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>// FEATURED PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Featured <span className="text-electric-cyan">Engineering Project</span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base">
            Detailed walkthrough of AEGISNOVA — built as an academic initiative addressing human-wildlife agricultural conflicts.
          </p>
        </div>

        {/* Main AEGISNOVA Showcase Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-electric-cyan/30 shadow-2xl space-y-10 relative overflow-hidden">
          
          {/* Top Project Header & Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-navy-border pb-8">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-wide">
                  {aegisNovaProject.name}
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-electric-purple/20 text-electric-purple border border-electric-purple/40">
                  {aegisNovaProject.status}
                </span>
              </div>
              <p className="text-base sm:text-lg font-mono text-electric-cyan font-medium">
                {aegisNovaProject.tagline}
              </p>
            </div>

            {/* Action buttons (GitHub placeholder & details) */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={aegisNovaProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-brand-white bg-navy-surface hover:bg-navy-surface/80 border border-navy-border hover:border-electric-cyan/50 transition-all flex items-center gap-2 group"
              >
                <Github className="w-4 h-4 text-electric-cyan" />
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
              </a>

              <button
                onClick={() => setShowRepoModal(true)}
                className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-navy-deep bg-electric-cyan hover:bg-electric-cyan/90 active:scale-95 transition-all shadow-md shadow-electric-cyan/20 flex items-center gap-2"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>Project Repository Link</span>
              </button>
            </div>
          </div>

          {/* Student Project Notice */}
          <div className="p-4 rounded-xl bg-navy-deep/80 border border-navy-border flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-electric-purple shrink-0 mt-0.5" />
            <div className="text-xs font-mono space-y-1">
              <span className="font-semibold text-electric-purple uppercase">
                Student Engineering Scope:
              </span>
              <p className="text-brand-muted leading-relaxed">
                {aegisNovaProject.statusNote}
              </p>
            </div>
          </div>

          {/* Interactive Simulation & Visual Architecture Section */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-electric-cyan" />
                <h4 className="font-mono text-xs uppercase tracking-wider text-electric-cyan font-semibold">
                  Interactive Simulator & Detection Pipeline
                </h4>
              </div>
              <span className="text-[11px] font-mono text-brand-muted hidden sm:inline">
                Live interactive model demo
              </span>
            </div>
            
            {/* The interactive simulator allows visitors to test animal detection scenarios */}
            <AegisSimulator />
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {/* Problem Card */}
            <div className="p-6 rounded-2xl bg-navy-deep/90 border border-navy-border space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                Human-Wildlife Conflict & Crop Depredation
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {aegisNovaProject.problemStatement}
              </p>
            </div>

            {/* Solution Card */}
            <div className="p-6 rounded-2xl bg-navy-deep/90 border border-navy-border space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                Automated Computer Vision & Event Logging
              </h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {aegisNovaProject.solution}
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="pt-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-electric-purple font-semibold mb-5 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Key Implemented Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {aegisNovaProject.keyFeatures.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 rounded-xl bg-navy-surface/50 border border-navy-border hover:border-electric-cyan/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-electric-cyan/10 border border-electric-cyan/30 flex items-center justify-center text-electric-cyan">
                      {fIdx === 0 && <Scan className="w-4 h-4" />}
                      {fIdx === 1 && <ShieldAlert className="w-4 h-4" />}
                      {fIdx === 2 && <Database className="w-4 h-4" />}
                      {fIdx === 3 && <Server className="w-4 h-4" />}
                    </div>
                    <h5 className="font-mono font-bold text-sm text-white">
                      {feat.title}
                    </h5>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="pt-4 border-t border-navy-border">
            <h4 className="font-mono text-xs uppercase tracking-wider text-brand-muted mb-4 font-semibold">
              Technologies & Frameworks Stack
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {aegisNovaProject.technologies.map((tech, tIdx) => (
                <div
                  key={tIdx}
                  className="p-3.5 rounded-xl bg-navy-deep border border-navy-border/80 flex flex-col"
                >
                  <span className="font-mono font-bold text-xs sm:text-sm text-electric-cyan">
                    {tech.name}
                  </span>
                  <span className="text-[11px] font-mono text-brand-muted mt-1 leading-snug">
                    {tech.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline Steps */}
          <div className="pt-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-electric-cyan font-semibold mb-4">
              End-to-End System Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {aegisNovaProject.architectureFlow.map((step, idx) => (
                <div
                  key={idx}
                  className="relative p-3.5 rounded-xl bg-navy-deep border border-navy-border flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-electric-purple">
                      {step.step}
                    </span>
                    <h5 className="font-mono font-semibold text-xs text-white mt-1">
                      {step.name}
                    </h5>
                    <p className="text-[11px] text-brand-muted mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Repository Modal / Request dialog */}
        {showRepoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-lg glass-card rounded-2xl p-6 border border-electric-cyan/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-navy-border pb-3">
                <div className="flex items-center gap-2 text-electric-cyan font-mono text-sm font-semibold">
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository Notice</span>
                </div>
                <button
                  onClick={() => setShowRepoModal(false)}
                  className="text-brand-muted hover:text-white font-mono text-xs px-2 py-1"
                >
                  [CLOSE]
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm font-mono text-brand-muted leading-relaxed">
                <p>
                  <strong className="text-white">Note regarding AEGISNOVA repository:</strong>
                </p>
                <p>
                  Per project guidelines, we do not invent fake repository URLs. The source code for AEGISNOVA can be linked directly or shared for evaluation upon request.
                </p>
                <div className="p-3 rounded-lg bg-navy-deep border border-navy-border text-white text-xs">
                  <span className="text-electric-cyan font-bold">Author Profile:</span>{' '}
                  <a
                    href={aegisNovaProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-electric-cyan hover:text-white"
                  >
                    github.com/tripathinilakshi20
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <a
                  href={`mailto:tripathinilakshi20@gmail.com?subject=Inquiry regarding AEGISNOVA project repository&body=Hi Nilakshi,%0D%0A%0D%0AI reviewed your portfolio and would like to learn more about the AEGISNOVA source code and implementation.`}
                  className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-electric-cyan text-navy-deep hover:bg-electric-cyan/90 transition-all"
                >
                  Request Repo Access via Email
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
