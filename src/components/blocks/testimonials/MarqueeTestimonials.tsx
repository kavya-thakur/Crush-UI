import { useState } from "react";
import { motion } from "framer-motion";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&h=100&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
];

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, this platform instantly grabbed my attention.",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier.",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management.",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents.",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    name: "Casey Harper",
    username: "@casey09",
  },
].map((t, i) => ({ ...t, imageSrc: avatars[i] })); // Map remote images to data

const TestimonialColumn = ({
  items,
  duration,
  className = "",
}: {
  items: typeof testimonials;
  duration: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col gap-6 pb-6 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        // The magic "Pause" logic:
        style={{ playState: isHovered ? "paused" : "running" } as any}
        className="flex flex-col gap-6"
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item.username}-${idx}`}
            className="group relative rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:scale-[1.02] dark:border-white/20 dark:bg-[#080808]"
          >
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-zinc-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-white/[0.03]" />

            <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
              "{item.text}"
            </p>

            <div className="mt-6 flex items-center gap-3">
              <img
                src={item.imageSrc}
                alt={item.name}
                className="h-10 w-10 rounded-full object-cover grayscale-[0.5] transition-all group-hover:grayscale-0"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500">
                  {item.username}
                </span>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const MarqueeTestimonials = () => {
  return (
    <section className="relative bg-white py-24 transition-colors dark:bg-[#030303]">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-center">
          <span className="mb-4 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-zinc-500 dark:border-white/10 dark:bg-white/5 dark:text-zinc-400">
            Community
          </span>
          <h2 className="text-center text-4xl font-medium tracking-tight text-zinc-800 dark:text-white md:text-5xl lg:text-6xl">
            Loved by builders everywhere.
          </h2>
        </div>

        {/* Scroll Container with Fade Masks */}
        <div className="relative mt-10 flex justify-center gap-6 overflow-hidden max-h-[800px] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
          <TestimonialColumn items={testimonials} duration={20} />
          <TestimonialColumn
            items={testimonials}
            duration={30}
            className="hidden md:flex"
          />
          <TestimonialColumn
            items={testimonials}
            duration={25}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};

export default MarqueeTestimonials;
