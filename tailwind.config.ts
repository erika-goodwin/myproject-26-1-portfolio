import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
      colors: {
        // accentred: "#F83735",
        // offblue: "#C0E9DC",
        // offwhite: "#FFFEF3",
        // offpink: "#FECBCA",
        // mainblack: "#383533",
        "accent-red": "#F83735",
        "off-blue": "#C0E9DC",
        "off-white": "#FFFEF3",
        "off-pink": "#FECBCA",
        "main-black": "#383533",
      },
    },
  },
  plugins: [],
} satisfies Config;
