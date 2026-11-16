import type { Key } from "react";
import { CheckCircle2 } from "lucide-react";
import { VerifiedMetric } from "../../types";

interface MetricCardProps {
  metric: VerifiedMetric;
  className?: string;
  key?: Key;
}

export function MetricCard({ metric, className = "" }: MetricCardProps) {
  return (
    <div
      className={`p-6 bg-white rounded-xl border border-slate-200 shadow-sm transition-all hover:border-slate-300 ${className}`}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
          {metric.value}
        </span>
        {metric.isVerifiedFact && (
          <span
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
            title="Verified against canonical project specifications"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
            Verified fact
          </span>
        )}
      </div>
      <div className="font-display font-semibold text-slate-800 text-sm mb-1">
        {metric.label}
      </div>
      <div className="text-xs text-slate-600 leading-relaxed font-body">
        {metric.context}
      </div>
    </div>
  );
}
