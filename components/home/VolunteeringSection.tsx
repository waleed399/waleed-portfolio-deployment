"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const matapaloImages = [
  "/volunteering/IMG_20210921_223733_772.jpeg",
  "/volunteering/IMG_20210924_160935_493.webp",
  "/volunteering/IMG_20210924_160955_535 2.webp",
  "/volunteering/IMG_20210924_172402_499.jpg",
  "/volunteering/IMG_20210924_172405_788 2.jpg",
  "/volunteering/IMG_20210924_172502_756 2.jpg",
  "/volunteering/IMG_20210924_173825_592.webp",
  "/volunteering/IMG_20210925_092118_322.webp",
  "/volunteering/IMG_20210926_171203 2.jpg",
  "/volunteering/IMG_20210926_171734_268.jpg",
  "/volunteering/IMG_20210926_191946_302.webp",
  "/volunteering/IMG_20210927_163042_095.webp",
];

const puertoEscondidoImages = [
  "/volunteering/IMG_20230301_175245_751.webp",
  "/volunteering/IMG_20230206_182335_665.webp",
  "/volunteering/IMG_20230223_130043_122.jpg",
  "/volunteering/IMG_20230312_161337.jpg",
];

export default function VolunteeringSection() {
  const [matapaloIndex, setMatapaloIndex] = useState(0);
  const [puertoEscondidoIndex, setPuertoEscondidoIndex] = useState(0);
  const [matapaloFade, setMatapaloFade] = useState(true);
  const [puertoEscondidoFade, setPuertoEscondidoFade] = useState(true);

  // Rotate images every 4 seconds with fade effect
  useEffect(() => {
    const matapaloInterval = setInterval(() => {
      setMatapaloFade(false);
      setTimeout(() => {
        setMatapaloIndex((prev) => (prev + 1) % matapaloImages.length);
        setMatapaloFade(true);
      }, 300);
    }, 4000);

    const puertoEscondidoInterval = setInterval(() => {
      setPuertoEscondidoFade(false);
      setTimeout(() => {
        setPuertoEscondidoIndex((prev) => (prev + 1) % puertoEscondidoImages.length);
        setPuertoEscondidoFade(true);
      }, 300);
    }, 4000);

    return () => {
      clearInterval(matapaloInterval);
      clearInterval(puertoEscondidoInterval);
    };
  }, []);

  return (
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
              key={matapaloIndex}
              src={matapaloImages[matapaloIndex]}
              alt="Matapalo, Costa Rica"
              fill
              className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                matapaloFade ? "opacity-100" : "opacity-0"
              }`}
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
              key={puertoEscondidoIndex}
              src={puertoEscondidoImages[puertoEscondidoIndex]}
              alt="Puerto Escondido, Mexico"
              fill
              className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                puertoEscondidoFade ? "opacity-100" : "opacity-0"
              }`}
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
  );
}
