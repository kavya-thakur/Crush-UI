import { Link, useLocation } from "react-router-dom";
import { componentRegistry } from "../../data/componentRegistry";
import { blockRegistry } from "../../data/blockRegistry";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Box, Layers } from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();

  // 1. Detect Mode
  const isBlocksMode = pathname.startsWith("/blocks");
  const activeRegistry = isBlocksMode ? blockRegistry : componentRegistry;

  // 2. Group items
  const categories = useMemo(() => {
    return Object.entries(activeRegistry).reduce(
      (acc, [slug, item]) => {
        const category = item.category || "General";
        if (!acc[category]) acc[category] = [];
        acc[category].push({ name: item.title, slug });
        return acc;
      },
      {} as Record<string, { name: string; slug: string }[]>,
    );
  }, [activeRegistry]);

  const categoryList = Object.keys(categories);

  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>(
    {},
  );

  const toggleCategory = (key: string) => {
    setOpenCategories((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="w-64 border-r border-zinc-100 dark:border-zinc-800 bg-white dark:bg-[#030303] sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto select-none scrollbar-hide">
      <div className="px-6 pt-6 flex items-center gap-2 text-[10px] font-medium uppercase text-zinc-400">
        {isBlocksMode ? <Layers size={12} /> : <Box size={12} />}
        {isBlocksMode ? "Block Registry" : "Component UI"}
      </div>

      <nav className="p-6 pt-4 space-y-1">
        {categoryList.map((categoryName) => {
          // FORMAT SLUG: "Hero Sections" -> "hero-sections"
          const categorySlug = categoryName.toLowerCase().replace(/\s+/g, "-");

          // Logic for Components (Accordion) vs Blocks (Direct Link)
          if (isBlocksMode) {
            const isActiveCategory = pathname.includes(
              `/blocks/category/${categorySlug}`,
            );

            return (
              <Link
                key={categoryName}
                to={`/blocks/category/${categorySlug}`}
                className={`group flex w-full items-center justify-between rounded-md px-2 py-2 text-left transition-all ${
                  isActiveCategory
                    ? "bg-zinc-100 dark:bg-zinc-900/80"
                    : "hover:bg-zinc-50 dark:hover:bg-zinc-900/30"
                }`}
              >
                <span
                  className={`text-sm transition-colors ${
                    isActiveCategory
                      ? "text-zinc-900 dark:text-zinc-100 font-medium"
                      : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200"
                  }`}
                >
                  {categoryName}
                </span>
                <ChevronRight
                  size={14}
                  className={`transition-transform ${isActiveCategory ? "text-zinc-900 dark:text-white" : "text-zinc-300 dark:text-zinc-700"}`}
                />
              </Link>
            );
          }

          // RENDER COMPONENT ACCORDION (Original Logic)
          const isOpen =
            openCategories[categoryName] ??
            categories[categoryName].some((i) => pathname.includes(i.slug));
          const items = categories[categoryName];

          return (
            <div key={categoryName} className="space-y-1">
              <button
                onClick={() => toggleCategory(categoryName)}
                className="group flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900/50"
              >
                <span className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                  {categoryName}
                </span>
                <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                  <ChevronRight size={14} className="text-zinc-500" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="relative mt-1 ml-2 flex flex-col border-l border-zinc-200 dark:border-zinc-700">
                      {items.map((item, index) => {
                        const isActive =
                          pathname === `/components/${item.slug}`;
                        return (
                          <motion.div
                            key={item.slug}
                            initial={{ x: -5, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: index * 0.02 }}
                          >
                            <Link
                              to={`/components/${item.slug}`}
                              className={`relative flex items-center px-4 py-1 text-sm transition-colors duration-200 ${
                                isActive
                                  ? "text-zinc-900 dark:text-zinc-50 font-medium"
                                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
                              }`}
                            >
                              {isActive && (
                                <motion.div
                                  layoutId="sidebarLine"
                                  className="absolute left-[-1.5px] top-2 bottom-2 w-[2px] bg-zinc-900 dark:bg-zinc-50 rounded-full"
                                />
                              )}
                              <span className="relative z-10">{item.name}</span>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
