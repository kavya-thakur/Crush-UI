import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import type { ComponentType } from "react";

type Props = {
  component: ComponentType<any>;
  variant?: string;
  category?: string;
};

function ComponentPreview({ component: Component, variant }: Props) {
  const variantValue = useMemo(
    () => (variant ? variant.toLowerCase() : undefined),
    [variant],
  );

  return (
    <div className="relative w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-white dark:border-zinc-700/60 dark:bg-[#030303] transition-all duration-300 transform-gpu">
      <div className="relative z-10 w-full min-h-[450px] md:min-h-[350px] py-4 px-4 lg:py-8 max-h-[700px] md:max-h-[600px] overflow-hidden flex items-center justify-center custom-scrollbar">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full flex items-center justify-center"
        >
          {variantValue ? (
            <div className="flex items-center justify-center">
              <Component variant={variantValue}>Button</Component>
            </div>
          ) : (
            <Component />
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default memo(ComponentPreview);
