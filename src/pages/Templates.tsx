import Sidebar from "../components/layout/Sidebar";
import { templateRegistry } from "../data/templateRegistry";
import TemplatesGrid from "../components/docs/handlers/TemplatesGrid";

export default function Templates() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] bg-white dark:bg-[#030303]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <main className="flex-1 px-6 py-12 lg:px-12">
        <header className="mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-medium text-gradient">
            Templates
          </h1>

          <p className="mt-6 text-zinc-500 dark:text-zinc-400">
            Production ready website templates built with CrushUI blocks and
            components.
          </p>
        </header>

        <TemplatesGrid templates={templateRegistry} />
      </main>
    </div>
  );
}
