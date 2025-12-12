"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  // Prevent rendering until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="relative h-9 w-16">
        {/* Placeholder to maintain layout */}
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="group relative inline-flex h-9 w-16 items-center rounded-full bg-zinc-200 transition-colors duration-300 hover:bg-zinc-300 dark:bg-zinc-700 dark:hover:bg-zinc-600"
      aria-label="Toggle theme"
      role="switch"
      aria-checked={isDark}
    >
      {/* Sliding circle */}
      <span
        className={`inline-flex h-7 w-7 transform items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out dark:bg-zinc-900 ${
          isDark ? "translate-x-8" : "translate-x-1"
        }`}
      >
        {/* Sun icon - shows in light mode */}
        <svg
          className={`h-4 w-4 text-amber-500 transition-all duration-300 ${
            isDark
              ? "scale-0 opacity-0 rotate-90"
              : "scale-100 opacity-100 rotate-0"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>

        {/* Moon icon - shows in dark mode */}
        <svg
          className={`absolute h-4 w-4 text-indigo-400 transition-all duration-300 ${
            isDark
              ? "scale-100 opacity-100 rotate-0"
              : "scale-0 opacity-0 -rotate-90"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </span>

      {/* Optional: Background icons for extra visual appeal */}
      <span className="absolute left-2 flex items-center">
        <svg
          className={`h-3.5 w-3.5 transition-all duration-300 ${
            isDark ? "text-zinc-500 opacity-40" : "text-amber-400 opacity-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="absolute right-2 flex items-center">
        <svg
          className={`h-3.5 w-3.5 transition-all duration-300 ${
            isDark ? "text-indigo-300 opacity-70" : "text-zinc-400 opacity-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </span>
    </button>
  );
}
