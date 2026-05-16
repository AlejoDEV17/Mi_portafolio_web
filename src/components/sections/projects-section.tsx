"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { personalProjects, projects } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/glass-card";
import { buttonClassName } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="relative z-10 px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12 max-w-3xl">
          <p className="section-kicker">Proyectos</p>
          <h2 className="section-title">Productos personales y automatizaciones reales.</h2>
        </div>

        <div data-reveal className="mb-10">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-mint">Proyectos personales</p>
              <h3 className="mt-2 text-3xl font-black text-star">SaaS construido como producto completo.</h3>
            </div>
          </div>
          <div className="grid gap-5">
            {personalProjects.map((project) => (
              <motion.div
                key={project.name}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <GlassCard className="h-full p-6 sm:p-8" intense>
                  <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto]">
                    <div>
                      <div className="mb-8 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1.5 font-mono text-xs font-bold text-mint"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-3xl font-black text-star sm:text-4xl">{project.name}</h4>
                      <p className="mt-4 max-w-3xl leading-7 text-mist">{project.text}</p>
                      <ul className="mt-7 grid gap-3 md:grid-cols-3">
                        {project.impact.map((item) => (
                          <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-mist">
                            <span className="mb-3 block h-1 w-10 rounded-full bg-gradient-to-r from-mint to-plasma" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a
                      className={`${buttonClassName("glass")} h-fit gap-2 whitespace-nowrap`}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver repositorio
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div data-reveal className="mb-6 mt-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-mint">Casos empresariales privados</p>
          <h3 className="mt-2 text-3xl font-black text-star">Automatizaciones aplicadas a procesos internos.</h3>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              data-reveal
              whileHover={{ y: -8, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <GlassCard className="h-full p-6" intense={index === 0}>
                <div className="relative z-10">
                  <div className="mb-8 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1.5 font-mono text-xs font-bold text-mint">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black text-star">{project.name}</h3>
                  <p className="mt-4 max-w-3xl leading-7 text-mist">{project.text}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                    {project.impact.map((item) => (
                      <li key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-mist">
                        <span className="mb-3 block h-1 w-10 rounded-full bg-gradient-to-r from-mint to-plasma" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
