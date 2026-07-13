"use client";

import { achievements } from "@/data/achievements";
import TerminalWindow from "./TerminalWindow";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl px-5 py-24"
      data-aos="fade-up"
    >
      <TerminalWindow path="shadrack@portfolio:~/achievements">
        <h2 className="text-3xl font-bold text-white">
          Achievements
        </h2>

        <p className="mt-2 text-gray-400">
          Certifications, leadership and cybersecurity milestones.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-green-500/20 bg-black/40 p-6 transition hover:-translate-y-2 hover:border-green-400"
            >
              <div className="text-4xl">
                {item.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-400">
                {item.description}
              </p>

              <span className="mt-4 inline-block rounded bg-green-500/20 px-3 py-1 text-sm text-green-400">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}
