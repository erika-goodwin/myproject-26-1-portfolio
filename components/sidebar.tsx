"use client";

import { Leaf } from "lucide-react";
import { useActiveSection } from "@/hooks/useActivateSection";
import { clsx } from "clsx";

import { profile } from "@/content/profile";
import Image from "next/image";

const sectionIds = ["about", "experience", "projects", "contact"];

export default function Sidebar() {
  const activeId = useActiveSection(sectionIds);

  return (
    <aside className="md:sticky md:top-24 h-fit">
      <div className="space-y-8">
        {/* Name & intro */}
        <div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="mt-2 text-sm font-bold">{profile.title}</p>
          <p className="mt-2 text-sm text-accent-red ">{profile.intro}</p>
          <p className="mt-2 text-sm ">{profile.location}</p>
          <p className="mt-2 text-sm ">{profile.availability}</p>
        </div>

        {/* Table of contents */}
        <nav className="space-y-3 text-sm">
          {sectionIds.map((id) => {
            const item = profile.navigation.find((n) => n.href === `#${id}`);
            const isActive = activeId === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={clsx(
                  "flex items-center gap-2 transition-all duration-300",
                  isActive
                    ? "text-emerald-500 font-semibold translate-x-1"
                    : "text-gray-500 hover:text-gray-800"
                )}
              >
                <Leaf
                  className={clsx(
                    "h-4 w-4 transition-all duration-300",
                    isActive
                      ? "opacity-100 scale-100 text-emerald-400"
                      : "opacity-0 scale-75"
                  )}
                />
                {item?.label}
              </a>
            );
          })}
          {/* {profile.navigation.map((item) => {
            return (
              <a
                href={item.href}
                key={item.href}
                className="block text-accent-red hover:text-main-black"
              >
                {item.label}
              </a>
            );
          })} */}
        </nav>

        {/* Social links */}
        <div className="flex space-x-4 text-sm">
          {profile.socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-accent-red hover:text-main-black"
                target="_blank"
                rel="noopener noreferrer"
                aria-details={item.label}
              >
                <Icon className="w-5 h-5 text-accent-red hover:text-main-black" />
              </a>
            );
          })}
        </div>
        <Image
          src="/images/saboten.png"
          alt="Saboten"
          width={300}
          height={300}
          // fill
          // style={{ objectFit: "contain" }}
          className="fixed bottom-0 left-auto mb-3 opacity-80"
        />
      </div>
    </aside>
  );
}
