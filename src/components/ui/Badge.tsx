import type { ReactNode, Key } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "neutral" | "brand" | "teal";
  className?: string;
  key?: Key;
}

export function Badge({ children, variant = "neutral", className = "" }: BadgeProps) {
  const variantStyles = {
    neutral: "bg-slate-100 text-slate-800 border-slate-200",
    brand: "bg-brand-50 text-brand-800 border-brand-200",
    teal: "bg-teal-50 text-teal-800 border-teal-200"
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 text-xs font-display font-medium rounded-md border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
