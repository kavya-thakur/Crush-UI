import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

const Hero = () => {
  const heading = "AI-Powered Tech Career Finder.";
  const words = heading.split(" ");

  // Staggered Blur-In Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        delay: 0.8,
      },
    },
  };

  return (
    <div className="relative min-h-[110vh] w-full overflow-hidden bg-white dark:bg-[#030303] flex flex-col items-center selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* 1. Technical Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] brightness-100 contrast-150 [background-image:url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Large Radial Glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-zinc-100 dark:bg-zinc-800/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />

        {/* Floating Grid (Aceternity style) */}
        <div className="absolute inset-0 [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background-image:radial-gradient(#161617_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center mt-32 lg:mt-40 text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Shimmer Badge: Staggered Blur */}
        <motion.div
          variants={wordVariants}
          className="group relative flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-md mb-10 transition-all hover:border-zinc-300 dark:hover:border-white/20"
        >
          <Sparkles size={12} className="text-zinc-400 animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            v2.0 is now live
          </span>
          <ChevronRight
            size={12}
            className="text-zinc-400 group-hover:translate-x-0.5 transition-transform"
          />
        </motion.div>

        {/* Heading: Staggered Word Reveal */}
        <h1 className="max-w-4xl text-5xl md:text-7xl lg:text-[6rem] font-medium tracking-[-0.05em] leading-[0.95] [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)] ">
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="inline-block mr-[0.2em] last:mr-0 text-gradient"
            >
              {word === "Career" ? (
                <span className="text-zinc-400 dark:text-zinc-600 font-serif font-medium ">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Subheading: Fade Up */}
        <motion.p
          variants={fadeUpVariants}
          className="mt-10 max-w-2xl text-base md:text-xl leading-relaxed text-zinc-500 dark:text-zinc-400  tracking-tight"
        >
          Discover your ideal tech career path with our{" "}
          <span className="text-zinc-900 dark:text-zinc-100 underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4">
            AI-driven
          </span>{" "}
          platform. Built for the next generation of software engineers.
        </motion.p>

        {/* CTA Section: Magnetic Hover Feel */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <Link to="/generate">
            <button className="relative flex h-14 items-center justify-center rounded-xl bg-zinc-950 px-10 text-base font-bold text-white shadow-[0px_10px_20px_rgba(0,0,0,0.1)] transition-all hover:scale-[1.02] hover:bg-zinc-800 active:scale-[0.98] dark:bg-white dark:text-black dark:hover:bg-zinc-100">
              Start Building
            </button>
          </Link>

          <button className="group flex items-center gap-2 text-sm font-bold tracking-tight text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition-colors">
            View Components
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </motion.div>

        {/* Mockup Frame: Large Scale Entry */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 w-full max-w-6xl relative"
        >
          {/* Glass Card Effect */}
          <div className="relative rounded-[32px] border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 p-2 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.1)] dark:shadow-none">
            <div className="relative rounded-[24px] border border-zinc-200 dark:border-white/5 bg-white dark:bg-[#030303] overflow-hidden">
              {/* Fake Browser Top Bar */}
              <div className="h-12 border-b border-zinc-100 dark:border-white/5 flex items-center justify-between px-6 bg-zinc-50/50 dark:bg-zinc-900/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
                <div className="h-5 w-32 rounded-md bg-zinc-100 dark:bg-zinc-800" />
                <div className="w-4" />
              </div>

              <img
                src="https://assets.aceternity.com/pro/landing/1.webp"
                alt="Dashboard Preview"
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
