// import { motion } from "framer-motion";
// import {
//   Crown,
//   LogOut,
//   CreditCard,
//   Sparkles,
//   ShieldCheck,
//   Blocks,
// } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import RegistryFooter from "../sections/Footer";

// const stats = [
//   {
//     label: "Premium Blocks",
//     value: "12+",
//     icon: Blocks,
//   },
//   {
//     label: "Categories",
//     value: "6",
//     icon: Sparkles,
//   },
//   {
//     label: "Lifetime Updates",
//     value: "Included",
//     icon: ShieldCheck,
//   },
// ];

// export default function AccountPage() {
//   const { user, loading, logout } = useAuth();

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
//         <p className="text-sm text-zinc-500">Loading account...</p>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
//         <p className="text-sm text-zinc-500">Please login to continue</p>
//       </div>
//     );
//   }
//   return (
//     <>
//       <div className="min-h-screen bg-white px-4 py-10 text-zinc-900 dark:bg-black dark:text-white">
//         <div className="mx-auto flex max-w-6xl flex-col gap-8">
//           {/* HEADER */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.45 }}
//             className="overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
//           >
//             <div className="relative overflow-hidden p-8 md:p-10">
//               {/* Background glow */}
//               <div className="absolute inset-0 opacity-40">
//                 <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-zinc-300/20 blur-3xl dark:bg-zinc-700/20" />
//               </div>

//               <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
//                 {/* USER INFO */}
//                 <div className="flex items-center gap-5">
//                   <div>
//                     <div className="flex items-center gap-3">
//                       <h1 className="text-3xl capitalize font-semimedium tracking-tight">
//                         {user.username}
//                       </h1>

//                       {user.plan === "pro" && (
//                         <span className="flex items-center gap-1 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-semimedium uppercase tracking-wider text-amber-300">
//                           <Crown size={12} />
//                           Pro
//                         </span>
//                       )}
//                     </div>

//                     <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
//                       {user.email}
//                     </p>

//                     <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
//                       Manage your subscription, access premium components,
//                       production-ready templates and future Crush UI updates.
//                     </p>
//                   </div>
//                 </div>

//                 {/* ACTIONS */}
//                 <div className="flex flex-wrap gap-3">
//                   <Link to={"/pricing"} className="cursor-pointer">
//                     {!user.plan === "pro" && (
//                       <button className="flex cursor-pointer items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02] dark:bg-white dark:text-black">
//                         <Crown size={16} />
//                         Upgrade to Pro
//                       </button>
//                     )}
//                   </Link>

//                   <button
//                     onClick={logout}
//                     className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-medium transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-800"
//                   >
//                     <LogOut size={16} />
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* GRID */}
//           <div className="grid gap-6 lg:grid-cols-3">
//             {/* SUBSCRIPTION */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.05, duration: 0.45 }}
//               className="lg:col-span-2 rounded-[28px] border border-zinc-200 bg-zinc-50 p-7 dark:border-zinc-800 dark:bg-zinc-900/40"
//             >
//               <div className="flex items-start justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
//                     Subscription
//                   </p>

//                   <h2 className="mt-2 text-2xl font-semimedium tracking-tight">
//                     {user.plan === "pro"
//                       ? "Pro Membership Active"
//                       : "Free Plan"}
//                   </h2>

//                   <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
//                     {user.plan === "pro"
//                       ? "You have access to all premium components, future updates and advanced templates."
//                       : "Upgrade your account to unlock premium hero sections, animations and production-ready templates."}
//                   </p>
//                 </div>

//                 <div className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950">
//                   <CreditCard size={22} />
//                 </div>
//               </div>
//             </motion.div>

//             {/* QUICK ACCESS */}
//             <motion.div
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.08, duration: 0.45 }}
//               className="rounded-[28px] border border-zinc-200 bg-zinc-50 p-7 dark:border-zinc-800 dark:bg-zinc-900/40"
//             >
//               <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
//                 Quick Access
//               </p>

//               <div className="mt-6 flex flex-col gap-3">
//                 <Link
//                   to="/blocks"
//                   className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-800"
//                 >
//                   Explore Components
//                 </Link>

//                 <Link
//                   to="/pricing"
//                   className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-800"
//                 >
//                   Pricing
//                 </Link>

//                 <Link
//                   to="/templates"
//                   className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:hover:bg-zinc-800"
//                 >
//                   Templates
//                 </Link>
//               </div>
//             </motion.div>
//           </div>

//           {/* STATS */}
//           <motion.div
//             initial={{ opacity: 0, y: 18 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.12, duration: 0.45 }}
//             className="grid gap-5 md:grid-cols-3"
//           >
//             {stats.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.label}
//                   className="rounded-[24px] border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="rounded-2xl border border-zinc-200 bg-white p-3 dark:border-zinc-700 dark:bg-zinc-950">
//                       <Icon size={18} />
//                     </div>

//                     <span className="text-2xl font-semimedium tracking-tight">
//                       {item.value}
//                     </span>
//                   </div>

//                   <p className="mt-5 text-sm text-zinc-500 dark:text-zinc-400">
//                     {item.label}
//                   </p>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>

//       <RegistryFooter />
//     </>
//   );
// }

import { motion } from "framer-motion";
import {
  Crown,
  LogOut,
  CreditCard,
  Sparkles,
  ShieldCheck,
  Blocks,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import RegistryFooter from "../sections/Footer";

const stats = [
  {
    label: "Premium Blocks",
    value: "12+",
    icon: Blocks,
  },
  {
    label: "Categories",
    value: "6",
    icon: Sparkles,
  },
  {
    label: "Lifetime Updates",
    value: "Included",
    icon: ShieldCheck,
  },
];

export default function AccountPage() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
        <p className="text-sm font-semimedium tracking-wider uppercase text-zinc-500">
          Loading Account Data...
        </p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
        <p className="text-sm font-semimedium tracking-wider uppercase text-zinc-500">
          Please login to continue
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white px-4 py-10 text-zinc-900 dark:bg-black dark:text-white transition-colors duration-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-6">
          <div className="space-y-2 select-none mb-4">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-700 dark:text-zinc-200">
              Account
            </h2>

            <p className="text-sm font-medium text-neutral-500 dark:text-zinc-400">
              Manage your profile credentials, service tiers, and interface
              preferences.
            </p>
          </div>
          {/* HEADER CARD */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50 p-6 md:p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* USER INFO */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl capitalize font-medium tracking-tight text-zinc-900 dark:text-white">
                    {user.username}
                  </h1>

                  {user.plan === "pro" && (
                    <span className="flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-amber-600 dark:text-amber-400">
                      <Crown size={12} strokeWidth={2.5} />
                      Pro Active
                    </span>
                  )}
                </div>

                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {user.email}
                </p>

                <p className="max-w-xl text-sm leading-relaxed font-normal text-zinc-600 dark:text-zinc-400">
                  Manage your subscription, access premium components,
                  production-ready templates, and future Crush UI framework
                  updates.
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex flex-wrap gap-3 shrink-0">
                {user.plan !== "pro" && (
                  <Link to="/pricing" className="cursor-pointer">
                    <button className="flex h-11 cursor-pointer items-center gap-2 rounded-xl bg-black px-5 text-sm font-semimedium text-white shadow-sm transition-all hover:bg-zinc-800 active:scale-98 dark:bg-white dark:text-black dark:hover:bg-zinc-100">
                      <Crown size={15} />
                      Upgrade to Pro
                    </button>
                  </Link>
                )}

                <button
                  onClick={logout}
                  className="flex h-11 cursor-pointer items-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 text-sm font-semimedium text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 active:scale-98"
                >
                  <LogOut size={15} />
                  Logout
                </button>
              </div>
            </div>
          </motion.div>

          {/* MAIN GRID */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* SUBSCRIPTION INFORMATION */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04, duration: 0.35 }}
              className="lg:col-span-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8 dark:border-zinc-800 dark:bg-zinc-900/50 flex flex-col justify-between gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    Account Subscription
                  </p>

                  <h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white">
                    {user.plan === "pro"
                      ? "Pro Membership Active"
                      : "Free Framework Tier"}
                  </h2>

                  <p className="max-w-md text-sm font-normal leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {user.plan === "pro"
                      ? "You have full access to all premium components, production code assets, and premium visual dashboard layouts."
                      : "Upgrade your account engine to unlock premium layout modules, complex animations, and advanced landing kits."}
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-700 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300">
                  <CreditCard size={20} strokeWidth={2} />
                </div>
              </div>
            </motion.div>

            {/* QUICK ROUTE NAVIGATION */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.35 }}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-8 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-4">
                Quick Portals
              </p>

              <div className="flex flex-col gap-2.5">
                <Link
                  to="/blocks"
                  className="flex h-11 cursor-pointer items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semimedium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  Explore Components
                </Link>

                <Link
                  to="/pricing"
                  className="flex h-11 cursor-pointer items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semimedium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  Pricing Models
                </Link>

                <Link
                  to="/templates"
                  className="flex h-11 cursor-pointer items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semimedium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  View Templates
                </Link>
              </div>
            </motion.div>
          </div>

          {/* METRIC FOOTER GRID */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.35 }}
            className="grid gap-4 md:grid-cols-3"
          >
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50 flex flex-col justify-between gap-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl border border-zinc-200 bg-white p-2.5 shadow-sm dark:border-zinc-700 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300">
                      <Icon size={16} strokeWidth={2} />
                    </div>

                    <span className="text-xl font-medium tracking-tight text-zinc-900 dark:text-white">
                      {item.value}
                    </span>
                  </div>

                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <RegistryFooter />
    </>
  );
}
