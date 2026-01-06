export type TechIconKey = "nextjs" | "react" | "node";

export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  description: string[];
  image: string;
  techs: string[];
  links: {
    website?: string;
    github?: string;
  };
};

export const croProjects: ProjectItem[] = [
  {
    id: "cro-project-1",
    title: "title ........................",
    summary: "........................",
    image: "/images/projects/workout-app.png",
    description: [
      "........................",
      "........................",
      "........................",
      "........................",
    ],
    techs: ["...", "...", "...", "..."],
    links: {
      github: "...",
      website: "...",
    },
  },
];
