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
// GRID
import BentoGrid from "../components/blocks/Grids/BentoGrid";
import { bentoGridCode } from "../snippets/blocks/grid/bentoGridCode";

/* TYPES */
type BlockDoc = {
  title: string;
  description: string;
  category:
    | "Hero Sections"
    | "Marketing"
    | "Sections"
    | "Footer Sections"
    | "Grids"; // Added categories
  component: ComponentType<any>;
  premium?: boolean;
  usage?: string;
  code?: string;
  previewHeight?: number;
  dependencies?: string[] | undefined; // Good for user experience
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
    usage: `<HeroGSAP />`,
    code: heroSaasCode,
  },
  heroAgent: {
    title: "Hero Agents",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Hero Sections",
    component: HeroAgents,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<HeroGSAP />`,
    code: heroAgentCode,
  },
  heroAgency: {
    title: "Hiring Agency",
    description:
      "Hiring Agency hero section with clip-path image reveals and staggered text.",
    category: "Hero Sections",
    component: HiringAgency,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<HeroGSAP />`,
    code: heroAgencyCode,
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
    usage: `<HeroGSAP />`,
    code: bentoGridCode,
  },
  /* MARKETING / CTA CATEGORY */
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
  // FOOTER
  Tidescapefooter: {
    title: "Animated Footer",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Footer Sections",
    component: TidescapeFooter,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<HeroGSAP />`,
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
    usage: `<HeroGSAP />`,
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
    usage: `<HeroGSAP />`,
    code: localyzerFooterCode,
  },
};
