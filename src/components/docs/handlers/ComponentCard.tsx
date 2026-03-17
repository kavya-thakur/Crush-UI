import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

function ComponentCard({ slug, component, index }: any) {
  const PreviewComponent = component.component;

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px",
  });

  // SAME logic as before
  const isNavigation = component.category?.toLowerCase().includes("navigation");
  const isCard = component.category?.toLowerCase().includes("cards");
  const isText = component.category?.toLowerCase().includes("text");

  let scale = 1;
  let frameWidth = "1000px";
  let frameHeight = "600px";

  if (isNavigation) {
    scale = 0.28;
    frameWidth = "1200px";
    frameHeight = "200px";
  } else if (isCard) {
    scale = 0.42;
    frameWidth = "600px";
    frameHeight = "840px";
  } else if (isText) {
    scale = 0.7;
    frameWidth = "400px";
    frameHeight = "500px";
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.04,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link to={`/components/${slug}`} className="group block w-full">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 p-2 transition-all duration-500 dark:border-zinc-800 dark:bg-zinc-900/50 group-hover:border-zinc-400 dark:group-hover:border-zinc-700">
          <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-zinc-100 bg-white dark:border-white/5 dark:bg-[#080809] shadow-[inset_0_2px_8px_rgba(0,0,0,0.02)]">
            {/* Soft Grid Background */}
            <div
              className="absolute inset-0 z-10 opacity-[0.2] dark:opacity-[0.1]"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                backgroundSize: "24px 24px",
                color: "rgb(113 113 122 / 0.3)",
                maskImage:
                  "radial-gradient(circle at center, black, transparent 90%)",
              }}
            />

            {/* LIVE RENDER ENGINE */}
            <div
              className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-700 group-hover:scale-[1.05] isolate`}
            >
              <div
                className="transform-gpu"
                style={{ transform: `scale(${scale})` }}
              >
                <div
                  className=""
                  style={{ width: frameWidth, height: frameHeight }}
                >
                  {inView && PreviewComponent ? (
                    <div className="w-full h-full flex items-center justify-center ">
                      <PreviewComponent {...component.previewProps} />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-xl" />
                  )}
                </div>
              </div>
            </div>

            {/* Hover Interaction Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100 bg-white/10 dark:bg-black/20 backdrop-blur-[2px]">
              <div className="translate-y-2 rounded-full border border-zinc-200 bg-white px-5 py-2 text-[11px] font-bold text-zinc-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0 dark:border-white/10 dark:bg-zinc-900 dark:text-white uppercase tracking-widest">
                View Component
              </div>
            </div>
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-5 px-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold tracking-tight text-zinc-800 transition-colors group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white">
              {component.title}
            </h3>
            <span className="text-[10px] font-mono font-black text-zinc-400 dark:text-zinc-600 bg-zinc-100 dark:bg-zinc-800/50 px-2 py-0.5 rounded">
              {component.category.split(" ")[0]}
            </span>
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
            {component.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default React.memo(ComponentCard);
