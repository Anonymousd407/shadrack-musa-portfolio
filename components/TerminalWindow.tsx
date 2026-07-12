import { ReactNode } from "react";

export default function TerminalWindow({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) {
  return (
    <div className="term">
      <div className="term-bar">
        <span className="term-dot" style={{ background: "var(--red)" }} />
        <span className="term-dot" style={{ background: "var(--amber)" }} />
        <span className="term-dot" style={{ background: "var(--green)" }} />
        <span className="ml-2">{path}</span>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}
