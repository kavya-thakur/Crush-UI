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
    <div className="mt-20 space-y-16 border-t border-zinc-100 dark:border-zinc-800/50 pt-16">
      {installation && (
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-zinc-700 dark:text-white">
            Installation
          </h2>
          <CodeBlock code={installation} />
        </section>
      )}

      {usage && (
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-zinc-700 dark:text-white">
            Usage
          </h2>
          <CodeBlock code={usage} />
        </section>
      )}

      {dependencies?.length && (
        <section className="space-y-6">
          <h2 className="text-xl font-medium text-zinc-700 dark:text-white">
            Dependencies
          </h2>

          <CodeBlock
            code={`npm install ${dependencies.join(" ")}`}
            language="bash"
          />
        </section>
      )}
    </div>
  );
}
