"use client";

import Image from "next/image";
import { useState } from "react";

type SolvedMachine = {
  id: string;
  name: string;
  date: string;
  rank: string;
  xp: number;
  summary: string;
  image: string;
};

const machines: SolvedMachine[] = [
  {
    id: "touch", name: "Touch", date: "06 Oct 2026", rank: "#2139", xp: 585,
    summary: "Windows kiosk and DeviceHub assessment involving authentication weaknesses, kiosk escape, exposed credentials, and MySQL plugin permissions.",
    image: "/evidence/htb/other-solved/touch-solved.png",
  },
  {
    id: "layover", name: "Layover", date: "07 Oct 2026", rank: "#3411", xp: 845,
    summary: "Internal-network lab involving a web application, sensitive configuration exposure, and a local privilege escalation finding.",
    image: "/evidence/htb/other-solved/layover-solved.png",
  },
  {
    id: "makesense", name: "MakeSense", date: "13 Oct 2026", rank: "#4636", xp: 845,
    summary: "Completed HTB machine. A verified completion screenshot is available; technical findings have not yet been supplied.",
    image: "/evidence/htb/other-solved/makesense-solved.png",
  },
];

export default function HTBOtherSolved() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section aria-labelledby="htb-other-solved" className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] text-cyan-300">// VERIFIED COMPLETIONS</p>
          <h2 id="htb-other-solved" className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Other Solved Machines</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-400">Three additional Hack The Box machine completions, with original proof images and concise technical summaries.</p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 font-mono text-xs font-semibold text-emerald-300">3 documented solves</span>
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {machines.slice(0, expanded ? machines.length : 2).map(machine => (
          <article key={machine.id} className="min-w-0 overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#102127] via-[#0c191c] to-[#080f12] p-5 transition duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(6,182,212,0.09)] sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-mono text-[11px] tracking-widest text-cyan-300">HTB / COMPLETED</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{machine.name}</h3>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">Solved</span>
            </div>
            <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">{machine.summary}</p>
            <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-black/25 p-3 text-center">
              <div><p className="text-base font-bold text-white">{machine.rank}</p><p className="text-[11px] text-slate-400">Machine rank</p></div>
              <div><p className="text-base font-bold text-white">{machine.xp.toLocaleString()}</p><p className="text-[11px] text-slate-400">XP earned</p></div>
              <div><p className="text-xs font-bold text-white sm:text-sm">{machine.date}</p><p className="text-[11px] text-slate-400">Solved</p></div>
            </div>
            <a href={machine.image} target="_blank" rel="noopener noreferrer" aria-label={`View original HTB completion screenshot for ${machine.name}`} className="mt-5 block overflow-hidden rounded-xl border border-cyan-500/20 bg-[#111a24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              <Image src={machine.image} alt={`Hack The Box screenshot showing ${machine.name} solved by Anonymousd407`} width={781} height={496} unoptimized className="h-auto w-full object-contain" />
            </a>
            <a href={machine.image} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold text-cyan-300 underline-offset-4 hover:underline">View original screenshot ↗</a>
            <p className="mt-3 text-xs text-slate-500">Completion is evidenced by the screenshot. Retirement status has not been verified.</p>
          </article>
        ))}
      </div>
      <button type="button" onClick={() => setExpanded(v => !v)} aria-expanded={expanded} className="mt-6 rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
        {expanded ? "Show fewer machines ↑" : "View all 3 solved machines →"}
      </button>
    </section>
  );
}
