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
  tagline: "Full-Stack Developer · Giocatore dal 2016 · Remote-first",
  bio: "Lo sviluppo web è la passione che ho trasformato in un lavoro: applicazioni full-stack per progetti finanziati dall'UE, stretta collaborazione con team multidisciplinari, e la sana abitudine di leggere il codice altrui finché non torna tutto chiaro. Tengo a impostare bene l'architettura fin da subito, ma sono altrettanto a mio agio nel prototipare in fretta e iterare sui feedback. Fuori dall'orario di lavoro, sono ugualmente felice a ottimizzare una build o a discutere sulle regole di un gioco da tavolo.",
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
      "Progetto e sviluppo applicazioni full-stack per progetti finanziati dall'UE, coordinando l'integrazione frontend/backend e garantendo coerenza tecnica. Lavoro a stretto contatto con gli stakeholder per trasformare i requisiti in funzionalità scalabili.",
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
      "Ho affinato le capacità di comunicazione e problem-solving lavorando a stretto contatto con i clienti su analisi dei requisiti e specifiche funzionali. Diventato un punto di riferimento per i colleghi.",
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
      "Sviluppo freelance su una vasta gamma di software, da piccoli tool ad applicazioni web — dove tutto è iniziato.",
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
    title: "Coordinamento di Progetto",
    description: "Guido i team dalla pianificazione alla consegna.",
  },
  {
    id: "vision",
    title: "Visione Strategica",
    description: "Bilancio l'esecuzione con gli obiettivi di business.",
  },
  {
    id: "remote",
    title: "Collaborazione da Remoto",
    description: "Autonomo attraverso fusi orari diversi.",
  },
  {
    id: "crossfunctional",
    title: "Cross-funzionale",
    description: "Trasformo i requisiti in attività concrete.",
  },
  {
    id: "communication",
    title: "Comunicazione",
    description: "Affinata dal rapporto diretto con i clienti.",
  },
  {
    id: "selftaught",
    title: "Autodidatta",
    description: "A mio agio nel leggere codice altrui.",
  },
];

export const languages: LanguageSkill[] = [
  { name: "Italiano", level: "Madrelingua", proficiency: 5 },
  { name: "Inglese", level: "B2", proficiency: 3 },
];

export const interests: string[] = [
  "Videogiochi",
  "Giochi da Tavolo",
  "Viaggiare",
  "Web Design",
];

export const projects: ProjectEntry[] = [
  {
    id: "gamerdaybook",
    name: "GamerDaybook",
    period: "Lug 2022",
    description:
      "Una pagina curriculum dinamica costruita con React, TypeScript e Material UI — disponibile sul mio GitHub.",
  },
  {
    id: "atomic",
    name: "Atomic Architecture Experiments",
    period: "2022 — 2023",
    description: "Web app strutturate secondo i principi dell'Atomic Design.",
  },
];
