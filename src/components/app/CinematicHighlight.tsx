"use client";

import React from "react";
import { motion } from "framer-motion";

interface CinematicHighlightProps {
  children: React.ReactNode;
  className?: string;
}

const CinematicHighlight: React.FC<CinematicHighlightProps> = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`group relative inline-block rounded-sm bg-neutral-100 px-6 py-2 transition-all duration-300 hover:bg-neutral-900 dark:bg-neutral-800/90 dark:hover:bg-white/5 ${className}`}
    >
      {/* 1. Contained Warp Beams (Exactly like the image) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-sm">
        <WarpBeam top="15%" delay={0} duration={1.2} />
        <WarpBeam top="35%" delay={0.4} duration={1.8} />
        <WarpBeam top="65%" delay={0.2} duration={1.5} />
        <WarpBeam top="85%" delay={0.6} duration={2} />
      </div>

      {/* 2. Hover Speed Particles (Rapid Dust) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <SpeedParticle key={i} index={i} />
        ))}
      </div>

      {/* 3. Text Content */}
      <motion.span
        variants={{
          hover: {
            x: [0, -2, 0.9, 0],
            transition: { repeat: Infinity, duration: 0.1 },
            // scale: [0.9, 0.85, 0.8],
          },
        }}
        className="relative z-20 inline-block text-neutral-800 transition-colors duration-300 group-hover:text-neutral-100 dark:text-neutral-100 dark:group-hover:text-white"
      >
        {children}
      </motion.span>

      {/* 4. Technical Corner Dots (Reference Image Style) */}
      <div className="absolute -top-[3px] -left-[3px] h-2.5 w-2.5 rounded-full bg-neutral-400/50 dark:bg-neutral-600/50 group-hover:bg-blue-500 transition-colors" />
      <div className="absolute -top-[3px] -right-[3px] h-2.5 w-2.5 rounded-full bg-neutral-400/50 dark:bg-neutral-600/50 group-hover:bg-blue-500 transition-colors" />
      <div className="absolute -bottom-[3px] -left-[3px] h-2.5 w-2.5 rounded-full bg-neutral-400/50 dark:bg-neutral-600/50 group-hover:bg-blue-500 transition-colors" />
      <div className="absolute -bottom-[3px] -right-[3px] h-2.5 w-2.5 rounded-full bg-neutral-400/50 dark:bg-neutral-600/50 group-hover:bg-blue-500 transition-colors" />
    </motion.div>
  );
};

/* --- Warp Beam: Short, Sharp, Contained --- */
const WarpBeam = ({
  top,
  delay,
  duration,
}: {
  top: string;
  delay: number;
  duration: number;
}) => (
  <motion.div
    initial={{ x: "-20%", opacity: 0 }}
    animate={{
      x: ["-20%", "1000%"],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
    style={{ top }}
    className="absolute h-[1.4px] w-12 bg-gradient-to-r from-transparent via-blue-500/80 to-transparent"
  />
);

/* --- Speed Particle: High-Frequency Hover Dots --- */
const SpeedParticle = ({ index }: { index: number }) => (
  <motion.div
    variants={{
      initial: { x: "-10%", opacity: 0 },
      hover: {
        x: "110%",
        // opacity: [0, 1, 0],
        opacity: 1,
        transition: {
          duration: 0.3 + Math.random() * 0.4,
          repeat: Infinity,
          ease: "linear",
          delay: index * 0.08,
        },
      },
    }}
    style={{
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 22 + 2}px`,
    }}
    className="absolute h-[1px] bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,1)]"
  />
);

export default CinematicHighlight;
