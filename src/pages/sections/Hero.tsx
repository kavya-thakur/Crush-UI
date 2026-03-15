import { useMemo } from "react";
import CinematicHighlight from "../../components/app/CinematicHighlight";
import { MoveRight } from "lucide-react";
import AnimatedTooltip from "../../components/app/AnimatedTooltip";
import { Link } from "react-router-dom";

// Assets
import ReactIcon from "../../assets/react.svg?react";
import TailwindIcon from "../../assets/tailwind.svg?react";
import MotionIcon from "../../assets/motion.svg?react";

type SvgItem = {
  id: number;
  title: string;
  svg: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function Hero() {
  const svgs = useMemo<SvgItem[]>(
    () => [
      { id: 1, title: "React", svg: ReactIcon },
      { id: 2, title: "Tailwind CSS", svg: TailwindIcon },
      { id: 3, title: "Motion", svg: MotionIcon },
    ],
    [],
  );

  return (
    <section className="my-16 px-4">
      {/* Changelog badge */}
      <div className="capitalize w-fit mx-auto text-center text-xs border border-neutral-200 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 py-1 px-4 rounded-full flex items-center gap-2 shadow-2xs">
        <span
          className="relative inline-flex h-2 w-2 rounded-full bg-neutral-500"
          aria-hidden="true"
        />
        <Link to="/templates">
          changelog - introducing Hire Agency template
        </Link>
        <MoveRight size={14} />
      </div>

      {/* Hero text */}
      <div className="py-8">
        <h1 className="tracking-tight text-gradient relative z-20 mx-auto max-w-4xl py-6 text-center text-4xl font-semibold [text-shadow:0px_1px_3px_rgba(27,37,80,0.14)] md:text-6xl lg:text-7xl">
          Build world class websites at{" "}
          <span className="inline-block">
            <CinematicHighlight>superfast speed</CinematicHighlight>
          </span>
        </h1>

        <p className="max-w-4xl text-sm md:text-lg lg:text-xl mx-auto text-center font-light text-neutral-600 dark:text-neutral-400">
          Crush UI is the fastest way for developers and founders to ship
          polished, production-ready landing pages and marketing websites —
          without design bottlenecks or endless tweaking.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row justify-center w-full gap-5">
        <Link to="/components">
          <button className="flex cursor-pointer bg-neutral-900 px-4 py-2 font-medium text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-white/20 ring-offset-2 ring-offset-neutral-900 transition-all duration-200 ring-inset hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40 active:scale-98 dark:bg-white dark:text-black dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)_inset] dark:ring-black/20 dark:ring-offset-white dark:hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)_inset] dark:hover:ring-black/50 h-14 w-full items-center justify-center rounded-lg text-center text-base sm:w-52">
            Explore Collection
          </button>
        </Link>

        <Link to="/pricing">
          <button className="cursor-pointer flex h-14 w-full items-center justify-center rounded-lg border border-transparent bg-white text-base font-medium text-black shadow-sm ring-1 shadow-black/10 ring-black/10 transition duration-150 active:scale-98 sm:w-52 dark:border-neutral-600 dark:bg-black dark:text-white">
            Unlock Unlimited Access
          </button>
        </Link>
      </div>

      {/* Social proof */}
      <div className="flex flex-col lg:flex-row max-w-4xl my-16 mx-auto items-center justify-between gap-10">
        <div className="space-y-5 text-neutral-500 dark:text-neutral-400 text-center lg:text-left">
          <p className="text-sm font-medium">
            Trusted by founders and entrepreneurs worldwide
          </p>

          <div className="flex justify-center lg:justify-start">
            <AnimatedTooltip />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {svgs.map((item) => {
            const Icon = item.svg;

            return (
              <div key={item.id} className="flex items-center gap-2">
                <Icon
                  aria-label={item.title}
                  className="w-9 h-9 text-neutral-500 dark:text-neutral-400/80"
                />

                <span className="text-neutral-500 dark:text-neutral-400/80 text-sm font-medium">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
