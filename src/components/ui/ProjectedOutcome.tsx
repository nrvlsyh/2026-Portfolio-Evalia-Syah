import { Info } from "lucide-react";
import { ProjectedOutcomeItem } from "../../types";

interface ProjectedOutcomeProps {
  items: ProjectedOutcomeItem[];
  className?: string;
}

export function ProjectedOutcome({ items, className = "" }: ProjectedOutcomeProps) {
  return (
    <section aria-labelledby="projected-outcomes-heading" className={`my-8 p-6 bg-teal-50/70 border border-teal-200 rounded-xl ${className}`}>
      <div className="flex items-start gap-3 mb-4">
        <div className="p-1.5 bg-teal-100 text-teal-700 rounded-lg shrink-0 mt-0.5" aria-hidden="true">
          <Info className="w-5 h-5" />
        </div>
        <div>
          <span className="inline-block text-[11px] font-display font-bold uppercase tracking-widest text-teal-800 bg-teal-100 px-2 py-0.5 rounded mb-1">
            Design Projections & Expected Benefits
          </span>
          <h4 id="projected-outcomes-heading" className="text-base font-display font-bold text-slate-900">
            Projected Outcomes (Pre-Deployment / In Development)
          </h4>
          <p className="text-xs text-slate-600 mt-0.5">
            These reflect intended operational benefits and design hypotheses derived from expert walkthroughs. They are purposefully labelled as projections until post-deployment telemetry is established.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-teal-200/60">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white/80 p-4 rounded-lg border border-teal-100">
            <h5 className="text-sm font-display font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" aria-hidden="true" />
              {item.title}
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
