import BlockCategoryCard from "./BlockCategoryCard";

export default function BlocksGrid({ categories }: any) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {categories.map((cat: any, index: number) => (
        <BlockCategoryCard key={cat.slug} cat={cat} index={index} />
      ))}
    </div>
  );
}
