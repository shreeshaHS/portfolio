export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & Vision' | 'Web Development' | 'System & Tools';
  description: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  metrics?: string;
  accentColor: string;
  visualType: 'face-recognition' | 'ecommerce' | 'library';
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    tag: string;
    icon?: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  platform: string;
  date?: string;
  description: string;
  topics: string[];
  credentialBadge: string;
  color: string;
  certificateUrl?: string;
  credentialId?: string;
  verifyUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  highlights: string[];
  status?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  impactNotes: string[];
  experienceLetterUrl?: string;
}

export interface DocumentPreviewData {
  title: string;
  subtitle?: string;
  issuer?: string;
  period?: string;
  fileUrl: string;
  downloadName: string;
  badge: string;
  color?: string;
  topics?: string[];
  description?: string;
  type: 'certificate' | 'experience';
}
