import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

type Plan = {
  name: string;
  price: string;
  description: string;
  button: string;
  popular?: boolean;
  features: string[];

  link?: string;
};

export default function PricingCard({
  plan,
  onUpgrade,
  loading,
  isCurrentPlan = false,
}: {
  plan: Plan;
  onUpgrade: () => void;
  loading: boolean;
  isCurrentPlan?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`relative flex flex-col rounded-3xl border p-6 transition
        ${
          plan.popular
            ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-black"
            : "border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 text-gradient"
        }`}
    >
      {plan.popular && (
        <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black dark:bg-black dark:text-white">
          Most Popular
        </span>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-semibold">{plan.name}</h3>
        <p
          className={`mt-1 text-sm opacity-70 ${plan.popular ? "text-neutral-200 dark:text-neutral-700" : "text-gradient"}`}
        >
          {plan.description}
        </p>

        <div className="mt-6 flex items-end gap-1">
          <span
            className={`text-sm opacity-70  ${plan.popular ? "text-neutral-200 dark:text-neutral-700" : "text-gradient"}`}
          >
            ₹
          </span>
          <span
            className={`text-4xl font-bold  ${plan.popular ? "text-neutral-200 dark:text-neutral-700" : "text-gradient"}`}
          >
            {plan.price}
          </span>
        </div>
      </div>
      {plan.name === "Free" ? (
        <Link
          to="/components"
          className={`mb-8 flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all active:scale-[0.98] will-change-transform
      ${
        plan.popular
          ? "bg-white text-black hover:bg-neutral-200 dark:bg-zinc-900 dark:text-white"
          : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
      }`}
        >
          {plan.button}
        </Link>
      ) : (
        <>
          {isCurrentPlan ? (
            <div className="mb-8 flex w-full items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-500">
              ✓ Active Plan
            </div>
          ) : (
            <button
              onClick={onUpgrade}
              disabled={loading}
              className={`mb-8 flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all active:scale-[0.98] will-change-transform disabled:cursor-not-allowed disabled:opacity-60
            ${
              plan.popular
                ? "bg-white text-black hover:bg-neutral-200 dark:bg-zinc-900 dark:text-white"
                : "bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black"
            }`}
            >
              {loading ? "Processing..." : plan.button}
            </button>
          )}
        </>
      )}

      <div className="space-y-3">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-2 text-sm">
            <div className="mt-[3px] flex h-4 w-4 items-center justify-center rounded-full bg-zinc-700 dark:bg-zinc-300">
              <Check size={10} className="text-white dark:text-black" />
            </div>

            <span>{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
