import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Award, Briefcase, CheckCircle2, ShieldCheck, FileCheck, Layers } from 'lucide-react';
import { DocumentPreviewData } from '../types';
import { playSound } from '../utils/sound';

interface DocumentModalProps {
  documentData: DocumentPreviewData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ documentData, isOpen, onClose }) => {
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

  if (!isOpen || !documentData) return null;

  const isCert = documentData.type === 'certificate';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="document-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        playSound('close');
        onClose();
      }}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-[#0c0f17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#090b12]">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl border flex items-center justify-center"
              style={{
                backgroundColor: isCert ? 'rgba(56, 189, 248, 0.1)' : 'rgba(168, 85, 247, 0.1)',
                borderColor: isCert ? 'rgba(56, 189, 248, 0.3)' : 'rgba(168, 85, 247, 0.3)',
                color: isCert ? '#38bdf8' : '#c084fc',
              }}
            >
              {isCert ? <Award className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
            </div>
            <div>
              <h2 id="document-modal-title" className="text-base sm:text-lg font-bold text-white tracking-wide flex items-center gap-2">
                <span>{documentData.title}</span>
              </h2>
              <p className="text-xs text-slate-400 flex items-center gap-2">
                <span>{documentData.issuer || 'Official Verified Record'}</span>
                <span>•</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{documentData.badge}</span>
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={documentData.fileUrl}
              download={documentData.downloadName}
              onClick={() => playSound('click')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 text-slate-950 hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={documentData.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Fullscreen</span>
            </a>
            <button
              onClick={() => {
                playSound('close');
                onClose();
              }}
              aria-label="Close document modal"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body with Responsive Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          {/* Document Summary Sidebar */}
          <div className="hidden lg:flex lg:col-span-4 flex-col p-6 bg-[#0a0d16] border-r border-white/5 overflow-y-auto space-y-5">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-sky-400">
                {isCert ? 'Course Credential' : 'Service Verification'}
              </span>
              <h3 className="text-lg font-bold text-white mt-1">{documentData.title}</h3>
              {documentData.subtitle && (
                <p className="text-xs font-mono text-slate-400 mt-0.5">{documentData.subtitle}</p>
              )}
            </div>

            {documentData.description && (
              <p className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
                {documentData.description}
              </p>
            )}

            {documentData.topics && documentData.topics.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-sky-400" />
                  <span>Curriculum Modules:</span>
                </span>
                <div className="space-y-1.5">
                  {documentData.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3.5 rounded-xl bg-emerald-500/[0.05] border border-emerald-500/20 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold font-mono text-[11px]">
                <FileCheck className="w-4 h-4" />
                <span>Verification Status: Active</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Authentic documentation submitted as part of candidate academic & professional portfolio.
              </p>
            </div>

            <div className="pt-2 border-t border-white/5 text-[11px] font-mono text-slate-500 flex justify-between items-center">
              <span>Format: Digital PDF</span>
              <span>Direct Download Ready</span>
            </div>
          </div>

          {/* Document Viewer Frame */}
          <div className="col-span-1 lg:col-span-8 bg-[#151922] flex flex-col h-full relative">
            <iframe
              src={`${documentData.fileUrl}#toolbar=0&navpanes=0&scrollbar=1`}
              title={`${documentData.title} Preview`}
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
