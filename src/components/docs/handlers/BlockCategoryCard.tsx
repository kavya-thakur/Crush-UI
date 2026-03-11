import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlockCategoryCard({ cat, index }: any) {
  const PreviewComponent = cat.previewBlock.component;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        delay: index * 0.08,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to={`/blocks/category/${cat.slug}`}
        className="group relative flex flex-col focus:outline-none"
      >
        {/* --- THE STAGE --- */}
        {/* We use a slightly warmer zinc in light and a deep, rich zinc in dark */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 p-2 transition-all duration-500 group-hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/30 dark:group-hover:border-zinc-600">
          {/* Blueprint Accents */}
          <span className="absolute left-4 top-4 z-50 text-zinc-300 dark:text-zinc-700 text-xl font-light pointer-events-none group-hover:text-zinc-500 transition-colors">
            +
          </span>
          <span className="absolute right-4 top-4 z-50 text-zinc-300 dark:text-zinc-700 text-xl font-light pointer-events-none group-hover:text-zinc-500 transition-colors">
            +
          </span>

          {/* Inner Canvas: This is where the depth happens */}
          <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-zinc-100 bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] dark:border-white/5 dark:bg-[#080809] dark:shadow-[inset_0_4px_30px_rgba(0,0,0,0.7)]">
            {/* Soft Grid Overlay */}
            <div
              className="absolute inset-0 z-10 opacity-[0.4] dark:opacity-[0.2]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "24px 24px",
                color: "rgb(113 113 122 / 0.3)",
                maskImage:
                  "radial-gradient(circle at center, black, transparent 90%)",
              }}
            />

            {/* LIVE RENDER AREA (No Iframe) */}
            {/* We use 'isolate' to prevent the previewed component's styles (like z-index or mix-blend) from affecting the card */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.05] isolate">
              <div
                style={{ transform: "scale(0.28)", transformOrigin: "center" }}
              >
                <div className="h-[900px] w-[1400px] rounded-[40px] overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                  {/* We render the component directly. Theme sync is now automatic! */}
                  {PreviewComponent && <PreviewComponent />}
                </div>
              </div>
            </div>

            {/* Premium Polish: Gradient overlay that highlights the center on hover */}
            <div className="absolute inset-0 z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/5" />
          </div>
        </div>

        {/* --- METADATA AREA --- */}
        <div className="mt-5 flex flex-col px-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white">
              {cat.name}
            </h3>

            {/* Unit Badge */}
            <div className="flex items-center gap-2">
              <div className="h-px w-4 bg-zinc-200 dark:bg-zinc-800" />
              <span className="text-[10px] font-mono font-bold text-zinc-400 dark:text-zinc-500">
                {cat.count.toString().padStart(2, "0")} UNITS
              </span>
            </div>
          </div>

          <div className="relative mt-1.5 h-5 overflow-hidden">
            <p className="text-sm font-medium text-zinc-500 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-0">
              Explore all variants
            </p>
            <p className="absolute inset-0 text-sm font-semibold text-zinc-900 opacity-0 transition-all duration-500 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 dark:text-zinc-300">
              Launch Explorer &rarr;
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
