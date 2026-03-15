import React from "react";
import CinematicHighlight from "../../components/app/CinematicHighlight";

const FeaturesGrid: React.FC = () => {
  return (
    <section
      id="components"
      className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-white/20 to-[125%] pt-10 ring-1 ring-gray-900/5 sm:pt-32 dark:from-gray-500/20 dark:ring-gray-950/5"
      style={{
        boxShadow: `0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset`,
      }}
    >
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <div className="mb-[-37.5rem] grid grid-cols-[minmax(0,30%),minmax(0,70%)] grid-rows-[auto,1fr] items-start gap-x-8 gap-y-10 sm:-mb-36 sm:grid-cols-3 sm:gap-y-20 lg:grid-cols-2">
          {/* Text Content */}
          <div className="col-span-2 max-w-sm sm:col-span-2 sm:max-w-lg lg:col-auto">
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance text-gradient md:text-5xl">
              Idea to website in hours,{" "}
              <CinematicHighlight className="inline-block">
                not days.
              </CinematicHighlight>
            </h2>
            <p className="mt-4 max-w-full text-base/6 text-gray-600 dark:text-gray-400">
              As easy as copy-pasting. Build great looking websites without
              worrying about styling.
            </p>
          </div>

          {/* Image Masonry Section */}
          <div className="relative order-last flex flex-col gap-y-8 sm:order-none sm:row-span-2">
            {/* Grid Decorative Lines (Top) */}
            <div className="absolute -top-px left-[-100px] z-30 h-px w-[calc(100%+200px)] bg-[linear-gradient(to_right,rgba(0,0,0,0.2),rgba(0,0,0,0.2)_50%,transparent_0,transparent)] [background-size:5px_1px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.5),rgba(255,255,255,0.5)_50%,transparent_0,transparent)]"></div>

            {/* Main Featured Image */}
            <div className="relative order-last w-full lg:order-none">
              <img
                src="https://assets.aceternity.com/pro/landing/1.webp"
                alt="Feature preview"
                className="relative z-40 w-full rounded-xl bg-white shadow-2xl ring-1 ring-gray-950/5"
              />
            </div>

            {/* Sub-grid of images */}
            <div className="flex gap-x-8">
              <div className="relative flex-none">
                <div className="relative w-[calc(376/16*1rem)]">
                  <img
                    src="https://assets.aceternity.com/pro/landing/3.webp"
                    alt="UI Element"
                    className="relative z-40 w-full rounded-xl shadow-xl"
                  />
                </div>
                <div className="relative mt-8 w-[calc(376/16*1rem)]">
                  <img
                    src="https://assets.aceternity.com/pro/landing/4.webp"
                    alt="UI Element"
                    className="relative z-40 w-full rounded-xl shadow-xl"
                  />
                </div>
              </div>
              <img
                src="https://assets.aceternity.com/pro/landing/10.webp"
                alt="Large UI Preview"
                className="relative z-40 hidden w-[calc(840/16*1rem)] rounded-xl shadow-xl lg:block"
              />
            </div>
          </div>

          {/* Right Column Images */}
          <div className="relative hidden items-start justify-end gap-x-8 pt-20 sm:col-span-2 sm:flex sm:pt-0 lg:col-auto">
            <div className="relative mt-24 w-[calc(400/16*1rem)] flex-none">
              <img
                src="https://assets.aceternity.com/pro/landing/6.webp"
                alt="Mobile Preview"
                className="relative z-40 w-full rounded-xl shadow-2xl"
              />
            </div>
            <div className="relative flex-none flex flex-col gap-8">
              <img
                src="https://assets.aceternity.com/pro/landing/7.webp"
                alt="Dashboard"
                className="w-[calc(400/16*1rem)] rounded-xl shadow-xl"
              />
              <img
                src="https://assets.aceternity.com/pro/landing/9.webp"
                alt="Component"
                className="w-[calc(400/16*1rem)] rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
