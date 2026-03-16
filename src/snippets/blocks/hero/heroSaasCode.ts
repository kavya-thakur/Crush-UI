export const heroSaasCode = `
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import vid from "../assets/vid.webm";
import AnimatedButton from "./AnimatedButton";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <>
      <motion.div
        className="h-auto flex flex-col items-center mt-20 lg:mt-28 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* Heading */}
        <motion.h1
          className="heading text-5xl md:text-6xl lg:text-[5rem] tracking-tight mt-6 font-bold leading-none"
          variants={fadeUp}
        >
          AI-Powered <span className=" md:inline">Tech</span>{" "}
          <span className="inline md:block">Career Finder.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg px-7 text-gray-600 mt-4 max-w-2xl"
          variants={fadeUp}
        >
          Discover your ideal tech career path with our{" "}
          <span className="text-purple-400 font-semibold">AI-driven</span>{" "}
          platform.
        </motion.p>

        {/* CTA Button */}
        <div className="flex gap-5">
          <Link to="/generate">
            <AnimatedButton
              text="Start Now"
              bg="bg-black"
              textColor="text-white"
              glow=""
            />
          </Link>

          <AnimatedButton
            text="Learn More"
            bg="bg-neutral-200"
            textColor="text-black"
            glow=""
          />
        </div>

        {/* Hero Video */}
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          src={vid}
          className="w-full h-full md:h-[65vh] object-cover mt-14 rounded-3xl shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        />
      </motion.div>
    </>
  );
};

export default Hero;`;
