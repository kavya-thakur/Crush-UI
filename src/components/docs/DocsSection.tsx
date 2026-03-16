import CodeBlock from "./CodeBlock";

type Props = {
  installation?: string;
  usage?: string;
  dependencies?: string[];
};

export default function DocsSection({
  installation,
  usage,
  dependencies,
}: Props) {
  if (!installation && !usage && !dependencies?.length) return null;

  return (
    <div className="mx-auto space-y-10 py-12">
      {/* Installation Section */}
      {installation && (
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-[13px] font-medium tracking-[0.1em] text-zinc-400 uppercase dark:text-zinc-500">
              Installation
            </h2>
            <div className="h-px flex-1 bg-zinc-100 dark:bg-white/[0.03]" />
          </div>
          <CodeBlock code={installation} language="bash" />
        </section>
      )}

      {/* Usage Section */}
      {usage && (
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-[13px] font-medium tracking-[0.1em] text-zinc-400 uppercase dark:text-zinc-500">
              Usage
            </h2>
            <div className="h-px flex-1 bg-zinc-100 dark:bg-white/[0.03]" />
          </div>
          <CodeBlock code={usage} language="tsx" />
        </section>
      )}

      {/* Dependencies Section - Explicitly Bash */}
      {dependencies?.length && (
        <section className="space-y-4">
          <div className="flex items-center gap-4">
            <h2 className="text-[13px] font-medium tracking-[0.1em] text-zinc-400 uppercase dark:text-zinc-500">
              Dependencies
            </h2>
            <div className="h-px flex-1 bg-zinc-100 dark:bg-white/[0.03]" />
          </div>
          <CodeBlock
            code={`npm install ${dependencies.join(" ")}`}
            language="bash"
          />
        </section>
      )}
    </div>
  );
}
