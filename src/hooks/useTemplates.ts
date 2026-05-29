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

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await API.get("/components?type=template");
        setTemplates(res.data.components || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  return {
    templates,
    loading,
  };
}
