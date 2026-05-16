"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { buttonClassName } from "@/components/ui/button";
import { heroHighlights, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="inicio" className="relative z-10 flex min-h-screen items-center overflow-hidden px-4 pt-28">
      <div className="absolute inset-x-0 top-16 mx-auto h-[34rem] max-w-5xl rounded-full bg-[radial-gradient(circle,rgba(87,215,255,.22),transparent_62%)] blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-xs font-semibold uppercase tracking-[0.26em] text-mint backdrop-blur-xl"
          >
            <Sparkles size={15} />
            {profile.role}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(18px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="max-w-4xl text-balance text-5xl font-black leading-[0.95] text-star drop-shadow-2xl sm:text-7xl lg:text-8xl"
          >
            Soluciones backend y automatizacion para procesos empresariales.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-mist sm:text-xl"
          >
            {profile.summary}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a className={buttonClassName("primary")} href="#proyectos">
              Ver proyectos
            </a>
            <a className={buttonClassName("glass")} href="#contacto">
              Iniciar contacto
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-mint/20 via-plasma/10 to-aurora/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-glow backdrop-blur-2xl">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.24em] text-mint">Perfil profesional</span>
              <span className="rounded-full bg-mint/10 px-3 py-1 font-mono text-xs font-semibold text-mint">disponible</span>
            </div>
            <div className="grid gap-3">
              {heroHighlights.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "grid gap-1 rounded-2xl border border-white/10 bg-void/45 px-4 py-4 text-sm text-mist sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4",
                    index === 0 && "border-mint/30 bg-mint/10 text-star"
                  )}
                >
                  <div>
                    <span className="block font-mono text-[0.68rem] uppercase tracking-[0.2em] text-mint">{item.label}</span>
                    <span className="mt-1 block text-base font-semibold text-star">{item.value}</span>
                  </div>
                  <span className="font-mono text-mint">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <a
        href="#perfil"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-mist backdrop-blur-xl transition hover:text-mint md:flex"
      >
        Explorar
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
