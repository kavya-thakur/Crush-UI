import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    main: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa020eecfd681121acf_hero-slide-1-img-1.avif",
    sub: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa08f873b1b8e9f2260_hero-slide-1-img-2.avif",
  },
  {
    main: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa03ca3b733f5b55d74_hero-slide-2-img-1.avif",
    sub: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa1a496e8044c51f8e7_hero-slide-2-img-2.avif",
  },
  {
    main: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa0e74a211f5605758c_hero-slide-3-img-1.avif",
    sub: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6908eaa0a826889d83292f9e_hero-slide-3-img-2.avif",
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");

  // Auto-slide effect for the "smooth" feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fbfbfb] font-sans selection:bg-black selection:text-white">
      {/* Background Gradient Decorative Image */}
      <img
        src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/6901e53513dcf1ea037d2e38_bg-gradient.avif"
        className="absolute right-0 top-0 z-0 h-[80%] w-auto opacity-60 mix-blend-multiply"
        alt=""
      />

      <div className="container relative z-10 mx-auto px-6 py-20 lg:px-12 xl:max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <div className="flex w-fit items-center gap-2 rounded-full border border-black/5 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M13.5864 5.4544C13.4937 5.5264 11.8584 6.4496 11.8584 8.5024C11.8584 10.8768 13.9393 11.7168 14.0016 11.7376C13.992 11.7888 13.671 12.888 12.9044 14.008C12.2209 14.9936 11.507 15.9776 10.421 15.9776C9.33501 15.9776 9.05553 15.3456 7.80184 15.3456C6.5801 15.3456 6.1457 15.9984 5.15233 15.9984C4.15897 15.9984 3.46585 15.0864 2.66892 13.9664C1.74582 12.6512 1 10.608 1 8.6688C1 5.5584 3.01867 3.9088 5.00541 3.9088C6.06106 3.9088 6.94103 4.6032 7.60381 4.6032C8.23464 4.6032 9.21843 3.8672 10.4194 3.8672C10.8746 3.8672 12.5099 3.9088 13.5864 5.4544ZM9.84926 2.5504C10.3459 1.96 10.6973 1.1408 10.6973 0.3216C10.6973 0.208 10.6877 0.0928 10.667 0C9.85884 0.0304 8.89742 0.5392 8.31769 1.2128C7.86253 1.7312 7.43771 2.5504 7.43771 3.3808C7.43771 3.5056 7.45848 3.6304 7.46806 3.6704C7.51916 3.68 7.60221 3.6912 7.68526 3.6912C8.41032 3.6912 9.32224 3.2048 9.84926 2.5504Z" />
              </svg>
              <span className="text-xs font-medium tracking-tight text-black/80">
                Public launch on iOS soon
              </span>
            </div>

            {/* Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight text-black md:text-6xl lg:text-7xl">
                Meet. Coll<span className="italic font-serif">a</span>borate. Hi
                <span className="italic font-serif">r</span>e. Finally, all in o
                <span className="italic font-serif">n</span>e place.
              </h1>
              <p className="max-w-md text-lg leading-relaxed text-black/60">
                Instantly connect, collaborate, and work with verified talents —
                all in one seamless space.
              </p>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6">
              <form
                className="relative flex w-full max-w-md items-center rounded-2xl bg-white p-2 shadow-xl shadow-black/5"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-black/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black/90"
                >
                  Reserve My Spot
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 13.5l5-5.5-5-5.5M1 8h13"
                    />
                  </svg>
                </motion.button>
              </form>

              {/* Social Proof */}
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126cccb69ed9dab42341b_confirm_users_image.avif"
                  className="h-10 w-auto rounded-full"
                  alt="Creatives avatars"
                />
                <p className="text-sm font-medium text-black">
                  5.000+ creatives{" "}
                  <span className="font-normal text-black/40">
                    already signed up for beta
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-[500px]">
              {/* Main Image Container */}
              <div className="relative h-full w-full overflow-hidden rounded-[40px] shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={slides[currentSlide].main}
                    src={slides[currentSlide].main}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 h-full w-full object-cover"
                    alt="Talent showcase"
                  />
                </AnimatePresence>
              </div>

              {/* Sub-Image (Floating UI element) */}
              <div className="absolute -bottom-10 -left-10 z-20 w-[60%] md:-left-20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slides[currentSlide].sub}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="overflow-hidden rounded-2xl shadow-2xl border-4 border-white"
                  >
                    <img
                      src={slides[currentSlide].sub}
                      className="h-auto w-full"
                      alt="UI interaction"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Pagination */}
              <div className="absolute -bottom-12 right-0 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      idx === currentSlide ? "w-8 bg-black" : "w-2 bg-black/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
