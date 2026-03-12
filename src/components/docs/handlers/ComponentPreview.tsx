import { motion } from "framer-motion";
import React from "react";

type Props = {
  component: React.ComponentType<any>;
  variant?: string;
};

export default function ComponentPreview({
  component: Component,
  variant,
}: Props) {
  return (
    <div className="relative w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-white dark:border-zinc-700/70 dark:bg-[#030303] transition-all duration-300 transform-gpu">
      {/* FIX 1: Changed items-start to items-center 
          FIX 2: Added min-h-[450px] to give the "Luxury" cards room to breathe
      */}
      <div className="relative z-10 w-full min-h-[250px] max-h-[600px] overflow-hidden flex items-center justify-center custom-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full flex items-center justify-center p-8"
        >
          {variant ? (
            <div className="flex items-center justify-center">
              <Component variant={variant.toLowerCase()}>Button</Component>
            </div>
          ) : (
            /* FIX 3: Removed the extra w-full wrapper and ensured 
               the Component itself is centered via the parent flex 
            */
            <Component />
          )}
        </motion.div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px; /* Thinner is more 'premium' */
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(128, 128, 128, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(128, 128, 128, 0.2);
        }
      `}</style>
    </div>
  );
}

// import { motion } from "framer-motion";
// import React from "react";

// type Props = {
//   component: React.ComponentType<any>;
//   variant?: string;
//   category?: string;
// };

// export default function ComponentPreview({
//   component: Component,
//   variant,
//   category = "",
// }: Props) {
//   // 1. SENSING: Identify the type of component from your registry categories
//   const isNav = category.toLowerCase().includes("navigation");
//   const isCard = category.toLowerCase().includes("cards");
//   const isText = category.toLowerCase().includes("text");

//   return (
//     <div className="relative w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50/50 dark:border-zinc-800/50 dark:bg-[#030303] transition-all duration-300">
//       {/* Premium Blueprint Grid */}
//       <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:32px_32px]" />

//       <div className="relative z-10 w-full min-h-[500px] max-h-[900px] overflow-y-auto overflow-x-hidden flex flex-col custom-scrollbar">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//           className={`w-full flex-1 flex p-6 md:p-12 ${
//             isNav ? "items-start" : "items-center justify-center"
//           }`}
//         >
//           {/* FIX: The Virtual Stage.
//             For Navbars: We force 100% width but scale it down so it fits the card.
//             For Cards: We scale them down so the shadows and borders aren't cut.
//           */}
//           <div
//             className="w-full flex justify-center transform-gpu"
//             style={{
//               // Aggressive scaling for layouts to prevent "cutting"
//               transform: isNav ? "scale(0.8)" : isCard ? "scale(0.85)" : "scale(1)",
//               transformOrigin: isNav ? "top center" : "center center",
//             }}
//           >
//             <div className={`${isNav ? "w-full min-w-[1000px]" : "w-auto"} transition-all`}>
//               {variant ? (
//                 <Component variant={variant.toLowerCase()}>Button</Component>
//               ) : (
//                 <Component />
//               )}
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* TASTE: Subtle Gradient at the bottom to indicate more content if it scrolls */}
//       <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white dark:from-[#030303] to-transparent pointer-events-none z-20" />

//       <style>{`
//         .custom-scrollbar::-webkit-scrollbar { width: 5px; }
//         .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(128, 128, 128, 0.2);
//           border-radius: 20px;
//         }
//       `}</style>
//     </div>
//   );
// }
