"use client";

import { ExperienceItem, TechIconKey } from "@/content/experience";
import { useActiveItem } from "@/hooks/useActiveItem";

import { Code, Drill, EthernetPort, Github, Database } from "lucide-react";
import clsx from "clsx";

const techIconMap: Record<TechIconKey, React.ElementType> = {
  HTML: Code,
  CSS: Code,
  JavaScript: Code,
  VWO: Drill,
  "Adobe Target": Drill,
  Optimizely: Drill,
  "Dynamic Yield": Drill,
  Monetate: Drill,
  Kameleoon: Drill,
  Convert: Drill,
  "Google Optimize": Drill,
  Github: Github,
  JIRA: EthernetPort,
  "CSS/TailwindCSS": Code,
  Astro: Database,
};

type Props = {
  item: ExperienceItem;
};

export default function ExperienceTile({ item }: Props) {
  const { ref, active } = useActiveItem<HTMLDivElement>();
  // const { ref, inView } = useInView<HTMLDivElement>(0.75);

  return (
    <div
      ref={ref}
      className={clsx(
        "group/experienceTile w-full flex shadow-md transition-shadow duration-300 p-6 rounded-lg ",
        // Desktop hover
        " hover:shadow-xl hover:bg-white hover:border-off-pink group-hover/experience:opacity-75 hover:opacity-100",
        // mobile activation
        active
          ? "bg-white shadow-xl border-off-pink group-hover/experience:opacity-75 opacity-100"
          : ""
      )}
    >
      {/* Left time */}
      <div className="w-24 flex-shrink-0 text-gray-500 font-mono text-xs mt-2">
        {item.time}
      </div>

      {/* Right content */}
      <div className="ml-6 flex-1 w-4/5">
        <h3 className="font-bold text-lg text-accentred">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.company}</p>

        {/* Details */}
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        {/* Tech Icons */}
        <div className="flex flex-wrap space-x-2 mt-3">
          {item.techs.map((tech) => {
            const Icon = techIconMap[tech] ?? Code;
            // const Icon = tech.icon;
            return (
              <div
                key={tech}
                // key={tech.name}
                className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded-md  mb-1 group-hover/experienceTile:bg-off-pink"
              >
                <Icon className="w-4 h-4 text-gray-700" />
                {/* <span className="text-xs">{tech.name}</span> */}
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
