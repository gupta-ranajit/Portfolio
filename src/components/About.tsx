import React, { useState, useEffect, useRef, useCallback } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import {
  Code2,
  Lightbulb,
  BookOpen,
  Users,
  User,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Heart,
  Copy,
  Check,
  Quote,
} from 'lucide-react';

// ─── Quote data ───────────────────────────────────────────────────────────────
const QUOTES = [
  {
    text: "Technology is best when it brings people together.",
    author: "Matt Mullenweg",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    text: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
];

// ─── Reduced-motion hook ──────────────────────────────────────────────────────
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
}

// ─── Quote Carousel ───────────────────────────────────────────────────────────
const QuoteCarousel: React.FC = () => {
  const reducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(0);
  const [animState, setAnimState] = useState<'idle' | 'exit' | 'enter'>('idle');
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const INTERVAL = 5000;

  const advance = useCallback(() => {
    if (reducedMotion) {
      setCurrent((prev) => (prev + 1) % QUOTES.length);
      return;
    }
    setAnimState('exit');
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % QUOTES.length);
      setAnimState('enter');
      setTimeout(() => setAnimState('idle'), 420);
    }, 380);
  }, [reducedMotion]);

  // Auto-advance timer
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(advance, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, advance]);

  const q = QUOTES[current];

  // Animation classes
  const contentClass =
    animState === 'exit'
      ? 'quote-exit'
      : animState === 'enter'
      ? 'quote-enter'
      : 'quote-idle';

  return (
    <div
      className="relative mt-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl overflow-hidden border border-slate-700/60 cursor-default"
      style={{ minHeight: 130 }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      aria-label="Rotating developer quotes — hover or focus to pause"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Decorative quote mark */}
      <Quote
        className="absolute top-4 right-5 w-8 h-8 text-blue-500/20 rotate-180 select-none"
        aria-hidden="true"
      />

      {/* Animated content */}
      <div className={`transition-none ${contentClass}`}>
        <div className="text-3xl font-serif text-blue-400/40 select-none leading-none mb-2">"</div>
        <p className="text-base sm:text-lg italic font-medium text-slate-100 pl-4 border-l-2 border-blue-500 leading-relaxed">
          {q.text}
        </p>
        <p className="text-xs text-slate-400 mt-3 pl-4">— {q.author}</p>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-1.5 mt-4 pl-1" role="tablist" aria-label="Quote indicators">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Quote ${i + 1}`}
            onClick={() => {
              if (timerRef.current) clearTimeout(timerRef.current);
              setCurrent(i);
              setAnimState('enter');
              setTimeout(() => setAnimState('idle'), 420);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${
              i === current
                ? 'w-6 bg-blue-400'
                : 'w-1.5 bg-slate-600 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// ─── Main About component ─────────────────────────────────────────────────────
export const About: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const traits = [
    {
      label: 'Clean Code',
      icon: Code2,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40',
      waveClass: 'trait-wave-0',
    },
    {
      label: 'Problem Solver',
      icon: Lightbulb,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40',
      waveClass: 'trait-wave-1',
    },
    {
      label: 'Continuous Learner',
      icon: BookOpen,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40',
      waveClass: 'trait-wave-2',
    },
    {
      label: 'Team Player',
      icon: Users,
      color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40',
      waveClass: 'trait-wave-3',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50/60 dark:bg-[#0e1424] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="mb-10 text-center sm:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            More Than Just Code
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column */}
          <ScrollReveal animation="fade-up" delay={100} className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {personalInfo.aboutText}
            </p>

            {/* Trait badges with gradient wave */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {traits.map((trait, index) => {
                const Icon = trait.icon;
                return (
                  <ScrollReveal
                    key={trait.label}
                    animation="fade-up"
                    delay={150 + index * 60}
                    className={`relative flex items-center gap-2 p-2.5 rounded-xl border font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-200 overflow-hidden ${trait.color} ${
                      reducedMotion ? '' : trait.waveClass
                    }`}
                  >
                    {/* Gradient wave overlay */}
                    {!reducedMotion && (
                      <span
                        className="trait-glow-overlay"
                        aria-hidden="true"
                      />
                    )}
                    <Icon className="w-4 h-4 shrink-0 relative z-10" />
                    <span className="truncate relative z-10">{trait.label}</span>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Quote Carousel */}
            <ScrollReveal animation="fade-up" delay={300}>
              <QuoteCarousel />
            </ScrollReveal>
          </ScrollReveal>

          {/* Right Column: Personal Info Card */}
          <ScrollReveal
            animation="fade-left"
            delay={150}
            className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-200/80 dark:border-slate-800/80 space-y-4"
          >
            {/* Name */}
            <div className="flex items-start gap-3.5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Name</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{personalInfo.name}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3.5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-lg bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Location</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {personalInfo.location}, {personalInfo.country}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 group">
              <div className="flex items-start gap-3.5 overflow-hidden">
                <div className="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <p className="text-xs text-slate-400 font-medium">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                title="Copy email"
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Phone</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-semibold text-slate-800 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                title="Copy phone"
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Degree */}
            <div className="flex items-start gap-3.5 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Degree</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {personalInfo.degree}
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="flex items-start gap-3.5 pt-1">
              <div className="p-2 rounded-lg bg-pink-50 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400 shrink-0">
                <Heart className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium mb-1.5">Interests</p>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
