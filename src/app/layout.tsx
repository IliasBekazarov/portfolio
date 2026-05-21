import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ilias Beknazarov — Junior Frontend Developer",
  description: "Junior Frontend Developer and IT student building real-world web applications with React, JavaScript, Python and Django. Based in Bishkek, Kyrgyzstan. Contact: ilias.dev.kg@gmail.com",
  keywords: ["developer", "frontend", "React", "JavaScript", "Python", "Django", "portfolio", "Ilias Beknazarov"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
