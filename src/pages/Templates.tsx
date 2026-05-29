import Sidebar from "../components/layout/Sidebar";
import TemplatesGrid from "../components/docs/handlers/TemplatesGrid";
import { useTemplates } from "../hooks/useTemplates";
import RegistryFooter from "./sections/Footer";

export default function Templates() {
  const { templates } = useTemplates();

  const isLoading = !templates || templates.length === 0;

  return (
    <>
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

          <TemplatesGrid templates={templates} isLoading={isLoading} />
        </main>
      </div>

      <RegistryFooter />
    </>
  );
}
