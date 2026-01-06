import ProjectTile from "./projectTile";
import { croProjects } from "@/content/cro";
// import ButtonLink from "./botton";

export default function Cro() {
  return (
    <section id="cro" className="space-y-6 mt-24 scroll-mt-24 mb-10">
      {/* Sticky header (mobile only) */}
      <div className="sticky top-0 z-20 bg-off-white md:hidden ">
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <h2 className="text-sm font-semibold uppercase tracking-wide">CRO</h2>
        </div>
      </div>

      <h2 className="hidden md:inline-block text-2xl font-bold mb-4">CRO</h2>
      <div className="space-y-4">
        {/* {croProjects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))} */}
        Preparing ... 
      </div>
      {/* <div className="flex flex-row items-center">
        <p className="mr-4 font-bold">View More </p>
        <ButtonLink href={project.link} className="mr-2">
          Github
        </ButtonLink>
      </div> */}
    </section>
  );
}
