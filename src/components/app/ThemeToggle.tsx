// import { Sun, Moon } from "lucide-react";
// import useTheme from "../../hooks/useTheme";
// import { motion, AnimatePresence } from "framer-motion";

// export default function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   // Optimized animation config for a "snappy" feel
//   const fastSpring = {
//     type: "spring",
//     stiffness: 500, // Higher stiffness for faster start
//     damping: 30, // Balanced damping to prevent excessive bouncing
//     mass: 0.8, // Lower mass makes it feel lighter
//   };

//   return (
//     <button
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="group relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white text-zinc-600 transition-all active:scale-90 dark:border-zinc-800 dark:bg-[#09090b] dark:text-zinc-400 dark:hover:bg-zinc-900/50"
//       aria-label="Toggle Theme"
//     >
//       <AnimatePresence mode="wait" initial={false}>
//         <motion.div
//           key={theme}
//           initial={{ y: 20, rotate: -45, opacity: 0, scale: 0.5 }}
//           animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
//           exit={{ y: -20, rotate: 45, opacity: 0, scale: 0.5 }}
//           transition={fastSpring}
//           className="flex items-center justify-center"
//         >
//           {theme === "dark" ? (
//             <Sun
//               size={18}
//               strokeWidth={2.5}
//               className="text-yellow-500 fill-yellow-500/10"
//             />
//           ) : (
//             <Moon
//               size={18}
//               strokeWidth={2.5}
//               className="text-zinc-900 fill-zinc-900/5"
//             />
//           )}
//         </motion.div>
//       </AnimatePresence>

//       {/* Hover ring effect */}
//       <div className="absolute inset-0 scale-0 rounded-full bg-zinc-100/50 transition-transform group-hover:scale-100 dark:bg-zinc-800/30" />
//     </button>
//   );
// }

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
