
import { AlmanacData } from './types';

export const ALMANAC_DATA: AlmanacData = {
  providers: [
    {
      title: "OpenAI",
      slug: "openai",
      segment: "Lab",
      advancements: [
        "Transitioned to agent-native platform with GPT-5, 5.1, and 5.2 family releases.",
        "Introduced reasoning tiering (Instant/Thinking/Pro) to match workload depths.",
        "GPT-5.2 achieved a step-change in agentic performance and tool consistency.",
        "Launched Responses API in March 2025 as the new core developer primitive."
      ],
      missed: [
        "Multi-step failures declined by 65%, enabling reliable enterprise agent chains.",
        "Pricing shift: focus on cached inputs ($0.005/1M tokens) changed unit economics."
      ],
      revenue: "$13B Reported (2025)",
      metrics: [
        { label: "Active Agents", value: "2M+", trend: 'up' },
        { label: "Token Volume", value: "Trillions/Day", trend: 'up' }
      ],
      pricing: [
        { model: "GPT-5.2", input: "$1.75", cached: "$0.175", output: "$14.00" },
        { model: "GPT-5.1", input: "$1.25", cached: "$0.125", output: "$10.00" },
        { model: "GPT-5-mini", input: "$0.25", cached: "$0.025", output: "$2.00" },
        { model: "GPT-5-nano", input: "$0.05", cached: "$0.005", output: "$0.40" }
      ],
      investment: "Massive hiring in systems engineering (2,659 total staff) and national policy leadership.",
      watch2026: [
        "Full 'Agent Operating System' with persistent shared memory.",
        "Sunset of Assistants API in favor of Responses API by August 2026."
      ],
      platformUrl: "https://openai.com",
      zenVerdict: "OpenAI isn't chasing benchmarks anymore; they are building the industrial nervous system of the web.",
      signalStrength: 98
    },
    {
      title: "Google (DeepMind)",
      slug: "google",
      segment: "Big Tech",
      advancements: [
        "Gemini 3 Pro emerged as the 'thinking' workhorse for complex agent loops.",
        "Launched Jules: an autonomous coding agent for repo-scale maintenance.",
        "Veo 3.1 established video as a production medium with native rich audio."
      ],
      missed: [
        "Throughput dominance: Gemini 3 Flash made high-reasoning free for billions.",
        "Vibe coding in AI Studio collapsed the gap between prompt and production apps."
      ],
      revenue: "$102B Q3 Search Rev",
      metrics: [
        { label: "Daily Queries", value: "Billions", trend: 'up' },
        { label: "TPU Capacity", value: "14+ ExaFLOPS", trend: 'up' }
      ],
      investment: "Consolidated Google Labs directly into core product cycles for faster iteration.",
      watch2026: [
        "Gemini fully replaces Legacy Assistant across Android ecosystem.",
        "Search monetization redesign around AI answers enters final phase."
      ],
      platformUrl: "https://ai.google",
      zenVerdict: "Google's rebound is complete; they own the edge through Android and the scale through Search.",
      signalStrength: 95
    },
    {
      title: "Anthropic",
      slug: "anthropic",
      segment: "Lab",
      advancements: [
        "Claude Opus 4.5 defined 'Cognitive Stamina' with stable million-token sessions.",
        "Maturation of 'Claude Projects' into durable multi-agent workspaces."
      ],
      missed: [
        "Predictability over Peak: Opus became the safe-haven for legal and regulated industries.",
        "Fewer hallucinations in long-form synthesis compared to GPT-5.1."
      ],
      revenue: ">$5B Run-rate",
      metrics: [
        { label: "Context Window", value: "2.5M+", trend: 'up' },
        { label: "Safety Score", value: "99.9%", trend: 'up' }
      ],
      investment: "Safety engineering and alignment research remains 40% of headcount.",
      watch2026: [
        "Stronger agent verification frameworks for high-stakes finance/law.",
        "Native governance controls for massive-scale enterprise deployments."
      ],
      platformUrl: "https://anthropic.com",
      zenVerdict: "When the cost of failure is high, the industry defaults to Claude.",
      signalStrength: 92
    },
    {
      title: "NVIDIA",
      slug: "nvidia",
      segment: "Infrastructure",
      advancements: [
        "Blackwell/Grace-Blackwell (GB200) redefined compute as rack-scale coherence.",
        "Deployment of liquid-cooling standards for 100kW+ density racks."
      ],
      missed: [
        "Networking Moat: NVLink Switch Systems became as important as the GPU core.",
        "Software Gravity: CUDA libraries (cuDNN/TensorRT) widened performance gaps."
      ],
      revenue: "$130B+ Projected",
      metrics: [
        { label: "GPU Backlog", value: "6 Months+", trend: 'up' },
        { label: "Market Cap", value: "Elite Tier", trend: 'up' }
      ],
      investment: "Aggressive expansion into data-center architecture and national sovereign compute.",
      watch2026: [
        "Turnkey 'AI Factories' shipped as a single product SKU.",
        "Custom hyperscaler silicon (Trainium/TPU) begins to challenge inference share."
      ],
      platformUrl: "https://nvidia.com",
      zenVerdict: "The landlord of the AI era. They don't just sell chips; they sell the ability to think.",
      signalStrength: 100
    }
  ],
  vision: {
    images: [
      {
        name: "Midjourney V7",
        description: "The gold standard for creative direction and aesthetic taste.",
        excelledAt: ["Texture richness", "Cinematic lighting", "Coherent details"],
        whyItMattered: "Taste at scale—the model designers reach for when it needs to look 'final'.",
        definingTrait: "Aesthetic Excellence",
        platformUrl: "https://midjourney.com",
        techStack: ["Omni Reference", "Draft Mode"]
      },
      {
        name: "GPT Image 1.5",
        description: "Precision visual engine for technical instruction following.",
        excelledAt: ["Complex edits", "Text rendering", "Instruction following"],
        whyItMattered: "Turned generation into a reliable 'visual work engine' for business.",
        definingTrait: "Instruction Fidelity",
        platformUrl: "https://openai.com"
      }
    ],
    videos: [
      {
        name: "Sora 2",
        description: "The cinematic leap from clips to cohesive sound-era scenes.",
        excelledAt: ["Physical realism", "Synchronized audio", "Dialogue sync"],
        whyItMattered: "Made AI video a consumer habit with sound-era realism.",
        platformUrl: "https://openai.com/sora"
      },
      {
        name: "Gen-4.5 (Runway)",
        description: "Professional tool built for shot-to-shot continuity and filmmakers.",
        excelledAt: ["Camera controls", "Shot continuity", "Consistency"],
        whyItMattered: "Built for 'make me a scene,' not just 'make me a clip'.",
        platformUrl: "https://runwayml.com"
      }
    ]
  },
  coding: [
    {
      name: "Cursor",
      description: "The AI-native IDE that understands entire repositories as systems.",
      excelledAt: ["Repo-wide understanding", "Architectural refactors"],
      whyItMattered: "Low hallucination and exceptional context continuation.",
      cost: "$20/mo",
      platformUrl: "https://cursor.com"
    },
    {
      name: "V0.dev",
      description: "Design-to-production UI generator turning intent into shippable code.",
      excelledAt: ["React/Tailwind", "Design systems", "Speed"],
      whyItMattered: "Collapsed design and engineering into a single conversational loop.",
      platformUrl: "https://v0.dev"
    }
  ],
  agents: [
    {
      name: "n8n",
      description: "Developer-first agent orchestration and self-hostable engine.",
      excelledAt: ["Tool chaining", "Private pipelines", "Human-in-the-loop"],
      whyItMattered: "The home for serious, private enterprise agent swarms.",
      platformUrl: "https://n8n.io"
    },
    {
      name: "CrewAI",
      description: "Collaborative multi-agent framework with role-based logic.",
      excelledAt: ["Role delegation", "Autonomous research"],
      whyItMattered: "Pushed beyond prompt-response into system behavior.",
      platformUrl: "https://crewai.com"
    }
  ],
  apps: [
    {
      name: "NotebookLM",
      description: "Source-grounded AI workspace for reasoning inside documentation.",
      excelledAt: ["Knowledge synthesis", "Zero hallucinations"],
      whyItMattered: "Turned knowledge bases into daily cognitive prosthetics.",
      platformUrl: "https://notebooklm.google"
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
