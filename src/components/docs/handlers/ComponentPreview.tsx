import { motion } from "framer-motion";

import type { ComponentType } from "react";

type Props = {
  component: ComponentType<any>;
  variant?: string;
  category?: string;
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
