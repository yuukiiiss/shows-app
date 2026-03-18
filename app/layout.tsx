import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { FavoriteProvider } from "@/context/FavoriteContext";

// load geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// static metadata
export const metadata: Metadata = {
  title: "Shows App",
  description: "Browse movies and TV shows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* prevent theme flashing */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (_) {}
})();
`,
          }}
        />
      </head>

      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-[color:var(--background)]
          text-[color:var(--foreground)]
        `}
      >
        <FavoriteProvider>
          <Navbar />

          {/* main content container */}
          <main className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
            {children}
          </main>
        </FavoriteProvider>
      </body>
    </html>
  );
}
