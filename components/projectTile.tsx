"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  Github,
  Code,
  KeyRound,
  // Server,
  Database,
  MessageCircleHeart,
} from "lucide-react";
import { ProjectItem, TechIconKey } from "@/content/project";
import { useActiveItem } from "@/hooks/useActiveItem";
import clsx from "clsx";
import ImageSlider from "./ImageSlider";

const techIconMap: Record<TechIconKey, React.ElementType> = {
  React: Code,
  TypeScript: Code,
  "Next.js": Code,
  "Tailwind CSS": Code,
  CSS: Code,
  LocalStorage: Database,
  Supabase: Database,
  "Supabase Auth": KeyRound,
  Vite: Code,
  PostgreSQL: Database,
  "Node.js": Code,
  Express: Code,
  "REST APIs": Code,
};

type Props = {
  project: ProjectItem;
};

export default function ProjectTile({ project }: Props) {
  const [open, setOpen] = useState(false);
  const { ref, active } = useActiveItem<HTMLDivElement>();

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
          : "",
      )}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-6 py-6 px-4 lg:p-6 text-left"
      >
        <div className="relative w-18 flex justify-center items-center lg:w-32 h-20 rounded-md overflow-hidden bg-gray-100">
          {project.thumbnail === "" ? (
            <MessageCircleHeart className="w-7 h-7 text-center" />
          ) : (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
            />
          )}
        </div>

        <h3 className="flex-1 text-lg font-bold">{project.title}</h3>

        {/* Links FOR desktop */}
        <div className="hidden lg:flex justify-end gap-4 mt-4">
          {project.isOnGoing && (
            <span className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md  mb-1 text-xs bg-off-blue">
              Current PJ
            </span>
          )}
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              className="text-gray-600 hover:text-off-blue flex items-center space-x-1 p-2 rounded-full  hover:bg-white hover:shadow-md hover:scale-105 transition-transform duration-200"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              className="text-gray-600 hover:text-off-blue flex items-center space-x-1 p-2 rounded-full  hover:bg-white hover:shadow-md hover:scale-105 transition-transform duration-200"
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
        <div className="px-4 lg:px-6 pb-6 pl-4 lg:pl-6 lg:pl-[9.5rem]">
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
                  className={clsx(
                    "flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md  mb-1 text-xs ",
                    // Desktop hover
                    "group-hover/projectTile:bg-off-pink",
                    // mobile activation
                    active ? "bg-off-pink" : "",
                  )}
                >
                  <Icon className="w-4 h-4 text-gray-700 mr-1" />
                  {tech}
                </span>
              );
            })}
          </div>

          {/* Links FOR mobile */}
          <div className="flex lg:hidden justify-end gap-4 mt-4">
            {project.isOnGoing && (
              <span className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md  mb-1 text-xs bg-off-blue">
                Currently Working on
              </span>
            )}
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                className="text-gray-600 hover:text-off-blue flex items-center space-x-1 p-2 rounded-full  hover:bg-white hover:shadow-md hover:scale-105 transition-transform duration-200"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                className="text-gray-600 hover:text-off-blue flex items-center space-x-1 p-2 rounded-full  hover:bg-white hover:shadow-md hover:scale-105 transition-transform duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
          {/* Project images */}
          {project.images.length !== 0 && project.images[0] !== "" && (
            <div className="mt-4">
              <ImageSlider images={project.images} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
