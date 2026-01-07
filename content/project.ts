// export type TechIconKey = "nextjs" | "react" | "node";

export type TechIconKey =
  | "React"
  | "TypeScript"
  | "Next.js"
  | "Tailwind CSS"
  | "CSS"
  | "LocalStorage"
  | "Supabase"
  | "PostgreSQL";

export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  description: string[];
  image: string;
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
      image: "/images/projects/workout-app.png",
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

    // {
    //   id: "daily-wod-tracker",
    //   title: "Daily WOD Tracker",
    //   summary:
    //     "A fullstack Next.js app for logging daily workouts with authentication and history.",
    //   image: "/images/projects/workout-app.png",
    //   description: [
    //     "Modern fitness tracking app built with Next.js App Router and Supabase.",
    //     "Includes authentication (email & GitHub), daily WOD fetching via API route, and workout history.",
    //     "Users can log completion status and personal notes for each workout.",
    //     "Designed with a minimal, professional fitness tech aesthetic.",
    //   ],
    //   techs: [
    //     "Next.js",
    //     "TypeScript",
    //     "Tailwind CSS",
    //     "Supabase",
    //     "PostgreSQL",
    //   ],
    //   links: {
    //     github: "https://github.com/erika-goodwin/myproject-25-4-wod-app",
    //     website: "https://daily-wod.vercel.app",
    //   },
    // },
  ],
};
