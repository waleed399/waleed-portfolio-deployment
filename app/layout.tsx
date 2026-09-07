import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Waleed Ali - Software Engineer",
  description:
    "Software engineer building production systems end to end: low-latency microservice architectures, real-time event pipelines, and the interfaces on top of them. Kafka, Kubernetes, Python, and modern web technologies.",
  // "Full-Stack" stays in the keywords even though the visible title no longer
  // leads with it — recruiters and job boards still search on the term, and
  // losing the match costs reach for nothing.
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Full-Stack Engineer",
    "Full-Stack Developer",
    "Distributed Systems",
    "Kafka",
    "Kubernetes",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "Microservices",
    "Docker",
  ],
  authors: [{ name: "Waleed Ali" }],
  openGraph: {
    title: "Waleed Ali - Software Engineer",
    description:
      "Software engineer building production systems end to end: low-latency microservice architectures, real-time event pipelines, and the interfaces on top of them.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Ali - Software Engineer",
    description:
      "Software engineer building production systems end to end: low-latency microservice architectures, real-time event pipelines, and the interfaces on top of them.",
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
  verification: {
    // Add your Google Search Console verification here if you have one
    // google: "your-verification-code",
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
