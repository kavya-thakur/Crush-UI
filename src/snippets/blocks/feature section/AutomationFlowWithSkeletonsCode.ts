export const AutomationFlowWithSkeletonsCode = `
import { useId } from "react";
import { motion, type Variants } from "framer-motion";

const springConfig = { type: "spring", stiffness: 260, damping: 20 } as const;

// --- Skeleton 1: The Neural Flow (Curved Beam) ---
const FlowEngineSkeleton = () => {
  const id = useId();
  // An advanced "S" Path that hits a central midpoint
  const pathD = "M10 40C60 40 60 10 110 10C160 10 160 40 210 40";

  return (
    <div className="relative flex h-full items-center justify-center bg-slate-50 dark:bg-neutral-950 overflow-hidden group/flow">
      <div className="relative z-10 flex w-full max-w-[280px] items-center justify-between">
        {/* SOURCE ICON */}
        <div className="relative z-20">
          <motion.div
            whileHover={{ scale: 1.1, rotate: -8 }}
            className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/[0.05] dark:bg-neutral-900 dark:ring-white/[0.05]"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
              className="size-6 grayscale group-hover/flow:grayscale-0 transition-all duration-500"
              alt="Slack"
            />
          </motion.div>
          <motion.div
            animate={{ opacity: [0, 1, 0], scale: [1, 1.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl border border-blue-500/50"
          />
        </div>

        {/* THE ADVANCED BEAM SYSTEM */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <svg
            width="220"
            height="50"
            viewBox="0 0 220 50"
            fill="none"
            className="overflow-visible"
          >
            {/* The Base Track (Subtle Glass effect) */}
            <path
              d={pathD}
              stroke="currentColor"
              className="text-neutral-100 dark:text-neutral-800/50"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Layer 1: The Broad Outer Glow (Ambient) */}
            <motion.path
              d={pathD}
              stroke="#3b82f6"
              strokeWidth="6"
              strokeOpacity="0.1"
              strokeLinecap="round"
              initial={{ pathOffset: 0, pathLength: 0.2 }}
              animate={{ pathOffset: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: [0.4, 0, 0.2, 1],
              }}
            />

            {/* Layer 2: The Core Light (Variable Speed) */}
            <motion.path
              d={pathD}
              stroke={\`url(#advanced-beam-\${id})\`}
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathOffset: 0, pathLength: 0.15 }}
              animate={{ pathOffset: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                // Non-linear ease makes it feel like it "swings" through the S-curve
                ease: [0.45, 0.05, 0.55, 0.95],
              }}
            />

            {/* Layer 3: The Leading Photon (Tiny & Bright) */}
            <motion.path
              d={pathD}
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathOffset: 0, pathLength: 0.02 }}
              animate={{ pathOffset: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: [0.45, 0.05, 0.55, 0.95],
              }}
            />

            <defs>
              <linearGradient
                id={\`advanced-beam-\${id}\`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* MIDPOINT HUB: A "Processor" Icon to make the curve feel meaningful */}
        <div className="absolute left-1/2 -translate-x-1/2 size-8 flex items-center justify-center rounded-lg bg-white shadow-xl ring-1 ring-black/5 dark:bg-neutral-800">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="size-4 border-2 border-dashed border-blue-500/30 rounded-full flex items-center justify-center"
          >
            <div className="size-1 bg-blue-500 rounded-full" />
          </motion.div>
        </div>

        {/* TARGET ICON */}
        <div className="relative z-20">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 8 }}
            className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/[0.05] dark:bg-neutral-900 dark:ring-white/[0.05]"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/notion-2.svg"
              className="size-6 grayscale group-hover/flow:grayscale-0 transition-all duration-500"
              alt="Notion"
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: [0, 0.4, 0],
              scale: [1, 1.2],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-md"
          />
        </div>
      </div>
    </div>
  );
};

// --- Skeleton 2: Magnetic Stack (REVERSED: Stack to Explode) ---
const LayersSkeleton = () => {
  const layers = [
    {
      id: 1,
      img: "https://assets.aceternity.com/avatars/1.webp",
      color: "bg-blue-500",
    },
    {
      id: 2,
      img: "https://assets.aceternity.com/avatars/2.webp",
      color: "bg-emerald-500",
    },
    {
      id: 3,
      img: "https://assets.aceternity.com/avatars/3.webp",
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="relative flex h-full items-center justify-center bg-slate-50/50 dark:bg-neutral-900/50 overflow-hidden">
      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative h-full w-full flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {layers.map((layer, i) => (
          <motion.div
            key={layer.id}
            variants={{
              initial: {
                x: 0,
                y: i * -32 + 20, // Clean Isometric Stack
                rotateX: 55,
                rotateY: 0,
                rotateZ: -35,
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
              },
              hover: {
                x: i === 0 ? -70 : i === 1 ? 0 : 70, // Explode out
                y: i === 0 ? 40 : i === 1 ? -50 : 30,
                rotateX: 20,
                rotateY: i === 0 ? 20 : -20,
                rotateZ: i * 10 - 10,
                scale: 0.85,
              },
            }}
            transition={springConfig}
            className="absolute h-32 w-48 rounded-2xl border border-black/5 bg-white p-1.5 shadow-2xl dark:border-white/10 dark:bg-neutral-800"
            style={{ zIndex: 10 - i }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <img
                src={layer.img}
                className="h-full w-full object-cover"
                alt="asset"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

//  --- Skeleton 3: Presence (Radar) ---
const SocialSkeleton = () => {
  const avatars = [1, 2, 3, 4, 5];

  const avatarVariants: Variants = {
    initial: (i: number) => ({
      x: i * 35 - 70,
      y: i % 2 === 0 ? -20 : 20,
      scale: 0.9,
      opacity: 0.8,
      filter: "blur(0.5px)",
    }),
    hover: (i: number) => ({
      x: i * 32 - 64,
      y: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 28,
        mass: 0.8,
      },
    }),
  };

  return (
    <div className="relative flex h-full items-center justify-center bg-white dark:bg-neutral-950 overflow-hidden group/social">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
        <div className="absolute inset-0 bg-[grid-neutral-200_20px] dark:bg-[grid-neutral-800_20px] opacity-20" />
      </div>

      <motion.div
        initial="initial"
        whileHover="hover"
        className="relative flex items-center justify-center h-full w-full"
      >
        {avatars.map((a, i) => (
          <motion.div
            key={i}
            custom={i} // Passes index to the variants
            variants={avatarVariants}
            className="absolute cursor-pointer"
            style={{ zIndex: avatars.length - i }}
          >
            <div className="relative group/avatar">
              <div className="size-14 rounded-2xl border-[3px] border-white dark:border-neutral-900 shadow-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 transition-transform duration-300 group-hover/avatar:scale-110">
                <img
                  src={\`https://assets.aceternity.com/avatars/\${i + 1}.webp\`}
                  alt="User"
                  className="size-full object-cover"
                />
              </div>

              {/* Presence Indicator Badge */}
              <div className="absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-white dark:border-neutral-900 bg-emerald-500 shadow-[0_0_10px_#10b981]" />
            </div>
          </motion.div>
        ))}

        {/* Dynamic Counter Badge */}
        <motion.div
          variants={{
            initial: { x: 80, y: 40, opacity: 0, scale: 0.5 },
            hover: { x: 100, y: 0, opacity: 1, scale: 1 },
          }}
          className="absolute flex size-10 items-center justify-center rounded-xl bg-neutral-900 text-[10px] font-bold text-white shadow-xl dark:bg-white dark:text-black"
        >
          +12
        </motion.div>
      </motion.div>
    </div>
  );
};

export const AutomationFlowWithSkeletons = () => {
  const features = [
    {
      title: "Flow Engine",
      description:
        "Low-latency data synchronization with intelligent curved routing.",
      skeleton: <FlowEngineSkeleton />,
    },
    {
      title: "Asset Library",
      description:
        "Organized isometric stacks that expand for detailed exploration.",
      skeleton: <LayersSkeleton />,
    },
    {
      title: "Global Team Sync",
      description:
        "Visualize real-time presence and collaborative flow with zero-latency activity indicators.",
      skeleton: <SocialSkeleton />,
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-black px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-[3rem] border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:grid-cols-3 shadow-[0_0_50px_-12px_rgba(0,0,0,0.1)]">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between border-b border-neutral-200 p-10 last:border-0 dark:border-neutral-800 md:border-b-0 md:border-r"
            >
              <div className="relative h-64 w-full rounded-3xl mb-10 overflow-hidden ring-1 ring-black/5 dark:ring-white/5 bg-[#F9FAFB] dark:bg-neutral-900/20 group-hover:bg-white dark:group-hover:bg-neutral-900 transition-colors duration-500">
                {f.skeleton}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
                  {f.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

`;
