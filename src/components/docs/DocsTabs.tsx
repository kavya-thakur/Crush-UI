// // import { motion } from "framer-motion";

// // type Props = {
// //   tab: "preview" | "code";
// //   setTab: (tab: "preview" | "code") => void;
// // };

// // export default function DocsTabs({ tab, setTab }: Props) {
// //   return (
// //     <div className="mb-10 flex w-fit items-center gap-1 rounded-full border border-zinc-200/50 bg-zinc-100/50 p-1 dark:border-white/5 dark:bg-white/5">
// //       {["preview", "code"].map((t) => {
// //         const isActive = tab === t;

// //         return (
// //           <button
// //             key={t}
// //             onClick={() => setTab(t as "preview" | "code")}
// //             className={`relative px-6 py-2 text-xs font-bold capitalize transition-colors duration-200 whitespace-nowrap ${
// //               isActive
// //                 ? "text-zinc-950 dark:text-white"
// //                 : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
// //             }`}
// //           >
// //             {/* The Text Label */}
// //             <span className="relative z-10">{t}</span>

// //             {/* The Sliding Pill Background */}
// //             {isActive && (
// //               <motion.div
// //                 layoutId="active-pill-docs"
// //                 className="absolute inset-0 rounded-full bg-white shadow-sm dark:bg-zinc-800"
// //                 transition={{
// //                   type: "spring",
// //                   bounce: 0.15,
// //                   duration: 0.5,
// //                 }}
// //               />
// //             )}
// //           </button>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// import { motion } from "framer-motion";

// type Props = {
//   tab: "preview" | "code";
//   setTab: (tab: "preview" | "code") => void;
// };

// export default function DocsTabs({ tab, setTab }: Props) {
//   return (
//     <div className="mb-10 flex w-fit items-center gap-1 rounded-xl border border-zinc-200 bg-white p-1 dark:border-white/10 dark:bg-[#09090b]">
//       {["preview", "code"].map((t) => {
//         const isActive = tab === t;

//         return (
//           <button
//             key={t}
//             onClick={() => setTab(t as "preview" | "code")}
//             className={`relative px-5 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] transition-colors duration-200 whitespace-nowrap ${
//               isActive
//                 ? "text-white dark:text-black"
//                 : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
//             }`}
//           >
//             {/* The Text Label */}
//             <span className="relative z-10">{t}</span>

//             {/* The Sliding Background */}
//             {isActive && (
//               <motion.div
//                 layoutId="active-tab-indicator"
//                 className="absolute inset-0 rounded-lg bg-zinc-950 dark:bg-white"
//                 transition={{
//                   type: "tween",
//                   ease: [0.19, 1, 0.22, 1], // Same exponential ease as your cards
//                   duration: 0.4,
//                 }}
//               />
//             )}
//           </button>
//         );
//       })}
//     </div>
//   );
// }

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
