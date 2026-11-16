import { Calendar, Camera, Clock, Film } from "lucide-react";

export function EventLifecycleDiagram() {
  const stages = [
    {
      phase: "01",
      title: "Scheduled & Setup",
      icon: Calendar,
      actor: "Event Host",
      description: "Host configures event name, date, time window, and tier limits. Unique event QR code and short link generated for physical table cards.",
      status: "Pre-Event"
    },
    {
      phase: "02",
      title: "Live Active Capture",
      icon: Camera,
      actor: "Guests & Host",
      description: "Guests scan QR code to enter immediately without registration. PWA opens directly to camera. Captures upload to event wall in real time.",
      status: "Active Window"
    },
    {
      phase: "03",
      title: "Event Concluded",
      icon: Clock,
      actor: "Automated Transition",
      description: "When the scheduled duration expires, camera capture locks automatically. Prevents post-event spam and protects temporal intimacy.",
      status: "Closed Capture"
    },
    {
      phase: "04",
      title: "Memory Archive",
      icon: Film,
      actor: "All Participants",
      description: "Event transforms into a clean, curated memory gallery. Host downloads full-resolution archive; guests revisit candid moments via original link.",
      status: "Permanent Record"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {stages.map((stage) => {
          const Icon = stage.icon;
          return (
            <div
              key={stage.phase}
              className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {stage.status}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-600 font-medium block mb-0.5">
                  Phase {stage.phase} • {stage.actor}
                </span>
                <h4 className="text-sm font-display font-bold text-slate-900 mb-2">
                  {stage.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {stage.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-3.5 bg-slate-100 rounded-lg text-xs text-slate-700 flex items-center justify-between border border-slate-200">
        <span>
          <strong>Key Design Principle:</strong> Temporal containment ensures the app remains an authentic event tool rather than an ongoing social network.
        </span>
        <span className="text-slate-600 text-[11px] font-mono hidden sm:inline font-medium">
          In Development
        </span>
      </div>
    </div>
  );
}
