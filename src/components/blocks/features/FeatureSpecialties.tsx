import { motion } from "framer-motion";

// --- Skeleton 1: Real-time Messaging ---
const ChatSkeleton = () => {
  const messages = [
    {
      side: "left",
      avatar: "1",
      text: "Hey! Are you free for a call?",
      color: "bg-white",
    },
    {
      side: "right",
      avatar: "manu",
      text: "Sure, give me 5 minutes!",
      color: "bg-white",
    },
    { side: "left", avatar: "8", text: "Sounds good 👍", color: "bg-white" },
  ];

  return (
    <div className="flex h-full flex-col justify-center gap-3 p-4">
      {messages.map((msg, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: msg.side === "left" ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
          className={`flex items-start gap-2 ${msg.side === "right" ? "flex-row-reverse" : ""}`}
        >
          <img
            src={`https://assets.aceternity.com/avatars/${msg.avatar}.webp`}
            className="size-6 rounded-full object-cover"
            alt="avatar"
          />
          <div className="rounded-lg bg-white dark:bg-neutral-800 px-3 py-1.5 text-[10px] text-neutral-700 dark:text-neutral-200 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
            {msg.text}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- Skeleton 2: Secure File Sharing ---
export const FileSkeleton = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative flex h-full items-center justify-center overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/20"
    >
      {/* 1. Refined Background Rays (Subtler) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 opacity-30">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative h-px w-full border-t border-dashed border-neutral-300 dark:border-neutral-700"
          >
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "200%", opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                delay: i * 0.6,
                ease: "easeInOut",
              }}
              className="absolute top-0 h-px w-32 bg-gradient-to-r from-transparent via-blue-900 to-transparent"
            />
          </div>
        ))}
      </div>

      {/* 2. 3D Folder Container */}
      <div className="relative z-10" style={{ perspective: "1000px" }}>
        <motion.div
          variants={{
            initial: { rotateX: 0, rotateY: 0 },
            hover: { rotateX: 10, rotateY: -15 },
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="relative h-20 w-28"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Back Leaf of Folder */}
          <div className="absolute inset-0 rounded-xl bg-amber-500 shadow-lg dark:bg-amber-600">
            <div className="absolute -top-3 left-0 h-6 w-10 rounded-t-lg bg-amber-500 dark:bg-amber-600" />
          </div>

          {/* THE FILE: Pops out on hover */}
          <motion.div
            variants={{
              initial: { y: 0, x: "-50%", rotate: 0 },
              hover: {
                y: -45,
                x: "-50%",
                rotate: -5,
                scale: 1.1,
                boxShadow:
                  "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
              },
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="absolute left-1/2 -top-2 h-16 w-14 origin-bottom rounded-md bg-white p-1 shadow-md dark:bg-neutral-800"
            style={{ zIndex: 1 }}
          >
            <div className="h-full w-full rounded-[4px] bg-neutral-100 dark:bg-neutral-700 overflow-hidden relative">
              <img
                src="https://assets.aceternity.com/avatars/1.webp"
                className="h-full w-full object-cover"
                alt="preview"
              />
              {/* Decorative "Lines" on the file */}
              <div className="absolute bottom-1 left-1 right-1 space-y-1">
                <div className="h-1 w-full bg-blue-500/20 rounded-full" />
                <div className="h-1 w-2/3 bg-blue-500/20 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Front Leaf of Folder (Translucent/Glassmorphic) */}
          <motion.div
            variants={{
              initial: { rotateX: 0 },
              hover: { rotateX: -25 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 z-10 origin-bottom rounded-xl bg-amber-400/90 dark:bg-amber-500/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-[2px]"
          >
            {/* Folder detail line */}
            <div className="absolute top-4 left-4 right-4 h-px bg-amber-600/20" />
          </motion.div>
        </motion.div>
      </div>

      {/* 3. Aesthetic Shine Effect */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent"
      />
    </motion.div>
  );
};

// --- Skeleton 3: Team Collaboration ---
const CollaborationSkeleton = () => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="w-40 rounded-xl bg-white dark:bg-neutral-900 p-4 shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
      >
        <div className="mb-4 flex gap-1">
          <div className="size-2 rounded-full bg-red-400" />
          <div className="size-2 rounded-full bg-yellow-400" />
          <div className="size-2 rounded-full bg-green-400" />
        </div>
        {[60, 75, 50, 80].map((width, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            whileInView={{ width: `${width}%` }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className={`h-1.5 rounded-full mb-2 ${i % 2 === 0 ? "bg-purple-500/20" : "bg-neutral-200 dark:bg-neutral-800"}`}
            style={{ marginLeft: i * 8 }}
          />
        ))}
      </motion.div>

      {/* Floating Cursors */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute top-1/2 right-14 flex items-center gap-2 rounded-full bg-blue-500 px-2 py-1 shadow-lg"
      >
        <img
          src="https://assets.aceternity.com/avatars/1.webp"
          className="size-4 rounded-full"
        />
        <span className="text-[8px] font-bold text-white">Sarah</span>
      </motion.div>
    </div>
  );
};

// --- Main Section ---
export const FeaturesSectionWithSkeleton = () => {
  const features = [
    {
      title: "Real time messaging",
      description:
        "Send and receive messages in real time with voice and text.",
      skeleton: <ChatSkeleton />,
    },
    {
      title: "Secure file sharing",
      description: "Share files securely with end-to-end encryption.",
      skeleton: <FileSkeleton />,
    },
    {
      title: "Team collaboration",
      description: "Collaborate with your team in shared workspaces.",
      skeleton: <CollaborationSkeleton />,
    },
  ];

  return (
    <section className="bg-white min-h-screen flex items-center justify-center dark:bg-neutral-950 px-4 py-20 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 shadow-2xl md:grid-cols-3">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group flex h-full flex-col justify-between border-b border-neutral-200 dark:border-neutral-800 p-8 md:border-b-0 md:border-r last:border-0 bg-white dark:bg-neutral-950"
          >
            <div className="h-60 w-full rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 mb-8 overflow-hidden group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900 transition-colors duration-500">
              {feature.skeleton}
            </div>
            <div>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-100 tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
