"use client";

import { Leaf } from "lucide-react";
import { useActiveSection } from "@/hooks/useActivateSection";
import { clsx } from "clsx";
import { AtSign } from "lucide-react";

import { profile } from "@/content/profile";
import Image from "next/image";
import { useAvailability } from "@/integrations/Kameleoon/context/AvailabilityContext";

const sectionIds = ["about", "experience", "projects", "cro"];

export default function Sidebar() {
  const activeId = useActiveSection(sectionIds);
  const { data: availabilityData } = useAvailability();

  console.log(">>> Sidebar availabilityData:", availabilityData);
  console.log(
    ">>> Sidebar availabilityData?.display !== hidden:",
    availabilityData?.display,
    availabilityData?.textWeight,
    availabilityData?.textWeight !== "hide",
  );

  return (
    <aside className="mt-30 lg:mt-0 lg:sticky lg:top-24 h-fit">
      <div className="relative lg:static space-y-8 mr-1 lg:mr-0">
        {/* Name & intro */}
        <div>
          <h1 className="text-4xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-md font-bold">{profile.title}</p>
          <p className="mt-2 text-sm">{profile.intro}</p>
          <p className="mt-2 text-sm ">{profile.location}</p>
          {/* [FF: availability_banner] — replace with static text when flag is retired */}
          {availabilityData === null ? (
            // FF off — static fallback
            <p className="mt-2 text-sm">{profile.availability}</p>
          ) : availabilityData.display === "hidden" || availabilityData.textWeight === "hide" ? (
            // FF on, hidden variation
            <p className="mt-2 text-sm hidden">{availabilityData.text}</p>
          ) : (
            // FF on, visible variation
            <p className={clsx(
              "mt-2 text-sm",
              availabilityData.textWeight === "bold" && "font-bold",
              availabilityData.textWeight === "underline" && "underline",
            )}>
              {availabilityData.text}
            </p>
          )}
        </div>

        {/* Table of contents */}
        <nav className="hidden lg:block space-y-3 text-sm">
          {sectionIds.map((id) => {
            const item = profile.navigation.find((n) => n.href === `#${id}`);
            const isActive = activeId === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={clsx(
                  "flex items-center gap-2 transition-all duration-300 hover:scale-105 transition-transform duration-200",
                  isActive
                    ? "text-off-blue font-semibold translate-x-1"
                    : "text-gray-500 hover:text-gray-800",
                )}
              >
                <Leaf
                  className={clsx(
                    "h-4 w-4 transition-all duration-300",
                    isActive
                      ? "opacity-100 scale-100 text-off-blue"
                      : "opacity-0 scale-75",
                  )}
                />
                {item?.label}
              </a>
            );
          })}
        </nav>

        {/* Social links */}
        <div className="flex space-x-1 text-sm ">
          {profile.socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                id={`${item.label} Link`}
                key={item.href}
                href={item.href}
                className={clsx(
                  "flex items-center space-x-1 p-2 rounded-full hover:text-off-pink hover:bg-background hover:shadow-md hover:scale-105 transition-transform duration-200 btn",
                  item.label === "Instagram" && "order-last",
                )}
                target="_blank"
                rel="noopener noreferrer"
                {...(item.label === "Email"
                  ? { "aria-label": "Email" }
                  : { "aria-details": item.label })}
              >
                <Icon className="w-5 h-5  hover:text-off-pink" />
              </a>
            );
          })}
          <button
            id="Copy email address"
            className="flex items-center space-x-1 p-2 rounded-full hover:text-off-pink hover:bg-background hover:shadow-md hover:scale-105 transition-transform duration-200 btn"
            onClick={() => {
              navigator.clipboard.writeText("erika.m.hashizume@gmail.com");
              alert("Email copied!");
            }}
            aria-label="Copy email address"
          >
            <AtSign className="w-5 h-5  hover:text-off-pink" />
          </button>
        </div>
        <Image
          src="/images/saboten.png"
          alt="Saboten"
          width={300}
          height={300}
          className="absolute lg:fixed bottom-0 right-0 lg:right-auto lg:left-auto mb-3 opacity-80 w-36 lg:w-72 h-auto"
        />
      </div>
    </aside>
  );
}
