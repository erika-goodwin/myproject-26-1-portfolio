import ProjectTile from "./projectTile";
import { croProjects } from "@/content/cro";
// import ButtonLink from "./botton";

export default function Cro() {
  return (
    <section id="cro" className="space-y-6 mt-24 scroll-mt-24 mb-10">
      <h2 className="text-2xl font-bold mb-4">CRO</h2>
      <div className="space-y-4">
        {croProjects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
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
