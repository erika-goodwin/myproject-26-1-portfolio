import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { KameleoonHead } from "@/integrations/Kameleoon/KameleoonHead";
import { KameleoonHydrationReady } from "@/integrations/Kameleoon/KameleoonHydrationReady";
import GtmScript from "@/integrations/gtm/gtmScript";

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
        {/* <script
          id="kameleoon-anti-flicker"
          dangerouslySetInnerHTML={{
            __html: `
              var kameleoonLoadingTimeout = 750;
              window.kameleoonQueue = window.kameleoonQueue || [];
              window.kameleoonStartLoadTime = Date.now();
              if (!document.getElementById("kameleoonLoadingStyleSheet") && !window.kameleoonDisplayPageTimeOut) {
                var kameleoonS = document.getElementsByTagName("script")[0];
                var kameleoonCc = "html::after { content: ''; position: fixed; inset: 0; background: #fff; z-index: 2147483647; }";
                var kameleoonStn = document.createElement("style");
                kameleoonStn.type = "text/css";
                kameleoonStn.id = "kameleoonLoadingStyleSheet";
                if (kameleoonStn.styleSheet) { kameleoonStn.styleSheet.cssText = kameleoonCc; }
                else { kameleoonStn.appendChild(document.createTextNode(kameleoonCc)); }
                kameleoonS.parentNode.insertBefore(kameleoonStn, kameleoonS);
                window.kameleoonDisplayPage = function(fromEngine) {
                  if (!fromEngine) { window.kameleoonTimeout = true; }
                  if (kameleoonStn.parentNode) { kameleoonStn.parentNode.removeChild(kameleoonStn); }
                };
                window.kameleoonDisplayPageTimeOut = window.setTimeout(window.kameleoonDisplayPage, kameleoonLoadingTimeout);
              }
            `,
          }}
        /> */}
        <KameleoonHead />
      </head>
      <body className={`${rubik.variable} antialiased`}>
        {/* <KameleoonScript /> */}
        <KameleoonHydrationReady />
        <GtmScript />
        {children}
      </body>
    </html>
  );
}
