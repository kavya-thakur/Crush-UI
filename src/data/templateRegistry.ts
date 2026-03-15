import type { ComponentType } from "react";
import NotusLandingPage from "../components/templates/NotusLandingPage";
import HiringAgencyy from "../components/templates/NewLanding";

export type TemplateDoc = {
  title: string;
  description: string;
  component: ComponentType<any>;
  premium?: boolean;
  category?: string;
  code?: string;
};

export const templateRegistry: Record<string, TemplateDoc> = {
  notusLanding: {
    title: "Notus SaaS",
    description:
      "Complete SaaS landing page with hero, features, pricing and CTA.",
    component: NotusLandingPage,
    premium: true,
    category: "SaaS",

    code: `import NotusLandingPage from "@/components/templates/NotusLandingPage"

export default function Page() {
  return <NotusLandingPage />
}
`,
  },
  hiringAgency: {
    title: "Hiring Agency",
    description:
      "Complete SaaS landing page with hero, features, pricing and CTA.",
    component: HiringAgencyy,
    premium: true,
    category: "SaaS",

    code: `import NotusLandingPage from "@/components/templates/NotusLandingPage"

export default function Page() {
  return <NotusLandingPage />
}
`,
  },
};
