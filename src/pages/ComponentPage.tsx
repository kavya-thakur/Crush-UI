import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "../components/layout/Sidebar";
import { componentRegistry } from "../data/componentRegistry";
import CodeBlock from "../components/docs/CodeBlock";
import Breadcrumbs from "../components/app/Breadcrumbs";
import DocsTabs from "../components/docs/DocsTabs";
import ComponentPreview from "../components/docs/handlers/ComponentPreview";
import DocsSection from "../components/docs/DocsSection";

type ComponentSlug = keyof typeof componentRegistry;

export default function ComponentPage() {
  const { slug } = useParams<{ slug: ComponentSlug }>();
  const [tab, setTab] = useState<"preview" | "code">("preview");

  if (!slug || !componentRegistry[slug]) {
    return (
      <div className="dark:text-zinc-400 p-20 text-center font-medium">
        Component not found
      </div>
    );
  }

  const componentData = componentRegistry[slug];
  const Component = componentData.component;

  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] bg-white transition-colors duration-300 dark:bg-[#030303]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <main className="flex-1 overflow-x-hidden px-4 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs title={componentData.title} />

          {/* Header */}
          <header className="mb-10 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-4xl font-medium tracking-tight text-gradient md:text-5xl mb-4">
                {componentData.title}
              </h1>

              <p className="max-w-2xl text-base md:text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                {componentData.description}
              </p>
            </motion.div>
          </header>

          {/* Tabs */}
          <DocsTabs tab={tab} setTab={setTab} />

          <AnimatePresence mode="wait">
            {tab === "preview" ? (
              <motion.div
                key="preview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-12"
              >
                {componentData.variants ? (
                  componentData.variants.map((variant) => (
                    <section key={variant.name} className="space-y-5">
                      <div className="flex items-center gap-3">
                        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                          {variant.name}
                        </h3>
                        <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800/50" />
                      </div>

                      {/* FIX 1: Pass the category properly to variants */}
                      <ComponentPreview
                        component={Component}
                        variant={variant.name}
                        category={componentData.category}
                      />
                    </section>
                  ))
                ) : (
                  <section className="space-y-5">
                    {/* FIX 2: Added a section wrapper and category pass for single components */}
                    <ComponentPreview
                      component={Component}
                      category={componentData.category}
                    />
                  </section>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="code"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Source Code
                  </h3>
                  <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-800/50" />
                </div>

                <div className="h-[500px] md:h-[650px] w-full overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-[#0d0d0e] shadow-2xl">
                  <div className="h-full overflow-y-auto custom-scrollbar p-4">
                    <CodeBlock code={componentData.code || ""} language="tsx" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Docs Sections */}
          <DocsSection
            installation={componentData.installation}
            usage={componentData.usage}
            dependencies={componentData.dependencies}
          />
        </div>
      </main>
    </div>
  );
}
