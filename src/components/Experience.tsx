import React from 'react';
import { 
  workExperience, 
  leadershipExperience, 
  educationList, 
  certifications 
} from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { Briefcase, Users, GraduationCap, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="mb-12 text-center sm:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience & Leadership
          </h2>
        </ScrollReveal>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Work Experience & Education */}
          <div className="space-y-6">
            
            {/* Work Experience Card */}
            <ScrollReveal animation="fade-up" delay={100} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative group hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {workExperience.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                    <span>{workExperience.organization}</span>
                    <span className="text-slate-300 dark:text-slate-600">•</span>
                    <span className="text-slate-500 dark:text-slate-400 font-normal">{workExperience.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                    {workExperience.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Education Container */}
            <ScrollReveal animation="fade-up" delay={200} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
              <span className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                Education
              </span>

              <div className="space-y-5">
                {educationList.map((edu) => (
                  <div key={edu.id} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {edu.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        {edu.institution}
                      </p>
                      <p className="text-xs text-slate-400 font-medium">
                        {edu.period}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Leadership, Certification & Handwritten Note */}
          <div className="space-y-6">
            
            {/* Leadership Experience Card */}
            <ScrollReveal animation="fade-left" delay={150} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm relative group hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                    {leadershipExperience.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    <span>{leadershipExperience.organization}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-2">
                    {leadershipExperience.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Certification Card */}
            <ScrollReveal animation="fade-left" delay={250} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                Certification
              </span>

              {certifications.map((cert) => (
                <div key={cert.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </ScrollReveal>

            {/* Handwritten Note matching mockup */}
            <ScrollReveal animation="fade-up" delay={350} className="flex justify-end pt-2 pr-4 font-handwriting text-slate-500 dark:text-slate-400 text-xl rotate-[-2deg]">
              <div className="flex items-center gap-2">
                <span>Keep Learning Keep Building</span>
                <span className="text-2xl">⤷</span>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
