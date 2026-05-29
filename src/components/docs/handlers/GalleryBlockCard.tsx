import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Maximize2 } from "lucide-react";
import CodeBlock from "../CodeBlock";
import PremiumCodeGuard from "../../app/PremiumCodeGuard";
import DocsTabs from "../DocsTabs";
import { Lock } from "lucide-react";
import { useTemplateDownload } from "../../../hooks/useTemplateDownload";
import { useAuth } from "../../../context/AuthContext";
type Props = {
  slug: string;
  block: any;
  onFullPreview: (slug: string) => void;
  onViewCode?: () => void;
};

export default function GalleryBlockCard({
  block,
  slug,
  onFullPreview,
  onViewCode,
}: Props) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const { user } = useAuth();
  const PreviewComponent = block.component;
  const isTemplate = block.type === "template";
  const { downloadTemplate } = useTemplateDownload();

  const handleDownload = () => {
    downloadTemplate(block.slug);
  };
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

        <div className="flex items-center gap-6">
          {/*  Tabs ONLY for non-templates */}
          {!isTemplate && (
            <DocsTabs
              tab={tab}
              setTab={(value) => {
                if (value === "code") {
                  onViewCode?.();
                }
                setTab(value);
              }}
              isPremium={block.isPro}
              hasAccess={
                block.fetchedCode === undefined
                  ? undefined
                  : !!block.fetchedCode
              }
            />
          )}
          {/* for templates  */}
          {isTemplate && (
            <button
              onClick={handleDownload}
              className={`group flex items-center justify-center gap-2.5 rounded-xl px-5 py-2 text-sm font-medium transition-all duration-200 ${
                block.isPro && user?.plan !== "pro"
                  ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
                  : "bg-black text-white dark:bg-white dark:text-black hover:opacity-90 active:scale-[0.98]"
              }`}
            >
              {block.isPro && user?.plan !== "pro" ? (
                <>
                  <Lock className="h-4 w-4" />
                  <span>Unlock Template</span>
                </>
              ) : (
                <>
                  <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
                  <span>Download</span>
                </>
              )}
            </button>
          )}

          {/* Fullscreen */}
          <button
            onClick={() => onFullPreview(slug)}
            className="flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition hover:bg-zinc-50 dark:hover:bg-zinc-900"
          >
            <Maximize2 size={15} />
            <span>Live Demo</span>
          </button>
        </div>
      </div>

      {/* Preview / Code / Download */}
      <div className="relative w-full rounded-[32px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#030303] overflow-hidden transition-all duration-500">
        <AnimatePresence mode="wait">
          {/*  PREVIEW */}
          {tab === "preview" || isTemplate ? (
            <motion.div
              key="preview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="relative z-10 w-full min-h-[400px] flex flex-col items-center"
            >
              {/* <div className="w-full h-full flex items-start justify-center overflow-visible">
                {PreviewComponent && (
                  <div className="w-full origin-top transform-gpu">
                    <PreviewComponent />
                  </div>
                )}
              </div> */}

              <div className="w-full h-full flex items-start justify-center overflow-visible">
                {isTemplate ? (
                  <iframe
                    src={block.demoUrl}
                    title={block.title}
                    className="h-[700px] w-full border-0"
                    loading="lazy"
                  />
                ) : (
                  PreviewComponent && (
                    <div className="w-full origin-top transform-gpu">
                      <PreviewComponent />
                    </div>
                  )
                )}
              </div>

              {/*  Download button for templates */}
              {isTemplate && (
                <div className="py-6 flex flex-col items-center  border-t border-neutral-100 dark:border-neutral-900 mt-6">
                  <button
                    onClick={handleDownload}
                    className={`group flex items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 w-full sm:w-auto ${
                      block.isPro && user?.plan !== "pro"
                        ? "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
                        : "bg-black text-white dark:bg-white dark:text-black hover:opacity-90 active:scale-[0.98]"
                    }`}
                  >
                    {block.isPro && user?.plan !== "pro" ? (
                      <>
                        <Lock className="h-3.5 w-3.5 stroke-[2.5]" />
                        <span>Unlock Full Template</span>
                      </>
                    ) : (
                      <>
                        <ArrowDown className="h-3.5 w-3.5 stroke-[2.5] transition-transform duration-200 group-hover:translate-y-0.5" />
                        <span>Download Source Files</span>
                      </>
                    )}
                  </button>

                  <p className="mt-3 text-xs font-medium tracking-wide text-neutral-400 dark:text-neutral-500 text-center sm:text-left">
                    {block.isPro && user?.plan !== "pro"
                      ? "Complete source files, assets, and architecture updates included."
                      : "Instant download • Production-ready system files"}
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            /* CODE (only for components/blocks) */
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-[#0d0d0e] min-h-[400px] max-h-[600px] md:max-h-[800px] overflow-y-auto custom-scrollbar"
            >
              {!block.fetchedCode ? (
                <PremiumCodeGuard />
              ) : (
                <CodeBlock
                  code={block.fetchedCode.component || ""}
                  language="tsx"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
