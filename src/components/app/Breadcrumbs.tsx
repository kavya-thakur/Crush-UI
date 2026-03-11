import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ title }: { title: string }) {
  const { pathname } = useLocation();

  // 1. Detect Parent Context
  const getParentData = () => {
    if (pathname.startsWith("/blocks"))
      return { label: "Blocks", path: "/blocks" };
    if (pathname.startsWith("/templates"))
      return { label: "Templates", path: "/templates" };
    return { label: "Components", path: "/components" };
  };

  const { label, path } = getParentData();

  // 2. Formatting Helper (Handles slugs and acronyms like SaaS)
  const formatDisplayTitle = (str: string) => {
    if (!str) return "";
    return str
      .split("-")
      .map((word) => {
        // Handle special acronyms
        if (word.toLowerCase() === "saas") return "SaaS";
        if (word.toLowerCase() === "ui") return "UI";
        // Default Title Case
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  return (
    <nav className="mb-8 flex items-center space-x-2 text-[13px] font-medium transition-all select-none">
      {/* Home / Root Icon (Optional, adds premium feel) */}
      <Link
        to="/"
        className="text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-zinc-200"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </Link>

      <span className="text-zinc-300 dark:text-zinc-800">/</span>

      {/* Dynamic Parent Link */}
      <Link
        to={path}
        className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-200"
      >
        <span>{label}</span>
      </Link>

      <span className="text-zinc-300 dark:text-zinc-800">/</span>

      {/* Current Page Title */}
      <span className="truncate tracking-tight text-zinc-900 dark:text-zinc-100 font-medium">
        {formatDisplayTitle(title)}
      </span>
    </nav>
  );
}
