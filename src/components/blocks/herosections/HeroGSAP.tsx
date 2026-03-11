import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavbarMinimal from "../../ui/navbars/NavbarMinimal";

gsap.registerPlugin(ScrollTrigger);

const HeroGSAP: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Initial states
      gsap.set(
        [".hero-line", ".line-span", ".hero-button", ".hero-availability"],
        {
          opacity: 0,
          y: 300,
        },
      );

      gsap.set(".hero-img", {
        clipPath: "inset(100% 0 0 0)",
      });

      // Animation Timeline
      tl.to(".hero-line", {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power4.out",
      })
        .to(
          ".hero-img",
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.6",
        )
        .to(
          ".line-span",
          {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
          },
          "a",
        )
        .to(
          ".hero-button",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "a",
        )
        .to(
          ".hero-availability",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "a",
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const paragraphLines: string[] = [
    "I help growing brands and startups ",
    "gain an unfair advantage through",
    "premium, results driven websites.",
  ];

  return (
    <>
      <NavbarMinimal />

      <section
        ref={heroRef}
        className="flex flex-col justify-end md:min-h-screen md:h-screen md:w-full overflow-hidden bg-white dark:bg-[#09090b] px-4 md:px-6 lg:px-0"
      >
        <div className="flex flex-col justify-center sm:block md:relative h-full w-full">
          <div className="md:flex md:gap-5 md:items-end md:pb-10 md:mt-15 md:w-full">
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-[7rem] lg:text-[13vw] md:font-mono font-semibold hero-line leading-none text-zinc-900 dark:text-zinc-50">
                KAVYA
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-[7rem] lg:text-[13vw] md:font-mono font-semibold hero-line leading-none text-zinc-900 dark:text-zinc-50">
                THAKUR
              </h1>
            </div>
          </div>

          <div className="md:flex  md:absolute md:bottom-15 md:left-0 md:w-full md:pb-20 lg:bottom-0 lg:left-4 ">
            <div className="md:static md:mb-10">
              <div className="w-58 md:w-96 lg:w-[24rem] leading-5 md:leading-10 mt-4 text-zinc-600 dark:text-zinc-400 md:text-lg lg:text-2xl">
                {paragraphLines.map((line, index) => (
                  <div key={index} className="overflow-hidden">
                    <span className="line-span block">{line}</span>
                  </div>
                ))}
              </div>

              <div className="overflow-hidden">
                <button className="px-10 py-5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full mt-4 hero-button md:text-base transition-transform hover:scale-105 active:scale-95">
                  <a href="mailto:kavya.fosnix@gmail.com">DROP A LINE</a>
                </button>
              </div>
            </div>

            <div className="overflow-hidden absolute bottom-22 md:bottom-30 flex-shrink-0 md:inset-x-0 md:flex md:justify-center">
              <img
                src={"/kavya.jpeg"}
                alt="kavya"
                className="h-[10rem] w-[10rem] md:h-[19rem] md:w-[18rem] lg:h-[24rem] lg:w-[22rem]  rounded-lg mt-10 bg-cover object-cover hero-img grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="flex absolute bottom-20 right-0 px-3 justify-between mt-18 md:items-end md:mb-10 md:ml-auto lg:pr-20">
              <div className="self-end md:pl-5 text-end flex text-sm md:text-base w-44 overflow-hidden">
                <p className="text-zinc-500 dark:text-zinc-500 hero-availability uppercase tracking-widest font-medium">
                  Available for freelance work
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroGSAP;
