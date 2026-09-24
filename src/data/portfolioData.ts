import { PersonalInfo, Skill, Project, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Ranajit Gupta",
  role: "Full-Stack Developer",
  tagline: "Full-Stack Developer | IT Undergraduate",
  shortBio: "I build modern web and mobile applications with clean code, intuitive design, and real-world impact. Passionate about turning ideas into scalable solutions.",
  aboutText: "I'm an Information Technology undergraduate at Bengal College of Engineering and Technology and a passionate Full-Stack Developer with hands-on experience in building web applications, REST APIs and database-driven solutions. I enjoy solving real-world problems through technology and constantly learning new tools and frameworks.",
  quote: "Technology is best when it brings people together.",
  location: "Giridih, Jharkhand",
  country: "India",
  email: "gupta.ranajit0904@gmail.com",
  phone: "+91 93320121093",
  degree: "B.Tech in Information Technology (2023 – 2027)",
  interests: [
    "Web Development",
    "Android Development",
    "UI/UX",
    "Problem Solving",
    "Open Source"
  ],
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:gupta.ranajit0904@gmail.com",
    whatsapp: "https://wa.me/9193320121093"
  },
  stats: {
    projects: "3+ Projects",
    internships: "1 Internship",
    degreePeriod: "B.Tech IT 2023 – 2027",
    locationShort: "Giridih, Jharkhand India"
  }
};

export const skills: Skill[] = [
  // Languages
  { name: "Java", category: ["All", "Languages", "Backend"], iconKey: "java", color: "#e76f00" },
  { name: "JavaScript", category: ["All", "Languages", "Frontend"], iconKey: "javascript", color: "#f7df1e" },
  { name: "TypeScript", category: ["All", "Languages", "Frontend"], iconKey: "typescript", color: "#3178c6" },
  { name: "Python", category: ["All", "Languages", "Backend"], iconKey: "python", color: "#3776ab" },
  { name: "PHP", category: ["All", "Languages", "Backend"], iconKey: "php", color: "#777bb4" },
  { name: "Kotlin", category: ["All", "Languages", "Mobile"], iconKey: "kotlin", color: "#7f52ff" },
  { name: "Dart", category: ["All", "Languages", "Mobile"], iconKey: "dart", color: "#0175c2" },
  { name: "HTML", category: ["All", "Languages", "Frontend"], iconKey: "html", color: "#e34f26" },
  { name: "CSS", category: ["All", "Languages", "Frontend"], iconKey: "css", color: "#1572b6" },

  // Frameworks / Libraries / Tools
  { name: "React", category: ["All", "Frontend"], iconKey: "react", color: "#61dafb" },
  { name: "Tailwind CSS", category: ["All", "Frontend"], iconKey: "tailwind", color: "#06b6d4" },
  { name: "Flask", category: ["All", "Backend"], iconKey: "flask", color: "#000000" },
  { name: "REST APIs", category: ["All", "Backend"], iconKey: "api", color: "#8b5cf6" },
  { name: "Flutter", category: ["All", "Mobile"], iconKey: "flutter", color: "#02569b" },
  { name: "MySQL", category: ["All", "Database"], iconKey: "mysql", color: "#4479a1" },
  { name: "PostgreSQL", category: ["All", "Database"], iconKey: "postgresql", color: "#4169e1" },
  { name: "Git", category: ["All", "Tools"], iconKey: "git", color: "#f05032" },
  { name: "VS Code", category: ["All", "Tools"], iconKey: "vscode", color: "#007acc" },
];

export const projects: Project[] = [
  {
    id: "gym-fitness",
    title: "Gym Management / Fitness Website",
    description: "Responsive gym and fitness platform with modern UI using React and TypeScript.",
    fullDescription: "A comprehensive digital gym experience featuring workout plans, membership enrollment, interactive class schedules, and trainer profiles with a sleek responsive layout.",
    image: "/projects/gym-fitness.jpg",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com/gym",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "expense-tracker",
    title: "Daily Expense Tracker",
    description: "Full-stack expense management application with REST APIs and automated calculations.",
    fullDescription: "A productivity web application to track income and expenses with real-time categorizations, monthly summaries, clean interactive charts, and REST API integration.",
    image: "/projects/expense-tracker.jpg",
    tags: ["React", "Flask", "Python"],
    liveUrl: "https://example.com/expenses",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: "github-analysis",
    title: "GitHub Repository Analysis App",
    description: "Analyze repository and code information using APIs with a clean frontend.",
    fullDescription: "Developer analytics dashboard that consumes GitHub REST APIs to inspect repository statistics, commit velocity, contributor dynamics, and tech stack distribution.",
    image: "/projects/github-analysis.jpg",
    tags: ["React", "API Integration", "GitHub"],
    liveUrl: "https://example.com/github-analyzer",
    githubUrl: "https://github.com",
    featured: true
  }
];

export const workExperience: ExperienceItem = {
  id: "sovratec",
  title: "Full-Stack Software Developer Intern",
  organization: "Sovratec International",
  period: "Apr 2026 – Oct 2026",
  description: "Contributing to full-stack application development, building responsive web interfaces, integrating REST APIs, working with databases, and participating in debugging, testing, and collaborative development workflows.",
  type: "work",
  badge: "Experience"
};

export const leadershipExperience: ExperienceItem = {
  id: "cybercell",
  title: "Organizer — CyberCell Club",
  organization: "Bengal College of Engineering and Technology",
  period: "2024 – Present",
  description: "Planned and coordinated technical events, workshops, and cybersecurity activities, collaborated with student teams, and supported the successful execution of club initiatives while developing leadership and communication skills.",
  type: "leadership",
  badge: "Leadership"
};

export const educationList: EducationItem[] = [
  {
    id: "btech",
    title: "B.Tech in Information Technology",
    institution: "Bengal College of Engineering and Technology, Durgapur",
    period: "2023 – 2027"
  },
  {
    id: "schooling",
    title: "10th & 12th (CBSE)",
    institution: "BNS DAV Public School, Giridih",
    period: "12th Stream: PCM"
  }
];

export const certifications: CertificationItem[] = [
  {
    id: "be10x",
    title: "AI Tools & ChatGPT Workshop – be10x",
    issuer: "be10x",
    date: "Certificate of Completion | July 2026"
  }
];
