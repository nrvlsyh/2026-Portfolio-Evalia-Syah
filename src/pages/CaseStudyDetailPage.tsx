import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, ShieldAlert, Layers, Compass, BookOpen, AlertTriangle } from "lucide-react";
import { projects } from "../data/projectsData";
import { assetsManifest } from "../data/assetsManifest";
import { StatusBadge } from "../components/ui/StatusBadge";
import { Badge } from "../components/ui/Badge";
import { MetricCard } from "../components/ui/MetricCard";
import { ProjectedOutcome } from "../components/ui/ProjectedOutcome";
import { DecisionCallout } from "../components/ui/DecisionCallout";
import { InsightCallout } from "../components/ui/InsightCallout";
import { ProcessTimeline } from "../components/ui/ProcessTimeline";
import { ImageFrame } from "../components/ui/ImageFrame";
import { NextProjectNav } from "../components/ui/NextProjectNav";
import { FourPortalsDiagram } from "../components/diagrams/FourPortalsDiagram";
import { HubScanLoopDiagram } from "../components/diagrams/HubScanLoopDiagram";
import { EventLifecycleDiagram } from "../components/diagrams/EventLifecycleDiagram";
import { KnowledgeArchitectureDiagram } from "../components/diagrams/KnowledgeArchitectureDiagram";
import { TraceabilityDiagram } from "../components/diagrams/TraceabilityDiagram";

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article className="py-12 sm:py-16 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. BACK TO WORK LINK */}
      <div className="mb-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-display font-semibold text-slate-600 hover:text-brand-600 transition-colors py-1 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back to all case studies</span>
        </Link>
      </div>

      {/* 2. PROJECT TITLE & SUMMARY */}
      <header className="space-y-4 mb-10">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-mono font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded border border-brand-200">
            {project.projectType}
          </span>
          <StatusBadge status={project.snapshot.status} />
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-950 tracking-tight leading-[1.15]">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 font-body leading-relaxed max-w-3xl">
          {project.subtitle}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="neutral">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* 3. PROJECT SNAPSHOT GRID */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 mb-12 shadow-2xs">
        <h2 className="sr-only">Project Snapshot</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs sm:text-sm">
          <div>
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block mb-1 font-semibold">
              Role
            </span>
            <span className="font-semibold text-slate-900 block">
              {project.snapshot.role}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block mb-1 font-semibold">
              Timeline
            </span>
            <span className="font-semibold text-slate-900 block">
              {project.snapshot.timeline}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block mb-1 font-semibold">
              Platforms / Surface
            </span>
            <span className="font-semibold text-slate-900 block">
              {project.snapshot.platforms?.join(", ") || project.snapshot.productType}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest block mb-1 font-semibold">
              Current Status
            </span>
            <span className="font-semibold text-slate-800 block">
              {project.snapshot.status}
            </span>
          </div>
        </div>
      </section>

      {/* VERIFIED FACTS METRIC STRIP (Only when verified facts exist) */}
      {project.verifiedMetrics && project.verifiedMetrics.length > 0 && (
        <section className="mb-14">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-600 font-bold">
              Verified Project Dimensions
            </span>
            <span className="text-[11px] font-mono text-slate-600 font-medium">
              Documented Scope
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.verifiedMetrics.map((metric, i) => (
              <MetricCard key={i} metric={metric} />
            ))}
          </div>
        </section>
      )}

      {/* 4. HERO MEDIA / DIAGRAM */}
      <section className="mb-14">
        {project.slug === "ems2-express" && (
          <ImageFrame asset={assetsManifest["ems2-hero"]} isInteractiveDiagram>
            <FourPortalsDiagram />
          </ImageFrame>
        )}

        {project.slug === "detik-arkiv" && (
          <ImageFrame asset={assetsManifest["detik-lifecycle"]} isInteractiveDiagram>
            <EventLifecycleDiagram />
          </ImageFrame>
        )}

        {project.slug === "ai-assisted-product-design-workflow" && (
          <ImageFrame asset={assetsManifest["ai-workflow-diagram"]} isInteractiveDiagram>
            <KnowledgeArchitectureDiagram />
          </ImageFrame>
        )}

        {project.slug === "master-research-mobile-ux-principles" && (
          <ImageFrame asset={assetsManifest["masters-traceability"]} isInteractiveDiagram>
            <TraceabilityDiagram />
          </ImageFrame>
        )}
      </section>

      {/* NARRATIVE READING COLUMN (Max 72ch width for optimal legibility) */}
      <div className="max-w-reading mx-auto space-y-14 text-slate-700 text-base font-body leading-relaxed">
        {/* 5. CONTEXT */}
        <section className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
            01. Background & Context
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            Operational Context
          </h2>
          {project.context.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        {/* 6. PROBLEM */}
        <section className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-rose-700 font-bold block">
            02. Problem Space
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            The Core Challenges
          </h2>
          <p>{project.problemOverview}</p>

          <div className="space-y-3 pt-2">
            {project.problems.map((prob, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" aria-hidden="true" />
                  <h3 className="font-display font-bold text-slate-900 text-sm sm:text-base">
                    {prob.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 pl-4 leading-relaxed">
                  {prob.description}
                </p>
              </div>
            ))}
          </div>

          {project.designChallenge && (
            <div className="p-6 bg-brand-50/70 border border-brand-200 rounded-xl my-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-800 block mb-1">
                Design Challenge (How Might We)
              </span>
              <p className="text-base font-display font-bold text-slate-950 italic">
                “{project.designChallenge}”
              </p>
            </div>
          )}
        </section>

        {/* 7. ROLE & SCOPE */}
        <section className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-600 font-bold block">
            03. Responsibility
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            My Role & Scope
          </h2>
          <div className="space-y-3">
            {project.roleAndScope.map((roleItem, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm sm:text-base">{roleItem}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. RESEARCH OR DISCOVERY */}
        <section className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-bold block">
            04. Research & Discovery
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            Discovery & Domain Immersion
          </h2>
          <p>{project.researchAndDiscovery.overview}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.researchAndDiscovery.activities.map((act, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-2xs">
                <h3 className="font-display font-bold text-sm text-slate-900">
                  {act.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. KEY INSIGHTS */}
        <section className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
            05. Evidence & Insights
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            Key Insights
          </h2>
          <div className="space-y-4">
            {project.keyInsights.map((insight, i) => (
              <InsightCallout key={i} insight={insight} index={i} />
            ))}
          </div>
        </section>

        {/* DESIGN PRINCIPLES (If present) */}
        {project.designPrinciples && (
          <section className="space-y-4">
            <h3 className="text-xl font-display font-bold text-slate-950">
              Guiding Design Principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.designPrinciples.map((dp, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-display font-bold text-xs text-brand-800 uppercase tracking-wider mb-1">
                    {dp.title}
                  </h4>
                  <p className="text-xs text-slate-600">{dp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 10. DECISIONS AND RATIONALE */}
        <section className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
            06. Strategic Choices
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            Decisions & Rationale
          </h2>
          <p className="text-sm text-slate-600">
            Key decisions driven by observed operational reality rather than aesthetic assumptions:
          </p>
          <div className="space-y-4">
            {project.decisions.map((decision, i) => (
              <DecisionCallout key={i} decision={decision} index={i} />
            ))}
          </div>
        </section>

        {/* SPECIALIZED INLINE WORKFLOW DIAGRAM FOR EMS2.0 */}
        {project.slug === "ems2-express" && (
          <section className="my-10">
            <ImageFrame asset={assetsManifest["ems2-scan-loop"]} isInteractiveDiagram>
              <HubScanLoopDiagram />
            </ImageFrame>
          </section>
        )}

        {/* 11. PROCESS OR METHODOLOGY */}
        {project.processTimeline && (
          <section className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-bold block">
              07. Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
              Process & Milestones
            </h2>
            <ProcessTimeline steps={project.processTimeline} />
          </section>
        )}

        {/* 12. SOLUTION HIGHLIGHTS */}
        {project.solutionHighlights && (
          <section className="space-y-8">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
              08. Solution Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
              Key System Deliverables
            </h2>
            <div className="space-y-6">
              {project.solutionHighlights.map((sol, i) => (
                <div
                  key={i}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4"
                >
                  <div>
                    <span className="text-xs font-mono font-semibold text-brand-600 uppercase tracking-wider block mb-1">
                      {sol.subtitle}
                    </span>
                    <h3 className="text-xl font-display font-bold text-slate-950">
                      {sol.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-body">
                    {sol.description}
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Delivered Functional Capabilities:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {sol.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 13. VALIDATION */}
        <section className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-700 font-bold block">
            09. Validation & Testing
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            Validation Approach
          </h2>
          <p>{project.validation.overview}</p>
          <div className="space-y-2.5">
            {project.validation.details.map((item, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 14. PROJECTED OUTCOMES NOTICE (Strictly labelled as projected) */}
        <ProjectedOutcome items={project.projectedOutcomes} />

        {/* 15. CONSTRAINTS AND TRADE-OFFS */}
        <section className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold block">
            10. Boundaries & Constraints
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            Constraints & Trade-offs
          </h2>
          <div className="space-y-3">
            {project.constraints.map((c, i) => (
              <div key={i} className="p-5 bg-white rounded-xl border border-slate-200 space-y-1.5 shadow-2xs">
                <h3 className="font-display font-bold text-sm text-slate-900 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600" aria-hidden="true" />
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 16. REFLECTION */}
        <section className="space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-700 font-bold block">
            11. Retrospective
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-950">
            Reflections & Lessons
          </h2>

          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-slate-900">
              Key Lessons Learned
            </h3>
            <ul className="space-y-2 list-disc pl-5 text-sm sm:text-base text-slate-700">
              {project.reflection.learnings.map((lrn, i) => (
                <li key={i}>{lrn}</li>
              ))}
            </ul>
          </div>

          {project.reflection.whatWouldDoDifferently && (
            <div className="p-6 bg-slate-100 rounded-xl border border-slate-200 space-y-3 mt-6">
              <h3 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider text-slate-600">
                What I Would Do Differently Next Time:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 list-disc pl-5">
                {project.reflection.whatWouldDoDifferently.map((diff, i) => (
                  <li key={i}>{diff}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>

      {/* 17. NEXT-PROJECT NAVIGATION */}
      <NextProjectNav currentProject={project} allProjects={projects} />
    </article>
  );
}
