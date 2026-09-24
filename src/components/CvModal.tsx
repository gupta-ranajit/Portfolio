import React from 'react';
import { personalInfo, workExperience, educationList, skills } from '../data/portfolioData';
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    // Check if resume.pdf exists, else open print dialogue
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-850/50">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
              Curriculum Vitae Preview
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Resume"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-800 dark:text-slate-200 text-sm">
          {/* Header section */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {personalInfo.name}
            </h1>
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm sm:text-base mt-0.5">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-3">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                {personalInfo.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                {personalInfo.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                {personalInfo.location}, {personalInfo.country}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.aboutText}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Experience
            </h4>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-start">
                  <h5 className="font-bold text-slate-900 dark:text-white text-sm">
                    {workExperience.title}
                  </h5>
                  <span className="text-xs text-slate-400 font-medium">{workExperience.period}</span>
                </div>
                <p className="text-xs font-semibold text-blue-600 dark:text-blue-400">{workExperience.organization}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {workExperience.description}
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Education
            </h4>
            <div className="space-y-2.5">
              {educationList.map(edu => (
                <div key={edu.id} className="flex justify-between items-baseline text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{edu.title}</span>
                    <span className="text-slate-500 dark:text-slate-400"> — {edu.institution}</span>
                  </div>
                  <span className="text-xs text-slate-400 shrink-0 font-medium">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Technical Skills
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.map(skill => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 flex items-center justify-between gap-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            Verified & Updated for {new Date().getFullYear()}
          </p>

          <button
            onClick={handleDownloadPdf}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/25 transition-all"
          >
            <span>Download PDF</span>
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
