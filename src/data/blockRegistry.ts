import type { ComponentType } from "react";

/* HERO */
import Hero from "../components/blocks/herosections/HeroSaas";
import HeroAgents from "../components/blocks/herosections/HeroAgent";
/* CTA */
import SimpleCTA from "../components/blocks/CTA/SimpleCTA";
import JitterFooter from "../components/blocks/footers/JitterFooter";
import LocalyzerFooter from "../components/blocks/footers/LocalyzerFooter";
import { HiringAgency } from "../components/templates/NewLanding";
import FullBentoGrid from "../pages/sections/ProductFeatures";
import { TidescapeFooter } from "../components/blocks/footers/TidescapeFooter";

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
    code: `import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import vid from "../assets/vid.webm";
import AnimatedButton from "./AnimatedButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <>
      <motion.div
        className="h-auto flex flex-col items-center mt-20 lg:mt-28 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Heading */}
        <motion.h1
          className="heading text-5xl md:text-6xl lg:text-[5rem] tracking-tight mt-6 font-bold leading-none"
          variants={fadeUp}
        >
          AI-Powered <span className=" md:inline">Tech</span>{" "}
          <span className="inline md:block">Career Finder.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg px-7 text-gray-600 mt-4 max-w-2xl"
          variants={fadeUp}
        >
          Discover your ideal tech career path with our{" "}
          <span className="text-purple-400 font-semibold">AI-driven</span>{" "}
          platform.
        </motion.p>

        {/* CTA Button */}
        <div className="flex gap-5">
          <Link to="/generate">
            <AnimatedButton
              text="Start Now"
              bg="bg-black"
              textColor="text-white"
              glow=""
            />
          </Link>

          <AnimatedButton
            text="Learn More"
            bg="bg-neutral-200"
            textColor="text-black"
            glow=""
          />
        </div>

        {/* Hero Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          src={vid}
          className="w-full h-full md:h-[65vh] object-cover mt-14 rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </motion.div>
    </>
  );
};

export default Hero;`,
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
    code: ``,
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
    code: ``,
  },
  
  //grid
  bentogrid: {
    title: "Bento grid",
    description:
      "Cinematic hero section with clip-path image reveals and staggered text.",
    category: "Grids",
    component: FullBentoGrid,
    previewHeight: 600,
    dependencies: ["motion"],
    usage: `<HeroGSAP />`,
    code: ``,
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
    code: `import React from "react";

const SimpleCTA = () => {
  return (
    <section id="contact" className=" bg-[#E7E7E2] py-20 px-6 mx-auto ">
      <div className=" flex flex-col gap-4 bg-black text-[#E7E7E2] rounded-2xl p-5 h-[30rem] flex-center justify-center text-center">
        <h5 className="text-[#E7E7E2]/80 font-mono">
          (Need an unfair advantage?)
        </h5>
        <h2 className="text-6xl font-medium">LETS'S MAKE IT HAPPEN</h2>

        <button className=" text-[#E7E7E2] px-8 py-6 bg-[#393632] rounded-full w-fit mx-auto text-sm font-semibold">
          <a href="mailto:kavya.fosnix@gmail.com">WRITE A MESSAGE</a>
        </button>
      </div>
    </section>
  );
};

export default SimpleCTA;
`,
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
    code: ``,
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
    code: ``,
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
    code: ``,
  },
};
