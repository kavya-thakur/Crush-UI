import { motion } from "motion/react";

export const ColorFillingButton = () => {
  return (
    <motion.div>
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="group relative cursor-pointer px-8 sm:px-10 py-4 sm:py-5 bg-[#1A1A1A] text-white rounded-full overflow-hidden transition-all duration-300 shadow-md"
      >
        <span className="relative  z-10 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-medium whitespace-nowrap">
          Schedule a Consultation
        </span>
        <div className="absolute inset-0 bg-[#6B705C] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
      </motion.button>
    </motion.div>
  );
};
