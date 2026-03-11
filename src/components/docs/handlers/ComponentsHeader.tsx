import { motion } from "framer-motion";

export default function ComponentsHeader() {
  return (
    <header className="mb-16 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-4xl font-medium tracking-tighter text-gradient sm:text-5xl md:text-6xl">
          Components
        </h1>

        <p className="mt-6 text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Beautifully crafted UI components built with{" "}
          <span className="text-zinc-900 dark:text-zinc-200 font-medium">
            Framer Motion
          </span>{" "}
          and{" "}
          <span className="text-zinc-900 dark:text-zinc-200 font-medium">
            Tailwind CSS
          </span>
          . Optimized for performance and aesthetic precision.
        </p>
      </motion.div>
    </header>
  );
}
