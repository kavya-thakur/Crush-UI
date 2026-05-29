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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const res = await API.get("/components?type=section");
        setBlocks(res.data.components || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlocks();
  }, []);

  return { blocks, loading };
}
