import { experiences } from "@/content/experience";
import ExperienceTile from "./experienceTile";
import ButtonLink from "./botton";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6 mt-24 scroll-mt-24">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-4">
        {experiences.experienceItems.map((item) => (
          <ExperienceTile key={item.id} item={item} />
        ))}

        <div className="flex flex-row items-center">
          <p className="mr-4 font-bold">View Full Resume </p>
          <ButtonLink href={experiences.resume.en} className='mr-2'>EN</ButtonLink>
          <ButtonLink href={experiences.resume.fr}>FR</ButtonLink>
        </div>
      </div>
    </section>
  );
}
