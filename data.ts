
import { AlmanacData } from './types';

export const ALMANAC_DATA: AlmanacData = {
  providers: [
    {
      title: "OpenAI",
      slug: "openai",
      segment: "Lab",
      releaseTimeline: "GPT-5.2 (Dec 11, 2025)",
      advancements: [
        "Launched GPT-5.2: Flagship upgrade with 'agentic tool-calling' and deep multimodal reasoning.",
        "GPT-5.2-Codex (Dec 2025): Specialized release for software refactoring and long-running tasks.",
        "Responses API standardized the 'Agent OS' layer for web and file-use.",
        "Sora 2 & GPT-Image-1.5: Transitioned creative AI from novelty to production studio pipelines."
      ],
      missed: [
        "Formalized coding/agent experiences as first-class products, moving away from simple chatbots.",
        "Strategic shift: Focusing on 'AI that finishes the job' rather than just answering queries."
      ],
      revenue: "$13B Reported",
      metrics: [
        { label: "ARR Velocity", value: "3x", trend: 'up', percentage: "200%" },
        { label: "Agent Nodes", value: "2M+", trend: 'up' }
      ],
      pricing: [
        { model: "GPT-5.2 Pro", input: "$1.75", cached: "$0.175", output: "$14.00" },
        { model: "GPT-5.1", input: "$1.25", cached: "$0.125", output: "$10.00" },
        { model: "GPT-5-mini", input: "$0.25", cached: "$0.025", output: "$2.00" },
        { model: "GPT-5-nano", input: "$0.05", cached: "$0.005", output: "$0.40" }
      ],
      investment: "Hiring surged in systems engineering (~2,659 staff); CCO step-down signaled leadership churn.",
      watch2026: [
        "Major Q1 2026 model leap telegraphed (GPT-6 speculation).",
        "Assistants API sunset (Aug 2026) forces migration to Responses API."
      ],
      platformUrl: "https://openai.com",
      zenVerdict: "OpenAI is now an industrial platform; the model is the engine, but the 'Response' is the product.",
      signalStrength: 98,
      traits: ["Agentic Execution", "Hybrid Reasoning", "Codex Integrated"]
    },
    {
      title: "Anthropic",
      slug: "anthropic",
      segment: "Lab",
      releaseTimeline: "Claude 4.5 Family (Late 2025)",
      advancements: [
        "Claude Opus 4.5 (Nov 24): Flagship endurance model for high-stakes analysis.",
        "Claude Sonnet 4.5 (Sep 29): Defacto coding workhorse and agent builder.",
        "Claude Code (Feb 2025): Agentic terminal CLI that operates tools autonomously.",
        "Introduced 'Computer Use' capability, allowing models to operate UIs like humans."
      ],
      missed: [
        "Earned the 'Safe Haven' reputation; Claude became the default when the cost of failure was high.",
        "Hybrid Reasoning: Balancing fast intuition with slow, methodical deduction."
      ],
      revenue: ">$5B Run-rate",
      metrics: [
        { label: "Trust Score", value: "99.9%", trend: 'up' },
        { label: "Token Persistence", value: "Elite", trend: 'up' }
      ],
      pricing: [
        { model: "Opus 4.5", input: "$15.00", cached: "$3.75", output: "$75.00" },
        { model: "Sonnet 4.5", input: "$3.00", cached: "$0.75", output: "$15.00" },
        { model: "Haiku 4.5", input: "$0.25", cached: "$0.06", output: "$1.25" }
      ],
      investment: "Safety alignment remains 40% of research budget; deep AWS/Google cloud distribution.",
      watch2026: [
        "Deeper 'Computer Use' maturity; models that manage entire desktops.",
        "Advanced agent verification and auditability logs as defaults."
      ],
      platformUrl: "https://anthropic.com",
      zenVerdict: "Predictability is the ultimate feature; Anthropic owns the reliability narrative.",
      signalStrength: 94,
      traits: ["Computer Use", "Long Context", "High Reliability"]
    },
    {
      title: "Google (DeepMind)",
      slug: "google",
      segment: "Big Tech",
      releaseTimeline: "Gemini 3 Flash (Dec 2025)",
      advancements: [
        "Gemini 3 Flash: Speed-focused frontier intelligence for real-time interaction.",
        "NotebookLM: Swapped in Gemini 3 backend, normalizing 'AI workspaces'.",
        "Veo 3.1 & Flow: Established a cinematic environment for AI-assisted video editing.",
        "Jules: Autonomous coding agent launched for repo-level maintenance."
      ],
      missed: [
        "Delayed Assistant replacement into 2026: Signal that smart-home integration remains the hard edge.",
        "Distribution moat: Gemini became a layer in Search, Android, and Workspace all at once."
      ],
      revenue: "$100B+ (Cloud/Search)",
      metrics: [
        { label: "Daily Tokens", value: "Trillions", trend: 'up' },
        { label: "Compute Pool", value: "14+ ExaFLOPS", trend: 'up' }
      ],
      investment: "Massive hardware investment (TPUs); consolidating Labs directly into product cycles.",
      watch2026: [
        "Full Android transition to Gemini; legacy Assistant phase-out.",
        "Generative Search monetization models reach global scale."
      ],
      platformUrl: "https://ai.google",
      zenVerdict: "Google doesn't just launch; it saturates. Gemini is the civilizational substrate of the search era.",
      signalStrength: 96,
      traits: ["Speed-of-Search", "Multimodal Native", "TPU Powered"]
    }
  ],
  openWeights: [
    {
      title: "Meta (Llama)",
      slug: "meta",
      segment: "Open Source",
      releaseTimeline: "Llama 4 (Apr 5, 2025)",
      advancements: [
        "Llama 4 Scout & Maverick: Natively multimodal open-weight models.",
        "Extreme context length targets reached, rivaling closed labs."
      ],
      missed: [
        "Cemented that 'Open' can be cutting-edge, not just a trailing alternative.",
        "Deeply integrated into every major cloud catalog (Azure, Bedrock, Vertex)."
      ],
      investment: "Zuckerberg's 'Compute Moat' strategy: billions in H100/Blackwell infrastructure.",
      watch2026: [
        "Llama 4.5 reasoning variants and specialized agent weights.",
        "Deeper on-device optimization for Meta Ray-Ban and VR hardware."
      ],
      zenVerdict: "Meta is the open-weight lighthouse; they provide the infrastructure the rest of the world builds on.",
      signalStrength: 97,
      traits: ["Multimodal Native", "Compute Moat", "Ecosystem Standard"]
    },
    {
      title: "DeepSeek",
      slug: "deepseek",
      segment: "Open Source",
      releaseTimeline: "R1 (Jan 20, 2025)",
      advancements: [
        "DeepSeek-R1: The reasoning shockwave that challenged Western lab dominance.",
        "May 28 Upgrade: Reduced hallucinations and added native JSON/Function calling."
      ],
      missed: [
        "Geopolitical signal: Proved that state-of-the-art reasoning doesn't require Western hyperscalers.",
        "Economic disruption: Forced pricing drops across the API market."
      ],
      investment: "Efficiency-first research; massive adoption in developer-first communities.",
      watch2026: [
        "DeepSeek-V3/R2 with multimodal capabilities and faster inference.",
        "Specialized coding models competing directly with Claude Code."
      ],
      zenVerdict: "The most disruptive entity of 2025. They proved that clever architecture beats brute-force spend.",
      signalStrength: 95,
      traits: ["Reasoning Shockwave", "Efficiency King", "Open Weights"]
    }
  ],
  vision: {
    images: [
      {
        name: "Midjourney V7",
        description: "The aesthetic gold standard for creative direction and world-building.",
        excelledAt: ["Cinematic Texture", "Object Integrity", "Style Persistence"],
        whyItMattered: "Taste at scale—the model designers reach for when it needs to look 'final'.",
        releaseDate: "Apr 3, 2025",
        definingTrait: "Aesthetic Excellence",
        platformUrl: "https://midjourney.com",
        techStack: ["Omni Reference", "Draft Mode"]
      },
      {
        name: "FLUX.2",
        description: "High-end commercial image generation with multi-reference consistency.",
        excelledAt: ["Text Rendering", "Brand Layout", "Consistency"],
        whyItMattered: "Brought studio-grade repeatability to the open ecosystem.",
        releaseDate: "Nov 11, 2025",
        platformUrl: "https://blackforestlabs.ai",
        techStack: ["FP8 Optimizations", "Azure AI Foundry"]
      }
    ],
    videos: [
      {
        name: "Runway Gen-4.5",
        description: "Consistency across shots, defining the era of AI filmmaking.",
        excelledAt: ["Scene Continuity", "Character Locking", "Realism"],
        whyItMattered: "Made 'AI Video' feel like a product category you can actually ship work with.",
        releaseDate: "Dec 1, 2025",
        platformUrl: "https://runwayml.com"
      },
      {
        name: "Luma Ray3 Modify",
        description: "Pivoting from generation to 'editing reality' with AI.",
        excelledAt: ["Video-to-Video", "Footage Preservation", "VFX"],
        whyItMattered: "Preserves actor performance while altering the world around them.",
        releaseDate: "Dec 2025",
        platformUrl: "https://lumalabs.ai"
      }
    ]
  },
  coding: [
    {
      name: "Cursor",
      description: "The system-wide IDE that defined 'Vibe Coding'.",
      excelledAt: ["Repo Awareness", "Architectural Refactors"],
      whyItMattered: "Created a daily dependence for elite engineering teams.",
      cost: "$20/mo",
      platformUrl: "https://cursor.sh"
    },
    {
      name: "GitHub Copilot Workspace",
      description: "Task-level software agents operating on issues and PRs.",
      excelledAt: ["Task Orchestration", "PR Management"],
      whyItMattered: "The default enterprise surface for AI-augmented software teams.",
      platformUrl: "https://github.com"
    }
  ],
  agents: [
    {
      name: "n8n (Agent Mode)",
      description: "Self-hostable orchestration for private enterprise agent swarms.",
      excelledAt: ["Private Pipelines", "Tool Chaining"],
      whyItMattered: "The connective tissue for agents operating on real-world systems.",
      platformUrl: "https://n8n.io"
    }
  ],
  apps: [
    {
      name: "Perplexity",
      description: "Knowledge work accelerant replacing traditional search for deep inquiry.",
      excelledAt: ["Synthesis", "Source Transparency", "Fact-First"],
      whyItMattered: "Users stopped browsing and started interrogating information.",
      platformUrl: "https://perplexity.ai"
    }
  ],
  audio: [
    {
      name: "Eleven v3",
      description: "Production-grade voice with scene direction and emotional performance.",
      excelledAt: ["Expressivity", "Multi-Speaker Dialogue"],
      whyItMattered: "Voice went from 'reading text' to 'performing emotion'.",
      platformUrl: "https://elevenlabs.io"
    },
    {
      name: "Suno v5",
      description: "Music generation with professional-grade production knobs.",
      excelledAt: ["Song Structure", "Production Quality"],
      whyItMattered: "Turned music creation into a cultural behavior for millions.",
      platformUrl: "https://suno.com"
    }
  ],
  cloud: [
    {
      title: "AWS Bedrock",
      slug: "aws",
      segment: "Infrastructure",
      releaseTimeline: "Nova 2 (re:Invent 2025)",
      advancements: [
        "Bedrock became the 'Model Mall' of choice for the Fortune 500.",
        "Launched Amazon Nova 2: Proprietary multimodal series optimized for cost."
      ],
      missed: [
        "Governance is the product: identity, logging, and audit hooks won enterprise deals.",
        "Distribution partner for Anthropic, Mistral, and Meta."
      ],
      zenVerdict: "AWS is the utility layer; they provide the grid that the intelligence economy runs on.",
      signalStrength: 92,
      traits: ["Enterprise Gravity", "Model Mall", "Governance First"],
      investment: "",
      watch2026: []
    }
  ]
};
