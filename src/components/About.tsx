import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
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
  Check
} from 'lucide-react';

export const About: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const traits = [
    { label: 'Clean Code', icon: Code2, color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40' },
    { label: 'Problem Solver', icon: Lightbulb, color: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40' },
    { label: 'Continuous Learner', icon: BookOpen, color: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40' },
    { label: 'Team Player', icon: Users, color: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50/60 dark:bg-[#0e1424] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            More Than Just Code
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio & Core traits */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {personalInfo.aboutText}
            </p>

            {/* Trait badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {traits.map((trait) => {
                const Icon = trait.icon;
                return (
                  <div
                    key={trait.label}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border font-medium text-xs sm:text-sm text-slate-700 dark:text-slate-200 ${trait.color}`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="truncate">{trait.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Inspirational Quote Card */}
            <div className="relative mt-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl overflow-hidden border border-slate-700/60">
              <div className="text-4xl font-serif text-blue-400/40 select-none leading-none mb-2">“</div>
              <p className="text-base sm:text-lg italic font-medium text-slate-100 pl-4 border-l-2 border-blue-500">
                {personalInfo.quote}
              </p>
              <div className="text-4xl font-serif text-blue-400/40 select-none leading-none text-right mt-1">”</div>
            </div>
          </div>

          {/* Right Column: Personal Info Card */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-lg border border-slate-200/80 dark:border-slate-800/80 space-y-4">
            
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

          </div>

        </div>

      </div>
    </section>
  );
};
