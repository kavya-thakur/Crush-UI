import { Link } from "react-router-dom";

export default function RegistryFooter() {
  const links = [
    { label: "Home", path: "" },
    { label: "All Components", path: "components" },
    { label: "UI Blocks", path: "blocks" },
    { label: "Templates", path: "templates" },
  ];
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-[#09090b]">
      {/* Top Section: Main Navigation Grid */}
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Block */}
          <div className="border-b border-zinc-200 p-8 dark:border-zinc-800 lg:border-b-0 lg:border-r">
            <h2 className="text-gradient text-xl font-bold tracking-tighter">
              CRUSH UI
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              High-fidelity component registry. Built for performance and
              precision.
            </p>
          </div>

          {/* Registry Links */}
          <div className="border-b border-zinc-200 p-8 dark:border-zinc-800 lg:border-b-0 lg:border-r">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Registry
            </h3>
            <ul className="space-y-3">
              {links.map((item) => (
                <li key={item.path}>
                  <Link
                    to={`/${item.path}`}
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="border-b border-zinc-200 p-8 dark:border-zinc-800 lg:border-b-0 lg:border-r">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Platform
            </h3>
            <ul className="space-y-3">
              {["GitHub", "Discord", "X / Twitter"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-500 dark:hover:text-zinc-100"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Metadata */}
        <div className="flex flex-col items-center justify-between border-t border-zinc-200 px-8 py-6 dark:border-zinc-800 md:flex-row">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <span>© 2026</span>
            <span className="h-3 w-px bg-zinc-200 dark:bg-zinc-800" />
            <span>Design Engineer</span>
          </div>

          <div className="mt-4 flex gap-8 md:mt-0">
            {["Privacy", "Terms", "License"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
