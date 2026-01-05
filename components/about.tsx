import { introduction } from "@/content/introduction";

export default function About() {
  return (
    <div className="mt-24">
      {introduction.intro.map((item, index) => {
        return <p key={index} className="mb-3">{item}</p>;
      })}
    </div>
  );
}
