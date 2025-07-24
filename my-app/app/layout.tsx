import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Spotlight } from "@/components/ui/spotlight-new";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://soumyabanerjee.tech"),
  title: {
    default: "Soumya Banerjee",
    template: "%s | Full Stack Developer",
  },
  description: "I'm a Full Stack Developer skilled in React, Next.js, Cloudflare Workers, Hono, Docker,TypeScript, AWS, and Node.js. Explore my portfolio!",
  openGraph:{
    title: "Soumya Banerjee | Full Stack Developer",
    description: "Explore my projects and experience in full stack development, devops.",
    url: "https://soumyabanerjee.tech/",
    siteName: "Soumya Banerjee",
    locale: "en_US",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/126083869?v=4",
        width: 1200,
        height: 630,
        alt: "Soumya Banerjee",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumya Banerjee | Full Stack Developer",
    description: "Explore my projects and fullstack development journey.",
    site: "@drk_sunshne",
    images: ["https://avatars.githubusercontent.com/u/126083869?v=4"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Soumya Banerjee",
              url: "https://soumyabanerjee.tech",
              sameAs: [
                "https://www.linkedin.com/in/banerjee-soumya/",
                "https://github.com/banerjeesoumya",
                "https://x.com/drk_sunshne",
                "https://www.instagram.com/omnipresent_species/",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className="relative z-10">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
