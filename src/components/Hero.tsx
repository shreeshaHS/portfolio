import React, { useState } from 'react';
import { ArrowDown, Mail, FileText, Sparkles, Check, Copy, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import { playSound } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    playSound('success');
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToWork = () => {
    playSound('click');
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Particle & Interactive constellation canvas */}
      <HeroCanvas />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] bg-indigo-500/[0.07] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-purple-500/[0.06] rounded-full blur-[110px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Availability / Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8 hover:border-sky-500/30 transition-all cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium tracking-wide text-slate-300">
            MCA Candidate (2025–Present) • Seeking Software Developer Role
          </span>
        </div>

        {/* Identity & Main Headline */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]">
            I am <span className="gradient-text-sky">{PERSONAL_INFO.name}</span>
          </h1>

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-sky-500/50" />
            <p className="font-display text-lg sm:text-2xl font-semibold text-slate-200 tracking-wide">
              {PERSONAL_INFO.headline}
            </p>
            <span className="h-px w-8 bg-indigo-500/50" />
          </div>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed pt-2">
            A motivated Computer Science post-graduate crafting high-reliability applications with{' '}
            <span className="text-slate-200 font-medium">Python</span>,{' '}
            <span className="text-slate-200 font-medium">Java</span>, and{' '}
            <span className="text-slate-200 font-medium">Modern Web Technologies</span>. Certified in Cloud Computing & NLP (NPTEL), and Data Analytics (NASSCOM).
          </p>
        </div>

        {/* CTA Action Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mt-9">
          {/* Primary CTA */}
          <button
            onClick={scrollToWork}
            onMouseEnter={() => playSound('hover')}
            className="group px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 text-slate-950 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Secondary CTA: Download Resume */}
          <button
            onClick={() => {
              playSound('open');
              onOpenResume();
            }}
            onMouseEnter={() => playSound('hover')}
            className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/[0.05] hover:bg-white/[0.09] text-white border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2 hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4 text-sky-400" />
            <span>Download Resume</span>
          </button>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            onMouseEnter={() => playSound('hover')}
            className="px-4 py-3.5 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 transition-all flex items-center gap-2"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </>
            )}
          </button>
        </div>

        {/* Social / External Links Bar */}
        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound('click')}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-white/5"
          >
            <GithubIcon className="w-4 h-4 text-sky-400" />
            <span>github.com/shreeshaHS</span>
            <ExternalLink className="w-3 h-3 text-slate-500" />
          </a>

          <span className="text-slate-700">•</span>

          <a
            href={`tel:${PERSONAL_INFO.phone}`}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors py-1 px-2.5 rounded-lg hover:bg-white/5"
          >
            {PERSONAL_INFO.phone}
          </a>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12 w-full max-w-4xl">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm text-left hover:border-white/15 transition-all"
            >
              <div className="text-lg md:text-xl font-bold font-display text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-slate-400 mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 animate-bounce opacity-60 flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Scroll Down</span>
          <ArrowDown className="w-4 h-4 text-sky-400" />
        </div>
      </div>
    </section>
  );
};
