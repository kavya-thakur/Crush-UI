import { memo } from "react";
import BlockCategoryCard from "./BlockCategoryCard";

type Category = {
  name: string;
  slug: string;
  previewBlock: any;
  count: number;
  isPro: boolean;
};

type Props = {
  categories: Category[];
};

function BlocksGrid({ categories }: Props) {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
      {categories.map((cat, index) => (
        <BlockCategoryCard key={cat.slug} cat={cat} index={index} />
      ))}
    </div>
  );
}

export default memo(BlocksGrid);
