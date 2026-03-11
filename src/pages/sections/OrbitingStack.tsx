import React from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Layers,
  Zap,
  Code2,
  Component,
  Box,
  MousePointer2,
  Cpu,
} from "lucide-react";

const ORBITS = [
  { size: 750, duration: "20s", icons: [<Layout />, <Box />, <Cpu />] },
  { size: 500, duration: "45s", icons: [<Layers />, <Zap />, <Code2 />] },
  { size: 250, duration: "30s", icons: [<Component />, <MousePointer2 />] },
];

const OrbitingCTA = () => {
  return (
    <section className="relative flex bg-neutral-50  min-h-[400px] max-w-7xl mx-auto px-4 py-24 rounded-2xl flex-col items-center justify-center overflow-hidden  dark:bg-[#030303]">
      {/* 1. The Orbit System: Centered and Aligned */}
      <div className="absolute inset-x-0 -top-48 mx-auto flex h-[800px] w-full items-center justify-center lg:-top-125">
        {/* Static Background Rings */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-40">
          {ORBITS.map((orbit, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-zinc-600 dark:border-zinc-800"
              style={{ width: `${orbit.size}px`, height: `${orbit.size}px` }}
            />
          ))}
        </div>

        {/* 2. Rotating Icon Layer */}
        {ORBITS.map((orbit, orbitIdx) => (
          <div
            key={orbitIdx}
            className="absolute rounded-full"
            style={{
              width: `${orbit.size}px`,
              height: `${orbit.size}px`,
              animation: `orbit ${orbit.duration} linear infinite`,
            }}
          >
            {orbit.icons.map((icon, iconIdx) => {
              const angle = (360 / orbit.icons.length) * iconIdx;
              const radius = orbit.size / 2;
              return (
                <div
                  key={iconIdx}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px)`,
                  }}
                >
                  {/* Icon Card: Matching the Screenshot's White Square look */}
                  <div
                    className="flex size-16 items-center justify-center rounded-2xl border border-zinc-100 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.04)] dark:border-zinc-800 dark:bg-zinc-900/80 dark:backdrop-blur-md"
                    style={{
                      animation: `counter-orbit ${orbit.duration} linear infinite`,
                    }}
                  >
                    <div className="text-zinc-400 dark:text-zinc-500">
                      {React.cloneElement(icon as React.ReactElement, {
                        size: 24,
                        strokeWidth: 1.2,
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* 3. Hero Content: Exact Typography Spacing */}
      <div className="relative z-10 mt-12 flex flex-col items-center text-center px-6">
        <h2 className="text-registry-hero max-w-4xl text-5xl font-semibold tracking-tighter text-gradient md:text-6xl">
          Connect your Current Stack <br />
          and Start Automating
        </h2>

        {/* 4. The Premium "Tactile" Button from your request */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10"
        >
          <button className="flex cursor-pointer bg-neutral-900 px-4 py-2 font-medium text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-white/20 ring-offset-2 ring-offset-neutral-900 transition-all duration-200 ring-inset hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40 active:scale-98 dark:bg-white dark:text-black dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)_inset] dark:ring-black/20 dark:ring-offset-white dark:hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)_inset] dark:hover:ring-black/50 h-14 w-full items-center justify-center rounded-lg text-center text-base sm:w-52">
            Start Building For Free
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default OrbitingCTA;
