import type { ComponentDoc } from "../../../data/componentRegistry";
import { BlocksGridSkeleton } from "../../app/skeletons/BlocksGridSkeleton";
import ComponentCard from "./ComponentCard";

type ComponentsGridProps = {
  components: (ComponentDoc & { slug: string; _id: string })[];
  isLoading?: boolean;
};

export default function ComponentsGrid({
  components,
  isLoading = false,
}: ComponentsGridProps) {
  if (isLoading) {
    return <BlocksGridSkeleton />;
  }

  if (components.length === 0) {
    return (
      <p className="py-12 text-center text-zinc-500 dark:text-zinc-400">
        No components found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {components.map((component, index) => (
        <ComponentCard
          key={component._id}
          slug={component.slug}
          component={component}
          index={index}
        />
      ))}
    </div>
  );
}
