import Sidebar from "../components/layout/Sidebar";
import { componentRegistry } from "../data/componentRegistry";
import ComponentsHeader from "../components/docs/handlers/ComponentsHeader";
import ComponentsGrid from "../components/docs/handlers/ComponentsGrid";

export default function Components() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1440px] bg-white dark:bg-[#030303]">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <main className="flex-1 w-full">
        <div className="px-6 py-12 md:py-16 lg:px-12">
          <ComponentsHeader />
          <ComponentsGrid components={componentRegistry} />
        </div>
      </main>
    </div>
  );
}

