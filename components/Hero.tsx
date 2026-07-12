"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold"
        >
          Shadrack Musa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-5 text-2xl text-cyan-400"
        >
          Cyber Security Engineer 
        </motion.p>

        <p className="mt-3 text-lg text-gray-400">
          Full Stack Developer • AI Enthusiast
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold hover:bg-cyan-600">
            View Projects
            <ArrowRight size={18} />
          </button>

          <button className="rounded-lg border border-cyan-500 px-6 py-3 hover:bg-cyan-500">
            Download CV
          </button>

        </div>

      </div>
    </section>
  );
}
