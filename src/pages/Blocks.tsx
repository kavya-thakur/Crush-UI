import Sidebar from "../components/layout/Sidebar";
import BlocksGrid from "../components/docs/handlers/BlocksGrid";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { blockRegistry } from "../data/blockRegistry";
import { useBlocks } from "../hooks/useBlocks";
import RegistryFooter from "./sections/Footer";

type BlockItem = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  isPro: boolean;
};

export default function Blocks() {
  const blocks = useBlocks();

  const isLoading = !blocks || blocks.length === 0;

  const categories = useMemo(() => {
    if (!blocks || blocks.length === 0) return [];

    const map: Record<string, BlockItem[]> = {};
    console.log(blocks);
    blocks.forEach((block) => {
      if (!map[block.category]) {
        map[block.category] = [];
      }
      map[block.category].push(block);
    });

    return Object.entries(map).map(([categoryName, items]) => {
      const first = items[0];

      const local =
        blockRegistry[first.slug as keyof typeof blockRegistry] || {};

      const hasProBlocks = items.some((item) => item.isPro);

      return {
        name: categoryName,
        slug: categoryName.toLowerCase().replace(/\s+/g, "-"),
        previewBlock: {
          ...first,
          ...(local || {}),
        },
        count: items.length,
        isPro: hasProBlocks,
      };
    });
  }, [blocks]);

  return (
    <>
      <div className="mx-auto flex max-w-[1440px]">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="flex-1">
          <div className="px-4 py-12 sm:px-8 lg:px-12">
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

            <BlocksGrid categories={categories} isLoading={isLoading} />
          </div>
        </main>
      </div>
      <RegistryFooter />
    </>
  );
}
