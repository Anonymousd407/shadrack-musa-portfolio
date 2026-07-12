import TerminalWindow from "./TerminalWindow";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl px-5 py-16"
    >
      <TerminalWindow path="shadrack@portfolio: ~/contact">

        <p className="font-mono text-green-400">
          $ contact --info
        </p>

        <div className="mt-6 space-y-3 text-gray-300">

          <p>
            📧 Email:
            <a
              href="mailto:musashadrack@gmail.com"
              className="ml-2 text-green-400"
            >
              musashadrack@gmail.com
            </a>
          </p>

          <p>
            📱 Phone:
            <span className="ml-2">
              +255 762685086 / +255 624754974
            </span>
          </p>

          <p>
            WhatsApp:
            <span className="ml-2">
              +255 656361374
            </span>
          </p>


          <p>
            GitHub:
            <a
              href="https://github.com/Anonymousd407"
              target="_blank"
              className="ml-2 text-green-400"
            >
              Anonymousd407
            </a>
          </p>


          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/musa-shadrack"
              target="_blank"
              className="ml-2 text-green-400"
            >
              Shadrack Musa
            </a>
          </p>


          <p>
            HackTheBox:
            <span className="ml-2">
              anonymousd407
            </span>
          </p>


          <p>
            Discord:
            <span className="ml-2">
              CEO
            </span>
          </p>

        </div>

      </TerminalWindow>
    </section>
  );
}
