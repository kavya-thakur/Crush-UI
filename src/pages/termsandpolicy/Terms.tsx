import RegistryFooter from "../sections/Footer";

export default function TermsPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-zinc-900 dark:bg-[#030303] dark:text-white">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 lg:px-16 lg:py-20">
          {/* Header */}
          <section>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
              Legal
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
              By accessing or using Crush UI, you agree to the following terms
              and conditions.
            </p>
          </section>

          {/* Content */}
          <div className="mt-20 space-y-16">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Usage License
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Purchased components and templates may be used in personal and
                commercial projects according to your subscription plan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Restrictions
              </h2>

              <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>
                  • You may not resell or redistribute Crush UI components as a
                  competing product.
                </p>

                <p>
                  • You may not publicly share premium source code obtained
                  through a Pro subscription.
                </p>

                <p>
                  • Unauthorized sharing of premium assets is strictly
                  prohibited.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Accounts
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Users are responsible for maintaining the security of their
                account credentials and activities associated with their
                account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Payments & Refunds
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Payments are securely processed through third-party payment
                providers. Refund policies may vary depending on the purchase
                type and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Platform Availability
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                We reserve the right to modify, suspend or discontinue features
                or services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                For legal or licensing inquiries, contact Crush UI through the
                official support channels.
              </p>
            </section>
          </div>
        </div>
      </main>

      <RegistryFooter />
    </>
  );
}
