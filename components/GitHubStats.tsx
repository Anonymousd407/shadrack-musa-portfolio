import Image from "next/image";
import TerminalWindow from "./TerminalWindow";

const GITHUB_USERNAME = "your-github-username";

export default function GitHubStats() {
  return (
    <section id="github" className="mx-auto max-w-5xl px-5 py-10">
      <TerminalWindow path="shadrack@portfolio: ~/github">
        <p className="prompt font-mono text-sm text-[var(--text-dim)]">
          curl api.github.com/users/{GITHUB_USERNAME}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Image
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=github_dark&bg_color=101613&title_color=3fd97a&icon_color=e8a33d&text_color=d8e2dc&border_color=223028`}
            alt="GitHub contribution stats"
            width={495}
            height={195}
            unoptimized
            className="w-full rounded-md border border-[var(--border)]"
          />
          <Image
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=github_dark&bg_color=101613&title_color=3fd97a&text_color=d8e2dc&border_color=223028`}
            alt="Most used languages"
            width={495}
            height={195}
            unoptimized
            className="w-full rounded-md border border-[var(--border)]"
          />
        </div>

        <p className="mt-4 font-mono text-xs text-[var(--text-dim)]">
          # replace GITHUB_USERNAME in components/GitHubStats.tsx with your real GitHub handle
        </p>
      </TerminalWindow>
    </section>
  );
}
