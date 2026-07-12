import TerminalWindow from "./TerminalWindow";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-auto max-w-5xl px-5 py-16"
    >
      <TerminalWindow path="shadrack@portfolio: ~/certificates">
        <p className="font-mono text-sm text-[var(--green)]">
          $ ls certificates
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {certificates.map((certificate) => (
            <div
              key={certificate.name}
              className="rounded-xl border border-white/10 p-5 hover:border-green-400 transition"
            >
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {certificate.name}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {certificate.issuer}
              </p>

              <p className="text-sm text-gray-400">
                {certificate.category}
              </p>

              <p className="text-sm text-gray-400">
                {certificate.year}
              </p>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-[var(--green)] hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}
