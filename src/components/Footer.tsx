import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, Heart, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { playSound } from '../utils/sound';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050609] border-t border-white/5 py-12 overflow-hidden text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
                MCA Graduate
              </span>
            </div>
            <p className="text-slate-500 text-xs mt-1">
              Engineered with precision • Aspiring Software Developer
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              aria-label="Call Phone"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 text-slate-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Return to top"
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-sky-400 transition-colors ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All verified portfolio details sourced from official resume.
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-sky-400" />
            <span>React • TypeScript • Tailwind CSS • Vite</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
