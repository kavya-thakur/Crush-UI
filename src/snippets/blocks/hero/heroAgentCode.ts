export const heroAgentCode = `
import { motion } from "framer-motion";
import { Play, ArrowRight, Zap } from "lucide-react";

const HeroAgents = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white pt-20 md:pt-32 dark:bg-[#030303]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 z-0 h-[600px] w-full -translate-x-1/2 opacity-[0.03] dark:opacity-[0.05] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          {/* Subtle Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50/50 px-3 py-1 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <Zap size={12} className="text-amber-500 fill-amber-500/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400">
              Autonomous Intelligence
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl font-semibold tracking-tighter text-zinc-950 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            Agents that do the work. <br />
            <span className="text-zinc-400 dark:text-zinc-600">
              Approvals that keep you safe.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-500 md:text-xl dark:text-zinc-400"
          >
            Deploy AI agents that plan, act through your tools, and report
            outcomes—without changing how your teams work.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button className="flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 active:scale-95 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
              Start your free trial
              <ArrowRight size={16} />
            </button>

            <button className="flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-white/5">
              <Play size={14} className="fill-current" />
              View role based demos
            </button>
          </motion.div>
        </div>

        {/* 3D Visual Stage */}
        <div className="relative mt-20 lg:mt-0">
          <div className="perspective-distant relative min-h-[400px] w-full pt-10 md:min-h-[600px]">
            {/* Background Image (Lower) */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotateY: 20, rotateX: 30 }}
              animate={{
                opacity: 1,
                x: 60,
                rotateY: 20,
                rotateX: 35,
                rotateZ: -10,
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-0 top-0 w-[80%] overflow-hidden rounded-2xl border border-zinc-200 shadow-2xl dark:border-zinc-800"
            >
              <img
                src="https://assets.aceternity.com/screenshots/4.jpg"
                alt="Interface Preview 1"
                className="w-full object-cover"
              />
            </motion.div>

            {/* Foreground Image (Higher) */}
            <motion.div
              initial={{ opacity: 0, x: 120, y: 50, rotateY: 20, rotateX: 30 }}
              animate={{
                opacity: 1,
                x: 20,
                y: 80,
                rotateY: 20,
                rotateX: 35,
                rotateZ: -10,
              }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute right-20 top-20 z-20 w-[70%] overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] dark:border-zinc-700/50"
            >
              <div className="flex h-8 items-center gap-1.5 border-b border-zinc-100 bg-zinc-50/80 px-4 dark:border-zinc-800 dark:bg-zinc-900/80">
                <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <div className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              </div>
              <img
                src="https://assets.aceternity.com/screenshots/3.jpg"
                alt="Interface Preview 2"
                className="w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-30 h-40 w-full bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#030303] dark:via-[#030303]/80" />
    </section>
  );
};

export default HeroAgents;
`;
