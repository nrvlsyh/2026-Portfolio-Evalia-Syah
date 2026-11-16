import type { Key } from "react";
import { Lightbulb } from "lucide-react";
import { InsightItem } from "../../types";

interface InsightCalloutProps {
  insight: InsightItem;
  index?: number;
  className?: string;
  key?: Key;
}

export function InsightCallout({ insight, index, className = "" }: InsightCalloutProps) {
  return (
    <div className={`p-5 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors ${className}`}>
      <div className="flex items-start gap-3">
        <div className="p-1.5 bg-brand-50 text-brand-600 rounded-md shrink-0 mt-0.5" aria-hidden="true">
          <Lightbulb className="w-4 h-4" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            {index !== undefined && (
              <span className="text-xs font-mono font-medium text-slate-600">
                0{index + 1}
              </span>
            )}
            <h4 className="font-display font-semibold text-slate-900 text-sm">
              {insight.title}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
            {insight.description}
          </p>
          {insight.implication && (
            <div className="pt-2 text-xs font-medium text-teal-800 flex items-baseline gap-1.5">
              <span className="font-semibold uppercase tracking-wider text-[10px] text-teal-800">Design Implication:</span>
              <span>{insight.implication}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
