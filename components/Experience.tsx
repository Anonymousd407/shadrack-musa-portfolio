"use client";

import Link from "next/link";
import Image from "next/image";
import { experience } from "@/data/experience";
import HackerOneResearch from "./HackerOneResearch";
import TerminalWindow from "./TerminalWindow";

export default function Experience() {
  return (
    <section
      id="experience"
      data-aos="fade-up"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <TerminalWindow path="shadrack@portfolio:~/experience">

        <h2 className="text-4xl font-bold text-white">
          Professional Experience
        </h2>

        <p className="mt-3 text-gray-400">
          Practical cybersecurity, penetration testing, research and software engineering experience.
        </p>

        <div className="mt-12 space-y-8">

          {experience.map((job) => (

            <div
              key={job.company}
              className="rounded-xl border border-green-500/20 bg-black/40 p-6 transition duration-300 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
            >

              <div className="flex flex-col justify-between gap-2 md:flex-row">

                <div>

                  <h3 className="flex items-center gap-4 text-2xl font-bold text-green-400">
                    {/* Experience brand logos */}
                    {"logo" in job && typeof job.logo === "string" && (
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-green-500/20 bg-[#132026] p-2">
                        <Image
                          src={job.logo}
                          alt={`${job.company} logo`}
                          width={42}
                          height={42}
                          unoptimized
                          className="h-10 w-10 object-contain"
                        />
                      </span>
                    )}
                    {job.company}
                  </h3>

                  <p className="text-lg text-white">
                    {job.role}
                  </p>

                </div>

                <div className="text-right">

                  <p className="font-semibold text-green-400">
                    {job.period}
                  </p>

                </div>

              </div>

              <p className="mt-5 leading-7 text-gray-300">
                {job.description}
              </p>
              {job.company === "HackerOne" && (
                <HackerOneResearch />
              )}

              {job.company === "RAUT Company Limited — Capstone Audit" && (
                <div className="mt-5 flex flex-col gap-4 rounded-xl border border-green-500/20 bg-[#101c20] p-4 sm:flex-row sm:items-center">
                  <a
                    href="/experience/ssqa-award-photo.jpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-36 shrink-0 overflow-hidden rounded-lg border border-green-400/30 transition hover:border-green-400"
                    aria-label="View original award photograph"
                  >
                    <img
                      src="/experience/ssqa-award-photo.jpg"
                      alt="Photograph of the 2026 startup competition award"
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                  </a>

                  <div>
                    <p className="font-semibold text-green-400">
                      Practical Testing &amp; Evidence
                    </p>
                    <p className="mt-2 text-sm leading-7 text-gray-300">
                      API validation, functional QA, RBAC testing,
                      regression checks and documented bug reports.
                    </p>
                    <a
                      href="https://yaspi.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-cyan-300 hover:underline"
                    >
                      View Yaspi Platform ↗
                    </a>
                  </div>
                </div>
              )}


              {job.evidenceHref && (
                <Link
                  href={job.evidenceHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-green-500/40 px-4 py-2 text-sm font-semibold text-green-400 transition duration-300 hover:border-green-400 hover:bg-green-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View Labs &amp; Evidence
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              )}

            </div>

          ))}

        </div>

      </TerminalWindow>
    </section>
  );
}
