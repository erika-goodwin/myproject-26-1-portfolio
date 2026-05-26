"use client";

import { ExperienceItem, TechIconKey } from "@/content/experience";
import { useActiveItem } from "@/hooks/useActiveItem";

import {
  Code,
  Drill,
  EthernetPort,
  Github,
  Database,
  Handshake,
  Plane,
} from "lucide-react";
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
  WordPress: Drill,
  CRM: Handshake,
  "GA4/GTM": Drill,
  "ATA21 (Air Conditioning)": Plane,
  "ATA27 (Flight Controls)": Plane,
  "ATA29 (Hydraulic Power)": Plane,
  "ATA30 (Ice and Rain Protection)": Plane,
  "ATA36 (Pneumatic)": Plane,
};

type Props = {
  item: ExperienceItem;
};

export default function ExperienceTile({ item }: Props) {
  const { ref, active } = useActiveItem<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={clsx(
        "group/experienceTile w-full flex shadow-md transition-shadow duration-300 px-3 py-6 lg:p-6 rounded-lg border border-card-border",
        // Desktop hover
        " hover:shadow-xl hover:bg-background hover:border-off-pink group-hover/experience:opacity-75 hover:opacity-100",
        // mobile activation
        active
          ? "bg-background shadow-xl border-off-pink group-hover/experience:opacity-75 opacity-100"
          : "",
      )}
    >
      {/* Left time */}
      <div className="w-18 lg:w-24 flex-shrink-0 text-muted font-mono text-xs mt-2">
        {item.time}
      </div>

      {/* Right content */}
      <div className="ml-4 lg:ml-6 flex-1 w-4/5">
        <h3 className="font-bold text-lg text-accentred">{item.title}</h3>
        <p className="text-sm text-body mb-2">{item.company}</p>

        {/* Details */}
        <ul className="list-disc list-inside space-y-1 text-body text-sm">
          {item.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        {/* Tech Icons */}
        <div className="flex flex-wrap space-x-2 mt-3">
          {item.techs.map((tech) => {
            const Icon = techIconMap[tech] ?? Code;
            return (
              <div
                key={tech}
                className={clsx(
                  "flex items-center space-x-1 bg-tag-bg px-2 py-1 rounded-md  mb-1 text-xs",
                  // Desktop hover
                  " group-hover/experienceTile:bg-off-pink",
                  // mobile activation
                  active ? "bg-off-pink" : "",
                )}
              >
                <Icon className="w-4 h-4 mr-0.5 text-body" />

                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
