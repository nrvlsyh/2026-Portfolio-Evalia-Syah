import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileDown, Copy, Check, Briefcase, GraduationCap, Wrench, Sparkles, MapPin, Clock } from "lucide-react";
import { profile } from "../../config/profileConfig";
import { handleDownloadCV } from "../../utils/downloadCv";

export function RecruiterDossier() {
  const [activeTab, setActiveTab] = useState<"facts" | "superpowers" | "stack">("facts");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-sand-300 shadow-md p-6 sm:p-7 relative overflow-hidden">
      {/* Decorative top accent gradient bar using Neutral Harmony Bliss palette */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-brand-500 via-honey-400 to-teal-400" />

      <div className="space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-sand-200/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
              Recruiter Quick-Scan (60s TL;DR)
            </span>
          </div>
          <span className="text-[11px] font-mono text-brand-600 font-semibold bg-brand-50 px-2 py-0.5 rounded border border-brand-100">
            {profile.title}
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-sand-100/80 rounded-xl border border-sand-200 text-xs font-display font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("facts")}
            className={`py-1.5 px-2 rounded-lg transition-all cursor-pointer text-center ${
              activeTab === "facts"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Snapshot
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("superpowers")}
            className={`py-1.5 px-2 rounded-lg transition-all cursor-pointer text-center ${
              activeTab === "superpowers"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Core Skills
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("stack")}
            className={`py-1.5 px-2 rounded-lg transition-all cursor-pointer text-center ${
              activeTab === "stack"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Tools
          </button>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "facts" && (
            <motion.div
              key="facts"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="space-y-3 text-xs"
            >
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 bg-sand-50/80 rounded-xl border border-sand-200">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-0.5 font-semibold">Current Role</span>
                  <span className="font-semibold text-slate-900 block leading-tight">Product Designer</span>
                  <span className="text-[11px] text-brand-600 font-medium">Hatio Sea Sdn. Bhd.</span>
                </div>
                <div className="p-3 bg-sand-50/80 rounded-xl border border-sand-200">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-0.5 font-semibold">Education</span>
                  <span className="font-semibold text-slate-900 block leading-tight">M.Sc. Research</span>
                  <span className="text-[11px] text-teal-700 font-medium">UiTM Melaka (Ongoing)</span>
                </div>
              </div>

              <div className="p-3 bg-sand-50/80 rounded-xl border border-sand-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-500 block mb-0.5 font-semibold">Flagship Work</span>
                  <span className="font-bold text-slate-900">EMS2.0 Express</span>
                  <span className="text-[11px] text-slate-600 block">4 Portals • 60+ Screens • 25+ Modules</span>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-1 bg-honey-100 text-honey-700 rounded border border-honey-300">
                  Pre-rollout
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "superpowers" && (
            <motion.div
              key="superpowers"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="space-y-2 text-xs"
            >
              <div className="p-2.5 bg-brand-50/60 rounded-lg border border-brand-100 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-brand-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">1</div>
                <div>
                  <span className="font-bold text-slate-900 block">Multi-Surface Systems IA</span>
                  <span className="text-slate-600 text-[11px]">Synchronizing state across Operator, Driver, Customer & Admin</span>
                </div>
              </div>

              <div className="p-2.5 bg-teal-50/60 rounded-lg border border-teal-100 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-teal-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">2</div>
                <div>
                  <span className="font-bold text-slate-900 block">Physical & Operational Grounding</span>
                  <span className="text-slate-600 text-[11px]">Designing for noise, barcode scanners, and split-second warehouse speed</span>
                </div>
              </div>

              <div className="p-2.5 bg-honey-50/80 rounded-lg border border-honey-200 flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-md bg-slate-800 text-honey-300 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">3</div>
                <div>
                  <span className="font-bold text-slate-900 block">AI Governance & Traceability</span>
                  <span className="text-slate-600 text-[11px]">Structured prompt pipelines backed by non-negotiable human gates</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "stack" && (
            <motion.div
              key="stack"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className="space-y-3 text-xs"
            >
              <div className="flex flex-wrap gap-1.5">
                {profile.verifiedTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-sand-100 text-slate-800 font-mono text-[11px] font-medium border border-sand-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 italic">
                All tools are actively used across client deliverables, research documentation, and code handoff.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quick Action Footer */}
        <div className="pt-2 border-t border-sand-200/80 flex items-center gap-2">
          <a
            href={profile.cvPath}
            download={profile.cvFilename}
            onClick={handleDownloadCV}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-brand-500 text-white font-display font-semibold text-xs hover:bg-brand-600 transition-colors shadow-2xs cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>My Resume</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sand-100 text-slate-800 hover:bg-sand-200 font-display font-semibold text-xs transition-colors border border-sand-300 cursor-pointer"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-teal-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-600" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
