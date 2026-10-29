import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playSound } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        playSound('close');
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-[#0c0f17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#090b12]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="resume-modal-title" className="text-lg font-bold text-white tracking-wide">
                {PERSONAL_INFO.name}'s Verified Curriculum Vitae
              </h2>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span>MCA Scholar</span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">Ready for Review</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Shreesha_Resume.pdf"
              onClick={() => playSound('click')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Raw</span>
            </a>
            <button
              onClick={() => {
                playSound('close');
                onClose();
              }}
              aria-label="Close resume preview"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content body with responsive split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          {/* Quick Summary Sidebar */}
          <div className="hidden lg:flex lg:col-span-4 flex-col p-6 bg-[#0a0d16] border-r border-white/5 overflow-y-auto space-y-6">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-sky-400">Candidate Snapshot</span>
              <h3 className="text-xl font-bold text-white mt-1">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{PERSONAL_INFO.headline}</p>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-semibold">
                  <GraduationCap className="w-4 h-4" />
                  <span>Academic Trajectory</span>
                </div>
                <p className="text-slate-300 font-medium">Master of Computer Application (MCA)</p>
                <p className="text-slate-400 text-[11px]">Poornaprajna Institute of Management (2025–Present)</p>
                <p className="text-slate-400 text-[11px] pt-1 border-t border-white/5">Bachelor of Computer Application (BCA) - Mangalore University (2021–2024)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                  <Briefcase className="w-4 h-4" />
                  <span>Practical Leadership</span>
                </div>
                <p className="text-slate-300 font-medium">Production Supervisor (9 Mos)</p>
                <p className="text-slate-400 text-[11px]">Navadurga Food Products Pvt Ltd (2025)</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                  <Award className="w-4 h-4" />
                  <span>Verified Certifications</span>
                </div>
                <ul className="space-y-1 text-slate-400 text-[11px]">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Cloud Computing (NPTEL)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Natural Language Processing (NPTEL)</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    <span>Data Analytics (NASSCOM)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2 border-t border-white/10 text-xs text-slate-400">
              <p className="mb-2 font-mono text-[11px] text-slate-300">Contact directly:</p>
              <div className="space-y-1 font-mono text-[11px]">
                <p className="text-sky-300">{PERSONAL_INFO.email}</p>
                <p className="text-slate-400">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>

          {/* PDF Viewer Frame */}
          <div className="col-span-1 lg:col-span-8 bg-[#151922] flex flex-col h-full relative">
            <iframe
              src={`${PERSONAL_INFO.resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              title="Shreesha Resume Preview"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
