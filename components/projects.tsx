import { projects } from "@/content/project";
import ProjectTile from "./projectTile";
import ButtonLink from "./botton";

export default function Projects() {
  return (
    <section id="projects" className="space-y-6 scroll-mt-24">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="space-y-4">
        {projects.projectItems.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
      <div className="flex flex-row items-center">
        <p className="mr-4 font-bold">View More </p>
        <ButtonLink href={projects.link} className="mr-2">
          Github
        </ButtonLink>
      </div>
    </section>
  );
}
