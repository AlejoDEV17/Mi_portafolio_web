import { education, experience } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/glass-card";

export function TimelineSection() {
  return (
    <section id="experiencia" className="relative z-10 px-4 py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-reveal>
          <p className="section-kicker">Experiencia</p>
          <h2 className="section-title">Trabajo enfocado en calidad, automatizacion e integracion.</h2>
        </div>
        <div className="grid gap-5">
          {experience.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.company} data-reveal className="p-6">
                <div className="relative z-10 flex gap-5">
                  <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-2xl border border-plasma/30 bg-plasma/10 text-plasma sm:grid">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-plasma">{item.company}</p>
                    <h3 className="mt-2 text-2xl font-bold text-star">{item.role}</h3>
                    <p className="mt-4 leading-7 text-mist">{item.text}</p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      <div id="formacion" className="mx-auto mt-20 grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-reveal>
          <p className="section-kicker">Formacion</p>
          <h2 className="section-title">Base academica y aprendizaje continuo.</h2>
        </div>
        <div className="grid gap-5">
          {education.map((item) => (
            <GlassCard key={item.institution} data-reveal className="p-6">
              <div className="relative z-10">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-mint">{item.program}</p>
                <h3 className="mt-2 text-2xl font-bold text-star">{item.institution}</h3>
                <p className="mt-4 leading-7 text-mist">{item.text}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
