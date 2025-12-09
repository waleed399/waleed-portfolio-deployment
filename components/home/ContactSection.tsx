export default function ContactSection() {
  return (
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
  );
}
