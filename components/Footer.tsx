export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <p className="mx-auto max-w-5xl px-5 font-mono text-xs text-[var(--text-dim)]">
        © {new Date().getFullYear()} Shadrack Musa — built with Next.js. exit 0
      </p>
    </footer>
  );
}
