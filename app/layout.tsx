import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Waleed Ali - Full-Stack Engineer",
  description:
    "Full-Stack Engineer specializing in low-latency microservice architectures and scalable data pipelines. Building real-time systems with Kafka, Kubernetes, and modern web technologies.",
  keywords: [
    "Full-Stack Engineer",
    "Software Engineer",
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
    title: "Waleed Ali - Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in low-latency microservice architectures and scalable data pipelines.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Ali - Full-Stack Engineer",
    description:
      "Full-Stack Engineer specializing in low-latency microservice architectures and scalable data pipelines.",
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
      </body>
    </html>
  );
}
