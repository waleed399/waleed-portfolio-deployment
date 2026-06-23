"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

interface ProjectMetric {
  label: string;
  value: string;
  icon?: string;
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
  images?: string[];
  metrics?: ProjectMetric[];
  /** Live App Store listing URL — when set, the card links here and shows a "Live" badge */
  appStoreUrl?: string;
  /** Short status shown as a badge, e.g. "Live on App Store" */
  liveStatus?: string;
  /** Show a "Coming soon to Google Play" note */
  googlePlayComingSoon?: boolean;
}

// Live App Store listing for ShiftFlow (Shift Right).
const SHIFTFLOW_APP_STORE_URL = "https://apps.apple.com/il/app/shift-right/id6764660828";

const featuredProjects: FeaturedProject[] = [
  {
    title: "Shift Right",
    description:
      "A workforce shift-scheduling platform for businesses. Managers build and publish weekly schedules while workers set availability and claim open shifts. Live on the App Store with real clients in production — Google Play release in progress.",
    githubUrl: "",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    category: "Full-Stack Mobile · SaaS",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    color: "blue",
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
    appStoreUrl: SHIFTFLOW_APP_STORE_URL,
    liveStatus: "Live on App Store",
    googlePlayComingSoon: true,
    isPrivate: true,
    privateNote: "Commercial product — private repository. Built solo over 3 months and shipped to paying clients.",
    metrics: [
      { label: "Status", value: "On App Store" },
      { label: "Stage", value: "In production" },
      { label: "Built", value: "Solo · 3 mo" },
    ],
  },
  {
    title: "E-commerce Recommendation System",
    description:
      "Real-time recommendation system with Kafka & Kubernetes, using collaborative filtering algorithms trained on e-commerce data for personalized product recommendations",
    githubUrl: "https://github.com/waleed399/FinalProject-Kaleidoo",
    technologies: ["Kafka", "Kubernetes", "JavaScript", "Microservices"],
    category: "Backend & Infrastructure",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "green",
    videoUrl: "/videos/recommendation-demo.mp4",
    videoType: "local",
    metrics: [
      { label: "Microservices", value: "5 services" }, // Backend, Frontend, Kafka, Zookeeper, MongoDB
      { label: "Real-time", value: "Kafka streams" },
      { label: "Deployment", value: "Kubernetes" },
    ],
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
    videoUrl: "/videos/monitoring-demo.mp4",
    videoType: "local",
    metrics: [
      { label: "Metrics Tracked", value: "6 per container" }, // CPU, Memory, Disk, Processes, etc.
      { label: "Update Frequency", value: "6 seconds" }, // Real-time monitoring
      { label: "Real-time", value: "Live tracking" },
    ],
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
    metrics: [
      { label: "Backend APIs", value: "11 controllers" }, // From code structure
      { label: "Full-Stack", value: "Android + Spring" },
      { label: "Collaboration", value: "CuraLife + Haifa University" },
    ],
  },
];

const projectColors = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      className={`flex flex-col gap-8 pt-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
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

// Auto-rotating crossfade carousel of app screenshots. Advances only while
// on screen (saves work when scrolled away) and shows the top of each
// portrait screenshot so the branded headers fill the card.
function ScreenshotCarousel({ images, title }: { images: string[]; title: string }) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active || images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2800);
    return () => clearInterval(id);
  }, [active, images.length]);

  return (
    <div ref={carouselRef} className="absolute inset-0">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${title} app screenshot ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 384px"
          priority={i === 0}
          className={`object-cover object-top transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* subtle gradient so dots stay readable over the screenshot */}
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Separate ProjectCard component with lazy loading
function ProjectCard({ project }: { project: FeaturedProject }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  
  const colors = projectColors[project.color as keyof typeof projectColors];
  // Link target priority: App Store listing > GitHub. Private repos with no
  // App Store link fall back to a non-clickable card.
  const linkUrl = project.appStoreUrl || (project.isPrivate ? "" : project.githubUrl);
  const CardWrapper = linkUrl ? "a" : "div";
  const wrapperProps = linkUrl
    ? {
        href: linkUrl,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

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
        !linkUrl
          ? "border-zinc-200 bg-zinc-50/50 opacity-90 dark:border-zinc-800 dark:bg-zinc-900/50 cursor-default"
          : "border-zinc-200 bg-white shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
      }`}
    >
      {/* Project Video/Thumbnail Area */}
      <div
        ref={containerRef}
        className={`relative h-48 overflow-hidden rounded-t-xl border-b ${colors.border} ${
          project.videoUrl
            ? "bg-zinc-900"
            : project.images?.length
            ? "bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-950"
            : colors.bg
        }`}
        onClick={(e) => {
          // Only swallow clicks over a video (so its controls work); let
          // image/icon cards pass the click through to the card link.
          if (project.videoUrl) {
            e.preventDefault();
            e.stopPropagation();
          }
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
                    poster={`/videos/thumbnails/${project.videoUrl?.split('/').pop()?.replace('.mp4', '.jpg')}`}
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
        ) : project.images && project.images.length > 0 ? (
          <ScreenshotCarousel images={project.images.slice(0, 6)} title={project.title} />
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
        {project.liveStatus ? (
          <div className="absolute top-2 right-2">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-green-500/95 px-2 py-1 text-xs font-semibold text-white shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              {project.liveStatus}
            </span>
          </div>
        ) : project.isPrivate ? (
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
        ) : null}
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
          {linkUrl && (
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

        {/* App Store / Google Play availability */}
        {(project.appStoreUrl || project.googlePlayComingSoon) && (
          <div className="flex flex-wrap items-center gap-2">
            {project.appStoreUrl && (
              <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white dark:bg-zinc-50 dark:text-zinc-900">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
                </svg>
                App Store
              </span>
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

        {/* Metrics Display */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 border-t border-zinc-200 pt-3 dark:border-zinc-800">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-1 rounded-lg bg-zinc-50 px-2 py-2 text-center dark:bg-zinc-900/50"
              >
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-50">
                  {metric.value}
                </span>
                <span className="text-[10px] text-zinc-600 dark:text-zinc-400">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        )}

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

