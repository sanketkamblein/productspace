"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  GraduationCap,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  FileText,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Monitor,
} from "lucide-react"

export default function Portfolio() {
  const ProjectDetailView = ({ project }: { project: any }) => {
    if (!project.details) return null
    const { details } = project
    let sectionCounter = 1

    const renderSection = (title: string, content: string | string[], isList = false) => {
      if (!content) return null
      return (
        <div>
          <h4 className="text-base md:text-lg font-semibold text-primary mb-1">
            {sectionCounter++}. {title}
          </h4>
          {isList && Array.isArray(content) ? (
            <ul className="list-disc list-inside space-y-1 pl-2">
              {content.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )
    }

    return (
      <div className="space-y-4 text-left text-sm md:text-base text-gray-700">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-lg bg-muted p-3 text-xs md:text-sm">
          {details.role && (
            <div className="flex items-center gap-1">
              <strong>Role:</strong>
              <span className="ml-1">{details.role}</span>
            </div>
          )}
          {details.company && (
            <div className="flex items-center gap-1">
              <strong>Company:</strong>
              <span className="ml-1">{details.company}</span>
            </div>
          )}
          {details.client && (
            <div className="flex items-center gap-1">
              <strong>Client:</strong>
              <span className="ml-1">{details.client}</span>
            </div>
          )}
          {details.duration && (
            <div className="flex items-center gap-1">
              <strong>Duration:</strong>
              <span className="ml-1">{details.duration}</span>
            </div>
          )}
          {details.context && (
            <div className="flex items-center gap-1">
              <strong>Context:</strong>
              <span className="ml-1">{details.context}</span>
            </div>
          )}
          {details.track && !details.context && (
            <div className="flex items-center gap-1">
              <strong>Track:</strong>
              <span className="ml-1">{details.track}</span>
            </div>
          )}
          {details.stage && (
            <div className="flex items-center gap-1">
              <strong>Stage:</strong>
              <span className="ml-1">{details.stage}</span>
            </div>
          )}
          {details.team && (
            <div className="flex items-center gap-1">
              <strong>Team:</strong>
              <span className="ml-1">{details.team}</span>
            </div>
          )}
          {details.teamSize && (
            <div className="flex items-center gap-1">
              <strong>Team Size:</strong>
              <span className="ml-1">{details.teamSize}</span>
            </div>
          )}
          {details.techStack && (
            <div className="flex items-center gap-1">
              <strong>Tech Stack:</strong>
              <span className="ml-1">{details.techStack}</span>
            </div>
          )}
          {details.productType && (
            <div className="flex items-center gap-1">
              <strong>Product Type:</strong>
              <span className="ml-1">{details.productType}</span>
            </div>
          )}
          {details.domain && (
            <div className="flex items-center gap-1">
              <strong>Domain:</strong>
              <span className="ml-1">{details.domain}</span>
            </div>
          )}
          {details.ipStatus && (
            <div className="flex items-center gap-1">
              <strong>IP Status:</strong>
              <span className="ml-1">{details.ipStatus}</span>
            </div>
          )}
          {details.type && (
            <div className="flex items-center gap-1">
              <strong>Type:</strong>
              <span className="ml-1">{details.type}</span>
            </div>
          )}
        </div>

        {renderSection("Product Vision", details.productVision)}
        {renderSection("Context & Evolution", details.contextAndEvolution)}
        {renderSection("Project Context", details.projectContext)}
        {renderSection("The Challenge", details.challenge)}
        {renderSection("Hypothesis", details.hypothesis)}
        {renderSection("My Role", details.myRole)}
        {renderSection("My Role & Ownership", details.myRoleAndOwnership, true)}
        {renderSection("Your Role & Responsibility", details.myRoleAndResponsibility, true)}
        {renderSection("Your Role & Contribution", details.yourRoleAndContribution, true)}
        {renderSection("My Approach", details.approach, true)}
        {details.solutionDescription && <p className="mb-2">{details.solutionDescription}</p>}
        {renderSection("Solution Overview", details.solution, true)}
        {renderSection("Key Features", details.keyFeatures, true)}
        {renderSection("Key Features Shaped", details.keyFeaturesShaped, true)}
        {renderSection("Applications Delivered", details.applicationsDelivered, true)}
        {renderSection("Key Personas", details.keyPersonas, true)}
        {renderSection("User Personas Identified", details.userPersonasIdentified, true)}
        {renderSection("Architecture & Integration", details.architectureAndIntegration, true)}
        {renderSection("Go-to-Market & Monetization", details.goToMarket)}
        {renderSection("Key Contributions", details.contributions, true)}
        {renderSection("Core Learnings & Contributions", details.coreLearningsAndContributions, true)}
        {renderSection("Challenges & Solutions", details.challengesAndSolutions, true)}
        {renderSection("UX Process", details.uxProcess, true)}
        {renderSection("Scope & Limitations", details.scopeAndLimitations, true)}
        {renderSection("Tools & Technologies Used", details.toolsAndTechnologiesUsed, true)}
        {renderSection("Outcome", details.outcome, true)}
        {renderSection("Outcome & Impact", details.outcomeAndImpact, true)}
        {renderSection("Outcome & Learning", details.outcomeAndLearning, true)}
        {renderSection("Success Metrics", details.metrics, true)}
        {renderSection("Tools & Skills Applied", details.toolsAndSkills, true)}
        {renderSection("Skills & Tools", details.skillsAndTools, true)}
        {renderSection("What You'd Improve Now", details.whatYoudImproveNow)}

        {(details.workflowLink || details.mockupsLink) && (
          <div className="flex flex-wrap gap-3 pt-3 mt-3 border-t">
            {details.workflowLink && (
              <Button asChild variant="outline" size="sm">
                <a href={details.workflowLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1.5" />
                  Workflow Diagram
                </a>
              </Button>
            )}
            {details.mockupsLink && (
              <Button asChild variant="outline" size="sm">
                <a href={details.mockupsLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 mr-1.5" />
                  UI Mockups
                </a>
              </Button>
            )}
          </div>
        )}
      </div>
    )
  }
  const [scrolled, setScrolled] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<SVGPathElement>(null)

  const project1Ref = useRef<HTMLDivElement>(null)
  const project4Ref = useRef<HTMLDivElement>(null)
  const project8Ref = useRef<HTMLDivElement>(null)
  const lastProjectRef = useRef<HTMLDivElement>(null)

  const [pathD, setPathD] = useState("")
  const [svgViewBox, setSvgViewBox] = useState("0 0 1400 1000")
  const [showEndMarker, setShowEndMarker] = useState(false) // Renamed from showEndCircle

  const projects = [
    {
      id: 1,
      title: "SAP Learning Fest | AI-Powered Multi-Round Auction in SAP Ariba",
      category: "Product Role Work",
      description:
        "AI-driven recommendations to guide sourcing managers during multi-round auction events in SAP Ariba.",
      badge: "Product Management Trainee",
      year: "2023",
      image: "/placeholder.svg?height=200&width=300",
      details: {
        role: "Product Management Trainee",
        duration: "4 Months",
        track: "SAP Ariba",
        techStack: "HPOM (Hypothesis–Problem–Opportunity–Metrics)",
        challenge:
          "Sourcing managers in SAP Ariba struggle to decide the next best step during multi-round auction events, especially when supplier bids are competitive or ambiguous. This leads to delays and inconsistent supplier engagement.",
        hypothesis:
          "If the system could provide AI-driven next-step recommendations during auctions—based on past data, pricing trends, and supplier profiles—it would reduce decision friction and improve sourcing outcomes.",
        approach: [
          "Identified the problem through conversations with Ariba consultants.",
          "Extended the scope to include AI-based supplier selection suggestions, validating the relevance with sourcing experts.",
          "Used the HPOM model to structure problem framing, ideation, and feedback.",
        ],
        solution: [
          'AI suggests contextual next steps: "Proceed to next round", "Accept bid", or "Negotiate."',
          "Supplier Scorecards update across rounds to reflect price, delivery score, and bidding behavior.",
          "Designed a modular UI that integrates with existing Ariba sourcing screens.",
        ],
        metrics: [
          "30% reduction in sourcing decision time",
          "Increase in supplier compliance and auction closure rate",
          "Positive feedback from Ariba consultants on concept viability",
        ],
        contributions: [
          "Framed the problem and hypothesis independently",
          "Led expert validation and stakeholder conversations",
          "Designed the proposed user flow and low-fidelity UI mockups",
          "Presented the solution at Learning Fest for internal evaluation",
        ],
        workflowLink: "#",
        mockupsLink: "#",
      },
    },
    {
      id: 2,
      title: "Industrial Systems - SAP EAM",
      category: "UX Design",
      description: "UX-PM for Asset Management Experience in SAP Private and Public Cloud.",
      badge: "UX Product Manager",
      year: "2022",
      image: "/placeholder.svg?height=200&width=300",
      details: {
        role: "UX Product Manager",
        context: "SAP Private and Public Cloud | Asset Management (EAM)",
        duration: "Ongoing",
        team: "Cross-functional (Design, Dev, PM, Cloud Infra)",
        challenge:
          "SAP needed a scalable, consistent UI experience to manage technical systems and objects (like Equipment, Functional Locations) across both Private and Public Cloud deployments. The core challenge was aligning multiple cloud streams while addressing increasing complexity in data structures and user needs.",
        myRole:
          "As a UX-PM hybrid, I led design alignment, investigated UI tech feasibility, and ensured end-user needs were balanced with system constraints — while nurturing design thinking within the team.",
        contributions: [
          "Facilitated design discussions between private and public cloud teams to align UI patterns, user journeys, and roadmap dependencies.",
          "Conducted UI tech investigation for advanced network graph visualization (D3.js, Cytoscape, Graph API) to support system connectivity views.",
          "Drove mockup feedback cycles with internal SMEs and customers to shape the evolving product experience.",
          "Mentored a junior designer on public cloud tasks — from information architecture to detailed interaction design.",
          "Learned and applied SAP Grow and RISE fundamentals, gaining clarity on how Industrial Systems tie into transformation strategies.",
          "Explored data governance in Asset Management, understanding master data challenges and their implications on usability and trust.",
        ],
        outcome: [
          "Delivered early-stage concepts and mid-fidelity mockups for System Overview and Interconnectivity.",
          "Improved team alignment by documenting UI reuse potential and edge cases across deployment models.",
          "Positioned design as a proactive voice in early backlog planning and technical evaluation.",
        ],
        toolsAndSkills: [
          "Figma, Miro, SAP Fiori, Graph Libraries",
          "Design QA, UX Writing, Systems Thinking",
          "Product Discovery, Stakeholder Facilitation",
          "Asset Master Data Modeling",
          "Team Mentorship and Collaboration",
        ],
      },
    },
    {
      id: 3,
      title: "AxonRad AI | Product Lead – Radiology AI & Diagnostic ERP",
      category: "Product Role Work", // Or "AI Product"
      description: "Led product for AI-driven clinical summarization and diagnostic ERP.",
      badge: "Product Lead",
      year: "2022", // Assuming year remains same, or update if different
      image: "/placeholder.svg?height=200&width=300",
      details: {
        role: "Product Lead (joined as co-founder of FlashRad AI)",
        company: "AxonRad AI (formerly Axon Health + FlashRad AI)",
        stage: "MVP Built | Status: Pre-incubation | Domain: Radiology, Diagnostic ERP",
        team: "ML Developer, Use Case Owner, Product Designer, Vendor Engineers",
        productVision:
          "To transform diagnostic radiology reporting by combining AI-driven clinical summarization with a modular healthcare ERP system, tailored for next-generation diagnostic labs in India.",
        contextAndEvolution:
          "Started during an AI health-tech hackathon as FlashRad AI, the product matured into AxonRad AI under the Axon Health umbrella. Initially B2C-focused (mobile-based report generation), we pivoted toward a B2B model for radiology labs and diagnostic centers, where structured reporting and ERP integration proved essential.",
        myRoleAndOwnership: [
          "Spearheaded product strategy across two tracks: Radiology AI – NLP-based summarization of radiology scans (CT, X-Ray) and Healthcare ERP – Patient registration, test workflow, consent, billing.",
          "Defined and prioritized feature sets under developer constraints, ensuring iterative delivery with minimal engineering resources.",
          "Led product discovery with diagnostic center stakeholders, validating needs around speed, compliance, and mobile usability.",
          "Managed Jira backlog, defined technical handoffs for LLM integration, and supervised vendor teams working on frontend and mobile.",
        ],
        outcomeAndImpact: [
          "Delivered an MVP featuring: AI-structured report templates, Doctor feedback flow, and Mobile report viewer with editable sections.",
          "Defined go-to-market pitch, pricing, and prepared decks for pre-incubation submission.",
          "Aligned both AI and ERP roadmap for future scaling across lab chains and radiology groups.",
        ],
        skillsAndTools: [
          "Product Management, AI/UX Strategy, Stakeholder Validation",
          "Tools: Jira, Figma, Notion, Google Workspace",
          "Applied knowledge of HIPAA standards, NABH workflows, diagnostic billing flows",
          "Adapted agile delivery in resource-constrained environments, while maintaining clinical quality and scalability",
        ],
      },
    },
    {
      id: 4,
      title: "SAP Invent 2024: EcoPulse",
      category: "Innovation Work",
      description: "Integrated Sensor Monitoring for Sustainable Plant Operations",
      badge: "IIoT + Sustainability",
      year: "2023",
      image: "/placeholder.svg?height=200&width=300",
      details: {
        productType: "IIoT + Sustainability Dashboard",
        company: "YOKOGAWA",
        team: "Sanket Kamble , Sunil Maurya , Mahesh Gonda & Mehul Jain (Development)",
        challenge:
          "Heavy industry manufacturers lack a centralized, user-friendly tool to analyze diverse sensor data—hindering production optimization, proactive maintenance, and sustainability decisions.",
        solutionDescription: "EcoPulse is a unified platform that:",
        solution: [
          "Monitors multi-sensor data (temperature, vibration, pressure, energy)",
          "Maps equipment to sensors for traceability",
          "Visualizes real-time data through a comprehensive dashboard",
          "Triggers preventive maintenance using smart business rules",
          "Calculates CO₂ footprint by linking energy consumption with emissions",
        ],
        keyPersonas: [
          "Sustainability Manager: Analyzes and acts on carbon data",
          "Plant Manager: Monitors equipment health and schedules maintenance",
          "Admin: Manages CO₂ rules, calibration standards, and configuration",
        ],
        architectureAndIntegration: [
          "Sensor data integration via API or file-based ingestion",
          "Equipment-sensor mapping for efficient tracking",
          "Customizable admin portal for compliance and rule updates",
          "Business logic engine for generating alerts and triggering maintenance orders",
        ],
        outcome: [
          "Reduces plant downtime via predictive insights",
          "Supports CO₂ compliance and environmental audits",
          "Improves transparency in energy usage and sustainability tracking",
        ],
      },
    },
    {
      id: 5,
      title: "SAP Invent '24 : Intelligent Controls Compliance System",
      category: "Innovation Work",
      description: "AI-based anomaly detection for vendor invoices in Accounts Payable",
      badge: "Hack for Customers Finalist",
      year: "2024",
      image: "/placeholder.svg?height=200&width=300",
      details: {
        role: "Product Contributor (UX & AI Collaboration)",
        company: "Asian Paints",
        track: "Hack for Customers Finalist",
        team: "Resolver (5 members)",
        techStack: "SAP BTP, S/4HANA, SAP Data Sphere, AI, GenAI Hub",
        challenge:
          "Asian Paints processes a high volume of vendor invoices in varying formats, making its Accounts Payable (AP) process heavily manual, error-prone, and compliance-sensitive. Despite using rule-based automation, anomalies still slipped through, creating financial risk and audit inconsistencies.",
        solution: [
          "Machine Learning for invoice exception detection",
          "Fiori dashboard to visualize and interact with anomalies",
          "GenAI integration for summarizing detected irregularities in plain language",
          "Scalable architecture for future use cases (insurance claims, customer credit behavior)",
        ],
        contributions: [
          "Participated in solution design and user journey definition",
          "Mapped out the dashboard experience for AP Managers",
          "Contributed to the architecture planning and ML–GenAI alignment",
          "Collaborated with team to shape demo and pitch narrative for judges",
        ],
        outcome: [
          "Selected as Finalist in SAP Invent '24 Hack for Customers",
          "Received positive feedback for real-world relevance, enterprise scalability, and explainability",
          "Post-MVP roadmap proposed to extend use beyond invoices to broader compliance documents",
        ],
        toolsAndSkills: [
          "SAP BTP Architecture, GenAI Prompting",
          "UX Journey Mapping, Dashboard Design",
          "AI + ERP Integration Planning",
          "Team Pitching, Enterprise Storytelling",
        ],
      },
    },
    {
      id: 6,
      title: "coviCLOUD – Road to Recovery",
      category: "Innovation Work",
      description: "An Integrated Digital Platform for COVID-19 Patient Support and Hospital Connectivity",
      badge: "Public Health SaaS",
      year: "2020",
      image: "/placeholder.svg?height=200&width=300",
      details: {
        productType: "Public Health SaaS (Mobile + Web Platform)",
        domain: "Pandemic Response | Healthcare Accessibility | Patient-Centric Services",
        teamSize: "8+ cross-functional members (Product, Public Health, Engineering, Business)",
        challenge:
          "During the COVID-19 pandemic, patients and their caretakers struggled with disjointed, unreliable, and rapidly outdated information regarding bed availability, admission protocols, plasma donors, and verified consultation—leading to panic, poor decision-making, and systemic stress.",
        solutionDescription: "coviCLOUD is a consolidated, multilingual platform designed to:",
        solution: [
          "Provide real-time updates on hospital beds, ICU availability, and treatment costs",
          "Enable quick hospital admission via preference-based filtering",
          "Connect patients with verified medical consultation and helpline support",
          "Offer access to plasma donors by location and consent",
          "Support feature phone users through USSD and toll-free services",
          "Maintain a dashboard for officials, patients, and families with scalable data visualization",
          "Combat misinformation via fact-checked updates and user education tools",
        ],
        keyPersonas: [
          "Patients (Symptomatic/Asymptomatic) seeking hospital or home care",
          "Caregivers and Family Members monitoring health and support access",
          "Doctors and Health Officials requiring real-time data visibility",
          "Public Health Authorities aiming for systemic readiness and transparency",
        ],
        goToMarket:
          "Freemium model with core services free for patients. Revenue from in-app ads, private hospital partnerships, and service fees. Scalability across Indian metro and rural segments through IVR/USSD integration.",
        outcome: [
          "10 lakh+ patients tested per day—targeting misinformation for over 60% affected",
          "Shortens time to care through bed reservation tools",
          "Supports resource planning for hospitals and public health bodies",
          "Built to scale for future pandemic readiness",
        ],
      },
    },
    {
      id: 7,
      title: "ErgoCheck – Smart Posture & Heart Rate Monitoring for Industrial Workers",
      category: "Innovation Work",
      description: "Ergonomic assessment device for factory workers with sensor feedback",
      badge: "M.Des Thesis",
      year: "2021",
      image: "/placeholder.svg?height=200&width=300",
      details: {
        productType: "IoT Wearable | HealthTech | Industrial Safety",
        domain: "Ergonomics · Workplace Safety · Human Factors Engineering",
        duration: "1 year (3 months research, 3 months design/dev, thesis at IISc)",
        ipStatus: "Protected (Owned by IISc; selective disclosure only)",
        challenge:
          "Factory workers are exposed to unsafe working postures and high physical stress, which leads to musculoskeletal disorders and chronic fatigue. Conventional workplace safety checks are periodic, subjective, and reactive rather than preventive.",
        solutionDescription: "ErgoCheck is a wearable device that monitors two critical factors in real-time:",
        solution: [
          "Body posture (via IMU sensors)",
          "Heart rate (via optical sensing)",
          "The system enables proactive ergonomics by identifying unsafe patterns, alerting workers, and helping employers maintain workplace safety compliance through data-driven insights.",
        ],
        keyFeatures: [
          "Real-time data tracking via sensors",
          "Visual and haptic alerts for bad posture",
          "Data logging for pattern recognition",
          "Dashboard for employers (in conceptual phase)",
          "Benchmarking against ISO & OSHA standards",
        ],
        coreLearningsAndContributions: [
          "UX + IoT Integration: Bridged physical product design and digital feedback",
          "Decision-Making & Prioritization: From user problem framing to technology validation",
          "Research to Execution: Deep field research, ethnographic studies, competitive benchmarking",
          "Prototyping & Evaluation: Built and tested functional IoT prototype in industrial settings",
        ],
        outcome: [
          "Aids early detection of ergonomic stress",
          "Improves worker well-being and reduces injury downtime",
          "Enables evidence-based design for better safety programs",
        ],
      },
    },
    {
      id: 8,
      title: "Netcore Email Campaigning Tool Redesign",
      category: "UX Design",
      description: "Streamlined campaign creation flows for marketing managers",
      badge: "UX Design",
      year: "2019",
      image: "/placeholder.svg?height=200&width=300",
      details: {
        type: "B2B SaaS | Martech | Retention Suite",
        role: "UX Designer (Lead for Workflow Redesign)",
        duration: "4 months (Design Sprint-based MVP delivery)",
        projectContext:
          "Netcore's product team aimed to improve customer retention by revamping its email campaigning module. The hypothesis: a strategic redesign tailored for marketers would enhance usability, reduce campaign friction, and boost user satisfaction.",
        myRoleAndResponsibility: [
          "Led end-to-end UX design for the module",
          "Delivered workflow redesign, user journeys, IA, wireframes, and usability-tested UI",
          "Collaborated with PMs, senior designers, developers, and real users",
          "Focused on usability for AI-powered campaign strategy and template-driven content creation",
        ],
        keyFeaturesShaped: [
          "AI-backed audience segmentation for higher conversions",
          "Pre-built templates to reduce effort for marketers",
          "Improved workflow clarity, feature discoverability, and broadcast efficiency",
        ],
        challengesAndSolutions: [
          "Stakeholder Bias: Conducted interviews and persona-based impact mapping to validate or challenge assumptions",
          "Mental Model Conflicts: Used usability testing to refine UI against B2B user expectations",
          "Rigid Design System: Balanced consistency with task-specific optimizations for broadcasting journeys",
        ],
        userPersonasIdentified: [
          "Startup Marketer: Feature-heavy use, fewer campaigns",
          "MNC Executive: Bulk campaigns with limited feature use",
          "Agency User: High dependence on client approvals",
        ],
        uxProcess: [
          "Observational Research & Interviews",
          "Persona Mapping",
          "Competitor Analysis (Mailchimp, MoEngage, Clevertap, etc.)",
          "Journey Mapping",
          "Problem Framing to Design Opportunities",
          "Wireframes → Low/High-Fidelity Mockups → Usability Testing",
        ],
        outcomeAndLearning: [
          "Prioritized function over form for B2B adoption",
          "Advocated for mockups over wireframes to bridge stakeholder understanding gaps",
          "Learned to spot hidden design gaps and act proactively",
          "Gained maturity in documenting design milestones and backing them with user insights",
        ],
        whatYoudImproveNow:
          "Introduce greater UI flexibility to allow marketers to personalize their workflows without compromising consistency.",
      },
    },
    {
      id: 9,
      title: "Reference Objects in Private Cloud (SAP Fiori App Development)",
      category: "UX Design",
      description: "Designed technical object reference system for enterprise asset management",
      badge: "UX Design",
      year: "2018",
      image: "/placeholder.svg?height=200&width=300",
      details: {
        type: "Enterprise Asset Management (EAM) | Private Cloud | Fiori Elements",
        role: "UX Designer (Execution & Delivery Focus)",
        client: "Deutsche Bahn",
        duration: "Full delivery cycle (Executional)",
        projectContext:
          "This project was part of a customer-specific requirement from Deutsche Bahn, focused on improving Asset Management usability in SAP's Private Cloud. The effort involved building Fiori-based applications around Reference Objects, with strong alignment to SAP's design guidelines.",
        applicationsDelivered: [
          "Reference Structures App – For managing reusable structural hierarchies across asset types",
          "Reference Equipment App – Allows users to define template-like equipment entities for faster replication",
          "Manager Structure App – An administrative view to oversee and manage Reference Structures",
        ],
        yourRoleAndContribution: [
          "Designed UI/UX using SAP Fiori Elements",
          "Collaborated closely with developers to ensure component-level implementation matched design intent",
          "Managed end-to-end delivery of screens, annotations, and responsiveness patterns",
          "Followed SAP's design standards for private cloud deployment",
          "Coordinated documentation and final handoff for stakeholder validation",
        ],
        scopeAndLimitations: [
          "No discovery phase involvement due to direct, pre-defined business requirement from Deutsche Bahn",
          "Focused purely on execution, delivery readiness, and development coordination",
        ],
        toolsAndTechnologiesUsed: [
          "SAP Fiori Elements",
          "UI Annotations",
          "SAP UX Guidelines for Private Cloud",
          "Developer handoff via Git-based systems and Jira",
        ],
        outcome: [
          "Successfully delivered three SAP Fiori apps aligned with customer use cases",
          "Enabled Deutsche Bahn to manage and reuse reference objects more efficiently",
          "Strengthened system-wide configuration consistency and reusability in asset management",
        ],
      },
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleResizeState = () => {
      const newIsMobile = window.innerWidth <= 768
      const newIsTablet = window.innerWidth > 768 && window.innerWidth <= 1200
      if (newIsMobile !== isMobile) setIsMobile(newIsMobile)
      if (newIsTablet !== isTablet) setIsTablet(newIsTablet)
    }

    handleResizeState()
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResizeState)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResizeState)
    }
  }, [isMobile, isTablet])

  useEffect(() => {
    const getZigzagPathLocal = (
      row1Y: number,
      row2Y: number,
      row3Y: number,
      currentLeftMargin: number,
      currentRightMargin: number,
      containerSvgHeight: number,
    ) => {
      if (isMobile) return ""

      const distanceAboveTiles = 40
      const cornerRadius = 20
      const projectsTextY = 40 // Start path 40px from the top of the SVG container

      const beforeRow1Y = row1Y - distanceAboveTiles
      const beforeRow2Y = row2Y - distanceAboveTiles
      const beforeRow3Y = row3Y - distanceAboveTiles

      const row3TileHeight = 200
      const distanceBelowTiles = 16
      const belowRow3Y = row3Y + row3TileHeight + distanceBelowTiles

      const desiredTailLength = 100
      const svgBottomMargin = 20
      const startOfTailY = belowRow3Y + cornerRadius
      let finalPathY = startOfTailY + desiredTailLength
      finalPathY = Math.min(finalPathY, containerSvgHeight - svgBottomMargin)
      finalPathY = Math.max(finalPathY, startOfTailY)

      let path = `M ${currentLeftMargin} ${projectsTextY}`
      path += ` L ${currentLeftMargin} ${beforeRow1Y - cornerRadius}`
      path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${currentLeftMargin + cornerRadius} ${beforeRow1Y}`
      path += ` L ${currentRightMargin - cornerRadius} ${beforeRow1Y}`
      path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${currentRightMargin} ${beforeRow1Y + cornerRadius}`
      path += ` L ${currentRightMargin} ${beforeRow2Y - cornerRadius}`
      path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${currentRightMargin - cornerRadius} ${beforeRow2Y}`
      path += ` L ${currentLeftMargin + cornerRadius} ${beforeRow2Y}`
      path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${currentLeftMargin} ${beforeRow2Y + cornerRadius}`
      path += ` L ${currentLeftMargin} ${beforeRow3Y - cornerRadius}`
      path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${currentLeftMargin + cornerRadius} ${beforeRow3Y}`
      path += ` L ${currentRightMargin - cornerRadius} ${beforeRow3Y}`
      path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${currentRightMargin} ${beforeRow3Y + cornerRadius}`
      path += ` L ${currentRightMargin} ${belowRow3Y - cornerRadius}`
      path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${currentRightMargin - cornerRadius} ${belowRow3Y}`
      path += ` L ${currentLeftMargin + cornerRadius} ${belowRow3Y}`
      path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${currentLeftMargin} ${belowRow3Y + cornerRadius}`
      path += ` L ${currentLeftMargin} ${finalPathY}`
      return path
    }

    const calculatePath = () => {
      if (isMobile || !timelineRef.current || !project1Ref.current || !project4Ref.current || !project8Ref.current) {
        setPathD("")
        setShowEndMarker(false)
        return
      }

      requestAnimationFrame(() => {
        if (!timelineRef.current || !project1Ref.current || !project4Ref.current || !project8Ref.current) return

        const timelineEl = timelineRef.current
        const timelineWidth = timelineEl.offsetWidth
        const timelineActualHeight = timelineEl.offsetHeight
        const viewboxMinHeight = 800
        const timelineViewBoxHeight = Math.max(timelineActualHeight, viewboxMinHeight)

        const newViewBox = `0 0 ${timelineWidth} ${timelineViewBoxHeight}`
        setSvgViewBox(newViewBox)

        const designReferenceWidth = 1400
        const scaledLeftMargin = 80 * (timelineWidth / designReferenceWidth)
        const scaledRightMargin = 1320 * (timelineWidth / designReferenceWidth)

        const timelineRectTop = timelineEl.getBoundingClientRect().top
        const row1TopVal = project1Ref.current.getBoundingClientRect().top - timelineRectTop
        const row2TopVal = project4Ref.current.getBoundingClientRect().top - timelineRectTop
        const row3TopVal = project8Ref.current.getBoundingClientRect().top - timelineRectTop

        const newPath = getZigzagPathLocal(
          row1TopVal,
          row2TopVal,
          row3TopVal,
          scaledLeftMargin,
          scaledRightMargin,
          timelineViewBoxHeight,
        )
        setPathD(newPath)
      })
    }

    calculatePath()

    const observer = new ResizeObserver(calculatePath)
    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }
    window.addEventListener("resize", calculatePath)

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
      window.removeEventListener("resize", calculatePath)
    }
  }, [isMobile, isTablet, projects]) // Removed pathD from dependency array to prevent infinite loop

  useEffect(() => {
    const handleTimelineScroll = () => {
      if (isMobile || !timelineRef.current || !progressRef.current) {
        return
      }
      const progressPathEl = progressRef.current
      const pathLength = progressPathEl.getTotalLength()

      if (pathLength === 0) {
        if (progressPathEl.dataset.initialized !== "true") {
          progressPathEl.style.strokeDasharray = `5000 5000`
          progressPathEl.style.strokeDashoffset = "5000"
          progressPathEl.dataset.initialized = "true"
        }
        return
      }
      if (progressPathEl.dataset.initialized !== "true" || progressPathEl.style.strokeDasharray === "5000 5000") {
        progressPathEl.style.strokeDasharray = `${pathLength} ${pathLength}`
        progressPathEl.style.strokeDashoffset = pathLength.toString()
        progressPathEl.dataset.initialized = "true"
      }

      const timelineEl = timelineRef.current!
      const timelineRect = timelineEl.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY

      const animationStartScrollY = timelineRect.top + scrollPosition - windowHeight * 0.8
      const animationEndScrollY = timelineRect.top + scrollPosition + timelineRect.height - windowHeight * 0.2
      const scrollRange = animationEndScrollY - animationStartScrollY

      let rawProgress = 0
      if (scrollRange > 0) {
        rawProgress = (scrollPosition - animationStartScrollY) / scrollRange
      } else {
        if (timelineRect.top < windowHeight * 0.8 && timelineRect.bottom > windowHeight * 0.2) {
          rawProgress = 1
        } else if (scrollPosition >= animationEndScrollY) {
          rawProgress = 1
        } else if (scrollPosition < animationStartScrollY) {
          rawProgress = 0
        }
      }

      const acceleratedProgress = rawProgress * 1.5
      const finalProgress = Math.max(0, Math.min(1, acceleratedProgress))

      const dashOffset = pathLength * (1 - finalProgress)
      progressPathEl.style.strokeDashoffset = dashOffset.toString()

      // Show end marker only when path is fully drawn
      setShowEndMarker(finalProgress >= 0.99) // Use 0.99 to account for floating point inaccuracies

      const projects = document.querySelectorAll(".project-item")
      projects.forEach((project, index) => {
        const rect = project.getBoundingClientRect()
        const isVisible = rect.top < windowHeight * 0.8
        if (isVisible && !project.classList.contains("animate-in")) {
          setTimeout(() => {
            project.classList.add("animate-in")
          }, index * 100)
        }
      })
    }

    const initTimeout = setTimeout(() => {
      if (progressRef.current && !isMobile) {
        handleTimelineScroll()
      }
    }, 200)

    window.addEventListener("scroll", handleTimelineScroll)
    return () => {
      clearTimeout(initTimeout)
      window.removeEventListener("scroll", handleTimelineScroll)
    }
  }, [isMobile, isTablet, pathD]) // pathD is still needed here because getTotalLength() depends on it

  const openProject = (projectId: number) => {
    setSelectedProject(projectId)
    document.body.style.overflow = "hidden"
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const nextProject = () => {
    if (selectedProject !== null) {
      const currentIndex = projects.findIndex((p) => p.id === selectedProject)
      const nextIndex = (currentIndex + 1) % projects.length
      setSelectedProject(projects[nextIndex].id)
    }
  }

  const prevProject = () => {
    if (selectedProject !== null) {
      const currentIndex = projects.findIndex((p) => p.id === selectedProject)
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length
      setSelectedProject(projects[prevIndex].id)
    }
  }

  const selectedProjectData = projects.find((p) => p.id === selectedProject)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject !== null) {
        if (e.key === "Escape") closeProject()
        if (e.key === "ArrowRight") nextProject()
        if (e.key === "ArrowLeft") prevProject()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject, projects])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden polygon-bg">
        <div className="absolute inset-0 geometric-bg opacity-30" />
        <div className="relative container mx-auto px-4 flex flex-col items-center justify-center text-center z-10">
          <div className="profile-flip-container mb-16">
            <div className="profile-flip-inner">
              <img
                src="/images/sanket-portrait.png"
                alt="Sanket Kamble - Geometric Portrait"
                className="profile-flip-front"
              />
              <img
                src="/images/sanket-realistic.jpg"
                alt="Sanket Kamble - Professional Photo"
                className="profile-flip-back"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">Sanket Kamble</h1>
          <div className="text-lg md:text-xl mb-2 text-gray-600 font-medium">
            Product Professional | UX Strategist | Builder of Scalable, AI-Driven Enterprise Solutions
          </div>
          <div className="flex flex-col items-center gap-2 mb-8 text-gray-600">
            <div className="flex items-center gap-2">
              <span>📍 Bangalore, India</span>
              <span>•</span>
              <span>🎓 IISc Bangalore, SPIT Mumbai</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🧠 0–1 Product Management</span>
              <span>•</span>
              <span>🌐 ERP • AI • UX • IoT</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button
              className="bg-primary hover:bg-primary-light text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              className="border-2 border-secondary text-secondary-dark hover:bg-secondary hover:text-primary hover:border-secondary shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
          <a
            href="/files/sanket-kamble-resume.pdf"
            download="Sanket_Kamble_Resume.pdf"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors mt-4 font-medium"
          >
            <FileText className="w-4 h-4" />
            Download Resume <Download className="w-3 h-3 ml-1" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Product professional with <span className="font-semibold text-primary">8+ years of experience</span>{" "}
              spanning software development, UX design, and early-stage product management. I started my career as a
              developer (including ABAP at SAP), earned my Master's in Product Design & Management from the Indian
              Institute of Science (IISc).
            </p>
            <p className="mb-4">
              With a strong UX foundation and deep empathy for users, I've shipped solutions across domains including
              Supply Chain ERP, Sustainability and Asset Management, Healthcare ERP and Logistics, MarTech, and
              AI/ML-powered productivity tools.
            </p>
            <p>
              I thrive in <span className="font-semibold text-primary">0–1 product spaces</span>, collaborating with
              cross-functional teams to turn abstract user needs and business opportunities into real, impactful
              solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">My Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Enterprise UX",
                "AI-infused SaaS Products",
                "ERP + Sustainability",
                "IoT-integrated Tools",
                "Developer Experience (DevEx)",
                "Early-stage Product Strategy",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-secondary-dark" />
                    <span className="font-semibold">Indian Institute of Science, Bangalore</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">Master of Design (M.Des), Product Design & Management</p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-secondary-dark" />
                    <span className="font-semibold">Sardar Patel Institute of Technology, Mumbai</span>
                  </div>
                  <p className="text-sm text-gray-600 ml-7">Bachelor of Engineering, Computer Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zigzag Timeline Section */}
      <section id="projects" className="py-20 bg-muted relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Projects</h2>
          {(isMobile || isTablet) && (
            <div className="mb-8 p-4 bg-primary/10 border border-primary/20 rounded-lg text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Monitor className="w-5 h-5" />
                <span className="font-semibold">Better Experience Available</span>
              </div>
              <p className="text-sm text-gray-600">
                For the full interactive timeline experience, view this portfolio on a desktop in fullscreen mode.
              </p>
            </div>
          )}
          <div className="zigzag-timeline" ref={timelineRef}>
            {!isMobile && pathD && (
              <svg className="timeline-path" viewBox={svgViewBox} preserveAspectRatio="xMinYMin meet">
                <defs>
                  <marker id="start-square" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <rect x="0" y="0" width="6" height="6" fill="#330033" />
                  </marker>
                  <marker id="end-circle" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                    <circle cx="3" cy="3" r="3" fill="#330033" />
                  </marker>
                </defs>
                <path
                  ref={progressRef}
                  className="timeline-progress"
                  d={pathD}
                  vectorEffect="non-scaling-stroke"
                  markerStart="url(#start-square)"
                  markerEnd={showEndMarker ? "url(#end-circle)" : ""}
                />
              </svg>
            )}
            <div className={`projects-grid-zigzag ${isMobile ? "mobile" : isTablet ? "tablet" : "desktop"}`}>
              {projects.map((project, index) => {
                let currentRef = null
                if (index === 0) currentRef = project1Ref
                else if (index === 3) currentRef = project4Ref
                else if (index === 7) currentRef = project8Ref
                if (index === projects.length - 1) {
                  currentRef = lastProjectRef
                }

                return (
                  <div
                    key={project.id}
                    className={`project-item project-${index + 1}`}
                    onClick={() => openProject(project.id)}
                    ref={currentRef}
                    data-project-id={project.id} // Add data attribute for easy lookup
                  >
                    <div className="project-frame">
                      <img src={project.image || "/placeholder.svg"} alt={project.title} />
                      <div className="project-title-overlay">
                        <h3 className="project-title-text">{project.title}</h3>
                      </div>
                      {/* New triangle element as part of the tile */}
                      <div className="project-triangle-marker">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="6,0 0,8 12,8" fill="#330033" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <div className={`project-modal ${selectedProject ? "active" : ""}`} onClick={closeProject}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <button className="close-button" onClick={closeProject}>
              <X />
            </button>
          </div>
          {selectedProjectData && (
            <>
              <div
                className="modal-image"
                style={{
                  backgroundImage: `url(${selectedProjectData.image || "/placeholder.svg?height=400&width=600"})`,
                }}
              >
                <button className="nav-button prev" onClick={prevProject}>
                  <ChevronLeft />
                </button>
                <button className="nav-button next" onClick={nextProject}>
                  <ChevronRight />
                </button>
              </div>
              <div className={`modal-description ${selectedProjectData?.details ? "" : "simple-view"}`}>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-primary">
                  {selectedProjectData.title}
                </h2>
                {selectedProjectData.details ? (
                  <ProjectDetailView project={selectedProjectData} />
                ) : (
                  <>
                    <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">{selectedProjectData.description}</p>
                    <div className="flex gap-3 md:gap-4">
                      <Badge className="bg-secondary text-primary">{selectedProjectData.category}</Badge>
                      <Badge variant="outline">{selectedProjectData.year}</Badge>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Publications */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="section-title">Publications</h2>
        <Card className="shadow-lg max-w-3xl mx-auto project-card">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <CardTitle>Interaction Study for the Visually Impaired</CardTitle>
            <CardDescription className="text-white/80">Peer-reviewed International Journal</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-gray-700 mb-6">
              Published research focusing on accessible design and haptic interaction for inclusive device use. The
              study explores novel interaction patterns that can improve accessibility for visually impaired users
              across digital interfaces.
            </p>
            <Button className="bg-secondary text-primary hover:bg-secondary-dark hover:text-white shadow-lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Publication
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            Let's Connect<span className="absolute bottom-0 left-0 w-1/2 h-1 bg-secondary"></span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Interested in opportunities or collaborations in Enterprise UX, AI-infused SaaS Products, or Early-stage
            Product Strategy?
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-secondary hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              sanketkamble.design@gmail.com
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            {[
              "Enterprise UX",
              "AI-infused SaaS",
              "ERP + Sustainability",
              "IoT-integrated Tools",
              "DevEx",
              "Product Strategy",
            ].map((item) => (
              <Badge
                key={item}
                className="bg-secondary text-primary py-2 px-4 hover:bg-white hover:text-primary transition-colors"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
