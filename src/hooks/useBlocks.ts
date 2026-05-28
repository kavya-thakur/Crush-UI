import { useEffect, useState } from "react";
import API from "../lib/axios";

export type BlockItem = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  isPro: boolean;
};

export function useBlocks() {
  const [blocks, setBlocks] = useState<BlockItem[]>([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      const res = await API.get("/components?type=section");
      setBlocks(res.data.components || []);
    };

    fetchBlocks();
  }, []);

  return blocks;
}
