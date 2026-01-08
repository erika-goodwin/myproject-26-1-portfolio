"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  Github,
  Code,
  // Server,
  Database,
} from "lucide-react";
import { ProjectItem, TechIconKey } from "@/content/project";
import { useActiveItem } from "@/hooks/useActiveItem";
import clsx from "clsx";

const techIconMap: Record<TechIconKey, React.ElementType> = {
  React: Code,
  TypeScript: Code,
  "Next.js": Code,
  "Tailwind CSS": Code,
  CSS: Code,
  LocalStorage: Database,
  Supabase: Database,
  PostgreSQL: Database,
};

type Props = {
  project: ProjectItem;
};

export default function ProjectTile({ project }: Props) {
  const [open, setOpen] = useState(false);
  const { ref, active } = useActiveItem<HTMLDivElement>(0.75);

  return (
    <div
      ref={ref}
      className={clsx(
        "group/projectTile rounded-lg  shadow-md  transition-shadow duration-300",
        // Desktop hover
        " hover:shadow-xl hover:bg-white hover:border-off-pink group-hover/project:opacity-75  hover:opacity-100",
        // mobile activation
        active
          ? "bg-white shadow-xl border-off-pink group-hover/project:opacity-75 opacity-100"
          : ""
      )}
    >
      {/* <div className="rounded-xl border bg-white shadow-sm hover:shadow-lg transition-shadow"> */}
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-6 p-6 text-left"
      >
        <div className="relative w-32 h-20 rounded-md overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="flex-1 text-lg font-bold">{project.title}</h3>

        {/* Links */}
        <div className="flex gap-4 mt-4">
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              className="text-gray-600 hover:text-off-pink"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              className="text-gray-600 hover:text-off-pink"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>

        {open ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {/* Content */}
      {open && (
        <div className="px-6 pb-6 pl-[9.5rem]">
          <ul className="space-y-2 text-sm text-gray-700">
            {project.description.map((line, i) => (
              <li key={i}>• {line}</li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap space-x-2 mt-6">
            {project.techs.map((tech, index) => {
              const Icon = techIconMap[tech] ?? Code;
              return (
                <span
                  key={index}
                  className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md  mb-1 text-xs group-hover/projectTile:bg-off-pink"
                >
                  <Icon className="w-4 h-4 text-gray-700 mr-1" />
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
