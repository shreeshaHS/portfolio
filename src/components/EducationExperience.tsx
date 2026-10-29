import React from 'react';
import { EDUCATION_LIST, EXPERIENCE_LIST } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const EducationExperience: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">
              Section 05 // Trajectory
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Academic Foundation & Industry Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive look at formal computer science degrees, foundational education, and real-world supervisory accountability.
          </p>
        </div>

        {/* Dual Column Layout: Education vs Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Education Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
              <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">Academic Milestones</h3>
                <p className="text-xs font-mono text-slate-400">Formal Degrees & Pre-University</p>
              </div>
            </div>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-sky-400 before:via-indigo-500 before:to-purple-500/20">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={edu.id} className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[30px] top-1.5 w-4 h-4 rounded-full bg-[#08090d] border-2 border-sky-400 group-hover:scale-125 transition-transform" />

                  <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </span>
                      {edu.status && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-slate-300 mt-0.5">{edu.institution}</p>
                      <p className="text-xs font-mono text-slate-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </p>
                    </div>

                    <ul className="space-y-1.5 pt-2 border-t border-white/5">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                          <ChevronRight className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Industry Experience Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">Industry Experience</h3>
                <p className="text-xs font-mono text-slate-400">Operations & Process Supervision</p>
              </div>
            </div>

            {EXPERIENCE_LIST.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {exp.period} ({exp.duration})
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Corporate Role</span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <p className="text-sm font-semibold text-slate-300">{exp.company}</p>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Core Responsibilities:
                  </span>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-500/[0.04] border border-purple-500/20 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-purple-300 font-semibold tracking-wider">
                    Engineering Translation:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Developed operational grit, cross-team accountability, and procedural discipline that translates directly into reliable code commits and software deployment schedules.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
