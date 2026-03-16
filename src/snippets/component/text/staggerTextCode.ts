export const staggerTextCode = `
import { motion } from "framer-motion"

export default function StaggerText() {

  const text = "Design better interfaces".split(" ")

  return (
    <h1 className="text-3xl font-semibold">
      {text.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="mr-2 inline-block text-neutral-800 dark:text-white/90"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  )
}`;
