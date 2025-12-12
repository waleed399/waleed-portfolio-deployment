"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
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
              className={
                isActive("/")
                  ? "text-zinc-900 dark:text-zinc-50 font-semibold"
                  : "text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              }
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={
                isActive("/projects")
                  ? "text-zinc-900 dark:text-zinc-50 font-semibold"
                  : "text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              }
            >
              Projects
            </Link>
            <Link
              href="/tech-stack"
              className={
                isActive("/tech-stack")
                  ? "text-zinc-900 dark:text-zinc-50 font-semibold"
                  : "text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              }
            >
              Tech Stack
            </Link>
            <Link
              href="/volunteering"
              className={
                isActive("/volunteering")
                  ? "text-zinc-900 dark:text-zinc-50 font-semibold"
                  : "text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              }
            >
              Volunteering
            </Link>
            <Link
              href="/certifications"
              className={
                isActive("/certifications")
                  ? "text-zinc-900 dark:text-zinc-50 font-semibold"
                  : "text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50"
              }
            >
              Certifications
            </Link>
            <ThemeToggle />
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
  );
}
