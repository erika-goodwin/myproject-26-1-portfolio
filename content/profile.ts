import { Github, Linkedin, MailIcon, Instagram } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
};

type SocialItem = {
  label: string;
  href: string;
  icon: string;
};

export const profile: {
  name: string;
  title: string;
  intro: string;
  location: string;
  availability: string;
  navigation: NavItem[];
  socials: SocialItem[];
} = {
  name: "Erika Hashizume",
  title: "Frontend/Fullstack Engineer · CRO developer",
  intro:
    "🌵 Frontend/Fullstack engineer with a background in aerospace engineering and data driven product experimentation.",

  location: "📍 Brittany, France 🇫🇷",
  availability: "💼 Actively seeking employment",

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "CRO", href: "#cro" },
  ],

  socials: [
    {
      label: "GitHub",
      href: "https://github.com/erika-goodwin",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/erika-hashizume/",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:erika.m.hashizume@email.com",
      icon: MailIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/erikagoodwin08/",
      icon: Instagram,
    },
  ],
};
