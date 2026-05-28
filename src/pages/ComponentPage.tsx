import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "../components/layout/Sidebar";
import { componentRegistry } from "../data/componentRegistry";
import CodeBlock from "../components/docs/CodeBlock";
import Breadcrumbs from "../components/app/Breadcrumbs";
import DocsTabs from "../components/docs/DocsTabs";
import ComponentPreview from "../components/docs/handlers/ComponentPreview";
import DocsSection from "../components/docs/DocsSection";
import API from "../lib/axios";

type ComponentSlug = keyof typeof componentRegistry;

export default function ComponentPage() {
  const { slug } = useParams<{ slug: ComponentSlug }>();

  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!slug || !componentRegistry[slug]) {
    return (
      <div className="dark:text-zinc-400 p-20 text-center font-medium">
        Component not found
      </div>
    );
  }

  const componentData = componentRegistry[slug];
  const Component = componentData.component;

  useEffect(() => {
    const fetchCode = async () => {
      if (tab !== "code") return;

      try {
        setLoading(true);
        setError(null);

        const res = await API.get(`/components/${slug}/code`);
        setCode(res.data.code);
      } catch (err: any) {
        if (err.response?.status === 401) {
          setError("Login required to access this component");
        } else if (err.response?.status === 403) {
          setError("Upgrade to pro to access this component");
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [tab, slug]);

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
              <h1 className="text-4xl font-medium tracking-tight leading-snug text-gradient md:text-5xl mb-4">
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

                      <ComponentPreview
                        component={Component}
                        variant={variant.name}
                        category={componentData.category}
                      />
                    </section>
                  ))
                ) : (
                  <section className="space-y-5">
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

                {/* 🔥 Loading */}
                {loading && (
                  <div className="h-[200px] flex items-center justify-center text-zinc-400">
                    Loading...
                  </div>
                )}

                {error && (
                  <div className="h-[200px] flex items-center justify-center text-zinc-400">
                    {error}
                  </div>
                )}

                {/* 🔥 Success */}
                {!loading && !error && (
                  <CodeBlock code={code?.component || ""} language="tsx" />
                )}
              </motion.div>
            )}
          </AnimatePresence>

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
