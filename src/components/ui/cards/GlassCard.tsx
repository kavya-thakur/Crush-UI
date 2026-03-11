import { motion } from "framer-motion";

export default function GlassCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-semibold text-white mb-2">Revenue</h3>

      <p className="text-3xl font-bold text-white">$48,392</p>

      <span className="text-sm text-green-400 mt-2 block">+12% this month</span>
    </motion.div>
  );
}
