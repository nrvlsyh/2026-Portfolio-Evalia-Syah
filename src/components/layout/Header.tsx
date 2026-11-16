import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, FileDown } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "../../config/profileConfig";
import { handleDownloadCV } from "../../utils/downloadCv";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const isCaseStudyDetail = location.pathname.startsWith("/case-studies/") && location.pathname !== "/case-studies";

  // Track scroll progress on case study pages
  useEffect(() => {
    if (!isCaseStudyDetail) {
      setReadingProgress(0);
      return;
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isCaseStudyDetail, location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close mobile menu & focus management
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "Work", path: "/case-studies" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/case-studies") {
      return location.pathname === "/case-studies" || location.pathname.startsWith("/case-studies/");
    }
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-sand-200 shadow-xs transition-colors">
      {/* Dynamic Reading Progress Bar for Case Studies */}
      {isCaseStudyDetail && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-sand-200 overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-brand-500 via-honey-400 to-teal-400"
            style={{ width: `${readingProgress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Designer Name & Role */}
        <Link
          to="/"
          className="group flex flex-col focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:outline-none rounded-lg py-1 px-1.5 -ml-1.5 transition-all"
          aria-label="Evalia Syah - Portfolio Home"
        >
          <span className="font-display font-bold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
            {profile.name}
          </span>
          <span className="text-xs font-medium text-slate-500 tracking-wide">
            {profile.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-display font-medium rounded-lg transition-all min-h-[44px] flex items-center ${
                  active
                    ? "text-brand-600 font-semibold bg-brand-50/70"
                    : "text-slate-700 hover:text-slate-900 hover:bg-sand-100/70"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          <div className="h-5 w-px bg-sand-200 mx-2" aria-hidden="true" />

          {/* Download Resume Button */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={profile.cvPath}
            download={profile.cvFilename}
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-display font-semibold rounded-lg bg-brand-500 text-white hover:bg-brand-600 transition-all shadow-xs min-h-[44px] hover:shadow-md cursor-pointer"
            aria-label={`Download ${profile.name}'s Resume as PDF`}
          >
            <FileDown className="w-4 h-4" aria-hidden="true" />
            <span>My Resume</span>
          </motion.a>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={profile.cvPath}
            download={profile.cvFilename}
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-display font-semibold rounded-md bg-sand-100 text-slate-800 hover:bg-sand-200 min-h-[44px] cursor-pointer"
            aria-label="Download Resume as PDF"
          >
            <FileDown className="w-3.5 h-3.5 text-brand-600" aria-hidden="true" />
            <span>Resume</span>
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-lg text-slate-700 hover:bg-sand-100 focus-visible:ring-2 focus-visible:ring-brand-500 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Dimmed Overlay Behind Mobile Dropdown to block clicks through and close on tap */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-20 bg-slate-900/60 z-40 md:hidden backdrop-blur-xs"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Dropdown Menu with 100% Solid Opaque Background */}
      {isMenuOpen && (
        <div
          id="mobile-navigation-menu"
          ref={mobileNavRef}
          className="absolute top-full left-0 right-0 w-full bg-[#FAF8F4] z-50 p-5 flex flex-col gap-4 border-b-2 border-brand-500 shadow-2xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-lg font-display transition-colors min-h-[48px] flex items-center cursor-pointer ${
                    active
                      ? "text-brand-600 font-bold bg-brand-50"
                      : "text-slate-800 font-medium hover:text-brand-600 hover:bg-sand-100 active:bg-sand-200"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-sand-200 space-y-3">
            <a
              href={profile.cvPath}
              download={profile.cvFilename}
              onClick={() => {
                handleDownloadCV();
                setIsMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-display font-bold text-sm transition-colors shadow-sm min-h-[44px] cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-honey-300" aria-hidden="true" />
              <span>My Resume</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{profile.location} &bull; {profile.availability}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
