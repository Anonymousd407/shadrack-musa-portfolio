const research = [
  {
    title: "HMAC Request Integrity",
    category: "Authentication Security",
    summary:
      "Reviewed request-signing and message-integrity behavior under selected authentication configurations.",
    recommendation:
      "Enforce cryptographic binding of security-critical request components and validate signing configurations.",
  },
  {
    title: "OAuth2 Authorization Code Lifecycle",
    category: "Concurrency & Token Security",
    summary:
      "Investigated concurrent authorization-code processing and single-use token exchange guarantees.",
    recommendation:
      "Use atomic token consumption and concurrency-aware integration tests.",
  },
  {
    title: "OAuth2 Refresh Token Rotation",
    category: "Session Security",
    summary:
      "Analyzed refresh-token lifecycle behavior under concurrent requests using isolated test harnesses.",
    recommendation:
      "Enforce atomic rotation, consistent invalidation and controlled session issuance.",
  },
  {
    title: "OAuth2 Redirect URI Binding",
    category: "OAuth2 Protocol Security",
    summary:
      "Reviewed redirect URI validation and authorization-to-token exchange consistency.",
    recommendation:
      "Bind authorization requests to their original redirect URI and verify the binding during token exchange.",
  },
  {
    title: "JWT & Webhook Input Validation",
    category: "Parser & Replay Resilience",
    summary:
      "Assessed malformed authentication inputs and webhook timestamp validation through offline tests.",
    recommendation:
      "Validate input types, handle parser errors safely and enforce bounded replay windows.",
  },
];

export default function HackerOneResearch() {
  return (
    <section className="mt-6 rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#102026] via-[#0b171b] to-[#091215] p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs tracking-widest text-cyan-300">
            SECURITY RESEARCH / API SECURITY
          </p>

          <h4 className="mt-3 text-xl font-bold text-white">
            Independent Security Research
          </h4>

          <p className="mt-2 text-sm text-slate-400">
            Kong Gateway · Authentication & OAuth2
          </p>
        </div>

        <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
          Integration Pending
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">
        Conducted authorized local source-code security research
        focused on API authentication, OAuth2 token lifecycle,
        cryptographic request integrity and input validation.
        Developed offline test harnesses and documented defensive
        recommendations.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {["API Security", "OAuth2", "HMAC", "JWT", "Lua", "Python"].map(tag => (
          <span
            key={tag}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <details className="group mt-6 rounded-xl border border-cyan-400/30 bg-[#071418]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-cyan-300 marker:hidden">
          <span className="group-open:hidden">
            Explore Research Summary →
          </span>
          <span className="hidden group-open:inline">
            Hide Research Summary −
          </span>
          <span aria-hidden="true" className="text-lg">⌄</span>
        </summary>

        <div className="border-t border-white/10 p-4 sm:p-5">
          <div className="grid gap-4 lg:grid-cols-2">
            {research.map((item, index) => (
              <article
                key={item.title}
                className="min-w-0 rounded-xl border border-white/10 bg-[#122127] p-4"
              >
                <p className="font-mono text-xs text-cyan-300">
                  RESEARCH {String(index + 1).padStart(2, "0")}
                </p>

                <h5 className="mt-3 font-bold text-white">
                  {item.title}
                </h5>

                <p className="mt-1 text-xs text-slate-400">
                  {item.category}
                </p>

                <p className="mt-4 text-xs font-semibold uppercase text-amber-300">
                  Research Focus
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.summary}
                </p>

                <p className="mt-4 text-xs font-semibold uppercase text-emerald-300">
                  Defensive Recommendation
                </p>

                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.recommendation}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-slate-400">
            Research status: local source-level and offline testing.
            Full Kong/OpenResty integration was not completed.
            No production exploitation, external report submission,
            accepted disclosure or bounty payment is claimed.
            Private research evidence is intentionally excluded.
          </p>
        </div>
      </details>
    </section>
  );
}
