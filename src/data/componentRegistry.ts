import type { ComponentType } from "react";

/* BUTTONS */
import Button from "../components/ui/button/Button";
import { buttonCode } from "../snippets/component/buttons/buttonCode";
/* CARDS */
import { MarqueCard } from "../components/ui/cards/MarqueCard";
import { AnalyticsCard } from "../components/ui/cards/AnalyticsCard";
import { GlassSecureCard } from "../components/ui/cards/GlassSecureCard";
import { PricingHighlightCard } from "../components/ui/cards/PricingHighlightCard";
import { pricingCardCode } from "../snippets/component/cards/PricingCardCode";
import { marqueCardCode } from "../snippets/component/cards/marqueCardCode";
import { analyticsCardCode } from "../snippets/component/cards/analyticsCardCode";
import { glassCardCode } from "../snippets/component/cards/glassCardCode";
/* TEXT */
import BlurRevealText from "../components/ui/text/BlurUpAnimation";
import StaggerText from "../components/ui/text/WordStagger";
import GradientRevealText from "../components/ui/text/GradientFade";
import { blurRevealTextCode } from "../snippets/component/text/blurRevealTextCode";
import { staggerTextCode } from "../snippets/component/text/staggerTextCode";
import { gradientRevealTextCode } from "../snippets/component/text/gradientRevealTextCode";
// NAVBAR
import NavbarSaas from "../components/ui/navbars/NavbarSaas";
import { navbarSaasCode } from "../snippets/component/navigation/navbarSaasCode";
import { ColorFillingButton } from "../components/ui/button/ColorFillingButton";
import { colorfillingbuttonCode } from "../snippets/component/buttons/colorFillingButtonCode";

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
    code: buttonCode,
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
  colorFillingButton: {
    title: "Color Filling Button",
    description: "Tastefull color filling animation button using motion",
    category: "Button Components",
    dependencies: ["motion"],
    component: ColorFillingButton,
    usage: `<ColorFillingButton />`,
    code: colorfillingbuttonCode,
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
    code: navbarSaasCode,
  },
  /* CARDS */
  marqueCard: {
    title: "Marque Card",
    description:
      "A minimalist container designed to group and elevate related content with subtle borders.",
    category: "Cards Components",
    component: MarqueCard,
    dependencies: ["motion"],
    previewProps: {
      title: "ToolKit Card",
      children: "This is a modern animated card component.",
    },
    usage: `<MarqueCard />`,
    code: marqueCardCode,
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
    usage: `<AnalyticsCard />`,
    code: analyticsCardCode,
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
    code: glassCardCode,
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
    code: pricingCardCode,
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
    code: blurRevealTextCode,
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
    code: staggerTextCode,
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
    code: gradientRevealTextCode,
  },
};
