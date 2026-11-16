export type ProjectStatus =
  | "Pre-deployment"
  | "In development"
  | "Active (Ongoing)"
  | "Evolving methodology"
  | "Ongoing research";

export type ProjectCategory =
  | "Enterprise product design"
  | "Product concept"
  | "AI & workflow innovation"
  | "UX research";

export interface VerifiedMetric {
  value: string;
  label: string;
  context: string;
  isVerifiedFact: boolean;
}

export interface DecisionCalloutData {
  evidence: string;
  decision: string;
  rationale: string;
  intendedEffect?: string;
}

export interface InsightItem {
  title: string;
  description: string;
  implication?: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  output?: string;
}

export interface ProjectSnapshot {
  role: string;
  timeline: string;
  duration?: string;
  productType: string;
  region?: string;
  scope?: string;
  platforms?: string[];
  status: ProjectStatus;
  collaborators?: string[];
  tools?: string[];
}

export interface ProjectedOutcomeItem {
  title: string;
  description: string;
}

export interface SolutionHighlight {
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
}

export interface Project {
  slug: string;
  title: string;
  cardTitle?: string;
  subtitle: string;
  cardSummary: string;
  heroSummary: string;
  projectType: ProjectCategory;
  tags: string[];
  featured: boolean;
  order: number;
  snapshot: ProjectSnapshot;
  verifiedMetrics?: VerifiedMetric[];
  
  // Case study long-form sections
  context: string[];
  problemOverview: string;
  problems: { title: string; description: string }[];
  designChallenge?: string;
  roleAndScope: string[];
  researchAndDiscovery: {
    overview: string;
    activities: { name: string; description: string }[];
  };
  keyInsights: InsightItem[];
  designPrinciples?: { title: string; description: string }[];
  decisions: DecisionCalloutData[];
  processTimeline?: ProcessStep[];
  solutionHighlights?: SolutionHighlight[];
  validation: {
    overview: string;
    details: string[];
  };
  projectedOutcomes: ProjectedOutcomeItem[];
  constraints: { title: string; description: string }[];
  reflection: {
    learnings: string[];
    whatWouldDoDifferently?: string[];
  };
}

export interface AssetMeta {
  id: string;
  recommendedFilename: string;
  caption: string;
  altText: string;
  badgeLabel?: string;
  description: string;
}
