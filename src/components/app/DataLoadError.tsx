type DataLoadErrorProps = {
  onRetry: () => void;
};

export default function DataLoadError({ onRetry }: DataLoadErrorProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 py-12 text-center text-zinc-600 dark:text-zinc-400"
    >
      <p>Could not load data from the server. Please try again.</p>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-900"
      >
        Try again
      </button>
    </div>
  );
}
