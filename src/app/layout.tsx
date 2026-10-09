import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/data/socials";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Raghavendra Singh | Full-Stack Developer | Flutter | AI/ML",
  description:
    "Raghavendra Singh is a full-stack developer, Flutter developer, and B.Tech IT student at Chandigarh University. Co-founder and CTO of Inheriq, building web, mobile, and AI/ML projects.",
  keywords: [
    "Full Stack Developer",
    "Flutter Developer",
    "AI/ML",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Software Development Intern",
    "Co-Founder",
    "CTO",
    "Inheriq",
    "Developer Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.domain),
  openGraph: {
    title: "Raghavendra Singh | Full-Stack Developer",
    description:
      "Full-stack developer, Flutter developer, and co-founder & CTO of Inheriq. Explore my work across web, mobile, and AI/ML.",
    url: siteConfig.domain,
    siteName: "Raghavendra Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghavendra Singh | Full-Stack Developer",
    description:
      "Full-stack developer, Flutter developer, and co-founder & CTO of Inheriq.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              url: siteConfig.domain,
              email: siteConfig.email,
              telephone: siteConfig.phone,
              jobTitle: "Full-Stack Developer, Co-Founder & CTO",
              worksFor: {
                "@type": "Organization",
                name: "Inheriq",
                url: "https://www.inheriq.in",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Chandigarh University",
              },
              sameAs: [
                siteConfig.github,
                siteConfig.linkedin,
                siteConfig.instagram,
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Full Stack Development",
                "Flutter",
                "Next.js",
                "React",
                "TypeScript",
                "Python",
                "Machine Learning",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
