import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type TemplateItem = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  isPro: boolean;
  demoUrl: string;
};

type TemplateCardProps = {
  slug: string;
  template: TemplateItem;
  index: number;
};

export default function TemplateCard({
  slug,
  template,
  index,
}: TemplateCardProps) {
  const isPremium = template.isPro;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.03,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        to={`/templates/${slug}`}
        className="group relative flex flex-col w-full"
      >
        {/* Card Outer Wrapper */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-50 p-2 transition-colors duration-300 group-hover:border-neutral-300 dark:border-neutral-900 dark:bg-neutral-950 dark:group-hover:border-neutral-800">
          {/*  Preview Window */}
          <div className="relative h-full w-full overflow-hidden rounded-[16px] border border-neutral-100 bg-white dark:border-neutral-900/40 dark:bg-black">
            {/* FULL WIDTH IFRAME SCALING ENGINE */}
            <div className="absolute inset-0 w-full h-full origin-top-left overflow-hidden">
              <iframe
                src={template.demoUrl}
                title={template.title}
                loading="lazy"
                style={{
                  width: "200%",
                  height: "200%",
                  transform: "scale(0.5)",
                  transformOrigin: "top left",
                }}
                className="pointer-events-none border-0 object-cover transition-opacity duration-300 opacity-95 group-hover:opacity-100"
              />
            </div>

            {/* Minimalist  Overlay */}
            <div className="absolute inset-0 bg-neutral-950/[0.02] dark:bg-white/[0.01] transition-colors duration-300" />
          </div>
        </div>

        <div className="mt-4 px-1 flex flex-col gap-1">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5">
                {template.title}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 text-neutral-400 dark:text-neutral-500 stroke-[2.5]" />
              </h3>

              <p className="line-clamp-2 text-xs font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-[95%]">
                {template.description}
              </p>
            </div>

            {/* Premium  Label */}
            {isPremium && (
              <span className="shrink-0 inline-flex items-center rounded-md border border-neutral-950/10 dark:border-white/10 bg-neutral-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                PRO
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
