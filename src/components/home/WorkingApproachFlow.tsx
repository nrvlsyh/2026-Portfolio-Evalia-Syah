import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Target,
  Workflow,
  Palette,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  Sparkles,
  GitBranch,
  Layers,
  ChevronRight,
  FileText,
  Clock,
  UserCheck
} from "lucide-react";

export interface ApproachStep {
  step: string;
  title: string;
  subtitle: string;
  icon: typeof Search;
  description: string;
  deepDive: {
    inputs: string;
    method: string;
    deliverables: string[];
    governingPrinciple: string;
    quote: string;
  };
  colorTheme: {
    accent: string;
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    badgeText: string;
    iconBg: string;
    iconColor: string;
    pulseRing: string;
  };
}

export const APPROACH_STEPS: ApproachStep[] = [
  {
    step: "01",
    title: "Understand the Context",
    subtitle: "Physical Operations & Field Inquiry",
    icon: Search,
    description: "Observe physical warehouse operations, shadow driver routes, interview dispatchers, and inspect regulatory & customs constraints before touching digital wireframes.",
    deepDive: {
      inputs: "Raw operational observations, driver routes, dispatcher shift schedules, physical package manifests",
      method: "Contextual inquiry, field shadowing under ambient noise/sunlight, physical-to-digital touchpoint mapping",
      deliverables: ["Field Shadowing Notes", "Physical Friction Maps", "Temporal Bottleneck Logs"],
      governingPrinciple: "Direct Field Immersion over Cleanroom Assumptions",
      quote: "You cannot design a driver app from an air-conditioned studio without feeling the glare of midday sun and the rush of 120 parcel drops."
    },
    colorTheme: {
      accent: "#E07A5F",
      bg: "bg-brand-50/60",
      border: "border-brand-200 hover:border-brand-400",
      text: "text-brand-900",
      badgeBg: "bg-brand-100",
      badgeText: "text-brand-800",
      iconBg: "bg-brand-500",
      iconColor: "text-white",
      pulseRing: "ring-brand-300"
    }
  },
  {
    step: "02",
    title: "Define the Problem",
    subtitle: "Root Cause & Constraint Framing",
    icon: Target,
    description: "Isolate root causes rather than superficial symptoms. Map failure handoffs between teams and frame tightly bounded 'How Might We' design challenges.",
    deepDive: {
      inputs: "Field observations, exception ticket logs, support desk escalations, COD discrepancy records",
      method: "5-Whys root cause analysis, thematic synthesis, boundary-setting workshops with operations leads",
      deliverables: ["Problem Statement Canvases", "Failure Mode Typology", "Constrained HMW Briefs"],
      governingPrinciple: "Miller's Law & Cognitive Budgeting",
      quote: "When operators make mistakes in parcel sorting, it is almost never human error—it is an information design failure that overloaded their working memory."
    },
    colorTheme: {
      accent: "#3D405B",
      bg: "bg-slate-50",
      border: "border-slate-300 hover:border-slate-500",
      text: "text-slate-900",
      badgeBg: "bg-slate-200",
      badgeText: "text-slate-800",
      iconBg: "bg-slate-800",
      iconColor: "text-honey-300",
      pulseRing: "ring-slate-400"
    }
  },
  {
    step: "03",
    title: "Structure the System",
    subtitle: "Shared States & Multi-Portal IA",
    icon: Workflow,
    description: "Design synchronized state machines, multi-portal role permissions, and clean information architectures so drivers, operators, and finance share one source of truth.",
    deepDive: {
      inputs: "Core parcel lifecycle states, role-permission matrices, ERP database schemas, API contracts",
      method: "State machine diagrams, entity-relationship mapping, multi-surface information architecture blueprints",
      deliverables: ["Unified Parcel State Machine", "Role Taxonomy & ACL", "Portal Navigation Blueprints"],
      governingPrinciple: "Single Source of Truth & Jakob's Law",
      quote: "An enterprise platform isn't just screens; it's a living state machine where every parcel status mutation must reflect synchronously across 4 portals."
    },
    colorTheme: {
      accent: "#81B29A",
      bg: "bg-teal-50/60",
      border: "border-teal-200 hover:border-teal-400",
      text: "text-teal-950",
      badgeBg: "bg-teal-100",
      badgeText: "text-teal-800",
      iconBg: "bg-teal-600",
      iconColor: "text-white",
      pulseRing: "ring-teal-300"
    }
  },
  {
    step: "04",
    title: "Design & Prototype",
    subtitle: "Token-Driven Ergonomics",
    icon: Palette,
    description: "Craft high-fidelity screens, rapid scan loops, and accessible interfaces adhering to design tokens with acoustic and haptic confirmation cues.",
    deepDive: {
      inputs: "State blueprints, tokenized design systems, WCAG 2.2 contrast requirements, target device viewports",
      method: "Component-driven Figma modeling, high-contrast outdoor UI tuning, progressive disclosure prototyping",
      deliverables: ["Interactive High-Fidelity Prototypes", "Scan-Loop Sound/Haptic Specs", "Component Token Libraries"],
      governingPrinciple: "Poka-Yoke Fail-Safes & Fitts's Law",
      quote: "A barcode scan screen isn't about pretty buttons; it's about a 400ms auditory beep and tactile buzz that tells an operator the package is cleared without looking at the screen."
    },
    colorTheme: {
      accent: "#F2CC8F",
      bg: "bg-honey-50/70",
      border: "border-honey-200 hover:border-honey-400",
      text: "text-slate-900",
      badgeBg: "bg-honey-200",
      badgeText: "text-honey-900",
      iconBg: "bg-honey-500",
      iconColor: "text-slate-950",
      pulseRing: "ring-honey-400"
    }
  },
  {
    step: "05",
    title: "Validate with Experts",
    subtitle: "Scenario Audits & Field Stress-Tests",
    icon: CheckCircle2,
    description: "Walk through extreme edge cases with operations supervisors, warehouse sorters, and field drivers under simulated high-volume peak periods.",
    deepDive: {
      inputs: "Interactive prototypes, real parcel manifests, corner-case logs (damaged barcodes, network drops)",
      method: "Task-based usability walkthroughs, expert cognitive walkthroughs, content validity index (CVI) scoring",
      deliverables: ["Usability Scorecards", "CVI Content Validity Ratings", "Exception Friction Hotspots"],
      governingPrinciple: "Content Validity & Heuristic Rigor",
      quote: "Validation isn't asking 'do you like this color?' It is handing a scanner to an operator and timing how quickly they can reroute a mis-sorted container."
    },
    colorTheme: {
      accent: "#E07A5F",
      bg: "bg-brand-50/60",
      border: "border-brand-200 hover:border-brand-400",
      text: "text-brand-900",
      badgeBg: "bg-brand-100",
      badgeText: "text-brand-800",
      iconBg: "bg-brand-600",
      iconColor: "text-white",
      pulseRing: "ring-brand-400"
    }
  },
  {
    step: "06",
    title: "Refine & Govern",
    subtitle: "Living Documentation & Handoff",
    icon: ShieldCheck,
    description: "Iterate based on validation evidence, record architectural decision records (ADRs), and govern design tokens and AI prompt repositories for engineering handoff.",
    deepDive: {
      inputs: "Validation feedback, design QA audits, engineering token synchronization, prompt template versions",
      method: "Design review sign-offs, token synchronization via CI/CD, Markdown prompt repo version control",
      deliverables: ["Living Design System Specs", "Architectural Decision Records", "Versioned AI Prompt Repositories"],
      governingPrinciple: "Human-in-the-Loop Traceability",
      quote: "A design only succeeds when it survives implementation. Clean documentation and design tokens bridge the gap between Figma and production code."
    },
    colorTheme: {
      accent: "#81B29A",
      bg: "bg-teal-50/60",
      border: "border-teal-200 hover:border-teal-400",
      text: "text-teal-950",
      badgeBg: "bg-teal-100",
      badgeText: "text-teal-800",
      iconBg: "bg-teal-700",
      iconColor: "text-white",
      pulseRing: "ring-teal-400"
    }
  }
];

export function WorkingApproachFlow() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = APPROACH_STEPS[activeStepIndex];

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="max-w-3xl space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold block">
          Systematic Methodology
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight">
          How I Approach Complex Product Challenges
        </h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
          A 6-phase journey connecting raw operational chaos to stable, high-performance digital systems.
        </p>
      </div>

      {/* Visual Roadmap / Subway Track */}
      <div className="bg-white rounded-3xl border border-sand-300 shadow-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-100/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl pointer-events-none" />

        {/* Process Subway Line (Responsive on all viewports) */}
        <div className="relative mb-8 lg:mb-10 pb-2">
          {/* Track Line for Desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-1 bg-gradient-to-r from-brand-300 via-teal-300 to-honey-300 rounded-full z-0" />

          {/* Connected Stations */}
          <div className="flex lg:grid lg:grid-cols-6 gap-3 relative z-10 overflow-x-auto lg:overflow-visible pb-2 no-scrollbar">
            {APPROACH_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const IconComp = step.icon;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center group cursor-pointer shrink-0 min-w-[110px] lg:min-w-0"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-2.5 shadow-2xs ${
                      isActive
                        ? `${step.colorTheme.iconBg} ring-4 ${step.colorTheme.pulseRing} scale-110 shadow-md`
                        : "bg-white text-slate-700 border border-sand-300 group-hover:border-brand-400 group-hover:bg-sand-50"
                    }`}
                  >
                    <IconComp
                      className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors ${
                        isActive ? step.colorTheme.iconColor : "text-slate-600 group-hover:text-slate-900"
                      }`}
                    />
                  </div>

                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider mb-1 px-2 py-0.5 rounded-full ${
                      isActive ? `${step.colorTheme.badgeBg} ${step.colorTheme.badgeText}` : "text-slate-500"
                    }`}
                  >
                    Phase {step.step}
                  </span>

                  <span
                    className={`text-xs font-display font-bold leading-tight max-w-[130px] line-clamp-2 transition-colors ${
                      isActive ? "text-slate-950 font-extrabold" : "text-slate-700 group-hover:text-slate-900"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.step}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`p-6 sm:p-8 rounded-3xl border ${activeStep.colorTheme.border} ${activeStep.colorTheme.bg} shadow-xs relative overflow-hidden`}
          >
            {/* Top Accent Stripe */}
            <div
              className="absolute top-0 left-0 right-0 h-1.5"
              style={{ backgroundColor: activeStep.colorTheme.accent }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Phase Identity & Principle */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${activeStep.colorTheme.iconBg}`}
                  >
                    {(() => {
                      const IconComponent = activeStep.icon;
                      return <IconComponent className={`w-6 h-6 ${activeStep.colorTheme.iconColor}`} />;
                    })()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${activeStep.colorTheme.badgeBg} ${activeStep.colorTheme.badgeText}`}
                      >
                        Phase {activeStep.step}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        {activeStep.subtitle}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-950 mt-1">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-body">
                  {activeStep.description}
                </p>

                {/* Direct Quote from practice */}
                <div className="p-4 bg-white/90 rounded-2xl border border-sand-200 shadow-2xs">
                  <p className="text-xs sm:text-sm text-slate-700 italic font-body leading-relaxed">
                    “{activeStep.deepDive.quote}”
                  </p>
                  <div className="mt-2 text-[11px] font-mono text-slate-500 font-semibold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                    <span>Principle: {activeStep.deepDive.governingPrinciple}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Breakdown (Full Height & Centered Content) */}
              <div className="lg:col-span-6 flex flex-col h-full">
                {/* Method & Inputs */}
                <div className="h-full p-6 sm:p-7 bg-white/90 rounded-2xl border border-sand-200 shadow-2xs text-xs flex flex-col justify-center space-y-4">
                  <div>
                    <span className="font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1.5 text-[10px]">
                      Operational Inputs & Data
                    </span>
                    <p className="text-slate-800 font-medium leading-relaxed font-body text-xs sm:text-sm">
                      {activeStep.deepDive.inputs}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-sand-100">
                    <span className="font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1.5 text-[10px]">
                      Applied Methods
                    </span>
                    <p className="text-slate-800 font-medium leading-relaxed font-body text-xs sm:text-sm">
                      {activeStep.deepDive.method}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Next/Prev controls */}
            <div className="mt-6 pt-5 border-t border-sand-200/80 flex items-center justify-between">
              <button
                type="button"
                onClick={() =>
                  setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : APPROACH_STEPS.length - 1))
                }
                className="text-xs font-display font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                ← Previous Step
              </button>
              <span className="text-xs font-mono font-bold text-slate-500">
                Step {activeStepIndex + 1} of {APPROACH_STEPS.length}
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveStepIndex((prev) => (prev < APPROACH_STEPS.length - 1 ? prev + 1 : 0))
                }
                className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-brand-600 hover:text-brand-700 cursor-pointer"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
