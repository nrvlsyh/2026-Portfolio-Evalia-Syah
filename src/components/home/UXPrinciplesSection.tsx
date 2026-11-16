import { motion } from "motion/react";
import { Brain, Sparkles, Compass, ShieldAlert, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function UXPrinciplesSection() {
  const principles = [
    {
      num: "01",
      title: "Mental Model Alignment",
      subtitle: "Designing for physical floor realities, not Figma ideals",
      principle: "Jakob's Law & Ergonomics",
      accent: {
        bg: "bg-brand-50",
        border: "border-brand-200",
        pill: "bg-brand-500 text-white",
        iconText: "text-brand-600",
        badge: "text-brand-700 bg-brand-100",
      },
      description:
        "Warehouse operators and dispatchers don't think in relational database schemas—they think in physical batches, trucks, pallets, and sorting cages. Software must mirror physical rituals to prevent cognitive friction.",
      appliedIn: "EMS2.0 Hub Scan-Loop (split-second audio/visual cues for barcode verification)",
      link: "/case-studies/ems2-express"
    },
    {
      num: "02",
      title: "Cognitive Load Budgeting",
      subtitle: "One thumb, one decision at a time",
      principle: "Hick's Law & Fitts's Law",
      accent: {
        bg: "bg-slate-50",
        border: "border-slate-200",
        pill: "bg-slate-800 text-honey-300",
        iconText: "text-slate-800",
        badge: "text-slate-800 bg-slate-200",
      },
      description:
        "In stressful or fast-paced situations—like drivers making 60 deliveries in heavy rain—any ambiguity causes errors. We enforce strict progressive disclosure: secondary parameters remain tucked away until needed.",
      appliedIn: "Driver PWA (large swipe-to-complete actions and thumb-accessible primary tasks)",
      link: "/case-studies/ems2-express"
    },
    {
      num: "03",
      title: "Temporal Containment",
      subtitle: "Tools that respect attention rather than addict",
      principle: "Ethical Human-Centered Design",
      accent: {
        bg: "bg-teal-50",
        border: "border-teal-200",
        pill: "bg-teal-600 text-white",
        iconText: "text-teal-700",
        badge: "text-teal-800 bg-teal-100",
      },
      description:
        "Instead of trapping users in endless social feeds, event-based applications should provide instant utility during the live moment, then gracefully transition into quiet, archival mode.",
      appliedIn: "Detik / Arkiv Mobile Concept (live capture during events, passive curation afterward)",
      link: "/case-studies/detik-mobile"
    },
    {
      num: "04",
      title: "Fail-Safe Defensive Design",
      subtitle: "Interception before failure becomes irreversible",
      principle: "Poka-Yoke & Forgiving Interfaces",
      accent: {
        bg: "bg-honey-50",
        border: "border-honey-300",
        pill: "bg-honey-500 text-slate-900",
        iconText: "text-honey-700",
        badge: "text-honey-800 bg-honey-200",
      },
      description:
        "An error caught in the warehouse costs cents; an error caught after a cross-border flight costs thousands. We build defensive gates: duplicate scans alert immediately and missing weights block dispatch.",
      appliedIn: "Automated Exception Intercept & SLA Alerting in EMS2.0",
      link: "/case-studies/ems2-express"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold block">
            UX Psychology & Principles
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-950">
            How I Think & Make Design Decisions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
            Design isn't aesthetic decoration—it is the deliberate removal of friction and uncertainty through proven cognitive ergonomics.
          </p>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-500 bg-sand-100 px-3 py-1.5 rounded-xl border border-sand-200">
          <Brain className="w-4 h-4 text-brand-500" />
          <span>Cognitive Psychology • Field Ergonomics</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((item, idx) => (
          <motion.div
            key={item.num}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className={`p-6 sm:p-7 rounded-2xl border ${item.accent.border} ${item.accent.bg} bg-white flex flex-col justify-between shadow-2xs hover:shadow-md transition-all group`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold text-slate-400">
                  Tenet {item.num}
                </span>
                <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${item.accent.badge}`}>
                  {item.principle}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-body">
                {item.description}
              </p>
            </div>

            <div className="pt-5 mt-5 border-t border-sand-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="text-[11px] text-slate-600">
                <strong className="text-slate-800">Applied in:</strong> {item.appliedIn}
              </div>
              <Link
                to={item.link}
                className="inline-flex items-center gap-1 text-xs font-display font-bold text-brand-600 hover:text-brand-700 shrink-0"
              >
                <span>Inspect</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
