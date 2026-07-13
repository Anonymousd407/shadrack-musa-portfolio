"use client";

import { experience } from "@/data/experience";
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

                  <h3 className="text-2xl font-bold text-green-400">
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

            </div>

          ))}

        </div>

      </TerminalWindow>
    </section>
  );
}
