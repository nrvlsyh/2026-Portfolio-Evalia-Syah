import {
  Compass,
  Sliders,
  Eye,
  Boxes,
  Sparkles,
  Layers,
  Bot
} from "lucide-react";

export const CAPABILITIES = [
  {
    title: "Product Strategy & Systems Thinking",
    icon: Compass,
    description: "Framing complex product ecosystems, multi-sided platforms, and temporal lifecycles while aligning business objectives and technical constraints to user value.",
    iconColor: "text-brand-600",
    iconBg: "bg-brand-50"
  },
  {
    title: "Enterprise & Operational UX",
    icon: Sliders,
    description: "Designing data-dense, mission-critical workflows, exception triage queues, hub scan loops, and financial reconciliation tools for high-volume enterprise operations.",
    iconColor: "text-brand-700",
    iconBg: "bg-brand-50"
  },
  {
    title: "UX Research & Workflow Mapping",
    icon: Eye,
    description: "Conducting on-site contextual observation, driver shadowing, physical-to-digital journey mapping, and thematic analysis to isolate systemic friction.",
    iconColor: "text-teal-700",
    iconBg: "bg-teal-50"
  },
  {
    title: "Information Architecture",
    icon: Boxes,
    description: "Structuring multi-portal architectures, shared data models, state machines, role-permission matrices, and clear navigation taxonomies across large systems.",
    iconColor: "text-teal-700",
    iconBg: "bg-teal-50"
  },
  {
    title: "Interaction Design & Prototyping",
    icon: Sparkles,
    description: "Crafting responsive, accessible interfaces with ergonomic consideration, scan-loop feedback, progressive disclosure, and rapid prototyping in Figma and React.",
    iconColor: "text-honey-700",
    iconBg: "bg-honey-50"
  },
  {
    title: "Design Systems & Tokens",
    icon: Layers,
    description: "Building unified token foundations, reusable component libraries, accessibility standards, and governance processes to ensure operational consistency.",
    iconColor: "text-honey-700",
    iconBg: "bg-honey-50"
  },
  {
    title: "AI-Assisted Prototyping & Delivery",
    icon: Bot,
    description: "Leveraging coding agents and LLMs within structured knowledge bases and scoped orchestration workflows while maintaining human design governance.",
    iconColor: "text-slate-700",
    iconBg: "bg-sand-100"
  }
];

export function CapabilitiesMindMap() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="max-w-2xl space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold block">
          Core Competencies
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight">
          Design & Systems Capabilities
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
          Grounded in verified project deliverables—spanning operational logistics, field research, design systems, and workflow engineering.
        </p>
      </div>

      {/* Lightweight, Non-interactive Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CAPABILITIES.map((cap) => {
          const IconComp = cap.icon;
          return (
            <div
              key={cap.title}
              className="p-6 bg-white rounded-2xl border border-sand-200 shadow-2xs hover:border-sand-300 hover:shadow-xs transition-all space-y-3"
            >
              <div
                className={`w-10 h-10 rounded-xl ${cap.iconBg} ${cap.iconColor} flex items-center justify-center shrink-0`}
              >
                <IconComp className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 leading-snug">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body">
                {cap.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
