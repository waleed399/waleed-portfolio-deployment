"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface MediaItem {
  type: "image" | "video";
  src: string;
  alt?: string;
  date?: string;
}

interface Collection {
  id: string;
  title: string;
  location: string;
  country: string;
  year: string;
  description: string;
  media: MediaItem[];
  thumbnail: string; // First image or video thumbnail
  icon: string; // SVG path for icon
}

// Helper function to extract date from filename
function extractDate(filename: string): string | null {
  const match = filename.match(/IMG_(\d{8})/);
  if (match) {
    const dateStr = match[1];
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    const date = new Date(`${year}-${month}-${day}`);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
  return null;
}

// Helper function to extract year from filename or date
function extractYear(item: MediaItem): string {
  if (item.date) {
    const match = item.date.match(/\d{4}/);
    if (match) return match[0];
  }
  const match = item.src.match(/IMG_(\d{4})/);
  if (match) return match[1];
  // Videos from Mexico 2023 (FC4, A60E, EDBAA, EECD, 2A88)
  if (item.type === "video" && (
    item.src.includes("FC42F1A3") ||
    item.src.includes("A60E8EFB") ||
    item.src.includes("EDBAA45A") ||
    item.src.includes("EECD52C4") ||
    item.src.includes("2A8874D9")
  )) {
    return "2023";
  }
  // Other videos without dates are from 2021 (Costa Rica)
  if (item.type === "video") {
    return "2021";
  }
  // B6D image is from 2023 (Mexico)
  if (item.type === "image" && item.src.includes("B6D69422")) {
    return "2023";
  }
  return "Unknown";
}

// All media files from public/volunteering/
const allMedia: MediaItem[] = [
  // Videos - Costa Rica 2021
  { type: "video" as const, src: "/volunteering/24B9BD60-3A6B-448D-A45D-1880C90C0CE2.MP4" },
  { type: "video" as const, src: "/volunteering/5B066E28-F864-458E-9562-149369FA5987.MP4" },
  { type: "video" as const, src: "/volunteering/753B1AC7-7C4B-4B59-96F1-6EA6A847E031.MP4" },
  { type: "video" as const, src: "/volunteering/B0058FF9-C45B-42E4-8609-4A92C18B957B.MP4" },
  
  // Videos - Mexico 2023
  { type: "video" as const, src: "/volunteering/FC42F1A3-26B6-4F7C-B216-AA242FDCF0DF.MP4" },
  { type: "video" as const, src: "/volunteering/A60E8EFB-7D57-40F5-BAFA-693407C85F8F.MP4" },
  { type: "video" as const, src: "/volunteering/EDBAA45A-B551-40D4-B052-C112AA76FA64.MP4" },
  { type: "video" as const, src: "/volunteering/EECD52C4-3C9B-4DD0-B3BE-19AE0D7384EB.MP4" },
  { type: "video" as const, src: "/volunteering/2A8874D9-7505-4D0D-8F08-1429D87DF673.MP4" },
  
  // Images - September 2021
  { type: "image" as const, src: "/volunteering/IMG_20210921_223733_772.jpeg", date: "September 21, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210924_160935_493.webp", date: "September 24, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210924_160955_535 2.webp", date: "September 24, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210924_172402_499.jpg", date: "September 24, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210924_172405_788 2.jpg", date: "September 24, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210924_172502_756 2.jpg", date: "September 24, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210924_173825_592.webp", date: "September 24, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210925_092118_322.webp", date: "September 25, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210926_171203 2.jpg", date: "September 26, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210926_171734_268.jpg", date: "September 26, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210926_191946_302.webp", date: "September 26, 2021" },
  { type: "image" as const, src: "/volunteering/IMG_20210927_163042_095.webp", date: "September 27, 2021" },
  
  // Images - Mexico 2023
  { type: "image" as const, src: "/volunteering/IMG_20230206_182335_665.webp", date: "February 6, 2023" },
  { type: "image" as const, src: "/volunteering/IMG_20230223_130043_122.jpg", date: "February 23, 2023" },
  { type: "image" as const, src: "/volunteering/IMG_20230301_175245_751.webp", date: "March 1, 2023" },
  { type: "image" as const, src: "/volunteering/IMG_20230312_161337.jpg", date: "March 12, 2023" },
  { type: "image" as const, src: "/volunteering/B6D69422-3F2C-43C1-AC05-48A2B9BC2CF1.JPG" },
].map((item): MediaItem => ({
  ...item,
  date: item.date || extractDate(item.src) || undefined,
}));

// Group media by location based on year
const collections: Collection[] = [
  {
    id: "matapalo-2021",
    title: "Saving Baby Turtles",
    location: "Matapalo",
    country: "Costa Rica",
    year: "2021",
    description: "Volunteering experience in the beautiful coastal town of Matapalo, Costa Rica. Contributing to local community projects and environmental conservation efforts, particularly focused on sea turtle conservation and protection.",
    media: allMedia.filter(item => extractYear(item) === "2021"),
    thumbnail: "/volunteering/IMG_20210921_223733_772.jpeg", // First image from 2021 that exists
    icon: "",
  },
  {
    id: "puerto-escondido-2023",
    title: "Receptionist and Promoter",
    location: "Puerto Escondido",
    country: "Mexico",
    year: "2023",
    description: "Community service and volunteer work in Puerto Escondido, Mexico. Serving as a receptionist and promoter at a local hostel, supporting tourism and hospitality initiatives while making a positive impact in the community.",
    media: allMedia.filter(item => extractYear(item) === "2023"),
    thumbnail: "/volunteering/IMG_20230206_182335_665.webp", // First image from 2023 that exists
    // Receptionist/Hospitality icon SVG path
    icon: "",
  },
];

export default function VolunteeringPage() {
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null);

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
                className="text-zinc-900 dark:text-zinc-50 font-semibold"
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
              Volunteering
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Giving back to the community and making a positive impact through
              volunteer work and community service around the world.
            </p>
          </div>

          {/* Collection Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setSelectedCollection(collection)}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg transition-all hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 text-left"
              >
                {/* Thumbnail Image */}
                <div className="relative h-64 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={collection.thumbnail}
                    alt={`${collection.location}, ${collection.country}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Location Badge */}
                  <div className="absolute top-4 left-4">
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
                        {collection.location}
                      </span>
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="rounded-full bg-white/90 px-3 py-1.5 backdrop-blur-sm dark:bg-zinc-900/90">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                        {collection.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title with Icon */}
                  <div className="mb-3 flex items-center gap-3">
                    <div className={`rounded-lg p-2 ${
                      collection.id === "matapalo-2021" 
                        ? "bg-green-100 dark:bg-green-900/30" 
                        : "bg-blue-100 dark:bg-blue-900/30"
                    }`}>
                      {collection.id === "matapalo-2021" ? (
                        <Image
                          src="/turtle.png"
                          alt="Turtle icon"
                          width={24}
                          height={24}
                          className="h-6 w-6"
                        />
                      ) : (
                        <svg
                          className="h-6 w-6 text-blue-600 dark:text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                        {collection.title}
                      </h2>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {collection.location}, {collection.country}
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {collection.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 border-t border-zinc-200 pt-4 dark:border-zinc-800">
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-zinc-500 dark:text-zinc-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {collection.media.filter(m => m.type === "image").length} Photos
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-zinc-500 dark:text-zinc-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        {collection.media.filter(m => m.type === "video").length} Videos
                      </span>
                    </div>
                    <div className="ml-auto flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      View Collection
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
                </div>
              </button>
            ))}
          </div>

          {/* Reflection Section */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8 shadow-lg dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 sm:p-12">
            {/* Decorative Background Elements */}
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-green-500/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />
            
            <div className="relative">
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center">
                <div className="rounded-full bg-green-100 p-4 dark:bg-green-900/30">
                  <svg
                    className="h-8 w-8 text-green-600 dark:text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h2 className="mb-6 text-center text-3xl font-bold text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                The Value of Giving Back
              </h2>

              {/* Content */}
              <div className="mx-auto max-w-3xl space-y-6 text-center">
                <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-xl">
                  Through my volunteering experiences in Costa Rica and Mexico, I've learned that 
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50"> giving back to communities</span> is not just about the work we do, 
                  but about the connections we build, the perspectives we gain, and the positive change we create together.
                </p>

                <div className="grid gap-6 pt-6 sm:grid-cols-2">
                  {/* What I Learned */}
                  <div className="rounded-xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-blue-100 p-2 dark:bg-blue-900/30">
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
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                        What I Learned
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                      Volunteering taught me the importance of empathy, cultural understanding, and the power of 
                      collective action. I learned that meaningful change comes from listening to communities, 
                      understanding their needs, and working alongside them to create sustainable solutions.
                    </p>
                  </div>

                  {/* What I Gave */}
                  <div className="rounded-xl border border-zinc-200 bg-white/50 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-green-100 p-2 dark:bg-green-900/30">
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
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                        What I Gave
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                      I contributed my time, skills, and energy to support local initiatives, from environmental 
                      conservation efforts to community development projects. More importantly, I brought enthusiasm, 
                      a fresh perspective, and a commitment to making a tangible difference in the lives of others.
                    </p>
                  </div>
                </div>

                {/* Closing Statement */}
                <div className="pt-6">
                  <p className="text-lg font-medium leading-relaxed text-zinc-800 dark:text-zinc-200 sm:text-xl">
                    Volunteering is invaluable because it reminds us that we are all part of a global community. 
                    Every act of service, no matter how small, creates ripples of positive change that extend far 
                    beyond what we can see. It's through these experiences that we grow as individuals and contribute 
                    to building a better, more connected world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Collection Detail Modal */}
      {selectedCollection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCollection(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-zinc-200 bg-white/95 p-6 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/95">
              <div className="flex items-center gap-4">
                <div className={`rounded-lg p-3 ${
                  selectedCollection.id === "matapalo-2021" 
                    ? "bg-green-100 dark:bg-green-900/30" 
                    : "bg-blue-100 dark:bg-blue-900/30"
                }`}>
                  {selectedCollection.id === "matapalo-2021" ? (
                    <Image
                      src="/turtle.png"
                      alt="Turtle icon"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  ) : (
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                    {selectedCollection.title}
                  </h2>
                  <p className="mt-1 text-lg text-zinc-600 dark:text-zinc-400">
                    {selectedCollection.location}, {selectedCollection.country} • {selectedCollection.year}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCollection(null)}
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
              <p className="mb-8 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {selectedCollection.description}
              </p>

              {/* Media Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selectedCollection.media.map((item, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 shadow-sm transition-all hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-800 dark:hover:border-zinc-700 ${
                      item.type === "image" ? "cursor-pointer" : "aspect-video"
                    }`}
                    onClick={() => item.type === "image" && setSelectedImage(item)}
                  >
                    {item.type === "image" ? (
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={item.src}
                          alt={item.alt || `${selectedCollection.location} - Photo ${index + 1}`}
                          fill
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <video
                        className="h-full w-full object-cover"
                        controls
                        preload="metadata"
                        playsInline
                      >
                        <source 
                          src={encodeURI(item.src)} 
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {item.type === "video" && (
                      <div className="absolute top-2 right-2 rounded-full bg-black/60 px-2 py-1">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Image Modal */}
      {selectedImage && selectedImage.type === "image" && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[95vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
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
                src={selectedImage.src}
                alt={selectedImage.alt || "Full size image"}
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
