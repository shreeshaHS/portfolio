import React, { useState } from 'react';
import { SKILL_CATEGORIES, SOFT_SKILLS } from '../data/portfolioData';
import { Code2, Layout, BarChart3, Wrench, Search, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { playSound } from '../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-4 h-4" />;
      case 'web-dev':
        return <Layout className="w-4 h-4" />;
      case 'data-bi':
        return <BarChart3 className="w-4 h-4" />;
      case 'tools-enterprise':
        return <Wrench className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategory !== 'all' && cat.id !== activeCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (searchQuery && matchingSkills.length === 0) {
      return null;
    }
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter((cat): cat is (typeof SKILL_CATEGORIES)[number] => cat !== null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambiance */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-indigo-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-sky-500/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">
                Section 02 // Competencies
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Technical & Professional Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Authentic capabilities grounded in academic coursework, practical system projects, and verified certifications.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter skills (e.g. Python, Java)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => {
              playSound('click');
              setActiveCategory('all');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/5'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playSound('click');
                setActiveCategory(cat.id);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] border border-white/5'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-wide">{cat.name}</h3>
                    <p className="text-[11px] text-slate-400">{cat.description}</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white/5">
                  {cat.skills.length} items
                </span>
              </div>

              {/* Skills Pill List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-sky-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-100">{skill.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-white/5 text-[10px] font-mono">
                      <span className="text-sky-300">{skill.level}</span>
                      <span className="text-slate-400">{skill.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Work Ethic Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h3 className="text-lg font-bold text-white tracking-wide">
              Professional Work Ethic & Soft Competencies
            </h3>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">• Highlighted from Resume</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {SOFT_SKILLS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.015] border border-white/5 hover:border-purple-500/30 transition-all space-y-1.5"
              >
                <div className="text-xs font-bold text-slate-200">{item.title}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
