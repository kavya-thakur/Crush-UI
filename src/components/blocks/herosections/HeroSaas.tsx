import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ChevronRight, Menu, X } from "lucide-react";

import { useState } from "react";

export const Navbar = () => {
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Features", path: "#features" },
    { name: "Pricing", path: "#pricing" },
    { name: "Use Cases", path: "#use-cases" },
    { name: "Resources", path: "#resources" },
    { name: "Contact", path: "#contact" },
  ];

  const menuVariants: Record<string, any> = {
    closed: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <nav
      className={`fixed top-6 left-4 right-4 md:left-0 md:right-0 py-2 rounded-[24px] md:rounded-full max-w-6xl bg-white backdrop-blur-lg border-zinc-200/50 backdrop-blur-2xl shadow-sm mx-auto z-[100] border-b transition-all duration-500 ease-[0.16,1,0.3,1]`}
    >
      <div className="mx-auto max-w-7xl h-full px-6 flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-12">
          {/* Logo Section */}
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative w-9 h-9 flex-shrink-0 transition-transform duration-500 group-hover:rotate-[10deg]">
              <div className="absolute left-[12.5%] top-[17.5%] w-[37.5%] h-[45.84%] bg-[#538BF3] rounded-[3px] transition-all duration-500 group-hover:left-[15%] group-hover:top-[15%]" />
              <div className="absolute left-[50%] top-[17.5%] w-[37.5%] h-[45.84%] bg-[#538BF3] rounded-[3px] transition-all duration-500 group-hover:left-[48%] group-hover:top-[20%]" />
              <div className="absolute left-[12.73%] bottom-[17.5%] w-[74.54%] h-[12.5%] bg-[#538BF3] rounded-full" />
            </div>
            <span className="font-['Geist'] text-[24px] sm:text-[28px] font-bold tracking-[-0.03em] text-black transition-all">
              acurio
            </span>
          </div>

          {/* Navigation Links with Sliding Pill Effect */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.name}
                onMouseEnter={() => setHoveredPath(link.name)}
                onMouseLeave={() => setHoveredPath(null)}
                className="relative"
              >
                <a
                  href={link.path}
                  className={`relative z-10 px-4 py-2 text-[15px] font-medium tracking-[-0.01em] transition-colors duration-300 ${
                    hoveredPath === link.name
                      ? "text-[#538BF3]"
                      : "text-[#1D1F20]"
                  }`}
                >
                  {link.name}
                </a>
                <AnimatePresence>
                  {hoveredPath === link.name && (
                    <motion.div
                      layoutId="nav-pill"
                      exit={{ opacity: 0, scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.4,
                      }}
                      className="absolute inset-0 bg-neutral-50  dark:bg-white/10 rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                    />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden sm:block text-[15px] font-medium text-[#31373D] hover:text-black transition-colors px-4">
            Sign in
          </button>

          <button
            className="
            group relative h-10 md:h-11 px-4 md:px-6 rounded-full font-medium text-[14px] md:text-[15px] 
            tracking-tight text-white overflow-hidden
            bg-[linear-gradient(180deg,#538BF3_44%,#CBDDFF_100%)]
            shadow-[0_4px_12px_-4px_rgba(83,139,243,0.4)]
            transition-all duration-300 hover:shadow-[0_8px_24px_-4px_rgba(83,139,243,0.6)]
            hover:scale-[1.02] active:scale-[0.98]
          "
          >
            <span className="relative z-10">Get a Demo</span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />
          </button>

          {/* Mobile Menu Trigger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-600 hover:text-black lg:hidden rounded-full hover:bg-zinc-100 transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:hidden w-full px-6 pt-3 pb-4 flex flex-col gap-1 border-t border-zinc-100 mt-2"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className="py-2.5 px-3 rounded-xl text-[15px] font-medium text-[#1D1F20] hover:text-[#538BF3] hover:bg-neutral-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="sm:hidden border-t border-zinc-100 mt-2 pt-2">
              <button className="w-full text-left py-2.5 px-3 text-[15px] font-medium text-[#31373D] hover:text-black rounded-xl hover:bg-neutral-50 transition-colors">
                Sign in
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSaas = () => {
  // Sophisticated Scroll Parallax for the Image
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 500], [0, -40]);
  const rotateX = useTransform(scrollY, [0, 500], [0, 5]);

  const transition = { duration: 1.4, ease: [0.16, 1, 0.3, 1] } as const;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#ffffff] dark:bg-[#080808] flex flex-col items-center selection:bg-zinc-200 dark:selection:bg-zinc-800">
      <Navbar />
      {/* Background Refinement: Minimalist Grid & Spotlight */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-zinc-100/50 dark:bg-zinc-900/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="relative z-10 flex flex-col items-center mt-32 text-center px-6"
      >
        {/* The "Micro-Badge" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, ...transition }}
          className="inline-flex items-center gap-2 px-0.5 py-0.5 rounded-full border border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.02] backdrop-blur-md mb-10"
        >
          <span className="bg-[linear-gradient(180deg,#538BF3_44%,#CBDDFF_90%)] text-neutral-50 dark:text-neutral-800 rounded-full px-3 py-1 text-xs tracking-tight">
            New
          </span>
          <span className="text-[11px] text-base tracking-[0.05em] text-zinc-500 dark:text-zinc-400  flex items-center gap-1 pr-2">
            Trusted by 1,000+ growing B2B teams <ChevronRight size={12} />
          </span>
        </motion.div>

        {/* Text Width Constraint: Max-W-3xl is the "Sweet Spot" for Titles */}
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, ...transition }}
            className="max-w-4xl text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-[-0.04em] leading-[1.05] text-zinc-900 dark:text-zinc-100"
          >
            Built For Fast,
            <br />
            <span className="flex items-center justify-center md:justify-start gap-x-4">
              Aligned
              <motion.span
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  letterSpacing: "-0.02em",
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  letterSpacing: "-0.04em",
                  rotate: -4,
                }}
                transition={{
                  delay: 0.8,
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
        relative inline-block 
        bg-[linear-gradient(180deg,#538BF3_44%,#CBDDFF_100%)] 
        bg-clip-text text-transparent
        drop-shadow-[0_2px_10px_rgba(83,139,243,0.15)]
      "
              >
                Growth
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheading Width: Constrained to 60ch for optimal reading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, ...transition }}
            className="mt-8 mx-auto text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal"
          >
            Acurio helps B2B teams streamline operations,
            <br /> collaborate, and scale with confidence.
          </motion.p>
        </div>

        {/* Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, ...transition }}
          className="flex flex-col py-10 sm:flex-row justify-center w-full gap-4"
        >
          <button
            className="
  group relative h-12 px-8 rounded-xl font-medium text-white 
  transition-all duration-300
  /* The Main Gradient */
  bg-[linear-gradient(180deg,#538BF3_44%,#CBDDFF_100%)]
  /* Premium Detailing: Inner Light & Shadow */
  shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.3)]
  hover:shadow-[0_10px_20px_-10px_rgba(83,139,243,0.5)]
  hover:scale-[1.02] active:scale-[0.98]
"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </button>
          <Link to="/demo">
            <button className="group h-12 px-8 rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-transparent text-zinc-600 dark:text-zinc-400 font-medium text-sm transition-all hover:bg-zinc-50 dark:hover:bg-white/5 flex items-center gap-2">
              Request Demo{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </Link>
        </motion.div>

        {/* Tasteful Image Handling: The "Viewport" Mockup */}
        <motion.div
          style={{ y: yImage, rotateX }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="perspective-[2000px] mt-10 w-full max-w-6xl px-4 lg:px-0"
        >
          <div className="relative rounded-[20px] border border-zinc-200 dark:border-white/10 bg-white dark:bg-zinc-900/50 p-1.5 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-2xl">
            <div className="relative aspect-[16/10] rounded-[14px] border border-zinc-100 dark:border-white/5 overflow-hidden bg-zinc-50 dark:bg-[#030303]">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.8 }}
                src="https://assets.aceternity.com/pro/landing/1.webp"
                alt="Product Dashboard"
                className="w-full h-full object-cover object-top transition-opacity"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSaas;
