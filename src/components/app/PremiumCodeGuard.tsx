import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumCodeGuard() {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-full min-h-[450px] w-full items-center justify-center bg-zinc-50 dark:bg-[#09090b]">
      {/* 1. The Content Layer */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
        className="relative z-20 flex flex-col items-center px-8 text-center"
      >
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <Lock
            size={18}
            className="text-zinc-900 dark:text-zinc-100"
            strokeWidth={1.5}
          />
        </div>

        <h3 className="mb-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          Source code is restricted
        </h3>

        <p className="mb-8 max-w-[280px] text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          This component is part of the Pro collection. Upgrade your plan to
          view and export the source.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => navigate("/pricing")}
            className="h-10 rounded-lg bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Upgrade to Pro
          </button>

          <button
            onClick={() => navigate("/")}
            className="h-10 rounded-lg px-6 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            Learn more
          </button>
        </div>
      </motion.div>

      {/* 2. The "Tasteful" Background - Subtle blur of the hidden code */}
      <div className="absolute inset-0 z-10 opacity-0 dark:opacity-0 pointer-events-none overflow-hidden p-8">
        <div className="font-mono text-[13px] leading-loose text-zinc-400 dark:text-zinc-600 blur-[3px]">
          <p>export default function PremiumComponent() &#123;</p>
          <p className="pl-4">const [data, setData] = useState(null);</p>
          <p className="pl-4">useEffect(() =&gt; &#123;</p>
          <p className="pl-8">fetchProData().then(res =&gt; setData(res));</p>
          <p className="pl-4">&#125;, []);</p>
          <p className="pl-4">
            return &lt;Visuals data=&#123;data&#125; /&gt;;
          </p>
          <p>&#125;</p>
          {/* Repetitive code to fill the background */}
          <p className="mt-4">function useComplexHooks() &#123; ... &#125;</p>
          <p>const styles = &#123; container: "flex overflow-hidden" &#125;;</p>
        </div>
      </div>
    </div>
  );
}
