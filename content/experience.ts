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
  | "WordPress"
  | "Astro"
  | "CRM"
  | "GA4/GTM"
  | "ATA21 (Air Conditioning)"
  | "ATA27 (Flight Controls)"
  | "ATA29 (Hydraulic Power)"
  | "ATA30 (Ice and Rain Protection)"
  | "ATA36 (Pneumatic)";

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
      company: "Kameleoon, France 🇫🇷",
      title: "Technical Account Manager / Front End Developer",
      time: "2026 - Present",
      details: [
        "Act as a technical lead to bridge the gap between client needs and platform capabilities, ensuring precise technical framing and time estimation for high-impact optimization projects.",
        "Consult with technical stakeholders to present complex architectures and train users on leveraging APIs and SDKs to ensure platform autonomy and success.",
        "Proactively diagnose and debug JavaScript code to resolve intricate client-side issues, ensuring the seamless integration of experimentation solutions across diverse web environments.",
        "Build and customize performant digital experiences using JavaScript, HTML, and CSS to support and validate client experimentation and growth goals.",
      ],
      techs: ["CRM", "Kameleoon", "GA4/GTM", "HTML", "CSS", "JavaScript"],
    },
    {
      id: "2",
      company: "Generosity X, Canada 🇨🇦",
      title: "Web Developer / Freelancer",
      time: "2025 - Present",
      details: [
        "Executing website optimization and CRO experiments for non profit clients.",
        "Enhancing user experience and conversion rates through A/B testing, UI refinements, and performance improvements",
        "Developing and maintaining WordPress websites for charity organizations, including creating seasonal landing pages, fixing UI/UX issues, and optimizing site performance.",
      ],
      techs: ["HTML", "CSS", "JavaScript", "VWO", "WordPress"],
    },
    {
      id: "3",
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
      id: "4",
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
      id: "5",
      company: "AIRDO Co., Ltd.(Airline), Japan 🇯🇵",
      title: "Airplane Mechanical Engineer",
      time: "2017 - 2021",
      details: [
        "Maintained and updated airplane manuals and analyzed reliability for B737 and B767 models, managing unscheduled failures and defects to ensure operational efficiency.",
        "Demonstrated strong planning, troubleshooting, and problem solving skills by effectively managing routine and urgent tasks and maintaining performance under pressure.",
      ],
      techs: [
        "ATA21 (Air Conditioning)",
        "ATA27 (Flight Controls)",
        "ATA29 (Hydraulic Power)",
        "ATA30 (Ice and Rain Protection)",
        "ATA36 (Pneumatic)",
      ],
    },
  ],
};
