import { motion } from "framer-motion";

const FAKE_TESTIMONIALS = [
  {
    name: "Alex Rivera",
    handle: "@arivera_dev",
    avatar: "https://i.pravatar.cc/150?u=alex",
    content:
      "The animation primitives here are a game changer. I rebuilt my entire landing page in a weekend. Pure magic! ✨",
    delay: 0.1,
  },

  {
    name: "Grace Hopper",
    handle: "@grace_dev",
    avatar: "https://i.pravatar.cc/150?u=grace",
    content:
      "The documentation is so clear and concise. I had a working prototype in under an hour. Highly recommended for any dev.",
    delay: 0.2,
  },
  {
    name: "Marcus Thorne",
    handle: "@mthorne_ui",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    content:
      "The neutral color palette is incredibly versatile. It fits perfectly into our enterprise app without looking too 'flashy'.",
    delay: 0.3,
  },
  {
    name: "Zoe Wang",
    handle: "@zoe_codes",
    avatar: "https://i.pravatar.cc/150?u=zoe",
    content:
      "These components are so lightweight! My PageSpeed scores haven't budged, but my UI looks 10x better.",
    delay: 0.4,
  },
  {
    name: "Oscar Isaac",
    handle: "@oscar_dev",
    avatar: "https://i.pravatar.cc/150?u=oscar",
    content:
      "The attention to accessibility is a huge plus. It's great to see a library that looks this good and is still usable for everyone.",
    delay: 0.1,
  },
  {
    name: "Maya Patel",
    handle: "@maya_uiux",
    avatar: "https://i.pravatar.cc/150?u=maya",
    content:
      "I'm obsessed with the subtle hover effects. They add just the right amount of interactivity without being distracting.",
    delay: 0.2,
  },
  {
    name: "Felix Klein",
    handle: "@felix_builds",
    avatar: "https://i.pravatar.cc/150?u=felix",
    content:
      "The library is so easy to integrate with Tailwind CSS. I was able to customize the theme in seconds.",
    delay: 0.3,
  },
  {
    name: "Isla Fisher",
    handle: "@isla_dev",
    avatar: "https://i.pravatar.cc/150?u=isla",
    content:
      "The community around this library is fantastic. I've found so many cool examples and snippets to use in my projects.",
    delay: 0.4,
  },
  {
    name: "Leo Garcia",
    handle: "@leo_codes",
    avatar: "https://i.pravatar.cc/150?u=leo",
    content:
      "The performance is top-notch. Even with multiple animated components on one page, everything runs smoothly.",
    delay: 0.1,
  },
  {
    name: "Sophie Turner",
    handle: "@sophie_dev",
    avatar: "https://i.pravatar.cc/150?u=sophie",
    content:
      "I love the variety of components available. There's something for every part of my app, from the hero section to the footer.",
    delay: 0.2,
  },
  {
    name: "Noah Smith",
    handle: "@noah_builds",
    avatar: "https://i.pravatar.cc/150?u=noah",
    content:
      "The library is constantly being updated with new features and components. It's great to see it growing so fast!",
    delay: 0.3,
  },
  {
    name: "Emma Watson",
    handle: "@emma_codes",
    avatar: "https://i.pravatar.cc/150?u=emma",
    content:
      "This library has saved me so much time and effort. I can't imagine building my app without it now. 🚀",
    delay: 0.4,
  },
];
type Testimonial = {
  name: string;
  handle: string;
  avatar: string;
  content: string;
  delay: number;
};
type TestimonialCardProps = {
  item: Testimonial;
};

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: item.delay }}
      className="mb-4 break-inside-avoid"
    >
      <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-neutral-900/50">
        {/* Subtle Gradient Glow (Light Mode) */}
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-blue-50/50 blur-3xl transition-opacity group-hover:opacity-100 dark:hidden" />

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <img
            src={item.avatar}
            alt={item.name}
            className="size-10 rounded-full border border-neutral-100 dark:border-neutral-800"
          />
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
              {item.name}
            </span>
            <span className="text-[12px] font-medium text-neutral-500 dark:text-neutral-500">
              {item.handle}
            </span>
          </div>
        </div>

        {/* Content */}
        <p className="mt-4 text-[14px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          {item.content}
        </p>

        {/* Inner Glow (Dark Mode Only) */}
        <div className="pointer-events-none absolute inset-0 hidden rounded-2xl shadow-[inset_0px_1px_1px_rgba(255,255,255,0.05)] dark:block" />
      </div>
    </motion.div>
  );
};

const AnimatedTestimonials = () => {
  return (
    <section className="relative bg-white px-6 py-24 dark:bg-black">
      {/* Background Decor */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl font-semibold tracking-tight text-balance leading-snug text-gradient sm:text-5xl"
          >
            Loved by builders everywhere.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-[600px] text-lg text-neutral-600 dark:text-neutral-400"
          >
            Don't just take our word for it. Join thousands of developers
            building the future of the web.
          </motion.p>
        </div>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FAKE_TESTIMONIALS.map((item: Testimonial, idx) => (
            <TestimonialCard key={idx} item={item} />
          ))}
        </div>
        {/* Masonry Layout */}
      </div>
    </section>
  );
};

export default AnimatedTestimonials;
