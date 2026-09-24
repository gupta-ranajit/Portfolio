export type SkillCategory = 'All' | 'Languages' | 'Frontend' | 'Backend' | 'Mobile' | 'Database' | 'Tools';

export interface Skill {
  name: string;
  category: SkillCategory[];
  iconKey: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'work' | 'leadership';
  badge: string;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  extra?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  aboutText: string;
  quote: string;
  location: string;
  country: string;
  email: string;
  phone: string;
  degree: string;
  interests: string[];
  socialLinks: {
    github: string;
    linkedin: string;
    email: string;
    whatsapp: string;
  };
  stats: {
    projects: string;
    internships: string;
    degreePeriod: string;
    locationShort: string;
  };
}
