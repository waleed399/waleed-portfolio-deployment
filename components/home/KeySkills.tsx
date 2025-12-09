import Link from "next/link";

export default function KeySkills() {
  return (
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
  );
}
