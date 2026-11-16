import { ProjectStatus } from "../../types";

interface StatusBadgeProps {
  status: ProjectStatus;
  className?: string;
}

export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  let styleClasses = "bg-slate-100 text-slate-700 border-slate-200";
  let dotClasses = "bg-slate-400";

  switch (status) {
    case "Pre-deployment":
      styleClasses = "bg-amber-50 text-amber-800 border-amber-200";
      dotClasses = "bg-amber-500";
      break;
    case "In development":
      styleClasses = "bg-teal-50 text-teal-800 border-teal-200";
      dotClasses = "bg-teal-500";
      break;
    case "Evolving methodology":
      styleClasses = "bg-brand-50 text-brand-800 border-brand-200";
      dotClasses = "bg-brand-600";
      break;
    case "Ongoing research":
      styleClasses = "bg-indigo-50 text-indigo-800 border-indigo-200";
      dotClasses = "bg-indigo-500";
      break;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-display font-semibold rounded-full border ${styleClasses} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotClasses}`} aria-hidden="true" />
      <span>{status}</span>
    </span>
  );
}
