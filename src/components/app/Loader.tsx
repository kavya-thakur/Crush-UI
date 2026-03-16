import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-4 transition-opacity duration-300">
      {/* The Animated Logo/Icon */}
      <div className="relative flex h-12 w-12 items-center justify-center">
        {/* Outer Ring Animation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-zinc-200 border-t-black dark:border-zinc-800 dark:border-t-white"
        />

        {/* Subtle Inner Pulse */}
        <motion.div
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-2 w-2 rounded-full bg-black dark:bg-white"
        />
      </div>

      {/* Modern Minimalist Text */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[13px] font-medium tracking-widest text-zinc-500 uppercase dark:text-zinc-400"
      >
        Updating
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            times: [0, 0.5, 1],
          }}
        >
          ...
        </motion.span>
      </motion.span>
    </div>
  );
};

export default Loader;
