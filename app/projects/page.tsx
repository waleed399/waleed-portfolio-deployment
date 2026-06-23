"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import CVDownloadButton from "@/components/CVDownloadButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cvPath } from "@/lib/site-config";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  technologies: string[];
  category: string;
  featured: boolean;
  isPrivate?: boolean;
  privateNote?: string;
  appStoreUrl?: string;
  liveStatus?: string;
  googlePlayComingSoon?: boolean;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "Shift Right",
    description: "Workforce shift-scheduling platform — live on the App Store",
    longDescription:
      "A production workforce shift-scheduling platform for businesses, built solo over three months and shipped to real paying clients on the App Store. Managers create departments, build and publish weekly schedules, and auto-assign shifts based on worker availability; workers set their availability in time blocks, browse the published schedule, and claim open shifts. The cross-platform mobile app is built with React Native (Expo) and TypeScript, backed by a Node.js/Express API with Prisma and PostgreSQL, including JWT auth with account lockout, role-based access, and full RTL/internationalization support. A Google Play release is in progress.",
    githubUrl: "",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "JWT", "i18n / RTL"],
    category: "Full-Stack Mobile · SaaS",
    featured: true,
    isPrivate: true,
    privateNote: "Commercial product — private repository. Live on the App Store with paying clients.",
    appStoreUrl: "https://apps.apple.com/il/app/shift-right/id6764660828",
    liveStatus: "Live on App Store",
    googlePlayComingSoon: true,
    images: [
      "/shiftflow/9.jpeg", // Sign in — brand hero
      "/shiftflow/5.jpeg", // Manager dashboard / roster
      "/shiftflow/4.jpeg", // Weekly shift schedule grid
      "/shiftflow/17.jpeg", // Auto-scheduler — Generate schedule
      "/shiftflow/3.jpeg", // Worker availability overview
      "/shiftflow/10.jpeg", // Worker dashboard
      "/shiftflow/1.jpeg", // Team members
      "/shiftflow/2.jpeg", // Organization settings
      "/shiftflow/16.jpeg", // Edit shift / assign workers
      "/shiftflow/15.jpeg", // Assign workers grid
      "/shiftflow/13.jpeg", // Manager dashboard
      "/shiftflow/14.jpeg", // Manager profile / plan
      "/shiftflow/18.jpeg", // Team members
      "/shiftflow/12.jpeg", // Worker shifts / availability
      "/shiftflow/11.jpeg", // Worker profile / reminders
      "/shiftflow/8.jpeg", // Create account — email
      "/shiftflow/7.jpeg", // Verify email
      "/shiftflow/6.jpeg", // Create organization
    ],
  },
  {
    title: "E-commerce Recommendation System",
    description: "Develop an e-commerce recommendation system",
    longDescription:
      "A real-time recommendation system built with Kafka and Kubernetes, featuring ML-powered personalized product recommendations. The system uses collaborative filtering and content-based algorithms trained on e-commerce transaction data to analyze user behavior patterns and product similarities. User interactions and purchase history are processed in real-time through Kafka streams, enabling instant personalized suggestions. Deployed as microservices on Kubernetes for scalable, distributed architecture.",
    githubUrl: "https://github.com/waleed399/FinalProject-Kaleidoo",
    technologies: ["Kafka", "Kubernetes", "JavaScript", "Microservices", "Real-time Processing"],
    category: "Backend & Infrastructure",
    featured: true,
  },
  {
    title: "Container Monitoring System",
    description: "Container monitoring and orchestration system",
    longDescription:
      "A comprehensive container monitoring system built with Python. This project showcases skills in containerization, system monitoring, and infrastructure management. Features include real-time container health monitoring, resource usage tracking, and automated alerting.",
    githubUrl: "https://github.com/waleed399/ContainerMonitoringSystem",
    technologies: ["Python", "Docker", "Monitoring", "Infrastructure"],
    category: "DevOps & Infrastructure",
    featured: true,
  },
  {
    title: "MealPlan App",
    description: "Android Full Stack Development - Meal planning application",
    longDescription:
      "A comprehensive meal planning application built with Android frontend and Spring Boot backend, developed in collaboration with CuraLife startup and Haifa University. This full-stack project demonstrates mobile app development, RESTful API design, and database integration. Features include meal planning, recipe management, user authentication, and responsive Android UI with Spring Boot REST API backend.",
    githubUrl: "https://github.com/waleed399/MealPlan",
    technologies: ["Java", "Spring Boot", "Android", "MySQL", "PostgreSQL", "REST API", "Heroku"],
    category: "Full-Stack Mobile",
    featured: true,
    isPrivate: true,
    privateNote: "CuraLife Startup & Haifa University project - Private repository (limited access)",
  },
  {
    title: "Flask AWS Integration",
    description: "Flask application with AWS cloud integration",
    longDescription:
      "A Flask application integrated with AWS services, demonstrating cloud-native development practices. This project showcases expertise in cloud computing, serverless architecture, and AWS service integration. Features include scalable deployment, cloud storage, and serverless functions.",
    githubUrl: "https://github.com/waleed399/flask-aws",
    technologies: ["Python", "Flask", "AWS", "Cloud Computing", "CSS"],
    category: "Cloud & Backend",
    featured: false,
  },
  {
    title: "Flask PostgreSQL Application",
    description: "Flask application with PostgreSQL database",
    longDescription:
      "A robust Flask application with PostgreSQL database integration. This project demonstrates database design, ORM usage, and backend API development. Features include CRUD operations, database migrations, and RESTful API endpoints.",
    githubUrl: "https://github.com/waleed399/Flask-Postgres",
    technologies: ["Python", "Flask", "PostgreSQL", "SQL", "REST API"],
    category: "Backend",
    featured: false,
  },
  {
    title: "Next.js Production App",
    description: "Production-ready Next.js application",
    longDescription:
      "A production-ready Next.js application built with TypeScript. This project demonstrates modern React development, server-side rendering, and performance optimization. Features include TypeScript type safety, optimized builds, and modern React patterns.",
    githubUrl: "https://github.com/waleed399/NextJSProd",
    technologies: ["Next.js", "TypeScript", "React", "SSR"],
    category: "Frontend",
    featured: false,
  },
];

export default function ProjectsPage() {
  const headerRef = useScrollAnimation();
  const featuredRef = useScrollAnimation();
  const otherRef = useScrollAnimation();
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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
                className="text-zinc-900 dark:text-zinc-50 font-semibold"
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
              <ThemeToggle />
              <CVDownloadButton variant="secondary" showBoth={true} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-20 sm:py-32">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div 
            ref={headerRef.ref}
            className={`flex flex-col gap-4 transition-all duration-700 ${
              headerRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              Projects
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              A collection of impactful projects showcasing expertise in full-stack
              development, microservices architecture, and cloud infrastructure.
            </p>
          </div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <section 
              ref={featuredRef.ref}
              className={`flex flex-col gap-8 transition-all duration-700 ${
                featuredRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Featured Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <section 
              ref={otherRef.ref}
              className={`flex flex-col gap-8 transition-all duration-700 ${
                otherRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                Other Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </section>
          )}

          {/* GitHub Link */}
          <div className="flex justify-center pt-8">
            <a
              href="https://github.com/waleed399"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-zinc-700 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              <svg
                className="h-5 w-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">View All on GitHub</span>
            </a>
          </div>
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
                href={cvPath}
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`group flex flex-col rounded-xl border ${
        project.isPrivate && !project.appStoreUrl
          ? "border-zinc-200 bg-zinc-50/50 opacity-90 dark:border-zinc-800 dark:bg-zinc-900/50"
          : "border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
      }`}
    >
      {project.images && project.images.length > 0 && (
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto rounded-t-xl border-b border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 p-4 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-950">
          {project.images.map((src, i) => (
            <div
              key={src}
              className="relative h-52 w-[100px] shrink-0 snap-start overflow-hidden rounded-xl border border-zinc-300/60 bg-white shadow-sm dark:border-zinc-700/60"
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                sizes="100px"
                loading="lazy"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>
              {project.liveStatus && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-green-500/95 px-2 py-0.5 text-xs font-semibold text-white">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  {project.liveStatus}
                </span>
              )}
              {project.isPrivate && (
                <span className="inline-flex items-center gap-1 rounded-md bg-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
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
              )}
            </div>
            <span className="mt-1 inline-block text-sm text-zinc-500 dark:text-zinc-400">
              {project.category}
            </span>
          </div>
          {project.appStoreUrl ? (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
              aria-label={`View ${project.title} on the App Store`}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
              </svg>
            </a>
          ) : !project.isPrivate ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:bg-zinc-700 dark:hover:text-zinc-50"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          ) : null}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.longDescription}
        </p>

        {(project.appStoreUrl || project.googlePlayComingSoon) && (
          <div className="flex flex-wrap items-center gap-2">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white transition-opacity hover:opacity-90 dark:bg-zinc-50 dark:text-zinc-900"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                </svg>
                Download on the App Store
              </a>
            )}
            {project.googlePlayComingSoon && (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-300 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626-2.491-2.491 2.492-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.635z" />
                </svg>
                Coming to Google Play
              </span>
            )}
          </div>
        )}

        {project.isPrivate && project.privateNote && (
          <div className="rounded-md bg-amber-50 px-3 py-2 text-xs text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
            {project.privateNote}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


