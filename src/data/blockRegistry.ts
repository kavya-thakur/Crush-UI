import type { ComponentType } from "react";

/* HERO */
import Hero from "../components/blocks/herosections/HeroSaas";
import HeroAgents from "../components/blocks/herosections/HeroAgent";
import { HiringAgency } from "../components/templates/NewLanding";
import { heroSaasCode } from "../snippets/blocks/hero/heroSaasCode";
import { heroAgentCode } from "../snippets/blocks/hero/heroAgentCode";
import { heroAgencyCode } from "../snippets/blocks/hero/hireAgencyCode";
/* CTA */
import SimpleCTA from "../components/blocks/CTA/SimpleCTA";
import { simpleCTACode } from "../snippets/blocks/CTA/simpleCTACode";
// FOOTER
import JitterFooter from "../components/blocks/footers/JitterFooter";
import LocalyzerFooter from "../components/blocks/footers/LocalyzerFooter";
import { TidescapeFooter } from "../components/blocks/footers/TidescapeFooter";
import { tidescapeFooterCode } from "../snippets/blocks/footer/TidescapefooterCode";
import { jitterFooterCode } from "../snippets/blocks/footer/JitterFooterCode";
import { localyzerFooterCode } from "../snippets/blocks/footer/LocalyzerFooterCode";
import growmytherapyFooter from "../components/blocks/footers/growmytherapyFooter";
import { growmytherapyfooterCode } from "../snippets/blocks/footer/growmytherapyfooterCode";

// GRID
import BentoGrid from "../components/blocks/Grids/BentoGrid";
import { bentoGridCode } from "../snippets/blocks/grid/bentoGridCode";
// TESTIMONIALS
import MarqueeTestimonials from "../components/blocks/testimonials/MarqueeTestimonials";
import { marqueTestimonialsCode } from "../snippets/blocks/testimonials/marqueTestimonialsCode";
import { animatedCTACode } from "../snippets/blocks/CTA/animatedCTAcode";
import AnimatedCTA from "../components/blocks/CTA/AnimatedCTA";
import { FeaturesSectionWithSkeleton } from "../components/blocks/features/FeatureSpecialties";
import { featureSpecialitiesCode } from "../snippets/blocks/feature section/FeatureSpecialtiesCode";
import { AutomationFlowWithSkeletons } from "../components/blocks/features/AutomationFlow";
import { AutomationFlowWithSkeletonsCode } from "../snippets/blocks/feature section/AutomationFlowWithSkeletonsCode";

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
  premium?: boolean;
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
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<Hero />`,
    code: heroSaasCode,
  },
  heroAgents: {
    title: "Hero Agents",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Hero Sections",
    component: HeroAgents,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<HeroAgents />`,
    code: heroAgentCode,
  },
  hiringAgency: {
    title: "Hiring Agency",
    description:
      "Hiring Agency hero section with clip-path image reveals and staggered text.",
    category: "Hero Sections",
    component: HiringAgency,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<HiringAgency />`,
    code: heroAgencyCode,
  },
  // FEATURE SECTIONS
  featureSpecialities: {
    title: "Feature Section",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Feature Sections",
    component: FeaturesSectionWithSkeleton,
    previewHeight: 600,
    premium: true,
    dependencies: ["motion"],
    usage: `<FeatureSpecialties />`,
    code: featureSpecialitiesCode,
  },
  automationFlow: {
    title: "Feature Section",
    description:
      "Cinematic feature section with tastefull hover animations and beautiful skeletons.",
    category: "Feature Sections",
    component: AutomationFlowWithSkeletons,
    previewHeight: 600,
    premium: true,
    dependencies: ["motion"],
    usage: `<AutomationFlowWithSkeletons />`,
    code: AutomationFlowWithSkeletonsCode,
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
    code: bentoGridCode,
  },
  /* MARKETING / CTA CATEGORY */
  ctaBanner2: {
    title: "CTA Banner",
    description: "",
    category: "Marketing",
    component: AnimatedCTA,
    previewHeight: 480,
    usage: `<AnimatedCTA />`,
    code: animatedCTACode,
  },
  ctaBanner: {
    title: "CTA Creative Banner",
    description:
      "A bold, dark-themed call to action block with monospaced accents.",
    category: "Marketing",
    component: SimpleCTA,
    previewHeight: 480,
    usage: `<SimpleCTA />`,
    code: simpleCTACode,
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
    code: marqueTestimonialsCode,
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
    code: tidescapeFooterCode,
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
    code: jitterFooterCode,
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
    code: localyzerFooterCode,
  },
  growmytherapyFooter: {
    title: "Footer",
    description: "",
    category: "Footer Sections",
    component: growmytherapyFooter,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<growmytherapyFooter />`,
    code: growmytherapyfooterCode,
  },
};
