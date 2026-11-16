import { Link } from "react-router-dom";
import { ArrowLeft, Home, Compass } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="py-20 sm:py-32 max-w-xl mx-auto px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto border border-brand-100">
        <Compass className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block">
          404 Error
        </span>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-950">
          Page not found
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-body">
          The case study or page you requested could not be located. It may have been relocated or updated.
        </p>
      </div>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-600 text-white font-display font-semibold text-sm hover:bg-brand-700 transition-colors shadow-2xs min-h-[44px]"
        >
          <Home className="w-4 h-4" aria-hidden="true" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-display font-semibold text-sm hover:bg-slate-50 transition-colors min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Browse Case Studies</span>
        </Link>
      </div>
    </div>
  );
}
