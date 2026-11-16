import { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "ems2-express",
    title: "EMS2.0 Express: Designing a Unified Logistics Platform",
    cardTitle: "EMS2.0 Express",
    subtitle: "Designing a unified, multi-tenant logistics platform across operator, customer, driver, and administration experiences.",
    cardSummary: "Designing a unified, multi-tenant logistics platform across operator, customer, driver, and administration experiences.",
    heroSummary: "A cloud-native, multi-tenant shipment management platform for express-delivery operators across Malaysia and Southeast Asia. Built across 4 role-based portals with 60+ screens and 25+ modules to replace fragmented paper, spreadsheets, and messaging channels with a single operational truth.",
    projectType: "Enterprise product design",
    tags: ["Enterprise UX", "Logistics", "Multi-Portal Architecture", "Design System", "Operational Workflows"],
    featured: true,
    order: 1,
    snapshot: {
      role: "Product Designer",
      timeline: "March 2026 – Present (Ongoing)",
      duration: "Ongoing",
      productType: "Cloud-native, multi-tenant logistics platform",
      region: "Malaysia and Southeast Asia",
      scope: "4 portals, 60+ screens, 25+ modules",
      platforms: ["Operator Portal", "Customer Portal", "Driver App (PWA)", "Tenant Admin"],
      status: "Active (Ongoing)",
      collaborators: ["Operations Leads", "Warehouse Managers", "Finance Team", "Customer Service"]
    },
    verifiedMetrics: [
      {
        value: "4",
        label: "Connected Portals",
        context: "Operator Portal, Customer Portal, Driver App, Tenant Admin",
        isVerifiedFact: true
      },
      {
        value: "60+",
        label: "Designed Screens",
        context: "Covering end-to-end operational and customer workflows",
        isVerifiedFact: true
      },
      {
        value: "25+",
        label: "Functional Modules",
        context: "Spanning hub scan-loops, customs, COD, and control towers",
        isVerifiedFact: true
      }
    ],
    context: [
      "Express-delivery operations depend on many physical and digital handoffs. A parcel moves from booking to pickup, a local hub, sorting, linehaul transport, customs clearance, destination hub processing, last-mile delivery, and potentially returns or claims.",
      "When each team operates on disconnected tools, the parcel journey becomes opaque, paper manifests get lost, and exceptions are surfaced only after service-level agreements (SLAs) are already breached. EMS2.0 was conceived as a shared operational layer that connects all actors around a single authoritative shipment state."
    ],
    problemOverview: "Research and on-site observation exposed five deep operational bottlenecks across the logistics chain:",
    problems: [
      {
        title: "Disconnected tools and siloed records",
        description: "Operators relied on spreadsheets, WhatsApp groups, paper manifests, and legacy software. Shipment data was fragmented, making the parcel journey difficult to reconstruct."
      },
      {
        title: "Manual, error-prone entry at volume",
        description: "Hub sorting, COD reconciliation, customs declarations, and delivery assignments required repeated manual entry that propagated errors downstream."
      },
      {
        title: "Limited real-time visibility and late exceptions",
        description: "Operations staff, shippers, and drivers lacked a live understanding of where shipments were blocked and why, discovering delays only after customer complaints."
      },
      {
        title: "Scaling and network configuration bottlenecks",
        description: "Adding new hubs, routes, or cross-border corridors depended on ad hoc developer configuration rather than structured self-service setup."
      },
      {
        title: "Different users, one shipment truth",
        description: "Every portal needed the same underlying shipment truth, but each audience required different terminology, detail levels, and operational actions."
      }
    ],
    designChallenge: "How might we unify the shipment lifecycle in one platform that reduces manual work, surfaces exceptions earlier, and gives operations staff, shippers, drivers, and administrators the right information at the right time?",
    roleAndScope: [
      "I owned the end-to-end product design across all four portal surfaces: Operator Portal, Customer Portal, Driver App, and Tenant Admin.",
      "My responsibilities spanned on-site discovery, workflow mapping, information architecture, interaction design, interactive prototyping, design-system foundations, and iterative validation with operational stakeholders.",
      "The Operator Portal was the deepest surface, encompassing over 20 modules and 43 screens, complemented by customer self-service, mobile last-mile execution, and central tenant governance."
    ],
    researchAndDiscovery: {
      overview: "Because logistics has specialised workflows and terminology, domain learning was a prerequisite for credible design:",
      activities: [
        {
          name: "Warehouse observation & on-site visits",
          description: "Conducted on-site visits to observe inbound sorting, manifesting, barcode scanning, dispatch, and physical exception handling under real warehouse noise, lighting, and time pressure."
        },
        {
          name: "Cross-functional stakeholder sessions",
          description: "Held regular sessions with operations leads, hub managers, finance leads, and customer service to understand pain points, business rules, and team dependencies."
        },
        {
          name: "Physical-to-digital journey mapping",
          description: "Mapped the physical shipment journey from first-mile collection through linehaul and last-mile delivery, identifying high-risk handoffs where data was frequently delayed."
        },
        {
          name: "Domain immersion into regulatory workflows",
          description: "Analysed domestic K3 and cross-border customs declarations (K1, K2, ePAM), duty calculations, and Cash-on-Delivery (COD) reconciliation cycles."
        }
      ]
    },
    keyInsights: [
      {
        title: "Handoffs create exceptions",
        description: "Failed deliveries, missing parcels, and SLA breaches almost always begin at transitions between pickup, hubs, transport, and delivery. These handoffs required explicit scan confirmation rather than passive status changes.",
        implication: "Every physical transfer requires a closed scan loop."
      },
      {
        title: "COD is operationally and financially sensitive",
        description: "Cash-on-delivery reconciliation created discrepancies between amounts collected by drivers, amounts recorded by hubs, and amounts settled by finance.",
        implication: "COD must be structured as a dedicated accounting workflow, not an afterthought."
      },
      {
        title: "Customs is a visibility bottleneck",
        description: "Cross-border shipments stalled during clearance because customs status lived in separate agency portals disconnected from linehaul tracking.",
        implication: "Clearance milestones must be integrated into the central event timeline."
      },
      {
        title: "Drivers lacked a purpose-built operational tool",
        description: "Paper run sheets and chat groups failed to provide optimised stops, live exception reporting, or quick proof-of-delivery capture.",
        implication: "A mobile PWA optimised for one-handed operation and rapid barcode scanning was essential."
      }
    ],
    designPrinciples: [
      {
        title: "Surface exceptions early",
        description: "Dashboards must prioritize unresolved exceptions, SLA risks, and stale parcels before showing aggregate volume figures."
      },
      {
        title: "One truth, role-adapted views",
        description: "A shared underlying shipment state powers all portals, adapting terminology and controls to the user's operational role."
      },
      {
        title: "Rapid, fail-safe scan loops",
        description: "Every hub touchpoint adheres to a consistent scan-validate-process-confirm loop that immediately halts routing errors."
      }
    ],
    decisions: [
      {
        evidence: "Warehouse workers handle thousands of parcels daily under tight dispatch windows; manual keyboard entry led to frequent mistypes.",
        decision: "Standardised hub interactions around a strict scan-loop pattern (Scan -> Validate -> Process -> Confirm) with audio and visual feedback.",
        rationale: "Prevents operators from advancing a shipment if routing rules or weight specifications fail, catching sorting errors immediately at the inbound belt.",
        intendedEffect: "Immediate error containment before parcels enter the incorrect linehaul container."
      },
      {
        evidence: "Drivers, hub supervisors, and finance teams previously used mismatched spreadsheets to calculate daily cash collections, causing reconciliation disputes.",
        decision: "Created a dedicated COD reconciliation module covering driver remittance, hub supervisor sign-off, and financial settlement with discrepancy tagging.",
        rationale: "Separates physical money transfer from theoretical order values, establishing an audit trail at every point of handover.",
        intendedEffect: "Elimination of end-of-day cash reconciliation ambiguities."
      },
      {
        evidence: "Different user groups had differing mental models for shipment milestones; for instance, a customer cares about 'Filed' while an operator needs 'Submitted to Review'.",
        decision: "Established a unified central state machine with role-specific semantic labels mapped to shared core event IDs.",
        rationale: "Ensures every actor sees the current status in their vocabulary while maintaining perfect database synchronization across all 4 portals.",
        intendedEffect: "Prevented contradictory information between customer inquiries and warehouse reality."
      },
      {
        evidence: "Drivers operate under sunlight, rain, and time pressure, often with one hand holding parcels.",
        decision: "Designed the Driver App with 44px+ minimum touch targets, high contrast, and a deliberate swipe-to-complete interaction for delivery confirmation.",
        rationale: "Prevents accidental delivery marks and ensures reliable operation on low-end Android hardware.",
        intendedEffect: "High-confidence delivery proof capture without slowing down driver runs."
      }
    ],
    processTimeline: [
      {
        stepNumber: 1,
        title: "Domain Immersion & Observation",
        description: "Visited express hubs, interviewed operators, and mapped physical sorting handoffs.",
        output: "Operational journey maps & workflow pain-point catalogue"
      },
      {
        stepNumber: 2,
        title: "Architecture & Information Structure",
        description: "Defined the 4-portal system boundaries, central event state model, and module taxonomy.",
        output: "System architecture, role-permission matrices, & site maps"
      },
      {
        stepNumber: 3,
        title: "Component Foundations & Design System",
        description: "Established core tokens (cobalt #1B5CF0, teal #0D9488, slate neutrals) and 22 reusable components.",
        output: "Design system library & interaction guidelines"
      },
      {
        stepNumber: 4,
        title: "Interaction Design & Prototyping",
        description: "Built 60+ high-density screens spanning scan loops, exception triage, and driver run sheets.",
        output: "Interactive Figma prototypes & state specifications"
      },
      {
        stepNumber: 5,
        title: "Iterative Stakeholder Walkthroughs",
        description: "Conducted scenario walkthroughs with warehouse managers, dispatchers, and shippers.",
        output: "Refined exception workflows & pre-deployment design specifications"
      }
    ],
    solutionHighlights: [
      {
        title: "Operator Portal (The Nerve Centre)",
        subtitle: "Dense, exception-first command centre for hub and logistics managers",
        description: "Features a collapsible dark sidebar organizing 20+ modules into Operations, Sales, Finance, and Settings. Opens with an Exception Queue that prioritises hold items, customs delays, and SLA risks.",
        keyFeatures: [
          "Exception-first dashboard showing actionable issues before aggregates",
          "Hub scan-loop sequences for inbound, sort, manifest, and dispatch",
          "Control Tower monitoring across Road, Air, Sea, and Transit Relay",
          "Structured COD reconciliation and customs declaration workflows"
        ]
      },
      {
        title: "Customer Portal",
        subtitle: "Frictionless self-service booking and tracking for shippers",
        description: "A clean, high-contrast interface designed for corporate and individual shippers to generate bookings, manage address books, monitor active consignments, and file transparent claims.",
        keyFeatures: [
          "Step-by-step booking wizard with rate calculation and address verification",
          "Live shipment tracking with milestone event timelines",
          "Transparent claims lifecycle from filing through evidence review and settlement"
        ]
      },
      {
        title: "Driver App (Mobile PWA)",
        subtitle: "Field-tested mobile tool for pickups, deliveries, and COD management",
        description: "Built specifically for one-handed field usability on mobile devices. Supports driver pre-trip vehicle checks, run-based stops, barcode scanning, incident logging, and digital proof-of-delivery.",
        keyFeatures: [
          "Pre-shift vehicle inspection and readiness checklist",
          "Optimised stop sequences for pickup and delivery runs",
          "Deliberate swipe confirmation for proof-of-delivery",
          "Real-time incident and exception logging directly from the road"
        ]
      },
      {
        title: "Tenant Admin",
        subtitle: "Self-service platform governance, rate cards, and network configuration",
        description: "Centralises network configuration, rate cards, routing rules, surcharges, API keys, and role-based permissions, allowing new hubs and international routes to launch without engineering assistance.",
        keyFeatures: [
          "Configuration-health checklist flagging incomplete rate or routing rules",
          "Modular licensing support (Starter, Business, Enterprise, Custom)",
          "Role-based access control and unified SSO workspace switching"
        ]
      }
    ],
    validation: {
      overview: "Validation was iterative and tailored to a complex, pre-deployment enterprise product:",
      details: [
        "Conducted structured interactive walkthroughs with operations leads, hub supervisors, finance staff, and drivers across operational edge-case scenarios.",
        "Tested exception-resolution sequences (e.g. damaged parcels, unresolvable addresses, split consignments) to ensure interface clarity under pressure."
      ]
    },
    projectedOutcomes: [
      {
        title: "Reduction in manual spreadsheet & paper coordination",
        description: "Automated scan loops, rule-based batch manifesting, and digital driver runs are projected to replace ad hoc paper manifests and messaging groups."
      },
      {
        title: "Earlier exception detection and SLA breach mitigation",
        description: "Validation at each scan point and a consolidated triage queue are designed to flag errors at the belt before parcels depart for incorrect destinations."
      },
      {
        title: "Streamlined Cash-on-Delivery reconciliation",
        description: "Structured driver remittance and period-based supervisor sign-offs are intended to eliminate daily discrepancies between hub collections and finance books."
      },
      {
        title: "Accelerated order processing and reduced support inquiries",
        description: "Self-service customer booking, automated tracking, and transparent claims are projected to reduce inbound support calls regarding shipment status."
      }
    ],
    constraints: [
      {
        title: "High information density vs. field learnability",
        description: "Operations staff require high-density data tables and rapid keyboard/scanner shortcuts, whereas new hub staff need guided simplicity. Addressed through progressive disclosure and contextual drawers."
      },
      {
        title: "Scope vs. delivery timeline",
        description: "Designing 60+ screens across 4 distinct user profiles in six months required ruthless prioritization. Primary effort was invested in hub scan loops, customs, and exceptions."
      },
      {
        title: "Pre-deployment validation constraints",
        description: "As the system was pre-deployment, feedback was gathered through expert scenario walkthroughs rather than production telemetry."
      }
    ],
    reflection: {
      learnings: [
        "Domain depth is non-negotiable in enterprise design: spending hours on the warehouse floor watching barcode scans revealed physical realities that static requirement documents completely overlooked.",
        "Multi-portal consistency requires establishing a shared state machine and component system early, before individual portal screens diverge.",
        "Domain experts are invaluable partners who uncover high-risk edge cases (e.g. split linehaul manifests and partial COD collections) that generic usability reviews would miss."
      ],
      whatWouldDoDifferently: [
        "Conduct earlier field testing with drivers under adverse conditions (heavy rain, glare, low-connectivity corridors).",
        "Establish tighter quantitative operational baselines of legacy process times prior to initiating new interface concepts.",
        "Test end-to-end multi-user scenarios simultaneously (e.g. customer booking directly triggering operator dispatch and driver notification)."
      ]
    }
  },
  {
    slug: "detik-arkiv",
    title: "Detik / Arkiv: Designing a Live-Candid Event Experience",
    cardTitle: "Detik / Arkiv",
    subtitle: "Exploring a camera-first event experience that helps guests capture and share candid moments with minimal friction.",
    cardSummary: "Exploring a camera-first event experience that helps guests capture and share candid moments with minimal friction.",
    heroSummary: "A mobile-first digital product concept exploring live-candid event photography. Instead of sprawling social networks or passive cloud galleries, Detik / Arkiv creates a temporary, event-bound space where guests join via QR code and capture authentic, spontaneous moments in real time.",
    projectType: "Product concept",
    tags: ["Product Strategy", "Mobile UX", "Event Experience", "AI-Assisted Prototyping"],
    featured: true,
    order: 2,
    snapshot: {
      role: "Product Designer & Product Thinker",
      timeline: "Concept Exploration",
      productType: "Mobile-first digital product concept & prototype",
      region: "Malaysia-focused concept",
      status: "In development",
      collaborators: ["Ammar (Collaborator)"],
      tools: ["Figma", "AI-assisted prototyping", "React & Tailwind CSS"]
    },
    verifiedMetrics: [
      {
        value: "2",
        label: "Core Journeys",
        context: "Event Owner management & Guest camera-first capture",
        isVerifiedFact: true
      },
      {
        value: "0",
        label: "App Installs Required",
        context: "Frictionless QR/link progressive web entry",
        isVerifiedFact: true
      },
      {
        value: "4",
        label: "Lifecycle States",
        context: "Scheduled, Active Live, Event Concluded, Memory Archive",
        isVerifiedFact: true
      }
    ],
    context: [
      "Traditional event photography separates formal professional coverage from spontaneous personal moments captured by guests. The candid, emotional shots captured by guests are often lost across personal camera rolls and fragmented WhatsApp threads.",
      "Detik / Arkiv explores a lightweight alternative: an event-bound communal space where guests collectively document an event as it happens. Participation had to feel immediate and effortless without requiring app installations or social profile setups."
    ],
    problemOverview: "Analysis of conventional photo sharing at weddings, reunions, and celebrations highlighted distinct friction points:",
    problems: [
      {
        title: "High guest participation friction",
        description: "Guests who want to take 2 or 3 quick photos will not download a 100MB native app or fill out extensive registration forms."
      },
      {
        title: "Fragmented event memories",
        description: "Candids end up scattered across multiple personal devices, making it difficult for hosts and guests to view the collective celebration."
      },
      {
        title: "Passive gallery mindset vs. live presence",
        description: "Standard cloud drive links encourage post-event batch uploading rather than capturing the spontaneous excitement in the moment."
      },
      {
        title: "Undefined event boundaries",
        description: "Without clear temporal boundaries, temporary social gatherings morph into indefinite, stale albums that require ongoing moderation."
      }
    ],
    designChallenge: "How might we create a temporary, event-bound capture experience that feels effortless during the event and creates a meaningful collective memory afterwards?",
    roleAndScope: [
      "Led end-to-end product definition, interaction architecture, and behavioral rules.",
      "Structured the dual owner and guest journeys, temporal event lifecycle, entry mechanisms (QR/link), and access control rules.",
      "Used AI-assisted prototyping and coding workflows to rapidly test interactive prototypes and validate guest camera flows."
    ],
    researchAndDiscovery: {
      overview: "Evaluated existing photo-sharing models and defined behavioral constraints:",
      activities: [
        {
          name: "Competitive & behavioral analysis",
          description: "Audited cloud galleries (Google Photos, Dropbox), shared albums, and disposable camera apps to identify why guests abandon live sharing."
        },
        {
          name: "Event host & guest journey mapping",
          description: "Mapped the emotional arc of hosts preparing for an event, guests arriving on-site, in-the-moment capture, and post-event nostalgic review."
        },
        {
          name: "Lifecycle & permission modeling",
          description: "Defined explicit rules for photo visibility, temporary guest access, owner moderation, and automated event expiration."
        }
      ]
    },
    keyInsights: [
      {
        title: "Camera-first beats gallery-first",
        description: "If an app opens to a feed or album, guests become passive consumers. Opening directly to the camera viewport reinforces spontaneous capture.",
        implication: "The camera must be the default home view upon entering an active event."
      },
      {
        title: "Zero-barrier onboarding is critical",
        description: "Every tap between scanning a QR code and taking the first photo decreases guest contribution rates.",
        implication: "Entry must be instantaneous via QR or short web link without requiring password creation."
      },
      {
        title: "Events require defined life cycles",
        description: "An event experience is emotionally heightened because it is temporary. Establishing an active window creates urgency and privacy comfort.",
        implication: "Events automatically transition from Live Capture to Archive mode."
      }
    ],
    designPrinciples: [
      {
        title: "Frictionless immediacy",
        description: "Minimize time-to-first-capture: scanning a table QR code must open the camera in seconds."
      },
      {
        title: "Temporal containment",
        description: "Design for the event duration; do not attempt to become a perpetual social network."
      },
      {
        title: "Dignified privacy & dual perspective",
        description: "Enable guests to review their own captures while contributing to the curated collective pool."
      }
    ],
    decisions: [
      {
        evidence: "Users are reluctant to install apps or sign up while at a social gathering.",
        decision: "Built the guest experience as a lightweight progressive web application entered via QR code or shared link.",
        rationale: "Maximises guest contribution rates by removing app store friction.",
        intendedEffect: "High participation rates across diverse guests and smartphone platforms."
      },
      {
        evidence: "Guests need confidence regarding what is shared publicly versus kept private.",
        decision: "Created a dual-view paradigm: 'My Captures' (personal camera roll view) and 'Event Wall' (collective pool).",
        rationale: "Provides psychological safety for guests before their photos are displayed on communal projectors or host albums.",
        intendedEffect: "Greater guest comfort and willingness to capture candid moments."
      },
      {
        evidence: "Hosts expressed concern over storage limits and post-event management burdens.",
        decision: "Designed a 4-stage event lifecycle (Scheduled -> Live Active -> Concluded -> Archive) with tiered capacity limits.",
        rationale: "Provides natural operational closure and supports sustainable hosting tiers.",
        intendedEffect: "Predictable resource usage and a clear transition to post-event memory sharing."
      }
    ],
    processTimeline: [
      {
        stepNumber: 1,
        title: "Concept Framing",
        description: "Defined product boundaries, value proposition, and anti-goals (not a social network).",
        output: "Product definition document & core user stories"
      },
      {
        stepNumber: 2,
        title: "Journey & Rule Mapping",
        description: "Mapped guest scan-to-capture flows and host event creation parameters.",
        output: "Flow diagrams, event state machine, and access matrices"
      },
      {
        stepNumber: 3,
        title: "Camera-First Wireframes",
        description: "Designed responsive mobile views centered on fast one-tap capture.",
        output: "Figma wireframes & component specifications"
      },
      {
        stepNumber: 4,
        title: "Interactive Prototyping & Build",
        description: "Prototyped camera interaction, QR entry, and album views using AI-assisted development tools.",
        output: "Interactive React prototype exploring live capture dynamics"
      }
    ],
    solutionHighlights: [
      {
        title: "Instant QR & Link Entry",
        subtitle: "Zero-friction entry into the event space",
        description: "Guests scan a tabletop QR code or tap an invite link to immediately join the event room without creating accounts.",
        keyFeatures: [
          "Instant web-based entry without app download",
          "Automatic association with the active event space",
          "Host-configured optional guest nickname entry"
        ]
      },
      {
        title: "Camera-First Interface",
        subtitle: "Encouraging spontaneous, authentic capture",
        description: "Launches directly to a streamlined camera interface designed for quick framing and shooting with candid aesthetics.",
        keyFeatures: [
          "Instant shutter reaction with offline caching support",
          "One-tap toggle between personal roll and shared event wall",
          "Subtle live counter showing collective event contributions"
        ]
      },
      {
        title: "Temporal Lifecycle Engine",
        subtitle: "Clear stages from live celebration to memory archive",
        description: "Manages event transitions automatically, closing live camera uploads when the event ends and preparing the memory recap.",
        keyFeatures: [
          "Scheduled countdown before event commencement",
          "Live capture window during the celebration",
          "Automated transition to read-only archival memory"
        ]
      }
    ],
    validation: {
      overview: "The concept and prototype are in development, focused on usability validation of the capture loop:",
      details: [
        "Tested prototype camera flows across mobile viewports to ensure rapid shutter response and intuitive access to the event feed.",
        "Evaluated the QR onboarding sequence to verify that first-time guests understand the shared event concept within five seconds.",
        "Identified as an in-development concept; live pilot testing at real events and formal participant metrics will be conducted in upcoming iterations."
      ]
    },
    projectedOutcomes: [
      {
        title: "Increased guest participation compared to post-event drives",
        description: "Camera-first QR entry is projected to capture significantly more spontaneous guest moments than shared upload links distributed days later."
      },
      {
        title: "Higher host satisfaction through collective memory creation",
        description: "Consolidating authentic guest angles into one event-bound archive is intended to provide hosts with a richer reflection of their celebration."
      },
      {
        title: "Reduced friction for non-technical guests",
        description: "Eliminating passwords, account logins, and app store downloads is designed to make participation accessible to guests of all ages."
      }
    ],
    constraints: [
      {
        title: "Balancing frictionless entry with moderation and privacy",
        description: "Allowing guests to upload without accounts requires simple host moderation tools to prevent accidental or inappropriate uploads."
      },
      {
        title: "In-development status",
        description: "The product is actively undergoing concept and prototype exploration; conclusions represent design decisions rather than post-launch market data."
      }
    ],
    reflection: {
      learnings: [
        "Defining product behavior and boundaries is just as critical as designing visual screens: establishing the temporal lifecycle completely altered the UI requirements.",
        "Camera-first design fundamentally shifts user psychology from passive consumption to active, present participation.",
        "AI-assisted prototyping enables rapid testing of real web camera and mobile layout constraints early in concept formulation."
      ],
      whatWouldDoDifferently: [
        "Pilot the prototype at a small private gathering earlier to observe live guest hesitation in real social settings.",
        "Explore offline sync behaviors more deeply for venues with poor cellular reception."
      ]
    }
  },
  {
    slug: "ai-assisted-product-design-workflow",
    title: "AI-Assisted Product Design Workflow: Preserving Product Context",
    cardTitle: "AI-Assisted Product Design Workflow",
    subtitle: "Creating a repeatable, context-aware workflow for using AI across product design, prototyping, and implementation.",
    cardSummary: "Creating a repeatable, context-aware workflow for using AI across product design, prototyping, and implementation.",
    heroSummary: "A structured systems methodology for integrating AI into end-to-end product design and engineering. By externalising product knowledge, UX architecture, user journeys, and design-system rules into versioned knowledge bases, this workflow preserves product context, eliminates scope drift, and maintains human design governance.",
    projectType: "AI & workflow innovation",
    tags: ["AI Workflow", "Design Operations", "Knowledge Systems", "Design-to-Code", "Governance"],
    featured: true,
    order: 3,
    snapshot: {
      role: "Workflow Designer & Product Designer",
      timeline: "Evolving Methodology",
      productType: "Design operations & AI workflow framework",
      status: "Evolving methodology",
      tools: ["Figma", "Claude Design", "Figma Make", "Figma MCP", "Claude Code", "Antigravity", "React & Tailwind CSS"]
    },
    verifiedMetrics: [
      {
        value: "6",
        label: "Connected Layers",
        context: "Overview, UX Architecture, Modules, Journeys, Screens, Design System",
        isVerifiedFact: true
      },
      {
        value: "100%",
        label: "Human Review Control",
        context: "Mandatory human checkpoints before code or design merge",
        isVerifiedFact: true
      },
      {
        value: "0",
        label: "Unverified Savings Claims",
        context: "Honest methodology without unsubstantiated token/time claims",
        isVerifiedFact: true
      }
    ],
    context: [
      "Generative AI tools can draft screens and code rapidly, but speed frequently unmasks deeper operational friction. Without persistent, structured context, AI outputs often contradict established business rules, diverge from design systems, invent inconsistent components, or overwrite work outside the requested task.",
      "In enterprise platforms with dozens of modules, repeating the entire system architecture in every chat prompt is unsustainable. I developed this workflow to transform AI from an unpredictable visual generator into a disciplined, context-aware collaborator operating within a governed product system."
    ],
    problemOverview: "Unconstrained use of AI across design and prototyping creates six common points of failure:",
    problems: [
      {
        title: "Context loss across chats",
        description: "Important architectural rules, business constraints, and decisions disappear the moment a new conversation starts."
      },
      {
        title: "Design system divergence and visual drift",
        description: "Generated screens invent rogue colours, non-standard buttons, and conflicting spacing tokens rather than adhering to established libraries."
      },
      {
        title: "Scope drift and accidental overwrites",
        description: "AI agents given broad permissions may modify files or components far beyond the requested module boundary."
      },
      {
        title: "Weak traceability from requirement to output",
        description: "Generated UI looks superficially complete but fails to connect back to verified user stories or operational workflows."
      },
      {
        title: "Repetitive prompting fatigue",
        description: "Designers waste considerable time manually restating basic platform terminology, roles, and dependencies in prompt preambles."
      }
    ],
    designChallenge: "How might we preserve structured product context across design, prototyping, and code so AI accelerates execution while human designers retain control over intent, evidence, and quality?",
    roleAndScope: [
      "Conceived, structured, and implemented the end-to-end workflow architecture.",
      "Designed the persistent Markdown knowledge base schemas, module boundary definitions, and prompt orchestration rules.",
      "Integrated specialized tooling including Figma, Figma MCP, Claude Code, and Antigravity into a coordinated design-to-development pipeline.",
      "Established strict human-in-the-loop review protocols to ensure no AI output touches active code without architectural verification."
    ],
    researchAndDiscovery: {
      overview: "Iterated through dozens of prototyping experiments to analyze where AI succeeded and where it degraded:",
      activities: [
        {
          name: "Workflow failure mode analysis",
          description: "Categorised recurring failure points across AI tools (hallucinated endpoints, inconsistent tokens, broken responsive layouts)."
        },
        {
          name: "Knowledge architecture structuring",
          description: "Organised complex platform knowledge into modular, machine-readable Markdown files structured by domain hierarchy."
        },
        {
          name: "Tool integration & MCP experimentation",
          description: "Tested interoperability between design tool APIs (Figma MCP), coding agents (Claude Code, Antigravity), and local source repositories."
        }
      ]
    },
    keyInsights: [
      {
        title: "AI quality is a function of context quality",
        description: "AI does not fail because it lacks coding or UI capability; it fails because it operates without accurate, bounded context.",
        implication: "Investing in structured documentation directly elevates generated output fidelity."
      },
      {
        title: "Scoped orchestration prevents scope drift",
        description: "An agent tasked with 'improve the dashboard' will wander. An agent given a strict module boundary, input tokens, and validation tests produces disciplined work.",
        implication: "Execution must be compartmentalised at the module level."
      },
      {
        title: "Human review remains the quality ceiling",
        description: "AI cannot validate whether an operational workflow reflects physical warehouse realities. Human judgement is irreplaceable for domain truth.",
        implication: "Checkpoints must be structural gates, not optional glances."
      }
    ],
    designPrinciples: [
      {
        title: "Persistent single source of truth",
        description: "Product context belongs in version-controlled documentation, never in fleeting chat histories."
      },
      {
        title: "Bounded execution scopes",
        description: "Pass only the relevant module and dependencies to the AI agent to prevent context pollution."
      },
      {
        title: "Mandatory human review gates",
        description: "AI proposes and drafts; human designers audit, verify, and merge."
      }
    ],
    decisions: [
      {
        evidence: "Chat-based prompts caused repeated context loss whenever sessions expired or context windows overflowed.",
        decision: "Externalised system architecture, screen inventories, and design tokens into a standardized Markdown knowledge base.",
        rationale: "Markdown is lightweight, version-controlled with git, and equally readable by human engineers and LLM agents.",
        intendedEffect: "Zero context loss across design sprints and agent sessions."
      },
      {
        evidence: "Granting AI tools global repository access caused unexpected edits in unrelated components.",
        decision: "Implemented a module-scoped context model where tasks are strictly bounded to specific components and mock data.",
        rationale: "Ensures AI edits remain completely contained within the assigned feature boundary.",
        intendedEffect: "Complete elimination of accidental cross-module regressions."
      },
      {
        evidence: "Generated interfaces often used convincing placeholder copy that masked missing operational requirements.",
        decision: "Established an explicit audit step comparing generated screens against the module's user journey and state machine.",
        rationale: "Catches missing edge cases, empty states, and permission variants early.",
        intendedEffect: "High fidelity to real operational requirements rather than superficial aesthetic polish."
      }
    ],
    processTimeline: [
      {
        stepNumber: 1,
        title: "Structure Knowledge Base",
        description: "Document system architecture, terminology, user journeys, and component tokens in Markdown.",
        output: "Versioned knowledge base repository"
      },
      {
        stepNumber: 2,
        title: "Define Task Boundaries",
        description: "Isolate the target module, input dependencies, and expected outputs before invoking AI.",
        output: "Scoped task specification & context payload"
      },
      {
        stepNumber: 3,
        title: "Assisted Generation & Prototyping",
        description: "Use specialized coding agents and design MCPs to generate screens against design tokens.",
        output: "Isolated prototype code branch & interactive screen"
      },
      {
        stepNumber: 4,
        title: "Human Audit & Verification",
        description: "Audit output against user journeys, accessibility standards, and visual design guidelines.",
        output: "Audit checklist & reviewed implementation"
      }
    ],
    solutionHighlights: [
      {
        title: "Modular Knowledge Architecture",
        subtitle: "Externalized system memory for human and AI collaboration",
        description: "A versioned directory hierarchy separating global product rules, user journeys, screen inventories, design tokens, and technical APIs.",
        keyFeatures: [
          "Standardised Markdown schemas for modules and journeys",
          "Centralised token definitions matching design system code",
          "Clear separation between verified facts and WIP concepts"
        ]
      },
      {
        title: "Scoped Agent Orchestration",
        subtitle: "Bounded context delivery preventing drift",
        description: "Directs AI tools to consume only the context relevant to the specific task, preserving token budgets and maintaining strict focus.",
        keyFeatures: [
          "Targeted module context loading",
          "Automated boundary constraints on file modification",
          "Traceable linking back to originating user stories"
        ]
      },
      {
        title: "Human Governance Protocol",
        subtitle: "Non-negotiable quality and domain verification",
        description: "A formal review workflow ensuring that every AI-generated proposal is tested against real operational workflows, edge cases, and accessibility criteria.",
        keyFeatures: [
          "Structured review checklists for UX consistency",
          "Visual regression and component usage audits",
          "Protection of production code branches from unreviewed edits"
        ]
      }
    ],
    validation: {
      overview: "The workflow has been evaluated across internal prototyping iterations:",
      details: [
        "Applied successfully to accelerate complex prototyping for enterprise logistics views and mobile interaction experiments.",
        "Demonstrated significant qualitative improvements in component consistency and reduction of repetitive prompting.",
        "Conducted in accordance with honesty guidelines: claims regarding quantified token or hour savings are withheld pending ongoing formal baseline measurement."
      ]
    },
    projectedOutcomes: [
      {
        title: "Reduced design-to-prototype iteration cycles",
        description: "Structured context is expected to shorten the time required to stand up realistic, interactive prototypes for user testing."
      },
      {
        title: "Higher component reuse and design system fidelity",
        description: "Explicit token bindings are intended to prevent rogue styles and enforce strict compliance with established component libraries."
      },
      {
        title: "Preserved institutional product knowledge",
        description: "Externalizing architecture into versioned knowledge bases ensures that product decisions remain accessible across evolving team compositions."
      }
    ],
    constraints: [
      {
        title: "Tool fragmentation and evolving context capabilities",
        description: "Different AI tools possess distinct context limits, requiring ongoing adaptation of context packaging strategies."
      },
      {
        title: "Maintenance overhead of documentation",
        description: "Knowledge bases must be maintained alongside code and designs; if documentation becomes stale, AI outputs degrade accordingly."
      }
    ],
    reflection: {
      learnings: [
        "AI is a powerful force multiplier, but only when constrained by systematic architecture and rigorous human review.",
        "Designing the system that guides AI requires the exact same systems thinking and information architecture skills used in enterprise product design.",
        "Clear documentation is not administrative overhead—it is the foundational infrastructure that enables high-velocity product development."
      ],
      whatWouldDoDifferently: [
        "Automate the verification of generated components against Figma token libraries via custom linters earlier.",
        "Establish formal benchmark tasks to quantitatively measure output quality and defect rates over time."
      ]
    }
  },
  {
    slug: "master-research-mobile-ux-principles",
    title: "Developing UX Principles for Mobile Applications",
    cardTitle: "Developing UX Principles for Mobile Applications",
    subtitle: "Developing evidence-based UX principles for mobile applications through systematic literature review and Design Thinking.",
    cardSummary: "Developing evidence-based UX principles for mobile applications through systematic literature review and Design Thinking.",
    heroSummary: "A Master's research initiative combining Systematic Literature Review (SLR) with Design Thinking to bridge fragmented academic UX guidelines into actionable, traceable interface principles for mobile applications. Validated through expert content review and annotated mobile prototyping.",
    projectType: "UX research",
    tags: ["UX Research", "HCI", "Mobile UX", "Design Thinking", "Evidence Synthesis"],
    featured: false,
    order: 4,
    snapshot: {
      role: "Master's Researcher & UX Designer",
      timeline: "2025 – Present (Ongoing)",
      productType: "Master's research thesis (UiTM Melaka)",
      status: "Ongoing research",
      tools: ["Systematic Literature Review", "Design Thinking", "Figma", "Qualitative Thematic Analysis"],
      collaborators: ["Academic Supervisors & UX Expert Reviewers"]
    },
    verifiedMetrics: [
      {
        value: "6",
        label: "Traceability Stages",
        context: "Literature -> Problem -> HMW -> Principle -> Prototype -> Evaluation",
        isVerifiedFact: true
      },
      {
        value: "7",
        label: "Preliminary Categories",
        context: "Usability, Efficiency, Feedback, Accessibility, Engagement, Clarity, Navigation",
        isVerifiedFact: true
      },
      {
        value: "100%",
        label: "Traceable Methodology",
        context: "Every proposed principle directly mapped back to literature evidence",
        isVerifiedFact: true
      }
    ],
    context: [
      "Mobile UX guidance is widely dispersed across academic standards, usability heuristics, industry style guides, and HCI literature. These sources often use conflicting terminology, vary in abstraction, or focus on narrow sub-aspects of interaction.",
      "Designers consequently face a practical dilemma: turning a fragmented body of theoretical knowledge into concrete, defensible interface decisions. This research investigates how a rigorous Systematic Literature Review combined with a user-centered Design Thinking framework can produce practical, validated UX principles."
    ],
    problemOverview: "Analysis of mobile UX literature highlighted four foundational challenges:",
    problems: [
      {
        title: "Fragmentation across disparate sources",
        description: "Mobile UX guidelines are scattered across HCI journals, proprietary platforms (Apple HIG, Material Design), and usability heuristics with little synthesis."
      },
      {
        title: "Inconsistent terminology and levels of abstraction",
        description: "Similar concepts are labeled differently (e.g. 'discoverability' vs. 'navigability'), leaving practitioners uncertain of actionable application."
      },
      {
        title: "Lack of traceability from theory to interface",
        description: "Guidelines often read as abstract advice without documented evidence linking a theoretical rule to an annotated UI decision."
      },
      {
        title: "Need for empirical validation",
        description: "Derived principles require structured validation through both expert content-validity evaluation and empirical user testing."
      }
    ],
    designChallenge: "How might we systematically synthesize mobile UX literature and apply Design Thinking to formulate actionable, traceable, and empirically validated UX principles for mobile applications?",
    roleAndScope: [
      "Formulated the core research problem, research questions, and methodology.",
      "Conducted the Systematic Literature Review across academic repositories to synthesize recurring principles.",
      "Structured the Design Thinking framework across Empathise, Define, Ideate, Prototype, and Test.",
      "Designed the research traceability framework, annotated mobile UI prototypes, and expert content-validity instruments."
    ],
    researchAndDiscovery: {
      overview: "Bridging rigorous academic evidence synthesis with human-centered product design:",
      activities: [
        {
          name: "Systematic Literature Review (SLR)",
          description: "Synthesized mobile usability heuristics, ISO standards, and empirical HCI papers using a structured screening process."
        },
        {
          name: "Thematic & affinity clustering",
          description: "Grouped recurring design recommendations into core thematic areas (navigation, feedback, accessibility, cognitive load)."
        },
        {
          name: "Problem framing & How Might We definition",
          description: "Converted clustered user obstacles into actionable Design Thinking 'How Might We' prompts."
        },
        {
          name: "Expert review instrument design",
          description: "Formulated content-validity indices for domain experts to evaluate principle clarity and relevance."
        }
      ]
    },
    keyInsights: [
      {
        title: "Theory without prototypes remains abstract",
        description: "Academic literature frequently describes what good UX is in broad terms, but fails to show how it manifests on a real mobile screen.",
        implication: "Principles must be paired with annotated interactive prototypes demonstrating concrete decisions."
      },
      {
        title: "Design Thinking provides the contextual anchor",
        description: "While literature review establishes what has been studied globally, Design Thinking tests how those concepts solve specific user tasks locally.",
        implication: "Combining both methods produces both empirical defensibility and practical utility."
      },
      {
        title: "Traceability proves design defensibility",
        description: "A design choice backed by a documented chain from literature through user problem to prototype withstands subjective critique.",
        implication: "Every principle must maintain an unbroken chain of evidence."
      }
    ],
    designPrinciples: [
      {
        title: "Traceable evidence linkage",
        description: "Every UX principle must trace back to literature evidence and forward to an annotated prototype decision."
      },
      {
        title: "Actionable over abstract",
        description: "Principles must define tangible interface behaviors (e.g. touch targets, feedback timing) rather than vague ideals."
      },
      {
        title: "Empirical verification",
        description: "Validation requires sequential expert review for clarity followed by user evaluation for usability impact."
      }
    ],
    decisions: [
      {
        evidence: "A literature review alone risks remaining purely theoretical, while localized user testing risks reinventing known standards.",
        decision: "Combined Systematic Literature Review with Design Thinking into a unified research framework.",
        rationale: "Ensures principles are theoretically grounded in verified HCI literature while remaining practically responsive to real user tasks.",
        intendedEffect: "A balanced research methodology that satisfies both academic rigour and design practice."
      },
      {
        evidence: "Practitioners struggle to interpret abstract guideline labels in daily design work.",
        decision: "Mapped preliminary principles directly to annotated high-fidelity mobile prototype screens.",
        rationale: "Demonstrates exactly how a principle dictates button placement, visual hierarchy, feedback banners, and error recovery.",
        intendedEffect: "Immediate practical comprehensibility for designers and evaluators."
      },
      {
        evidence: "Validating principles directly with users before ensuring conceptual clarity leads to noisy testing data.",
        decision: "Established a two-phase validation: expert content-validity review first, followed by task-based user evaluation.",
        rationale: "Refines terminology and clarity with domain experts before testing task performance with representative end users.",
        intendedEffect: "High validity and defensibility of final research conclusions."
      }
    ],
    processTimeline: [
      {
        stepNumber: 1,
        title: "Discover (SLR)",
        description: "Review academic literature and extract recurring mobile usability principles.",
        output: "Structured synthesis table of literature evidence"
      },
      {
        stepNumber: 2,
        title: "Empathise & Define",
        description: "Identify mobile user pain points, synthesize findings, and frame How Might We questions.",
        output: "Personas, journey maps, and problem statements"
      },
      {
        stepNumber: 3,
        title: "Ideate Principles",
        description: "Derive preliminary UX principle formulations mapped to specific user challenges.",
        output: "Preliminary principle taxonomy across 7 categories"
      },
      {
        stepNumber: 4,
        title: "Annotated Prototyping",
        description: "Design mobile interface flows annotated with specific principle implementations.",
        output: "High-fidelity interactive prototype with UX annotations"
      },
      {
        stepNumber: 5,
        title: "Expert & User Validation",
        description: "Conduct expert review followed by user usability evaluation (currently in progress).",
        output: "Validation data & refined mobile UX principles"
      }
    ],
    solutionHighlights: [
      {
        title: "Six-Stage Traceability Framework",
        subtitle: "Unbroken chain from empirical evidence to interface decision",
        description: "Visualises the methodological journey ensuring every design principle is mathematically and logically defensible.",
        keyFeatures: [
          "Literature evidence extracted via systematic protocols",
          "Explicit translation into localized user problems and HMW questions",
          "Formulation of concrete UX principles with behavioral criteria",
          "Direct mapping onto annotated mobile prototype screens"
        ]
      },
      {
        title: "Preliminary Principle Categories",
        subtitle: "Seven emerging areas of mobile interaction focus",
        description: "Synthesized from literature review and ongoing synthesis, targeting the core areas of mobile usability:",
        keyFeatures: [
          "Usability & Error Prevention: forgiving interactions and immediate undo",
          "Efficiency & Speed: minimal tap depth and smart defaults",
          "Feedback & System Status: real-time visual, haptic, and state indicators",
          "Accessibility & Reachability: ergonomic thumb zones and compliant contrast",
          "Clarity & Visual Hierarchy: predictable navigation and cognitive load reduction"
        ]
      },
      {
        title: "Annotated Mobile Prototypes",
        subtitle: "Tangible demonstration of principles in practice",
        description: "A contextual mobile application flow demonstrating the practical execution of each derived principle.",
        keyFeatures: [
          "Visual callouts showing principle-to-element mapping",
          "Demonstration of thumb-zone friendly navigation structures",
          "Inline validation and clear progress feedback mechanisms"
        ]
      }
    ],
    validation: {
      overview: "The research methodology is actively progressing through validation stages:",
      details: [
        "Formulated the expert content-validity instrument covering clarity, relevance, and essentiality across preliminary principles.",
        "Planned task-based usability testing within the university context (UiTM MyAccess) to measure task completion, error rates, and satisfaction.",
        "Status is strictly identified as ongoing research: final principle definitions and usability metrics will be published upon conclusion of expert review and user testing."
      ]
    },
    projectedOutcomes: [
      {
        title: "Actionable, defensible guidance for mobile designers",
        description: "The derived principles are intended to provide mobile practitioners with clear, empirically grounded design rules rather than vague guidelines."
      },
      {
        title: "Increased usability and reduced interaction errors in mobile tasks",
        description: "Applying the validated principles to mobile interfaces is projected to reduce task errors and improve user task completion efficiency."
      },
      {
        title: "A repeatable methodology for UX principle development",
        description: "The combined SLR and Design Thinking framework serves as a transferable methodology for future domain-specific UX research."
      }
    ],
    constraints: [
      {
        title: "Focus restricted to mobile form factors",
        description: "Findings apply specifically to mobile touchscreen interactions; extension to desktop or spatial interfaces requires separate study."
      },
      {
        title: "Ongoing research status",
        description: "The study is actively progressing through master's candidature; preliminary principle categories must not be represented as completed final standards."
      }
    ],
    reflection: {
      learnings: [
        "Academic rigor and product design practice are mutually reinforcing: systematic review brings depth and defensibility, while Design Thinking ensures practical usability.",
        "Traceability is the most powerful tool a designer possesses: being able to trace an interface decision back through user problems to empirical evidence elevates design from opinion to strategy.",
        "Clear problem formulation is half the battle in both research and enterprise product design."
      ],
      whatWouldDoDifferently: [
        "Incorporate expert reviewers earlier in the literature screening phase to narrow search queries more rapidly.",
        "Prepare mobile prototype variations to conduct A/B usability comparisons between principle-adherent and baseline designs."
      ]
    }
  }
];

export const capabilities = [
  {
    title: "Product Strategy & Systems Thinking",
    description: "Framing complex product ecosystems, multi-sided platforms, and temporal lifecycles. Connecting business objectives and technical constraints to user value."
  },
  {
    title: "Enterprise & Operational UX",
    description: "Designing data-dense, mission-critical workflows, exception triage queues, hub scan loops, and financial reconciliation tools for high-volume enterprise users."
  },
  {
    title: "UX Research & Workflow Mapping",
    description: "Conducting on-site contextual observation, stakeholder interviews, physical-to-digital journey mapping, and thematic analysis to identify deep systemic friction."
  },
  {
    title: "Information Architecture",
    description: "Structuring multi-portal architectures, shared data models, state machines, role-permission matrices, and navigation taxonomies across dozens of modules."
  },
  {
    title: "Interaction Design & Prototyping",
    description: "Crafting responsive, accessible interfaces with ergonomic consideration, scan-loop feedback, progressive disclosure, and rapid prototyping in Figma and React."
  },
  {
    title: "Design Systems",
    description: "Creating unified token foundations, component libraries, accessibility standards, and governance processes to ensure visual and operational consistency."
  },
  {
    title: "AI-Assisted Prototyping & Delivery",
    description: "Building structured knowledge bases and scoped orchestration workflows to leverage coding agents and LLMs while preserving product context and human governance."
  }
];

export const workingApproachSteps = [
  {
    step: "01",
    title: "Understand the Context",
    description: "Observe physical operations, interview domain experts, and analyse regulatory constraints."
  },
  {
    step: "02",
    title: "Define the Problem",
    description: "Isolate root causes, map handoffs, and frame actionable How Might We challenges."
  },
  {
    step: "03",
    title: "Structure the System",
    description: "Design shared state machines, information architecture, and multi-portal role boundaries."
  },
  {
    step: "04",
    title: "Design & Prototype",
    description: "Craft high-fidelity screens, scan loops, and interactive prototypes adhering to tokenized design systems."
  },
  {
    step: "05",
    title: "Validate with Experts",
    description: "Test operational edge cases, walkthrough scenarios with operators, and audit against requirements."
  },
  {
    step: "06",
    title: "Refine & Govern",
    description: "Iterate based on feedback, document decisions and rationale, and prepare for production deployment."
  }
];
