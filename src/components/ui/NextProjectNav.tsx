import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "../../types";

interface NextProjectNavProps {
  currentProject: Project;
  allProjects: Project[];
}

export function NextProjectNav({ currentProject, allProjects }: NextProjectNavProps) {
  const currentIndex = allProjects.findIndex((p) => p.slug === currentProject.slug);
  const nextIndex = (currentIndex + 1) % allProjects.length;
  const nextProject = allProjects[nextIndex];

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-brand-200 transition-colors group">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-slate-600 block mb-1">
            Next Case Study
          </span>
          <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
            {nextProject.cardTitle || nextProject.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl line-clamp-1 font-body">
            {nextProject.cardSummary}
          </p>
        </div>

        <Link
          to={`/case-studies/${nextProject.slug}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-50 text-brand-700 font-display font-semibold text-sm hover:bg-brand-600 hover:text-white transition-all shrink-0 self-start sm:self-center min-h-[44px]"
        >
          <span>Read case study</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
