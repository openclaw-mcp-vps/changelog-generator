export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate changelogs<br />
          <span className="text-[#58a6ff]">from git commits</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo. Our AI reads your commits, categorizes changes, and produces polished changelogs — ready to ship.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required for 7-day trial.</p>
      </section>

      {/* How it works */}
      <section className="mb-24 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "1", title: "Connect Repo", desc: "Authenticate with GitHub or GitLab and select your repositories." },
          { step: "2", title: "AI Analyzes Commits", desc: "We parse commit messages and categorize features, fixes, and breaking changes." },
          { step: "3", title: "Export Changelog", desc: "Download Markdown, JSON, or publish directly to your release page." }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-2xl font-bold mb-2">{step}</div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-[#8b949e] text-sm">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited repositories",
              "AI-powered commit categorization",
              "Markdown, JSON & HTML export",
              "GitHub & GitLab integration",
              "Custom changelog templates",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which Git providers are supported?",
              a: "We support GitHub and GitLab. Bitbucket support is on the roadmap."
            },
            {
              q: "How does the AI categorize commits?",
              a: "We use conventional commit conventions and AI to classify each commit as a feature, bug fix, breaking change, or chore — even if your team doesn't follow strict conventions."
            },
            {
              q: "Can I customize the changelog format?",
              a: "Yes. Choose from built-in templates or write your own using our Markdown-based template editor."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} ChangelogAI. All rights reserved.
      </footer>
    </main>
  );
}
