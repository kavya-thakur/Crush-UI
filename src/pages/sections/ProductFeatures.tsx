import { motion } from "framer-motion";

// --- Sub-components for cleaner JSX ---

const TechnicalGrid = () => (
  <div
    className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none 
    [background-image:radial-gradient(circle_at_center,#000_1px,transparent_1px)] 
    dark:[background-image:radial-gradient(circle_at_center,#fff_1px,transparent_1px)] 
    [background-size:24px_24px]"
  />
);

const FullBentoGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 bg-white dark:bg-[#030303] selection:bg-zinc-900 selection:text-white">
      {/* Editorial Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="space-y-4">
          <div className="h-[1px] w-12 bg-zinc-900 dark:bg-zinc-100" />
          <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-900 dark:text-zinc-50">
            Engineered for <br />
            <span className="text-zinc-400 dark:text-zinc-600">
              Visual Architects.
            </span>
          </h1>
        </div>
        <aside className="max-w-xs text-[10px] text-zinc-500 leading-relaxed font-mono uppercase tracking-widest border-l border-zinc-100 dark:border-zinc-800 pl-4">
          <p>// 01. Performance First</p>
          <p>// 02. Type-Safe Inputs</p>
          <p>// 03. Motion Orchestrated</p>
        </aside>
      </header>

      {/* 19-Column Grid System */}
      <div className="grid grid-cols-1 md:grid-cols-19 gap-4 auto-rows-[320px]">
        {/* 1. THE INSPECTOR (Tall - 5 cols) */}
        <div className="md:col-span-5 md:row-span-2 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] p-1">
          <div className="h-full w-full rounded-[2.3rem] bg-white dark:bg-[#080808] p-8 flex flex-col justify-between overflow-hidden relative transform-gpu">
            <div className="z-10">
              <h3 className="text-xl font-medium tracking-tight dark:text-zinc-100">
                Component Inspector
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Automatic layout detection with built-in accessibility presets.
              </p>
            </div>

            <div className="relative flex-1 flex items-center justify-center mt-10">
              <div className="relative w-full max-w-[240px] aspect-video rounded-xl border-2 border-dashed border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <motion.div
                  initial={{ width: "40%" }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-10 rounded-lg bg-zinc-900 dark:bg-zinc-100 flex items-center px-4 justify-between shadow-2xl"
                >
                  <div className="h-1 w-8 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
                  <div className="h-3 w-3 rounded-full bg-zinc-500" />
                </motion.div>
                <div className="absolute top-0 left-0 -translate-x-2 -translate-y-6 text-[9px] font-mono text-zinc-400 uppercase tracking-tighter">
                  x: 124px
                </div>
                <div className="absolute inset-0 border border-blue-500/20 bg-blue-500/[0.02] m-[-8px] rounded-2xl pointer-events-none" />
              </div>
            </div>
            <TechnicalGrid />
          </div>
        </div>

        {/* 2. CURVE ORCHESTRATOR (Wide - 7 cols) */}
        <div className="md:col-span-7 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] p-1">
          <div className="h-full w-full rounded-[2.3rem] bg-white dark:bg-[#080808] p-8 overflow-hidden relative flex flex-col">
            <h3 className="text-xl font-medium tracking-tight dark:text-zinc-100">
              Easing Presets
            </h3>
            <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-[200px]">
              Professional-grade "Crush" interactions via Bezier curves.
            </p>

            <div className="flex-1 relative mt-4 h-full">
              <svg
                viewBox="0 0 200 100"
                className="absolute inset-0 w-full h-full text-zinc-200 dark:text-zinc-800"
              >
                <motion.path
                  d="M 20 80 C 40 10 160 10 180 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.circle
                  r="4"
                  fill="currentColor"
                  className="text-blue-500"
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

        {/* 3. PERFORMANCE (4 cols) */}
        <div className="md:col-span-7 lg:col-span-7 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] p-1">
          {/* Note: In a 19-col grid, the math usually leaves 7 cols remaining if using 5 and 7 for the others */}
          <div className="h-full w-full rounded-[2.3rem] bg-zinc-900 dark:bg-[#0d0d0d] p-8 flex flex-col justify-between transform-gpu">
            <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              SYSTEMS_NOMINAL // 60FPS
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-white tracking-tight">
                Runtime Native
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-[240px]">
                Hardware-accelerated CSS transforms and GPU-composited layers
                for buttery smooth interaction.
              </p>
            </div>
          </div>
        </div>

        {/* 4. ATOMIC ARCHITECTURE (Wide - 14 cols to balance the 5-col tall card) */}
        <div className="md:col-span-14 group relative overflow-hidden rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 bg-zinc-50/30 dark:bg-[#080808] p-1">
          <div className="h-full w-full rounded-[2.3rem] bg-white dark:bg-[#080808] p-8 flex items-center relative overflow-hidden">
            <div className="w-1/2 z-10">
              <h3 className="text-xl font-medium tracking-tight dark:text-zinc-100">
                Atomic Architecture
              </h3>
              <p className="mt-2 text-sm text-zinc-500 leading-relaxed max-w-[300px]">
                Built on low-level primitives that scale with your application
                logic.
              </p>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center gap-4 p-4">
              {[0.6, 1, 0.8].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                  className="flex-1 h-32 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col p-4 gap-2 shadow-inner"
                >
                  <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800" />
                  <div className="h-2 w-2/3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </motion.div>
              ))}
            </div>
            <TechnicalGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullBentoGrid;
