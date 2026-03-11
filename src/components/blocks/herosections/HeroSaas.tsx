import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";
// import AnimatedButton from "./AnimatedButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-[#030303] flex flex-col items-center">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[30%] h-[60%] rounded-full bg-zinc-100 dark:bg-zinc-800/20 blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center mt-24 lg:mt-32 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Shimmer Badge */}
        <motion.div
          variants={itemVariants}
          className="group flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 backdrop-blur-md mb-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer"
        >
          <Sparkles size={12} className="text-zinc-400 fill-zinc-400/20" />
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
            v2.0 is now live
          </span>
          <ChevronRight
            size={12}
            className="text-zinc-400 group-hover:translate-x-0.5 transition-transform"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="max-w-4xl text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[1.05] text-zinc-950 dark:text-white"
          variants={itemVariants}
        >
          AI-Powered{" "}
          <span className="text-zinc-400 dark:text-zinc-600">Tech</span> <br />
          Career Finder.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed text-zinc-500 dark:text-zinc-400"
          variants={itemVariants}
        >
          Discover your ideal tech career path with our{" "}
          <span className="text-zinc-900 dark:text-zinc-100 font-medium">
            AI-driven
          </span>{" "}
          platform. Built for the next generation of engineers.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          variants={itemVariants}
        >
          {/* <Link to="/generate">
            <AnimatedButton
              text="Start Now"
              bg="bg-black dark:bg-white"
              textColor="text-white dark:text-black"
            />
          </Link> */}
          <button className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors">
            Learn More
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>

        {/* Mockup Frame */}
        <motion.div
          variants={itemVariants}
          className="mt-20 w-full max-w-5xl relative"
        >
          <div className="relative rounded-[24px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-2xl shadow-black/5">
            {/* Minimal Header */}
            <div className="h-10 border-b border-zinc-100 dark:border-zinc-900 flex items-center px-4 gap-1.5 bg-zinc-50/50 dark:bg-zinc-900/50">
              <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
              <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <img
              src="https://assets.aceternity.com/pro/landing/1.webp"
              alt="Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
