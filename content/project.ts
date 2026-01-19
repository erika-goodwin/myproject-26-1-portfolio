// export type TechIconKey = "nextjs" | "react" | "node";

export type TechIconKey =
  | "React"
  | "TypeScript"
  | "Next.js"
  | "Tailwind CSS"
  | "CSS"
  | "LocalStorage"
  | "Supabase"
  | "Supabase Auth"
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
};

export const projects: { link: string; projectItems: ProjectItem[] } = {
  link: "https://github.com/erika-goodwin/",
  projectItems: [
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
    },
  ],
};
