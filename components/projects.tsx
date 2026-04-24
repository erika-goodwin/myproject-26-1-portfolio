import { projects } from "@/content/project";
import ProjectTile from "./projectTile";
import ButtonLink from "./botton";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="space-y-6 scroll-mt-24 mx-auto max-w-[42rem] lg:max-w-none"
      >
        {/* Sticky header (mobile only) */}
        <div className="sticky top-0 z-20 bg-off-white lg:hidden ">
          <div className="flex items-center gap-3 px-4 py-3 border-b">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Projects
            </h2>
          </div>
        </div>

        <h2 className="hidden lg:inline-block text-2xl font-bold">Projects</h2>

        <div className="group/project space-y-4">
          {projects.projectItems.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
        <div className="flex flex-row items-center">
          <p className="mr-4 font-bold">View More </p>
          <ButtonLink
            href={projects.link}
            className="mr-2"
            idName="Open Github"
          >
            Github
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
