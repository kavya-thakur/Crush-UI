import React from "react";
import { motion, type Variants } from "framer-motion";

const cardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.6 },
  },
};

const barVariants: Variants = {
  initial: { height: 0 },
  animate: (height: number) => ({
    height: `${height}px`, // Explicit unit for better TS/Framer handling
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] }, // Custom cubic-bezier for "pop"
  }),
};

export const BentoAnalyticsCard: React.FC = () => {
  return (
    /* The key to centering is the parent's flex properties */
    <div className="flex items-center justify-center w-full">
      <motion.div
        variants={cardVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-sm w-full p-6 rounded-[2.5rem] bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-xl group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
      >
        {/* Top Visual Section */}
        <div className="h-44 w-full bg-gray-50 dark:bg-neutral-800/40 rounded-[1.8rem] mb-6 flex items-end justify-around p-6 overflow-hidden relative border border-black/[0.03] dark:border-white/[0.03]">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px]" />

          {/* Animated Bars */}
          {[60, 110, 80, 130, 95, 115].map((h, i) => (
            <motion.div
              key={i}
              custom={h}
              variants={barVariants}
              className="w-7 bg-gradient-to-t from-sky-500 to-cyan-300 rounded-t-lg relative z-10 shadow-[0_-4px_12px_rgba(14,165,233,0.2)] group-hover:from-indigo-500 group-hover:to-purple-300 transition-colors duration-700"
            />
          ))}

          {/* Glassmorphism Overlay on hover */}
          <div className="absolute inset-0 bg-white/10 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        {/* Content Section */}
        <div className="space-y-2 px-1">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
              Live Traffic
            </h3>
          </div>
          <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Real-time analytics showing a{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              12% increase
            </span>{" "}
            in user retention this week.
          </p>
        </div>

        {/* Hover Shine Effect */}
        <div className="absolute -inset-full h-full w-1/2 z-50 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-shine" />
      </motion.div>
    </div>
  );
};
