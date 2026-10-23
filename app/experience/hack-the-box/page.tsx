import HTBOtherSolved from "@/components/HTBOtherSolved";
import HTBMachines from "@/components/HTBMachines";
import Link from "next/link";
import TerminalWindow from "@/components/TerminalWindow";

export const metadata = {
  title: "Hack The Box | Shadrack Musa",
  robots: { index: false, follow: true },
};

export default function HackTheBoxExperiencePage() {
  return (
    <section
      aria-labelledby="htb-heading"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <Link
        href="/#experience"
        className="mb-6 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-green-400 transition hover:text-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
      >
        <span aria-hidden="true">&larr;</span>
        Back to Experience
      </Link>

      <TerminalWindow path="shadrack@portfolio:~/experience/hack-the-box">
        <h1 id="htb-heading" className="text-4xl font-bold text-white">
          Hack The Box
        </h1>

        <p className="mt-3 leading-7 text-gray-400">
          Security labs, CTF participation and seasonal progress.
        </p>

        <HTBMachines />
        <HTBOtherSolved />
      </TerminalWindow>
    </section>
  );
}
