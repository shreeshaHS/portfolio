import React from 'react';
import { Target, Users, Clock, Award, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-sky-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase">
              Section 01 // Overview
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering Foundations & Mindset
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Bridging strong computer science fundamentals from Master of Computer Applications with disciplined, real-world execution.
          </p>
        </div>

        {/* Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Portrait & Identity Artifact */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm">
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-purple-500/30 blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#0e121e] border border-white/10 p-4 overflow-hidden shadow-2xl">
                {/* Image frame */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  {/* Glass overlay badge on photo */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white tracking-wide">{PERSONAL_INFO.name}</p>
                      <p className="text-[10px] font-mono text-sky-400">MCA Scholar & Engineer</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[9px] font-mono text-emerald-300">
                      Active
                    </span>
                  </div>
                </div>

                {/* Profile credentials strip */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                  <span>Poornaprajna Inst.</span>
                  <span className="text-slate-600">|</span>
                  <span>Mangalore Univ.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Value Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm relative">
              <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded bg-sky-500/10 border border-sky-500/30 text-[10px] font-mono uppercase tracking-widest text-sky-400">
                Core Profile Statement
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "{PERSONAL_INFO.bio}"
              </p>
            </div>

            {/* Key Pillars from Resume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-1.5">
                <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
                  <Target className="w-4 h-4 flex-shrink-0" />
                  <span>Problem Solving</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strong analytical thinking to break down system requirements into clean, testable algorithmic components.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-1.5">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span>Time Management</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Demonstrated ability to meet project deadlines and prioritize deliverables, reinforced by 9 months as Production Supervisor.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span>Teamwork & Collaboration</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Experienced in cross-functional coordination, collective accountability, and clear communication.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all space-y-1.5">
                <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>Self-Motivation & Attitude</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Passionate continuous learner who actively pursues national certifications (NPTEL, NASSCOM) to stay at the cutting edge.
                </p>
              </div>
            </div>

            {/* Quick Summary Highlights */}
            <div className="p-4 rounded-xl bg-sky-500/[0.03] border border-sky-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <span>Ready to contribute to agile development teams and scalable software platforms.</span>
              </div>
              <span className="font-mono text-sky-300 font-medium whitespace-nowrap">
                Open to Relocation / Remote
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
