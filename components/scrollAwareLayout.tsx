"use client";

import Sidebar from "@/components/sidebar";

import { sectionTitles } from "@/content/navigation";
import MobileSectionHeader from "./mobileSectionHeader";
import { useActiveSection } from "@/hooks/useActivateSection";

type Props = {
  children: React.ReactNode;
};

const sectionIds = ["about", "experience", "projects", "cro"];

export default function ScrollAwareLayout({ children }: Props) {
  const activeSection = useActiveSection(sectionIds, false);

  return (
    <>
      {/* Mobile header (FULL WIDTH, FIXED) */}
      {activeSection && (
        <MobileSectionHeader title={sectionTitles[activeSection]} />
      )}

      {/* Main layout */}
      <main className="mx-auto max-w-6xl px-6 pt-12 md:pt-0">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
          <Sidebar />

          <div className="space-y-32 lg:ml-32">{children}</div>
        </div>
      </main>
    </>
  );
}
