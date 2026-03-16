export const marqueCardCode = `
 import React from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export const MarqueCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen b dark:bg-neutral-950 transition-colors duration-500">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-sm w-full mx-auto p-[1px] rounded-[2.5rem] bg-gradient-to-b from-black/[0.1] to-transparent dark:from-white/[0.15] dark:to-transparent shadow-2xl group"
      >
        <div className="bg-white dark:bg-neutral-900 rounded-[2.4rem] p-8 border border-black/5 dark:border-white/5 relative overflow-hidden">
          {/* THE MARQUEE SECTION */}
          <div className="h-48 w-full relative mb-8 rounded-3xl bg-gray-100/50 dark:bg-neutral-800/40 overflow-hidden border border-black/[0.03] dark:border-white/[0.03]">
            {/* Soft Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-16 z-20 bg-gradient-to-r from-gray-100 dark:from-neutral-800 to-transparent opacity-100" />
            <div className="absolute inset-y-0 right-0 w-16 z-20 bg-gradient-to-l from-gray-100 dark:from-neutral-800 to-transparent opacity-100" />

            <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-40 group-hover:opacity-80 transition-opacity duration-700">
              {/* Marquee Row 1 */}
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-6"
              >
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-xl bg-black/5 dark:bg-white/5 flex-shrink-0 border border-black/5 dark:border-white/10"
                  />
                ))}
              </motion.div>

              {/* Marquee Row 2 */}
              <motion.div
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-6"
              >
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-xl bg-black/5 dark:bg-white/5 flex-shrink-0 border border-black/5 dark:border-white/10"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* TEXT CONTENT SECTION */}
          <motion.div
            variants={itemVariants}
            className="space-y-3 relative z-40"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Damn good card
              </h3>
              <span className="flex h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-[15px]">
              A card that showcases a set of tools that you use to create your
              product. Built with staggered marquees and magnetic physics.
            </p>
          </motion.div>

          {/* ACTION FOOTER */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between"
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-200 dark:bg-neutral-800"
                />
              ))}
            </div>
            <button className="text-sm font-bold bg-neutral-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-2xl hover:scale-105 active:scale-95 transition-transform duration-200">
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
`;
