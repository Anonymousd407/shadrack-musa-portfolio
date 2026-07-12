import TerminalWindow from "./TerminalWindow";

const achievements = [
  "Founder of Xploiter Security Tool",
  "Security Analyst Level 1 (SAL1)",
  "Junior Penetration Tester",
  "Cyber Security Researcher",
  "AI Mobile Money Fraud Detection Researcher",
  "Healthcare Blockchain Security System Developer",
  "TryHackMe Security Labs Researcher",
  "PortSwigger Web Security Researcher",
  "CTF Player and Security Challenge Participant",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-5xl px-5 py-16"
    >

      <TerminalWindow path="shadrack@portfolio: ~/achievements">

        <p className="font-mono text-green-400">
          $ achievements
        </p>

        <ul className="mt-6 space-y-3">
          {achievements.map((item) => (
            <li
              key={item}
              className="text-gray-300"
            >
              ✓ {item}
            </li>
          ))}
        </ul>

      </TerminalWindow>

    </section>
  );
}
