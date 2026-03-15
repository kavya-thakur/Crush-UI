import { useState } from "react";
import { motion } from "framer-motion";

type AnimatedLinkTextProps = {
  text: string;
};
const AnimatedLinkText = ({ text }: AnimatedLinkTextProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative overflow-hidden cursor-pointer inline-block"
      style={{ height: "1.25em" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top text */}
      <motion.span
        style={{ display: "block" }}
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>

      {/* Bottom text */}
      <motion.span
        style={{
          display: "block",
          position: "absolute",
          top: "100%",
          left: 0,
        }}
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
};

const NavbarMinimal = () => {
  return (
    <nav className="flex justify-between p-2">
      <div className="flex flex-col md:text-base dark:text-neutral-100">
        <h3 className="font-semibold">By Kav</h3>
        <p className="text-sm md:text-base w-29 text-gray-500 dark:text-neutral-300">
          (Web Designer & Web Developer)
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row lg:gap-2 lg:text-xl">
        {[
          { href: "/resume.pdf", label: "Resume," },
          { href: "#services", label: "Services," },
          { href: "#work", label: "Work," },
          { href: "#about", label: "About," },
          { href: "#contact", label: "Contact," },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-gray-700 hover:text-gray-900 dark:text-neutral-100 dark:hover:text-gray-300"
            style={{ display: "inline-block", position: "relative" }}
          >
            <AnimatedLinkText text={label} />
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavbarMinimal;
