import Image from "next/image";
import TerminalWindow from "./TerminalWindow";

export default function Hero() {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center"
    >
      <TerminalWindow path="shadrack@portfolio:~/profile">

        <div className="flex flex-col items-center gap-8">

          {/* Profile Image */}
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-green-400 shadow-[0_0_35px_rgba(34,197,94,0.35)]">

            <Image
              src="/profile.png"
              alt="Shadrack Musa"
              fill
              sizes="176px"
              className="object-cover"
              priority
            />

          </div>

          {/* Terminal Command */}
          <p className="font-mono text-sm text-green-400">
            $ whoami
          </p>

          {/* Name */}
          <h1 className="text-5xl font-extrabold text-white md:text-7xl">
            Shadrack Musa
          </h1>

          {/* Title */}
          <h2 className="text-2xl font-bold text-green-400 md:text-3xl">
            Cyber Security Engineer
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-400">
            Full Stack Developer • AI Enthusiast
          </p>

          {/* Description */}
          <p className="max-w-3xl leading-8 text-gray-300">
            Cyber Security and Digital Forensics Engineering student at the
            University of Dodoma. Passionate about penetration testing,
            AI security, blockchain security, secure software engineering,
            vulnerability assessment, digital forensics and modern
            full-stack development.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap justify-center gap-4">

            <a
              href="https://github.com/Anonymousd407"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-green-500 px-6 py-3 font-semibold text-green-400 transition hover:bg-green-500 hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shadrack-musa-232557342/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-blue-500 px-6 py-3 font-semibold text-blue-400 transition hover:bg-blue-500 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="/documents/Shadrack-Musa-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
            >
              Download CV
            </a>

          </div>

          {/* Quick Stats */}
          <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">

            <div className="rounded-xl border border-green-500/30 p-5">
              <h3 className="text-3xl font-bold text-green-400">
                15+
              </h3>
              <p className="text-sm text-gray-400">
                Security Projects
              </p>
            </div>

            <div className="rounded-xl border border-green-500/30 p-5">
              <h3 className="text-3xl font-bold text-green-400">
                15
              </h3>
              <p className="text-sm text-gray-400">
                Certifications
              </p>
            </div>

            <div className="rounded-xl border border-green-500/30 p-5">
              <h3 className="text-3xl font-bold text-green-400">
                380+
              </h3>
              <p className="text-sm text-gray-400">
                THM / HTB Labs
              </p>
            </div>

            <div className="rounded-xl border border-green-500/30 p-5">
              <h3 className="text-3xl font-bold text-green-400">
                2026
              </h3>
              <p className="text-sm text-gray-400">
                Active Research
              </p>
            </div>

          </div>

        </div>

      </TerminalWindow>
    </section>
  );
}
