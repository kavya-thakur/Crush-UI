import { Sun, Moon } from "lucide-react";
import useTheme from "../../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative flex h-9 w-9 items-center justify-center rounded-xl transition-all active:scale-90"
    >
      {/* 1. Background Highlight - Styled like your DockIconButton */}
      <div className="absolute inset-0 rounded-xl bg-zinc-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/10" />

      {/* 2. Icon Container with snappy AnimatePresence */}
      <div className="relative z-10 flex items-center justify-center text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
          >
            {isDark ? (
              <Sun size={18} strokeWidth={2.5} className="text-yellow-500" />
            ) : (
              <Moon size={18} strokeWidth={2.5} className="text-zinc-900" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </button>
  );
}
