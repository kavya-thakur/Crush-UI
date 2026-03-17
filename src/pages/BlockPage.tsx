import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "../components/layout/Sidebar";
import { blockRegistry } from "../data/blockRegistry";
import Breadcrumbs from "../components/app/Breadcrumbs";
import IframeWrapper from "../components/app/IframeWrapper";
import GalleryBlockCard from "../components/docs/handlers/GalleryBlockCard";
import DocsSection from "../components/docs/DocsSection";

export default function BlockPage() {
  const { categorySlug } = useParams<{ categorySlug?: string }>();

  const [isFullView, setIsFullView] = useState(false);
  const [activePreviewSlug, setActivePreviewSlug] = useState<string | null>(
    null,
  );

  const [view, setView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const isCategoryView = !!categorySlug;

  const blocksInGallery = isCategoryView
    ? Object.entries(blockRegistry).filter(
        ([_, b]) =>
          b.category?.toLowerCase().replace(/\s+/g, "-") === categorySlug,
      )
    : [];
  const handleFullPreview = (slug: string) => {
    setActivePreviewSlug(slug);
    setIsFullView(true);
  };

  const activeModalBlock = activePreviewSlug
    ? blockRegistry[activePreviewSlug as keyof typeof blockRegistry]
    : null;

  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] bg-white dark:bg-[#030303] transition-colors duration-300">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main */}
      <main className="flex-1 w-full overflow-x-hidden">
        <div className="px-4 py-10 sm:px-8 lg:px-12">
          {/* Breadcrumb */}
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
            {blocksInGallery.map(([slug, block]) => (
              <div key={slug} className="">
                {/* 1. The Visual Card */}
                <GalleryBlockCard
                  slug={slug}
                  block={block}
                  onFullPreview={handleFullPreview}
                />

                {/* 2. The Specific Docs for THIS block */}
                <div className="max-w-7xl">
                  <DocsSection
                    usage={block.usage}
                    dependencies={block.dependencies}
                  />
                </div>
                <hr className="border-zinc-100 dark:border-white/[0.05]" />
              </div>
            ))}
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
              <activeModalBlock.component />
            </IframeWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
