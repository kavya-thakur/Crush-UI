import TemplateCard from "./TemplateCard";

type TemplatesGridProps = {
  templates: any[]; // we will  type this properly later
};

export default function TemplatesGrid({ templates }: TemplatesGridProps) {
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
