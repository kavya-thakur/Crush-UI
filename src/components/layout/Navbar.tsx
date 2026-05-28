import {
  Menu,
  X,
  Box,
  Layers,
  Layout,
  CreditCard,
  Search,
  Command,
  CircleUserRound,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ThemeToggle from "../app/ThemeToggle";
import PremiumButton from "../app/PremiumButton";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const { pathname } = useLocation();
  const { user, loading } = useAuth();

  useEffect(() => setIsOpen(false), [pathname]);

  const navLinks = [
    { name: "Components", path: "/components", icon: Box },
    { name: "Blocks", path: "/blocks", icon: Layers },
    { name: "Templates", path: "/templates", icon: Layout },
    { name: "Pricing", path: "/pricing", icon: CreditCard },
  ];

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-zinc-200/50 bg-white/70 backdrop-blur-xl transition-colors dark:border-white/5 dark:bg-[#030303]/70">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-10">
          <Link
            to="/"
            className="group flex items-center gap-3 active:scale-95 transition-transform will-change-transform"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-black dark:bg-white transition-colors group-hover:bg-zinc-800 dark:group-hover:bg-zinc-200">
              <svg
                viewBox="0 0 32 32"
                className="h-5 w-5 text-white dark:text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              >
                <path d="M11 22L21 10" />
                <path d="M7 18L17 6" className="opacity-40" />
                <path d="M15 26L25 14" className="opacity-40" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-[-0.05em] text-black dark:text-white uppercase">
                Crush
                <span className="font-light text-zinc-400 dark:text-zinc-500">
                  UI
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Optimized with LayoutGroup */}
          <LayoutGroup>
            <div
              className="hidden items-center gap-1 md:flex"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onMouseEnter={() => setHoveredPath(link.path)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive || hoveredPath === link.path
                        ? "text-black dark:text-white"
                        : "text-zinc-500"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {(hoveredPath === link.path || isActive) && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 z-0 rounded-lg bg-zinc-100 dark:bg-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                          mass: 1,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </LayoutGroup>
        </div>

        <div className="flex items-center gap-5">
          {/* RIGHT SIDE OF THE NAVBAR FOR DESKTOP */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center font-thin rounded-xl text-zinc-500 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
          <button
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true }),
              )
            }
            className="group hidden h-10 w-64 items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50/50 px-3 transition-all hover:border-zinc-300 dark:border-white/10 dark:bg-zinc-900/40 dark:hover:border-white/20 lg:flex"
          >
            <div className="flex items-center gap-2.5">
              <Search
                size={15}
                className="text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors"
              />
              <span className="text-[13px] text-zinc-400 group-hover:text-zinc-500 transition-colors">
                Search components...
              </span>
            </div>
            <div className="flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[10px] font-bold text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800">
              <Command size={10} />K
            </div>
          </button>
          <div className="hidden md:block">
            {loading ? null : user ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/account"
                  className="group relative flex items-center justify-center h-10 w-10 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-200 shadow-sm"
                >
                  <CircleUserRound
                    size={18}
                    strokeWidth={1.5}
                    className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors"
                  />
                </Link>
              </div>
            ) : (
              <PremiumButton
                text="Login"
                path="/login"
                className="w-22 text-xs uppercase"
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu - Optimized Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="overflow-hidden border-b border-zinc-200 bg-white/95 backdrop-blur-xl dark:border-white/5 dark:bg-[#030303]/95 md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-4 rounded-xl p-4 transition-colors ${
                      pathname.startsWith(link.path)
                        ? "bg-zinc-100 dark:bg-white/10 text-black dark:text-white"
                        : "text-zinc-500"
                    }`}
                  >
                    <link.icon size={20} className="opacity-60" />
                    <span className="text-base font-bold">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              <div className="hidden md:block">
                {loading ? null : user ? (
                  <div className="flex items-center gap-4">
                    <Link
                      to="/account"
                      className="group relative flex items-center justify-center h-10 w-10 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-200 shadow-sm"
                    >
                      <CircleUserRound
                        size={18}
                        strokeWidth={1.5}
                        className="text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors"
                      />
                    </Link>
                  </div>
                ) : (
                  <PremiumButton
                    text="Login"
                    path="/login"
                    className="w-22 text-xs uppercase"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
