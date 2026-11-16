import { FileText, Filter, Cpu, UserCheck, Check } from "lucide-react";

export function KnowledgeArchitectureDiagram() {
  const layers = [
    {
      step: "01",
      title: "Persistent Knowledge Base",
      icon: FileText,
      tag: "Source of Truth",
      description: "Externalised Markdown files containing system architecture, module boundaries, user journeys, and design tokens stored in git version control.",
      color: "bg-brand-50 text-brand-700 border-brand-200"
    },
    {
      step: "02",
      title: "Scoped Context Packaging",
      icon: Filter,
      tag: "Scope Bounding",
      description: "Isolates only the target module, relevant components, and dependencies needed for the specific task, avoiding context overload and hallucinations.",
      color: "bg-teal-50 text-teal-700 border-teal-200"
    },
    {
      step: "03",
      title: "Assisted Agent Execution",
      icon: Cpu,
      tag: "AI Acceleration",
      description: "Coding agents (Claude Code, Antigravity) and design MCPs generate screens, test suites, or code branches against pre-specified tokens in isolated environments.",
      color: "bg-indigo-50 text-indigo-700 border-indigo-200"
    },
    {
      step: "04",
      title: "Human Review & Audit Gate",
      icon: UserCheck,
      tag: "Mandatory Gate",
      description: "Designer and engineers review generated code/screens against user journeys, accessibility standards, edge cases, and real operational constraints.",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {layers.map((layer) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.step}
              className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${layer.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {layer.tag}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-600 font-medium block mb-0.5">
                  Layer {layer.step}
                </span>
                <h4 className="text-sm font-display font-bold text-slate-900 mb-2">
                  {layer.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {layer.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center gap-3 text-xs text-emerald-900">
        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>
          <strong>Zero Uncontrolled Merge:</strong> AI never writes directly to production branches. Every proposal passes human validation, preventing scope drift and preserving visual integrity.
        </span>
      </div>
    </div>
  );
}
