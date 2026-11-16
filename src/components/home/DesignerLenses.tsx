import { useState, useRef, type MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Layers, 
  Smartphone, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2 
} from "lucide-react";

interface LensSlide {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  icon: typeof Layers;
  deliverable: string;
  caseStudySlug: string;
  highlights: {
    label: string;
    text: string;
  }[];
  colorTheme: {
    accentText: string;
    badgeBg: string;
    badgeBorder: string;
    badgeText: string;
    cursorGlow: string;
    ambientGradient: string;
    activeIndicator: string;
  };
}

export function DesignerLenses() {
  const slides: LensSlide[] = [
    {
      id: "systems",
      badge: "Enterprise Logistics",
      title: "The Systems Architect",
      tagline: "Software engineered for warehouse speed, noisy environments, and exception recovery.",
      icon: Layers,
      deliverable: "EMS2.0 Express Logistics (4 Portals • 60+ UI States)",
      caseStudySlug: "ems2-express",
      highlights: [
        {
          label: "4 Portals",
          text: "Operator, Driver, Customer & Admin consoles unified."
        },
        {
          label: "Sub-Second Scans",
          text: "Barcode feedback loops that eliminate duplicate scans."
        },
        {
          label: "Fail-Safe Routing",
          text: "Pre-mapped paths for lost packages & offline drivers."
        }
      ],
      colorTheme: {
        accentText: "text-sky-400",
        badgeBg: "bg-sky-500/15",
        badgeBorder: "border-sky-400/30",
        badgeText: "text-sky-300",
        cursorGlow: "rgba(56, 189, 248, 0.18)",
        ambientGradient: "from-sky-900/25 via-slate-900/40 to-slate-950",
        activeIndicator: "bg-sky-400"
      }
    },
    {
      id: "research",
      badge: "Human Cognition & Mobile",
      title: "The UX Researcher",
      tagline: "Research-backed mobile heuristics that eliminate cognitive fatigue and operational slips.",
      icon: Smartphone,
      deliverable: "UiTM Master's Research & Detik Mobile Architecture",
      caseStudySlug: "detik-mobile",
      highlights: [
        {
          label: "UiTM Research",
          text: "Empirical UX principles minimizing operational errors."
        },
        {
          label: "Thumb Reach",
          text: "Key actions placed within natural one-hand zones."
        },
        {
          label: "Zero Clutter",
          text: "Distraction-free views eliminating cognitive fatigue."
        }
      ],
      colorTheme: {
        accentText: "text-teal-300",
        badgeBg: "bg-teal-500/15",
        badgeBorder: "border-teal-400/30",
        badgeText: "text-teal-300",
        cursorGlow: "rgba(45, 212, 191, 0.18)",
        ambientGradient: "from-teal-950/30 via-slate-900/40 to-slate-950",
        activeIndicator: "bg-teal-400"
      }
    },
    {
      id: "ai",
      badge: "AI & R&D Velocity",
      title: "The AI-Fluent Designer",
      tagline: "Adapting AI to accelerate workflow exploration across multiple R&D branches with strict gating.",
      icon: Sparkles,
      deliverable: "AI-Assisted Workflow with 4-Layer Human Verification",
      caseStudySlug: "ai-workflow",
      highlights: [
        {
          label: "Multi-Branch R&D",
          text: "Rapid exploration of 10+ workflow directions."
        },
        {
          label: "Edge Stress Tests",
          text: "Automated checks for empty states & network loss."
        },
        {
          label: "Human Verified",
          text: "Strict quality gates ensuring zero hallucinations."
        }
      ],
      colorTheme: {
        accentText: "text-amber-300",
        badgeBg: "bg-amber-500/15",
        badgeBorder: "border-amber-400/30",
        badgeText: "text-amber-300",
        cursorGlow: "rgba(251, 191, 36, 0.18)",
        ambientGradient: "from-amber-950/25 via-slate-900/40 to-slate-950",
        activeIndicator: "bg-amber-400"
      }
    }
  ];

  const [[currentIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = slides[currentIndex];
  const Icon = current.icon;

  const paginate = (newDirection: number) => {
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = slides.length - 1;
    if (nextIndex >= slides.length) nextIndex = 0;
    setPage([nextIndex, newDirection]);
  };

  const setSlideDirect = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    const newDir = targetIndex > currentIndex ? 1 : -1;
    setPage([targetIndex, newDir]);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (!isHovered) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 70 : -70,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 70 : -70,
      opacity: 0,
    }),
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-800 transition-colors duration-700 select-none"
    >
      {/* 1. Looping Muted Abstract Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105"
        >
          <source src="/assets/ambient-bg.mp4" type="video/mp4" />
          <source src="/assets/ambient-bg.webm" type="video/webm" />
        </video>
        {/* Dynamic color gradient wash blending with current slide */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${current.colorTheme.ambientGradient} opacity-75 transition-colors duration-700`}
        />
        {/* Subtle grid pattern texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
          aria-hidden="true" 
        />
      </div>

      {/* 2. Cursor-Following Glow Light */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0.35,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, ${current.colorTheme.cursorGlow}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* 3. Main Content Container */}
      <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[480px]">
        {/* Top Header Bar: Title */}
        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-1">
              Interactive Perspective
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              Design Lenses & Core Approaches
            </h3>
          </div>
        </div>

        {/* Carousel Slide Area with Horizontal Gesture/Swipe Support */}
        <div className="relative my-6 overflow-hidden min-h-[260px] sm:min-h-[220px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 320, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_e, { offset, velocity }) => {
                const swipeThreshold = 50;
                if (offset.x < -swipeThreshold || velocity.x < -400) {
                  paginate(1);
                } else if (offset.x > swipeThreshold || velocity.x > 400) {
                  paginate(-1);
                }
              }}
              className="cursor-grab active:cursor-grabbing grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left Column: Heading & Concise Pitch */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold border backdrop-blur-md ${current.colorTheme.badgeBg} ${current.colorTheme.badgeBorder} ${current.colorTheme.badgeText}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{current.badge}</span>
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-snug">
                  {current.title}
                </h4>

                <p className="text-sm text-slate-300 font-body leading-relaxed max-w-md">
                  {current.tagline}
                </p>
              </div>

              {/* Right Column: 3 Side-by-Side Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {current.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800/90 p-4 flex flex-col justify-start hover:border-slate-700/90 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 ${current.colorTheme.accentText}`}
                        aria-hidden="true"
                      />
                      <span className="text-xs font-bold text-white font-display">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-body leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Toolbar: Prev / Next Buttons & Indicators */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSlideDirect(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  idx === currentIndex
                    ? `w-7 h-2 ${current.colorTheme.activeIndicator}`
                    : "w-2 h-2 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Easy Desktop & Mobile Clickable Prev / Next Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all cursor-pointer min-h-[42px] min-w-[42px] flex items-center justify-center active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="p-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-all cursor-pointer min-h-[42px] min-w-[42px] flex items-center justify-center active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
