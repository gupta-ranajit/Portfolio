import React, { useState } from 'react';
import { skills } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { SkillCategory } from '../types';
import { ScrollReveal } from './ScrollReveal';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');

  const categories: SkillCategory[] = [
    'All',
    'Languages',
    'Frontend',
    'Backend',
    'Mobile',
    'Database',
    'Tools'
  ];

  const filteredSkills = skills.filter(skill =>
    skill.category.includes(activeCategory)
  );

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Playful Note */}
        <ScrollReveal animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              My Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Technologies I Work With
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-1">
              A diverse tech stack to build modern, scalable and efficient solutions.
            </p>
          </div>

          {/* Handwritten Annotation matching mockup */}
          <div className="hidden lg:flex items-center gap-2 text-right self-end font-handwriting text-slate-500 dark:text-slate-400 text-lg rotate-1">
            <span className="leading-snug">Tools that turn ideas<br />into reality</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
              <path d="M4 4c0 6 6 10 12 10h4m-4-4l4 4-4 4"/>
            </svg>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal animation="fade-up" delay={100} className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 hover:-translate-y-0.5 active:translate-y-0 ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal
              key={skill.name}
              animation="fade-up"
              delay={Math.min((index % 9) * 40, 360)}
              className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 group transform hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-default overflow-hidden"
              tabIndex={0}
              aria-label={`Skill: ${skill.name}`}
            >
              {/* Subtle top accent line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                aria-hidden="true" 
              />
              <div className="w-10 h-10 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out">
                <TechIcon name={skill.iconKey} size={32} />
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 text-center truncate w-full group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.name}
              </span>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
