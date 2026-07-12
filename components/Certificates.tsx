import TerminalWindow from "./TerminalWindow";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section id="certificates" className="mx-auto max-w-5xl px-5 py-10">
      <TerminalWindow path="shadrack@portfolio: ~/certificates">
        <p className="prompt font-mono text-sm text-[var(--text-dim)]">cat status.log</p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {certificates.map((c) => (
            <li
              key={c.name}
              className="flex items-center justify-between rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 font-mono text-sm"
            >
              <span className="text-[var(--text)]">{c.name}</span>
              <span
                className={
                  c.status === "earned"
                    ? "text-[var(--green)]"
                    : "text-[var(--amber)]"
                }
              >
                {c.status === "earned" ? "[ earned ]" : "[ in progress ]"}
              </span>
            </li>
          ))}
        </ul>
      </TerminalWindow>
    </section>
  );
}
