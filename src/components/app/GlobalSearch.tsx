import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import { componentRegistry } from "../../data/componentRegistry";
import { blockRegistry } from "../../data/blockRegistry";
import { useTemplates } from "../../hooks/useTemplates";

type ItemType = "component" | "block" | "template";

type Item = {
  name: string;
  path: string;
  type: ItemType;
};

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const templates = useTemplates();
  /* ------------------------------------------------ */
  /* Build Search Index                               */
  /* ------------------------------------------------ */

  const items: Item[] = useMemo(() => {
    const componentItems: Item[] = Object.entries(componentRegistry).map(
      ([slug, c]) => ({
        name: c.title,
        path: `/components/${slug}`,
        type: "component",
      }),
    );

    const blockItems: Item[] = Object.entries(blockRegistry).map(([, b]) => ({
      name: b.title,
      path: `/blocks/category/${b.category
        ?.toLowerCase()
        .replace(/\s+/g, "-")}`,
      type: "block",
    }));

    const templateItems: Item[] = templates.map((t) => ({
      name: t.title,
      path: `/templates/${t.slug}`,
      type: "template",
    }));

    return [...componentItems, ...blockItems, ...templateItems];
  }, [templates]);
  /* ------------------------------------------------ */
  /* Filter Results                                   */
  /* ------------------------------------------------ */

  const results = useMemo(() => {
    if (!query) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, items]);

  /* ------------------------------------------------ */
  /* Keyboard Shortcut (⌘K / Ctrl K)                  */
  /* ------------------------------------------------ */

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* backdrop */}
            <div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* search panel */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="relative w-[600px] max-w-[90vw] rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-white/10 dark:bg-[#030303]"
            >
              {/* search input */}
              <div className="flex items-center gap-3 border-b border-zinc-200 px-4 py-3 dark:border-white/10">
                <Search size={16} className="text-zinc-400" />

                <input
                  autoFocus
                  placeholder="Search components, blocks, templates..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent text-sm outline-none text-neutral-700 dark:text-neutral-100 placeholder:text-zinc-400"
                />
              </div>

              {/* results */}
              <div className="max-h-[350px] overflow-y-auto">
                {results.length === 0 && (
                  <p className="p-4 text-sm text-zinc-400">No results found.</p>
                )}

                {results.map((item, index) => (
                  <Link
                    key={`${item.type}-${index}`}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3 text-sm transition hover:bg-zinc-50 dark:hover:bg-white/5"
                  >
                    <span className="text-zinc-800 dark:text-zinc-200">
                      {item.name}
                    </span>

                    <span className="text-xs text-zinc-400 uppercase">
                      {item.type}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
