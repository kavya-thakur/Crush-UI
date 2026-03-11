import { motion } from "framer-motion";

type Props = {
  component: any;
  variant?: string;
};

export default function ComponentPreview({
  component: Component,
  variant,
}: Props) {
  return (
    <div className="relative min-h-[300px] md:h-[450px] w-full overflow-hidden rounded-[32px] border border-zinc-200 bg-white dark:border-zinc-800/50 dark:bg-[#030303] flex items-center justify-center p-6 sm:p-12 transform-gpu">
      {/* grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full flex justify-center overflow-x-auto py-4"
      >
        {variant ? (
          <Component variant={variant.toLowerCase()}>Button</Component>
        ) : (
          <Component />
        )}
      </motion.div>
    </div>
  );
}
