import Link from "next/link";

interface TechCategory {
  name: string;
  description: string;
  technologies: {
    name: string;
    description?: string;
  }[];
  icon: string;
  color: string;
}

const techStack: TechCategory[] = [
  {
    name: "Backend & APIs",
    description: "High-performance API development and server-side technologies",
    technologies: [
      { name: "Python", description: "Primary backend language" },
      { name: "FastAPI", description: "Modern, fast web framework" },
      { name: "Flask", description: "Lightweight Python web framework" },
      { name: "Node.js", description: "JavaScript runtime for scalable applications" },
      { name: "Java", description: "Enterprise-grade applications" },
      { name: "Spring Boot", description: "Java framework with JPA, Web, Mail" },
      { name: "REST API", description: "RESTful API design and development" },
      { name: "Microservices", description: "Distributed microservices architecture" },
    ],
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    color: "blue",
  },
  {
    name: "Streaming Data",
    description: "Real-time data processing and messaging systems",
    technologies: [
      { name: "Kafka", description: "Distributed event streaming platform" },
      { name: "RabbitMQ", description: "Message broker for microservices" },
      { name: "Socket.IO", description: "Real-time bidirectional communication" },
    ],
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "green",
  },
  {
    name: "Containerization & Orchestration",
    description: "Container management, deployment automation, and monitoring",
    technologies: [
      { name: "Docker", description: "Containerization platform" },
      { name: "Kubernetes", description: "Container orchestration" },
      { name: "CI/CD", description: "Continuous integration and deployment" },
      { name: "Monitoring", description: "System and container monitoring" },
    ],
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    color: "purple",
  },
  {
    name: "Frontend & UI",
    description: "Modern user interface and mobile development",
    technologies: [
      { name: "React", description: "UI library for building interfaces" },
      { name: "Next.js", description: "React framework with SSR" },
      { name: "TypeScript", description: "Typed JavaScript" },
      { name: "JavaScript", description: "Client-side scripting" },
      { name: "CSS", description: "Styling and layout" },
      { name: "Android", description: "Mobile app development" },
    ],
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    color: "orange",
  },
  {
    name: "Databases",
    description: "Data storage and management systems",
    technologies: [
      { name: "MongoDB", description: "NoSQL document database" },
      { name: "PostgreSQL", description: "Advanced relational database" },
      { name: "MySQL", description: "Relational database management" },
      { name: "Redis", description: "In-memory data structure store" },
      { name: "SQL", description: "Database query language" },
    ],
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
    color: "indigo",
  },
  {
    name: "Cloud & Infrastructure",
    description: "Cloud platforms and infrastructure services",
    technologies: [
      { name: "AWS", description: "Amazon Web Services" },
      { name: "GCP", description: "Google Cloud Platform" },
      { name: "Heroku", description: "Cloud platform as a service" },
      { name: "Linux", description: "Operating system" },
      { name: "MinIO", description: "Object storage" },
      { name: "OAuth2/OIDC", description: "Authentication protocols" },
    ],
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    color: "cyan",
  },
];

const colorClasses = {
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
  indigo: {
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    text: "text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200 dark:border-indigo-800",
  },
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-800",
  },
};

export default function TechStackPage() {
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
                className="text-zinc-900 dark:text-zinc-50 font-semibold"
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

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-20 sm:py-32">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
              Tech Stack
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              A comprehensive overview of the technologies, frameworks, and tools I
              use to build scalable, high-performance applications.
            </p>
          </div>

          {/* Tech Categories */}
          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((category) => {
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              const categoryId = category.name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "");
              return (
                <div
                  key={category.name}
                  id={categoryId}
                  className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 scroll-mt-20"
                >
                  <div className="mb-4 flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}
                    >
                      <svg
                        className={`h-6 w-6 ${colors.text}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={category.icon}
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                        {category.name}
                      </h2>
                      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="group/tech relative"
                        title={tech.description}
                      >
                        <span className="inline-flex items-center rounded-md bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-center gap-4 rounded-xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Want to see these technologies in action?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Check out my projects to see how I apply these technologies to solve
              real-world problems.
            </p>
            <Link
              href="/projects"
              className="rounded-full bg-zinc-900 px-6 py-3 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Projects
            </Link>
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

