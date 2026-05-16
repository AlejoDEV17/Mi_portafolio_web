import { skills } from "@/data/portfolio";
import { GlassCard } from "@/components/ui/glass-card";

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <div data-reveal className="mb-12 max-w-3xl">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Herramientas para construir sistemas internos de alto impacto.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <GlassCard key={skill.title} data-reveal className="group p-6 transition duration-500 hover:-translate-y-2 hover:border-mint/35">
                <div className="relative z-10">
                  <div className="mb-8 grid h-14 w-14 place-items-center rounded-2xl border border-mint/30 bg-mint/10 text-mint shadow-glow">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-star">{skill.title}</h3>
                  <p className="mt-4 leading-7 text-mist">{skill.text}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
