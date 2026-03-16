import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible] = useState(true);

  const navLinks = [
    { name: "Why choose ISO", href: "#why" },
    { name: "Who is it for", href: "#who" },
    { name: "Features", href: "#features" },
    { name: "Reserve username", href: "#reserve-username" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-100 px-6 py-4"
    >
      <nav
        className={`
        mx-auto max-w-7xl rounded-full transition-all duration-500 border bg-white backdrop-blur-md border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.04)] px-6 py-2
      `}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Divider Section */}
          <div className="flex items-center gap-6 pointer-events-none">
            <a href="#" className="transition-opacity hover:opacity-70">
              <div className="h-6 text-black">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 130 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.9908 0C24.1749 5.47292e-05 27.2289 1.26431 29.4804 3.5147C31.6203 5.65351 32.868 8.51671 32.9866 11.5276H41.9833V12.4724H32.9849C32.8663 15.4833 31.6182 18.3465 29.4783 20.4853C27.2267 22.7356 24.1728 24 20.9886 24C17.8045 24 14.7505 22.7356 12.499 20.4853C10.3591 18.3465 9.11096 15.4833 8.99237 12.4724H0V11.5276H8.99451C9.1131 8.51666 10.3612 5.65353 12.5011 3.5147C14.7527 1.26432 17.8066 -2.40276e-07 20.9908 0ZM11.2235 12.4724C11.338 15.1186 12.4113 17.6324 14.2424 19.5134C16.1821 21.5059 18.8131 22.6252 21.5562 22.6252C24.2992 22.6251 26.9303 21.5059 28.8699 19.5134C30.7009 17.6324 31.7739 15.1186 31.8884 12.4724H11.2235ZM20.4232 1.37481C17.6802 1.37484 15.0495 2.49413 13.1099 4.48659C11.2789 6.36755 10.2051 8.88143 10.0905 11.5276H30.7555C30.6409 8.88146 29.5679 6.36754 27.737 4.48659C25.7973 2.49403 23.1663 1.37484 20.4232 1.37481Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
            <div className="hidden lg:block w-px h-6 bg-black/10" />

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm  text-black/40 hover:text-black transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="#join-waitlist"
              className="hidden sm:block border border-neutral-300 text-neutral-700 px-6 py-2.5 rounded-full text-sm font-bold hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Join waitlist
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 7 : 0,
                }}
                className="w-5 h-[2px] bg-black rounded-full"
              />
              <motion.span
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                className="w-5 h-[2px] bg-black rounded-full"
              />
              <motion.span
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -7 : 0,
                }}
                className="w-5 h-[2px] bg-black rounded-full"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 bg-white rounded-[32px] p-8 shadow-2xl border border-black/[0.05] lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight text-black"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-black/5" />
              <a
                href="#join-waitlist"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center bg-black text-white py-4 rounded-2xl font-bold"
              >
                Reserve My Spot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
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

export const HiringAgency: React.FC = () => {
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
    <section className="relative min-h-screen w-full overflow-hidden py-36  bg-[#fbfbfb] font-sans selection:bg-black selection:text-white">
      <div className="container relative z-10 mx-auto px-6 lg:px-12 xl:max-w-7xl">
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

const benefits = [
  {
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.6002 3.22131C17.5639 3.22131 20.7773 6.43455 20.778 10.3981C20.7808 12.8908 19.4903 15.2066 17.3688 16.5153L17.3678 16.5162L10.6276 20.6637C10.3885 20.8106 10.0884 20.8172 9.84338 20.6803C9.59836 20.5434 9.44696 20.2842 9.4469 20.0035V16.3229C5.98001 16.1511 3.22145 13.2865 3.22131 9.77698C3.22131 6.15675 6.15675 3.22131 9.77698 3.22131H13.6002ZM4.77209 9.77698C4.77224 12.541 7.01288 14.7819 9.77698 14.7819H10.2213C10.6492 14.7819 10.9965 15.1285 10.9967 15.5563V18.6168L16.5563 15.1959C18.2191 14.1697 19.2304 12.3541 19.2281 10.4V10.399C19.228 7.29112 16.7082 4.77209 13.6002 4.77209H9.77698C7.01279 4.77209 4.77209 7.01279 4.77209 9.77698Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "One Place for Everything",
    description:
      "No more scattered DMs or endless apps. Chat, plan, and manage every project in one clean space.",
  },
  {
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.96411 12.4698C10.257 12.1771 10.7318 12.1772 11.0247 12.4698C11.3175 12.7627 11.3175 13.2375 11.0247 13.5304L10.304 14.2511H13.5061C14.1967 14.2509 14.7561 13.6908 14.7561 13.0001C14.756 12.3096 14.1967 11.7494 13.5061 11.7491H12.5051C12.091 11.7491 11.7551 11.4133 11.7551 10.9991C11.7553 10.5852 12.0911 10.2492 12.5051 10.2491H13.5061C15.0251 10.2494 16.256 11.4811 16.2561 13.0001C16.2561 14.5192 15.0252 15.7509 13.5061 15.7511H10.304L11.0247 16.4718C11.3176 16.7647 11.3176 17.2395 11.0247 17.5323C10.7318 17.8252 10.257 17.8252 9.96411 17.5323L7.96313 15.5314C7.67043 15.2385 7.67035 14.7637 7.96313 14.4708L9.96411 12.4698ZM15.7522 5.99719V5.24719H8.24829V5.99719C8.24829 6.41138 7.91247 6.74715 7.49829 6.74719C7.08408 6.74719 6.74829 6.41141 6.74829 5.99719V5.24719H5.99634C4.7537 5.24719 3.74634 6.25455 3.74634 7.49719V18.004L3.75806 18.2335C3.87317 19.3682 4.83128 20.254 5.99634 20.254H18.0042C19.2465 20.2539 20.254 19.2464 20.2542 18.004V7.49719C20.2542 6.25466 19.2466 5.24736 18.0042 5.24719H17.2522V5.99719C17.2522 6.41133 16.9163 6.74707 16.5022 6.74719C16.088 6.74719 15.7522 6.41141 15.7522 5.99719ZM21.7542 18.004C21.754 20.0748 20.075 21.7539 18.0042 21.754H5.99634C3.9899 21.754 2.35152 20.1779 2.25122 18.1964L2.24634 18.004V7.49719C2.24634 5.42613 3.92527 3.74719 5.99634 3.74719H6.74829V2.99622C6.74829 2.582 7.08408 2.24622 7.49829 2.24622C7.91247 2.24626 8.24829 2.58203 8.24829 2.99622V3.74719H15.7522V2.99622C15.7522 2.582 16.088 2.24622 16.5022 2.24622C16.9163 2.24634 17.2522 2.58208 17.2522 2.99622V3.74719H18.0042C20.0751 3.74736 21.7542 5.42623 21.7542 7.49719V18.004Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Fair, Friction-Free Booking",
    description:
      "Clear pricing and instant rebooking — because getting paid (or paying) shouldn’t be a guessing game.",
  },
  {
    icon: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.22461 11.2417V6.91163C3.22479 6.01265 3.90606 5.22122 4.83887 5.14796C7.12851 4.96732 9.21269 4.0558 10.8584 2.64503L10.9844 2.5464C11.5884 2.11813 12.4118 2.11884 13.0156 2.5464L13.1406 2.64406L13.1416 2.64503C14.7871 4.05661 16.8712 4.9673 19.1611 5.14796H19.1602C20.0938 5.2209 20.7752 6.01289 20.7754 6.91261V11.2427C20.7754 15.9691 17.3764 20.3573 12.7344 21.6724C12.2573 21.8075 11.7437 21.8075 11.2666 21.6724C6.62338 20.3583 3.22461 15.9678 3.22461 11.2417ZM14.7705 9.79445C15.0732 9.49179 15.5645 9.49179 15.8672 9.79445C16.1695 10.0971 16.1697 10.5876 15.8672 10.8901L11.7188 15.0376C11.4161 15.3403 10.9257 15.3403 10.623 15.0376L8.13379 12.5493C7.83113 12.2467 7.83113 11.7553 8.13379 11.4526C8.43645 11.1501 8.92784 11.15 9.23047 11.4526L11.1709 13.3931L14.7705 9.79445ZM4.77539 11.2417C4.77539 15.2494 7.6889 19.0491 11.6895 20.1812C11.8902 20.238 12.1107 20.238 12.3115 20.1812C16.3114 19.0481 19.2246 15.2502 19.2246 11.2427V6.91261C19.2244 6.7849 19.13 6.70113 19.04 6.69386H19.0391C16.4111 6.48653 14.0193 5.43916 12.1328 3.82081C12.0606 3.7594 11.9382 3.76086 11.8682 3.82081L11.8672 3.82179C9.981 5.43871 7.589 6.48652 4.96094 6.69386H4.95996C4.86948 6.70116 4.77557 6.78541 4.77539 6.91163V11.2417Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "A Community You Can Trust",
    description:
      "Every user is verified, so you can focus on the work, not on worrying who’s on the other side.",
  },
];

export const WhySection: React.FC = () => {
  return (
    <section id="why" className="w-full bg-[#fbfbfb] py-24">
      <div className="container mx-auto px-6 xl:max-w-7xl">
        {/* Header Block */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-black md:text-5xl lg:text-6xl"
          >
            B<span className="italic font-serif">e</span>cau
            <span className="italic font-serif">s</span>e cre
            <span className="italic font-serif">a</span>tive w
            <span className="italic font-serif">o</span>rk sho
            <span className="italic font-serif">u</span>ldn’t be t
            <span className="italic font-serif">h</span>is com
            <span className="italic font-serif">p</span>licat
            <span className="italic font-serif">e</span>d
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-black/60 lg:pb-2"
          >
            We’ve lived the creative chaos ourselves — so we built a simpler way
            to connect and collaborate.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.21, 0.45, 0.32, 0.9],
              }}
              whileHover={{ y: -8 }}
              className="group flex flex-col gap-8 rounded-[32px] border border-black/[0.03] bg-white p-10 shadow-sm transition-all hover:shadow-xl hover:shadow-black/[0.02]"
            >
              {/* Icon Container */}
              <div className="h-10 w-10 text-black transition-transform duration-500 group-hover:scale-110">
                {benefit.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight text-black">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed text-black/50">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const WhoIsItFor: React.FC = () => {
  const row1 = [
    {
      name: "Photographers",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126ee5ec2cd7f83dcde2b_Photographers.avif",
    },
    {
      name: "Models",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e8669938a5c3f9af81_Models.avif",
    },
    {
      name: "Videographers",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126ee35d3ba4767605de0_Videographers.avif",
    },
    {
      name: "Hair stylists",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e8d7538051abe4b489_Hair%20stylists.avif",
    },
    {
      name: "Content creators",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126cc4ebed955e557fd79_Content%20creators.avif",
    },
    {
      name: "Marketing",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e8cda7655503c7b020_Marketing.avif",
    },
    {
      name: "Makeup artists",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e8c2b722dbe178f270_Makeup%20artists.avif",
    },
    {
      name: "Music talents",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e829aa55d6b8db6751_Music%20talents.avif",
    },
    {
      name: "Influencers",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e8695f007675d67a8f_Influencers.avif",
    },
    {
      name: "Actors",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126cc2ca1110bcfaed389_Actors.avif",
    },
  ];

  const row2 = [
    {
      name: "Photo editors",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e819b7a9a9139c17da_Photo%20editors.avif",
    },
    {
      name: "Brand specialists",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126cc2b60187615b10b98_Brand%20specialists.avif",
    },
    {
      name: "Drone operators",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d28568185dd161930e_Drone%20operators.avif",
    },
    {
      name: "Food specialists",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e10200c2d051b7e6e9_Food%20specialists.avif",
    },
    {
      name: "Florists",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e17ad452f088ae89c2_Florists.avif",
    },
    {
      name: "Video content creators",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126ee6a455bef4ad284b5_Video%20content%20creators.avif",
    },
    {
      name: "Stylists",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126ee65bda9b0a21368a1_Stylists.avif",
    },
    {
      name: "Dancers",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d2b766b7d2bdc2af2e_Dancers.avif",
    },
    {
      name: "Directors",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d2b58c322892d85058_Directors.avif",
    },
    {
      name: "Producers",
      img: "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126ee4fcd080f98700957_Producers.avif",
    },
  ];

  return (
    <section id="who" className="w-full bg-[#fbfbfb] py-32 overflow-hidden">
      <div className="container mx-auto px-6 mb-24 xl:max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: EASE_PREMIUM }}
          className="text-center text-5xl font-semibold leading-[1.1] tracking-tighter text-black md:text-7xl"
        >
          F<span className="italic font-serif">o</span>r ev
          <span className="italic font-serif">e</span>ryone w
          <span className="italic font-serif">h</span>o cre
          <span className="italic font-serif">a</span>tes
        </motion.h2>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* Superior Edge Fades with better color depth */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[15%] bg-gradient-to-r from-[#fbfbfb] via-[#fbfbfb]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[15%] bg-gradient-to-l from-[#fbfbfb] via-[#fbfbfb]/80 to-transparent" />

        <MarqueeRow items={row1} speed={60} />
        <MarqueeRow items={row2} reverse speed={70} />
      </div>
    </section>
  );
};

const MarqueeRow = ({
  items,
  reverse = false,
  speed,
}: {
  items: any[];
  reverse?: boolean;
  speed: number;
}) => {
  return (
    <div className="flex overflow-hidden py-2 select-none">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex flex-nowrap gap-8 pr-8"
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.02,
              y: -4,
              borderColor: "rgba(0,0,0,0.15)",
              boxShadow: "0 12px 24px -10px rgba(0,0,0,0.08)",
            }}
            className="flex items-center gap-5 rounded-[22px] border border-black/[0.04] bg-white py-2.5 pl-2.5 pr-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-default"
          >
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-[14px] bg-gray-50 border border-black/[0.03]">
              <motion.img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="h-full w-full object-cover grayscale-[0.2] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>
            <span className="whitespace-nowrap text-lg font-medium tracking-tight text-black/60 transition-colors duration-300 group-hover:text-black">
              {item.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  images: string[];
  variant?: "violet" | "green" | "pink" | "blue";
  layout?: "top-left" | "bottom-left";
}

export const FeaturesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"hirer" | "talent">("hirer");

  const hirerFeatures: FeatureCard[] = [
    {
      id: "h1",
      title: "Create project",
      description: "Add requirements, upload references.",
      images: [
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d8650a040b504815c6_f-card-1-img-1.avif",
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d81d77af72f07564d7_f-card-1-img-2.avif",
      ],
    },
    {
      id: "h2",
      title: "Hire talent",
      description: "Choose talent and collaborate.",
      variant: "violet",
      images: [
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d8f3ae16d6264f0053_f-card-2-img-1.avif",
      ],
    },
    {
      id: "h3",
      title: "Communication",
      description: "All DMs are finally in one app.",
      variant: "green",
      images: [
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d8e46f644fbd12245e_f-card-3-img-2.avif",
      ],
    },
    {
      id: "h4",
      title: "Freely trust",
      description: "Choose talent on rating and reviews.",
      layout: "bottom-left",
      images: [
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d8419dbc1b6de70878_f-card-4-img-2.avif",
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d8adc74d2dc9ff42bd_f-card-4-img-1.avif",
      ],
    },
  ];

  const talentFeatures: FeatureCard[] = [
    {
      id: "t1",
      title: "Become a talent",
      description: "Turn your followers to bookings.",
      variant: "pink",
      images: [
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e11f44792a2b9fe236_f-card-5-img-1.avif",
      ],
    },
    {
      id: "t2",
      title: "Find work",
      description: "Apply for a project and collaborate.",
      images: [
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e1e8e39be812c61bd2_f-card-6-img-1.avif",
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e1f3ae16d6264f0620_f-card-6-img-2.avif",
      ],
    },
    {
      id: "t3",
      title: "Collaborate",
      description: "Create your own projects and find talents.",
      variant: "blue",
      layout: "bottom-left",
      images: [
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e11d883cdb006fceb8_f-card-7-img-1.avif",
      ],
    },
    {
      id: "t4",
      title: "Monetize",
      description: "Turn your passion into steady income.",
      images: [
        "https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126e134e96e2b535602af_f-card-8-img-1.avif",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white selection:bg-black selection:text-white">
      <div className="container mx-auto px-6 max-w-[1300px]">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE_PREMIUM }}
            className="text-5xl md:text-[68px] font-semibold tracking-tight leading-[1.05] mb-6 text-[#1d1d1f]"
          >
            We’<span className="italic font-serif">v</span>e do
            <span className="italic font-serif">n</span>e the h
            <span className="italic font-serif">a</span>rd part, <br />n
            <span className="italic font-serif">o</span>w i
            <span className="italic font-serif">t</span>’s your turn to cre
            <span className="italic font-serif">a</span>te
          </motion.h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-20">
          <div className="bg-[#f5f5f7] p-1.5 rounded-full flex items-center border border-[#d2d2d7]/30 shadow-sm">
            {(["hirer", "talent"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-12 py-2.5 text-sm font-bold transition-colors duration-300 z-10 ${
                  activeTab === tab ? "text-[#1d1d1f]" : "text-[#86868b]"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-black/[0.02]"
                    transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20 capitalize">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: EASE_PREMIUM }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {(activeTab === "hirer" ? hirerFeatures : talentFeatures).map(
                (card, index) => (
                  <motion.div
                    key={card.id}
                    whileHover="hover"
                    className={`
                      relative rounded-[48px] overflow-hidden p-12 flex flex-col min-h-[500px] border border-black/[0.04] transition-all duration-700
                      ${index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"}
                      ${card.variant === "violet" ? "bg-[#f4f0ff]" : ""}
                      ${card.variant === "green" ? "bg-[#e7f7f0]" : ""}
                      ${card.variant === "pink" ? "bg-[#fff0f6]" : ""}
                      ${card.variant === "blue" ? "bg-[#f0f7ff]" : ""}
                      ${!card.variant ? "bg-[#f5f5f7]" : ""}
                    `}
                  >
                    {/* Text Content with breathing room */}
                    <div
                      className={`relative z-30 pointer-events-none transition-transform duration-700 group-hover:translate-x-1 ${card.layout === "bottom-left" ? "mt-auto" : "mb-12"}`}
                    >
                      <h3 className="text-[34px] font-bold tracking-tight mb-2 text-[#1d1d1f] leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-[#86868b] text-xl font-medium leading-snug max-w-[280px]">
                        {card.description}
                      </p>
                    </div>

                    {/* Spacious Image Composition */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)] opacity-50" />

                      {/* Image 1 (Phone/Base) - Reduced Size for "Spaciousness" */}
                      <motion.img
                        src={card.images[0]}
                        variants={{
                          hover: {
                            y: card.layout === "bottom-left" ? 5 : -5,
                            scale: 1.01,
                          },
                        }}
                        transition={{ duration: 0.8, ease: EASE_PREMIUM }}
                        className={`absolute object-contain transition-all duration-700
                          ${card.id === "h1" ? "bottom-0 right-[43%] w-[55%] z-33" : ""}
                          ${card.id === "t1" ? "bottom-[-12%] left-[17%] w-[80%] md:w-[52%] rounded-2xl rotate-7" : ""}
                          ${card.id === "h2" ? "bottom-[-5%] right-[15%] w-[70%] -rotate-6" : ""}
                          ${card.id === "t2" ? "bottom-20 left-10 w-[55%] md:w-[45%] z-40 rounded-3xl" : ""}
                          ${card.id === "h3" ? "bottom-0 left-1/2 -translate-x-1/2 w-[55%]" : ""}
                          ${card.id === "t4" ? "top-1/2 right-0 w-[75%] md:w-[48%] left-1/2 -translate-x-1/2" : ""}
                          ${card.id === "h4" ? "top-[-5%] left-[18%] w-[38%]" : ""}
                          ${card.id === "t3" ? "top-0 right-[-5%] w-[90%] md:w-[85%] " : ""}
                        `}
                      />

                      {/* Image 2 (Overlays) - More Offset for Layering */}
                      {card.images[1] && (
                        <motion.img
                          src={card.images[1]}
                          variants={{ hover: { y: -10, x: -8, scale: 1.04 } }}
                          transition={{
                            duration: 0.8,
                            ease: EASE_PREMIUM,
                            delay: 0.05,
                          }}
                          className={`absolute object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.12)] z-20
                            ${card.id === "h1" ? "bottom-0 right-[12%] w-[42%]" : ""}
                            ${card.id === "h4" ? "top-[42%] right-[10%] w-[48%]" : ""}
                            ${card.id === "t2" ? "bottom-0 right-[10%] w-[50%] opacity-100" : ""}
                          `}
                        />
                      )}
                    </div>
                  </motion.div>
                ),
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export const JoinWaitlist: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const sectionRef = useRef(null);

  // Parallax orchestration for all 6 layers from your code
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  const y5 = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);
  const y6 = useTransform(scrollYProgress, [0, 1], ["-20%", "40%"]);

  const handleSubmit = () => {
    setStatus("loading");

    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="join-waitlist"
      className="relative w-full py-40 overflow-hidden bg-[#fbfbfb]"
    >
      {/* 6-Layer Parallax Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-70">
        <motion.img
          style={{ y: y1 }}
          src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126cc4fcd080f98700019_cta-img-1.avif"
          className="absolute top-[10%] left-[5%] w-22 md:w-33 lg:w-48 rounded-3xl rotate-[-6deg]"
        />
        <motion.img
          style={{ y: y2 }}
          src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d2fac9aad553d6f1e2_cta-img-4.avif"
          className="absolute bottom-[15%] left-[10%] w-22 md:w-33 lg:w-56 rounded-3xl rotate-[4deg]"
        />
        <motion.img
          style={{ y: y3 }}
          src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126cc2850cf7b5970f339_cta-img-2.avif"
          className="absolute top-[20%] right-[25%] w-22 md:w-33 lg:w-40 rounded-2xl rotate-[-12deg]"
        />
        <motion.img
          style={{ y: y4 }}
          src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d2694e10354d8a9e77_cta-img-5.avif"
          className="absolute bottom-[20%] right-[20%] w-22 md:w-33 lg:w-44 rounded-2xl rotate-[8deg]"
        />
        <motion.img
          style={{ y: y5 }}
          src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d2215127aac0893ec6_cta-img-3.avif"
          className="absolute top-[40%] left-[20%] w-22 md:w-33 lg:w-52 rounded-3xl"
        />
        <motion.img
          style={{ y: y6 }}
          src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126d2ddd66c11b3773f24_cta-img-6.avif"
          className="absolute top-[10%] right-[5%] w-22 md:w-33 lg:w-64 rounded-[40px] rotate-[5deg]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        {/* Logo Icon with Pulse */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="inline-block mb-10 p-4 bg-black rounded-3xl shadow-2xl"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M28.1206 12C32.3863 12.0001 36.4776 13.6946 39.4939 16.7109C42.3605 19.5777 44.0321 23.4154 44.191 27.451H56.2435V28.7174H44.1887C44.0298 32.753 42.3577 36.5907 39.491 39.4575C36.4746 42.4737 32.3834 44.1683 28.1177 44.1684C23.852 44.1683 19.7608 42.4737 16.7444 39.4575C13.8777 36.5907 12.2056 32.753 12.0468 28.7174H0V27.451H12.0496C12.2085 23.4153 13.8805 19.5777 16.7473 16.7109C19.7637 13.6946 23.8549 12 28.1206 12ZM15.0357 28.7174C15.1891 32.2642 16.627 35.6336 19.0801 38.1548C21.6786 40.8255 25.2032 42.3257 28.878 42.3257C32.5528 42.3256 36.0776 40.8255 38.676 38.1548C41.1289 35.6336 42.5664 32.2642 42.7198 28.7174H15.0357ZM27.3603 13.8427C23.6856 13.8428 20.1613 15.343 17.5629 18.0136C15.1099 20.5347 13.6714 23.9042 13.5179 27.451H41.202C41.0486 23.9043 39.6111 20.5347 37.1582 18.0136C34.5598 15.3429 31.035 13.8428 27.3603 13.8427Z"
              fill="white"
            />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE_PREMIUM }}
          className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[1.05] mb-8"
        >
          Re<span className="italic font-serif">a</span>dy to j
          <span className="italic font-serif">o</span>in the n
          <span className="italic font-serif">e</span>xt era of crea
          <span className="italic font-serif">t</span>ive coll
          <span className="italic font-serif">a</span>borati
          <span className="italic font-serif">o</span>n?
        </motion.h2>

        <p className="text-xl text-black/40 font-medium mb-12 max-w-lg mx-auto leading-relaxed">
          Join the early waitlist and get notified the moment we go live.
        </p>

        <div className="max-w-md mx-auto mb-16">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 bg-white rounded-[40px] shadow-xl border border-black/[0.03]"
              >
                <h4 className="text-2xl font-bold mb-2">
                  🎉 You’re on the list!
                </h4>
                <p className="text-black/50">
                  We'll drop you a note once ISO Meet is live.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row py-2 px-3 bg-neutral-50 rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-black/[0.03]"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-1 py-1 outline-none bg-transparent text-lg font-medium placeholder:text-black/20"
                />
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-1 bg-black text-neutral-100 px-5 py-3 rounded-md overflow-hidden"
                >
                  <span className="relative z-10 text-sm">Reserve My Spot</span>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <img
            src="https://cdn.prod.website-files.com/6900c654960f0d76825aec71/690126cccb69ed9dab42341b_confirm_users_image.avif"
            className="w-28"
            alt="Users"
          />
          <p className="text-sm font-bold text-black/80">
            5.000+ creatives{" "}
            <span className="text-black/30 font-medium">
              already signed up for beta
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#fbfbfb] pt-20 pb-10 border-t border-black/[0.05]">
      <div className="container mx-auto px-6 xl:max-w-7xl">
        {/* Footer Top: Brand & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-20">
          {/* Logo & Credits */}
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-block mb-6 hover:opacity-70 transition-opacity"
            >
              <svg
                width="70"
                height="40"
                viewBox="0 0 70 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M34.9986 0C40.3076 9.12154e-05 45.3995 2.10718 49.1536 5.85783C52.7215 9.42252 54.8019 14.1945 54.9996 19.2126H70V20.7874H54.9967C54.7989 25.8055 52.7179 30.5775 49.15 34.1422C45.3959 37.8927 40.304 39.9999 34.995 40C29.6859 39.9999 24.594 37.8927 20.8399 34.1422C17.272 30.5775 15.191 25.8055 14.9933 20.7874H0V19.2126H14.9968C15.1946 14.1944 17.2756 9.42255 20.8435 5.85783C24.5977 2.10721 29.6895 -4.0046e-07 34.9986 0ZM18.7133 20.7874C18.9042 25.1977 20.6938 29.3873 23.7468 32.5223C26.9809 35.8432 31.3676 37.7086 35.9413 37.7086C40.5149 37.7086 44.9017 35.8432 48.1357 32.5223C51.1886 29.3874 52.9777 25.1976 53.1686 20.7874H18.7133ZM34.0523 2.29135C29.4788 2.29139 25.0925 4.15689 21.8585 7.47765C18.8057 10.6126 17.0153 14.8024 16.8243 19.2126H51.2796C51.0886 14.8024 49.2996 10.6126 46.2467 7.47765C43.0127 4.15671 38.6259 2.2914 34.0523 2.29135Z"
                  fill="black"
                ></path>
              </svg>
            </a>
            <p className="text-black/60 text-sm leading-relaxed">
              From the team behind{" "}
              <a
                href="https://www.superbstudio.co/"
                className="text-black font-medium hover:underline underline-offset-4"
              >
                Superb Studio
              </a>{" "}
              — built by people who’ve lived it.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {/* Sitemap */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black/30">
                Sitemap
              </span>
              <nav className="flex flex-col gap-3">
                <a
                  href="#why"
                  className="text-sm font-medium hover:text-black/50 transition-colors"
                >
                  Why choose ISO
                </a>
                <a
                  href="#who"
                  className="text-sm font-medium hover:text-black/50 transition-colors"
                >
                  Who is it for
                </a>
                <a
                  href="#features"
                  className="text-sm font-medium hover:text-black/50 transition-colors"
                >
                  Features
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-black/30">
                Email
              </span>
              <a
                href="mailto:hello@isomeet.com"
                className="text-sm font-medium hover:text-black/50 transition-colors underline underline-offset-4"
              >
                hello@isomeet.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Legal & Social */}
        <div className="pt-10 border-t border-black/[0.05] flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Location */}
          <div className="flex items-center gap-2 text-sm text-black/40">
            <span>@{currentYear} ISO Meet. Made with</span>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              className="mx-0.5"
            >
              <path
                d="M7.00073 12L1.06161 6.13549C0.587864 5.6677 0.272035 5.12384 0.114121 4.50392C-0.0399422 3.884 -0.0380164 3.26789 0.119898 2.65557C0.277812 2.03946 0.591716 1.50321 1.06161 1.04683C1.54305 0.579035 2.0919 0.269075 2.70815 0.116948C3.32826 -0.0389827 3.94643 -0.0389827 4.56269 0.116948C5.18279 0.272878 5.73356 0.582838 6.21501 1.04683L7.00073 1.79986L7.78645 1.04683C8.27175 0.582838 8.82252 0.272878 9.43878 0.116948C10.055 -0.0389827 10.6713 -0.0389827 11.2875 0.116948C11.9076 0.269075 12.4584 0.579035 12.9399 1.04683C13.4097 1.50321 13.7236 2.03946 13.8816 2.65557C14.0395 3.26789 14.0395 3.884 13.8816 4.50392C13.7275 5.12384 13.4136 5.6677 12.9399 6.13549L7.00073 12Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>in Texas</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-black/60">
              Follow us:
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/iso.meet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition-transform"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7.00391 4.66992C8.29244 4.66992 9.33712 5.71438 9.33724 7.00244C9.33724 8.2906 8.29252 9.33594 7.00391 9.33594C5.7153 9.33594 4.67058 8.2906 4.67058 7.00244C4.6707 5.71438 5.71537 4.66992 7.00391 4.66992Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.00391 0C8.90536 0 9.14358 0.00840019 9.89322 0.0439545C10.6373 0.0767868 11.1465 0.196932 11.5924 0.369218C12.0519 0.546977 12.443 0.787761 12.8314 1.17603C13.2226 1.56435 13.4602 1.95554 13.6326 2.42043C13.805 2.86349 13.9261 3.37512 13.959 4.11903C13.9918 4.8655 14 5.10379 14 7.0044C14 8.90501 13.9918 9.14315 13.959 9.88977C13.9261 10.6336 13.805 11.1426 13.6326 11.5884C13.4548 12.0476 13.2139 12.4387 12.8255 12.8269C12.4371 13.2152 12.0461 13.456 11.5865 13.6337C11.1433 13.806 10.6315 13.9262 9.88735 13.959C9.1406 13.9918 8.90227 14 7.00098 14C5.0997 14 4.86148 13.9918 4.1146 13.959C3.37055 13.9261 2.86132 13.806 2.41541 13.6337C1.95593 13.456 1.56484 13.2152 1.17644 12.8269C0.785233 12.4386 0.54698 12.0476 0.366415 11.5854C0.194054 11.1424 0.0738694 10.6307 0.0410385 9.88683C0.00820773 9.14019 0 8.90225 0 7.00147C1.37301e-09 5.10068 0.0082077 4.86254 0.0410385 4.11317C0.0738818 3.36937 0.194069 2.86033 0.366415 2.41457C0.546972 1.95521 0.785281 1.56431 1.17644 1.17603C1.56491 0.784959 1.95602 0.546789 2.41834 0.366288C2.86156 0.193986 3.37337 0.0738436 4.11753 0.0410242C4.86443 0.00820484 5.10246 2.97371e-09 7.00391 0ZM7.00391 3.40599C5.01772 3.40599 3.40632 5.01697 3.4062 7.00244C3.4062 8.98801 5.01764 10.5989 7.00391 10.5989C8.99017 10.5989 10.6016 8.98801 10.6016 7.00244C10.6015 5.01697 8.9901 3.40599 7.00391 3.40599ZM10.7443 2.42434C10.2819 2.42434 9.90396 2.79941 9.90396 3.26436C9.90418 3.72638 10.2793 4.1034 10.7443 4.1034C11.2063 4.10319 11.5834 3.72899 11.5836 3.26436C11.5836 2.80228 11.2065 2.42455 10.7443 2.42434Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function HiringAgencyy() {
  return (
    <div className="bg-white ">
      <Navbar />
      <main>
        <HiringAgency />
        <WhySection />
        <WhoIsItFor />
        <FeaturesSection />
        <JoinWaitlist />
      </main>
      <Footer />
    </div>
  );
}
