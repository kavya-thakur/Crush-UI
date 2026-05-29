// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// type TemplateItem = {
//   _id: string;
//   title: string;
//   description: string;
//   slug: string;
//   category: string;
//   isPro: boolean;
//   demoUrl: string;
// };

// type TemplateCardProps = {
//   slug: string;
//   template: TemplateItem;
//   index: number;
// };

// export default function TemplateCard({
//   slug,
//   template,
//   index,
// }: TemplateCardProps) {
//   const isPremium = template.isPro;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 16 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{
//         delay: index * 0.04,
//         duration: 0.5,
//         ease: [0.19, 1, 0.22, 1],
//       }}
//     >
//       <Link to={`/templates/${slug}`} className="group relative flex flex-col">
//         {/* Card */}
//         <div className="relative aspect-[16/10] w-full overflow-hidden rounded-4xl border border-zinc-200 bg-zinc-50 p-2 transition-all duration-300 group-hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:group-hover:border-zinc-700">
//           {/* Premium Badge */}
//           {isPremium && (
//             <div className="absolute right-4 top-4 z-20">
//               <span className="flex items-center rounded-full border border-zinc-950/10 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-tight text-zinc-950 shadow-sm backdrop-blur-md dark:border-white/20 dark:bg-zinc-900/90 dark:text-white">
//                 Premium
//               </span>
//             </div>
//           )}

//           {/* Preview */}
//           <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-zinc-100 bg-white shadow-sm transition-transform duration-500 group-hover:scale-[1.01] dark:border-white/5 dark:bg-black">
//             <iframe
//               src={template.demoUrl}
//               title={template.title}
//               loading="lazy"
//               className="pointer-events-none h-full w-full border-0"
//             />

//             {/* Hover Overlay */}
//             <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/10 group-hover:opacity-100">
//               <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-lg">
//                 View Template
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="mt-4 px-1.5">
//           <div className="flex items-center gap-2">
//             <h3 className="text-[15px] font-bold tracking-tight text-zinc-900 transition-colors group-hover:text-black dark:text-zinc-100 dark:group-hover:text-white">
//               {template.title}
//             </h3>

//             {isPremium && (
//               <span className="inline-flex items-center rounded bg-zinc-950 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-[0.15em] text-white dark:bg-white dark:text-black">
//                 PRO
//               </span>
//             )}
//           </div>

//           <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
//             {template.description}
//           </p>
//         </div>
//       </Link>
//     </motion.div>
//   );
// }

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
        {/* Architectural Card Outer Wrapper */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-neutral-200 bg-neutral-50 p-2 transition-colors duration-300 group-hover:border-neutral-300 dark:border-neutral-900 dark:bg-neutral-950 dark:group-hover:border-neutral-800">
          {/* High-Fidelity Preview Window */}
          <div className="relative h-full w-full overflow-hidden rounded-[16px] border border-neutral-100 bg-white dark:border-neutral-900/40 dark:bg-black">
            {/* FULL WIDTH IFRAME SCALING ENGINE */}
            <div className="absolute inset-0 w-full h-full origin-top-left overflow-hidden">
              <iframe
                src={template.demoUrl}
                title={template.title}
                loading="lazy"
                style={{
                  width: "200%", // Desktop canvas footprint
                  height: "200%",
                  transform: "scale(0.5)", // Precise geometric scale down
                  transformOrigin: "top left",
                }}
                className="pointer-events-none border-0 object-cover transition-opacity duration-300 opacity-95 group-hover:opacity-100"
              />
            </div>

            {/* Minimalist Interactive Overlay */}
            <div className="absolute inset-0 bg-neutral-950/[0.02] dark:bg-white/[0.01] transition-colors duration-300" />
          </div>
        </div>

        {/* Content Typography Engine */}
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

            {/* Premium System Label */}
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
