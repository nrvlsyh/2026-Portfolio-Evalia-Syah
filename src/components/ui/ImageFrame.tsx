import { useState, type ReactNode } from "react";
import { Image as ImageIcon, FileCode, Layers } from "lucide-react";
import { AssetMeta } from "../../types";

interface ImageFrameProps {
  asset: AssetMeta;
  children?: ReactNode;
  className?: string;
  isInteractiveDiagram?: boolean;
}

export function ImageFrame({
  asset,
  children,
  className = "",
  isInteractiveDiagram = false
}: ImageFrameProps) {
  const [imgError, setImgError] = useState(false);
  const imageSrc = `/assets/projects/${asset.recommendedFilename}`;

  return (
    <figure className={`my-8 ${className}`}>
      <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
        {/* Frame Top Header / Metadata Bar */}
        <div className="px-4 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 font-mono">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </span>
            <span className="text-slate-700 truncate max-w-[240px] sm:max-w-none text-[11px] font-semibold">
              {asset.recommendedFilename}
            </span>
          </div>

          {asset.badgeLabel && (
            <span className="inline-flex items-center gap-1 text-[11px] font-display font-medium text-slate-700 bg-slate-200/70 px-2 py-0.5 rounded">
              {isInteractiveDiagram ? <Layers className="w-3 h-3 text-brand-600" /> : <FileCode className="w-3 h-3 text-slate-600" />}
              {asset.badgeLabel}
            </span>
          )}
        </div>

        {/* Frame Content */}
        <div className="p-4 sm:p-6 bg-slate-50/50">
          {children ? (
            <div className="w-full overflow-x-auto">{children}</div>
          ) : !imgError ? (
            <div className="w-full flex items-center justify-center bg-white rounded-xl overflow-hidden border border-slate-200">
              <img
                src={imageSrc}
                alt={asset.caption || asset.description}
                onError={() => setImgError(true)}
                className="w-full h-auto object-contain max-h-[500px]"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center bg-white rounded-xl border border-dashed border-slate-300">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mb-3" aria-hidden="true">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-display font-semibold text-slate-900 mb-1">
                {asset.badgeLabel || "System Artifact"}
              </h4>
              <p className="text-xs text-slate-600 max-w-md mb-2 font-body">
                {asset.description}
              </p>
              <span className="inline-block text-[11px] font-mono text-slate-600 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                Target Asset: {asset.recommendedFilename}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Frame Caption */}
      <figcaption className="mt-2.5 px-2 text-xs text-slate-600 leading-relaxed flex items-start gap-1.5 font-body">
        <span className="font-semibold text-slate-800 shrink-0 font-display">Figure:</span>
        <span>{asset.caption}</span>
      </figcaption>
    </figure>
  );
}
