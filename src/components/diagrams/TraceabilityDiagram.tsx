import { BookOpen, AlertCircle, HelpCircle, Compass, Layers, CheckSquare } from "lucide-react";

export function TraceabilityDiagram() {
  const chain = [
    {
      step: "01",
      title: "Literature Evidence",
      icon: BookOpen,
      category: "SLR Protocol",
      description: "Synthesis of mobile HCI papers, usability heuristics, and ISO standards via systematic screening.",
      example: "High error rates during thumb-driven form completion under mobility."
    },
    {
      step: "02",
      title: "UX Problem / Need",
      icon: AlertCircle,
      category: "Empirical Context",
      description: "Translation of broad literature into contextual student/user friction points.",
      example: "Users mistap destructive actions due to cramped thumb reach zones."
    },
    {
      step: "03",
      title: "How Might We?",
      icon: HelpCircle,
      category: "Design Thinking",
      description: "Actionable problem framing bridging research insights to interface exploration.",
      example: "How might we design error-forgiving critical actions within thumb reach?"
    },
    {
      step: "04",
      title: "UX Principle",
      icon: Compass,
      category: "Formulation",
      description: "Derivation of specific, actionable behavioral criteria.",
      example: "Principle: Safe Thumb Reach & Explicit Intent Confirmation."
    },
    {
      step: "05",
      title: "Annotated Prototype",
      icon: Layers,
      category: "Concrete Artifact",
      description: "Interactive mobile UI demonstrating concrete adherence to the formulated principle.",
      example: "48px target size, bottom navigation anchor, & 5-second undo toast."
    },
    {
      step: "06",
      title: "Evaluation & Validation",
      icon: CheckSquare,
      category: "Ongoing Validation",
      description: "Expert content-validity evaluation followed by task-based empirical user testing.",
      example: "Content validity index (CVI) by HCI experts + user completion testing."
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {chain.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-100">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    Stage {item.step}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-indigo-700 font-semibold uppercase tracking-wider block mb-0.5">
                  {item.category}
                </span>
                <h4 className="text-sm font-display font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-3 font-body">
                  {item.description}
                </p>
              </div>

              <div className="pt-2.5 border-t border-slate-100 text-[11px] bg-slate-50 p-2 rounded border border-slate-100/60">
                <span className="font-semibold text-slate-600 block mb-0.5">Concrete Example:</span>
                <span className="text-slate-800 font-medium italic">{item.example}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3.5 bg-indigo-50/70 border border-indigo-100 rounded-lg text-xs text-indigo-900 flex items-center justify-between">
        <span>
          <strong>Traceability Guarantee:</strong> Eliminates guesswork by maintaining a direct causal line from academic literature to interface elements.
        </span>
        <span className="text-indigo-700 font-mono text-[11px]">
          Research in Progress
        </span>
      </div>
    </div>
  );
}
