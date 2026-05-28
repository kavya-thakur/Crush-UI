import type { ComponentType } from "react";

/* HERO */
import Hero from "../components/blocks/herosections/HeroSaas";
import HeroAgents from "../components/blocks/herosections/HeroAgent";
import { HiringAgency } from "../components/templates/NewLanding";
/* CTA */
import SimpleCTA from "../components/blocks/CTA/SimpleCTA";
// FOOTER
import JitterFooter from "../components/blocks/footers/JitterFooter";
import LocalyzerFooter from "../components/blocks/footers/LocalyzerFooter";
import { TidescapeFooter } from "../components/blocks/footers/TidescapeFooter";
import growmytherapyFooter from "../components/blocks/footers/growmytherapyFooter";

// GRID
import BentoGrid from "../components/blocks/Grids/BentoGrid";
// TESTIMONIALS
import MarqueeTestimonials from "../components/blocks/testimonials/MarqueeTestimonials";
import AnimatedCTA from "../components/blocks/CTA/AnimatedCTA";
import { FeaturesSectionWithSkeleton } from "../components/blocks/features/FeatureSpecialties";
import { AutomationFlowWithSkeletons } from "../components/blocks/features/AutomationFlow";

/* TYPES */
type BlockDoc = {
  title: string;
  description: string;
  category:
    | "Hero Sections"
    | "Feature Sections"
    | "Marketing"
    | "Sections"
    | "Footer Sections"
    | "Testimonial Sections"
    | "Grids";
  component: ComponentType<any>;
  isPro?: boolean;
  usage?: string;
  code?: string;
  previewHeight?: number;
  dependencies?: string[] | undefined;
};

export const blockRegistry: Record<string, BlockDoc> = {
  /* HERO CATEGORY */

  heroSaas: {
    title: "Hero Saas",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Hero Sections",
    component: Hero,
    isPro: true,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<Hero />`,
  },
  heroAgents: {
    title: "Hero Agents",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Hero Sections",
    component: HeroAgents,
    isPro: true,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<HeroAgents />`,
  },
  hiringAgency: {
    title: "Hiring Agency",
    description:
      "Hiring Agency hero section with clip-path image reveals and staggered text.",
    category: "Hero Sections",
    component: HiringAgency,
    isPro: true,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<HiringAgency />`,
  },
  // FEATURE SECTIONS
  featureSpecialities: {
    title: "Feature Section",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Feature Sections",
    component: FeaturesSectionWithSkeleton,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<FeatureSpecialties />`,
  },
  automationFlow: {
    title: "Feature Section",
    description:
      "Cinematic feature section with tastefull hover animations and beautiful skeletons.",
    category: "Feature Sections",
    component: AutomationFlowWithSkeletons,
    previewHeight: 600,
    isPro: true,
    dependencies: ["motion"],
    usage: `<AutomationFlowWithSkeletons />`,
  },
  //grid
  bentogrid: {
    title: "Bento grid",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Grids",
    component: BentoGrid,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<BentoGrid />`,
  },
  /* MARKETING / CTA CATEGORY */
  ctaBanner2: {
    title: "CTA Banner",
    description: "",
    category: "Marketing",
    component: AnimatedCTA,
    dependencies: ["motion"],
    previewHeight: 480,
    usage: `<AnimatedCTA />`,
  },
  ctaBanner: {
    title: "CTA Creative Banner",
    description:
      "A bold, dark-themed call to action block with monospaced accents.",
    category: "Marketing",
    component: SimpleCTA,
    dependencies: ["motion"],
    previewHeight: 480,
    usage: `<SimpleCTA />`,
  },

  //TESTIMONIALS
  marqueTestimonials: {
    title: "Marque Testimonials",
    description: "",
    category: "Testimonial Sections",
    component: MarqueeTestimonials,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<MarqueeTestimonials />`,
  },
  // FOOTER
  Tidescapefooter: {
    title: "Animated Footer",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Footer Sections",
    component: TidescapeFooter,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<TidescapeFooter />`,
  },
  JitterFooter: {
    title: "Modern Footer",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Footer Sections",
    component: JitterFooter,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<JitterFooter />`,
  },
  LocalyzerFooter: {
    title: "Animated Footer",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Footer Sections",
    component: LocalyzerFooter,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<LocalyzerFooter />`,
  },
  growmytherapyFooter: {
    title: "Footer",
    description: "",
    category: "Footer Sections",
    component: growmytherapyFooter,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<growmytherapyFooter />`,
  },
};
