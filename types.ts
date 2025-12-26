
export type Category = 'Providers' | 'Vision' | 'Coding' | 'Agents' | 'Apps' | 'Open' | 'Cloud' | 'Audio';

export interface GrowthMetric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  percentage?: string;
}

export interface PricingTier {
  model: string;
  input: string;
  cached: string;
  output: string;
}

export interface ProviderDetail {
  title: string;
  slug: string;
  segment: 'Lab' | 'Big Tech' | 'Infrastructure' | 'Software' | 'Strategic' | 'Open Source';
  releaseTimeline: string;
  advancements: string[];
  missed: string[];
  investment: string;
  revenue?: string;
  metrics?: GrowthMetric[];
  pricing?: PricingTier[];
  watch2026: string[];
  platformUrl?: string;
  zenVerdict: string;
  signalStrength: number; // 0 to 100
  traits: string[];
}

export interface ToolDetail {
  name: string;
  category?: string;
  description: string;
  excelledAt: string[];
  whyItMattered: string;
  definingTrait?: string;
  platformUrl: string;
  cost?: string;
  techStack?: string[];
  releaseDate?: string;
}

export interface AlmanacData {
  providers: ProviderDetail[];
  openWeights: ProviderDetail[];
  vision: {
    images: ToolDetail[];
    videos: ToolDetail[];
  };
  coding: ToolDetail[];
  agents: ToolDetail[];
  apps: ToolDetail[];
  audio: ToolDetail[];
  cloud: ProviderDetail[];
}
