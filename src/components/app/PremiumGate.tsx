import { Link } from "react-router-dom";

type PremiumGateProps = {
  isPremium?: boolean;
  children: React.ReactNode;
};

export default function PremiumGate({ isPremium, children }: PremiumGateProps) {
  const hasAccess = false; // later this will come from auth

  if (isPremium && !hasAccess) {
    return (
      <div className="flex items-center justify-center h-[500px] rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
        <div className="text-center space-y-4 px-6">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Unlock this template
          </h3>

          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            This template is part of the premium library.
          </p>

          <Link
            to="/pricing"
            className="inline-flex px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium"
          >
            View Pricing
          </Link>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
