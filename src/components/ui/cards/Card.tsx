import { motion } from "framer-motion";

export default function Card() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="
        group relative w-full max-w-sm overflow-hidden
        rounded-2xl border border-zinc-200 bg-white p-8
        shadow-[0_1px_3px_rgba(0,0,0,0.05)] transition-all
        hover:border-zinc-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)]
        dark:border-zinc-800 dark:bg-[#09090b] dark:shadow-none
        dark:hover:border-zinc-700
      "
    >
      {/* 1. Subtle Gradient Shine (Dark Mode Only) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-zinc-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:block hidden" />

      <div className="relative z-10">
        <h3 className="mb-2 text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Card Title
        </h3>

        <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          This is a simple card component used to display small pieces of
          information with a clean layout and subtle elevation.
        </p>
      </div>

      {/* 2. Bottom "Edge" Highlight for depth */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-800" />
    </motion.div>
  );
}
