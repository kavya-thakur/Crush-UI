// import React from "react";

// const FullBentoGrid = () => {
//   return (
//     <section
//       className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-20 lg:py-32"
//       id="product"
//     >
//       <h1 className="text-balance text-2xl tracking-tight text-neutral-700 dark:text-neutral-300 md:text-4xl lg:text-5xl font-semibold">
//         Autonomous AI workflow features
//       </h1>
//       <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 md:text-base lg:text-lg">
//         From prototype to production, autonomously
//       </p>

//       <div className="mx-auto mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:grid-rows-2">
//         {/* 1. EASY AUTH SETUP (Tall Card - Spans 2 Rows) */}
//         <div className="rounded-2xl bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10 md:row-span-2 flex flex-col overflow-hidden">
//           <div className="p-6">
//             <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
//               Easy auth setup
//             </h3>
//             <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
//               Get started in minutes with our simple authentication flow.
//             </p>
//           </div>

//           {/* Skeleton UI for Auth */}
//           <div className="relative flex-1 bg-neutral-50/50 dark:bg-neutral-800/20 p-6 flex items-center justify-center">
//             <div className="w-full max-w-[200px] rounded-xl bg-white p-5 shadow-xl ring-1 ring-black/5 dark:bg-neutral-950">
//               <div className="flex items-center gap-2 mb-4">
//                 <div className="size-4 rounded bg-blue-500" />
//                 <div className="h-2 w-12 rounded bg-neutral-200 dark:bg-neutral-800" />
//               </div>
//               <div className="space-y-2">
//                 <div className="h-6 w-full rounded bg-neutral-100 dark:bg-neutral-800" />
//                 <div className="h-6 w-full rounded bg-neutral-100 dark:bg-neutral-800" />
//                 <div className="h-7 w-full rounded bg-neutral-900 dark:bg-white" />
//               </div>
//             </div>
//             {/* Testimonial Overlay */}
//             <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white p-3 shadow-lg ring-1 ring-black/5 dark:bg-neutral-800">
//               <p className="text-[10px] text-neutral-600 dark:text-neutral-300 italic">
//                 "The SDK just works out of the box."
//               </p>
//               <div className="mt-2 flex items-center gap-2">
//                 <div className="size-4 rounded-full bg-neutral-200" />
//                 <span className="text-[8px] font-bold dark:text-white">
//                   Sarah Chen
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* 2. YOU'RE SECURE EVERYWHERE (Wide Card - Spans 2 Columns) */}
//         <div className="md:col-span-2 rounded-2xl bg-white shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10 flex flex-col overflow-hidden">
//           <div className="p-6">
//             <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
//               You're secure, everywhere
//             </h3>
//             <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
//               Enterprise-grade security that follows your users across the
//               globe. Built-in encryption.
//             </p>
//           </div>

//           {/* Grid Background Effect */}
//           <div className="relative flex-1 min-h-[160px] bg-neutral-50 dark:bg-neutral-950 overflow-hidden">
//             <div
//               className="absolute inset-0 opacity-[0.15] dark:opacity-[0.3]"
//               style={{
//                 backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
//                 backgroundSize: "24px 24px",
//               }}
//             />
//             {/* Simple Security Graphic */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="h-24 w-40 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
//                 <div className="size-8 rounded-full bg-green-500/20 flex items-center justify-center">
//                   <div className="size-3 rounded-full bg-green-500" />
//                 </div>
//               </div>
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent dark:from-neutral-900" />
//           </div>
//         </div>

//         {/* 3. SCALABLE INFRASTRUCTURE (Small Card) */}
//         <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10">
//           <div className="size-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center mb-4">
//             <div className="size-4 border-2 border-blue-500 rounded-sm" />
//           </div>
//           <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
//             Scalable Infrastructure
//           </h3>
//           <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
//             Handle millions of requests without breaking a sweat.
//           </p>
//         </div>

//         {/* 4. REAL-TIME ANALYTICS (Small Card) */}
//         <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 shadow-black/10 ring-black/10 dark:bg-neutral-900 dark:shadow-white/5 dark:ring-white/10">
//           <div className="size-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mb-4">
//             <div className="size-4 bg-emerald-500 rounded-full" />
//           </div>
//           <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
//             Real-time Analytics
//           </h3>
//           <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
//             Monitor every event and interaction as they happen live.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FullBentoGrid;

import React from "react";
import { motion } from "framer-motion";

const FullBentoGrid = () => {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-24 bg-white dark:bg-[#030303]"
      id="product"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="h-px w-12 bg-zinc-900 dark:bg-zinc-100" />
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-900 dark:text-zinc-50">
            Engineered for <br />{" "}
            <span className="text-zinc-400 dark:text-zinc-600">
              Visual Architects.
            </span>
          </h1>
        </div>
        <p className="max-w-xs text-sm text-zinc-500 leading-relaxed font-mono uppercase tracking-tight">
          // 01. Performance First <br />
          // 02. Type-Safe Inputs <br />
          // 03. Motion Orchestrated
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[320px]">
        {/* 1. THE INSPECTOR (Tall - 5 cols) */}
        <div className="md:col-span-5 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] p-1">
          <div className="h-full w-full rounded-[2.3rem] bg-white dark:bg-[#080808] p-8 flex flex-col justify-between overflow-hidden relative">
            <div className="z-10">
              <h3 className="text-xl font-medium tracking-tight dark:text-zinc-100">
                Component Inspector
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Automatic layout detection. Every component ships with built-in
                accessibility and padding presets.
              </p>
            </div>

            {/* SKELETON: Technical Blueprint of a Button */}
            <div className="relative flex-1 flex items-center justify-center mt-10">
              <div className="relative w-full max-w-[240px] aspect-video rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <motion.div
                  initial={{ width: "40%" }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-10 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center px-4 justify-between"
                >
                  <div className="h-1 w-8 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
                  <div className="h-3 w-3 rounded-full bg-zinc-500" />
                </motion.div>

                {/* Visual Labels (The "Craft" part) */}
                <div className="absolute top-0 left-0 -translate-x-2 -translate-y-6 text-[9px] font-mono text-zinc-400 uppercase">
                  x: 124px
                </div>
                <div className="absolute bottom-0 right-0 translate-x-6 translate-y-2 rotate-90 text-[9px] font-mono text-zinc-400 uppercase">
                  y: 48px
                </div>
                <div className="absolute inset-0 border border-blue-500/20 bg-blue-500/[0.02] m-[-8px] rounded-2xl pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. CURVE ORCHESTRATOR (Wide - 7 cols) */}
        <div className="md:col-span-7 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] p-1">
          <div className="h-full w-full rounded-[2.3rem] bg-white dark:bg-[#080808] p-8 overflow-hidden relative flex flex-col md:flex-row">
            <div className="md:w-1/2 relative z-10">
              <h3 className="text-xl font-medium tracking-tight dark:text-zinc-100">
                Easing Presets
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Curated Bezier curves for professional-grade "Crush"
                interactions. No more linear transitions.
              </p>
            </div>

            {/* SKELETON: Bezier Curve Path */}
            <div className="flex-1 relative h-full min-h-[160px]">
              <svg
                viewBox="0 0 200 100"
                className="absolute inset-0 w-full h-full text-zinc-200 dark:text-zinc-800"
              >
                <motion.path
                  d="M 20 80 C 40 10 160 10 180 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                  r="3"
                  fill="currentColor"
                  className="text-zinc-900 dark:text-zinc-100"
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{
                    offsetPath: "path('M 20 80 C 40 10 160 10 180 80')",
                  }}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* 3. PERFORMANCE / THEME (Small - 4 cols) */}
        <div className="md:col-span-4 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] p-1">
          <div className="h-full w-full rounded-[2.3rem] bg-zinc-900 dark:bg-[#0d0d0d] p-8 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />{" "}
              60FPS STABLE
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white">Runtime Native</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Direct hardware acceleration via CSS transforms and
                GPU-composited layers.
              </p>
            </div>
          </div>
        </div>

        {/* 4. THE BLUEPRINT GRID (Wide - 8 cols) */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] p-1">
          <div className="h-full w-full rounded-[2.3rem] bg-white dark:bg-[#080808] p-8 flex items-center relative overflow-hidden">
            <div className="w-1/2 z-10">
              <h3 className="text-xl font-medium tracking-tight dark:text-zinc-100">
                Atomic Architecture
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-[280px]">
                Built on top of a low-level primitive system that scales with
                your application logic.
              </p>
            </div>

            {/* SKELETON: Recursive Div Stacking */}
            <div className="w-1/2 h-full flex items-center justify-center gap-4 p-8">
              {[0.6, 1, 0.8].map((s, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  className="flex-1 h-full rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col p-4 gap-2"
                >
                  <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="h-2 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </motion.div>
              ))}
            </div>

            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] [background-image:radial-gradient(#000_1px,transparent_1px)] dark:[background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullBentoGrid;
