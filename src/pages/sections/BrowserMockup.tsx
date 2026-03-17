import { useState, useMemo, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { blockRegistry } from "../../data/blockRegistry";
import { componentRegistry } from "../../data/componentRegistry";

function BrowserMockup() {
  // stable tabs
  const tabs = useMemo(
    () => [
      { name: "Testimonial Section", id: "marqueTestimonials", type: "block" },
      { name: "SaaS Hero Section", id: "heroAgency", type: "block" },
      { name: "Feature Section", id: "featureSpecialities", type: "block" },
      { name: "CTA Section", id: "ctaBanner2", type: "block" },
    ],
    [],
  );

  const [activeTab, setActiveTab] = useState(tabs[1]);

  // registry lookup optimized
  const activeData = useMemo(() => {
    const registry =
      activeTab.type === "block" ? blockRegistry : componentRegistry;

    return registry[activeTab.id];
  }, [activeTab]);

  const ActiveComponent = activeData?.component;

  return (
    <div className="relative my-4 w-full max-w-7xl mx-auto overflow-hidden rounded-2xl shadow-2xl md:my-12 border border-zinc-200 dark:border-zinc-800 ">
      {/* Browser Header */}
      <div className="flex items-center justify-start bg-gray-100 py-4 pl-4 dark:bg-neutral-800 ">
        <div className="mr-6 flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500" />
          <div className="size-3 rounded-full bg-yellow-500" />
          <div className="size-3 rounded-full bg-green-500" />
        </div>

        {/* Tabs */}
        <div className="no-visible-scrollbar flex items-center gap-2 overflow-x-auto py-0.5 pr-2 pl-2 md:pl-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`flex shrink-0 items-center gap-1 rounded-md px-3 py-1 text-xs transition duration-150 sm:text-sm ${
                activeTab.id === tab.id
                  ? "bg-white shadow ring-1 ring-black/10 dark:bg-neutral-900 shadow-black/10 text-zinc-900 dark:text-white"
                  : "hover:bg-white dark:hover:bg-neutral-950 text-neutral-700 dark:text-neutral-400"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Browser Content */}
      <div className="w-full overflow-hidden bg-gray-100/50 px-4 py-4 dark:bg-neutral-900">
        <div className="relative flex min-h-[36rem] lg:max-h-[52rem] flex-col rounded-xl bg-white shadow-sm ring-1 ring-black/10 dark:bg-neutral-950 overflow-hidden isolate transform-gpu">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.02, y: -10 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="z-10 w-full h-full flex items-center justify-center"
            >
              {ActiveComponent ? (
                <div className="w-full h-full">
                  <ActiveComponent />
                </div>
              ) : (
                <div className="text-zinc-400 animate-pulse font-mono text-xs uppercase tracking-tighter">
                  Fetching_Registry_Asset...
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default memo(BrowserMockup);
