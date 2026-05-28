import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { TemplateDoc } from "../../../data/templateRegistry";

type TemplateCardProps = {
  slug: string;
  template: TemplateDoc;
  index: number;
};

export default function TemplateCard({
  slug,
  template,
  index,
}: TemplateCardProps) {
  const PreviewComponent = template.component;
  const isPremium = template.isPro;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.04,
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      <Link to={`/templates/${slug}`} className="group relative flex flex-col">
        {/* Main Card Container */}
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-4xl border border-zinc-200 bg-zinc-50 p-2 transition-all duration-300 group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:group-hover:border-zinc-700">
          {/* Top-Right Floating Badge */}
          {isPremium && (
            <div className="absolute top-4 right-4 z-20">
              <span className="flex items-center rounded-full border border-zinc-950/10 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-tight text-zinc-950 backdrop-blur-md shadow-sm dark:border-white/20 dark:bg-zinc-900/90 dark:text-white">
                Premium
              </span>
            </div>
          )}

          {/* Inner Preview Stage */}
          <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-zinc-100 bg-white shadow-sm transition-transform duration-500 group-hover:scale-[1.01] dark:border-white/5 dark:bg-black">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-90">
              <div
                style={{ transform: "scale(0.25)" }}
                className="origin-center"
              >
                <div className="w-[1400px] h-[900px] overflow-hidden">
                  <PreviewComponent />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Area */}
        <div className="mt-4 px-1.5">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
              {template.title}
            </h3>

            {isPremium && (
              <span className="inline-flex items-center rounded bg-zinc-950 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-white dark:bg-white dark:text-black">
                PRO
              </span>
            )}
          </div>

          <p className="mt-1 text-sm leading-relaxed text-zinc-500 line-clamp-1 dark:text-zinc-400">
            {template.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
