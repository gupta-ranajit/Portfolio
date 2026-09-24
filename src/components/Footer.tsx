import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 py-8 sm:py-10 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xs shadow-md shadow-blue-500/20">
              RG
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                {personalInfo.name}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {personalInfo.tagline}
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
