
import { AlmanacData } from './types';

export const ALMANAC_DATA: AlmanacData = {
  providers: [
    {
      title: "OpenAI",
      slug: "openai",
      segment: "Lab",
      releaseTimeline: "GPT-5.2 (Dec 11, 2025)",
      advancements: [
        "GPT-5.2: Flagship upgrade with 'agentic tool-calling' and deep multimodal reasoning.",
        "GPT-5.2-Codex (Dec 2025): Specialized release for software refactoring and long-running tasks.",
        "Responses API standardized the 'Agent OS' layer for web and file-use.",
        "Sora 2 & GPT-Image-1.5: Transitioned creative AI into production studio pipelines."
      ],
      missed: [
        "Formalized coding/agent experiences as first-class products.",
        "Strategic shift: Focus on 'AI that finishes the job' over simple chat."
      ],
      revenue: "$13B Reported",
      metrics: [
        { label: "ARR Velocity", value: "3x", trend: 'up', percentage: "200%" },
        { label: "Agent Nodes", value: "2M+", trend: 'up' }
      ],
      pricing: [
        { model: "GPT-5.2 Pro", input: "$1.75", cached: "$0.175", output: "$14.00" },
        { model: "GPT-5.1", input: "$1.25", cached: "$0.125", output: "$10.00" }
      ],
      investment: "Hiring surged in systems engineering; CCO step-down signaled leadership churn.",
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
        "Earned the 'Safe Haven' reputation for regulated industries.",
        "Hybrid Reasoning: Balancing fast intuition with slow, methodical deduction."
      ],
      revenue: ">$5B Run-rate",
      metrics: [
        { label: "Trust Score", value: "99.9%", trend: 'up' },
        { label: "Token Persistence", value: "Elite", trend: 'up' }
      ],
      pricing: [
        { model: "Opus 4.5", input: "$15.00", cached: "$3.75", output: "$75.00" },
        { model: "Sonnet 4.5", input: "$3.00", cached: "$0.75", output: "$15.00" }
      ],
      investment: "Safety alignment remains 40% of research budget; deep AWS/Google cloud distribution.",
      watch2026: [
        "Deeper 'Computer Use' maturity; models that manage entire desktops.",
        "Advanced agent verification and auditability logs."
      ],
      platformUrl: "https://anthropic.com",
      zenVerdict: "Predictability is the ultimate feature; Anthropic owns the reliability narrative.",
      signalStrength: 94,
      traits: ["Computer Use", "Long Context", "High Reliability"]
    },
    {
      title: "Microsoft",
      slug: "microsoft",
      segment: "Big Tech",
      releaseTimeline: "Copilot Studio Agents (2025)",
      advancements: [
        "Copilot Studio: Massive expansion into multi-agent business workflows.",
        "Copilot for Security GA: First real AI SOC analyst for enterprise defense.",
        "Deep embedding of GPT-5.x into Windows, M365, and the Azure kernel.",
        "GitHub Copilot Workspace: Shifted coding from autocomplete to feature-agent."
      ],
      missed: [
        "Distribution supremacy: Microsoft won by being the default interface for work.",
        "Quietly shifted from 'AI partner' to 'AI platform' with custom MAIA silicon."
      ],
      revenue: "$60B+ AI-Linked",
      metrics: [
        { label: "Seat Adoption", value: "400M+", trend: 'up' },
        { label: "Enterprise Nodes", value: "Fortune 500", trend: 'up' }
      ],
      investment: "Massive datacenter expansion; Azure AI Foundry centralized model governance.",
      watch2026: [
        "Autonomous OS: Windows becomes a canvas for persistent background agents.",
        "Verticalized Copilots for every major industry (Legal, Med, Eng)."
      ],
      platformUrl: "https://microsoft.com/ai",
      zenVerdict: "Microsoft didn't win by being first; they won by being everywhere.",
      signalStrength: 95,
      traits: ["Distribution Moat", "Enterprise Governance", "Agent Factory"]
    },
    {
      title: "Mistral AI",
      slug: "mistral",
      segment: "Lab",
      releaseTimeline: "Mistral Large 3 (Late 2025)",
      advancements: [
        "Mistral Large 3: Europe's first frontier model contesting US labs at scale.",
        "Codestral 2: Leading open-ish coding model adopted inside enterprises.",
        "Le Chat Enterprise: Shift toward vertical software for European privacy needs.",
        "Aggressive €/$ undercut pricing forced a market-wide re-pricing shock."
      ],
      missed: [
        "Proved that European labs can ship frontier-class models with higher efficiency.",
        "Strategic 'Open but Usable' posture won the hearts of data-sovereign nations."
      ],
      revenue: "High Growth / €6B Valuation",
      metrics: [
        { label: "Euro Market Share", value: "Dominant", trend: 'up' },
        { label: "Efficiency Ratio", value: "Top Tier", trend: 'up' }
      ],
      investment: "Deep partnerships with AWS Bedrock and Azure; focused on B2B verticalization.",
      watch2026: [
        "Specialized MoE variants for multi-language European legal stacks.",
        "Further price-performance disruption in the mid-tier market."
      ],
      platformUrl: "https://mistral.ai",
      zenVerdict: "The European contestant that kept the American labs honest through price and efficiency.",
      signalStrength: 91,
      traits: ["Efficiency King", "Price Disruptor", "Data Sovereignty"]
    },
    {
      title: "xAI",
      slug: "xai",
      segment: "Lab",
      releaseTimeline: "Grok-2 / Grok-3 (2025)",
      advancements: [
        "Grok-2/3: Leveraged the real-time X social firehose for live-world reasoning.",
        "Massive Blackwell GPU deployment: Built one of the world's largest compute clusters.",
        "Grok-Vision: Native integration into Tesla and X for visual scene understanding.",
        "Positioned as the 'Truth' model, emphasizing un-filtered data retrieval."
      ],
      missed: [
        "Defining the 'Live Reasoning' pattern: AI that watches the world in real-time.",
        "Rapidly caught up to frontier performance through brute-force compute scaling."
      ],
      revenue: "N/A (Private)",
      metrics: [
        { label: "Compute Rank", value: "#1 Public", trend: 'up' },
        { label: "Signal Latency", value: "Low", trend: 'down' }
      ],
      investment: "Billion-dollar compute campuses; direct hardware-to-model verticalization.",
      watch2026: [
        "Deep integration into physical robotics (Optimus) for real-world agency.",
        "Grok as the primary OS for the X ecosystem expansion."
      ],
      platformUrl: "https://x.ai",
      zenVerdict: "Brute force works. xAI turned a social network into a training refinery.",
      signalStrength: 93,
      traits: ["Live Data", "Compute Dense", "Unfiltered Reasoning"]
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
        "Delayed Assistant replacement into 2026: Signal that smart-home integration is hard.",
        "Distribution moat: Gemini is now a layer in Search, Android, and Workspace."
      ],
      revenue: "$100B+ (Cloud/Search)",
      metrics: [
        { label: "Daily Tokens", value: "Trillions", trend: 'up' },
        { label: "Compute Pool", value: "14+ ExaFLOPS", trend: 'up' }
      ],
      investment: "Massive hardware investment (TPUs); consolidating Labs into product cycles.",
      watch2026: [
        "Full Android transition to Gemini.",
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
      releaseTimeline: "Llama 4 (Apr 2025)",
      advancements: [
        "Llama 4 Scout & Maverick: Natively multimodal open-weight models.",
        "Extreme context length targets reached, rivaling closed labs.",
        "Natively multimodal training for video and audio understanding."
      ],
      missed: [
        "Cemented that 'Open' can be cutting-edge, not just a trailing alternative.",
        "Zuckerberg's 'Compute Moat' strategy: Billions in H100/Blackwell infrastructure."
      ],
      investment: "Open source is the defense; ecosystem dominance is the goal.",
      watch2026: [
        "Llama 4.5 reasoning variants and specialized agent weights.",
        "Deeper on-device optimization for AR/VR hardware."
      ],
      zenVerdict: "Meta is the open-weight lighthouse; they provide the infrastructure the rest of the world builds on.",
      signalStrength: 97,
      traits: ["Multimodal Native", "Compute Moat", "Ecosystem Standard"]
      // Fix: Removed duplicate 'advancements' and 'missed' properties previously here
    },
    {
      title: "DeepSeek",
      slug: "deepseek",
      segment: "Open Source",
      releaseTimeline: "R1 (Jan 20, 2025)",
      advancements: [
        "DeepSeek-R1: The reasoning shockwave that challenged Western lab dominance.",
        "R1-0528 Upgrade: Reduced hallucinations and added native JSON/Function calling.",
        "Proved that state-of-the-art reasoning doesn't require Western hyperscale spend."
      ],
      missed: [
        "Geopolitical signal: Disrupted the 'Compute Moat' narrative through architectural efficiency.",
        "Economic disruption: Forced pricing drops across the global API market."
      ],
      investment: "Efficiency-first research; massive adoption in developer communities.",
      watch2026: [
        "DeepSeek-V3/R2 with enhanced multimodal capabilities.",
        "Specialized coding models competing directly with top proprietary labs."
      ],
      zenVerdict: "The most disruptive entity of 2025. Clever architecture beats brute-force spend.",
      signalStrength: 95,
      traits: ["Reasoning Shockwave", "Efficiency King", "Open Weights"]
      // Fix: Removed duplicate 'advancements' and 'missed' properties previously here
    },
    {
      title: "Alibaba (Qwen)",
      slug: "qwen",
      segment: "Open Source",
      releaseTimeline: "Qwen3 (Apr 2025)",
      advancements: [
        "Qwen3: A broad family of open models (general + coding + translation).",
        "Qwen2-VL: Became the default standard for open multimodal research in Asia.",
        "Aggressive iteration: Released 10+ variants optimized for different enterprise tasks."
      ],
      missed: [
        "Qwen became the 'default open stack' for many global builders.",
        "Strong performance in coding and complex translation tasks."
      ],
      investment: "Alibaba Cloud distribution; massive focus on Asian market dominance.",
      watch2026: [
        "Deeper verticalization for manufacturing and e-commerce agents.",
        "Next-gen MoE architectures with 500B+ parameters."
      ],
      zenVerdict: "The reliable workhorse of the open ecosystem; broad, strong, and consistent.",
      signalStrength: 92,
      traits: ["Default Open Stack", "Multimodal VL", "Global Adoption"]
    },
    {
      title: "Mistral Open",
      slug: "mistral-open",
      segment: "Open Source",
      releaseTimeline: "Codestral Open (2025)",
      advancements: [
        "Mixtral 8x22B Instruct: Continued the MoE dominance in the mid-size open market.",
        "Codestral Open: Provided a serious open alternative for local-first coding agents.",
        "Mistral Medium 3: Enterprise-grade open-weight multimodal release."
      ],
      missed: [
        "Reinforced the 'Open but Enterprise-Grade' narrative in Europe.",
        "Kept open-weights viable for high-security enterprise environments."
      ],
      investment: "Partnership with NVIDIA for FP8/INT8 optimizations.",
      watch2026: [
        "Local-first agent weights for sovereign cloud deployments.",
        "Multi-lingual specialization for non-English primary markets."
      ],
      zenVerdict: "The European anchor for the open ecosystem.",
      signalStrength: 89,
      traits: ["MoE Pioneers", "Sovereign AI", "Enterprise Weights"]
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
        name: "OpenAI Sora",
        description: "The cinema-scale architecture for coherent, multi-shot AI storytelling.",
        excelledAt: ["Studio-grade Storyboarding", "Multi-shot Continuity", "Physics Realism"],
        whyItMattered: "Shifted AI video from novelty clips to production scene pre-viz.",
        releaseDate: "Dec 2025",
        platformUrl: "https://openai.com/sora"
      },
      {
        name: "Runway Gen-4.5",
        description: "Professional filmmaking tool focused on scene and character consistency.",
        excelledAt: ["Scene Continuity", "Character Locking", "Realism"],
        whyItMattered: "Made 'AI Video' feel like a product category you can actually ship work with.",
        releaseDate: "Dec 1, 2025",
        platformUrl: "https://runwayml.com"
      },
      {
        name: "Pika Labs 2.0",
        description: "The speed-of-light creative tool for short-form video creators.",
        excelledAt: ["Motion Controls", "Character Consistency", "Creative Flair"],
        whyItMattered: "Defined the 'short-form' culture of AI video in 2025.",
        releaseDate: "Oct 2025",
        platformUrl: "https://pika.art"
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
      name: "Claude Code",
      description: "The terminal sovereign—a CLI agent that operates tools autonomously.",
      excelledAt: ["Workflow Automation", "Deep Debugging", "Tool Operation"],
      whyItMattered: "First major lab-native agentic coding assistant that 'uses computers'.",
      releaseDate: "Feb 2025",
      platformUrl: "https://anthropic.com/claude-code"
    },
    {
      name: "Aider / Continue",
      description: "The local-first coding agent movement for sovereign developers.",
      excelledAt: ["Local LLM Support", "Git Integration", "Privacy"],
      whyItMattered: "Proved that top-tier agentic coding can happen outside of proprietary IDEs.",
      platformUrl: "https://aider.chat"
    }
  ],
  agents: [
    {
      name: "OpenAI Responses API",
      description: "The Agent OS layer—standardizing model interactions with tools.",
      excelledAt: ["Tool Standardization", "Agent Memory", "Context Management"],
      whyItMattered: "Became the 'new primitive' for building agents that finish jobs.",
      releaseDate: "Mar 2025",
      platformUrl: "https://platform.openai.com"
    },
    {
      name: "LangGraph / LangChain",
      description: "The framework layer for building complex, multi-agent business logic.",
      excelledAt: ["State Management", "Graph Logic", "Orchestration"],
      whyItMattered: "The defacto standard for serious enterprise agent architectures.",
      platformUrl: "https://langchain.com"
    }
  ],
  apps: [
    {
      name: "Perplexity",
      description: "Knowledge work accelerant replacing traditional search.",
      excelledAt: ["Synthesis", "Source Transparency", "Fact-First"],
      whyItMattered: "Users stopped browsing and started interrogating information.",
      platformUrl: "https://perplexity.ai"
    }
  ],
  audio: [
    {
      name: "OpenAI Realtime Voice",
      description: "Latency-optimized speech-to-speech for tutors and companions.",
      excelledAt: ["Ultra-Low Latency", "Emotional Nuance", "Interruption Handling"],
      whyItMattered: "The foundation for the next generation of conversational interfaces.",
      platformUrl: "https://openai.com/api"
    },
    {
      name: "Udio",
      description: "Professional-grade music generation with high fidelity and structure.",
      excelledAt: ["Vocal Clarity", "Complex Arrangements", "Production Value"],
      whyItMattered: "Alongside Suno, completed the music-gen duopoly of 2025.",
      platformUrl: "https://udio.com"
    },
    {
      name: "Eleven v3",
      description: "Production voice with scene direction and performance.",
      excelledAt: ["Expressivity", "Multi-Speaker Dialogue"],
      whyItMattered: "Voice went from 'reading' to 'performing'.",
      platformUrl: "https://elevenlabs.io"
    }
  ],
  cloud: [
    {
      title: "NVIDIA",
      slug: "nvidia",
      segment: "Infrastructure",
      releaseTimeline: "Blackwell B200 (2025)",
      advancements: [
        "Blackwell B200: Redefined compute as rack-scale coherence (NVL72).",
        "AI Factories: Framed compute infrastructure as national policy.",
        "CUDA 13: Strengthened the software moat for production AI loads.",
        "Networking: Quantum-X800 InfiniBand enabled exascale clusters."
      ],
      missed: [
        "The Landlord of Intelligence: NVIDIA rewrote the planetary compute grid.",
        "Inference shift: Blackwell optimized specifically for real-time agentic loads."
      ],
      zenVerdict: "Compute is the new oil, and NVIDIA owns the refinery.",
      signalStrength: 100,
      traits: ["Compute Moat", "Blackwell Core", "National Infrastructure"],
      investment: "Global datacenter dominance; sovereign AI partner for nations.",
      watch2026: [
        "Rubin Architecture transition; further density leaps.",
        "Custom hyperscale silicon competition intensifies."
      ]
    },
    {
      title: "Azure AI Foundry",
      slug: "azure-foundry",
      segment: "Infrastructure",
      releaseTimeline: "GA 2025",
      advancements: [
        "Model Catalog: Unified access to OpenAI, Mistral, Meta, and Cohere.",
        "Deep OpenAI Coupling: Exclusive first-look at frontier 'Responses' features.",
        "Enterprise Governance: Identity, logging, and audit hooks for F500.",
        "Azure AI Content Safety: Standardized the 'Safety-as-a-Service' layer."
      ],
      missed: [
        "Governance is the product: Won the enterprise by being the 'safe' way to deploy.",
        "Unified 'Foundry' interface collapsed the gap between experiment and production."
      ],
      zenVerdict: "The production line for enterprise intelligence.",
      signalStrength: 94,
      traits: ["Model Mall", "Governance Standard", "OpenAI Native"],
      investment: "Massive global region expansion; security-first architecture.",
      watch2026: []
    },
    {
      title: "AWS Bedrock",
      slug: "aws",
      segment: "Infrastructure",
      releaseTimeline: "Nova 2 (re:Invent 2025)",
      advancements: [
        "Bedrock: Became the 'Model Mall' of choice for multi-provider strategies.",
        "Amazon Nova 2: Proprietary multimodal series optimized for cost and speed.",
        "Anthropic Exclusive Partner: Defacto home for the Claude 4.5 family."
      ],
      missed: [
        "Distribution supremacy: Bedrock launched in 5+ new regions in a single month.",
        "Model Mall: Supported Claude, Llama, Mistral, and Stability."
      ],
      zenVerdict: "The grid that the intelligence economy runs on.",
      signalStrength: 93,
      traits: ["Enterprise Gravity", "Model Mall", "Distribution King"],
      investment: "Gigawatt-scale datacenter campuses; custom Trainium silicon.",
      watch2026: []
    }
  ]
};
