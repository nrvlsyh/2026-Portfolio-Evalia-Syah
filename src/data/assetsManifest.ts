import { AssetMeta } from "../types";

export const assetsManifest: Record<string, AssetMeta> = {
  "ems2-hero": {
    id: "ems2-hero",
    recommendedFilename: "ems2-hero-four-portal-composite.png",
    caption: "The unified EMS2.0 multi-portal architecture connecting Operator, Customer, Driver, and Tenant surfaces around a single shipment state.",
    altText: "Architectural overview showing the four connected EMS2.0 portal interfaces: Operator Command Centre, Customer Self-Service Portal, Mobile Driver App, and Tenant Administration.",
    badgeLabel: "System Architecture Composite",
    description: "Composite visual demonstrating role-based views derived from a single shipment data model."
  },
  "ems2-scan-loop": {
    id: "ems2-scan-loop",
    recommendedFilename: "ems2-process-hub-scan-loop.svg",
    caption: "The four-step closed scan loop: Scan -> Validate -> Process -> Confirm. Catching sorting errors immediately at the inbound belt.",
    altText: "Diagram of the hub scan-loop sequence showing how barcode inputs trigger real-time routing validation before parcels move to sorting bins.",
    badgeLabel: "Operational Workflow Diagram",
    description: "Interaction flow of the scan-validation loop deployed across inbound, sorting, manifesting, and dispatch."
  },
  "ems2-portals": {
    id: "ems2-portals",
    recommendedFilename: "ems2-solution-four-portal-architecture.svg",
    caption: "Role-tailored interfaces communicating via a shared event-stream backend.",
    altText: "Architecture diagram showing how Operator Portal, Customer Portal, Driver App, and Tenant Admin share central shipment states.",
    badgeLabel: "Four-Portal Architecture",
    description: "System diagram showing the relationship between all four user workspaces."
  },
  "detik-hero": {
    id: "detik-hero",
    recommendedFilename: "detik-concept-camera-first-interface.png",
    caption: "Detik / Arkiv mobile interface opening directly to the camera viewport to encourage spontaneous guest capture.",
    altText: "Mobile screen mockups showing the Detik / Arkiv camera-first capture flow and tabletop QR code onboarding.",
    badgeLabel: "Product Concept Wireframe",
    description: "Mobile-first view emphasizing immediate camera capture upon scanning event QR code."
  },
  "detik-lifecycle": {
    id: "detik-lifecycle",
    recommendedFilename: "detik-process-event-lifecycle.svg",
    caption: "Four-stage temporal event lifecycle: Scheduled -> Live Active Capture -> Concluded -> Memory Archive.",
    altText: "Diagram illustrating the four stages of a Detik / Arkiv event from pre-event countdown to post-event memory archive.",
    badgeLabel: "Temporal Lifecycle Model",
    description: "Behavioral model governing guest access, camera availability, and event archival."
  },
  "ai-workflow-diagram": {
    id: "ai-workflow-diagram",
    recommendedFilename: "ai-workflow-knowledge-architecture.svg",
    caption: "Structured AI-assisted product design workflow: persistent Markdown knowledge bases feeding scoped agent orchestration with mandatory human review gates.",
    altText: "Workflow diagram detailing how persistent product documentation feeds bounded AI coding agents while humans retain final design approval.",
    badgeLabel: "Systems Workflow Model",
    description: "Operational model illustrating context preservation and human-in-the-loop checkpoints."
  },
  "masters-traceability": {
    id: "masters-traceability",
    recommendedFilename: "masters-research-traceability-framework.svg",
    caption: "The six-stage research traceability framework: literature evidence -> UX problem -> How Might We question -> UX principle -> annotated prototype -> evaluation.",
    altText: "Research framework diagram showing the direct line of evidence from Systematic Literature Review to annotated mobile UI prototype decisions.",
    badgeLabel: "Research Traceability Framework",
    description: "Methodological chain connecting academic literature with actionable mobile UX decisions."
  }
};
