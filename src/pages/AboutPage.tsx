import { Link } from "react-router-dom";
import { ArrowRight, FileDown, GraduationCap, Briefcase, Cpu, Check, Compass, BookOpen, Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "../config/profileConfig";
import { handleDownloadCV } from "../utils/downloadCv";

export function AboutPage() {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Intro Header */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6 pb-8 border-b border-sand-200"
      >
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold block">
            About the Designer
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            Connecting complex systems, operational realities, and human intent.
          </h1>
        </div>

        <p className="text-lg text-slate-700 leading-relaxed font-body">
          I am <strong className="text-slate-900 font-semibold">{profile.name}</strong>, a Product Designer with a background in multimedia computing, human-computer interaction, and enterprise software. My practice centers on translating domain-heavy operational workflows—such as multi-portal logistics and field driver operations—into coherent, structured, and resilient digital products.
        </p>

        {/* Snapshot Profile Card */}
        <div className="p-6 bg-white rounded-3xl border border-sand-300 shadow-xs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div className="p-3 bg-sand-50/80 rounded-2xl border border-sand-200">
            <span className="font-mono text-slate-500 block mb-1 uppercase tracking-wider text-[10px] font-bold">Location</span>
            <span className="font-bold text-slate-900">{profile.location}</span>
          </div>
          <div className="p-3 bg-sand-50/80 rounded-2xl border border-sand-200">
            <span className="font-mono text-slate-500 block mb-1 uppercase tracking-wider text-[10px] font-bold">Current Role</span>
            <span className="font-bold text-slate-900">{profile.title}</span>
            <span className="text-[10px] text-brand-600 block">Hatio Sea Sdn. Bhd.</span>
          </div>
          <div className="p-3 bg-sand-50/80 rounded-2xl border border-sand-200">
            <span className="font-mono text-slate-500 block mb-1 uppercase tracking-wider text-[10px] font-bold">Availability</span>
            <span className="font-bold text-teal-700">{profile.availability}</span>
          </div>
          <div className="p-3 bg-sand-50/80 rounded-2xl border border-sand-200">
            <span className="font-mono text-slate-500 block mb-1 uppercase tracking-wider text-[10px] font-bold">Education</span>
            <span className="font-bold text-slate-900">M.Sc. Research</span>
            <span className="text-[10px] text-teal-700 block">UiTM (Ongoing)</span>
          </div>
        </div>
      </motion.section>

      {/* Design Philosophy */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-brand-600">
          <Compass className="w-5 h-5" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            Design Philosophy: Evidence Over Decoration
          </h2>
        </div>

        <div className="p-6 sm:p-8 bg-white rounded-3xl border border-sand-200 shadow-xs space-y-4 text-slate-700 leading-relaxed text-base font-body">
          <p>
            Digital products become fragile when interface decisions are disconnected from the physical environment in which they are used. In enterprise logistics, an ill-placed scan input or an opaque error state directly causes warehouse bottlenecks, failed manifests, or driver disputes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 bg-brand-50/60 rounded-2xl border border-brand-100">
              <span className="font-display font-bold text-sm text-brand-700 block mb-1">Contextual Grounding</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Watching people do physical work (like warehouse parcel sorting under harsh lights) reveals constraints no specification document ever captures.
              </p>
            </div>
            <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100">
              <span className="font-display font-bold text-sm text-teal-800 block mb-1">Single Authoritative State</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Systems must have one source of truth, but adapt vocabularies and controls to the responsibilities of operators, customers, drivers, and admins.
              </p>
            </div>
            <div className="p-4 bg-honey-50/80 rounded-2xl border border-honey-200">
              <span className="font-display font-bold text-sm text-honey-800 block mb-1">Traceability</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every visual and architectural decision should have an unbroken causal chain back to research, field bottlenecks, or verified heuristics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Mindset */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-teal-700">
          <Briefcase className="w-5 h-5" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            Cross-Functional Collaboration
          </h2>
        </div>

        <p className="text-slate-700 text-base leading-relaxed font-body">
          Designing complex platforms requires continuous partnership with domain specialists who understand edge cases:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-2xl border border-sand-200 shadow-2xs hover:border-brand-200 transition-colors">
            <h3 className="font-display font-bold text-sm text-slate-900 mb-1">
              Operations Leads & Hub Managers
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-body">
              Iterating on scan-loop speed, sorting errors, and exception triage queues to ensure designs hold up during peak dispatch volume.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-sand-200 shadow-2xs hover:border-brand-200 transition-colors">
            <h3 className="font-display font-bold text-sm text-slate-900 mb-1">
              Engineering Leads & Developers
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-body">
              Aligning on shared API schemas, latency constraints, state machine synchronization, and accessible component architectures.
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-sand-200 shadow-2xs hover:border-brand-200 transition-colors">
            <h3 className="font-display font-bold text-sm text-slate-900 mb-1">
              Finance & Compliance Teams
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-body">
              Structuring audit-ready Cash-on-Delivery (COD) reconciliation cycles and statutory customs declaration workflows (ePAM, K1/K2/K3).
            </p>
          </div>
          <div className="p-5 bg-white rounded-2xl border border-sand-200 shadow-2xs hover:border-brand-200 transition-colors">
            <h3 className="font-display font-bold text-sm text-slate-900 mb-1">
              Drivers & Field Agents
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-body">
              Testing touch ergonomics, high-contrast outdoor legibility, and one-handed swipe confirmations under realistic field constraints.
            </p>
          </div>
        </div>
      </section>

      {/* AI-Assisted Design Approach */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-slate-800">
          <Cpu className="w-5 h-5 text-brand-500" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            AI-Assisted Workflow & Systems Thinking
          </h2>
        </div>

        <div className="p-6 bg-sand-100/60 rounded-3xl border border-sand-300">
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-body">
            Rather than viewing AI as a tool for unguided screen generation, I treat it as a constrained collaborator operating inside an externalized knowledge system. By structuring product context, user journeys, screen inventories, and design-system rules into versioned repositories, coding agents can build prototypes rapidly while human designers retain absolute governance over product intent and accessibility.
          </p>
        </div>
      </section>

      {/* Research Mindset & Education */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-brand-600">
          <BookOpen className="w-5 h-5" aria-hidden="true" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
            Academic Research & Evidence Synthesis
          </h2>
        </div>

        <div className="p-6 sm:p-7 bg-white rounded-3xl border border-sand-200 shadow-xs space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-brand-50 rounded-xl border border-brand-100 shrink-0 mt-0.5">
              <GraduationCap className="w-6 h-6 text-brand-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">
                Master of Computer Science (Research)
              </h3>
              <p className="text-xs text-teal-700 font-mono font-semibold">
                Universiti Teknologi MARA (UiTM) Melaka • 2025 – Present (Ongoing)
              </p>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-body">
                Thesis topic: <em>Developing UX Principles for Mobile Applications Using a Design Thinking Approach</em>. Investigating the synthesis of Systematic Literature Reviews with practical mobile prototyping and expert content validity.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-sand-200 flex items-start gap-4">
            <div className="p-2.5 bg-sand-100 rounded-xl border border-sand-200 shrink-0 mt-0.5">
              <GraduationCap className="w-6 h-6 text-slate-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-900">
                Bachelor of Computer Science (Hons.) Multimedia Computing
              </h3>
              <p className="text-xs text-slate-600 font-mono font-medium">
                Universiti Teknologi MARA (UiTM) Melaka • 2020 – 2024 • CGPA 3.60
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Tools */}
      <section className="space-y-4">
        <h2 className="text-xl font-display font-bold text-slate-900">
          Tools & Technologies
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-body">
          Explicitly verified tools employed across project discovery, prototyping, and systems engineering:
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {profile.verifiedTools.map((tool) => (
            <span
              key={tool}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono bg-white text-slate-800 border border-sand-300 shadow-2xs hover:border-brand-300 transition-colors"
            >
              <Check className="w-3.5 h-3.5 text-brand-600" aria-hidden="true" />
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Actions */}
      <section className="pt-6 border-t border-sand-200 flex flex-wrap items-center gap-4">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 text-white font-display font-semibold text-sm hover:bg-brand-600 transition-colors shadow-xs min-h-[44px]"
        >
          <span>Discuss collaboration</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>

        <a
          href={profile.cvPath}
          download={profile.cvFilename}
          onClick={handleDownloadCV}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-sand-300 text-slate-800 font-display font-semibold text-sm hover:bg-sand-50 transition-colors shadow-2xs min-h-[44px] cursor-pointer"
        >
          <FileDown className="w-4 h-4 text-brand-600" aria-hidden="true" />
          <span>My Resume</span>
        </a>
      </section>
    </div>
  );
}
