export const gradientRevealTextCode = `
import { motion } from "framer-motion"

export default function GradientRevealText() {

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
    >
      Premium UI Components
    </motion.h2>
  )
}`;
