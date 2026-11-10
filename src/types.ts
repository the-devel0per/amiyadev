export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  /** Path to a real screenshot (e.g. "/projects/accessaudit.png"). Leave empty until one is added. */
  image: string;
  imageAlt: string;
  liveUrl: string;
  /** Leave empty until the repository URL is available. */
  githubUrl: string;
}

export interface SiteConfig {
  name: string;
  initials: string;
  title: string;
  url?: string;
  specializations: string[];
  intro: string;
  supporting: string;
  /** Leave empty to omit the portrait. */
  profileImage: string;
  profileImageAlt: string;
  /** e.g. "/resume.pdf" — place the file in /public. */
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
  year: number;
}

export interface AboutConfig {
  lead: string;
  approach: { title: string; body: string }[];
  experienceIntro: string;
  experience: { role: string; org: string; period: string; summary: string }[];
  knowledge: { group: string; items: string[] }[];
  education: { degree: string; school: string; period: string };
}
