import { introduction } from "@/content/introduction";
import { clsx } from "clsx";

export default function About() {
  return (
    // <section
    //   id="about"
    //   className="mx-auto w-full mt-24 max-w-[42rem] scroll-mt-24 sm:max-w-[46rem]
    // lg:max-w-none
    // px-4"
    // >
      <section id="about" className="mt-24 scroll-mt-24 mx-auto max-w-[42rem] lg:max-w-none">
      {/* Sticky header (mobile only) */}
      <div className="sticky top-0 z-20 bg-background mb-4 lg:hidden ">
        <div className="flex items-center gap-3 px-4 py-3 border-b">
          <h2 className="text-sm font-semibold uppercase tracking-wide">
            About
          </h2>
        </div>
      </div>

      {introduction.intro.map((item, index) => {
        return (
          <p key={index} className={clsx("mb-3", index === 0 && "font-bold")}>
            {item}
          </p>
        );
      })}
    </section>
  );
}
