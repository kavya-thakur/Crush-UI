export const glassCardCode = `

import { motion } from "motion/react";

export const GlassSecureCard: React.FC = () => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="max-w-sm w-full aspect-[1.586/1] rounded-3xl p-8 relative overflow-hidden bg-gradient-to-br from-neutral-800 to-black border border-white/20 shadow-2xl"
    >
      {/* Holographic Shimmer Effect */}
      <motion.div
        animate={{ x: ["-150%", "150%"] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
      />

      <div className="flex justify-between items-start h-full flex-col">
        <div className="flex justify-between w-full items-center">
          <div className="h-10 w-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md opacity-80" />
          <svg
            className="h-8 w-8 text-white/20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>

        <div className="space-y-4 w-full">
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-xl font-mono text-white/80 tracking-widest"
              >
                ••••
              </span>
            ))}
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">
                Card Holder
              </p>
              <p className="text-sm font-medium text-white/90">
                ALEXANDER PRESTON
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-white/40 uppercase tracking-tighter">
                Expires
              </p>
              <p className="text-sm font-medium text-white/90">12/28</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
`;
