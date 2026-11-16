import { Link } from "react-router-dom";
import { ArrowUpRight, FileDown } from "lucide-react";
import { profile } from "../../config/profileConfig";
import { handleDownloadCV } from "../../utils/downloadCv";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Descriptor */}
          <div className="md:col-span-6 space-y-4">
            <Link
              to="/"
              className="inline-block font-display font-bold text-xl text-white tracking-tight hover:text-brand-400 transition-colors"
            >
              {profile.name}
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-body">
              {profile.title} specialising in complex enterprise systems, operational logistics UX, research-driven methodologies, and context-aware AI product workflows.
            </p>
            <p className="text-xs text-brand-300 font-mono italic">
              “Designed with evidence, clarity, and systems thinking.”
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors py-1 inline-block">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors py-1 inline-block">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors py-1 inline-block">
                  Contact & Collaborate
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & CV */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-300 font-bold">
              Connect & Profile
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={profile.cvPath}
                  download={profile.cvFilename}
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-1.5 text-brand-400 hover:text-brand-300 transition-colors py-1 font-semibold cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>My Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {profile.fullName || profile.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            <span>Location: {profile.location}</span>
            <span className="mx-2" aria-hidden="true">•</span>
            <span>{profile.availability}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
