import { introduction } from "@/content/introduction";
import { clsx } from "clsx";

export default function About() {
  return (
    <div id="about" className="mt-24 scroll-mt-24">
      {/* Sticky header (mobile only) */}
      <div className="sticky top-0 z-20 bg-off-white md:hidden ">
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
    </div>
  );
}
