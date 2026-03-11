import {
  Menu,
  X,
  Box,
  Layers,
  Layout,
  CreditCard,
  Search,
  Command,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "../app/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => setIsOpen(false), [pathname]);

  const navLinks = [
    { name: "Components", path: "/components", icon: Box },
    { name: "Blocks", path: "/blocks", icon: Layers },
    { name: "Templates", path: "/templates", icon: Layout },
    { name: "Pricing", path: "/pricing", icon: CreditCard },
  ];

  return (
    <nav className="fixed top-0 z-[100] w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-md transition-colors dark:border-white/5 dark:bg-[#030303]/80">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">
        {/* Left: Logo & Desktop Links */}
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2.5 transition-transform active:scale-95"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 dark:bg-white transition-colors">
              <span className="text-sm font-black text-white dark:text-black">
                C
              </span>
            </div>
            <span className="hidden text-[17px] font-bold tracking-tight text-zinc-900 dark:text-white sm:block">
              Crush<span className="text-zinc-400">UI</span>
            </span>
          </Link>

          {/* Desktop Nav: Fluid Background Pill */}
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
                  className={`relative px-4 py-2 text-[14px]  transition-colors duration-200 ${
                    isActive || hoveredPath === link.path
                      ? "text-zinc-950 dark:text-white"
                      : "text-zinc-500"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* Shared Background Pill (Both Hover & Active) */}
                  {(hoveredPath === link.path || isActive) && (
                    <motion.div
                      layoutId="navbar-pill"
                      className={`absolute inset-0 z-0 rounded-full ${
                        isActive
                          ? "bg-zinc-100 dark:bg-white/10"
                          : "bg-zinc-100/60 dark:bg-white/[0.05]"
                      }`}
                      transition={{
                        type: "spring",
                        bounce: 0.15,
                        duration: 0.5,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          {/* Command Search Bar - Refined Style */}
          <button
            onClick={() =>
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true }),
              )
            }
            className="group hidden h-9 w-64 items-center justify-between rounded-full border border-zinc-200 bg-zinc-50/50 px-3 transition-all hover:bg-white dark:border-white/10 dark:bg-zinc-900/40 dark:hover:bg-zinc-900 lg:flex"
          >
            <div className="flex items-center gap-2">
              <Search
                size={14}
                className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors"
              />
              <span className="text-xs text-zinc-400">
                Search components...
              </span>
            </div>
            <kbd className="flex items-center gap-1 rounded-md border border-zinc-200 bg-white px-1.5 py-0.5 font-mono text-[9px] font-bold text-zinc-400 dark:border-zinc-700 dark:bg-zinc-800">
              <Command size={9} />K
            </kbd>
          </button>

          <div className="flex items-center gap-1">
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900 md:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content: Minimalist Stack */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-full border-b border-zinc-200 bg-white/95 p-4 backdrop-blur-xl dark:border-white/5 dark:bg-[#030303]/95 md:hidden"
          >
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-3 rounded-xl p-3.5 transition-all ${
                    pathname.startsWith(link.path)
                      ? "bg-zinc-100 dark:bg-white/10 text-zinc-950 dark:text-white"
                      : "text-zinc-500"
                  }`}
                >
                  <link.icon size={18} className="opacity-70" />
                  <span className="text-[15px] font-semibold">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
