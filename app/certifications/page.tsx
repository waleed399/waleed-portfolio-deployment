"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  image: string;
  credentialId?: string;
  credentialUrl?: string;
}

// Certifications data - Add your certifications here
const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "B.Sc in Software Engineering",
    issuer: "Ort Braude - College Of Engineering",
    date: "",
    description: "Bachelor of Science degree in Software Engineering",
    image: "/certifications/IMG_20220927_161853.jpg",
  },
  {
    id: "cert-2",
    title: "Water Hackathon",
    issuer: "Kinneret",
    date: "",
    description: "Participation and achievement in the Water Hackathon at Kinneret",
    image: "/certifications/IMG_20221119_171857.jpg",
  },
];

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null);

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
                className="text-zinc-900 dark:text-zinc-50 font-semibold"
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
              Certifications
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Professional certifications and credentials that demonstrate my expertise and commitment to continuous learning.
            </p>
          </div>

          {/* Certifications Grid */}
          {certifications.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg transition-all hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 text-left"
                >
                  {/* Certification Image */}
                  <div className="relative h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
                        <svg
                          className="h-5 w-5 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                        {cert.title}
                      </h2>
                    </div>
                    
                    <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                    
                    {cert.date && (
                      <p className="text-sm text-zinc-500 dark:text-zinc-500">
                        {cert.date}
                      </p>
                    )}

                    {/* View Details */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      View Details
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white p-12 text-center dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-4 rounded-full bg-zinc-100 p-4 dark:bg-zinc-800">
                <svg
                  className="h-12 w-12 text-zinc-400 dark:text-zinc-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                No Certifications Yet
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Certifications will be displayed here once added.
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Certification Detail Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white/95 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/95">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900/30">
                  <svg
                    className="h-8 w-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    {selectedCert.title}
                  </h2>
                  <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
                    {selectedCert.issuer}{selectedCert.date ? ` • ${selectedCert.date}` : ""}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Certification Image */}
              <div 
                className="relative mb-6 h-[500px] w-full cursor-pointer overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-800 dark:hover:border-zinc-700"
                onClick={() => setFullSizeImage(selectedCert.image)}
              >
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain p-6"
                  sizes="100vw"
                />
              </div>

              {/* Description */}
              {selectedCert.description && (
                <p className="mb-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {selectedCert.description}
                </p>
              )}

              {/* Credential Details */}
              <div className="space-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                {selectedCert.credentialId && (
                  <div>
                    <p className="mb-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      Credential ID
                    </p>
                    <p className="font-mono text-sm text-zinc-900 dark:text-zinc-50">
                      {selectedCert.credentialId}
                    </p>
                  </div>
                )}
                {selectedCert.credentialUrl && (
                  <div>
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                      Verify Credential
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
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Size Image Modal */}
      {fullSizeImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setFullSizeImage(null)}
        >
          <div
            className="relative max-h-[95vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFullSizeImage(null)}
              className="absolute -right-12 top-0 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative h-full w-full">
              <Image
                src={fullSizeImage}
                alt="Full size certification"
                width={1920}
                height={1080}
                className="max-h-[95vh] max-w-[95vw] object-contain"
                sizes="95vw"
              />
            </div>
          </div>
        </div>
      )}

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

