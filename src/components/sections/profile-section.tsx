import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { profile, stackOrbit, stats } from "@/data/portfolio";
import { assetPath } from "@/lib/assets";

export function ProfileSection() {
  return (
    <section id="perfil" className="relative z-10 px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-10 max-w-4xl">
          <p className="section-kicker">Perfil</p>
          <h2 className="text-balance text-4xl font-black leading-tight text-star sm:text-5xl lg:text-6xl">
            Automatizacion backend para operaciones mas eficientes.
          </h2>
        </div>
        <GlassCard data-reveal className="p-6 sm:p-8" intense>
          <div className="relative z-10 grid gap-8 lg:grid-cols-[180px_1fr]">
            <Image
              src={assetPath("/assets/alejandro-avatar.png")}
              alt="Foto de Alejandro Lozano Restrepo"
              width={180}
              height={180}
              className="h-40 w-40 rounded-[2rem] border border-mint/40 object-cover shadow-glow sm:h-44 sm:w-44 lg:h-[180px] lg:w-[180px]"
              priority
            />
            <div>
              <p className="font-mono text-sm font-semibold text-mint">@{profile.handle}</p>
              <h3 className="mt-2 max-w-2xl text-3xl font-bold leading-tight text-star sm:text-4xl">{profile.name}</h3>
              <p className="mt-4 text-mist">{profile.location}</p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">
                Construyo herramientas internas, bots y servicios backend para que los procesos empresariales sean mas
                rapidos, consistentes y faciles de escalar.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <strong className="block text-2xl text-star">{stat.value}</strong>
                    <span className="text-sm text-mist">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlassCard>
        <div data-reveal>
          <div className="relative mx-auto mt-8 flex min-h-40 max-w-4xl flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
            {stackOrbit.map((item) => (
              <span
                key={item}
                className="rounded-full border border-mint/20 bg-mint/10 px-4 py-2 font-mono text-sm font-semibold text-mint shadow-glow"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
