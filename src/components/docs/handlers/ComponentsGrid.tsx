import { useMemo } from "react";
import type { ComponentDoc } from "../../../data/componentRegistry";
import ComponentCard from "./ComponentCard";

type ComponentsGridProps = {
  components: Record<string, ComponentDoc>;
};

export default function ComponentsGrid({ components }: ComponentsGridProps) {
  const componentEntries = useMemo(
    () => Object.entries(components),
    [components],
  );

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {componentEntries.map(([slug, component], index) => (
        <ComponentCard
          key={slug}
          slug={slug}
          component={component}
          index={index}
        />
      ))}
    </div>
  );
}
