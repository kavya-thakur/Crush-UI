import React, { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, Moon, Sun } from "lucide-react";

interface IframeProps {
  children: React.ReactNode;
  title: string;
  view?: "desktop" | "tablet" | "mobile";
  setView?: (v: "desktop" | "tablet" | "mobile") => void;
  onClose?: () => void;
  isFullPage?: boolean;
}

export default function IframeWrapper({
  children,
  title,
  view = "desktop",
  setView,
  onClose,
  isFullPage = false,
}: IframeProps) {
  const [ref, setRef] = useState<HTMLIFrameElement | null>(null);

  // Theme State Management
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );

  const widths = { desktop: "100%", tablet: "768px", mobile: "390px" };

  // 1. Style & Theme Sync Logic
  useLayoutEffect(() => {
    const iframeDoc = ref?.contentWindow?.document.documentElement;
    const headNode = ref?.contentWindow?.document.head;

    if (!ref || !headNode || !iframeDoc) return;

    // Sync Tailwind Styles
    const styleTags = Array.from(
      document.querySelectorAll("style, link[rel='stylesheet']"),
    );
    headNode.innerHTML = "";
    styleTags.forEach((tag) => headNode.appendChild(tag.cloneNode(true)));

    // Sync Theme Class and Base Styles
    iframeDoc.className = document.documentElement.className;
    iframeDoc.style.height = "100%";
    ref.contentWindow!.document.body.style.backgroundColor = "transparent";
  }, [ref, children, isDark]);

  // 2. Theme Toggle Handler
  const toggleTheme = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;

    if (newIsDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setIsDark(newIsDark);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center bg-white  overflow-hidden transition-colors duration-500">
      {/* --- Aceternity Floating Dock --- */}
      <div className="absolute bottom-10 z-[200] flex w-full justify-center px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2 rounded-2xl border border-zinc-200/50 dark:border-white/10 bg-white/70 dark:bg-black/60 p-2 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          {/* Breadcrumb Title */}
          <div className="hidden md:flex items-center gap-2 px-3 text-zinc-500 dark:text-zinc-400 text-[13px] font-medium border-r border-zinc-200 dark:border-white/10 mr-1">
            <span className="truncate max-w-[120px]">{title}</span>
          </div>

          {/* Viewport Toggles */}
          <div className="flex items-center gap-1 border-x border-zinc-200 dark:border-white/10 px-2 mx-1">
            <DockIconButton
              active={view === "desktop"}
              onClick={() => setView?.("desktop")}
              icon={<Monitor size={16} />}
            />
            <DockIconButton
              active={view === "tablet"}
              onClick={() => setView?.("tablet")}
              icon={<Tablet size={16} />}
            />
            <DockIconButton
              active={view === "mobile"}
              onClick={() => setView?.("mobile")}
              icon={<Smartphone size={16} />}
            />
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center gap-1">
            <DockIconButton
              onClick={toggleTheme}
              icon={isDark ? <Sun size={16} /> : <Moon size={16} />}
            />
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className="ml-2 flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-white px-4 py-2 text-xs text-white dark:text-black transition-transform hover:scale-105 active:scale-95"
          >
            {isFullPage ? "Exit Preview" : "All Access"}
          </button>
        </motion.div>
      </div>

      {/* --- Main Stage --- */}
      <motion.div
        animate={{ width: widths[view] }}
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
        className="relative h-full border-x border-zinc-100 dark:border-white/20 bg-white dark:bg-[#030303] shadow-2xl dark:shadow-white dark:shadow-2xl"
      >
        <iframe
          title={title}
          ref={setRef}
          className="h-full w-full border-none transition-opacity duration-300"
        >
          {ref?.contentWindow?.document.body &&
            createPortal(children, ref.contentWindow.document.body)}
        </iframe>
      </motion.div>
    </div>
  );
}

function DockIconButton({
  icon,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex h-9 w-9 items-center justify-center rounded-xl transition-all ${
        active
          ? "bg-zinc-100 dark:bg-white/20 text-zinc-900 dark:text-white"
          : "text-zinc-500 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white dark:text-neutral-200"
      }`}
    >
      {icon}
    </button>
  );
}
