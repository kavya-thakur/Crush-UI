import type { TemplateDoc } from "../../../data/templateRegistry";
import TemplateCard from "./TemplateCard";

type TemplatesGridProps = {
  templates: Record<string, TemplateDoc>;
};

export default function TemplatesGrid({ templates }: TemplatesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {Object.entries(templates).map(([slug, template], index) => (
        <TemplateCard
          key={slug}
          slug={slug}
          template={template}
          index={index}
        />
      ))}
    </div>
  );
}
