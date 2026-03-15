import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dashboard from "../../assets/template/dashboard.webp";
import {
  Layout,
  Layers,
  Zap,
  Code2,
  Component,
  Box,
  MousePointer2,
  Cpu,
  Check,
  ChevronDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const NotusLandingPage = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ORBITS: {
    size: number;
    duration: string;
    icons: LucideIcon[];
  }[] = [
    { size: 750, duration: "20s", icons: [Layout, Box, Cpu] },
    { size: 500, duration: "45s", icons: [Layers, Zap, Code2] },
    { size: 250, duration: "30s", icons: [Component, MousePointer2] },
  ];

  const LOGOS = [
    { name: "Stripe", url: "https://logo.clearbit.com/stripe.com", h: "h-6" },
    { name: "Vercel", url: "https://logo.clearbit.com/vercel.com", h: "h-10" },
    { name: "Linear", url: "https://logo.clearbit.com/linear.app", h: "h-10" },
    { name: "Clerk", url: "https://logo.clearbit.com/clerk.com", h: "h-10" },
    {
      name: "Supabase",
      url: "https://logo.clearbit.com/supabase.com",
      h: "h-10",
    },
    { name: "GitHub", url: "https://logo.clearbit.com/github.com", h: "h-6" },
    { name: "Discord", url: "https://logo.clearbit.com/discord.com", h: "h-8" },
    { name: "Notion", url: "https://logo.clearbit.com/notion.so", h: "h-6" },
  ];

  const PLANS = [
    {
      name: "Growth",
      tagline: "Early stage teams",
      monthlyPrice: 8,
      yearlyPrice: 6,
      features: [
        "Up to 5 active agents",
        "50 simulation runs",
        "Visual builder access",
        "GitHub + Zapier integration",
        "Basic support",
        "1 team workspace",
        "Workflow APIs",
        "Community Slack access",
      ],
    },
    {
      name: "Scale",
      tagline: "Fast moving startups",
      monthlyPrice: 12,
      yearlyPrice: 10,
      variant: "primary",
      features: [
        "Up to 25 active agents",
        "150 simulation runs",
        "Visual builder access",
        "GitHub + Zapier integration",
        "Priority support",
        "3 team workspaces",
        "Workflow APIs",
        "Priority Slack access",
      ],
    },
    {
      name: "Enterprise",
      tagline: "Large enterprises",
      monthlyPrice: 25,
      yearlyPrice: 20,
      features: [
        "Unlimited active agents",
        "Unlimited simulation runs",
        "Visual builder access",
        "GitHub + Zapier integration",
        "Priority support",
        "Unlimited team workspaces",
        "Workflow APIs",
        "Priority Slack access",
        "Access to Fight Club",
      ],
    },
  ];

  const FAQS = [
    {
      q: "What exactly does this platform do?",
      a: "Notus provides a visual orchestration layer for AI agents, allowing you to build, simulate, and deploy complex LLM workflows with native observability and guardrails.",
    },
    {
      q: "How do I get started with creating my first workflow?",
      a: "Simply sign up, head to the dashboard, and use our drag-and-drop editor to connect your first set of nodes.",
    },
    {
      q: "Is my data secure when using AI agents?",
      a: "Security is our priority. We offer end-to-end encryption, SOC2 compliance, and the ability to run worker nodes on your own infrastructure.",
    },
    {
      q: "Can I test workflows before they go live?",
      a: "Yes. Our built-in 'Simulation Mode' allows you to run full traces of your agentic logic without hitting production environments.",
    },
  ];

  return (
    <div className="min-h-screen bg-white antialiased text-black font-sans">
      {/* 1. NAVIGATION */}

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
              href={`#${link.toLowerCase()}`}
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
                    href={`#${link.toLowerCase()}`}
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
      <main className="mx-auto max-w-7xl border-x border-[#eaedf1]">
        {/* 2. HERO SECTION */}
        <section className="flex flex-col items-center justify-center px-4 pt-32 pb-20 md:pt-48">
          <p className="mb-4 text-[.75rem] font-medium uppercase tracking-[.2em] text-[#f17463]">
            For fast moving engineering teams
          </p>
          <h1 className="text-center text-[3.75rem] font-medium tracking-tight md:text-[4.5rem] lg:text-[5.5rem] leading-[1]">
            Manage and simulate <br />
            <span className="text-black/60">agentic workflows</span>
          </h1>
          <p className="mt-8 max-w-7xl text-center text-[1rem] leading-relaxed text-[#8b8b8b]">
            We empower developers and technical teams to create, simulate, and
            manage AI-driven workflows visually.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <button className="rounded-[.75rem] bg-black px-8 py-3 text-[1rem] font-medium text-white hover:opacity-90 transition-all">
              Start building
            </button>
            <button className="rounded-[.75rem] border border-[#eaedf1] bg-white px-8 py-3 text-[1rem] font-medium hover:bg-[#f9f9f9] transition-all">
              View pricing
            </button>
          </div>
        </section>

        {/* 3. DASHBOARD PREVIEW */}
        <div className="mx-4 md:mx-10 border-t border-x border-[#eaedf1] rounded-t-[1.5rem] bg-[#f9f9f9] p-2 md:p-6">
          <div className="aspect-video w-full overflow-hidden rounded-[1rem] border border-[#eaedf1] bg-white shadow-2xl relative">
            <div
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage: `radial-gradient(#eaedf1 1.5px, transparent 1.5px)`,
                backgroundSize: "24px 24px",
              }}
            />
            <img
              src={dashboard}
              alt="Dashboard"
              className="relative z-10 w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* 4. LOGO GRID */}
        <section className="border-t border-[#eaedf1]">
          <h2 className="py-8 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase">
            Trusted by Fast Growing Startups
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#eaedf1]">
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className={`flex min-h-32 items-center justify-center p-4 border-b border-[#eaedf1] group relative overflow-hidden ${i % 4 !== 3 ? "md:border-r" : ""}`}
              >
                <div className="absolute inset-0 bg-blue-500/5 translate-y-full transition-transform group-hover:translate-y-0" />
                <img
                  src={logo.url}
                  alt={logo.name}
                  className={`${logo.h} grayscale group-hover:grayscale-0 transition-all duration-500`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 5. FEATURES SECTION */}
        <section id="features" className="border-t border-[#eaedf1]">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#eaedf1]">
            <div className="p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#f17463]">
                  <Cpu size={20} />
                </span>
                <h3 className="text-xl font-medium">LLM Model Selector</h3>
              </div>
              <p className="text-[#8b8b8b] mb-10">
                Track real-time activity of agents with detailed records of
                triggers and tools used.
              </p>
              <div className="p-6 rounded-xl border border-[#eaedf1] bg-white shadow-sm space-y-3">
                <ModelRow name="ChatGPT" status="Connected" active />
                <ModelRow name="Claude 4 Opus" status="Unavailable" />
                <ModelRow name="Llama 3.2" status="Waiting" />
              </div>
            </div>
            <div className="p-12 bg-[#f9f9f9]">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#f17463]">
                  <Code2 size={20} />
                </span>
                <h3 className="text-xl font-medium">
                  Text to workflow builder
                </h3>
              </div>
              <p className="text-[#8b8b8b] mb-10">
                Preview and debug workflow logic in a safe sandbox before
                deploying.
              </p>
              <div className="h-40 bg-white border-t border-x border-[#eaedf1] rounded-t-xl p-4 flex flex-col gap-2 overflow-hidden">
                <div className="bg-blue-500 text-white p-2 rounded-lg text-xs w-2/3 self-end">
                  Create an email workflow.
                </div>
                <div className="bg-[#f17463]/10 text-black p-2 rounded-lg text-xs w-2/3">
                  Generating nodes...
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PRICING SECTION */}
        <section id="pricing" className="border-t border-[#eaedf1] py-20">
          <div className="flex flex-col items-center mb-16">
            <p className="text-[.75rem] font-medium uppercase tracking-[.2em] text-[#f17463]">
              Pricing
            </p>
            <h2 className="text-[2.5rem] font-medium tracking-tight mt-4">
              Simple and Feasible Pricing
            </h2>
            <div className="mt-8 flex bg-[#f9f9f9] border border-[#eaedf1] p-1 rounded-xl">
              {(["monthly", "yearly"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setBillingCycle(mode)}
                  className={`px-8 py-2 rounded-lg text-sm font-medium transition-all ${billingCycle === mode ? "bg-white shadow-sm border border-[#eaedf1]" : "text-[#8b8b8b]"}`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#eaedf1] border-y border-[#eaedf1]">
            {PLANS.map((plan) => (
              <div key={plan.name} className="p-10 flex flex-col">
                <h3 className="text-xl font-medium">{plan.name}</h3>
                <p className="text-[#8b8b8b] mb-6">{plan.tagline}</p>
                <div className="text-4xl font-medium mb-8">
                  $
                  {billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.yearlyPrice}
                  <span className="text-sm text-[#8b8b8b] font-normal">
                    /seat
                  </span>
                </div>
                <div className="space-y-4 mb-10 flex-1">
                  {plan.features.slice(0, 6).map((f) => (
                    <div key={f} className="flex gap-3 text-sm text-[#676767]">
                      <Check
                        size={16}
                        className="text-[#f17463] flex-shrink-0"
                      />{" "}
                      {f}
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${plan.variant === "primary" ? "bg-black text-white" : "border border-[#eaedf1] bg-white hover:bg-gray-50"}`}
                >
                  {plan.variant === "primary"
                    ? "Start for free"
                    : "Start building"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FAQ SECTION */}
        <section id="faq" className="border-t border-[#eaedf1] py-24 px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center text-[2.5rem] font-medium tracking-tight mb-12">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-[#eaedf1] border-y border-[#eaedf1]">
              {FAQS.map((faq, i) => (
                <div key={i} className="group">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between py-6 text-left hover:bg-[#f9f9f9] px-4 transition-colors"
                  >
                    <span className="font-medium">{faq.q}</span>
                    <ChevronDown
                      className={`transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                      size={18}
                    />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-6 text-[#8b8b8b] text-sm leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA ORBIT SECTION */}
        <section className="relative h-[500px] flex flex-col items-center justify-center overflow-hidden bg-[#f9f9f9] border-t border-[#eaedf1]">
          <div className="absolute inset-0 pointer-events-none">
            {ORBITS.map((orbit, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#eaedf1]"
                style={{ width: orbit.size, height: orbit.size }}
              />
            ))}
          </div>
          <div className="relative z-10 text-center px-4">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-10">
              Connect your current stack <br /> and start automating
            </h2>
            <button className="bg-black text-white px-10 py-4 rounded-xl font-medium hover:opacity-90 transition-all active:scale-95">
              Start Building For Free
            </button>
          </div>
        </section>

        {/* 9. FOOTER */}
        <footer className="p-10 md:p-20 border-t border-[#eaedf1]">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LogoIcon />
                <span className="text-xl font-medium">Notus</span>
              </div>
              <p className="text-[#8b8b8b] text-sm">
                The standard for agentic infrastructure.
              </p>
            </div>
            <div className="flex gap-20">
              <FooterCol
                title="Product"
                links={["Pricing", "About", "Careers"]}
              />
              <FooterCol
                title="Connect"
                links={["Twitter", "GitHub", "Discord"]}
              />
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-[#eaedf1] text-[12px] text-[#8b8b8b] flex justify-between">
            <p>© 2026 Notus AI. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

// --- OPTIMIZED SUB-COMPONENTS ---

const LogoIcon = () => (
  <div className="size-8 bg-black rounded-lg flex items-center justify-center">
    <div className="size-2 bg-white rotate-45" />
  </div>
);

type ModelRowProps = {
  name: string;
  status: string;
  active?: boolean;
};

const ModelRow = ({ name, status, active }: ModelRowProps) => (
  <div className="flex items-center justify-between text-sm">
    <div className="flex items-center gap-2">
      <div
        className={`size-2 rounded-full ${active ? "bg-emerald-500 shadow-[0_0_8px_emerald]" : "bg-red-500"}`}
      />
      {name}
    </div>
    <span className="text-[#8b8b8b] text-xs">{status}</span>
  </div>
);

type FooterColProps = {
  title: string;
  links: string[];
};

const FooterCol = ({ title, links }: FooterColProps) => (
  <div className="flex flex-col gap-4">
    <h4 className="font-medium text-sm">{title}</h4>
    {links.map((l) => (
      <a
        key={l}
        href="#"
        className="text-[#8b8b8b] text-sm hover:text-black transition-colors"
      >
        {l}
      </a>
    ))}
  </div>
);

export default NotusLandingPage;
