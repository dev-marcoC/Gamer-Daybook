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
  tagline: "Computer Engineer · 5+ years experience · Remote-first",
  bio: "Web development is the passion I turned into a career. I design and build full-stack applications for EU-funded projects, balancing technical consistency with direct, hands-on work with stakeholders. Lately that also means working AI-assisted (Claude) into the loop — fast prototyping, the occasional vibe-coding session, still shipping with intent.",
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
      "Designing and building full-stack applications for EU-funded projects, coordinating frontend/backend integration and ensuring technical consistency. Working directly with stakeholders to turn requirements into scalable features and deployment pipelines.",
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
      "Sharpened communication and problem-solving skills working directly with clients on requirements analysis and functional specs. Became a go-to reference for colleagues on all kinds of technical issues.",
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
      "Freelance development across a wide range of software, from small tools to web applications — where it all started, and where most of the self-taught learning happened.",
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
  expert: [
    "React",
    "Angular",
    "TypeScript",
    "HTML & CSS",
    "JavaScript",
    "jQuery",
    "CSS Framework",
    "Python",
    "Django",
    "Docker",
    "SQL",
    "ApexChart",
    "Chart.js",
  ],
  intermediate: ["Vue.js", "d3.js", "Google AppScript", "PHP"],
  learning: ["WordPress", "Drupal", "Laravel"],
};

export const strengths: Strength[] = [
  {
    id: "coordination",
    title: "Project Coordination",
    description: "Leading diverse teams through every phase of development, from planning to delivery.",
  },
  {
    id: "vision",
    title: "Strategic Vision",
    description: "Balancing technical execution with business goals — roadmaps, architecture, scalability.",
  },
  {
    id: "teamwork",
    title: "Team Work",
    description: "Used to working in well-organized teams, often steering the workflow myself.",
  },
  {
    id: "remote",
    title: "Remote Collaboration",
    description: "I prefer remote work: self-organized and easy to coordinate with distributed teams.",
  },
  {
    id: "crossfunctional",
    title: "Cross-functional Collaboration",
    description: "Working closely with clients, translating requirements into concrete tasks.",
  },
  {
    id: "communication",
    title: "Communication",
    description: "Sharpened by direct client relationships and hands-on requirements analysis.",
  },
  {
    id: "selftaught",
    title: "Self-taught Engineer",
    description: "Comfortable reading and understanding other people's code to ship new features.",
  },
];

export const languages: LanguageSkill[] = [
  { name: "Italian", level: "Native", proficiency: 5 },
  { name: "English", level: "B2", proficiency: 3 },
];

export const interests: string[] = ["Video Games", "Board Games", "Travelling", "Web Design"];

export const projects: ProjectEntry[] = [
  {
    id: "gamerdaybook",
    name: "GamerDaybook",
    period: "Jul 2022",
    description: "A dynamic resume page built with React, TypeScript and Material UI.",
  },
  {
    id: "atomic",
    name: "Atomic Architecture Experiments",
    period: "2022 — 2023",
    description: "Experimenting with new web apps structured around Atomic Design principles.",
  },
];
