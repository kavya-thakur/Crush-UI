import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blockRegistry } from "../../data/blockRegistry";

export default function BlockGallery() {
  const blocks = Object.entries(blockRegistry)
    .map(([slug, data]) => ({
      slug,
      ...data,
    }))
    .slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-0 pb-24">
      <header className="mb-16">
        <h2 className="text-5xl font-medium tracking-tight text-gradient sm:text-6xl">
          Crush UI{" "}
        </h2>

        <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">
          The ultimate foundation for your next SaaS. Explore our curated
          collection of high-performance React components and GSAP-powered
          blocks.
        </p>
      </header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {blocks.map((block) => {
          const PreviewComponent = block.component;

          return (
            <motion.div key={block.slug} variants={itemVariants}>
              <Link
                to={`/blocks/category/${block.category?.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative block h-full overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white p-3 transition-all duration-500 hover:border-zinc-400 dark:border-zinc-800 dark:bg-[#09090b] dark:hover:border-zinc-600"
              >
                {/* 1. Live Preview Area (The "Mini-Stage") */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.8rem] bg-zinc-50 dark:bg-zinc-950 ring-1 ring-zinc-200/50 dark:ring-zinc-800/50">
                  {/* Technical Background Grid */}
                  <div className="absolute inset-0 z-10 opacity-[0.2] dark:opacity-[0.4] [background-image:radial-gradient(#e5e7eb_1px,transparent_1px)] dark:[background-image:radial-gradient(#161617_1px,transparent_1px)] [background-size:20px_20px]" />

                  {/* Live Render (Scaled down significantly) */}
                  <div className="absolute inset-0 z-20 origin-top-left scale-[0.25] w-[400%] h-[400%] pointer-events-none transition-transform duration-700 group-hover:scale-[0.27]">
                    {PreviewComponent ? (
                      <PreviewComponent />
                    ) : (
                      <div className="bg-zinc-200 dark:bg-zinc-900 w-full h-full" />
                    )}
                  </div>

                  {/* Gradient Fade to prevent text clashing */}
                  <div className="absolute inset-0 z-30 bg-gradient-to-t from-zinc-50/80 via-transparent to-transparent dark:from-zinc-950/80" />

                  {/* Floating Action Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-40 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="rounded-full bg-zinc-900 dark:bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white dark:text-zinc-900 shadow-2xl">
                      View Component
                    </span>
                  </div>
                </div>

                {/* 2. Info Area */}
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {block.title}
                    </h3>
                    <div className="flex gap-1">
                      <div className="size-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                      <div className="size-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">
                      {block.category}
                    </span>
                    <span className="h-px w-4 bg-zinc-200 dark:bg-zinc-800" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      {block.dependencies?.length || 0} Deps
                    </span>
                  </div>

                  <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                    {block.description}
                  </p>
                </div>

                {/* Corner Accents */}
                <span className="absolute left-4 top-4 text-zinc-300 dark:text-zinc-800 text-xl font-light pointer-events-none">
                  +
                </span>
                <span className="absolute right-4 top-4 text-zinc-300 dark:text-zinc-800 text-xl font-light pointer-events-none">
                  +
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
