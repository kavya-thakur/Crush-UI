import React from "react";
import { motion } from "framer-motion";

// --- Components ---

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <motion.a
    href={href}
    className="group relative flex items-center py-1 text-sm text-zinc-400 transition-colors hover:text-white"
    whileHover={{ x: 4 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    <motion.span
      className="absolute -left-4 h-[1px] w-3 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
    />
    {children}
  </motion.a>
);

const ContactItem = ({
  iconSrc,
  text,
  href,
}: {
  iconSrc: string;
  text: string;
  href: string;
}) => (
  <a href={href} className="flex items-center gap-3 group">
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800/50 border border-zinc-700/50 group-hover:border-orange-500/50 transition-colors">
      <img
        src={iconSrc}
        alt=""
        className="h-4 w-4 opacity-70 group-hover:opacity-100"
      />
    </div>
    <span className="text-sm text-zinc-300 group-hover:text-white transition-colors uppercase tracking-tight font-medium">
      {text}
    </span>
  </a>
);

export const TidescapeFooter = () => {
  return (
    <footer className="w-full min-h-screen flex flex-col bg-[#1F1C19] px-6 py-16 md:px-12 lg:px-24 text-zinc-100 selection:bg-orange-500/30">
      <div className="mx-auto max-w-7xl w-full flex flex-col flex-1">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            TIDESCAPE
          </motion.h1>

          <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
            <ContactItem
              href="tel:+302286012345"
              text="+30 2286 0 12345"
              iconSrc="https://framerusercontent.com/images/ikwOQS6jgrBtr8hJp7TBDvCzYw.svg"
            />
            <ContactItem
              href="mailto:connect@ryzedesigns.com"
              text="connect@ryzedesigns.com"
              iconSrc="https://framerusercontent.com/images/IHWRGsndp2j8u1TnbDYiuLTUms.svg"
            />
          </div>
        </div>

        <div className="h-px w-full bg-white/10 mb-12" />

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-zinc-400 leading-relaxed max-w-sm font-light">
              Book your stay today and discover seaside luxury, breathtaking
              views, and unforgettable moments.
            </p>

            <motion.a
              href="/contact"
              className="inline-flex flex-col group pt-4"
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold tracking-[0.2em] text-white">
                  BOOK YOUR STAY
                </span>
                <motion.img
                  variants={{ hover: { x: 5 } }}
                  src="https://framerusercontent.com/images/4a5Wxd8QCkxWhREaeoxFhGK9xQ.svg"
                  className="h-4 w-auto"
                />
              </div>
              <motion.div
                className="h-[1px] bg-white w-full"
                variants={{ hover: { scaleX: 1.1, originX: 0 } }}
              />
            </motion.a>
          </div>

          <div>
            <h6 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-6">
              Explore
            </h6>
            <nav className="flex flex-col gap-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/news">News</FooterLink>
              <FooterLink href="/suites">Suites</FooterLink>
            </nav>
          </div>

          <div>
            <h6 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-6">
              Others
            </h6>
            <nav className="flex flex-col gap-2">
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/activities">Activities</FooterLink>
              <FooterLink href="/gallery">Gallery</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </nav>
          </div>

          <div>
            <h6 className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mb-6">
              Socials
            </h6>
            <nav className="flex flex-col gap-2">
              <FooterLink href="#">Instagram</FooterLink>
              <FooterLink href="#">Dribbble</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-auto flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-xs text-zinc-500 font-mono">
            Copyright ©Tidescape
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="h-12 opacity-50 hover:opacity-100 transition-opacity"
          >
            <img
              src="https://framerusercontent.com/images/0Ppn4v7YMwU0RBHmWkFjgxkB3Q.svg"
              alt="Logo"
              className="h-full w-auto"
            />
          </motion.div>

          <p className="text-xs text-zinc-500 font-mono text-center md:text-right">
            Created by{" "}
            <a
              href="#"
              className="text-zinc-300 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4"
            >
              Ryze Design Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
