export type Language = "it" | "en";

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  linkedinHandle: string;
  githubHandle: string;
  instagramHandle: string;
  nationality: string;
  birthYear: number;
  workMode: string;
}

export interface ExperienceEntry {
  id: string;
  order: number;
  role: string;
  company: string;
  location: string;
  period: string;
  stack: string[];
  description: string;
}

export interface EducationEntry {
  id: string;
  order: number;
  title: string;
  institution: string;
  period: string;
}

export interface SkillGroup {
  expert: string[];
  intermediate: string[];
  learning: string[];
}

export interface Strength {
  id: string;
  title: string;
  description: string;
}

export interface LanguageSkill {
  name: string;
  level: string;
  proficiency: number;
}

export interface ProjectEntry {
  id: string;
  name: string;
  period: string;
  description: string;
}

export interface PassionCategory {
  id: string;
  title: string;
  blurb: string;
}

export interface SaveFile {
  hasStarted: boolean;
  chaptersRead: string[];
  soundEnabled: boolean;
  language: Language;
}
