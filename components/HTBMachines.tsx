"use client";

import { useState } from "react";
import Image from "next/image";
import HTBDarkZeroCaseStudy from "./HTBDarkZeroCaseStudy";
import HTBNimbusCaseStudy from "./HTBNimbusCaseStudy";

const machines = [
  { id: "odyssey", name: "Odyssey", solved: "12 Oct 2026", rank: "#365", xp: "1,050", state: "Retired", image: "/evidence/htb/machines/odyssey-solved.png", description: "A multi-stage Windows enterprise security lab involving an exposed web workflow, SQL Server access, and Active Directory privilege escalation." },
  { id: "nimbus", name: "Nimbus", solved: "13 Oct 2026", rank: "#3808", xp: "1,105", state: "State unverified", image: "/evidence/htb/machines/nimbus-solved.png", description: "Completed Hack The Box machine. Documented Linux security lab involving SSRF, cloud metadata exposure, SQS worker execution, privileged CodeBuild and container escape." },
  { id: "darkzero", name: "DarkZeroReturns", solved: "14 Oct 2026", rank: "#1965", xp: "1,105", state: "State unverified", image: "/evidence/htb/machines/darkzero-solved.png", description: "Completed Hack The Box machine. The solve screenshot is available; a verified technical case study is pending." },
  {
    id: "stream",
    name: "Stream",
    solved: "11 Oct 2026",
    rank: "#591",
    xp: "845",
    state: "State unverified",
    image: "/evidence/htb/other-solved/stream-solved.png",
    description: "A Linux security lab involving XXE, Kafka credential exposure, ClickHouse permissions and unsafe root-level automation."
  },
] as const;

const findings = [
  { title: "Aggregation pipeline authorization bypass", exploit: "Nested aggregation stages exposed a pending operator invitation despite top-level restrictions.", fix: "Authorize access at the collection and document levels, validate nested stages recursively, and prevent invite-token retrieval via general search." },
  { title: "JSONPath diagnostic command execution", exploit: "A diagnostic expression reached the JavaScript runtime and enabled command execution as the web service user.", fix: "Remove runtime evaluation and process access from diagnostic expressions; isolate diagnostic functions behind strict allowlists and authorization." },
  { title: "Prototype pollution and sensitive-file disclosure", exploit: "Unsafe option merging in a rendering workflow enabled access to a sensitive environment configuration.", fix: "Reject prototype keys, use safe object merging, disable unsafe rendering primitives, and move secrets out of renderer-accessible files." },
  { title: "SQL Server credential and privilege escalation", exploit: "Leaked audit credentials, outbound UNC authentication, and permissive database service privileges enabled lateral movement and host-level access.", fix: "Rotate exposed credentials, restrict outbound SMB, remove excessive SQL and impersonation privileges, and limit service account rights." },
  { title: "Active Directory delegated-account takeover", exploit: "An overly permissive delegated managed service account ACL enabled privilege escalation toward domain services.", fix: "Review dMSA permissions, restrict GenericAll/delegation rights, and audit privileged identity changes." },
  { title: "Named-pipe authorization and YAML deserialization", exploit: "Weak role enforcement and unsafe YAML object instantiation enabled execution under a privileged service identity, supporting domain compromise.", fix: "Enforce per-operation authorization, remove decryption oracles, deserialize strictly typed data, and separate service privileges." },
] as const;

export default function HTBMachines() {
  const [expanded, setExpanded] = useState(false);
  const [nimbusExpanded, setNimbusExpanded] = useState(false);
  return (
    <section aria-labelledby="machines-title" className="mt-12 font-sans text-slate-100">
      <div className="mb-7 border-b border-emerald-400/15 pb-6">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">// Security research archive</p>
        <h2 id="machines-title" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Machines <span className="text-emerald-400">&amp; Findings</span></h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">Documented Hack The Box completions, original proof screenshots, and technical breakdowns of the risks identified, how they were exploited in an authorized lab, and how organizations can defend against them.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {machines.map((machine) => (
          <article key={machine.id} className="group overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-[#101e22] via-[#0d171b] to-[#091214] shadow-[0_14px_45px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-emerald-400/55 hover:shadow-[0_14px_50px_rgba(16,185,129,0.13)]">
            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan-300">HTB / Completed</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">{machine.name}</h3>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">Solved</span>
              </div>
              <p className="mt-3 min-h-12 text-sm leading-6 text-slate-300">{machine.description}</p>
              <div className="mt-5 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-black/20 p-3 text-center">
                <div><p className="text-sm font-bold text-white">{machine.rank}</p><p className="mt-1 text-[11px] text-slate-400">Machine rank</p></div>
                <div className="border-x border-white/10"><p className="text-sm font-bold text-white">{machine.xp}</p><p className="mt-1 text-[11px] text-slate-400">XP earned</p></div>
                <div><p className="text-xs font-semibold text-white">{machine.solved}</p><p className="mt-1 text-[11px] text-slate-400">Solve date</p></div>
              </div>
              <p className="mt-3 text-xs text-slate-400">Machine state: <span className="text-slate-200">{machine.state}</span></p>
            </div>
            <a href={machine.image} target="_blank" rel="noopener noreferrer" aria-label={`View full ${machine.name} completion screenshot`} className="block border-t border-emerald-400/10 bg-[#071114] p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400">
              <Image src={machine.image} alt={`Hack The Box completion screenshot for ${machine.name}`} width={850} height={560} unoptimized className="h-auto w-full rounded-lg border border-white/10 object-contain" />
              <span className="mt-3 inline-flex text-sm font-semibold text-cyan-300 group-hover:text-cyan-200">View original screenshot ↗</span>
            </a>
            <div className="px-5 pb-5 sm:px-6">
              {machine.id === "odyssey" ? (
                <button type="button" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded} aria-controls="odyssey-case-study" className="mt-2 inline-flex rounded-lg border border-emerald-400/50 bg-emerald-400/10 px-5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400">{expanded ? "Hide Case Study −" : "Explore Odyssey Case Study →"}</button>
               ) : machine.id === "darkzero" ? (
                <HTBDarkZeroCaseStudy />
              ) : machine.id === "nimbus" ? (
                <button
                  type="button"
                  onClick={() => setNimbusExpanded((v) => !v)}
                  aria-expanded={nimbusExpanded}
                  aria-controls="nimbus-case-study"
                  className="mt-2 rounded-lg border border-cyan-400/50 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
                >
                  {nimbusExpanded
                    ? "Hide Case Study −"
                    : "Explore Nimbus Case Study →"}
                </button>
              ) : (
                <p className="mt-2 text-xs leading-5 text-slate-400">Technical findings pending evidence review.</p>
              )}
            </div>
          </article>
        ))}
      </div>

      {nimbusExpanded && <HTBNimbusCaseStudy />}

      {expanded && (
        <article id="odyssey-case-study" className="mt-8 overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-b from-[#112128] via-[#0c171c] to-[#091216] shadow-[0_18px_55px_rgba(0,0,0,0.25)]">
          <div className="border-b border-white/10 p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">$ cat odyssey-security-case-study.md</p>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white">Odyssey <span className="text-emerald-400">/ Security Case Study</span></h3>
            <p className="mt-3 text-sm font-medium text-slate-300">Windows · Insane · Retired · Rooted</p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200">This authorized lab demonstrated how multiple security control failures could combine into full domain compromise. The documented path began with a Node.js web service, continued through SQL Server, and reached Active Directory administrator access.</p>
            <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
              <h4 className="text-sm font-bold text-cyan-300">Outcome &amp; evidence</h4>
              <p className="mt-2 text-sm leading-7 text-slate-300">The original lab write-up records web-service access, database-host SYSTEM access, and final domain administrator access through WinRM. Recommendations below were not implemented or retested.</p>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <h4 className="text-xl font-bold tracking-tight text-white">Vulnerabilities, exploitation &amp; defensive controls</h4>
            <p className="mt-2 text-sm leading-6 text-slate-400">A risk-focused summary based on the owner's write-up, without publishing flags, credentials or reusable exploit payloads.</p>
            <div className="mt-6 grid gap-4 xl:grid-cols-2">
              {findings.map((item, i) => (
                <section key={item.title} className="rounded-xl border border-white/10 bg-[#111d22]/90 p-5 transition hover:border-emerald-400/30">
                  <p className="font-mono text-xs tracking-widest text-emerald-300">FINDING {String(i + 1).padStart(2, "0")}</p>
                  <h5 className="mt-2 text-lg font-bold leading-snug text-white">{item.title}</h5>
                  <div className="mt-5 border-l-2 border-amber-400/70 pl-4"><p className="text-xs font-bold uppercase tracking-wide text-amber-300">Exploitation observed</p><p className="mt-2 text-sm leading-7 text-slate-200">{item.exploit}</p></div>
                  <div className="mt-5 border-l-2 border-emerald-400/70 pl-4"><p className="text-xs font-bold uppercase tracking-wide text-emerald-300">Recommended mitigation</p><p className="mt-2 text-sm leading-7 text-slate-200">{item.fix}</p></div>
                </section>
              ))}
            </div>
            <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-6 text-slate-400">Evidence source: Odyssey completion screenshot and owner-provided lab record. Detailed command-output screenshots are not included. Remediation is advisory and has not been verified as deployed.</p>
          </div>
        </article>
      )}
    </section>
  );
}
