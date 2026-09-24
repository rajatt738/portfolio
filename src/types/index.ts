// Core data types for the portfolio

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  tagline: string;
  roles: string[];
  description: string;
  email: string;
  github: string;
  linkedin: string;
  resumePdf: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'full-time' | 'internship';
  bullets: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  categories: ProjectCategory[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  highlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  cgpa?: string;
  location: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'unconfigured';
