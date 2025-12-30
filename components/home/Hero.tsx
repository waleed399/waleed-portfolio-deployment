"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if element is already visible on mount
    const checkVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          setIsVisible(true);
          return;
        }
      }
      
      // Use IntersectionObserver for scroll-triggered animation
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.1,
          rootMargin: "0px",
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(checkVisibility, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      ref={ref}
      className={`flex flex-col gap-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
        Waleed Ali
      </h1>
      <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 sm:text-3xl">
        Full-Stack Engineer
      </h2>
      <div className="max-w-3xl space-y-4">
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
          Full-Stack Developer with 2+ years of experience delivering scalable web
          applications across the entire stack. Currently building low-latency
          microservice architectures and real-time systems
          , where I develop high-performance solutions using Kafka, Kubernetes, and
          modern web technologies.
        </p>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
          Experienced in Agile methodologies, working within cross-functional teams to
          deliver production-ready solutions. I bring expertise in Python, FastAPI,
          Node.js, React, Next.js, and cloud infrastructure, with a strong focus on
          containerization, CI/CD, and scalable system design.
        </p>
      </div>
    </div>
  );
}

