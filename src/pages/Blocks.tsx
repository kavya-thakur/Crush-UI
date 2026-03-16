import Sidebar from "../components/layout/Sidebar";
import BlocksGrid from "../components/docs/handlers/BlocksGrid";
import { useBlockCategories } from "../hooks/useBlockCategories";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Blocks() {
  const categories = useBlockCategories();

  // Stabilize reference
  const memoizedCategories = useMemo(() => categories, [categories]);

  return (
    <div className="mx-auto flex max-w-[1440px]">
      {/* Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <div className="px-4 py-12 sm:px-8 lg:px-12">
          {/* Header */}
          <header className="mb-16 md:mb-18 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl font-medium text-gradient">
                Blocks
              </h1>

              <p className="mt-5 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Explore our UI primitives organized by layout intent. Select a
                category to view all available variants.
              </p>
            </motion.div>
          </header>

          {/* Grid */}
          <BlocksGrid categories={memoizedCategories} />
        </div>
      </main>
    </div>
  );
}
