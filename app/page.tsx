"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Helper function to convert YouTube URL to embed format
function getYouTubeEmbedUrl(url: string): string {
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1`;
  }
  return url; // Return as-is if not a valid YouTube URL
}

interface FeaturedProject {
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
  category: string;
  icon: string;
  color: string;
  isPrivate?: boolean;
  privateNote?: string;
  videoUrl?: string; // YouTube URL or local video path
  videoType?: "youtube" | "local"; // Type of video
}

// To add a video demonstration:
// - For YouTube: Add videoUrl: "https://www.youtube.com/watch?v=VIDEO_ID" and videoType: "youtube"
// - For local video: Add videoUrl: "/videos/project-demo.mp4" and videoType: "local" (place video in public/videos/)
const featuredProjects: FeaturedProject[] = [
  {
    title: "E-commerce Recommendation System",
    description:
      "Real-time recommendation system with Kafka & Kubernetes, using collaborative filtering algorithms trained on e-commerce data for personalized product recommendations",
    githubUrl: "https://github.com/waleed399/FinalProject-Kaleidoo",
    technologies: ["Kafka", "Kubernetes", "JavaScript", "Microservices"],
    category: "Backend & Infrastructure",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "green",
    videoUrl: "/videos/Recommendation_System_Recording.mov",
    videoType: "local",
  },
  {
    title: "Container Monitoring System",
    description:
      "Comprehensive container monitoring with real-time health tracking and automated alerting",
    githubUrl: "https://github.com/waleed399/ContainerMonitoringSystem",
    technologies: ["Python", "Docker", "Monitoring", "Infrastructure"],
    category: "DevOps & Infrastructure",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    color: "purple",
    videoUrl: "/videos/Monitoring System Recording.mov",
    videoType: "local",
  },
  {
    title: "MealPlan App",
    description:
      "Android full-stack meal planning app with Spring Boot backend, developed for CuraLife startup and Haifa University, featuring recipe management and meal scheduling",
    githubUrl: "https://github.com/waleed399/MealPlan",
    technologies: ["Java", "Spring Boot", "Android", "MySQL", "PostgreSQL"],
    category: "Full-Stack Mobile",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    color: "orange",
    isPrivate: true,
    privateNote: "CuraLife Startup & Haifa University project - Private repository",
  },
];

const projectColors = {
  green: {
    bg: "bg-green-100 dark:bg-green-900/30",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-800",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-900/30",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
  },
  orange: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
  },
};

export default function Home() {
  // Images for Matapalo, Costa Rica (2021)
  const matapaloImages = [
    "/volunteering/IMG_20210921_223733_772.jpeg",
    "/volunteering/IMG_20210924_160935_493.webp",
    "/volunteering/IMG_20210924_160955_535 2.webp",
    "/volunteering/IMG_20210924_172402_499.jpg",
    "/volunteering/IMG_20210924_172405_788 2.jpg",
    "/volunteering/IMG_20210924_172502_756 2.jpg",
    "/volunteering/IMG_20210924_173825_592.webp",
    "/volunteering/IMG_20210925_092118_322.webp",
    "/volunteering/IMG_20210926_171203 2.jpg",
    "/volunteering/IMG_20210926_171734_268.jpg",
    "/volunteering/IMG_20210926_191946_302.webp",
    "/volunteering/IMG_20210927_163042_095.webp",
  ];

  // Images for Puerto Escondido, Mexico (2023)
  const puertoEscondidoImages = [
    "/volunteering/IMG_20230301_175245_751.webp",
    "/volunteering/IMG_20230206_182335_665.webp",
    "/volunteering/IMG_20230223_130043_122.jpg",
    "/volunteering/IMG_20230312_161337.jpg",
  ];

  const [matapaloIndex, setMatapaloIndex] = useState(0);
  const [puertoEscondidoIndex, setPuertoEscondidoIndex] = useState(0);
  const [matapaloFade, setMatapaloFade] = useState(true);
  const [puertoEscondidoFade, setPuertoEscondidoFade] = useState(true);

  // Rotate images every 4 seconds with fade effect
  useEffect(() => {
    const matapaloInterval = setInterval(() => {
      setMatapaloFade(false);
      setTimeout(() => {
        setMatapaloIndex((prev) => (prev + 1) % matapaloImages.length);
        setMatapaloFade(true);
      }, 300);
    }, 4000);

    const puertoEscondidoInterval = setInterval(() => {
      setPuertoEscondidoFade(false);
      setTimeout(() => {
        setPuertoEscondidoIndex((prev) => (prev + 1) % puertoEscondidoImages.length);
        setPuertoEscondidoFade(true);
      }, 300);
    }, 4000);

    return () => {
      clearInterval(matapaloInterval);
      clearInterval(puertoEscondidoInterval);
    };
  }, [matapaloImages.length, puertoEscondidoImages.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-black dark:via-zinc-950 dark:to-zinc-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-950/80">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold text-zinc-900 dark:text-zinc-50"
            >
              WA
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/"
                className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                Projects
              </Link>
              <Link
                href="/tech-stack"
                className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                Tech Stack
              </Link>
              <Link
                href="/volunteering"
                className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                Volunteering
              </Link>
              <Link
                href="/certifications"
                className="text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                Certifications
              </Link>
              <a
                href="/Waleed_Ali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-zinc-900 px-4 py-2 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-6 py-20 sm:py-32">
        <div className="flex flex-col gap-12">
          {/* Professional Statement */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
              Waleed Ali
            </h1>
            <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-3xl">
              Full-Stack Engineer
            </h2>
            <div className="max-w-3xl space-y-4">
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
                Full-Stack Developer with 2+ years of experience delivering scalable web
                applications across the entire stack. Currently building low-latency
                microservice architectures and real-time systems
                , where I develop high-performance solutions using Kafka, Kubernetes, and
                modern web technologies.
              </p>
              <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
                Experienced in Agile methodologies, working within cross-functional teams to
                deliver production-ready solutions. I bring expertise in Python, FastAPI,
                Node.js, React, Next.js, and cloud infrastructure, with a strong focus on
                containerization, CI/CD, and scalable system design.
              </p>
            </div>
          </div>

          {/* Key Skills Bar */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/tech-stack#backend-apis"
              className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Backend & APIs
                </span>
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  Python / FastAPI / Node.js
                </span>
              </div>
            </Link>

            <Link
              href="/tech-stack#streaming-data"
              className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Streaming Data
                </span>
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  Kafka / RabbitMQ / Socket.IO
                </span>
              </div>
            </Link>

            <Link
              href="/tech-stack#containerization-orchestration"
              className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Containerization
                </span>
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  Docker / Kubernetes
                </span>
              </div>
            </Link>

            <Link
              href="/tech-stack#frontend-ui"
              className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/30">
                <svg
                  className="h-6 w-6 text-orange-600 dark:text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Full-Stack UI
                </span>
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  React / Next.js
                </span>
              </div>
            </Link>

            <Link
              href="/tech-stack#testing-quality-assurance"
              className="group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white px-6 py-4 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/30">
                <svg
                  className="h-6 w-6 text-red-600 dark:text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  Testing & QA
                </span>
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  Pytest / Jest / RTL
                </span>
              </div>
            </Link>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="group flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <span className="font-medium">View My Projects</span>
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href="/tech-stack"
              className="flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <span className="font-medium">Explore Tech Stack</span>
            </Link>
          </div>

          {/* Featured Projects Section */}
          <section className="flex flex-col gap-8 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                  Featured Projects
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Showcasing impactful work in real-time systems and scalable
                  architectures
                </p>
              </div>
              <Link
                href="/projects"
                className="hidden text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 sm:block"
              >
                View All →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => {
                const colors =
                  projectColors[
                    project.color as keyof typeof projectColors
                  ];
                const CardWrapper = project.isPrivate ? "div" : "a";
                const wrapperProps = project.isPrivate
                  ? {}
                  : {
                      href: project.githubUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    };
                return (
                  <CardWrapper
                    key={project.title}
                    {...wrapperProps}
                    className={`group flex flex-col rounded-xl border ${
                      project.isPrivate
                        ? "border-zinc-200 bg-zinc-50/50 opacity-90 dark:border-zinc-800 dark:bg-zinc-900/50 cursor-default"
                        : "border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                    }`}
                  >
                    {/* Project Video/Thumbnail Area */}
                    <div
                      className={`relative h-48 overflow-hidden rounded-t-xl border-b ${colors.border} ${
                        project.videoUrl ? "bg-zinc-900" : colors.bg
                      }`}
                      onClick={(e) => {
                        // Stop event propagation so clicking video doesn't navigate to GitHub
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      {project.videoUrl ? (
                        <>
                          {project.videoType === "youtube" ? (
                            <iframe
                              className="h-full w-full"
                              src={getYouTubeEmbedUrl(project.videoUrl)}
                              title={`${project.title} Demo`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <video
                              className="h-full w-full object-cover"
                              controls
                              autoPlay
                              loop
                              muted
                              playsInline
                              onClick={(e) => {
                                // Stop event propagation so clicking video doesn't navigate to GitHub
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                              <source 
                                src={encodeURI(project.videoUrl || '')} 
                                type={project.videoUrl?.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} 
                              />
                              <source 
                                src={encodeURI(project.videoUrl || '')} 
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </>
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <svg
                            className={`h-12 w-12 ${colors.text} ${
                              project.isPrivate
                                ? ""
                                : "transition-transform group-hover:scale-110"
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d={project.icon}
                            />
                          </svg>
                        </div>
                      )}
                      {project.isPrivate && (
                        <div className="absolute top-2 right-2">
                          <span className="inline-flex items-center gap-1 rounded-md bg-zinc-200/80 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-300">
                            <svg
                              className="h-3 w-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Private
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                            {project.title}
                          </h3>
                          <span className="mt-1 block text-xs text-zinc-500 dark:text-zinc-400">
                            {project.category}
                          </span>
                        </div>
                        {!project.isPrivate && (
                          <svg
                            className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-zinc-600 dark:text-zinc-500 dark:group-hover:text-zinc-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        )}
                      </div>

                      <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {project.description}
                      </p>

                      {project.isPrivate && project.privateNote && (
                        <div className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
                          {project.privateNote}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardWrapper>
                );
              })}
            </div>

            {/* Mobile View All Link */}
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 sm:hidden"
            >
              View All Projects
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </section>

          {/* Volunteering Section */}
          <section className="flex flex-col gap-8 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                  Volunteering
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  Making a positive impact through community service around the world
                </p>
              </div>
              <Link
                href="/volunteering"
                className="hidden text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50 sm:block"
              >
                View All →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Matapalo, Costa Rica Collection */}
              <Link
                href="/volunteering"
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    key={matapaloIndex}
                    src={matapaloImages[matapaloIndex]}
                    alt="Matapalo, Costa Rica"
                    fill
                    className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                      matapaloFade ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm dark:bg-zinc-900/90">
                      <svg
                        className="h-4 w-4 text-zinc-700 dark:text-zinc-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Matapalo
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm dark:bg-zinc-900/90">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        2021
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      Matapalo, Costa Rica
                    </h3>
                    <p className="mt-1 text-sm text-white/90">
                      Community service and environmental conservation
                    </p>
                  </div>
                </div>
              </Link>

              {/* Puerto Escondido, Mexico Collection */}
              <Link
                href="/volunteering"
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              >
                <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    key={puertoEscondidoIndex}
                    src={puertoEscondidoImages[puertoEscondidoIndex]}
                    alt="Puerto Escondido, Mexico"
                    fill
                    className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                      puertoEscondidoFade ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm dark:bg-zinc-900/90">
                      <svg
                        className="h-4 w-4 text-zinc-700 dark:text-zinc-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        Puerto Escondido
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className="rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm dark:bg-zinc-900/90">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        2023
                      </span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">
                      Puerto Escondido, Mexico
                    </h3>
                    <p className="mt-1 text-sm text-white/90">
                      Supporting local community initiatives
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile View All Link */}
            <Link
              href="/volunteering"
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 sm:hidden"
            >
              View All Volunteering
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </section>

          {/* Contact Section */}
          <section className="flex flex-col gap-8 pt-8">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                Get in Touch
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Let's connect! Feel free to reach out through any of these channels
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a
                href="mailto:waleedali324@icloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-300 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-700 dark:hover:bg-blue-950/30 dark:hover:shadow-blue-900/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <svg
                    className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-blue-700 dark:text-zinc-50 dark:group-hover:text-blue-400">
                    Email
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    waleedali324@icloud.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/waleed-ali99/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg hover:shadow-blue-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-600 dark:hover:bg-blue-950/30 dark:hover:shadow-blue-900/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/30">
                  <svg
                    className="h-6 w-6 text-blue-600 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-50 dark:group-hover:text-blue-400">
                    LinkedIn
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Connect with me
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/waleed399"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-zinc-400 hover:bg-zinc-50 hover:shadow-lg hover:shadow-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-600 dark:hover:bg-zinc-800 dark:hover:shadow-zinc-900/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  <svg
                    className="h-6 w-6 text-zinc-700 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 dark:text-zinc-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-zinc-900 dark:text-zinc-50">
                    GitHub
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    View my projects
                  </p>
                </div>
              </a>

              <a
                href="tel:+972535254506"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-green-300 hover:bg-green-50 hover:shadow-lg hover:shadow-green-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-green-700 dark:hover:bg-green-950/30 dark:hover:shadow-green-900/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                  <svg
                    className="h-6 w-6 text-green-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-zinc-900 transition-colors group-hover:text-green-700 dark:text-zinc-50 dark:group-hover:text-green-400">
                    Phone
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    +972 53 525 4506
                  </p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Waleed Ali. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <a
                href="https://github.com/waleed399"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                GitHub
              </a>
              <a
                href="/Waleed_Ali_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
