import React from "react";
import { motion } from "framer-motion";
import { Youtube, Linkedin, Instagram } from "lucide-react";

export default function JitterFooter() {
  const columns = [
    {
      title: "Product",
      links: [
        "Import from Figma",
        "Design",
        "Animate",
        "Collaborate",
        "Export",
      ],
    },
    {
      title: "Templates",
      links: [
        "Community",
        "Devices",
        "Text animations",
        "Logos",
        "Icons",
        "Charts",
      ],
    },
    {
      title: "Resources",
      links: ["Pricing", "Changelog", "Lottie animations"],
    },
    { title: "Company", links: ["Customers", "Terms", "Privacy", "Careers"] },
    { title: "Connect", links: ["Contact sales", "Support"] },
  ];

  return (
    <footer className="w-full bg-white text-zinc-900 transition-colors duration-500 selection:bg-yellow-400 selection:text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        {/* --- CTA SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-6 text-5xl font-bold tracking-tighter md:text-7xl">
            Try Jitter today
          </h2>
          <p className="mb-10 text-lg text-zinc-500 dark:text-zinc-400 md:text-xl">
            No download, no install, no waiting.{" "}
            <br className="hidden md:block" /> Start creating instantly.
          </p>
          <motion.a
            href="/join/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-full bg-zinc-900 px-10 py-4 text-sm font-bold text-white transition-shadow hover:shadow-xl dark:bg-white dark:text-black"
          >
            Get started for free
          </motion.a>
        </motion.div>

        {/* --- NAVIGATION GRID --- */}
        <div className="mt-24 grid grid-cols-2 gap-12 border-t border-zinc-100 py-20 dark:border-zinc-800 md:grid-cols-3 lg:grid-cols-5">
          {columns.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
                {col.title}
              </h3>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group relative inline-block text-[14px] font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
                    >
                      {link}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col items-center justify-between gap-8 pt-8 md:flex-row">
          <div className="text-xs font-medium text-zinc-400">
            © Jitter 2026.{" "}
            <span className="hidden md:inline">Made with motion.</span>
          </div>

          <div className="flex items-center gap-8">
            <SocialIcon icon={<Youtube size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<span className="text-sm font-bold">𝕏</span>} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -3, scale: 1.1 }}
      className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
    >
      {icon}
    </motion.a>
  );
}
