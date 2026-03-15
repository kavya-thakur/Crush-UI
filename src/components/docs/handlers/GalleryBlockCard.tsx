import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LockKeyhole, Maximize, Maximize2 } from "lucide-react";
import CodeBlock from "../CodeBlock";
import PremiumCodeGuard from "../../app/PremiumCodeGuard";

type Props = {
  block: any;
  slug: string;
  onFullPreview: (slug: string) => void;
};

export default function GalleryBlockCard({
  block,
  slug,
  onFullPreview,
}: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");

  const PreviewComponent = block.component;

  return (
    <section className="group space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-medium text-gradient">{block.title}</h2>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {block.description}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Tabs */}
          <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-md border border-zinc-200 dark:border-zinc-700">
            {["preview", "code"].map((t) => {
              const isLocked = t === "code" && block.premium;

              return (
                <button
                  key={t}
                  onClick={() => setTab(t as "preview" | "code")}
                  className={`px-4 py-1.5 rounded-md text-xs flex items-center font-semibold capitalize transition ${
                    tab === t
                      ? "bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm"
                      : "text-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-300 dark:text-zinc-300"
                  }`}
                >
                  {isLocked ? (
                    <span className="mr-1">
                      <LockKeyhole size={14} />
                    </span>
                  ) : (
                    <span className="mr-1">
                      <Maximize size={14} />
                    </span>
                  )}
                  {t}
                </button>
              );
            })}
          </div>

          {/* Fullscreen */}
          <button
            onClick={() => onFullPreview(slug)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition"
          >
            <Maximize2 size={15} />
          </button>
        </div>
      </div>

      {/* Preview Stage */}

      <div className="relative w-full rounded-[32px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#030303] overflow-hidden transition-all duration-500">
        <AnimatePresence mode="wait">
          {tab === "preview" ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              /* FIX: Removed h-[550px]. 
           Using min-h-[400px] so small items look good, 
           but allowing it to grow for big footers.
        */
              className="relative z-10 w-full min-h-[400px] h-full flex flex-col items-center"
            >
              <div className="w-full h-full flex items-start justify-center overflow-visible">
                {PreviewComponent && (
                  /* FIX: 'w-full' ensures the footer stretches to the edges.
               'origin-top' ensures if it scales, it doesn't leave gaps.
            */
                  <div className="w-full origin-top transform-gpu">
                    <PreviewComponent />
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              /* FIX: Increased code height to match large templates */
              className="bg-[#0d0d0e] min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto custom-scrollbar"
            >
              {block.premium ? (
                <PremiumCodeGuard />
              ) : (
                <div className="p-6">
                  <CodeBlock code={block.code || ""} language="tsx" />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
