"use client";
import { useState } from "react";
import Image from "next/image";
const findings = [
  ["Source disclosure & access control", "The staff page source exposed sensitive application information. Restrict secrets and configuration exposure in rendered pages."],
  ["Authenticated SQL injection", "The administrative product workflow allowed database expressions. Use parameterized queries and narrowly scoped database privileges."],
  ["Unsafe .NET deserialization", "A Profile cookie was processed through an unsafe serializer, leading to execution under the web-service identity. Use strict typed serialization and never deserialize untrusted polymorphic objects."],
  ["MSSQL linked-server exposure", "Trace material and linked-server permissions exposed sensitive data and expanded lateral reach. Restrict linked servers and protect database logging and credentials."],
  ["Windows service trust boundary", "The internal service accepted a weak predictable authentication pattern and enabled command execution. Require strong authentication and isolate service privileges."],
  ["Active Directory GPO privileges", "An overly permissive GPO workflow enabled elevated domain access. Limit GPO creation/link rights and monitor high-impact policy updates."],
];
const commands=[
  ["Service reconnaissance","nmap -Pn -sC -sV 10.13.37.12","HTTPS, MSSQL, RDP and WinRM were exposed in the authorized lab."],
  ["Database context test","'+(select db_name())+'","An authenticated form evaluated a SQL expression; parameterization was missing."],
  ["Execution identity verification","whoami","The documented application callback ran as the web service identity."],
  ["Privilege validation","gpupdate /force","The lab record documents applied Group Policy changes and subsequent administrator access."],
];
export default function HTBContextFortress(){
  const [open,setOpen]=useState(false);
  return <section id="context-fortress" className="mt-12 font-sans text-slate-100">
    <div className="mb-6 border-b border-emerald-400/20 pb-5">
      <p className="font-mono text-xs uppercase tracking-widest text-cyan-300">// Enterprise lab evidence</p>
      <h2 className="mt-2 text-3xl font-extrabold text-white">Fortresses <span className="text-emerald-400">&amp; Pro Labs</span></h2>
      <p className="mt-3 text-sm leading-7 text-slate-300">Long-form authorized lab engagements, kept separate from machine completions.</p>
    </div>
    <article className="overflow-hidden rounded-2xl border border-emerald-400/25 bg-gradient-to-br from-[#101e22] to-[#091214]">
      <div className="p-6">
        <p className="font-mono text-xs tracking-widest text-cyan-300">HTB / FORTRESS COMPLETED</p>
        <h3 className="mt-2 text-2xl font-bold text-white">Context Fortress</h3>
        <p className="mt-2 font-medium text-emerald-300">7/7 objectives verified · Anonymousd407</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">Enterprise security chain involving SQL injection, unsafe deserialization, MSSQL linked servers, Windows service analysis and Group Policy privilege abuse.</p>
        <a href="/evidence/htb/fortresses/context-fortress-solved.png" target="_blank" rel="noopener noreferrer" className="mt-5 block max-w-2xl rounded-xl border border-cyan-400/20 bg-[#111a24] p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">
          <Image src="/evidence/htb/fortresses/context-fortress-solved.png" alt="Hack The Box Context Fortress solved confirmation" width={859} height={408} unoptimized className="h-auto w-full rounded-lg object-contain" />
        </a>
        <button type="button" aria-expanded={open} aria-controls="context-study" onClick={()=>setOpen(v=>!v)} className="mt-5 rounded-lg border border-emerald-400/50 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-400/20">{open?'Hide Case Study −':'Explore Context Case Study →'}</button>
      </div>
      {open && <div id="context-study" className="border-t border-emerald-400/20 p-6 sm:p-8">
        <h4 className="text-xl font-bold text-white">Documented attack path</h4>
        <p className="mt-3 rounded-xl border border-cyan-400/20 bg-[#071317] p-5 text-sm leading-8 text-cyan-200">Source disclosure → SQL injection → OWA &amp; source review → .NET deserialization → MSSQL linked server → Windows service pivot → GPO abuse → Administrator</p>
        <h4 className="mt-8 text-xl font-bold text-white">Findings and defensive recommendations</h4>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">{findings.map(([title,body],i)=><section key={title} className="rounded-xl border border-white/10 bg-[#111d22] p-5"><p className="font-mono text-xs text-cyan-300">FINDING {String(i+1).padStart(2,'0')}</p><h5 className="mt-2 font-bold text-white">{title}</h5><p className="mt-3 text-sm leading-7 text-slate-300">{body}</p></section>)}</div>
        <h4 className="mt-8 text-xl font-bold text-white">Selected lab commands</h4>
        <div className="mt-4 space-y-4">{commands.map(([title,cmd,note])=><section key={title} className="overflow-hidden rounded-xl border border-white/10 bg-[#071317]"><p className="p-4 font-semibold text-emerald-300">{title}</p><pre className="overflow-x-auto px-4 pb-4 text-xs text-cyan-200"><code>{cmd}</code></pre><p className="border-t border-white/10 p-4 text-sm text-slate-300">{note}</p></section>)}</div>
        <p className="mt-6 text-xs leading-6 text-slate-400">Source: owner-provided lab checkpoint and completion screenshot. Flags, passwords and credential material omitted. Suggested remediations have not been retested. Check HTB publication permissions before publishing full walkthroughs.</p>
      </div>}
    </article>
  </section>;
}
