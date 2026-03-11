import { motion } from "framer-motion";

export default function ProductCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-xl border border-neutral-200 bg-white overflow-hidden shadow-sm hover:shadow-lg"
    >
      <div className="h-40 bg-neutral-100 flex items-center justify-center">
        <span className="text-neutral-400 text-sm">Preview</span>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-neutral-900 mb-1">
          Dashboard UI Kit
        </h3>

        <p className="text-sm text-neutral-500">
          Beautiful dashboard components for modern apps.
        </p>
      </div>
    </motion.div>
  );
}
