import React, { useState, useRef } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import {
  Globe,
  Layers,
  Smartphone,
  Bot,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Sparkles,
  ArrowRight,
  ChevronDown,
  User,
  Phone,
  Building2,
  DollarSign,
  FileText,
  MessageSquare,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ServiceCard {
  icon: React.ElementType;
  title: string;
  description: string;
  gradient: string;
  glow: string;
  iconBg: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  description: string;
  contactMethod: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  description?: string;
  contactMethod?: string;
}

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

// ─── Service Cards Data ───────────────────────────────────────────────────────

const services: ServiceCard[] = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Stunning, fast-loading websites with modern design systems, SEO best practices, and flawless mobile responsiveness.',
    gradient: 'from-blue-600/20 to-blue-800/10',
    glow: 'group-hover:shadow-blue-500/20',
    iconBg: 'bg-blue-500/15 text-blue-400 group-hover:bg-blue-500/25',
  },
  {
    icon: Layers,
    title: 'Full Stack Applications',
    description: 'End-to-end web applications with React frontends, robust REST APIs, and scalable database architectures.',
    gradient: 'from-indigo-600/20 to-indigo-800/10',
    glow: 'group-hover:shadow-indigo-500/20',
    iconBg: 'bg-indigo-500/15 text-indigo-400 group-hover:bg-indigo-500/25',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with Flutter/Kotlin that feel native, performant, and intuitive on every device.',
    gradient: 'from-violet-600/20 to-violet-800/10',
    glow: 'group-hover:shadow-violet-500/20',
    iconBg: 'bg-violet-500/15 text-violet-400 group-hover:bg-violet-500/25',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Intelligent automation workflows, AI integrations, and smart tools that eliminate repetitive tasks and boost productivity.',
    gradient: 'from-cyan-600/20 to-cyan-800/10',
    glow: 'group-hover:shadow-cyan-500/20',
    iconBg: 'bg-cyan-500/15 text-cyan-400 group-hover:bg-cyan-500/25',
  },
];

// ─── Contact Links ────────────────────────────────────────────────────────────

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gupta.ranajit0904@gmail.com',
    href: 'mailto:gupta.ranajit0904@gmail.com',
    colorClass: 'hover:bg-rose-600 hover:shadow-rose-500/30 hover:border-rose-500/40',
    iconColor: 'text-rose-400',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 93320 21093',
    href: 'https://wa.me/919332021093',
    colorClass: 'hover:bg-emerald-600 hover:shadow-emerald-500/30 hover:border-emerald-500/40',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Ranajit Gupta',
    href: personalInfo.socialLinks.linkedin,
    colorClass: 'hover:bg-blue-600 hover:shadow-blue-500/30 hover:border-blue-500/40',
    iconColor: 'text-blue-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@ranajit-gupta',
    href: personalInfo.socialLinks.github,
    colorClass: 'hover:bg-slate-600 hover:shadow-slate-500/20 hover:border-slate-500/40',
    iconColor: 'text-slate-300',
  },
];

// ─── Validation ───────────────────────────────────────────────────────────────

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (data.phone.trim() && !/^[\d\s+\-().]{7,20}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type.';
  }

  if (!data.description.trim()) {
    errors.description = 'Project description is required.';
  } else if (data.description.trim().length < 20) {
    errors.description = 'Please describe your project in at least 20 characters.';
  }

  if (!data.contactMethod) {
    errors.contactMethod = 'Please select your preferred contact method.';
  }

  return errors;
};

// ─── Web3Forms Submit ─────────────────────────────────────────────────────────
// Web3Forms access keys are public by design — they only route emails to the
// registered address. No SMTP credentials or private secrets are exposed.
const WEB3FORMS_ACCESS_KEY = 'c6d39e6f-598f-49f7-af91-84fda19b536f';

// ─── Field Components ─────────────────────────────────────────────────────────

interface FieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  icon?: React.ElementType;
}

const Field: React.FC<FieldProps> = ({ label, error, required, children, icon: Icon }) => (
  <div className="space-y-1.5">
    <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
      {Icon && <Icon className="w-3 h-3 text-slate-400 dark:text-slate-500" />}
      {label}
      {required && <span className="text-blue-500 dark:text-blue-400">*</span>}
    </label>
    {children}
    {error && (
      <p className="flex items-center gap-1 text-xs text-rose-500 dark:text-rose-400 mt-1">
        <AlertCircle className="w-3 h-3 shrink-0" />
        {error}
      </p>
    )}
  </div>
);

// Light mode: white bg, slate-700 text, slate-300 border, slate-400 placeholder
// Dark mode:  slate-800/60 bg, white text, slate-700 border, slate-500 placeholder
const inputBase =
  'w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none ' +
  'bg-white border border-slate-200 text-slate-800 placeholder-slate-400 ' +
  'hover:border-slate-300 ' +
  'dark:bg-slate-800/60 dark:border-slate-700 dark:text-white dark:placeholder-slate-500 dark:hover:border-slate-600';

const inputNormal =
  inputBase +
  ' focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 ' +
  'dark:focus:border-blue-500 dark:focus:ring-blue-500/20';

const inputError =
  inputBase +
  ' border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-500/20 ' +
  'dark:border-rose-500/70 dark:focus:border-rose-500 dark:focus:ring-rose-500/20';

// ─── Main Component ───────────────────────────────────────────────────────────

export const ProjectInquiry: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    description: '',
    contactMethod: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverError, setServerError] = useState('');

  // ─── Handlers ────────────────────────────────────────────────────────────

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, ...validate({ ...formData, [name]: value }) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, ...validate(formData) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields touched
    const allTouched: Partial<Record<keyof FormData, boolean>> = {};
    (Object.keys(formData) as (keyof FormData)[]).forEach(k => { allTouched[k] = true; });
    setTouched(allTouched);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorEl = formRef.current?.querySelector('[data-error="true"]');
      firstErrorEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('sending');
    setServerError('');

    try {
      const payload = new FormData();
      payload.append('access_key', WEB3FORMS_ACCESS_KEY);
      payload.append('subject', `New Project Inquiry from ${formData.fullName} — ${formData.projectType}`);
      payload.append('from_name', 'Portfolio Project Inquiry Form');
      payload.append('Full Name', formData.fullName);
      payload.append('Email', formData.email);
      payload.append('Phone / WhatsApp', formData.phone || 'Not provided');
      payload.append('Company / Organization', formData.company || 'Not provided');
      payload.append('Project Type', formData.projectType);
      payload.append('Estimated Budget', formData.budget || 'Not specified');
      payload.append('Project Description', formData.description);
      payload.append('Preferred Contact Method', formData.contactMethod);
      // Honeypot
      payload.append('botcheck', '');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          description: '',
          contactMethod: '',
        });
        setErrors({});
        setTouched({});
      } else {
        setStatus('error');
        setServerError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerError('Network error. Please check your connection and try again.');
    }
  };

  const getInputClass = (field: keyof FormErrors) =>
    touched[field] && errors[field] ? inputError : inputNormal;

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <section
      id="project-inquiry"
      className="py-20 sm:py-28 relative overflow-hidden bg-[#f8fafc] dark:bg-[#0b0f19] transition-colors"
    >
      {/* Background decorative blobs */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-600/5 dark:bg-blue-600/8 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-indigo-600/5 dark:bg-indigo-600/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-cyan-600/3 dark:bg-cyan-600/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <ScrollReveal animation="fade-up" className="text-center mb-14 sm:mb-18">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-widest border border-blue-500/20 mb-5">
            <Sparkles className="w-3 h-3" />
            Work With Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-4">
            Have a Project in Mind?
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Let's Build Something Great Together
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to deployment — I turn ideas into polished, production-ready
            digital products. Tell me about your vision and let's make it real.
          </p>
        </ScrollReveal>

        {/* ── Service Cards ── */}
        <ScrollReveal animation="fade-up" delay={80} className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <ScrollReveal
                  key={svc.title}
                  animation="fade-up"
                  delay={100 + i * 70}
                >
                  <div
                    className={`group relative h-full rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xl ${svc.glow} cursor-default overflow-hidden`}
                  >
                    {/* Card gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${svc.iconBg} mb-4 transition-all duration-300`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2 leading-snug">
                        {svc.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {svc.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ── Main Card: Form + Contact Links ── */}
        <ScrollReveal animation="fade-up" delay={180}>
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-2xl">

            {/* Dark card background */}
            <div className="absolute inset-0 bg-white dark:bg-[#0f172a]" />

            {/* Subtle radial glows inside card */}
            <div
              aria-hidden
              className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-0">

              {/* ── LEFT: Contact Info Panel ── */}
              <div className="lg:col-span-2 p-7 sm:p-10 bg-slate-50 dark:bg-slate-900/70 border-b lg:border-b-0 lg:border-r border-slate-200/80 dark:border-slate-800 flex flex-col gap-8">

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                    Start a Conversation
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Reach out through the form or connect directly via your preferred channel. I typically respond within 24 hours.
                  </p>
                </div>

                {/* Contact link buttons */}
                <div className="space-y-3">
                  {contactLinks.map(link => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noreferrer"
                        aria-label={`Contact via ${link.label}`}
                        className={`group flex items-center gap-3.5 w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-200 hover:text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${link.colorClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400`}
                      >
                        <span className={`shrink-0 w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center ${link.iconColor} group-hover:bg-white/20 transition-colors`}>
                          <Icon className="w-4 h-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 group-hover:text-white/70 transition-colors">
                            {link.label}
                          </p>
                          <p className="text-sm font-medium truncate">{link.value}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                      </a>
                    );
                  })}
                </div>

                {/* Availability badge */}
                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    Available for new projects
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Inquiry Form ── */}
              <div className="lg:col-span-3 p-7 sm:p-10 bg-white dark:bg-transparent">
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-6">
                  Tell Me About Your Project
                </h3>

                {/* Success State */}
                {status === 'success' && (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                        Inquiry Received!
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                        Thanks for reaching out! I'll review your project details and get back to you within 24 hours.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-md shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                )}

                {/* Form */}
                {status !== 'success' && (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">

                    {/* Honeypot */}
                    <input type="checkbox" name="botcheck" className="hidden" readOnly />

                    {/* Row 1: Full Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <Field
                        label="Full Name"
                        required
                        icon={User}
                        error={touched.fullName ? errors.fullName : undefined}
                      >
                        <input
                          data-error={!!(touched.fullName && errors.fullName)}
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Ranajit Gupta"
                          autoComplete="name"
                          className={getInputClass('fullName')}
                        />
                      </Field>

                      <Field
                        label="Email Address"
                        required
                        icon={Mail}
                        error={touched.email ? errors.email : undefined}
                      >
                        <input
                          data-error={!!(touched.email && errors.email)}
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="you@example.com"
                          autoComplete="email"
                          className={getInputClass('email')}
                        />
                      </Field>
                    </div>

                    {/* Row 2: Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <Field
                        label="Phone / WhatsApp"
                        icon={Phone}
                        error={touched.phone ? errors.phone : undefined}
                      >
                        <input
                          data-error={!!(touched.phone && errors.phone)}
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="+91 93320 21093"
                          autoComplete="tel"
                          className={getInputClass('phone')}
                        />
                      </Field>

                      <Field label="Company Name" icon={Building2}>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp (optional)"
                          autoComplete="organization"
                          className={inputNormal}
                        />
                      </Field>
                    </div>

                    {/* Row 3: Project Type + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <Field
                        label="Project Type"
                        required
                        icon={FileText}
                        error={touched.projectType ? errors.projectType : undefined}
                      >
                        <div className="relative">
                          <select
                            data-error={!!(touched.projectType && errors.projectType)}
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${getInputClass('projectType')} appearance-none pr-10 cursor-pointer`}
                          >
                            <option value="" disabled className="bg-white dark:bg-slate-900 text-slate-400">
                              Select a service…
                            </option>
                            <option value="Website Development" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Website Development</option>
                            <option value="Full Stack Application" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Full Stack Application</option>
                            <option value="Mobile App Development" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Mobile App Development</option>
                            <option value="AI Automation" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">AI Automation</option>
                            <option value="UI/UX Design" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">UI/UX Design</option>
                            <option value="Other" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Other / Consultation</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
                        </div>
                      </Field>

                      <Field label="Estimated Budget" icon={DollarSign}>
                        <div className="relative">
                          <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={`${inputNormal} appearance-none pr-10 cursor-pointer`}
                          >
                            <option value="" className="bg-white dark:bg-slate-900 text-slate-400">Select range (optional)</option>
                            <option value="Under $500" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Under $500</option>
                            <option value="$500 – $1,000" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">$500 – $1,000</option>
                            <option value="$1,000 – $3,000" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">$1,000 – $3,000</option>
                            <option value="$3,000 – $5,000" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">$3,000 – $5,000</option>
                            <option value="$5,000 – $10,000" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">$5,000 – $10,000</option>
                            <option value="$10,000+" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">$10,000+</option>
                            <option value="Let's discuss" className="bg-white dark:bg-slate-900 text-slate-800 dark:text-white">Let's discuss</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500 pointer-events-none" />
                        </div>
                      </Field>
                    </div>

                    {/* Project Description */}
                    <Field
                      label="Project Description"
                      required
                      icon={MessageSquare}
                      error={touched.description ? errors.description : undefined}
                    >
                      <textarea
                        data-error={!!(touched.description && errors.description)}
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Describe your project goals, key features, target audience, any existing tech stack, timeline expectations, etc."
                        className={`${getInputClass('description')} resize-none`}
                      />
                    </Field>

                    {/* Preferred Contact Method */}
                    <Field
                      label="Preferred Contact Method"
                      required
                      error={touched.contactMethod ? errors.contactMethod : undefined}
                    >
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {(['Email', 'WhatsApp', 'LinkedIn', 'Phone Call'] as const).map(method => (
                          <label
                            key={method}
                            className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-150 select-none ${
                              formData.contactMethod === method
                                ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/25 dark:bg-blue-600/90 dark:border-blue-500 dark:shadow-blue-500/20'
                                : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 dark:bg-slate-800/50 dark:border-slate-700 dark:text-slate-400 dark:hover:border-blue-500/50 dark:hover:text-blue-400 dark:hover:bg-blue-500/5'
                            }`}
                          >
                            <input
                              type="radio"
                              name="contactMethod"
                              value={method}
                              checked={formData.contactMethod === method}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="sr-only"
                            />
                            {method}
                          </label>
                        ))}
                      </div>
                      {touched.contactMethod && errors.contactMethod && (
                        <p className="flex items-center gap-1 text-xs text-rose-500 dark:text-rose-400 mt-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.contactMethod}
                        </p>
                      )}
                    </Field>

                    {/* Server error */}
                    {status === 'error' && serverError && (
                      <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-sm dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="group relative w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 overflow-hidden"
                      >
                        {/* Shimmer effect */}
                        <span
                          aria-hidden
                          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        />
                        {status === 'sending' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending Inquiry…</span>
                          </>
                        ) : (
                          <>
                            <span>Send Project Inquiry</span>
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                          </>
                        )}
                      </button>
                      <p className="mt-3 text-[11px] text-slate-400 dark:text-slate-500">
                        Your information is kept private and used solely to respond to your inquiry.
                      </p>
                    </div>

                  </form>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
