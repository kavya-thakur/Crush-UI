import { useEffect, useState } from "react";
import API from "../lib/axios";
import { componentRegistry, type ComponentDoc } from "../data/componentRegistry";
import Sidebar from "../components/layout/Sidebar";
import ComponentsHeader from "../components/docs/handlers/ComponentsHeader";
import ComponentsGrid from "../components/docs/handlers/ComponentsGrid";
import DataLoadError from "../components/app/DataLoadError";
import RegistryFooter from "./sections/Footer";

type BackendComponent = {
  _id: string;
  slug: string;
  title: string;
  isPro: boolean;
  category: string;
};

type MergedComponent = BackendComponent & ComponentDoc;

export default function Components() {
  const [components, setComponents] = useState<MergedComponent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isActive = true;

    const fetchComponents = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
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

        if (isActive) {
          setComponents(merged);
        }
      } catch (error) {
        console.error("Failed to load components:", error);
        if (isActive) {
          setHasError(true);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchComponents();

    return () => {
      isActive = false;
    };
  }, [retryCount]);

  return (
    <>
      <div className="mx-auto flex min-h-screen max-w-[1440px] bg-white dark:bg-[#030303]">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="flex-1 w-full">
          <div className="px-6 py-12 md:py-16 lg:px-12">
            <ComponentsHeader />
            {hasError ? (
              <DataLoadError onRetry={() => setRetryCount((count) => count + 1)} />
            ) : (
              <ComponentsGrid components={components} isLoading={isLoading} />
            )}
          </div>
        </main>
      </div>
      <RegistryFooter />
    </>
  );
}
