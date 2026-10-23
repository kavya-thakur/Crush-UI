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
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isActive = true;

    const fetchBlocks = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await API.get<{ components: BlockItem[] }>(
          "/components?type=section",
        );
        if (!Array.isArray(res.data?.components)) {
          throw new Error("The server returned an invalid blocks response");
        }
        if (isActive) {
          setBlocks(res.data.components);
        }
      } catch (requestError) {
        console.error("Failed to load blocks:", requestError);
        if (isActive) {
          setError(true);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchBlocks();
    return () => {
      isActive = false;
    };
  }, [retryCount]);

  return {
    blocks,
    loading,
    error,
    retry: () => setRetryCount((count) => count + 1),
  };
}
