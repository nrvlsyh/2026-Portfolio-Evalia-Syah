import { useState } from "react";
import { ArrowUpRight, Play, Video } from "lucide-react";
import { profile } from "../../config/profileConfig";
import journeyParcelsThumb from "../../assets/images/linkedin_journey_of_parcels.jpg";
import slrMethodThumb from "../../assets/images/linkedin_slr_method.jpg";
import gapsToSolutionThumb from "../../assets/images/linkedin_gaps_to_solution.jpg";

interface LinkedInVideo {
  id: string;
  index: string;
  title: string;
  topic: string;
  description: string;
  url: string;
  thumbnail: string;
  thumbnailAlt: string;
  bgClass: string;
}

const linkedInVideos: LinkedInVideo[] = [
  {
    id: "journey-of-parcels",
    index: "01",
    title: "Journey of Parcels",
    topic: "Logistics UX",
    description:
      "Walkthrough of what happens behind the scenes after placing an online order—from order creation and pickup to hub sorting and last-mile delivery.",
    url: "https://lnkd.in/p/gXWUxNxM",
    thumbnail: journeyParcelsThumb,
    thumbnailAlt: "LinkedIn video thumbnail: Ever wondered what happens after you place an order online?",
    bgClass: "bg-[#11214a]",
  },
  {
    id: "systematic-literature-review",
    index: "02",
    title: "Conduct Systematic Literature Review",
    topic: "UX Research",
    description:
      "Sharing how I use the Systematic Literature Review (SLR) method with Scopus search strings and AI screening tools for M.Sc. thesis research.",
    url: "https://lnkd.in/p/gceFrgZH",
    thumbnail: slrMethodThumb,
    thumbnailAlt: "LinkedIn video thumbnail: For Students! Systematic Literature Review walkthrough",
    bgClass: "bg-black",
  },
  {
    id: "from-gaps-to-solution",
    index: "03",
    title: "From Gaps to Solution",
    topic: "Design Thinking",
    description:
      "Turning messy stakeholder notes into one unified Express Management System flow—mapping operational gaps, shared core processes, and business rules.",
    url: "https://lnkd.in/p/gJnScX6C",
    thumbnail: gapsToSolutionThumb,
    thumbnailAlt: "LinkedIn video thumbnail: EMS2.0 UX Process — From messy notes to one standard flow",
    bgClass: "bg-[#141722]",
  },
];

function VideoThumbnail({ video }: { video: LinkedInVideo }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative aspect-video w-full overflow-hidden ${video.bgClass} border-b border-sand-200`}>
      {!imgError ? (
        <img
          src={video.thumbnail}
          alt={video.thumbnailAlt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
        />
      ) : (
        <div className="w-full h-full bg-linear-to-br from-slate-800 via-slate-900 to-brand-900 flex flex-col items-center justify-center p-6 text-center gap-2">
          <Video className="w-8 h-8 text-honey-300" aria-hidden="true" />
          <span className="font-display font-bold text-sm text-white">
            {video.title}
          </span>
        </div>
      )}

      {/* Subtle hover veil without obscuring slide headline or portrait */}
      <div
        className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/15 transition-colors duration-200 pointer-events-none"
        aria-hidden="true"
      />

      {/* Play button placed in clear top-right space of all thumbnails */}
      <span
        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/95 text-slate-900 shadow-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        aria-hidden="true"
      >
        <Play className="w-4 h-4 fill-slate-900 ml-0.5" />
      </span>
    </div>
  );
}

export function LinkedInVideosSection() {
  return (
    <section
      aria-labelledby="linkedin-videos-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
    >
      {/* Editorial Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-sand-200">
        <div className="space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold block">
            Video Sharing on LinkedIn
          </span>
          <h2
            id="linkedin-videos-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 text-balance"
          >
            Thoughts, Walkthroughs & Research Talks
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-body max-w-2xl">
            Short videos shared on LinkedIn covering logistics product flows, systematic research methods, and turning UX findings into design decisions.
          </p>
        </div>

        <a
          href={profile.linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-display font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1.5 group self-start sm:self-end whitespace-nowrap shrink-0 min-h-[44px]"
        >
          <span>Follow on LinkedIn</span>
          <ArrowUpRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </a>
      </div>

      {/* 3-Column Video Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {linkedInVideos.map((video) => (
          <a
            key={video.id}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl border border-sand-300 overflow-hidden shadow-xs hover:shadow-md hover:border-brand-300 transition-all duration-200 flex flex-col focus-visible:outline-2 focus-visible:outline-brand-500"
          >
            <VideoThumbnail video={video} />

            <div className="p-6 flex-1 flex flex-col justify-between gap-5">
              <div className="space-y-2.5">
                {/* Unboxed metadata line per zero-pill discipline */}
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 tabular-nums">
                  <span className="font-semibold text-brand-600">{video.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{video.topic}</span>
                  <span aria-hidden="true">·</span>
                  <span>LinkedIn</span>
                </div>

                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug text-balance">
                  {video.title}
                </h3>

                <p className="text-sm text-slate-600 font-body leading-relaxed">
                  {video.description}
                </p>
              </div>

              <div className="pt-3 border-t border-sand-200/80 flex items-center justify-between text-sm font-display font-semibold text-brand-600 group-hover:text-brand-700">
                <span>Watch video on LinkedIn</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
