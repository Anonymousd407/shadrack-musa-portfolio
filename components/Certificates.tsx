"use client";

import { useState } from "react";
import TerminalWindow from "./TerminalWindow";
import { certificates } from "@/data/certificates";

function isPdf(file: string) {
  return file.toLowerCase().endsWith(".pdf");
}

export default function Certificates() {
  const [active, setActive] = useState<number | null>(null);
  const open = active !== null ? certificates[active] : null;

  return (
    <section id="certificates" className="mx-auto max-w-5xl px-5 py-16">
      <TerminalWindow path="shadrack@portfolio: ~/certificates">
        <p className="font-mono text-sm text-[var(--green)]">$ ls certificates</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {certificates.map((certificate, i) => (
            <div
              key={certificate.name}
              className="rounded-xl border border-white/10 p-5 transition hover:border-green-400"
            >
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {certificate.name}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{certificate.issuer}</p>
              <p className="text-sm text-gray-400">{certificate.category}</p>
              <p className="text-sm text-gray-400">{certificate.year}</p>

              <button
                onClick={() => setActive(i)}
                className="mt-4 inline-block text-sm text-[var(--green)] hover:underline"
              >
                View Certificate →
              </button>
            </div>
          ))}
        </div>
      </TerminalWindow>

      {open && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-6"
          onClick={() => setActive(null)}
        >
          <div
            className="relative h-[85vh] w-full max-w-3xl overflow-hidden rounded-lg border border-white/10 bg-[var(--surface)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 z-10 rounded-md bg-black/60 px-3 py-1 text-sm text-white"
            >
              close ✕
            </button>

            {isPdf(open.file) ? (
              <iframe
                src={`${open.file}#toolbar=0&navpanes=0`}
                title={open.name}
                className="h-full w-full"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={open.file}
                alt={open.name}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                className="mx-auto h-full w-auto select-none object-contain"
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
