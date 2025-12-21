
import { AlmanacData } from './types';

export const ALMANAC_DATA: AlmanacData = {
  providers: [
    {
      title: "OpenAI",
      slug: "openai",
      segment: "Lab",
      advancements: [
        "Rapid progression from GPT-5 to 5.1/5.2 signaled a shift to 'tempo warfare' competitive strategy.",
        "Reasoning tiering (Instant/Thinking/Pro) allowed organizations to match cost and latency to workload depth.",
        "Long-output reliability crossed a threshold, moving beyond chat into full technical artifacts.",
        "Tool-native workflows matured with function calling becoming central to action execution."
      ],
      missed: [
        "The true breakthrough was operational predictability: multi-step failures declined by 65%.",
        "Compressed timelines: a single model run can now replace several rounds of human drafting."
      ],
      revenue: "$13B Reported Revenue",
      metrics: [
        { label: "Revenue", value: "$13B", trend: 'up', percentage: "100%+" },
        { label: "Active Agents", value: "2M+", trend: 'up' }
      ],
      investment: "Decisive tilt toward systems engineering, infrastructure reliability, and enterprise GTM operations.",
      watch2026: [
        "Consolidation into an 'Agent Operating System' with persistent memory.",
        "Deeper push toward enterprise sovereignty and regional data controls."
      ],
      platformUrl: "https://openai.com",
      zenVerdict: "OpenAI has pivoted from a lab to a systems company; GPT is no longer a model, it's a substrate.",
      signalStrength: 98
    },
    {
      title: "Google (DeepMind + Cloud)",
      slug: "google",
      segment: "Big Tech",
      advancements: [
        "Gemini 3 prioritized sustained reasoning efficiency for Search and Workspace scale.",
        "Deep Vertex AI integration made Gemini procurement-friendly for global enterprise.",
        "AI-generated answer layers in Search normalized generative interfaces for billions."
      ],
      missed: [
        "Google's scale makes small efficiency gains more impactful than benchmark spectacles.",
        "Throughput advantage: Google is winning on 'intelligence per milliwatt' at planetary scale."
      ],
      revenue: "Alphabet Q3: $102.3B (+16% YoY)",
      metrics: [
        { label: "Search Revenue", value: "$102B", trend: 'up', percentage: "16%" },
        { label: "TPU Output", value: "Exascale", trend: 'up' }
      ],
      investment: "Heavy ramp in inference optimization, TPU/accelerator teams, and product integration.",
      watch2026: [
        "Search monetization redesign around AI answers.",
        "Hybrid edge-cloud reasoning natively integrated into Android cores."
      ],
      platformUrl: "https://deepmind.google",
      zenVerdict: "Distribution is Google's moat; they are turning the web into a personalized neural feed.",
      signalStrength: 95
    },
    {
      title: "Anthropic",
      slug: "anthropic",
      segment: "Lab",
      advancements: [
        "Claude Opus 4.5 established dominance in high-endurance reasoning and code refactors.",
        "Reliability posture successfully captured regulated industries (finance, healthcare)."
      ],
      missed: [
        "Predictability over Peak: Anthropic optimized for trust, which is harder to clone than speed.",
        "Cognitive Endurance: Claude maintains 99.9% coherence in million-token sessions."
      ],
      revenue: "Run-rate > $5B (Aug 2025)",
      metrics: [
        { label: "ARR Growth", value: "500%", trend: 'up', percentage: "5x" },
        { label: "Retention", value: "Elite", trend: 'up' }
      ],
      investment: "Safety engineering, evaluations, alignment research, and enterprise partner ecosystems.",
      watch2026: [
        "Stronger agent verification and deeper tool-use reliability primitives.",
        "Governance-native enterprise deployments."
      ],
      platformUrl: "https://anthropic.com",
      zenVerdict: "The 'Safe Haven' for serious enterprise AI; trust is their primary competitive differentiator.",
      signalStrength: 92
    },
    {
      title: "Meta",
      slug: "meta",
      segment: "Strategic",
      advancements: [
        "Llama 4 family closed the gap between open and proprietary models at scale.",
        "Embedded assistants in WhatsApp/IG increased global exposure to LLM behavior."
      ],
      missed: [
        "Open models fundamentally reshaped bargaining power for enterprises and governments.",
        "The play is ubiquity: Meta is winning by becoming the oxygen of the open AI ecosystem."
      ],
      revenue: "Q3 2025: $51.2B (+26% YoY)",
      metrics: [
        { label: "Llama Base", value: "350M Users", trend: 'up' },
        { label: "Ad Yield", value: "Strong", trend: 'up' }
      ],
      investment: "Training efficiency, safety filtering, and product embedding across the social graph.",
      watch2026: [
        "More releases tuned for edge deployment and quantization.",
        "Agentic commerce inside messaging and scheduling contexts."
      ],
      platformUrl: "https://meta.com",
      zenVerdict: "Meta is commoditizing the competition's core value; Llama is the industry standard by default.",
      signalStrength: 96
    },
    {
      title: "Perplexity",
      slug: "perplexity",
      segment: "Software",
      advancements: [
        "Evolved from AI search to a serious research and reasoning platform.",
        "Collapsed search, synthesis, and citation into a single conversational unit."
      ],
      missed: [
        "Interaction design breakthrough: user stopped 'browsing' and started 'interrogating'.",
        "Retrieval infrastructure: Perplexity's real secret sauce is its indexing latency."
      ],
      metrics: [
        { label: "Monthly Queries", value: "1B+", trend: 'up' },
        { label: "Citation Index", value: "Peak", trend: 'up' }
      ],
      investment: "Retrieval infrastructure, source ranking, and low-latency synthesis layers.",
      watch2026: [
        "Canonical front-end for research, due-diligence, and exploratory analysis.",
        "Deeper integrations into professional workflow platforms."
      ],
      platformUrl: "https://perplexity.ai",
      zenVerdict: "Perplexity proves that interfaces can be as disruptive as models. Research has a new default.",
      signalStrength: 94
    },
    {
      title: "Mistral AI",
      slug: "mistral",
      segment: "Strategic",
      advancements: [
        "Solidified position as Europe's frontier-model provider emphasizing efficiency.",
        "Gained traction with governments seeking Alternatives to U.S.-centric stacks."
      ],
      missed: [
        "Constraint-aware intelligence: models designed for tighter compute budgets win on-prem.",
        "Strategic Autonomy: Europe's pivot point for AI sovereignity."
      ],
      investment: "Systems optimization, inference efficiency, and regional enterprise integration.",
      watch2026: [
        "Becoming the default 'Sovereign LLM' layer for allied regions.",
        "Regional APIs that follow strict data locality mandates."
      ],
      platformUrl: "https://mistral.ai",
      zenVerdict: "Mistral is the strategic counter-balance to the hyperscalers; small, fast, and sovereign.",
      signalStrength: 89
    },
    {
      title: "Oracle",
      slug: "oracle",
      segment: "Infrastructure",
      advancements: [
        "Accelerated cloud capacity buildout for massive AI long-duration contracts.",
        "Repositioned as the primary 'AI factory' capacity broker."
      ],
      missed: [
        "Enterprise data gravity (databases, ERP, identity) is Oracle's core AI leverage.",
        "They are the silent backbone of many top labs' training clusters."
      ],
      revenue: "FY2025: $57.4B (+8% YoY)",
      metrics: [
        { label: "Cloud Services", value: "$44B", trend: 'up' },
        { label: "OER Index", value: "Stable", trend: 'neutral' }
      ],
      investment: "Data-center engineering, power procurement, and networking stacks.",
      watch2026: [
        "Hyperscale-style leases and rising relevance as compute scarcity intensifies.",
        "Database-level AI agents that understand ERP logic natively."
      ],
      platformUrl: "https://oracle.com",
      zenVerdict: "Oracle is the landlord of the AI era; they have the power, literally and figuratively.",
      signalStrength: 87
    }
  ],
  vision: {
    images: [
      {
        name: "Midjourney V7",
        description: "The gold standard for creative direction and aesthetic taste.",
        excelledAt: ["Texture richness", "Cinematic lighting", "Object integrity"],
        whyItMattered: "Taste at scale—the model designers reach for when it needs to look 'final'.",
        definingTrait: "Aesthetic Excellence",
        platformUrl: "https://midjourney.com",
        techStack: ["Stable Diffusion V3", "Proprietary Enhancers"]
      },
      {
        name: "GPT Image 1.5",
        description: "Precision visual engine for technical and marketing instruction following.",
        excelledAt: ["Prompt adherence", "Precise edits", "Text rendering"],
        whyItMattered: "Turned generation into a reliable 'visual work engine' for business.",
        definingTrait: "Instruction Fidelity",
        platformUrl: "https://openai.com"
      },
      {
        name: "FLUX.2",
        description: "The choice for consistent character and commercial layout work.",
        excelledAt: ["Character consistency", "Brand layout", "Logo handling"],
        whyItMattered: "Enabled commercial pipelines through repeatability.",
        definingTrait: "Production Consistency",
        platformUrl: "https://blackforestlabs.ai"
      }
    ],
    videos: [
      {
        name: "Sora 2",
        description: "The cinematic leap from simple clips to cohesive sound-era scenes.",
        excelledAt: ["Physical realism", "Synchronized audio", "Temporal logic"],
        whyItMattered: "Set the standard for high-end AI video realism.",
        platformUrl: "https://openai.com/sora"
      },
      {
        name: "Gen-4 (Runway)",
        description: "Professional tool built for shot-to-shot continuity and filmmakers.",
        excelledAt: ["Camera controls", "Shot continuity", "Asset consistency"],
        whyItMattered: "The requirement for sequences, not just random clips.",
        platformUrl: "https://runwayml.com"
      }
    ]
  },
  coding: [
    {
      name: "Cursor",
      description: "The AI-native IDE that understands entire repositories as systems.",
      excelledAt: ["Repo-wide understanding", "Architectural refactors"],
      whyItMattered: "Low hallucination rate and exceptional continuation work.",
      cost: "$20/mo",
      platformUrl: "https://cursor.sh"
    },
    {
      name: "GitHub Copilot Workspace",
      description: "Shift from code assistance to task-level feature agents.",
      excelledAt: ["Issue implementation", "Team-based grounding"],
      whyItMattered: "Deep grounding in repository history makes it an actual collaborator.",
      platformUrl: "https://github.com"
    },
    {
      name: "V0.dev",
      description: "Design-to-code engine that turns intent into shippable React.",
      excelledAt: ["Fast UI iteration", "Tailwind components"],
      whyItMattered: "Output matches modern developer conventions perfectly.",
      platformUrl: "https://v0.dev"
    }
  ],
  agents: [
    {
      name: "n8n",
      description: "Developer-first agent orchestration and self-hostable engine.",
      excelledAt: ["Tool chaining", "Private pipelines", "Hybrid flows"],
      whyItMattered: "The home for serious, private enterprise agent swarms.",
      platformUrl: "https://n8n.io"
    },
    {
      name: "CrewAI",
      description: "Collaborative multi-agent framework with role-based logic.",
      excelledAt: ["Role delegation", "Autonomous research"],
      whyItMattered: "Best for complex research and multi-stage reasoning tasks.",
      platformUrl: "https://crewai.com"
    }
  ],
  apps: [
    {
      name: "NotebookLM",
      description: "Source-grounded AI workspace for reasoning inside documentation.",
      excelledAt: ["Zero-hallucination citations", "Synthesis"],
      whyItMattered: "Daily cognitive prosthetic for knowledge workers.",
      platformUrl: "https://notebooklm.google"
    },
    {
      name: "Websim",
      description: "Generative simulation engine for speculative software and worlds.",
      excelledAt: ["UI ideation", "Rapid worldbuilding"],
      whyItMattered: "A 'show me' thinking instrument that avoids engineering overhead.",
      platformUrl: "https://websim.ai"
    },
    {
      name: "Napkin AI",
      description: "Turns messy thoughts into clean diagrams and conceptual visuals.",
      excelledAt: ["Visual thinking", "Diagram generation"],
      whyItMattered: "Solves the 'thinking to artifact' bottleneck instantly.",
      platformUrl: "https://napkin.ai"
    }
  ]
};
