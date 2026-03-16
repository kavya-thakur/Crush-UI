import { motion, type Variants } from "framer-motion";

const CTA_DATA = {
  label: "Take the first step",
  title: "Begin your path toward greater ease.",
  description:
    "If you’re ready to feel more grounded and supported, I invite you to schedule a consultation and take the next step toward meaningful change.",
  footer: "Currently accepting new clients in California",
  buttonText: "SCHEDULE A CONSULTATION",
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    y: 10,
  },
  visible: (i) => ({
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1.2,
      delay: i * 0.1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

export default function AnimatedCTA() {
  const titleWords = CTA_DATA.title.split(" ");

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#6B705C] text-[#F9F7F2]">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <motion.div
        className="relative max-w-4xl mx-auto px-6 md:px-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Label */}
        <motion.span
          variants={{
            hidden: { opacity: 0, letterSpacing: "0.2em" },
            visible: {
              opacity: 0.7,
              letterSpacing: "0.4em",
              transition: { duration: 1.5 },
            },
          }}
          className="text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block"
        >
          {CTA_DATA.label}
        </motion.span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-8">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word.toLowerCase().includes("ease") ? (
                <span className="italic">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h2>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, filter: "blur(4px)" },
            visible: {
              opacity: 0.8,
              filter: "blur(0px)",
              transition: { duration: 2, delay: 0.8 },
            },
          }}
          className="text-base md:text-xl font-light text-[#F9F7F2]/80 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          {CTA_DATA.description}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 1.2, duration: 1 },
            },
          }}
        >
          <motion.button
            whileHover="hover"
            className="group relative cursor-pointer inline-flex items-center gap-4 bg-[#F9F7F2] text-[#1A1A1A] px-12 py-5 rounded-full text-[11px] tracking-[0.25em] font-semibold overflow-hidden"
          >
            <motion.div
              variants={{
                hover: { scale: 1.5, opacity: 1 },
              }}
              initial={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 bg-white -z-10 transition-transform duration-500"
            />

            <span className="relative z-10">{CTA_DATA.buttonText}</span>
            <motion.span
              variants={{
                hover: { x: 5 },
              }}
              className="relative z-10 text-lg transition-transform"
            >
              →
            </motion.span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            transition={{ delay: 2 }}
            className="mt-8 text-[10px] tracking-widest uppercase"
          >
            {CTA_DATA.footer}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
