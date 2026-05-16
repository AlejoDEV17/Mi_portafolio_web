"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-void/55 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <a href="#inicio" className="flex items-center gap-3 font-mono text-sm font-bold text-star">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-mint/60 bg-mint/10 text-mint shadow-glow">
            AL
          </span>
          <span className="hidden sm:inline">Alejandro Lozano</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 font-mono text-xs font-semibold text-mist transition hover:bg-white/10 hover:text-mint"
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-star lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            className="mx-auto mt-3 grid max-w-6xl gap-2 rounded-3xl border border-white/10 bg-void/85 p-4 backdrop-blur-2xl lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 font-mono text-sm font-semibold text-mist hover:bg-white/10 hover:text-mint"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
