import About from "@/components/about";
import Cro from "@/components/cro";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import ScrollAwareLayout from "@/components/scrollAwareLayout";

export default function Home() {
  return (
    <>
      <ScrollAwareLayout>
        <About />
        <Experience />
        <Projects />
        <Cro />
      </ScrollAwareLayout>
    </>
  );
}
