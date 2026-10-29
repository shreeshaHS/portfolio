import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Terminal, Layers, Lightbulb, ShieldAlert, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';
import { playSound } from '../utils/sound';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        playSound('close');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        playSound('close');
        onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0b0e17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080a11]">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="text-xs font-mono tracking-wider text-slate-400 uppercase">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Repository</span>
            </a>
            <button
              onClick={() => {
                playSound('close');
                onClose();
              }}
              aria-label="Close project modal"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-300">
          <div>
            <h2 id="project-modal-title" className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sky-400 font-mono text-sm mt-1">{project.subtitle}</p>
            <p className="text-sm md:text-base text-slate-300 mt-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-500/[0.04] border border-rose-500/20 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                <span>The Problem Addressed</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <Lightbulb className="w-4 h-4 flex-shrink-0" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-semibold text-sm tracking-wide">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Core Architectural Highlights</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-slate-300">
                  <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2.5 pt-2 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Technologies & Libraries</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>{project.metrics || 'Verified academic development'}</span>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-lg shadow-sky-500/20"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Code on GitHub</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
