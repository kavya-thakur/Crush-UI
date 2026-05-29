import { useNavigate } from "react-router-dom";
import API from "../lib/axios";

export function useTemplateDownload() {
  const navigate = useNavigate();

  async function downloadTemplate(slug: string) {
    try {
      const response = await API.get(`/template/download/${slug}`);

      window.open(response.data.downloadUrl, "_blank");
    } catch (error: any) {
      const status = error.response?.status;

      if (status === 401) {
        navigate("/login");
        return;
      }

      if (status === 403) {
        navigate("/pricing");
        return;
      }

      console.error(error);

      alert(error.response?.data?.message || "Download failed");
    }
  }

  return {
    downloadTemplate,
  };
}
