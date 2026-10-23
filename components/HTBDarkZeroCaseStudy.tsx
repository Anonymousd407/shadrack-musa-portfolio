"use client";

import { useEffect, useState } from "react";

const findings = [
  {
    name: "Handlebars AST Type Confusion",
    observed:
      "User-controlled campaign data was interpreted as template AST nodes, enabling server-side command execution under the darkzero service identity.",
    mitigation:
      "Treat submitted AST structures as untrusted input. Restrict accepted types, prevent runtime evaluation and isolate rendering processes.",
  },
  {
    name: "Application Secrets & Credential Exposure",
    observed:
      "Application command execution exposed environment configuration and database authentication material. A recovered password hash led to an SSH foothold.",
    mitigation:
      "Protect runtime secrets, separate service credentials, limit filesystem permissions and enforce strong authentication with password reuse prevention.",
  },
  {
    name: "Gitea Repository & Workflow Trust Boundaries",
    observed:
      "A reverse-fork workflow and repository-template processing weakness allowed an account with limited repository access to influence privileged operations.",
    mitigation:
      "Restrict workflow execution, validate pull-request trust boundaries and prevent untrusted repositories from controlling executable Git filters.",
  },
  {
    name: "Windows Service Privilege Escalation",
    observed:
      "The compromised Gitea service identity exposed an impersonation path that resulted in SYSTEM execution on the internal Windows host.",
    mitigation:
      "Apply OS security updates, remove unnecessary token privileges, isolate services and monitor abnormal privilege elevation.",
  },
  {
    name: "Active Directory Privilege Abuse",
    observed:
      "Host-level SYSTEM privileges supported changes to domain group membership and subsequent directory replication access.",
    mitigation:
      "Restrict domain administration, monitor privileged group changes, audit replication rights and apply tiered administrative boundaries.",
  },
  {
    name: "Cross-Forest Trust Abuse",
    observed:
      "The attack continued across a two-way forest trust using compromised Kerberos material and privileged group relationships.",
    mitigation:
      "Review trust configuration, enforce appropriate SID filtering, protect Kerberos keys and limit privileged cross-forest access.",
  },
  {
    name: "Sensitive File & Domain Compromise",
    observed:
      "The documented attack reached privileged SMB access on the target domain controller and obtained the final lab objective.",
    mitigation:
      "Monitor domain controller access, restrict privileged file operations and alert on anomalous authentication and ticket activity.",
  },
];

const evidence = [
  {
    title: "Network discovery",
    command:
      "nmap -Pn -sC -sV -oN darkzeroreturns_nmap.txt 10.129.83.91",
    result:
      "22/tcp: OpenSSH 9.6p1\n80/tcp: nginx 1.24.0\nWeb redirect: dzcampaigns.htb",
  },
  {
    title: "Web application enumeration",
    command:
      "curl -i http://10.129.83.91/",
    result:
      "HTTP 301 redirect to the campaign application's virtual host.",
  },
  {
    title: "Template execution verification",
    command:
      "./dz_ast_rce.sh 'id; hostname'",
    result:
      "The authorized test demonstrated command execution as the darkzero service account on SRV01.",
  },
  {
    title: "Internal application enumeration",
    command:
      "curl -i http://172.16.20.2:3000/",
    result:
      "Internal Gitea instance discovered. Subsequent testing identified repository workflow weaknesses.",
  },
  {
    title: "Privilege verification",
    command: "whoami",
    result:
      "The recorded service exploitation reached svc-gitea and subsequently NT AUTHORITY\\SYSTEM.",
  },
];

export default function HTBDarkZeroCaseStudy() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <section className="mt-7" aria-label="DarkZeroReturns technical case study">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="darkzero-case-study"
        onClick={() => setOpen(!open)}
        className="w-full rounded-xl border border-cyan-400/40 bg-gradient-to-r from-[#102329] to-[#0a161b] px-6 py-5 text-left transition hover:border-emerald-400/70 hover:shadow-[0_0_24px_rgba(16,185,129,0.12)]"
      >
        <span className="block font-mono text-xs tracking-wider text-cyan-300">
          $ cat darkzeroreturns-security-case-study.md
        </span>
        <span className="mt-3 block text-xl font-bold text-white">
          DarkZeroReturns — Technical Case Study
        </span>
        <span className="mt-2 block text-sm text-emerald-300">
          {open ? "Hide Case Study −" : "Explore Case Study →"}
        </span>
      </button>

      {open && (
        <article
          id="darkzero-case-study"
          role="dialog"
          aria-modal="true"
          aria-label="DarkZeroReturns Technical Case Study"
          className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-b from-[#102126] via-[#0a171a] to-[#050d10] text-slate-100"
        >
          <div className="sticky top-0 z-10 border-b border-emerald-400/20 bg-[#081417]/95 px-4 py-4 backdrop-blur-xl sm:px-8">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-cyan-300">
                  HTB / SECURITY RESEARCH
                </p>
                <p className="mt-1 font-semibold text-white">
                  DarkZeroReturns
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                ← Close / Back to Machines
              </button>
            </div>
          </div>

          <header className="mx-auto max-w-6xl border-b border-white/10 p-6 sm:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">
              Authorized Hack The Box Security Research
            </p>

            <h3 className="mt-4 text-3xl font-extrabold text-white">
              DarkZeroReturns
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              Rooted · 14 October 2026 · Rank #1965 · 1,105 XP
            </p>

            <p className="mt-5 leading-8 text-slate-200">
              A multi-stage security assessment spanning a Linux web
              application, repository automation, Windows service
              privilege escalation and cross-forest Active Directory
              security boundaries.
            </p>

            <div className="mt-6 rounded-xl border border-cyan-400/25 bg-cyan-400/5 p-5">
              <h4 className="font-bold text-cyan-300">
                Documented Attack Path
              </h4>
              <p className="mt-3 font-mono text-sm leading-8 text-slate-200">
                Web Application → Handlebars RCE → Credentials →
                SSH → Gitea Workflow → SYSTEM → Active Directory →
                Kerberos Trust → Domain Controller
              </p>
            </div>
          </header>

          <div className="mx-auto max-w-6xl p-6 pb-20 sm:p-10">
            <h4 className="text-2xl font-bold text-white">
              Vulnerability Findings
            </h4>

            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {findings.map((finding, index) => (
                <section
                  key={finding.name}
                  className="rounded-xl border border-white/10 bg-[#121f24] p-5 transition hover:border-emerald-400/40"
                >
                  <p className="font-mono text-xs text-cyan-300">
                    FINDING {String(index + 1).padStart(2, "0")}
                  </p>

                  <h5 className="mt-3 text-lg font-bold text-white">
                    {finding.name}
                  </h5>

                  <div className="mt-5 border-l-2 border-amber-400 pl-4">
                    <p className="text-xs font-bold uppercase text-amber-300">
                      Exploitation Observed
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {finding.observed}
                    </p>
                  </div>

                  <div className="mt-5 border-l-2 border-emerald-400 pl-4">
                    <p className="text-xs font-bold uppercase text-emerald-300">
                      How to Secure
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {finding.mitigation}
                    </p>
                  </div>
                </section>
              ))}
            </div>

            <h4 className="mt-12 text-2xl font-bold text-white">
              Technical Commands &amp; Findings
            </h4>

            <div className="mt-6 space-y-5">
              {evidence.map((item, index) => (
                <section
                  key={item.title}
                  className="overflow-hidden rounded-xl border border-white/10 bg-[#071318]"
                >
                  <div className="border-b border-white/10 px-5 py-3">
                    <p className="font-semibold text-emerald-300">
                      {String(index + 1).padStart(2, "0")}. {item.title}
                    </p>
                  </div>

                  <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 text-cyan-200">
                    <code>{item.command}</code>
                  </pre>

                  <p className="whitespace-pre-line border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-300">
                    {item.result}
                  </p>
                </section>
              ))}
            </div>

            <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-7 text-slate-400">
              Based on the owner's documented HTB lab execution.
              Machine retirement status is unverified. Sensitive
              credentials, flags and full exploit payloads are excluded.
              Remediation recommendations have not been validated as
              implemented fixes.
            </p>
          </div>
        </article>
      )}
    </section>
  );
}
