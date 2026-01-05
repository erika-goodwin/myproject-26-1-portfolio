import { experiences } from "@/content/experience";
import ExperienceTile from "./experienceTile";
import ButtonLink from "./botton";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6 mt-24">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.map((item) => (
          <ExperienceTile key={item.id} item={item} />
        ))}

        <ButtonLink href="">View Full Resume</ButtonLink>
      </div>
    </section>
  );
}
