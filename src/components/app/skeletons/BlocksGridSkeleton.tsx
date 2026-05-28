export function BlocksGridSkeleton() {
  const skeletonCards = Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {skeletonCards.map((_, index) => (
        <div key={index} className="flex flex-col animate-pulse">
          <div className="relative aspect-[16/10] w-full rounded-[32px] border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-800/60 dark:bg-zinc-900/30">
            <span className="absolute left-4 top-4 text-zinc-200 dark:text-zinc-800 text-xl font-light select-none">
              +
            </span>
            <span className="absolute right-4 top-4 text-zinc-200 dark:text-zinc-800 text-xl font-light select-none">
              +
            </span>

            <div className="relative h-full w-full rounded-[24px] border border-zinc-100 bg-white/60 dark:border-white/5 dark:bg-[#080809]" />
          </div>

          <div className="mt-5 flex flex-col px-2 space-y-3">
            <div className="flex items-center justify-between">
              <div className="h-5 bg-zinc-200 dark:bg-zinc-800 rounded-md w-1/2" />

              <div className="flex items-center gap-2 w-1/4 justify-end">
                <div className="h-px w-4 bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-3 bg-zinc-100 dark:bg-zinc-900 rounded w-12" />
              </div>
            </div>

            <div className="h-4 bg-zinc-100 dark:bg-zinc-900/60 rounded-md w-1/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
