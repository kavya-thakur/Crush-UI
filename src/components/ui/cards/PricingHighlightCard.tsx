import React from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
};

export const PricingHighlightCard: React.FC = () => {
  const features = [
    "Unlimited Projects",
    "24/7 Priority Support",
    "Advanced Analytics",
    "Custom Integrations",
    "Team Collaboration",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="max-w-sm w-full p-[1px] rounded-[2.5rem] bg-gradient-to-b from-zinc-200/50 via-transparent to-transparent dark:from-zinc-700/30 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group"
    >
      <div className="bg-white dark:bg-[#09090b] rounded-[2.4rem] p-8 relative overflow-hidden border border-zinc-100 dark:border-zinc-800">
        {/* Subtle Background Glow - Fixed Position */}
        <div className="absolute -top-24 -right-24 h-48 w-48 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />

        {/* Improved Scanning Beam - Triggered on Group Hover */}
        <motion.div
          initial={{ top: "-100%" }}
          whileHover={{ top: "120%" }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-indigo-500/[0.03] dark:via-indigo-400/[0.05] to-transparent z-0 pointer-events-none"
        />

        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <motion.span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                Most Popular
              </motion.span>
              <h3 className="text-4xl font-bold tracking-tight mt-4 text-zinc-900 dark:text-zinc-50">
                $49
                <span className="text-base font-normal text-zinc-400 dark:text-zinc-500 italic">
                  /mo
                </span>
              </h3>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-white/5 dark:via-white/10 dark:to-white/5 mb-8" />

          {/* Feature List */}
          <ul className="space-y-4">
            {features.map((feat, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 group/item"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20"
                >
                  <svg
                    className="h-3 w-3 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <span className="group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-200 transition-colors duration-200">
                  {feat}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Button Section */}
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative py-4 px-6 flex items-center justify-center rounded-2xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-semibold text-sm shadow-lg shadow-zinc-950/20 dark:shadow-none hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Get Started with Pro</span>
              <motion.div className="absolute inset-0 bg-indigo-500 opacity-0 hover:opacity-10 dark:hover:opacity-20 transition-opacity rounded-2xl" />
            </motion.button>
            <p className="text-center text-[11px] text-zinc-400 dark:text-zinc-500 mt-4 tracking-tight">
              30-day money back guarantee. No hidden fees.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
