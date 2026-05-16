import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  intense?: boolean;
};

export function GlassCard({ className, intense = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/30 backdrop-blur-2xl",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,rgba(112,255,216,.18),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(157,107,255,.14),transparent_32%)]",
        intense && "border-mint/25 bg-white/[0.075] shadow-glow",
        className
      )}
      {...props}
    />
  );
}
