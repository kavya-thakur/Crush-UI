import { motion } from "framer-motion";

export default function FeatureCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md"
    >
      <div className="mb-4 h-10 w-10 rounded-md bg-neutral-900 flex items-center justify-center text-white text-sm font-medium">
        AI
      </div>

      <h3 className="text-base font-semibold text-neutral-900 mb-2">
        AI Powered
      </h3>

      <p className="text-sm text-neutral-500 leading-relaxed">
        Build intelligent experiences with our AI driven components and tools.
      </p>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-b from-transparent to-neutral-100/40" />
    </motion.div>
  );
}
