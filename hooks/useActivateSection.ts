"use client";

import { useEffect, useState } from "react";

export function useActiveSection(
  sectionIds: string[],
  halfway: boolean = true
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const midpoint = halfway
        ? window.innerHeight / 2
        : (window.innerHeight * 1) / 40;

      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;

        if (top <= midpoint) {
          current = id;
        }
      }

      if (current !== activeId) {
        setActiveId(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, activeId]);

  return activeId;

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         console.log(
  //           ">>>>>> here observe ",
  //           sectionIds,
  //           entry.isIntersecting,
  //           entry.intersectionRatio
  //         );
  //         if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
  //           setActiveId(entry.target.id);
  //         }
  //       });
  //     },
  //     {
  //       threshold: [0.75],
  //     }
  //   );

  //   sectionIds.forEach((id) => {
  //     const el = document.getElementById(id);

  //     if (el) observer.observe(el);
  //     if (el) console.log(">>>>>>> ID checker:", id);
  //   });

  //   return () => observer.disconnect();
  // }, [sectionIds]);
}
