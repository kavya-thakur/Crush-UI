import { useEffect, useState } from "react";
import API from "../lib/axios";

export type TemplateItem = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  category: string;
  isPro: boolean;
};

export function useTemplates() {
  const [templates, setTemplates] = useState<TemplateItem[]>([]);

  useEffect(() => {
    const fetchTemplates = async () => {
      const res = await API.get("/components?type=template");
      setTemplates(res.data.components || []);
    };

    fetchTemplates();
  }, []);

  return templates;
}
