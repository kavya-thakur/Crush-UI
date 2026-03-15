import { blockRegistry } from "../data/blockRegistry";

type BlockCategory = {
  name: string;
  slug: string;
  previewBlock: any;
  count: number;
};

export function useBlockCategories(): BlockCategory[] {
  const categories = Object.entries(blockRegistry).reduce(
    (acc, [, block]) => {
      const catName = block.category || "General";

      if (!acc[catName]) {
        acc[catName] = {
          name: catName,
          slug: catName.toLowerCase().replace(/\s+/g, "-"),
          previewBlock: block,
          count: 0,
        };
      }

      acc[catName].count++;

      return acc;
    },
    {} as Record<string, BlockCategory>,
  );

  return Object.values(categories);
}
