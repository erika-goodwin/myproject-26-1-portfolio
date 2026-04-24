import { FC, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = {
  href: string; // link URL
  children: ReactNode; // button text
  className?: string; // optional extra Tailwind classes
  idName?: string; // optional id for the anchor tag
};

const ButtonLink: FC<ButtonLinkProps> = ({
  href,
  children,
  className,
  idName,
}) => {
  return (
    <a
      id={idName}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center px-6 py-3 hover:bg-white font-semibold rounded-4xl shadow-md hover:text-off-blue hover:scale-105 transition-transform duration-200 ${className} btn`}
    >
      {children}
      <ArrowUpRight className="w-4 h-4 ml-2" />
    </a>
  );
};

export default ButtonLink;
