import { experiences } from "@/content/experience";
import ExperienceTile from "./experienceTile";
import ButtonLink from "./botton";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6 mt-24 scroll-mt-24">
      {/* Sticky header (mobile only) */}
      <div className="sticky top-0 z-20 bg-off-white md:hidden ">
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <h2 className="text-sm font-semibold uppercase tracking-wide">
            Experience
          </h2>
        </div>
      </div>

      <h2 className="hidden md:inline-block text-2xl font-bold mb-4">
        Experience
      </h2>
      <div className="group/experience space-y-4">
        {experiences.experienceItems.map((item) => (
          <ExperienceTile key={item.id} item={item} />
        ))}

        <div className="flex flex-row items-center">
          <p className="mr-4 font-bold">View Full Resume </p>
          <ButtonLink href={experiences.resume.en} className="mr-2">
            EN
          </ButtonLink>
          <ButtonLink href={experiences.resume.fr}>FR</ButtonLink>
        </div>
      </div>
    </section>
  );
}
