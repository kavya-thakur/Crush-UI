import { Link } from "react-router-dom";

export default function RegistryFooter() {
  const links = [
    { label: "Home", path: "" },
    { label: "All Components", path: "components" },
    { label: "UI Blocks", path: "blocks" },
    { label: "Templates", path: "templates" },
  ];

  // PASTE YOUR ACTUAL LINKS HERE IN THE URL PROPERTY:
  const platformLinks = [
    { label: "GitHub", url: "https://github.com/kavya-thakur/Crush-UI" },
    {
      label: "X / Twitter",
      url: "https://x.com/your-handlehttps://x.com/Kavyathakurrr",
    },
  ];

  const legalLinks = [
    { label: "Privacy", path: "/privacy-policy" },
    { label: "Terms", path: "/terms-condition" },
  ];

  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white dark:border-zinc-800/80 dark:bg-[#030303] w-full overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        {/* Main Grid: Smart Responsive Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full">
          {/* Brand Block */}
          <div className="relative p-6 sm:p-8 border-b sm:border-b border-zinc-200 dark:border-zinc-800/60 md:border-b-0 md:border-r">
            {/* Design Blueprint Element */}
            <span className="absolute right-4 top-4 text-zinc-200 dark:text-zinc-800 text-sm font-light select-none pointer-events-none">
              +
            </span>

            <h2 className="text-gradient text-xl font-bold tracking-tighter">
              CRUSH UI
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-sm">
              High-fidelity component registry. Built for performance and
              precision.
            </p>
          </div>

          {/* Registry Links */}
          <div className="p-6 sm:p-8 border-b border-zinc-200 dark:border-zinc-800/60 sm:border-b-0 sm:border-r">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Registry
            </h3>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.path} className="overflow-hidden">
                  <Link
                    to={`/${item.path}`}
                    className="inline-block text-sm text-zinc-600 transition-all duration-200 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform/Social Links */}
          <div className="p-6 sm:p-8 col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Platform
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-3 sm:gap-4 md:gap-0 md:space-y-3">
              {platformLinks.map((item) => (
                <li key={item.label} className="overflow-hidden">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-sm text-zinc-600 transition-all duration-200 hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100 hover:translate-x-1"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Metadata & Deep Links */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 border-t border-zinc-200 px-6 sm:px-8 py-6 dark:border-zinc-800/60 md:flex-row w-full">
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <span>© 2026</span>
            <span className="h-3 w-px bg-zinc-200 dark:bg-zinc-800/60" />
            <span>Design Engineer</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                to={`${item.path}`}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors duration-200 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
