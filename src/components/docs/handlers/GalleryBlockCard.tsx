import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";
import CodeBlock from "../CodeBlock";
import PremiumCodeGuard from "../../app/PremiumCodeGuard";
import DocsTabs from "../DocsTabs";

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

          <DocsTabs tab={tab} setTab={setTab} isPremium={block.premium} />
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
              className="relative z-10 w-full min-h-[400px] h-full flex flex-col items-center"
            >
              <div className="w-full h-full flex items-start justify-center overflow-visible">
                {PreviewComponent && (
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
                <div className="">
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
