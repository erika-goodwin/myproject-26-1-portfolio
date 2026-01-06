import About from "@/components/about";
import Cro from "@/components/cro";
import Experience from "@/components/experience";
// import MobileSectionHeader from "@/components/mobileSectionHeader";
import Projects from "@/components/projects";
import ScrollAwareLayout from "@/components/scrollAwareLayout";
// import Sidebar from "@/components/sidebar";
// import { sectionTitles } from "@/content/navigation";
// import { useActiveSection } from "@/hooks/useActivateSection";

export default function Home() {
  // const activeSection = useActiveSection([
  //   "about",
  //   "experience",
  //   "projects",
  //   "cro",
  // ]);

  return (
    <ScrollAwareLayout>
      <About />
      <Experience />
      <Projects />
      <Cro />
    </ScrollAwareLayout>

    // <main className="mx-auto max-w-6xl px-6 bg-offwhite">
    //   {/* Mobile nav layer */}
    //   {activeSection && (
    //     <MobileSectionHeader title={sectionTitles[activeSection]} />
    //   )}

    //   <div className="grid grid-cols-1 md:gap-6 lg:gap-12 md:grid-cols-[250px_1fr] lg:grid-cols-[280px_1fr]">
    //     {/* Left */}
    //     <Sidebar />

    //     {/* Right */}
    //     <div className="space-y-32 lg:ml-32">
    //       <About />
    //       <Experience />
    //       <Projects />
    //       <Cro />

    //       {/* Scroll buffer */}
    //       <div className="h-[50vh] flex items-end justify-end pb-8 text-sm bg-primary text-gray-400">
    //         <p>© {new Date().getFullYear()} Erika Hashizume</p>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
