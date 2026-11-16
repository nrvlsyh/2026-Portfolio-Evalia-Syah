import { ProcessStep } from "../../types";

interface ProcessTimelineProps {
  steps: ProcessStep[];
  className?: string;
}

export function ProcessTimeline({ steps, className = "" }: ProcessTimelineProps) {
  return (
    <div className={`space-y-4 my-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div
            key={step.stepNumber}
            className="p-5 bg-white rounded-xl border border-slate-200 relative flex flex-col justify-between shadow-xs hover:border-brand-200 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-brand-50 text-brand-700 font-mono font-bold text-xs flex items-center justify-center border border-brand-200">
                  {step.stepNumber}
                </span>
                <span className="text-[11px] font-mono text-slate-600 uppercase tracking-widest font-semibold">
                  Phase 0{step.stepNumber}
                </span>
              </div>
              <h4 className="text-sm font-display font-bold text-slate-900 mb-1.5">
                {step.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-body">
                {step.description}
              </p>
            </div>

            {step.output && (
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-600">
                <span className="font-semibold text-slate-800 block mb-0.5 font-display">Key Output:</span>
                <span className="text-brand-700 font-medium font-body">{step.output}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
