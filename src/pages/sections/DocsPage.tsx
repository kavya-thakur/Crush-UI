import RegistryFooter from "./Footer";

const faq = [
  {
    question: "Is Crush UI an npm package?",
    answer:
      "No. Crush UI follows a copy-paste architecture. Every component is copied directly into your project so you have full ownership and complete customization freedom.",
  },
  {
    question: "Does Crush UI support Next.js?",
    answer:
      "Yes. Crush UI works with React, Next.js and Vite projects using Tailwind CSS.",
  },
  {
    question: "Why are animations not working?",
    answer:
      "Most animated components require Motion. Make sure you install the required dependencies shown inside the component page.",
  },
  {
    question: "Can I use Crush UI commercially?",
    answer:
      "Yes. You can use Crush UI in personal and commercial projects according to your license.",
  },
];

export default function DocsPage() {
  return (
    <>
      <div className="min-h-screen w-full bg-white text-zinc-900 transition-colors duration-300 dark:bg-[#030303] dark:text-white overflow-x-hidden">
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 md:px-10 lg:px-16 lg:py-20">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-[24px] sm:rounded-[36px] border border-zinc-200 bg-zinc-50 p-5 sm:p-8 md:p-12 lg:p-16 dark:border-white/[0.06] dark:bg-white/[0.03]">
            {/* Glow Wrappers */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute left-0 top-0 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-zinc-200/40 blur-3xl dark:bg-zinc-700/10" />
              <div className="absolute bottom-0 right-0 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-amber-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 shadow-sm dark:border-white/[0.08] dark:bg-black/40 dark:text-zinc-400">
                Production Ready UI Library
              </div>

              <h1 className="mt-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] md:leading-[1.05] text-gradient">
                Build polished interfaces faster with Crush UI.
              </h1>

              <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                Crush UI is a premium copy-paste component library built for
                React developers who care about motion, visual hierarchy and
                production-quality interfaces.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button className="rounded-2xl bg-black px-6 py-3.5 text-sm font-medium text-white transition-all hover:scale-[1.01] active:scale-[0.99] dark:bg-white dark:text-black text-center">
                  Browse Components
                </button>
                <button className="rounded-2xl border border-zinc-200 bg-white px-6 py-3.5 text-sm font-medium transition hover:bg-zinc-100 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:bg-white/[0.06] text-center">
                  Explore Premium
                </button>
              </div>
            </div>
          </section>

          {/* QUICK START */}
          <section className="mt-16 sm:mt-24">
            <div className="mb-8 sm:mb-10">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Quick Start
              </p>
              <h2 className="mt-2 text-xl sm:text-3xl font-semibold tracking-tight md:text-4xl">
                Start building in minutes.
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-[24px] sm:rounded-[28px] border border-zinc-200 bg-zinc-50 p-5 sm:p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Step 01
                  </p>
                  <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold tracking-tight">
                    Install Dependencies
                  </h3>
                </div>
                <div className="mt-4 sm:mt-5 overflow-hidden rounded-xl border border-zinc-200 bg-black p-3.5 dark:border-white/[0.06] w-full">
                  <code className="block overflow-x-auto text-xs sm:text-sm text-zinc-300 whitespace-nowrap scrollbar-none">
                    npm install motion
                  </code>
                </div>
              </div>

              <div className="rounded-[24px] sm:rounded-[28px] border border-zinc-200 bg-zinc-50 p-5 sm:p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Step 02
                </p>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold tracking-tight">
                  Copy Components
                </h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Browse the registry and copy the component source code
                  directly into your project.
                </p>
              </div>

              <div className="md:col-span-2 lg:col-span-1 rounded-[24px] sm:rounded-[28px] border border-zinc-200 bg-zinc-50 p-5 sm:p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  Step 03
                </p>
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold tracking-tight">
                  Customize Freely
                </h3>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Every component lives inside your codebase giving you complete
                  control over styles, layouts and interactions.
                </p>
              </div>
            </div>
          </section>

          {/* PHILOSOPHY */}
          <section className="mt-20 sm:mt-28 max-w-4xl">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Philosophy
            </p>
            <h2 className="mt-3 sm:mt-4 text-xl sm:text-3xl font-semibold tracking-tight md:text-5xl md:leading-[1.15]">
              No hidden abstractions. No package lock-in.
            </h2>
            <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
              Crush UI follows a copy-paste architecture instead of shipping
              components through a package. Every component is fully owned by
              you from the moment you paste it into your application.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
              This gives developers complete flexibility to customize layouts,
              animations and styles without fighting against rigid UI
              abstractions.
            </p>
          </section>

          {/* INSTALLATION */}
          <section className="mt-20 sm:mt-28">
            <div className="max-w-5xl">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Installation
              </p>
              <h2 className="mt-3 sm:mt-4 text-xl sm:text-3xl font-semibold tracking-tight md:text-5xl">
                Minimal setup. Maximum flexibility.
              </h2>

              <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="flex flex-col justify-between rounded-[24px] sm:rounded-[28px] border border-zinc-200 bg-zinc-50 p-5 sm:p-6 dark:border-white/[0.06] dark:bg-white/[0.03] w-full overflow-hidden">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Required Dependencies
                  </h3>
                  <div className="mt-5 overflow-hidden rounded-xl border border-zinc-200 bg-black p-4 dark:border-white/[0.06] w-full">
                    <pre className="overflow-x-auto text-xs sm:text-sm text-zinc-300 scrollbar-none">
                      npm install motion clsx tailwind-merge
                    </pre>
                  </div>
                </div>

                <div className="rounded-[24px] sm:rounded-[28px] border border-zinc-200 bg-zinc-50 p-5 sm:p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Framework Support
                  </h3>
                  <p className="mt-4 sm:mt-5 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Crush UI components are built for modern React applications
                    and work perfectly with Next.js, Vite and Tailwind CSS
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WORKFLOW */}
          <section className="mt-20 sm:mt-28">
            <div className="max-w-5xl">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Workflow
              </p>
              <h2 className="mt-3 sm:mt-4 text-xl sm:text-3xl font-semibold tracking-tight md:text-5xl">
                Browse → Copy → Install → Ship
              </h2>

              <div className="mt-8 sm:mt-12 space-y-4">
                {[
                  {
                    title: "Browse Components",
                    description:
                      "Explore free and premium components inside the Crush UI registry.",
                  },
                  {
                    title: "Copy Source Code",
                    description:
                      "Copy the component directly into your React application.",
                  },
                  {
                    title: "Install Dependencies",
                    description:
                      "Install the required packages shown inside the component documentation.",
                  },
                  {
                    title: "Customize & Ship",
                    description:
                      "Adjust styles, layouts and animations to match your product.",
                  },
                ].map((step, index) => (
                  <div
                    key={step.title}
                    className="flex flex-col sm:flex-row items-start gap-4 rounded-[20px] sm:rounded-[24px] border border-zinc-200 bg-zinc-50 p-5 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-zinc-200 bg-white text-xs sm:text-sm font-semibold dark:border-white/[0.06] dark:bg-black/40">
                      {index + 1}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MOTION */}
          <section className="mt-20 sm:mt-28">
            <div className="max-w-5xl">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Motion Setup
              </p>
              <h2 className="mt-3 sm:mt-4 text-xl sm:text-3xl font-semibold tracking-tight md:text-5xl">
                Smooth animations powered by Motion.
              </h2>
              <p className="mt-4 sm:mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
                Animated Crush UI components use Motion for transitions and
                interactions. Make sure Motion is installed before using
                animation-heavy blocks.
              </p>

              <div className="mt-8 overflow-hidden rounded-[20px] sm:rounded-[28px] border border-zinc-200 bg-black p-4 sm:p-6 dark:border-white/[0.06] w-full">
                <pre className="overflow-x-auto text-xs sm:text-sm leading-relaxed text-zinc-300 scrollbar-none">
                  {`import { motion } from "motion/react";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      Crush UI
    </motion.div>
  );
}`}
                </pre>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-20 sm:mt-28">
            <div className="max-w-5xl">
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                FAQ
              </p>
              <h2 className="mt-3 sm:mt-4 text-xl sm:text-3xl font-semibold tracking-tight md:text-5xl">
                Frequently asked questions.
              </h2>

              <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
                {faq.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-[20px] sm:rounded-[24px] border border-zinc-200 bg-zinc-50 p-5 sm:p-6 dark:border-white/[0.06] dark:bg-white/[0.03]"
                  >
                    <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                      {item.question}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <RegistryFooter />
    </>
  );
}
