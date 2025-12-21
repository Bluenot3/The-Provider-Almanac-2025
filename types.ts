
export type Category = 'Providers' | 'Vision' | 'Coding' | 'Agents' | 'Apps' | 'Predictions';

export interface GrowthMetric {
  label: string;
  value: string;
  trend: 'up' | 'down' | 'neutral';
  percentage?: string;
}

export interface ProviderDetail {
  title: string;
  slug: string;
  segment: 'Lab' | 'Big Tech' | 'Infrastructure' | 'Software' | 'Strategic';
  advancements: string[];
  missed: string[];
  investment: string;
  revenue?: string;
  metrics?: GrowthMetric[];
  watch2026: string[];
  platformUrl?: string;
  zenVerdict: string;
  signalStrength: number; // 0 to 100
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
}

export interface AlmanacData {
  providers: ProviderDetail[];
  vision: {
    images: ToolDetail[];
    videos: ToolDetail[];
  };
  coding: ToolDetail[];
  agents: ToolDetail[];
  apps: ToolDetail[];
}
