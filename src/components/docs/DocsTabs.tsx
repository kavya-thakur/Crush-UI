import { motion } from "framer-motion";
import { LockKeyhole, Maximize } from "lucide-react";

type Props = {
  tab: "preview" | "code";
  setTab: (tab: "preview" | "code") => void;
  isPremium?: boolean; // Pass this from the parent block
};

export default function DocsTabs({ tab, setTab, isPremium }: Props) {
  return (
    <div className="flex my-6 w-fit bg-zinc-100 dark:bg-zinc-800/50 p-1 rounded-md border border-zinc-200 dark:border-zinc-700">
      {["preview", "code"].map((t) => {
        const isActive = tab === t;
        const isLocked = t === "code" && isPremium;

        return (
          <button
            key={t}
            onClick={() => setTab(t as "preview" | "code")}
            className={`relative flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-bold capitalize transition-all duration-200 ${
              isActive
                ? "bg-white dark:bg-zinc-900 text-black dark:text-white shadow-sm"
                : "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
            }`}
          >
            {/* Icon Logic */}
            <span className="relative z-10">
              {isLocked ? (
                <LockKeyhole size={13} strokeWidth={2.5} />
              ) : (
                <Maximize size={13} strokeWidth={2.5} />
              )}
            </span>

            {/* Label */}
            <span className="relative z-10">{t}</span>

            {/* Optional: Add the sliding motion here too if you want it extra smooth */}
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-md shadow-sm"
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
