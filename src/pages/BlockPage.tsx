import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/layout/Sidebar";
import { blockRegistry } from "../data/blockRegistry";
import Breadcrumbs from "../components/app/Breadcrumbs";
import IframeWrapper from "../components/app/IframeWrapper";
import GalleryBlockCard from "../components/docs/handlers/GalleryBlockCard";
import DocsSection from "../components/docs/DocsSection";
import API from "../lib/axios";
import { useBlocks } from "../hooks/useBlocks";
import { BlocksGridSkeleton } from "../components/app/skeletons/BlocksGridSkeleton";
import RegistryFooter from "./sections/Footer";

type CodeData = {
  component?: string;
  usage?: string;
  installation?: string;
  dependencies?: string[];
};

export default function BlockPage() {
  const { categorySlug } = useParams<{ categorySlug?: string }>();
  const { blocks, loading } = useBlocks();
  const [codeMap, setCodeMap] = useState<Record<string, CodeData>>({});
  const [isFullView, setIsFullView] = useState(false);
  const [activePreviewSlug, setActivePreviewSlug] = useState<string | null>(
    null,
  );

  const [view, setView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const isCategoryView = !!categorySlug;

  // Fetch code (ONLY when needed)
  const fetchCode = async (slug: string) => {
    if (codeMap[slug]) return;

    try {
      const res = await API.get(`/components/${slug}/code`);

      setCodeMap((prev) => ({
        ...prev,
        [slug]: res.data.code,
      }));
    } catch (err: any) {
      console.log(err.response?.data?.message);
    }
  };

  // Filter blocks
  const filteredBlocks = isCategoryView
    ? blocks.filter(
        (b) => b.category?.toLowerCase().replace(/\s+/g, "-") === categorySlug,
      )
    : [];

  const mergedBlocks = filteredBlocks.map((block) => {
    const local = blockRegistry[block.slug as keyof typeof blockRegistry];

    return {
      ...block,
      ...local,
    };
  });

  const handleFullPreview = (slug: string) => {
    setActivePreviewSlug(slug);
    setIsFullView(true);
  };

  const activeModalBlock = mergedBlocks.find(
    (b) => b.slug === activePreviewSlug,
  );

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-[1440px] bg-white dark:bg-[#030303] transition-colors duration-300">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main */}
        <main className="flex-1 w-full overflow-x-hidden">
          <div className="px-4 py-10 sm:px-8 lg:px-12">
            <Breadcrumbs title={categorySlug?.replace("-", " ") || "Blocks"} />

            {/* Header */}
            <header className="mb-12 md:mb-20 mt-6">
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gradient capitalize mb-4">
                {categorySlug?.replace("-", " ")}
              </h1>

              <p className="max-w-2xl text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Explore meticulously crafted {categorySlug?.replace("-", " ")}{" "}
                components. Optimized for responsiveness and visual impact.
              </p>
            </header>

            {/* Blocks */}
            <div className="space-y-32 md:space-y-18">
              {loading ? (
                <BlocksGridSkeleton />
              ) : (
                mergedBlocks.map((block) => {
                  const code = codeMap[block.slug];

                  return (
                    <div key={block.slug}>
                      {/* Card */}
                      <GalleryBlockCard
                        slug={block.slug}
                        block={{
                          ...block,
                          fetchedCode: code,
                        }}
                        onFullPreview={handleFullPreview}
                        onViewCode={() => fetchCode(block.slug)}
                      />

                      {/* Docs */}
                      <div className="max-w-7xl">
                        <DocsSection
                          usage={code?.usage}
                          dependencies={code?.dependencies || []}
                        />
                      </div>

                      <hr className="border-zinc-100 dark:border-white/[0.05]" />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </main>

        {/* Fullscreen Preview Modal */}
        <AnimatePresence>
          {isFullView && activeModalBlock && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] bg-[#030303]"
            >
              <IframeWrapper
                title={activeModalBlock.title}
                view={view}
                setView={setView}
                onClose={() => setIsFullView(false)}
                isFullPage
              >
                {activeModalBlock.component && <activeModalBlock.component />}
              </IframeWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <RegistryFooter />
    </>
  );
}
