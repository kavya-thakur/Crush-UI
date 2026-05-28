import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";

type Category = {
  name: string;
  slug: string;
  previewBlock: any;
  count: number;
};

type Props = {
  cat: Category;
  index: number;
};

function BlockCategoryCard({ cat, index }: Props) {
  const PreviewComponent = cat.previewBlock.component;

  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Lazy render preview only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
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
        {cat.previewBlock.isPro && (
          <div className="absolute top-4 right-8 z-20">
            <span className="flex items-center rounded-full border border-zinc-950/10 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-tight text-zinc-950 backdrop-blur-md shadow-sm dark:border-white/20 dark:bg-zinc-900/90 dark:text-white">
              Premium
            </span>
          </div>
        )}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 p-2 transition-all duration-500 group-hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900/30 dark:group-hover:border-zinc-400">
          {/* Blueprint accents */}
          <span className="absolute left-4 top-4 z-50 text-zinc-300 dark:text-zinc-700 text-xl font-light pointer-events-none group-hover:text-zinc-500 transition-colors">
            +
          </span>
          <span className="absolute right-4 top-4 z-50 text-zinc-300 dark:text-zinc-700 text-xl font-light pointer-events-none group-hover:text-zinc-500 transition-colors">
            +
          </span>

          {/* Inner canvas */}
          <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-zinc-100 bg-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] dark:border-white/5 dark:bg-[#080809] dark:shadow-[inset_0_4px_30px_rgba(0,0,0,0.7)]">
            {/* Grid overlay */}
            <div
              className="absolute inset-0 z-10 opacity-[0.4] dark:opacity-[0.2]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
                backgroundSize: "24px 24px",
                color: "rgb(113 113 122 / 0.3)",
                maskImage:
                  "radial-gradient(circle at center, black, transparent 90%)",
              }}
            />

            {/* Preview */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-[1.05] isolate">
              <div
                style={{ transform: "scale(0.28)", transformOrigin: "center" }}
              >
                <div className="h-[900px] w-[1400px] rounded-[40px] overflow-hidden bg-white dark:bg-zinc-950 shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
                  {visible && PreviewComponent ? <PreviewComponent /> : null}
                </div>
              </div>
            </div>

            {/* Hover gradient */}
            <div className="absolute inset-0 z-30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/10 via-transparent to-transparent dark:from-white/5" />
          </div>
        </div>

        {/* Metadata */}
        <div className="mt-5 flex flex-col px-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-medium tracking-tight text-zinc-800 transition-colors group-hover:text-black dark:text-zinc-200 dark:group-hover:text-white">
              {cat.name}
            </h3>

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
              Launch Explorer →
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default memo(BlockCategoryCard);
