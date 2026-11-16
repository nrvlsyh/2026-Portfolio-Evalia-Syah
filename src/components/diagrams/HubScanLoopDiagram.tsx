import { Barcode, CheckCircle, AlertTriangle, ArrowRight, RefreshCw, Box } from "lucide-react";

export function HubScanLoopDiagram() {
  const steps = [
    {
      step: "01",
      name: "Scan Touchpoint",
      icon: Barcode,
      action: "Hardware barcode laser / camera scan",
      detail: "Captures tracking AWB, container QR, or tote barcode in <100ms."
    },
    {
      step: "02",
      name: "Rule Validation",
      icon: RefreshCw,
      action: "Real-time state & destination validation",
      detail: "Checks route compliance, dimensions, hold status, and customs clearance."
    },
    {
      step: "03",
      name: "Operational Action",
      icon: Box,
      action: "Physical sort, manifest bind, or dispatch",
      detail: "Audio tone confirms destination bin; LED chute indicator activates."
    },
    {
      step: "04",
      name: "State Confirmation",
      icon: CheckCircle,
      action: "Immutable event stream update",
      detail: "Central database updates timestamp, location, and user ID across all 4 portals."
    }
  ];

  return (
    <div className="space-y-6">
      {/* Standard Loop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="p-4 bg-white rounded-xl border border-slate-200 relative shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center border border-brand-100">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-600">
                    Step {s.step}
                  </span>
                </div>
                <h4 className="text-sm font-display font-bold text-slate-900 mb-1">
                  {s.name}
                </h4>
                <p className="text-xs font-medium text-brand-700 mb-1.5">
                  {s.action}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {s.detail}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 border border-slate-200 text-slate-600">
                  <ArrowRight className="w-3 h-3" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Exception Diversion Pathway */}
      <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-amber-900">
          <div className="p-1.5 bg-amber-100 text-amber-800 rounded-md shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <span className="font-display font-bold uppercase tracking-wider text-[10px] text-amber-800 block">
              Automated Fail-Safe: Exception Intercept
            </span>
            <span className="text-slate-700">
              If Validation fails (damaged barcode, unpaid COD, address error, customs hold), the loop locks immediately with a high-pitched alert tone and routes the parcel directly to the <strong>Operator Exception Queue</strong> for manual triage.
            </span>
          </div>
        </div>
        <span className="shrink-0 px-2.5 py-1 bg-white text-amber-800 font-semibold rounded border border-amber-200">
          Zero False Advances
        </span>
      </div>
    </div>
  );
}
