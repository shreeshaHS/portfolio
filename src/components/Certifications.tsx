import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, Cloud, Cpu, BarChart2, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { playSound } from '../utils/sound';

export const Certifications: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'cloud-computing-nptel':
        return <Cloud className="w-5 h-5" />;
      case 'nlp-nptel':
        return <Cpu className="w-5 h-5" />;
      case 'data-analytics-nasscom':
        return <BarChart2 className="w-5 h-5" />;
      default:
        return <Award className="w-5 h-5" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#080a10]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              Section 04 // Credentials
            </span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Accreditations & Specialized Courses
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            National online certifications completed to validate competency in Cloud Computing, Natural Language Processing, and Data Analytics.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between space-y-6 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header with Issuer Badge */}
                <div className="flex items-start justify-between">
                  <div
                    className="p-3 rounded-xl border flex items-center justify-center"
                    style={{
                      backgroundColor: `${cert.color}15`,
                      color: cert.color,
                      borderColor: `${cert.color}35`
                    }}
                  >
                    {getIcon(cert.id)}
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold"
                    style={{
                      backgroundColor: `${cert.color}18`,
                      color: cert.color,
                      border: `1px solid ${cert.color}35`
                    }}
                  >
                    {cert.credentialBadge}
                  </span>
                </div>

                {/* Title & Platform */}
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">{cert.title}</h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">{cert.issuer}</p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Syllabus Topics */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Core Modules Covered:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {cert.topics.map((t, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Status Tag */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Curriculum Verified</span>
                </span>
                <span className="text-slate-500">{cert.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
