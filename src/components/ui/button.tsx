import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/70 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-mint text-void shadow-glow hover:-translate-y-0.5 hover:bg-white",
        glass:
          "border border-white/15 bg-white/[0.06] text-star backdrop-blur-xl hover:-translate-y-0.5 hover:border-mint/50 hover:bg-white/[0.1]",
        ghost: "text-mist hover:text-star"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}

export function buttonClassName(variant?: VariantProps<typeof buttonVariants>["variant"]) {
  return buttonVariants({ variant });
}
