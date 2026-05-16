"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, input, textarea")));
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden mix-blend-screen transition-transform duration-150 md:block"
      style={{ transform: `translate3d(${position.x - 18}px, ${position.y - 18}px, 0) scale(${active ? 1.65 : 1})` }}
    >
      <div className="h-9 w-9 rounded-full border border-mint/70 bg-mint/10 shadow-[0_0_28px_rgba(112,255,216,.35)]" />
    </div>
  );
}
