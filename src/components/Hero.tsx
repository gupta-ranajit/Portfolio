import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowRight, 
  FolderGit2, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Github, 
  Linkedin, 
  Mail, 
  MessageCircle 
} from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-12 sm:pt-36 sm:pb-16 relative overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-purple-500/5 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Intro & Call to Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Greeting */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold border border-blue-200/60 dark:border-blue-800/60 shadow-sm">
              <span className="text-base">👋</span>
              <span>Hello, I'm</span>
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Ranajit{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Gupta
              </span>
            </h1>

            {/* Title / Role */}
            <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-200">
              {personalInfo.tagline}
            </p>

            {/* Short Bio */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              {personalInfo.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 font-semibold text-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow transition-all"
              >
                Let's Connect
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.email}
                aria-label="Email"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Graphic matching mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Frame */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-900 group">
              <img
                src="/hero-person.jpeg"
                alt="Ranajit Gupta"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/hero-person.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Handwritten Floating Note (Better Code A Brighter Tomorrow) */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-amber-50 dark:bg-amber-950/80 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 px-3.5 py-1.5 rounded-lg shadow-md rotate-3 font-handwriting text-base">
              <span>Better Code, A Brighter Tomorrow ✨</span>
            </div>
          </div>
        </div>

        {/* Bottom Quick Metrics Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-850/60 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">3+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Projects</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">1</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Internship</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">B.Tech IT</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">2023 – 2027</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight truncate">Giridih, Jharkhand</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">India</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
