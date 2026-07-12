import TerminalWindow from "./TerminalWindow";

const CONTACT = {
  email: "your.email@example.com",
  phone: "+255 000 000 000",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-github-username",
};

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-10">
      <TerminalWindow path="shadrack@portfolio: ~/contact">
        <p className="prompt font-mono text-sm text-[var(--text-dim)]">cat contact.json</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-mono text-xs text-[var(--green)]">email</dt>
            <dd className="mt-1">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-[var(--green)]">
                {CONTACT.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[var(--green)]">phone</dt>
            <dd className="mt-1">
              <a href={`tel:${CONTACT.phone}`} className="hover:text-[var(--green)]">
                {CONTACT.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[var(--green)]">linkedin</dt>
            <dd className="mt-1">
              <a href={CONTACT.linkedin} className="hover:text-[var(--green)]">
                {CONTACT.linkedin.replace("https://", "")}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-[var(--green)]">github</dt>
            <dd className="mt-1">
              <a href={CONTACT.github} className="hover:text-[var(--green)]">
                {CONTACT.github.replace("https://", "")}
              </a>
            </dd>
          </div>
        </dl>

        <a
          href="/cv.pdf"
          className="mt-6 inline-block rounded-md border border-[var(--green-dim)] bg-[var(--green)] px-5 py-2.5 font-mono text-sm font-semibold text-[var(--bg)] transition-opacity hover:opacity-90"
        >
          ./download-cv
        </a>
      </TerminalWindow>
    </section>
  );
}
