import type {
  Profile,
  ExperienceEntry,
  EducationEntry,
  SkillGroup,
  Strength,
  LanguageSkill,
  ProjectEntry,
} from "@/types";

export const profile: Profile = {
  name: "Marco Carollo",
  role: "Full-Stack Developer",
  tagline: "Full-Stack Developer · Player since 2016 · Remote-first",
  bio: "Web development is the passion I turned into a career: full-stack applications for EU-funded projects, close collaboration with cross-functional teams, and a healthy habit of reading other people's code until it makes sense. I care about getting the architecture right early, but I'm just as comfortable prototyping fast and iterating from feedback. Off the clock, I'm just as happy min-maxing a build or arguing over the rules of a board game.",
  email: "marco.carollo@live.it",
  linkedinHandle: "marco-carollo",
  githubHandle: "dev-marcoC",
  instagramHandle: "hide.marco",
  nationality: "Italian",
  birthYear: 1997,
  workMode: "Hybrid / Remote",
};

export const experience: ExperienceEntry[] = [
  {
    id: "trust-it",
    order: 6,
    role: "Full Stack Developer",
    company: "TRUST-IT Srl · COMMPLA Srl",
    location: "Hybrid work",
    period: "2023 — Present",
    stack: ["Angular", "React", "TypeScript", "SCSS", "Docker", "REST API"],
    description:
      "Designing and building full-stack applications for EU-funded projects, coordinating frontend/backend integration and ensuring technical consistency. Working directly with stakeholders to turn requirements into scalable features.",
  },
  {
    id: "aubay",
    order: 4,
    role: "Technical Consultant – Analyst",
    company: "Aubay SpA",
    location: "Full remote",
    period: "2021 — 2023",
    stack: ["React", "C#", "HTML", "CSS", "TypeScript", "JavaScript", "jQuery"],
    description:
      "Sharpened communication and problem-solving skills working directly with clients on requirements analysis and functional specs. Became a go-to reference for colleagues.",
  },
  {
    id: "freelance",
    order: 3,
    role: "Freelance Developer",
    company: "Engineer",
    location: "",
    period: "2016 — 2022",
    stack: ["Java", "MATLAB", "C", "EJS", "HTML", "CSS", "Node"],
    description:
      "Freelance development across a wide range of software, from small tools to web applications — where it all started.",
  },
];

export const education: EducationEntry[] = [
  {
    id: "pisa",
    order: 5,
    title: "Computer Science — Master's Degree",
    institution: "University of Pisa · ICT Solution Architect track",
    period: "2022 — Present",
  },
  {
    id: "palermo",
    order: 2,
    title: "Computer Engineering — Bachelor's Degree",
    institution: "University of Palermo",
    period: "2016 — 2022",
  },
  {
    id: "iti",
    order: 1,
    title: "Industrial Technical Institute",
    institution: "Technical Diploma",
    period: "2010 — 2015",
  },
];

export const skills: SkillGroup = {
  mastered: [
    { name: "React", level: 9 },
    { name: "Angular", level: 9 },
    { name: "TypeScript", level: 9 },
    { name: "JavaScript", level: 9 },
    { name: "HTML & CSS", level: 9 },
    { name: "Docker", level: 8 },
    { name: "SQL", level: 8 },
    { name: "Python", level: 8 },
  ],
  proficient: [
    { name: "jQuery", level: 7 },
    { name: "Vue.js", level: 6 },
    { name: "Django", level: 6 },
    { name: "PHP", level: 5 },
    { name: "d3.js / Chart.js", level: 5 },
    { name: "Google AppScript", level: 5 },
  ],
  learning: [
    { name: "WordPress", level: 3 },
    { name: "Drupal", level: 2 },
    { name: "Laravel", level: 2 },
  ],
};

export const strengths: Strength[] = [
  {
    id: "coordination",
    title: "Project Coordination",
    description: "Leading teams from planning to delivery.",
  },
  {
    id: "vision",
    title: "Strategic Vision",
    description: "Balancing execution with business goals.",
  },
  {
    id: "remote",
    title: "Remote Collaboration",
    description: "Self-organized across time zones.",
  },
  {
    id: "crossfunctional",
    title: "Cross-functional",
    description: "Turning requirements into concrete tasks.",
  },
  {
    id: "communication",
    title: "Communication",
    description: "Sharpened by direct client relationships.",
  },
  {
    id: "selftaught",
    title: "Self-taught",
    description: "Comfortable reading others' code.",
  },
];

export const languages: LanguageSkill[] = [
  { name: "Italian", level: "Native", proficiency: 5 },
  { name: "English", level: "B2", proficiency: 3 },
];

export const interests: string[] = [
  "Video Games",
  "Board Games",
  "Travelling",
  "Web Design",
];

export const projects: ProjectEntry[] = [
  {
    id: "gamerdaybook",
    name: "GamerDaybook",
    period: "Jul 2022",
    description:
      "A dynamic resume page built with React, TypeScript and Material UI — available on my GitHub.",
  },
  {
    id: "atomic",
    name: "Atomic Architecture Experiments",
    period: "2022 — 2023",
    description: "Web apps structured around Atomic Design principles.",
  },
];
