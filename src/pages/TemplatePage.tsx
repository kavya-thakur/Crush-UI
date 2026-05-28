import { useParams, useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "../components/layout/Sidebar";
import { templateRegistry } from "../data/templateRegistry";
import Breadcrumbs from "../components/app/Breadcrumbs";
import IframeWrapper from "../components/app/IframeWrapper";
import GalleryBlockCard from "../components/docs/handlers/GalleryBlockCard";
import { useTemplates } from "../hooks/useTemplates";

export default function TemplatePage() {
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();

  const templates = useTemplates();

  const mergedTemplates = useMemo(() => {
    return templates.map((t) => ({
      ...t,
      ...(templateRegistry[t.slug] || {}),
    }));
  }, [templates]);

  const [isFullView, setIsFullView] = useState(false);
  const [activePreviewSlug, setActivePreviewSlug] = useState<string | null>(
    null,
  );
  const [view, setView] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const templatesInGallery = mergedTemplates.filter((t) => {
    if (!slug) return true;
    return t.slug === slug;
  });

  const firstTemplate = templatesInGallery[0];

  const headerTitle = firstTemplate?.title || "Templates";
  const headerDescription =
    firstTemplate?.description ||
    "Production ready website templates built with CrushUI.";

  const handleFullPreview = (slug: string) => {
    setActivePreviewSlug(slug);
    setIsFullView(true);
  };

  const activeModalTemplate = mergedTemplates.find(
    (t) => t.slug === activePreviewSlug,
  );

  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] bg-white dark:bg-[#030303] transition-colors duration-300">
      <div className="hidden lg:block border-r border-zinc-100 dark:border-white/5">
        <Sidebar />
      </div>

      <main className="flex-1 w-full overflow-x-hidden">
        <div className="px-4 py-10 sm:px-8 lg:px-12">
          <Breadcrumbs title={headerTitle} />

          <header className="mb-12 md:mb-20 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-gradient mb-6">
                {headerTitle}
              </h1>

              <p className="max-w-3xl text-base md:text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">
                {headerDescription}
              </p>
            </motion.div>
          </header>

          <div className="space-y-24 md:space-y-40 mb-20">
            {templatesInGallery.length > 0 ? (
              templatesInGallery.map((template) => (
                <GalleryBlockCard
                  key={template.slug}
                  slug={template.slug}
                  block={template}
                  onFullPreview={handleFullPreview}
                />
              ))
            ) : (
              <div className="py-24 text-center border-2 border-dashed border-zinc-100 dark:border-zinc-800 rounded-[32px]">
                <p className="text-zinc-500 mb-6">No templates found.</p>
                <button
                  onClick={() => navigate("/templates")}
                  className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-bold"
                >
                  View All
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {isFullView && activeModalTemplate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-white dark:bg-[#030303]"
          >
            <IframeWrapper
              title={activeModalTemplate.title}
              view={view}
              setView={setView}
              onClose={() => setIsFullView(false)}
              isFullPage
            >
              {activeModalTemplate.component && (
                <activeModalTemplate.component />
              )}
            </IframeWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
