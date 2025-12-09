export default function Hero() {
  return (
    <div className="flex flex-col gap-6">
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
