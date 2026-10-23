import { useEffect, useState } from "react";
import API from "../lib/axios";

export type TemplateItem = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  isPro: boolean;
  demoUrl: string;
  downloadUrl: string;
};

export function useTemplates() {
  const [templates, setTemplates] = useState<TemplateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let isActive = true;

    const fetchTemplates = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await API.get<{ components: TemplateItem[] }>(
          "/components?type=template",
        );
        if (!Array.isArray(res.data?.components)) {
          throw new Error("The server returned an invalid templates response");
        }
        if (isActive) {
          setTemplates(res.data.components);
        }
      } catch (requestError) {
        console.error("Failed to load templates:", requestError);
        if (isActive) {
          setError(true);
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    fetchTemplates();
    return () => {
      isActive = false;
    };
  }, [retryCount]);

  return {
    templates,
    loading,
    error,
    retry: () => setRetryCount((count) => count + 1),
  };
}
