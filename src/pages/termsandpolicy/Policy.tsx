import RegistryFooter from "../sections/Footer";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-lg">
              This Privacy Policy explains how Crush UI collects, uses and
              protects your information when using the platform.
            </p>
          </section>

          {/* Content */}
          <div className="mt-20 space-y-16">
            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Information We Collect
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                We may collect information such as your name, email address,
                billing information and account activity when you create an
                account or purchase a subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                How We Use Your Information
              </h2>

              <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-400">
                <p>• To provide access to Crush UI components and services.</p>
                <p>• To manage subscriptions and billing.</p>
                <p>• To improve platform performance and user experience.</p>
                <p>• To communicate important updates and announcements.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Cookies & Authentication
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Crush UI uses cookies and secure authentication tokens to keep
                users logged in and maintain secure sessions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Third Party Services
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Payments may be processed through third-party providers such as
                Cashfree. We do not store your full payment information on our
                servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">
                Data Protection
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                We take reasonable measures to protect user data from
                unauthorized access, disclosure or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                If you have questions regarding this Privacy Policy, please
                contact us through the official Crush UI support channels.
              </p>
            </section>
          </div>
        </div>
      </main>

      <RegistryFooter />
    </>
  );
}
