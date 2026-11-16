import { useState } from "react";
import { 
  FileDown, 
  Copy, 
  Check, 
  ArrowUpRight
} from "lucide-react";
import { profile } from "../../config/profileConfig";
import { handleDownloadCV } from "../../utils/downloadCv";

export function RecruiterTLDRSection() {
  const [copied, setCopied] = useState(false);
  const photoSrc = profile.avatarUrl || "/assets/WhatsApp Image 2026-09-17 at 12.02.17.jpeg";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      aria-label="TL;DR Summary"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
        {/* Photo: Simple, unboxed, real photo */}
        <div className="shrink-0">
          <div className="relative w-48 sm:w-56 md:w-64 aspect-[3/4] rounded-2xl overflow-hidden bg-sand-200 shadow-sm border border-sand-200/80">
            <img
              src={photoSrc}
              alt={profile.fullName || profile.name}
              loading="eager"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* TL;DR Info: Very precise, short, clean, no card wrapper */}
        <div className="flex-1 space-y-4 text-left">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600">
              TL;DR
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
              Nur Evalia Syah
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-0.5">
              Product Designer @ Hatio Sea &bull; M.Sc. Computer Science Researcher
            </p>
          </div>

          {/* Short, precise bullets */}
          <ul className="space-y-2 text-sm sm:text-base text-slate-700 max-w-2xl">
            <li className="flex items-baseline gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 self-center" />
              <span>
                <strong className="font-semibold text-slate-900">Enterprise Systems: </strong>
                Designed EMS2.0 Express across 4 core portals and 60+ UI states for high-volume logistics.
              </span>
            </li>
            <li className="flex items-baseline gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 self-center" />
              <span>
                <strong className="font-semibold text-slate-900">UX Research: </strong>
                UiTM Melaka M.Sc. candidate researching mobile UX design principles to eliminate field operational errors.
              </span>
            </li>
            <li className="flex items-baseline gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0 self-center" />
              <span>
                <strong className="font-semibold text-slate-900">Strengths: </strong>
                Complex workflow architecture, exception modeling, and adapting AI to accelerate work across multiple R&D workflow explorations.
              </span>
            </li>
          </ul>

          {/* Quick Action Links */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href={profile.cvPath}
              download={profile.cvFilename}
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-display font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <FileDown className="w-4 h-4" aria-hidden="true" />
              <span>My Resume</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sand-100 hover:bg-sand-200 text-slate-800 font-display font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-sand-100 font-display font-medium text-xs sm:text-sm transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
