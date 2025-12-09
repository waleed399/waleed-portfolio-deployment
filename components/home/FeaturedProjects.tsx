"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Helper function to convert YouTube URL to embed format
function getYouTubeEmbedUrl(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1`;
  }
  return url;
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
  videoUrl?: string;
  videoType?: "youtube" | "local";
}

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

export default function FeaturedProjects() {
  return (
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
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
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
  );
}

// Separate ProjectCard component with lazy loading
function ProjectCard({ project }: { project: FeaturedProject }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  
  const colors = projectColors[project.color as keyof typeof projectColors];
  const CardWrapper = project.isPrivate ? "div" : "a";
  const wrapperProps = project.isPrivate
    ? {}
    : {
        href: project.githubUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!project.videoUrl || project.videoType === "youtube") {
      // For YouTube or no video, load immediately
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Start loading when intersecting
          if (entry.isIntersecting) {
            setShouldLoad(true);
          }
          // Track actual visibility for autoplay
          setIsVisible(entry.isIntersecting && entry.intersectionRatio > 0.1);
        });
      },
      {
        rootMargin: "200px", // Start loading 200px before visible
        threshold: [0, 0.1, 0.5],
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [project.videoUrl, project.videoType]);

  // Handle autoplay when visible
  useEffect(() => {
    if (videoRef.current && shouldLoad) {
      if (isVisible) {
        videoRef.current.play().catch(() => {
          // Autoplay might be blocked, that's okay
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isVisible, shouldLoad]);

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group flex flex-col rounded-xl border ${
        project.isPrivate
          ? "border-zinc-200 bg-zinc-50/50 opacity-90 dark:border-zinc-800 dark:bg-zinc-900/50 cursor-default"
          : "border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
      }`}
    >
      {/* Project Video/Thumbnail Area */}
      <div
        ref={containerRef}
        className={`relative h-48 overflow-hidden rounded-t-xl border-b ${colors.border} ${
          project.videoUrl ? "bg-zinc-900" : colors.bg
        }`}
        onClick={(e) => {
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
              <>
                {/* Loading placeholder */}
                {!shouldLoad && (
                  <div className="flex h-full items-center justify-center bg-zinc-800">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-zinc-400 animate-pulse"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="mt-2 text-xs text-zinc-400">Loading demo...</p>
                    </div>
                  </div>
                )}
                
                {/* Video element - only rendered when shouldLoad is true */}
                {shouldLoad && (
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata" // Load only metadata first
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <source
                      src={encodeURI(project.videoUrl || "")}
                      type={
                        project.videoUrl?.endsWith(".mov")
                          ? "video/quicktime"
                          : "video/mp4"
                      }
                    />
                    <source
                      src={encodeURI(project.videoUrl || "")}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
              </>
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
}
