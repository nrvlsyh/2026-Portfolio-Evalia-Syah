import { Link } from "react-router-dom";
import { ArrowRight, Layers, ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projectsData";
import { StatusBadge } from "../components/ui/StatusBadge";
import { Badge } from "../components/ui/Badge";

export function CaseStudiesIndexPage() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl space-y-4"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold block">
          Portfolio & Case Studies
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
          Evidence-based case studies across enterprise logistics, product concepts, research, and AI systems.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-body">
          Each project documents real operational problems, research methodologies, design decisions, and architectural outputs. Projected outcomes remain clearly distinguished from measured facts.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="space-y-8">
        {projects.map((project, index) => {
          const accentBars = [
            "bg-brand-500",
            "bg-teal-500",
            "bg-honey-400",
            "bg-slate-700"
          ];
          const accentColor = accentBars[index % accentBars.length];

          return (
            <motion.article
              key={project.slug}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className={`bg-white rounded-3xl border ${
                project.featured ? "border-brand-300 ring-2 ring-brand-100" : "border-sand-300"
              } p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-all relative overflow-hidden`}
            >
              {/* Top Accent Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 ${accentColor}`} />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pt-2">
                <div className="space-y-4 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-500">
                      Case Study 0{index + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-800 bg-sand-100 px-2.5 py-0.5 rounded-full font-semibold border border-sand-200">
                      {project.projectType}
                    </span>
                    <StatusBadge status={project.snapshot.status} />
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 hover:text-brand-600 transition-colors">
                    <Link to={`/case-studies/${project.slug}`}>
                      {project.cardTitle || project.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
                    {project.cardSummary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="neutral">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Snapshot Metadata Box */}
                <div className="lg:w-72 bg-sand-50/90 p-5 rounded-2xl border border-sand-200 shrink-0 space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Role</span>
                    <span className="font-semibold text-slate-900">{project.snapshot.role}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Timeline</span>
                    <span className="font-semibold text-slate-900">{project.snapshot.timeline}</span>
                  </div>
                  {project.snapshot.scope && (
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Scope</span>
                      <span className="font-semibold text-slate-900">{project.snapshot.scope}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block font-bold">Status</span>
                    <span className="font-semibold text-slate-800">{project.snapshot.status}</span>
                  </div>

                  <Link
                    to={`/case-studies/${project.slug}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 text-white font-display font-semibold text-xs hover:bg-brand-600 transition-colors shadow-2xs mt-2"
                  >
                    <span>Read full case study</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
