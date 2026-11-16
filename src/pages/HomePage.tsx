import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, ChevronRight, Layers, Eye, FileDown } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "../config/profileConfig";
import { handleDownloadCV } from "../utils/downloadCv";
import { projects } from "../data/projectsData";
import { StatusBadge } from "../components/ui/StatusBadge";
import { Badge } from "../components/ui/Badge";
import { MetricCard } from "../components/ui/MetricCard";
import { DesignerLenses } from "../components/home/DesignerLenses";
import { HeroSection } from "../components/home/HeroSection";
import { RecruiterTLDRSection } from "../components/home/RecruiterTLDRSection";
import { CapabilitiesMindMap } from "../components/home/CapabilitiesMindMap";
import { WorkingApproachFlow } from "../components/home/WorkingApproachFlow";
import { LinkedInVideosSection } from "../components/home/LinkedInVideosSection";

export function HomePage() {
  const emsProject = projects.find((p) => p.slug === "ems2-express")!;

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-hidden">
      {/* 1. MINIMALIST CINEMATIC HERO SECTION (FULL WIDTH) */}
      <HeroSection />

      {/* 2. RECRUITER TL;DR QUICK-SCAN SECTION (WITH PHOTO & STAGGERED POP REVEAL) */}
      <RecruiterTLDRSection />

      {/* 3. INTERACTIVE DESIGNER LENSES (PROGRESSIVE DISCLOSURE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DesignerLenses />
      </section>

      {/* 4. LINKEDIN VIDEOS & KNOWLEDGE SHARING */}
      <LinkedInVideosSection />

      {/* 5. SELECTED WORK SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-sand-200">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold block mb-1">
              Deep-Dive Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900">
              Featured Case Study
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="text-sm font-display font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5 group self-start sm:self-end"
          >
            <span>All case study</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        {/* FLAGSHIP CASE STUDY: EMS2.0 Express */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl border-2 border-brand-200/80 overflow-hidden shadow-md hover:shadow-xl transition-all"
        >
          {/* Top color accent strip */}
          <div className="h-2 bg-linear-to-r from-brand-500 via-honey-400 to-slate-800" />

          <div className="p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-bold border border-brand-200">
                  Flagship Enterprise Work
                </span>
                <StatusBadge status={emsProject.snapshot.status} />
              </div>
              <span className="text-xs font-mono text-slate-600 font-medium">
                {emsProject.snapshot.timeline} • {emsProject.snapshot.region}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight">
                  <Link
                    to={`/case-studies/${emsProject.slug}`}
                    className="hover:text-brand-600 transition-colors"
                  >
                    {emsProject.title}
                  </Link>
                </h3>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-body">
                  {emsProject.heroSummary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {emsProject.tags.map((tag) => (
                    <Badge key={tag} variant="neutral">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Snapshot / Quick Evidence Column */}
              <div className="lg:col-span-4 bg-sand-50/90 p-6 rounded-2xl border border-sand-300 space-y-4 shadow-xs">
                <h4 className="text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
                  Verified Architecture
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-center p-2.5 bg-white rounded-xl border border-sand-200 shadow-2xs">
                    <span className="text-xl font-display font-bold text-brand-600 block">4</span>
                    <span className="text-[10px] text-slate-600 font-semibold">Portals</span>
                  </div>
                  <div className="text-center p-2.5 bg-white rounded-xl border border-sand-200 shadow-2xs">
                    <span className="text-xl font-display font-bold text-slate-900 block">60+</span>
                    <span className="text-[10px] text-slate-600 font-semibold">Screens</span>
                  </div>
                  <div className="text-center p-2.5 bg-white rounded-xl border border-sand-200 shadow-2xs">
                    <span className="text-xl font-display font-bold text-teal-700 block">25+</span>
                    <span className="text-[10px] text-slate-600 font-semibold">Modules</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  Four connected surfaces (Operator, Customer, Driver PWA, Tenant Admin) operating on a single event-stream shipment state.
                </p>
                <Link
                  to={`/case-studies/${emsProject.slug}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-500 text-white font-display font-semibold text-sm hover:bg-brand-600 transition-colors shadow-xs group"
                >
                  <span>Read In-Depth Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Verified Metrics Strip */}
            {emsProject.verifiedMetrics && (
              <div className="pt-6 border-t border-sand-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {emsProject.verifiedMetrics.map((m, idx) => (
                  <MetricCard key={idx} metric={m} />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Navigation to All Case Studies */}
        <div className="flex justify-center pt-2">
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-sm transition-all shadow-sm hover:shadow-md group cursor-pointer"
          >
            <span>All case study</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-honey-300" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 4. CAPABILITIES MIND MAP & ECOSYSTEM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CapabilitiesMindMap />
      </div>

      {/* 6. WORKING APPROACH INTERACTIVE PROCESS FLOW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkingApproachFlow />
      </div>

      {/* 7. CLOSING CALL TO ACTION IN RICH DEEP NAVY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-16 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-lg border border-slate-800">
          {/* Subtle warm glow inside dark banner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="text-xs font-mono uppercase tracking-widest text-honey-300 font-bold px-3 py-1 bg-white/10 rounded-full border border-white/10 inline-block">
              Let's Collaborate
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
              Have a complex product, enterprise workflow, or research challenge to solve?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-body max-w-2xl">
              I am open to discussing full-time product design opportunities, enterprise systems consultations, and research-driven initiatives.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-500 text-white font-display font-semibold text-sm hover:bg-brand-600 transition-all shadow-md min-h-[44px]"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href={profile.cvPath}
                download={profile.cvFilename}
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-display font-semibold text-sm hover:bg-slate-700 transition-colors min-h-[44px] cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-honey-300" aria-hidden="true" />
                <span>My Resume</span>
              </a>

              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-display text-slate-300 hover:text-white transition-colors min-h-[44px]"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-sm font-display text-slate-300 hover:text-white transition-colors min-h-[44px]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
