export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-900 text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12">

        {/* LEFT */}

        <div className="flex justify-center">

          <div className="w-72 h-72 rounded-full bg-cyan-500/20 border-4 border-cyan-500 flex items-center justify-center">

            <span className="text-8xl">👨🏾‍💻</span>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <h2 className="text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 leading-8">

            I'm Shadrack Musa, a Cyber Security and Digital
            Forensics Engineering student at the University
            of Dodoma.

          </p>

          <p className="text-gray-300 mt-5 leading-8">

            I build secure web applications, AI-powered
            systems, penetration testing labs and modern
            full-stack software.

          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-slate-800 rounded-xl p-5">

              <h3 className="font-bold text-cyan-400">
                University
              </h3>

              <p>University of Dodoma</p>

            </div>

            <div className="bg-slate-800 rounded-xl p-5">

              <h3 className="font-bold text-cyan-400">
                Program
              </h3>

              <p>CSDFE</p>

            </div>

            <div className="bg-slate-800 rounded-xl p-5">

              <h3 className="font-bold text-cyan-400">
                Experience
              </h3>

              <p>Full Stack Developer</p>

            </div>

            <div className="bg-slate-800 rounded-xl p-5">

              <h3 className="font-bold text-cyan-400">
                Focus
              </h3>

              <p>Cyber Security</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
