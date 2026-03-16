export const growmytherapyfooterCode = `
import { motion, type Variants } from "framer-motion";

const NAV_ITEMS = ["About", "Approach", "Specialties", "Contact"];

const FOOTER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const COLUMN_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LINK_VARIANTS = {
  hover: { x: 4, color: "#FFFFFF", transition: { duration: 0.3 } },
};

export default function growmytherapyFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-[#F9F7F2] pt-24 pb-12 border-t border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={FOOTER_CONTAINER}
        className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {/* Brand Identity Column */}
          <motion.div
            variants={COLUMN_VARIANTS}
            className="md:col-span-6 flex flex-col justify-between"
          >
            <div className="overflow-hidden">
              <h3 className="text-3xl md:text-4xl font-serif font-light mb-6 tracking-tight">
                Dr. Maya Reynolds, <span className="italic">PsyD</span>
              </h3>
              <p className="text-[#F9F7F2]/60 font-light max-w-sm leading-relaxed text-sm md:text-base">
                Clinical Psychologist specializing in EMDR and Trauma Recovery.
                Providing grounded, evidence-based care for individuals in Santa
                Monica and throughout California via Telehealth.
              </p>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={COLUMN_VARIANTS} className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#6B705C] font-bold mb-8">
              Practice
            </h4>
            <nav className="flex flex-col gap-4 text-[13px] tracking-wide font-light">
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item}
                  href={\`#$\{item.toLowerCase()}\`}
                  whileHover="hover"
                  variants={LINK_VARIANTS}
                  className="text-[#F9F7F2]/70 transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Location Column */}
          <motion.div variants={COLUMN_VARIANTS} className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#6B705C] font-bold mb-8">
              Location
            </h4>
            <address className="not-italic font-light leading-relaxed text-[#F9F7F2]/70 text-[13px] tracking-wide">
              Santa Monica Professional Suites
              <br />
              1234 Ocean Ave, Suite 45
              <br />
              Santa Monica, CA 90401
              <br />
              <button
                onClick={scrollToTop}
                className="mt-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#6B705C] hover:text-[#F9F7F2] transition-colors group cursor-pointer"
              >
                Back to Top
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="inline-block"
                >
                  ↑
                </motion.span>
              </button>
            </address>
          </motion.div>
        </div>

        {/* Legal & Fine Print */}
        <motion.div
          variants={COLUMN_VARIANTS}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-[10px] tracking-[0.25em] text-[#F9F7F2]/30 uppercase"
            >
              © {currentYear} Dr. Maya Reynolds
            </motion.p>
            <p className="text-[9px] tracking-[0.1em] text-[#F9F7F2]/20 uppercase">
              Resilience Through Depth • Licensed Clinical Psychologist
            </p>
          </div>

          <div className="flex gap-10 text-[10px] tracking-[0.25em] text-[#F9F7F2]/30 uppercase">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: "#F9F7F2", opacity: 1 }}
                className="transition-all duration-300"
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

`;
