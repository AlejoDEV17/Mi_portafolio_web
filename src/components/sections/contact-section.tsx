"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { buttonClassName } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { contactChannels, profile } from "@/data/portfolio";

export function ContactSection() {
  const [status, setStatus] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Completa todos los campos para abrir Gmail con el mensaje listo.");
      return;
    }

    const subject = encodeURIComponent(`Contacto desde portafolio - ${name}`);
    const body = encodeURIComponent(`${message}\n\nNombre: ${name}\nCorreo: ${email}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`;
    setStatus("Se abrira Gmail en una nueva pestana con el mensaje listo.");
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="relative z-10 px-4 py-28">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div data-reveal>
          <p className="section-kicker">Contacto</p>
          <h2 className="section-title">Listo para oportunidades backend, automatizacion y soluciones internas.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-mist">
            Si quieres conversar sobre una oportunidad o proyecto, puedes escribirme por cualquiera de estos canales.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              return (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 font-mono text-sm font-bold text-star backdrop-blur-xl transition hover:border-mint/40 hover:text-mint"
                >
                  <Icon size={16} />
                  {channel.label}
                </a>
              );
            })}
          </div>
        </div>
        <GlassCard data-reveal className="p-6 sm:p-8" intense>
          <form onSubmit={onSubmit} className="relative z-10 grid gap-5">
            <label className="grid gap-2 font-mono text-sm font-bold text-star">
              Nombre
              <input className="field" name="name" placeholder="Tu nombre" required />
            </label>
            <label className="grid gap-2 font-mono text-sm font-bold text-star">
              Correo
              <input className="field" name="email" type="email" placeholder="correo@email.com" required />
            </label>
            <label className="grid gap-2 font-mono text-sm font-bold text-star">
              Mensaje
              <textarea className="field min-h-40 resize-y" name="message" placeholder="Cuentame sobre la oportunidad o proyecto" required />
            </label>
            <button className={buttonClassName("primary")} type="submit">
              <Send size={17} />
              Abrir Gmail
            </button>
            <p className="min-h-6 font-mono text-sm font-semibold text-mint" role="status">
              {status}
            </p>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
