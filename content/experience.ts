export type TechIconKey =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "VWO"
  | "Adobe Target"
  | "Optimizely"
  | "Dynamic Yield"
  | "Monetate"
  | "Convert"
  | "Kameleoon"
  | "Google Optimize"
  | "Github"
  | "JIRA"
  | "CSS/TailwindCSS"
  | "Astro";

export type ExperienceItem = {
  id: string;
  company: string;
  title: string;
  time: string;
  details: string[];
  techs: TechIconKey[];
};

export const experiences: {
  resume: { en: string; fr: string };
  experienceItems: ExperienceItem[];
} = {
  resume: {
    en: "https://drive.google.com/file/d/13gfNiO6VOmYmOVUi1QTgcyq_JECixnJi/view?usp=sharing",
    fr: "https://drive.google.com/file/d/12flWUqwDmUcxbo_oVSLM4Qa0m-yTgOcO/view?usp=sharing",
  },
  experienceItems: [
    {
      id: "1",
      company: "Generosity X, Canada 🇨🇦",
      title: "Web Developer",
      time: "2025 - Present",
      details: [
        "Executing website optimization and CRO experiments for non profit clients.",
        "Enhancing user experience and conversion rates through A/B testing, UI refinements, and performance improvements",
        "Developing and maintaining WordPress websites for charity organizations, including creating seasonal landing pages, fixing UI/UX issues, and optimizing site performance.",
      ],
      techs: ["HTML", "CSS", "JavaScript", "VWO"],
    },
    {
      id: "2",
      company: "Conversion North America, Canada 🇨🇦",
      title: "CRO Web Developer",
      time: "2022 - 2025",
      details: [
        "Developed and maintained A/B tests for clients like Microsoft, Universal Studios, and J.P. Morgan.",
        "Implemented and configured analytics tools (Google Analytics, Adobe Analytics) according to client and strategist preferences to collect.",
        "Led experiments on client websites to ensure a seamless user experience, tackling challenges like detecting and manipulating partial SPA updates, cross domain targeting, and more.",
        "Adhered strictly to Figma designs, collaborating closely with project managers to align with and enhance the strategic goals of the user experience.",
      ],
      techs: [
        "HTML",
        "CSS",
        "JavaScript",
        "Adobe Target",
        "Optimizely",
        "Kameleoon",
        "Dynamic Yield",
        "Monetate",
        "Convert",
        "Google Optimize",
        "Github",
        "JIRA",
      ],
    },
    {
      id: "3",
      company: "Jetpack Labs, Canada 🇨🇦",
      title: "Front End Developer",
      time: "Aug - Sep2024",
      details: [
        "Contracted at Jetpack Labs to develop web applications delivering robust and user friendly solutions.",
        "Collaborated closely with designers to ensure alignment with Figma designs, proactively communicating to resolve ambiguities and ensure design accuracy.",
      ],
      techs: ["HTML", "CSS/TailwindCSS", "JavaScript", "Astro", "Github"],
    },
    {
      id: "4",
      company: "AIRDO Co., Ltd.(Airline), Japan 🇯🇵",
      title: "Airplane Mechanical Engineer",
      time: "2017 - 2021",
      details: [
        "Maintained and updated airplane manuals and analyzed reliability for B737 and B767 models, managing unscheduled failures and defects to ensure operational efficiency.",
        "Demonstrated strong planning, troubleshooting, and problem solving skills by effectively managing routine and urgent tasks and maintaining performance under pressure.",
      ],
      techs: [],
    },
  ],
};
