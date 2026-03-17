import { useState } from "react";
import { motion } from "framer-motion";

const springConfig = { type: "spring", stiffness: 280, damping: 20 } as const;

type SkeletonProps = {
  isHovered: boolean;
};

// --- Skeleton 1: The Neural Flow (Curved Beam) ---
const FlowEngineSkeleton = ({ isHovered }: SkeletonProps) => {
  const pathD = "M10 40C60 40 60 10 110 10C160 10 160 40 210 40";

  return (
    <div className="relative flex h-full items-center justify-center bg-slate-50 dark:bg-neutral-950 overflow-hidden">
      <div className="relative z-10 flex w-full max-w-[280px] items-center justify-between">
        {/* SOURCE ICON */}
        <div className="relative z-20">
          <motion.div
            animate={
              isHovered ? { scale: 1.1, rotate: -8 } : { scale: 1, rotate: 0 }
            }
            className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-black/[0.05] dark:bg-neutral-900 dark:ring-white/[0.05]"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
              className={`size-6 transition-all duration-500 ${isHovered ? "grayscale-0" : "grayscale"}`}
              alt="Slack"
            />
          </motion.div>
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
            <path
              d={pathD}
              stroke="currentColor"
              className="text-neutral-100 dark:text-neutral-800/50"
              strokeWidth="3"
              strokeLinecap="round"
            />

            {/* Animated Beams only show intensity on hover */}
            <motion.path
              d={pathD}
              stroke="#3b82f6"
              strokeWidth={isHovered ? "4" : "2"}
              strokeOpacity={isHovered ? "0.4" : "0.1"}
              strokeLinecap="round"
              initial={{ pathOffset: 0, pathLength: 0.2 }}
              animate={{ pathOffset: 1 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </div>

        {/* TARGET ICON */}
        <div className="relative z-20">
          <motion.div
            animate={
              isHovered ? { scale: 1.1, rotate: 8 } : { scale: 1, rotate: 0 }
            }
            className="flex size-12 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-black/[0.05] dark:bg-neutral-900 dark:ring-white/[0.05]"
          >
            <img
              src="https://cdn.worldvectorlogo.com/logos/notion-2.svg"
              className={`size-6 transition-all duration-500 ${isHovered ? "grayscale-0" : "grayscale"}`}
              alt="Notion"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// --- Skeleton 2: Magnetic Stack ---
const LayersSkeleton = ({ isHovered }: SkeletonProps) => {
  const layers = [
    { id: 1, img: "https://assets.aceternity.com/avatars/1.webp" },
    { id: 2, img: "https://assets.aceternity.com/avatars/2.webp" },
    { id: 3, img: "https://assets.aceternity.com/avatars/3.webp" },
  ];

  return (
    <div className="relative flex h-full items-center justify-center bg-slate-50/50 dark:bg-neutral-900/50 overflow-hidden">
      <motion.div
        animate={isHovered ? "hover" : "initial"}
        className="relative h-full w-full flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {layers.map((layer, i) => (
          <motion.div
            key={layer.id}
            variants={{
              initial: {
                x: 0,
                y: i * -32 + 20,
                rotateX: 55,
                rotateY: 0,
                rotateZ: -35,
                scale: 1,
              },
              hover: {
                x: i === 0 ? -70 : i === 1 ? 0 : 70,
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
            <img
              src={layer.img}
              className="h-full w-full object-cover rounded-xl"
              alt="asset"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

//  --- Skeleton 3: Presence (Radar) ---
const SocialSkeleton = ({ isHovered }: SkeletonProps) => {
  const avatars = [1, 2, 3, 4, 5];

  return (
    <div className="relative flex h-full items-center justify-center bg-white dark:bg-neutral-950 overflow-hidden">
      <motion.div
        animate={isHovered ? "hover" : "initial"}
        className="relative flex items-center justify-center h-full w-full"
      >
        {avatars.map((_, i) => (
          <motion.div
            key={i}
            variants={{
              initial: {
                x: i * 35 - 70,
                y: i % 2 === 0 ? -20 : 20,
                scale: 0.9,
                opacity: 0.8,
              },
              hover: { x: i * 32 - 64, y: 0, scale: 1, opacity: 1 },
            }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="absolute"
            style={{ zIndex: avatars.length - i }}
          >
            <div className="size-14 rounded-2xl border-[3px] border-white dark:border-neutral-900 shadow-2xl overflow-hidden bg-neutral-100">
              <img
                src={`https://assets.aceternity.com/avatars/${i + 1}.webp`}
                alt="User"
                className="size-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main Section ---
export const AutomationFlowWithSkeletons = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Flow Engine",
      description: "Low-latency data synchronization with curved routing.",
      skeleton: FlowEngineSkeleton,
    },
    {
      title: "Asset Library",
      description: "Organized isometric stacks that expand for exploration.",
      skeleton: LayersSkeleton,
    },
    {
      title: "Global Team Sync",
      description: "Visualize real-time presence and collaborative flow.",
      skeleton: SocialSkeleton,
    },
  ];

  return (
    <section className="bg-white py-24 dark:bg-black px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-[3rem] border border-neutral-200 dark:border-neutral-800 md:grid-cols-3">
          {features.map((f, i) => {
            const Skeleton = f.skeleton;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group flex flex-col justify-between border-b border-neutral-200 p-10 last:border-0 dark:border-neutral-800 md:border-b-0 md:border-r"
              >
                <div className="relative h-64 w-full rounded-3xl mb-10 overflow-hidden bg-[#F9FAFB] dark:bg-neutral-900/20">
                  <Skeleton isHovered={hoveredIndex === i} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold dark:text-neutral-100">
                    {f.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {f.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
