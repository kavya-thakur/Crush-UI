import React from "react";

const PremiumNavbar = () => {
  return (
    <nav className="fixed inset-x-0 top-10 z-50 mx-auto hidden max-w-5xl items-center justify-between bg-white/80 px-4 py-2 backdrop-blur-md md:flex rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      {/* Brand / Logo */}
      <a className="flex items-center gap-2 px-2" href="/">
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          className="text-zinc-900 dark:text-zinc-100"
        >
          <path
            d="M0 4.5C0 3.11929 1.11929 2 2.5 2H7.5C8.88071 2 10 3.11929 10 4.5V9.40959C10.0001 9.4396 10.0002 9.46975 10.0002 9.50001C10.0002 10.8787 11.1162 11.9968 12.4942 12C12.4961 12 12.4981 12 12.5 12H17.5C18.8807 12 20 13.1193 20 14.5V19.5C20 20.8807 18.8807 22 17.5 22H12.5C11.1193 22 10 20.8807 10 19.5V14.5C10 14.4931 10 14.4861 10.0001 14.4792C9.98891 13.1081 8.87394 12 7.50017 12C7.4937 12 7.48725 12 7.48079 12H2.5C1.11929 12 0 10.8807 0 9.5V4.5Z"
            fill="currentColor"
          />
        </svg>
        <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Notus
        </span>
      </a>

      {/* Centered Links */}
      <div className="flex items-center gap-8">
        {["Pricing", "About", "Careers", "Blog"].map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        {/* Simple Theme Toggle Placeholder */}
        <button className="flex items-center justify-center rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </button>

        {/* Premium Tactile CTA */}
        <button className="flex h-10 items-center justify-center rounded-xl bg-zinc-950 px-5 text-sm font-medium text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring-1 ring-inset ring-white/20 ring-offset-2 ring-offset-white transition-all duration-200 active:scale-95 dark:bg-white dark:text-black dark:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)_inset] dark:ring-black/20 dark:ring-offset-zinc-900">
          Start building
        </button>
      </div>
    </nav>
  );
};

export default PremiumNavbar;
