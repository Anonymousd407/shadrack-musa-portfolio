import Image from "next/image";
import TerminalWindow from "./TerminalWindow";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-5xl flex-col items-center px-5 py-20 text-center"
    >
      <TerminalWindow path="shadrack@portfolio: ~/profile">
        <div className="flex flex-col items-center gap-8">

          {/* Profile Image */}
          <div className="relative h-40 w-40 overflow-hidden rounded-full border border-green-400">
            <Image
              src="/profile.png"
              alt="Shadrack Musa"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Introduction */}
          <div>
            <p className="font-mono text-sm text-green-400">
              $ whoami
            </p>

            <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
              Shadrack Musa
            </h1>

            <h2 className="mt-3 text-2xl font-semibold text-green-400">
              Cyber Security Engineer
            </h2>

            <p className="mt-3 text-lg text-gray-400">
              Full Stack Developer • AI Enthusiast
            </p>

            <p className="mt-6 max-w-2xl text-gray-300">
              Cyber Security and Digital Forensics Engineering student
              at the University of Dodoma. I build secure web applications,
              AI-powered systems, penetration testing labs and modern
              full-stack software.
            </p>
          </div>


          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            {/* GitHub */}
            <a
              href="https://github.com/Anonymousd407"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-5 py-2 text-white hover:border-green-400 hover:text-green-400 transition"
            >
              GitHub
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shadrack-musa-232557342/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-5 py-2 text-white hover:border-blue-400 hover:text-blue-400 transition"
            >
              LinkedIn
            </a>


            {/* CV */}
            <a
              href="/documents/Shadrack-Musa-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-400 px-5 py-2 font-semibold text-black hover:bg-green-300 transition"
            >
              Download CV
            </a>

          </div>

        </div>
      </TerminalWindow>
    </section>
  );
}
