import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 font-mono text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}. Backend Developer.</p>
        <a className="text-mint transition hover:text-star" href="#inicio">
          Volver arriba
        </a>
      </div>
    </footer>
  );
}
