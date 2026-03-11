import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ComponentCard({ slug, component, index }: any) {
  const PreviewComponent = component.component;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.04,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link to={`/components/${slug}`} className="group block w-full">
        {/* --- The Recessed Stage --- */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 p-2 transition-all duration-500 dark:border-zinc-800 dark:bg-zinc-900/50 group-hover:border-zinc-400 dark:group-hover:border-zinc-700">
          {/* Internal Canvas with Hardware Depth */}
          <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-zinc-100 bg-white dark:border-white/5 dark:bg-[#080809] shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[inset_0_4px_24px_rgba(0,0,0,0.6)]">
            {/* Soft Grid (Unified with BlockCategoryCard) */}
            <div
              className="absolute inset-0 z-10 opacity-[0.3] dark:opacity-[0.15]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "20px 20px",
                color: "rgb(113 113 122 / 0.3)",
                maskImage:
                  "radial-gradient(circle at center, black, transparent 80%)",
              }}
            />

            {/* LIVE RENDER ENGINE */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.06] group-hover:rotate-1 isolate">
              <div
                className="origin-center transform-gpu"
                style={{ transform: "scale(0.32)" }}
              >
                {/* Fixed Size Container: 
                   Prevents layout shifts and keeps components looking sharp 
                */}
                <div className="h-[800px] w-[1200px] rounded-[40px] overflow-hidden border border-zinc-200/50 dark:border-white/10 shadow-2xl bg-white dark:bg-zinc-950 isolate">
                  {PreviewComponent && (
                    <PreviewComponent {...component.previewProps} />
                  )}
                </div>
              </div>
            </div>

            {/* Hover Interaction Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-[1px]">
              <div className="translate-y-2 rounded-full border border-zinc-200 bg-white px-5 py-2 text-[11px] font-bold text-zinc-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0 dark:border-white/10 dark:bg-zinc-900 dark:text-white">
                View Details
              </div>
            </div>

            {/* Corner Blueprint Accents */}
            <span className="absolute left-4 top-4 z-40 text-zinc-300 dark:text-zinc-800 text-lg font-light transition-colors group-hover:text-zinc-500">
              +
            </span>
            <span className="absolute right-4 top-4 z-40 text-zinc-300 dark:text-zinc-800 text-lg font-light transition-colors group-hover:text-zinc-500">
              +
            </span>
          </div>
        </div>

        {/* --- Metadata Section --- */}
        <div className="mt-5 px-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-bold tracking-tight text-zinc-800 transition-colors group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white">
              {component.title}
            </h3>
            <div className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="text-[10px] font-mono font-black text-zinc-400 dark:text-zinc-600">
                STABLE
              </span>
            </div>
          </div>

          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {component.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
