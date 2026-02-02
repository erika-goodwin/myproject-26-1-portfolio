// export type TechIconKey = "nextjs" | "react" | "node";

export type TechIconKey =
  | "React"
  | "TypeScript"
  | "Next.js"
  | "Vite"
  | "Tailwind CSS"
  | "CSS"
  | "LocalStorage"
  | "Supabase"
  | "Supabase Auth"
  | "Node.js"
  | "Express"
  | "REST APIs"
  | "PostgreSQL";

export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  description: string[];
  thumbnail: string;
  images: string[];
  techs: TechIconKey[];
  links: {
    website?: string;
    github?: string;
  };
  isOnGoing: boolean;
};

export const projects: { link: string; projectItems: ProjectItem[] } = {
  link: "https://github.com/erika-goodwin/",
  projectItems: [
    {
      id: "experiment-dashboard",
      title: "[On Going] Experiment Dashboard",
      summary:
        "A fullstack Next.js app for logging daily workouts with authentication and history.",
      thumbnail: "",
      images: [""],
      description: [
        "A lightweight experimentation and feature-flag dashboard that allows product teams to create experiments, track user behavior via a custom event pipeline, and analyze results to support data-driven product decisions.",
        "The site will be fully responsive, fast, and designed with a minimal, professional aesthetic.",
      ],
      techs: [
        "React",
        "Vite",
        "TypeScript",
        "Node.js",
        "Express",
        "REST APIs",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      links: {
        github:
          "https://github.com/erika-goodwin/myproject-26-2-experiment-dashboard",
        website: "",
      },
      isOnGoing: true,
    },
    {
      id: "daily-wod-tracker",
      title: "Daily WOD Tracker",
      summary:
        "A fullstack Next.js app for logging daily workouts with authentication and history.",
      thumbnail: "/images/projects/daily-wod-tracker/tracker-shot-1.png",
      images: [
        "/images/projects/daily-wod-tracker/tracker-shot-1.png",
        "/images/projects/daily-wod-tracker/tracker-shot-2.png",
      ],
      description: [
        "Full-stack fitness app that allows users to log in and track Workout of the Day (WOD) history.",
        "Users can view the daily WOD, mark it as completed, and add personal notes such as weights or times.",
        "Authentication and data persistence are handled with Supabase, replacing client-only storage.",
        "Additional features like editing and deleting logs are planned as future improvements.",
      ],
      techs: [
        "Next.js",
        "TypeScript",
        "Supabase Auth",
        "Supabase",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      links: {
        github: "https://github.com/erika-goodwin/myproject-25-4-wod-app",
        website: "https://myproject-25-4-wod-app.vercel.app/",
      },
      isOnGoing: false,
    },
    {
      id: "workout-record-app",
      title: "Simplified Workout Record App",
      summary:
        "A lightweight React + TypeScript app to log workouts with local persistence.",
      thumbnail: "/images/projects/workout-record-app/wod-1.png",
      images: [
        "/images/projects/workout-record-app/wod-shot-1.png",
        "/images/projects/workout-record-app/wod-shot-2.png",
      ],
      description: [
        "Single page workout tracking app focused on simplicity and usability.",
        "Users can add, view, and delete workouts including exercise, weight, reps, and date.",
        "Data is persisted using LocalStorage with a reusable custom hook.",
        "No backend, authentication, or charts, designed for fast iteration and clarity.",
      ],
      techs: ["React", "TypeScript", "LocalStorage", "Tailwind CSS"],
      links: {
        github:
          "https://github.com/erika-goodwin/myproject-25-3-workout-record",
        website: "https://workout-record-erika.vercel.app/",
      },
      isOnGoing: false,
    },
  ],
};
