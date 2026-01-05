import { FC, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = {
  href: string; // link URL
  children: ReactNode; // button text
  className?: string; // optional extra Tailwind classes
};

const ButtonLink: FC<ButtonLinkProps> = ({ href, children, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-6 py-3 bg-accent-red  font-semibold rounded-lg shadow-md hover:bg-off-blue-600 hover:scale-105 transition-transform duration-200 ${className}`}
    >
      {children}
      <ArrowUpRight className="w-4 h-4 ml-2" />
    </a>
  );
};

export default ButtonLink;
