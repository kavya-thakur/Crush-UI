export const localyzerFooterCode = `
import { motion, useScroll, useTransform } from "framer-motion";

export default function LocalyzerFooter() {
  const { scrollYProgress } = useScroll();
  const yOffset = useTransform(scrollYProgress, [0.8, 1], [0, -50]);

  const navLinks = ["Home", "About", "Solutions", "Blog", "Contact"];

  return (
    <footer className=" relative w-full overflow-hidden bg-slate-50 text-slate-900 transition-colors duration-500 selection:bg-[#00d9cc] selection:text-[#003f3a] dark:bg-[#001f1d] dark:text-white">
      {/* --- EXTRA-SMOOTH INFINITE MARQUEE --- */}
      <div className="relative border-y border-slate-200 py-6 mb-16 flex overflow-hidden dark:border-white/10 sm:py-10 md:mb-24">
        <div className="flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <MarqueeContent key={i} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end lg:gap-24">
          {/* LEFT SIDE: BRAND & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="max-w-xl font-sans text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.05] tracking-tight">
              Boost efficiency, save time, and{" "}
              <span className="italic text-[#00a89e] dark:text-[#00d9cc]">
                enhance your campaigns
              </span>{" "}
              with Localyzer.
            </h2>

            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#fafa45] px-10 py-5 text-sm font-bold uppercase tracking-[0.15em] text-[#003f3a] transition-all hover:bg-[#ffff60]"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 z-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE: NAV & SOCIAL */}
          <div className="flex flex-col items-start gap-12 lg:items-end lg:gap-20">
            <nav className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-[0.2em] sm:gap-x-12 lg:justify-end">
              {navLinks.map((item, idx) => (
                <motion.a
                  key={item}
           href={\`#\${item.toLowerCase()}\`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={\`relative overflow-hidden transition-colors hover:text-[#00a89e] dark:hover:text-[#00d9cc]\`}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <div className="flex gap-4">
              <SocialButton platform="Facebook" />
              <SocialButton platform="LinkedIn" />
              <SocialButton platform="Instagram" />
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <motion.div
          style={{ y: yOffset }}
          className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-slate-200 pt-10 dark:border-white/5 md:flex-row"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-white/20">
            © 2026 Localyzer. Engineering Excellence.
          </p>
          <div className="flex gap-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-white/20">
            {["Imprint", "Terms", "Privacy"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

function MarqueeContent() {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="flex flex-shrink-0 items-center"
    >
      <span className="text-[clamp(4rem,10vw,8rem)] font-black italic leading-none tracking-tighter text-[#00a89e] dark:text-[#00d9cc]">
        LEVEL UP YOUR ADS REACH —&nbsp;
      </span>
    </motion.div>
  );
}

function SocialButton({ platform }: { platform: string }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -8 }}
      className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 transition-all hover:border-[#00d9cc] hover:bg-[#00d9cc] dark:border-white/10"
    >
      <div className="absolute inset-0 scale-0 rounded-full bg-[#00d9cc] transition-transform duration-300 group-hover:scale-100" />
      <span className="relative z-10 text-[10px] font-black uppercase tracking-tighter text-slate-900 group-hover:text-[#003f3a] dark:text-white">
        {platform.substring(0, 2)}
      </span>
    </motion.a>
  );
}

`;
