import RegistryFooter from "./sections/Footer";
import { useSubscription } from "../hooks/useSubscription";
import PricingCard from "../components/app/cards/PricingCard";
import { useAuth } from "../context/AuthContext";

type Plan = {
  name: string;
  price: string;
  description: string;
  button: string;
  popular?: boolean;
  features: string[];
  link?: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "0",
    description: "Access to all free components",
    button: "Browse free components",
    features: [
      "Access to all free components",
      "Copy and paste usage",
      "Built with React + Tailwind + Framer Motion",
      "Fully responsive",
      "Documentation included",
    ],
    link: "/components",
  },
  {
    name: "Annual",
    price: "499",
    description: "Full access billed yearly",
    button: "Get Annual Access",
    popular: true,
    features: [
      "Access to 60+ premium component blocks",
      "Access to 12+ templates",
      "1 year updates",
      "Private Discord community",
      "AI prompts for V0 & Lovable",
      "Priority support",
    ],
    link: "",
  },
];

export default function Pricing() {
  const { upgradeToPro, loading } = useSubscription();
  const { user } = useAuth();
  return (
    <>
      <section className="relative mx-auto max-w-7xl px-6 py-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className=" text-4xl md:text-5xl font-semibold text-gradient">
            Get instant access to all components and templates
          </h1>

          <p className="mt-4 max-w-lg mx-auto text-neutral-500 dark:text-neutral-400">
            One purchase gives you access to all premium UI components, blocks
            and templates including future updates.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2 lg:px-20">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              onUpgrade={upgradeToPro}
              loading={loading}
              isCurrentPlan={user?.plan === "pro" && plan.name === "Annual"}
            />
          ))}
        </div>
      </section>
      <RegistryFooter />
    </>
  );
}
