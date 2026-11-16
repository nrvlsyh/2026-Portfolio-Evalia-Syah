import { useState } from "react";
import { Monitor, Smartphone, Globe, ShieldCheck, Database, ArrowRight } from "lucide-react";

export function FourPortalsDiagram() {
  const [activePortal, setActivePortal] = useState<number>(0);

  const portals = [
    {
      id: "operator",
      title: "Operator Portal",
      subtitle: "Operations Command Centre",
      icon: Monitor,
      badge: "20+ Modules • 43 Screens",
      color: "border-brand-600 bg-brand-50/50",
      activeColor: "ring-2 ring-brand-600 bg-brand-50 text-brand-900",
      description: "Dedicated to warehouse managers, sort operators, and dispatchers. Opens with an Exception Queue before aggregate figures.",
      keyFeatures: [
        "Inbound, sort, manifest, & dispatch scan-loops",
        "Multi-modal Control Tower (Road, Air, Sea, Transit)",
        "Exception triage (Hold, Stale, Customs delay)",
        "Daily driver COD cash reconciliation"
      ]
    },
    {
      id: "customer",
      title: "Customer Portal",
      subtitle: "Shipper Self-Service",
      icon: Globe,
      badge: "Self-Service Booking",
      color: "border-teal-600 bg-teal-50/50",
      activeColor: "ring-2 ring-teal-600 bg-teal-50 text-teal-900",
      description: "Lightweight, guided interface for individual and enterprise shippers to book consignments, track active parcels, and manage claims.",
      keyFeatures: [
        "Multi-step shipment booking wizard with rate card check",
        "Real-time parcel timeline with milestone events",
        "Transparent claims filing & evidence submission lifecycle",
        "Corporate address book & batch order upload"
      ]
    },
    {
      id: "driver",
      title: "Driver App (PWA)",
      subtitle: "Mobile Field Operations",
      icon: Smartphone,
      badge: "One-Handed Mobile PWA",
      color: "border-indigo-600 bg-indigo-50/50",
      activeColor: "ring-2 ring-indigo-600 bg-indigo-50 text-indigo-900",
      description: "Progressive web app optimised for outdoor conditions, gloved operation, high-contrast sunlight, and quick barcode scanning.",
      keyFeatures: [
        "Pre-shift vehicle inspection & readiness checklist",
        "Optimised pickup and delivery run sequence",
        "Deliberate swipe-to-complete delivery confirmation",
        "Incident reporting & real-time COD collection recording"
      ]
    },
    {
      id: "admin",
      title: "Tenant Admin",
      subtitle: "Platform & Network Governance",
      icon: ShieldCheck,
      badge: "Central Governance",
      color: "border-slate-600 bg-slate-100",
      activeColor: "ring-2 ring-slate-800 bg-slate-100 text-slate-900",
      description: "Self-service administrative workspace enabling logistics tenants to configure hubs, rate cards, and users without developer involvement.",
      keyFeatures: [
        "Configuration-health checklist flagging missing rules",
        "Rate card, zone matrix, & surcharge configuration",
        "Tiered module licensing (Starter, Business, Enterprise)",
        "Unified authentication & workspace role switcher"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Central Architecture Map */}
      <div className="bg-slate-900 text-white p-5 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-brand-600/30 text-brand-400 rounded-lg border border-brand-500/40">
            <Database className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand-300">Central Backbone</span>
            <h4 className="text-sm font-display font-bold text-white">Unified Shipment State Machine & Event Stream</h4>
          </div>
        </div>
        <div className="text-xs text-slate-300 max-w-sm text-center md:text-right">
          Single canonical tracking record shared across all 4 portals, synchronised in real time.
        </div>
      </div>

      {/* Interactive Portal Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {portals.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = activePortal === idx;
          return (
            <button
              key={p.id}
              onClick={() => setActivePortal(idx)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? `${p.activeColor} shadow-sm`
                  : "border-slate-200 bg-white hover:border-slate-300 text-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${isSelected ? "text-brand-600" : "text-slate-600"}`} />
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white/80 border border-slate-200 text-slate-700">
                  Surface 0{idx + 1}
                </span>
              </div>
              <h4 className="text-sm font-display font-bold text-slate-900">{p.title}</h4>
              <p className="text-xs text-slate-600">{p.subtitle}</p>
            </button>
          );
        })}
      </div>

      {/* Detail Inspector Panel */}
      <div className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-mono font-semibold text-brand-600 uppercase tracking-wider">
              {portals[activePortal].badge}
            </span>
            <h4 className="text-base sm:text-lg font-display font-bold text-slate-900">
              {portals[activePortal].title} — {portals[activePortal].subtitle}
            </h4>
          </div>
          <span className="text-xs text-slate-600">
            Click portals above to inspect role design
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 mt-3 mb-4 leading-relaxed">
          {portals[activePortal].description}
        </p>

        <div>
          <h5 className="text-xs font-display font-bold uppercase tracking-wider text-slate-500 mb-2">
            Key Role-Specific Capabilities:
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {portals[activePortal].keyFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                <ArrowRight className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
