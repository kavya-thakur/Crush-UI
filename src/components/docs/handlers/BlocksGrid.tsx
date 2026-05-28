import { memo } from "react";
import BlockCategoryCard from "./BlockCategoryCard";
import { BlocksGridSkeleton } from "../../app/skeletons/BlocksGridSkeleton";

type Category = {
  name: string;
  slug: string;
  previewBlock: any;
  count: number;
  isPro: boolean;
};

type Props = {
  categories: Category[];
  isLoading?: boolean;
};

function BlocksGrid({ categories, isLoading = false }: Props) {
  if (isLoading) {
    return <BlocksGridSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {categories.map((cat, index) => (
        <BlockCategoryCard key={cat.slug} cat={cat} index={index} />
      ))}
    </div>
  );
}

export default memo(BlocksGrid);
