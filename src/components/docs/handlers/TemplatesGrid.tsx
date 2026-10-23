import { BlocksGridSkeleton } from "../../app/skeletons/BlocksGridSkeleton";
import TemplateCard from "./TemplateCard";
import type { TemplateItem } from "../../../hooks/useTemplates";

type TemplatesGridProps = {
  templates: TemplateItem[];
  isLoading?: boolean;
};

export default function TemplatesGrid({
  templates,
  isLoading = false,
}: TemplatesGridProps) {
  if (isLoading) {
    return <BlocksGridSkeleton />;
  }

  if (templates.length === 0) {
    return (
      <p className="py-12 text-center text-zinc-500 dark:text-zinc-400">
        No templates found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {templates.map((template, index) => (
        <TemplateCard
          key={template.slug}
          slug={template.slug}
          template={template}
          index={index}
        />
      ))}
    </div>
  );
}
