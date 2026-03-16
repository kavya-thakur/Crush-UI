export const blurRevealTextCode = `
import { motion } from "framer-motion"

export default function BlurRevealText() {

  return (
    <motion.h1
      initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl font-bold text-neutral-900"
    >
      Build Beautiful Interfaces
    </motion.h1>
  )
}`;
