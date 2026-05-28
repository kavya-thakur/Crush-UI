import { BlocksGridSkeleton } from "../../app/skeletons/BlocksGridSkeleton";
import TemplateCard from "./TemplateCard";

type TemplatesGridProps = {
  templates: any[];
  isLoading?: boolean;
};

export default function TemplatesGrid({
  templates,
  isLoading = false,
}: TemplatesGridProps) {
  if (isLoading) {
    return <BlocksGridSkeleton />;
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
