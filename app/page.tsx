import Link from "next/link";
import Image from "next/image";

// Helper function to convert YouTube URL to embed format
function getYouTubeEmbedUrl(url: string): string {
  // Handle different YouTube URL formats
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
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
                microservice architectures and real-time systems at{" "}
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
                              preload="metadata"
                              playsInline
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
                    src="/volunteering/IMG_20210921_223733_772.jpeg"
                    alt="Matapalo, Costa Rica"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
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
                    src="/volunteering/IMG_20230301_175245_751.webp"
                    alt="Puerto Escondido, Mexico"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
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
