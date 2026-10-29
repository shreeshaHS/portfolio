import React from 'react';
import { Scan, ShoppingCart, BookOpen, CheckCircle, Database, Sparkles, Activity } from 'lucide-react';

interface ProjectGraphicProps {
  type: 'face-recognition' | 'ecommerce' | 'library';
  accentColor: string;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ type, accentColor }) => {
  if (type === 'face-recognition') {
    return (
      <div className="relative w-full h-48 md:h-56 bg-[#080b12] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center p-4">
        {/* Subtle background tech grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-30" />
        
        {/* Scanning laser beam effect */}
        <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-sky-400 to-transparent top-1/2 -translate-y-1/2 animate-pulse" />

        {/* Biometric Scan HUD */}
        <div className="relative z-10 w-36 h-36 border-2 border-dashed border-sky-400/40 rounded-2xl flex flex-col items-center justify-center p-3 backdrop-blur-sm bg-sky-500/[0.03]">
          {/* Corner brackets */}
          <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-sky-400" />
          <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-sky-400" />
          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-sky-400" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-sky-400" />

          {/* Central Face Wireframe */}
          <div className="relative w-20 h-20 rounded-full border border-sky-400/30 flex items-center justify-center">
            <Scan className="w-10 h-10 text-sky-400 animate-pulse" />
            {/* Detection nodes */}
            <span className="absolute top-4 left-4 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_6px_#38bdf8]" />
            <span className="absolute top-4 right-4 w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_6px_#38bdf8]" />
            <span className="absolute bottom-5 left-7 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_6px_#34d399]" />
          </div>

          <div className="mt-2 text-[10px] font-mono tracking-widest text-sky-300 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>MATCH: 99.4%</span>
          </div>
        </div>

        {/* Floating telemetry pills */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 border border-white/10 text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-sky-400" />
          <span>FPS: 60 | OpenCV</span>
        </div>
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
          <CheckCircle className="w-3 h-3" />
          <span>Attendance Logged</span>
        </div>
      </div>
    );
  }

  if (type === 'ecommerce') {
    return (
      <div className="relative w-full h-48 md:h-56 bg-[#090b14] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-tech-grid opacity-20" />

        {/* E-Commerce UI Mockup Layout */}
        <div className="relative z-10 w-full max-w-xs bg-[#101422] border border-white/10 rounded-xl p-3 shadow-xl space-y-2.5">
          {/* Mock Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              <span className="text-[11px] font-bold text-white tracking-wider">SmartBuy Store</span>
            </div>
            <div className="p-1 rounded-md bg-white/5 text-indigo-400 flex items-center gap-1 text-[10px]">
              <ShoppingCart className="w-3 h-3" />
              <span>Cart (3)</span>
            </div>
          </div>

          {/* Product Cards Row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 space-y-1.5">
              <div className="w-full h-12 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="h-2 w-14 bg-white/20 rounded" />
              <div className="flex justify-between items-center text-[10px]">
                <span className="font-mono text-sky-400 font-bold">$49.99</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300">New</span>
              </div>
            </div>

            <div className="p-2 rounded-lg bg-white/[0.03] border border-white/5 space-y-1.5">
              <div className="w-full h-12 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div className="h-2 w-12 bg-white/20 rounded" />
              <div className="flex justify-between items-center text-[10px]">
                <span className="font-mono text-sky-400 font-bold">$89.00</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Sale</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono px-1">
            <span>Responsive Web Flow</span>
            <span className="text-emerald-400">Checkout Ready</span>
          </div>
        </div>
      </div>
    );
  }

  // Library Management Graphic
  return (
    <div className="relative w-full h-48 md:h-56 bg-[#080d12] rounded-xl overflow-hidden border border-white/5 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-tech-grid opacity-20" />

      {/* Library Catalog HUD */}
      <div className="relative z-10 w-full max-w-xs bg-[#0f181c] border border-white/10 rounded-xl p-3.5 shadow-xl space-y-3">
        {/* Catalog Search Bar Mockup */}
        <div className="flex items-center justify-between bg-black/40 px-2.5 py-1.5 rounded-lg border border-white/5 text-[11px] text-slate-400">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-[10px]">ISBN / Title Lookup...</span>
          </div>
          <Database className="w-3 h-3 text-slate-500" />
        </div>

        {/* Book Stacks Mockup */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.03] border border-white/5 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-emerald-400" />
              <span className="text-slate-200 font-mono">Algorithms & Systems</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono">
              AVAILABLE
            </span>
          </div>

          <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.03] border border-white/5 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-amber-400" />
              <span className="text-slate-200 font-mono">Database Architectures</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[9px] font-mono">
              BORROWED
            </span>
          </div>

          <div className="flex items-center justify-between p-1.5 rounded bg-white/[0.03] border border-white/5 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-5 rounded-full bg-sky-400" />
              <span className="text-slate-200 font-mono">Python Machine Learning</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono">
              AVAILABLE
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
          <span>ShelfIQ Indexing</span>
          <span className="text-emerald-400 font-semibold">Inventory Synced</span>
        </div>
      </div>
    </div>
  );
};
