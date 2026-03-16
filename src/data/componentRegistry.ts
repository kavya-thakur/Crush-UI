import type { ComponentType } from "react";

/* BUTTONS */
import Button from "../components/ui/button/Button";
/* CARDS */

/* TEXT */
import BlurRevealText from "../components/ui/text/BlurUpAnimation";
import StaggerText from "../components/ui/text/WordStagger";
import GradientRevealText from "../components/ui/text/GradientFade";

import { UltraPolishedCard } from "../components/ui/cards/MarqueCard";
import { AnalyticsCard } from "../components/ui/cards/AnalyticsCard";
import { GlassSecureCard } from "../components/ui/cards/GlassSecureCard";
import { PricingHighlightCard } from "../components/ui/cards/PricingHighlightCard";
import NavbarSaas from "../components/ui/navbars/NavbarSaas";

type ComponentVariant = {
  name: string;
  props?: Record<string, any>;
  code: string;
};

export type ComponentDoc = {
  title: string;
  description: string;
  category: string;
  component: ComponentType<any>;
  premium?: boolean;
  usage?: string;
  code?: string;
  installation?: string;
  dependencies?: string[];
  previewProps?: Record<string, any>;
  previewHeight?: number;
  variants?: ComponentVariant[];
};

export const componentRegistry: Record<string, ComponentDoc> = {
  /* BUTTON */
  button: {
    title: "Interactive Button",
    description:
      "An essential action trigger with support for multiple semantic variants and smooth haptic scaling.",
    category: "Button Components",
    component: Button,
    // premium: true,
    previewProps: { variant: "primary", children: "Click me" },
    usage: `<Button variant="primary">Click me</Button>`,
    code: `
export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
}) {

  const base =
    "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"

  const styles = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.98]",
    secondary:
      "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:scale-[0.98]",
    ghost:
      "text-neutral-700 hover:bg-neutral-100 active:scale-[0.98]",
  }

  return (
    <button className={\`\${base} \${styles[variant]}\`}>
      {children}
    </button>
  )
}
`,
    variants: [
      {
        name: "Primary",
        props: { variant: "primary", children: "Primary Button" },
        code: `<Button variant="primary">Primary Button</Button>`,
      },
      {
        name: "Secondary",
        props: { variant: "secondary", children: "Secondary Button" },
        code: `<Button variant="secondary">Secondary Button</Button>`,
      },
      {
        name: "Ghost",
        props: { variant: "ghost", children: "Ghost Button" },
        code: `<Button variant="ghost">Ghost Button</Button>`,
      },
    ],
  },

  // NAVIGATOINS

  navbarSaas: {
    title: "Navbar SaaS",
    description: "Standard SaaS navigation with primary CTA button.",
    category: "Navigation",
    component: NavbarSaas,
    previewHeight: 120,
    dependencies: ["motion"],
    usage: `<NavbarSaas />`,
    code: `
    import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const LogoIcon = () => (
  <div className="size-8 bg-black rounded-lg flex items-center justify-center">
    <div className="size-2 bg-white rotate-45" />
  </div>
);

const NavbarSaas = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="fixed top-6 left-1/2 z-[100] flex w-[calc(100%-2rem)] max-w-7xl -translate-x-1/2 items-center justify-between rounded-[1.25rem] border border-[#eaedf1] bg-white/80 px-6 py-3 backdrop-blur-md shadow-sm transition-all md:px-8">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <LogoIcon />
        <span className="text-[1.125rem] md:text-[1.25rem] font-bold tracking-tight text-black">
          Notus
        </span>
      </div>

      {/* Desktop Links (Hidden on mobile) */}
      <div className="hidden items-center gap-8 text-[.875rem] font-medium text-[#6b6b6b] md:flex">
        {["Features", "Pricing", "FAQ", "Careers"].map((link) => (
          <a
            key={link}
            href={#}
            className="transition-colors hover:text-black"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Desktop Actions (Hidden on mobile) */}
      <div className="hidden items-center gap-3 md:flex">
        <button className="rounded-[0.75rem] bg-black px-5 py-2.5 text-[.875rem] font-semibold text-white transition hover:bg-zinc-800 active:scale-95">
          Start building
        </button>
      </div>

      {/* Mobile Menu Toggle (Visible only on mobile) */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="flex p-2 text-black md:hidden"
      >
        {isMobileMenuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-[calc(100%+12px)] w-full overflow-hidden rounded-[1.25rem] border border-[#eaedf1] bg-white p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {["Features", "Pricing", "FAQ", "Careers"].map((link) => (
                <a
                  key={link}
                  href={#}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[1rem] font-medium text-[#6b6b6b]"
                >
                  {link}
                </a>
              ))}
              <hr className="border-[#eaedf1]" />
              <button className="w-full rounded-[0.75rem] bg-black py-3 font-semibold text-white">
                Start building
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavbarSaas;
`,
  },
  /* CARDS */
  marqueCard: {
    title: "Marque Card",
    description:
      "A minimalist container designed to group and elevate related content with subtle borders.",
    category: "Cards Components",
    component: UltraPolishedCard,
    dependencies: ["motion"],
    previewProps: {
      title: "ToolKit Card",
      children: "This is a modern animated card component.",
    },
    usage: `<Card title="Example">Content</Card>`,
    code: `
  import React from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

export const UltraPolishedCard: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen b dark:bg-neutral-950 transition-colors duration-500">
      <motion.div
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-sm w-full mx-auto p-[1px] rounded-[2.5rem] bg-gradient-to-b from-black/[0.1] to-transparent dark:from-white/[0.15] dark:to-transparent shadow-2xl group"
      >
        <div className="bg-white dark:bg-neutral-900 rounded-[2.4rem] p-8 border border-black/5 dark:border-white/5 relative overflow-hidden">
          {/* THE MARQUEE SECTION */}
          <div className="h-48 w-full relative mb-8 rounded-3xl bg-gray-100/50 dark:bg-neutral-800/40 overflow-hidden border border-black/[0.03] dark:border-white/[0.03]">
            {/* Soft Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-16 z-20 bg-gradient-to-r from-gray-100 dark:from-neutral-800 to-transparent opacity-100" />
            <div className="absolute inset-y-0 right-0 w-16 z-20 bg-gradient-to-l from-gray-100 dark:from-neutral-800 to-transparent opacity-100" />

            <div className="absolute inset-0 flex flex-col justify-center gap-6 opacity-40 group-hover:opacity-80 transition-opacity duration-700">
              {/* Marquee Row 1 */}
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-6"
              >
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-xl bg-black/5 dark:bg-white/5 flex-shrink-0 border border-black/5 dark:border-white/10"
                  />
                ))}
              </motion.div>

              {/* Marquee Row 2 */}
              <motion.div
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap gap-6"
              >
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-xl bg-black/5 dark:bg-white/5 flex-shrink-0 border border-black/5 dark:border-white/10"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* TEXT CONTENT SECTION */}
          <motion.div
            variants={itemVariants}
            className="space-y-3 relative z-40"
          >
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                Damn good card
              </h3>
              <span className="flex h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_8px_#0ea5e9]" />
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed text-[15px]">
              A card that showcases a set of tools that you use to create your
              product. Built with staggered marquees and magnetic physics.
            </p>
          </motion.div>

          {/* ACTION FOOTER */}
          <motion.div
            variants={itemVariants}
            className="mt-8 pt-6 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between"
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-200 dark:bg-neutral-800"
                />
              ))}
            </div>
            <button className="text-sm font-bold bg-neutral-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-2xl hover:scale-105 active:scale-95 transition-transform duration-200">
              Get Started
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
  `,
  },
  analyticsCard: {
    title: "Stats Card",
    description:
      "A minimalist container designed to group and elevate related content with subtle borders.",
    category: "Cards Components",
    dependencies: ["motion"],
    component: AnalyticsCard,
    previewProps: {
      title: "ToolKit Card",
      children: "This is a modern animated card component.",
    },
    usage: `<Card title="Example">Content</Card>`,
    code: `
  export default function Card({ title, children }) {
    return (
      <div className="border border-neutral-200 rounded-xl p-6 bg-white shadow-sm">
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="text-neutral-600 text-sm">{children}</div>
      </div>
    )
  }
  `,
  },
  glassCard: {
    title: "Glass Card",
    description:
      "A minimalist container designed to group and elevate related content with subtle borders.",
    category: "Cards Components",
    component: GlassSecureCard,
    dependencies: ["motion"],
    previewProps: {
      title: "ToolKit Card",
      children: "This is a modern animated card component.",
    },
    usage: `<Card title="Example">Content</Card>`,
    code: `
 import { motion } from "motion/react";

export const GlassSecureCard: React.FC = () => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="max-w-sm w-full aspect-[1.586/1] rounded-3xl p-8 relative overflow-hidden bg-gradient-to-br from-neutral-800 to-black border border-white/20 shadow-2xl"
    >
      {/* Holographic Shimmer Effect */}
      <motion.div
        animate={{ x: ["-150%", "150%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
      />

      <div className="flex justify-between items-start h-full flex-col">
        <div className="flex justify-between w-full items-center">
          <div className="h-10 w-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md opacity-80" />
          <svg
            className="h-8 w-8 text-white/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>

        <div className="space-y-4 w-full">
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-xl font-mono text-white/80 tracking-widest"
              >
                ••••
              </span>
            ))}
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">
                Card Holder
              </p>
              <p className="text-sm font-medium text-white/90">
                ALEXANDER PRESTON
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">
                Expires
              </p>
              <p className="text-sm font-medium text-white/90">12/28</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

  `,
  },
  PricingCard: {
    title: "Pricing Card",
    description:
      "A minimalist container designed to group and elevate related content with subtle borders.",
    category: "Cards Components",
    component: PricingHighlightCard,
    dependencies: ["motion"],
    previewProps: {
      title: "ToolKit Card",
      children: "This is a modern animated card component.",
    },
    usage: `<Card title="Example">Content</Card>`,
    code: `
  import React from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.08,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

const itemVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
};

export const PricingHighlightCard: React.FC = () => {
  const features = [
    "Unlimited Projects",
    "24/7 Priority Support",
    "Advanced Analytics",
    "Custom Integrations",
    "Team Collaboration",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="max-w-sm w-full p-[1px] rounded-[2.5rem] bg-gradient-to-b from-zinc-200/50 via-transparent to-transparent dark:from-zinc-700/30 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group"
    >
      <div className="bg-white dark:bg-[#09090b] rounded-[2.4rem] p-8 relative overflow-hidden border border-zinc-100 dark:border-zinc-800">
        {/* Subtle Background Glow - Fixed Position */}
        <div className="absolute -top-24 -right-24 h-48 w-48 bg-indigo-500/5 blur-[80px] rounded-full pointer-events-none" />

        {/* Improved Scanning Beam - Triggered on Group Hover */}
        <motion.div
          initial={{ top: "-100%" }}
          whileHover={{ top: "120%" }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.5,
          }}
          className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-indigo-500/[0.03] dark:via-indigo-400/[0.05] to-transparent z-0 pointer-events-none"
        />

        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <motion.span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                Most Popular
              </motion.span>
              <h3 className="text-4xl font-bold tracking-tight mt-4 text-zinc-900 dark:text-zinc-50">
                $49
                <span className="text-base font-normal text-zinc-400 dark:text-zinc-500 italic">
                  /mo
                </span>
              </h3>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-100 dark:from-white/5 dark:via-white/10 dark:to-white/5 mb-8" />

          {/* Feature List */}
          <ul className="space-y-4">
            {features.map((feat, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 group/item"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center border border-indigo-100 dark:border-indigo-500/20"
                >
                  <svg
                    className="h-3 w-3 text-indigo-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <span className="group-hover/item:text-zinc-900 dark:group-hover/item:text-zinc-200 transition-colors duration-200">
                  {feat}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Button Section */}
          <div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative py-4 px-6 flex items-center justify-center rounded-2xl bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-950 font-semibold text-sm shadow-lg shadow-zinc-950/20 dark:shadow-none hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">Get Started with Pro</span>
              <motion.div className="absolute inset-0 bg-indigo-500 opacity-0 hover:opacity-10 dark:hover:opacity-20 transition-opacity rounded-2xl" />
            </motion.button>
            <p className="text-center text-[11px] text-zinc-400 dark:text-zinc-500 mt-4 tracking-tight">
              30-day money back guarantee. No hidden fees.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

  `,
  },
  /* TEXT ANIMATIONS */
  blurRevealText: {
    title: "Cinematic Blur Reveal",
    description:
      "A smooth entrance animation that transitions from Gaussian blur to sharp focus.",
    category: "Text Components",
    component: BlurRevealText,
    dependencies: ["motion"],
    previewHeight: 120,
    usage: `<BlurRevealText />`,
    code: `
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
}
`,
  },

  staggerText: {
    title: "Rhythmic Stagger",
    description:
      "Animates words sequentially to create a dynamic reading experience.",
    category: "Text Components",
    component: StaggerText,
    dependencies: ["motion"],
    previewHeight: 120,
    usage: `<StaggerText />`,
    code: `
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
}
`,
  },

  gradientRevealText: {
    title: "Gradient Text Reveal",
    description:
      "A high-impact heading animation utilizing dynamic linear gradient masks.",
    category: "Text Components",
    component: GradientRevealText,
    previewHeight: 120,
    dependencies: ["motion"],
    usage: `<GradientRevealText />`,
    code: `
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
}
`,
  },
};
