import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { profile } from "../../config/profileConfig";
import { handleDownloadCV } from "../../utils/downloadCv";

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle ambient cosmic particle drift (acts as instant background and video underlay)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate lightweight stars
    const starCount = 65;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep space base tint
      ctx.fillStyle = "#0B0F17";
      ctx.fillRect(0, 0, width, height);

      // Soft cosmic nebula gradients
      const grad1 = ctx.createRadialGradient(width * 0.25, height * 0.35, 10, width * 0.25, height * 0.35, width * 0.45);
      grad1.addColorStop(0, "rgba(224, 122, 95, 0.12)"); // terracotta glow
      grad1.addColorStop(1, "rgba(11, 15, 23, 0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.8, height * 0.65, 10, width * 0.8, height * 0.65, width * 0.4);
      grad2.addColorStop(0, "rgba(129, 178, 154, 0.1)"); // teal glow
      grad2.addColorStop(1, "rgba(11, 15, 23, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render drifting stars
      stars.forEach((star) => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.alpha * (0.6 + 0.4 * Math.sin(star.twinklePhase));

        ctx.fillStyle = `rgba(244, 241, 238, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 text-white">
      {/* Background Canvas (Cosmic Starfield) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Background Cosmic Video (Muted, Darker, Ambient Loop) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-screen pointer-events-none z-0 transition-opacity duration-1000"
        aria-hidden="true"
      >
        <source
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/5/57/Journey_to_the_Center_of_the_Galaxy.webm/Journey_to_the_Center_of_the_Galaxy.webm.1080p.vp9.webm"
          type="video/webm; codecs=vp9"
        />
        <source
          src="https://upload.wikimedia.org/wikipedia/commons/5/57/Journey_to_the_Center_of_the_Galaxy.webm"
          type="video/webm"
        />
      </video>

      {/* Dark Cinematic Vignette & Ambient Radial Glows */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/60 z-0 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-honey-400/15 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Minimalist Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-40 flex flex-col items-center text-center space-y-8">
        {/* Hero Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-sm">
            Evalia Syah
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-honey-200/90 tracking-wide">
            UX Research, Product Design
          </p>
        </motion.div>

        {/* Clean, Refined Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-base sm:text-lg lg:text-xl text-sand-200/85 leading-relaxed font-body max-w-2xl font-light"
        >
          Designing complex digital systems where user psychology, operational logistics, and technical scale align.
        </motion.p>

        {/* Minimalist Action Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="pt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-display font-semibold text-sm transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 min-h-[46px] group cursor-pointer"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>

          <a
            href={profile.cvPath}
            download={profile.cvFilename}
            onClick={handleDownloadCV}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 backdrop-blur-md font-display font-semibold text-sm transition-all duration-200 shadow-sm min-h-[46px] cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-honey-300" aria-hidden="true" />
            <span>My Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
