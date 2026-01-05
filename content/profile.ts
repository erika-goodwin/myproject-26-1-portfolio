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
  title: "Frontend/Fullstack Engineer",
  intro:
    "🌵 Engineer with aviation-grade reliability, CRO experimentation mindset, and modern Next.js product development.",

  location: "📍 Brittany, France 🇫🇷",
  availability: "💼 Open to frontend & full-stack roles",

  navigation: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
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
