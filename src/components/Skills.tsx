import React, { useEffect, useState } from 'react';
import { skills } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { ScrollReveal } from './ScrollReveal';

// Detect reduced motion preference
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

interface SkillCardProps {
  name: string;
  iconKey: string;
  color?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, iconKey }) => (
  <div
    className="relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-500/20 transition-all duration-300 group overflow-hidden select-none cursor-default"
    style={{ minWidth: 80, maxWidth: 96, width: 88 }}
    role="listitem"
    aria-label={`Skill: ${name}`}
    tabIndex={0}
  >
    {/* Top accent line */}
    <div
      className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      aria-hidden="true"
    />
    <div className="w-9 h-9 flex items-center justify-center mb-2 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out">
      <TechIcon name={iconKey} size={28} />
    </div>
    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-200 text-center leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors w-full truncate px-1">
      {name}
    </span>
  </div>
);

interface MarqueeRowProps {
  items: SkillCardProps[];
  duration: number; // seconds for one full scroll
  paused: boolean;
  reducedMotion: boolean;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ items, duration, paused, reducedMotion }) => {
  // Duplicate items 3 times so the loop is seamless regardless of viewport width
  const track = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' } as React.CSSProperties}
      role="list"
      aria-label="Skills marquee"
    >
      {reducedMotion ? (
        // Static scrollable row for reduced-motion
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {items.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} {...skill} />
          ))}
        </div>
      ) : (
        <div
          className="flex gap-3 w-max"
          style={{
            animation: `marquee-ltr ${duration}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {track.map((skill, i) => (
            <SkillCard key={`${skill.name}-${i}`} {...skill} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Skills: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [row1Paused, setRow1Paused] = useState(false);
  const [row2Paused, setRow2Paused] = useState(false);

  // Split skills into two rows — interleaved for visual balance
  const row1Skills = skills.filter((_, i) => i % 2 === 0);
  const row2Skills = skills.filter((_, i) => i % 2 !== 0);

  return (
    <section id="skills" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
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

          {/* Handwritten annotation */}
          <div className="hidden lg:flex items-center gap-2 text-right self-end font-handwriting text-slate-500 dark:text-slate-400 text-lg rotate-1">
            <span className="leading-snug">Tools that turn ideas<br />into reality</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
              <path d="M4 4c0 6 6 10 12 10h4m-4-4l4 4-4 4"/>
            </svg>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee rows — full viewport width, NO padding constraint */}
      <div className="space-y-3">
        {/* Row 1 — base speed */}
        <div
          onMouseEnter={() => setRow1Paused(true)}
          onMouseLeave={() => setRow1Paused(false)}
          onFocus={() => setRow1Paused(true)}
          onBlur={() => setRow1Paused(false)}
        >
          <MarqueeRow
            items={row1Skills}
            duration={28}
            paused={row1Paused}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Row 2 — different speed + staggered start */}
        <div
          onMouseEnter={() => setRow2Paused(true)}
          onMouseLeave={() => setRow2Paused(false)}
          onFocus={() => setRow2Paused(true)}
          onBlur={() => setRow2Paused(false)}
        >
          <MarqueeRow
            items={row2Skills}
            duration={22}
            paused={row2Paused}
            reducedMotion={reducedMotion}
          />
        </div>
      </div>

      {/* Skill count badge */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <ScrollReveal animation="fade-up" delay={100}>
          <p className="text-center text-xs text-slate-400 dark:text-slate-500">
            {skills.length} technologies · hover to pause · keyboard navigable
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
