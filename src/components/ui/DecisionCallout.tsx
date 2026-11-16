import type { Key } from "react";
import { Compass } from "lucide-react";
import { DecisionCalloutData } from "../../types";

interface DecisionCalloutProps {
  decision: DecisionCalloutData;
  className?: string;
  index?: number;
  key?: Key;
}

export function DecisionCallout({ decision, className = "", index }: DecisionCalloutProps) {
  return (
    <div
      className={`my-6 p-6 bg-brand-50/50 border border-brand-200 rounded-2xl shadow-xs ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <Compass className="w-4 h-4 text-brand-600" aria-hidden="true" />
        <span className="text-xs font-display font-bold uppercase tracking-wider text-brand-700">
          Decision & Rationale {index !== undefined ? `0${index + 1}` : ""}
        </span>
      </div>

      <div className="space-y-3 text-sm">
        <div>
          <span className="font-semibold block text-xs uppercase tracking-wide text-slate-600 mb-0.5">
            Observation / Evidence
          </span>
          <p className="text-slate-700 leading-relaxed font-body">
            {decision.evidence}
          </p>
        </div>

        <div className="bg-white/90 p-3.5 rounded-lg border border-brand-100">
          <span className="font-semibold block text-xs uppercase tracking-wide text-brand-800 mb-0.5">
            Design Decision
          </span>
          <p className="text-slate-900 font-medium leading-relaxed font-body">
            {decision.decision}
          </p>
        </div>

        <div>
          <span className="font-semibold block text-xs uppercase tracking-wide text-slate-600 mb-0.5">
            Rationale & Trade-off
          </span>
          <p className="text-slate-700 leading-relaxed text-xs sm:text-sm font-body">
            {decision.rationale}
          </p>
        </div>

        {decision.intendedEffect && (
          <div className="pt-2 border-t border-brand-200/60 flex items-center gap-2 text-xs text-brand-800 font-body">
            <span className="font-semibold">Target effect:</span>
            <span>{decision.intendedEffect}</span>
          </div>
        )}
      </div>
    </div>
  );
}
