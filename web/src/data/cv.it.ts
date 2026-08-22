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
  tagline: "Ingegnere Informatico · 5+ anni di esperienza · Remote-first",
  bio: "Lo sviluppo web è la passione che ho trasformato in un lavoro. Progetto e costruisco applicazioni full-stack per progetti finanziati dall'UE, bilanciando la coerenza tecnica con il lavoro diretto e concreto con gli stakeholder. Ultimamente questo significa anche integrare l'AI (Claude) nel flusso di lavoro — prototipazione veloce, qualche sessione di vibe-coding — continuando comunque a consegnare con criterio.",
  email: "marco.carollo@live.it",
  linkedinHandle: "marco-carollo",
  githubHandle: "dev-marcoC",
  instagramHandle: "hide.marco",
  nationality: "Italiana",
  birthYear: 1997,
  workMode: "Ibrido / Remoto",
};

export const experience: ExperienceEntry[] = [
  {
    id: "trust-it",
    order: 6,
    role: "Full Stack Developer",
    company: "TRUST-IT Srl · COMMPLA Srl",
    location: "Lavoro ibrido",
    period: "2023 — Presente",
    stack: ["Angular", "React", "TypeScript", "SCSS", "Docker", "REST API"],
    description:
      "Progetto e sviluppo applicazioni full-stack per progetti finanziati dall'UE, coordinando l'integrazione frontend/backend e garantendo coerenza tecnica. Lavoro a stretto contatto con gli stakeholder per trasformare i requisiti in funzionalità scalabili e pipeline di deployment.",
  },
  {
    id: "aubay",
    order: 4,
    role: "Consulente Tecnico – Analista",
    company: "Aubay SpA",
    location: "Full remote",
    period: "2021 — 2023",
    stack: ["React", "C#", "HTML", "CSS", "TypeScript", "JavaScript", "jQuery"],
    description:
      "Ho affinato le capacità di comunicazione e problem-solving lavorando a stretto contatto con i clienti su analisi dei requisiti e specifiche funzionali. Diventato un punto di riferimento per i colleghi su ogni genere di problema tecnico.",
  },
  {
    id: "freelance",
    order: 3,
    role: "Sviluppatore Freelance",
    company: "Engineer",
    location: "",
    period: "2016 — 2022",
    stack: ["Java", "MATLAB", "C", "EJS", "HTML", "CSS", "Node"],
    description:
      "Sviluppo freelance su una vasta gamma di software, da piccoli tool ad applicazioni web — dove tutto è iniziato, e dove è avvenuta la maggior parte dell'apprendimento da autodidatta.",
  },
];

export const education: EducationEntry[] = [
  {
    id: "pisa",
    order: 5,
    title: "Informatica — Laurea Magistrale",
    institution: "Università di Pisa · Percorso ICT Solution Architect",
    period: "2022 — Presente",
  },
  {
    id: "palermo",
    order: 2,
    title: "Ingegneria Informatica — Laurea Triennale",
    institution: "Università di Palermo",
    period: "2016 — 2022",
  },
  {
    id: "iti",
    order: 1,
    title: "Istituto Tecnico Industriale",
    institution: "Diploma Tecnico",
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
    title: "Coordinamento di Progetto",
    description: "Guido team eterogenei lungo ogni fase dello sviluppo, dalla pianificazione alla consegna.",
  },
  {
    id: "vision",
    title: "Visione Strategica",
    description: "Bilancio l'esecuzione tecnica con gli obiettivi di business — roadmap, architettura, scalabilità.",
  },
  {
    id: "teamwork",
    title: "Lavoro di Squadra",
    description: "Abituato a lavorare in team ben organizzati, spesso guidando io stesso il flusso di lavoro.",
  },
  {
    id: "remote",
    title: "Collaborazione da Remoto",
    description: "Preferisco il lavoro da remoto: autonomo e facile da coordinare con team distribuiti.",
  },
  {
    id: "crossfunctional",
    title: "Collaborazione Cross-funzionale",
    description: "Lavoro a stretto contatto con i clienti, traducendo i requisiti in attività concrete.",
  },
  {
    id: "communication",
    title: "Comunicazione",
    description: "Affinata dal rapporto diretto con i clienti e dall'analisi dei requisiti sul campo.",
  },
  {
    id: "selftaught",
    title: "Ingegnere Autodidatta",
    description: "A mio agio nel leggere e comprendere codice altrui per implementare nuove funzionalità.",
  },
];

export const languages: LanguageSkill[] = [
  { name: "Italiano", level: "Madrelingua", proficiency: 5 },
  { name: "Inglese", level: "B2", proficiency: 3 },
];

export const interests: string[] = ["Videogiochi", "Giochi da Tavolo", "Viaggiare", "Web Design"];

export const projects: ProjectEntry[] = [
  {
    id: "gamerdaybook",
    name: "GamerDaybook",
    period: "Lug 2022",
    description: "Una pagina curriculum dinamica costruita con React, TypeScript e Material UI.",
  },
  {
    id: "atomic",
    name: "Atomic Architecture Experiments",
    period: "2022 — 2023",
    description: "Sperimentazione di nuove web app strutturate secondo i principi dell'Atomic Design.",
  },
];
