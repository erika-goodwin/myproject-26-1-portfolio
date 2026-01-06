import { introduction } from "@/content/introduction";
import { clsx } from "clsx";

export default function About() {
  return (
    <div id="about" className="mt-24 scroll-mt-24">
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
