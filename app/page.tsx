import About from "@/components/about";
import Cro from "@/components/cro";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 bg-offwhite">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
        {/* Left */}
        <Sidebar />

        {/* Right */}
        <div className="space-y-32 ml-32">
          <About />
          <Experience />
          <Projects />
          <Cro />

          {/* Scroll buffer */}
          <div className="h-[50vh] flex items-end justify-end pb-8 text-sm bg-primary text-gray-400">
            <p>© {new Date().getFullYear()} Erika Hashizume</p>
          </div>
        </div>
      </div>
    </main>
  );
}
