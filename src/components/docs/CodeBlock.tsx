import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal } from "lucide-react";
import { Highlight } from "prism-react-renderer";
import { codeTheme } from "./codeTheme";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

export default function CodeBlock({
  code,
  language = "tsx",
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative w-full overflow-hidden rounded-xl border border-zinc-800 bg-[#0d0d0e] font-mono selection:bg-zinc-700/50">
      {/* Tab/Header Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800/50 bg-zinc-900/30 px-4 py-2.5 backdrop-blur-sm">
        <div className="flex items-center gap-2.5">
          <Terminal size={14} className="text-zinc-500" />
          {filename ? (
            <span className="text-[11px] font-medium tracking-tight text-zinc-400">
              {filename}
            </span>
          ) : (
            <span className="text-[11px] font-medium tracking-tight text-zinc-500 uppercase">
              {language}
            </span>
          )}
        </div>

        <button
          onClick={handleCopy}
          className="relative flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-medium text-zinc-400 transition-all hover:bg-zinc-800 hover:text-zinc-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1.5 text-emerald-400"
              >
                <Check size={12} strokeWidth={3} />
                Copied
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1.5"
              >
                <Copy size={12} />
                Copy code
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Code Content */}
      <Highlight
        theme={codeTheme}
        code={code.trim()}
        language={language as any}
      >
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="overflow-x-auto px-1 py-4 text-[13px] leading-[1.6] scrollbar-hide">
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line })}
                className="group/line flex px-4 transition-colors hover:bg-zinc-800/30"
              >
                {/* Minimalist Line Numbers */}
                <span className="mr-6 w-5 shrink-0 select-none text-right font-mono text-zinc-700 transition-colors group-hover/line:text-zinc-500">
                  {i + 1}
                </span>

                <span className="inline-block">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
