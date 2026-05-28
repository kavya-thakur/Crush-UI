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
