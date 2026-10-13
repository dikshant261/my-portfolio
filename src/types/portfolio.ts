export interface PersonalInfo {
  name: string;
  profession: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  twitter?: string;
  resume: string;
  profileImage: string;
  about: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
}

export interface Hero {
  greeting: string;
  headline: string;
  subHeadline: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
  statusText?: string;
  statusAvailable?: boolean;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools' | string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: string;
}

export interface Experience {
  jobProfile: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  projectName: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  projectLink: string;
  githubLink: string;
  image: string;
  featured: boolean;
  category?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  description: string;
  date: string;
  awardType: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Contact {
  heading: string;
  description: string;
  email: string;
  phone?: string;
  location?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  hero: Hero;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  achievements: Achievement[];
  services: Service[];
  contact: Contact;
}
