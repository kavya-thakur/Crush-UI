import { useEffect, useState } from "react";
import API from "../lib/axios";
import { componentRegistry } from "../data/componentRegistry";
import Sidebar from "../components/layout/Sidebar";
import ComponentsHeader from "../components/docs/handlers/ComponentsHeader";
import ComponentsGrid from "../components/docs/handlers/ComponentsGrid";
import RegistryFooter from "./sections/Footer";

type BackendComponent = {
  _id: string;
  slug: string;
  title: string;
  isPro: boolean;
  category: string;
};

type MergedComponent = BackendComponent & {
  component: React.ComponentType<any>;
  previewProps?: Record<string, any>;
  description: string;
};

export default function Components() {
  const [components, setComponents] = useState<MergedComponent[]>([]);

  useEffect(() => {
    const fetchComponents = async () => {
      const res = await API.get<{ components: BackendComponent[] }>(
        "/components",
      );

      const merged = res.data.components
        .map((item) => {
          const local =
            componentRegistry[item.slug as keyof typeof componentRegistry];

          if (!local) return null;

          return {
            ...item,
            ...local,
          };
        })
        .filter(Boolean) as MergedComponent[];

      setComponents(merged);
    };

    fetchComponents();
  }, []);

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-[1440px] bg-white dark:bg-[#030303]">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="flex-1 w-full">
          <div className="px-6 py-12 md:py-16 lg:px-12">
            <ComponentsHeader />
            <ComponentsGrid components={components} />
          </div>
        </main>
      </div>
      <RegistryFooter />
    </>
  );
}
