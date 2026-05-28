import { Link } from "react-router-dom";

type PremiumButtonProps = {
  path: string;
  text?: string;
  className?: string; // This will now cleanly control the wrapper's width/layout
};

const PremiumButton = ({
  path,
  text = "Explore Collection",
  className = "w-full", // Default width fallback if no class is passed
}: PremiumButtonProps) => {
  return (
    <Link to={path} className={`inline-block ${className}`}>
      <button className="flex h-11 w-full md:w-23 cursor-pointer items-center justify-center rounded-lg bg-neutral-900 px-3 py-2 text-center text-base font-medium text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring ring-inset ring-white/20 ring-offset-2 ring-offset-neutral-900 transition-all duration-200 hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40 active:scale-98 dark:bg-white dark:text-black dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)_inset] dark:ring-black/20 dark:ring-offset-white dark:hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)_inset] dark:hover:ring-black/50">
        {text}
      </button>
    </Link>
  );
};

export default PremiumButton;
