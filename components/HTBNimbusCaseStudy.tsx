const findings = [
  {
    title: "SSRF & Cloud Metadata Exposure",
    exploit:
      "The YAML preview endpoint accepted an alternate numeric representation of internal addresses, bypassing URL filtering and exposing temporary instance-role credentials.",
    fix:
      "Validate resolved destination IP addresses and redirects, block metadata endpoints, restrict outbound traffic and enforce least-privilege IAM roles.",
  },
  {
    title: "SQS Queue Authorization",
    exploit:
      "The recovered cloud role permitted messages to be submitted to the internal nimbus-jobs queue, crossing the trust boundary between the web application and worker.",
    fix:
      "Restrict sqs:SendMessage permissions, validate message schemas, and authorize every job before execution.",
  },
  {
    title: "Unsafe YAML Worker Execution",
    exploit:
      "A script field in an SQS job was executed by the worker, providing command execution inside its Linux container.",
    fix:
      "Treat queued jobs as untrusted data. Use safe parsing, fixed job templates, sandboxing and restricted worker permissions.",
  },
  {
    title: "Excessive Cloud Privileges",
    exploit:
      "Worker credentials exposed a root-level identity in the internal AWS-compatible environment, allowing access to CodeBuild management operations.",
    fix:
      "Replace root-level credentials with narrowly scoped workload identities and restrict build administration.",
  },
  {
    title: "Privileged CodeBuild Misconfiguration",
    exploit:
      "A privileged build environment and shell-function environment-variable injection interfered with an identity check in the build workflow.",
    fix:
      "Disable privileged builds by default, protect build specifications, filter unsafe environment variables and verify privileges through trusted APIs.",
  },
  {
    title: "Container Escape to Host Root",
    exploit:
      "The privileged build environment exposed host-facing kernel interfaces and overlay paths, enabling host-level compromise.",
    fix:
      "Remove unnecessary Linux capabilities, restrict kernel interfaces, enforce container security profiles and isolate build hosts.",
  },
];

const commands = [
  {
    title: "Network reconnaissance",
    command:
      "nmap -Pn -sC -sV --top-ports 1000 -T4 -oN Nimbus/nmap_top1000.txt 10.129.245.218",
    output: "22/tcp: OpenSSH 9.6p1\n80/tcp: nginx 1.24.0",
  },
  {
    title: "Web service discovery",
    command: "curl -s http://nimbus.htb/api/v1/health",
    output:
      "The application disclosed aws.nimbus.htb as the internal queue, scheduler and storage endpoint.",
  },
  {
    title: "SQS queue enumeration",
    command:
      "aws --endpoint-url http://127.0.0.1:18080 sqs list-queues",
    output:
      "Queue discovered: nimbus-jobs (internal AWS-compatible service).",
  },
  {
    title: "Internal identity verification",
    command:
      "aws sts get-caller-identity --endpoint-url http://172.18.0.2:4566",
    output:
      "Returned a root-level ARN in the lab's internal AWS-compatible environment.",
  },
  {
    title: "CodeBuild enumeration",
    command:
      "aws codebuild list-projects --endpoint-url http://172.18.0.2:4566",
    output:
      "The write-up subsequently documents successful privileged build execution.",
  },
];

export default function HTBNimbusCaseStudy() {
  return (
    <article
      id="nimbus-case-study"
      className="mt-8 overflow-hidden rounded-2xl border border-cyan-400/25 bg-gradient-to-b from-[#112128] via-[#0c171c] to-[#091216] text-slate-100"
    >
      <header className="border-b border-white/10 p-6 sm:p-8">
        <p className="font-mono text-xs tracking-widest text-cyan-300">
          $ cat nimbus-security-case-study.md
        </p>

        <h3 className="mt-4 text-3xl font-extrabold text-white">
          Nimbus <span className="text-emerald-400">/ Security Case Study</span>
        </h3>

        <p className="mt-3 text-sm text-slate-400">
          Linux · Rooted · 13 October 2026 · 1,105 XP
        </p>

        <p className="mt-5 leading-8 text-slate-200">
          An authorized Hack The Box lab demonstrating how server-side
          request forgery, exposed cloud credentials, unsafe worker
          execution and privileged CI infrastructure can combine into
          complete Linux host compromise.
        </p>

        <div className="mt-6 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-5">
          <h4 className="font-semibold text-cyan-300">
            Documented Attack Chain
          </h4>

          <p className="mt-3 font-mono text-sm leading-8 text-slate-200">
            Nginx → SSRF → Instance Metadata → SQS → Worker Execution
            → Internal Cloud Identity → CodeBuild → Container Escape → Root
          </p>
        </div>
      </header>

      <div className="p-6 sm:p-8">
        <h4 className="text-2xl font-bold text-white">
          Vulnerabilities &amp; Remediation
        </h4>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {findings.map((item, index) => (
            <section
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#111d22] p-5 transition hover:border-emerald-400/40"
            >
              <p className="font-mono text-xs text-cyan-300">
                FINDING {String(index + 1).padStart(2, "0")}
              </p>

              <h5 className="mt-3 text-lg font-bold text-white">
                {item.title}
              </h5>

              <div className="mt-5 border-l-2 border-amber-400 pl-4">
                <p className="text-xs font-bold uppercase text-amber-300">
                  Exploitation Observed
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  {item.exploit}
                </p>
              </div>

              <div className="mt-5 border-l-2 border-emerald-400 pl-4">
                <p className="text-xs font-bold uppercase text-emerald-300">
                  Recommended Mitigation
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-200">
                  {item.fix}
                </p>
              </div>
            </section>
          ))}
        </div>

        <h4 className="mt-12 text-2xl font-bold text-white">
          Technical Commands &amp; Observations
        </h4>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          Selected commands from the original authorized lab.
          Credentials, flags and complete exploit payloads are excluded.
        </p>

        <div className="mt-6 space-y-5">
          {commands.map((item, index) => (
            <section
              key={item.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#071317]"
            >
              <div className="border-b border-white/10 px-5 py-3">
                <p className="font-semibold text-emerald-300">
                  {String(index + 1).padStart(2, "0")}. {item.title}
                </p>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-xs leading-7 text-cyan-200">
                <code>{item.command}</code>
              </pre>

              <p className="whitespace-pre-line border-t border-white/10 px-5 py-4 text-sm leading-7 text-slate-300">
                {item.output}
              </p>
            </section>
          ))}
        </div>

        <footer className="mt-8 border-t border-white/10 pt-5 text-xs leading-7 text-slate-400">
          Evidence: original HTB completion screenshot and technical
          write-up. Machine retirement status is not yet verified.
          Remediation is recommended, not claimed as implemented or tested.
        </footer>
      </div>
    </article>
  );
}
