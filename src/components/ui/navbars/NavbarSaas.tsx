import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const LogoIcon = () => (
  <div className="size-8 bg-black rounded-lg flex items-center justify-center">
    <div className="size-2 bg-white rotate-45" />
  </div>
);

const NavbarSaas = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
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
  );
};

export default NavbarSaas;
