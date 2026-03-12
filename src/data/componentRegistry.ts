import { ComponentType } from "react";

/* BUTTONS */
import Button from "../components/ui/button/Button";
/* CARDS */

/* TEXT */
import BlurRevealText from "../components/ui/text/BlurUpAnimation";
import StaggerText from "../components/ui/text/WordStagger";
import GradientRevealText from "../components/ui/text/GradientFade";

import NavbarMinimal from "../components/ui/navbars/NavbarMinimal";
import PremiumNavbar from "../components/ui/navbars/NavbarSaas";
import { UltraPolishedCard } from "../components/ui/cards/MarqueCard";
import { BentoAnalyticsCard } from "../components/ui/cards/BentoAnalyticsCard";
import { GlassSecureCard } from "../components/ui/cards/GlassSecureCard";
import { PricingHighlightCard } from "../components/ui/cards/PricingHighlightCard";

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
  navbarMinimal: {
    title: "Navbar Minimal",
    description: "Minimal navigation bar with logo and rolling text animation.",
    category: "Navigation",
    component: NavbarMinimal,
    previewHeight: 120,
    dependencies: ["framer-motion"],
    usage: `<NavbarMinimal />`,
    code: `import { useState } from "react";
import { motion } from "framer-motion";

const AnimatedLinkText = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative overflow-hidden cursor-pointer inline-block"
      style={{ height: "1.25em" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top text */}
      <motion.span
        style={{ display: "block" }}
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>

      {/* Bottom text */}
      <motion.span
        style={{
          display: "block",
          position: "absolute",
          top: "100%",
          left: 0,
        }}
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
};

const NavbarMinimal = () => {
  return (
    <nav className="flex justify-between p-2">
      <div className="flex flex-col md:text-base dark:text-neutral-100">
        <h3 className="font-semibold">By Kav</h3>
        <p className="text-sm md:text-base w-29 text-gray-500 dark:text-neutral-300">
          (Web Designer & Web Developer)
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:gap-2 lg:text-xl">
        {[
          { href: "/resume.pdf", label: "Resume," },
          { href: "#services", label: "Services," },
          { href: "#work", label: "Work," },
          { href: "#about", label: "About," },
          { href: "#contact", label: "Contact," },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-gray-700 hover:text-gray-900 dark:text-neutral-100 dark:hover:text-gray-300"
            style={{ display: "inline-block", position: "relative" }}
          >
            <AnimatedLinkText text={label} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavbarMinimal;
`,
  },

  navbarSaas: {
    title: "Navbar SaaS",
    description: "Standard SaaS navigation with primary CTA button.",
    category: "Navigation",
    component: PremiumNavbar,
    previewHeight: 120,
    usage: `<NavbarSaas />`,
    code: `// ... your code string`,
  },
  /* CARDS */
  card: {
    title: "Marque Card",
    description:
      "A minimalist container designed to group and elevate related content with subtle borders.",
    category: "Cards Components",
    component: UltraPolishedCard,
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
  bentoCard: {
    title: "Marque Card",
    description:
      "A minimalist container designed to group and elevate related content with subtle borders.",
    category: "Cards Components",
    component: BentoAnalyticsCard,
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
  PricingCard: {
    title: "Pricing Card",
    description:
      "A minimalist container designed to group and elevate related content with subtle borders.",
    category: "Cards Components",
    component: PricingHighlightCard,
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
  /* TEXT ANIMATIONS */
  blurRevealText: {
    title: "Cinematic Blur Reveal",
    description:
      "A smooth entrance animation that transitions from Gaussian blur to sharp focus.",
    category: "Text Components",
    component: BlurRevealText,
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
