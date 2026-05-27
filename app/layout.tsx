import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { KameleoonHead } from "@/integrations/Kameleoon/KameleoonHead";
import { KameleoonHydrationReady } from "@/integrations/Kameleoon/KameleoonHydrationReady";
import GtagScript from "@/integrations/gtm/gtmScript";
import KameleoonProvider from "@/integrations/Kameleoon/kameleoonProvider";
// import DarkModeFlag from "@/components/Kameleoon/darkModeFlag";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Erika Hashizume - Frontend/Fullstack Engineer",
  description:
    "with a background in aerospace engineering and data driven product experimentation. ",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Erika Hashizume - Portfolio",
    description:
      "Frontend/Fullstack Engineer with a background in aerospace engineering and data driven product experimentation. ",
    url: "https://erikahashizu.me",
    siteName: "Erika Hashizume",
    images: [
      {
        url: "./og-image.png",
        width: 1200,
        height: 630,
        alt: "Erika Hashizume Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <KameleoonHead />
      </head>
      <body className={`${rubik.variable} antialiased`}>
        <KameleoonProvider>
          <KameleoonHydrationReady />
          <GtagScript />
          {/* <DarkModeFlag /> */}
          {children}
        </KameleoonProvider>
      </body>
    </html>
  );
}
