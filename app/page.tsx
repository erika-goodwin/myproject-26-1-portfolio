import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Sidebar from "@/components/sidebar";
// import saboten from "./saboten.png";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 bg-offwhite">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
        {/* Left */}
        <Sidebar />

        {/* Right */}
        <div className="space-y-32 ml-32 overflow-hidden">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </main>
  );
}
