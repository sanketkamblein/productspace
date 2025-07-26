// Project data with working placeholder images
const projects = [
  {
    id: 1,
    title: "SAP Learning Fest | AI-Powered Multi-Round Auction in SAP Ariba",
    category: "Product Role Work",
    description: "AI-driven recommendations to guide sourcing managers during multi-round auction events in SAP Ariba.",
    badge: "Product Management Trainee",
    year: "2023",
    image: "images/Ariba_usecase.png",
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
      links: [
        {
          title: "Know more",
          url: "https://sap-my.sharepoint.com/:f:/r/personal/sanket_kamble_sap_com/Documents/ISBN%20Use%20Case?csf=1&web=1&e=g7MXLs",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Industrial Systems - SAP EAM",
    category: "UX Design",
    description: "UX-PM for Asset Management Experience in SAP Private and Public Cloud.",
    badge: "UX Product Manager",
    year: "2022",
    image: "images/Systems_object.png",
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
      links: [
        {
          title: "Know more",
          url: "https://www.figma.com/design/pdnXd1oC69rST1wE3ix1Lu/System-All--Configuration--Designator-Template-System-Object-?node-id=5302-113687&t=ZGxJis3DTqehjroH-1",
        },
      ],
    },
  },
  {
    id: 3,
    title: "AxonRad AI | Product Lead – Radiology AI & Diagnostic ERP",
    category: "Product Role Work",
    description: "Led product for AI-driven clinical summarization and diagnostic ERP.",
    badge: "Product Lead",
    year: "2022",
    image: "images/logoflashradai.jpg",
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
      links: [
        {
          title: "Know more",
          url: "https://axonehealth.com/our-team/"
        }
      ],
    },
  },
  {
    id: 4,
    title: "SAP Invent 2023: Ecopulse",
    category: "Innovation Work",
    description:
      "Integrated Sensor Monitoring for Sustainable Plant Operations<br><span class='finalist-badge'>SAP Invent finalist</span>",
    badge: "IIoT + Sustainability",
    year: "2023",
    image: "images/Ariba_usecase.png",
    // details and links removed for confidentiality
  },
  {
    id: 5,
    title: "SAP Invent '24: Intelligent Controls Compliance System",
    category: "Innovation Work",
    description: "AI-based anomaly detection for vendor invoices in Accounts Payable",
    badge: "Hack for Customers Finalist",
    year: "2024",
    image: "images/AsianPants.png",
    // details and links removed for confidentiality
  },
  {
    id: 6,
    title: "coviCLOUD – Road to Recovery",
    category: "Innovation Work",
    description: "An Integrated Digital Platform for COVID-19 Patient Support and Hospital Connectivity",
    badge: "Public Health SaaS",
    year: "2020",
    image: "images/cowecloud.png",
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
      links: [
        {
          title: "Know more",
          url: "https://docs.google.com/presentation/d/1o6tjJlK6FPMWoDJdSCkVFJTNxce0vOf9FWrUzd0cGak/edit?usp=sharing",
        },
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
    image: "images/ergocheck.png",
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
      links: [
        {
          title: "Know more",
          url: "https://sanketkamblein.github.io/sanketux/acads.html",
        },
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
    image: "images/Smartech.png",
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
      links: [
        {
          title: "Know more",
          url: "https://sanketsanjaykamble.wixsite.com/my-site/post/designing-for-a-cause",
        },
      ],
    },
  },
  {
    id: 9,
    title: "Reference Objects in Private Cloud (SAP Fiori App Development)",
    category: "UX Design",
    description: "Designed technical object reference system for enterprise asset management",
    badge: "UX Design",
    year: "2018",
    image: "images/RefEq_Edit.png",
    // details and links removed for confidentiality
  },
]

// State management
let selectedProject = null
let isMobile = window.innerWidth <= 768
let isTablet = window.innerWidth > 768 && window.innerWidth <= 1200
let clickedTile = null

// New state management for scroll positions
let projectScrollPositions = {};

// Parallax effect variables
let ticking = false

// Initialize the portfolio
document.addEventListener("DOMContentLoaded", () => {
  renderProjects()
  setupEventListeners()
  handleResize()

  // Initialize timeline animation
  setTimeout(() => {
    if (!isMobile && !isTablet) {
      calculatePath()
      handleTimelineScroll()
    }
  }, 500)

  // Initialize parallax
  updateParallax()
})

// Parallax effect function - Fixed direction
function updateParallax() {
  if (ticking) return

  requestAnimationFrame(() => {
    const scrolled = window.pageYOffset
    const parallaxBg = document.getElementById("parallaxBg")

    if (parallaxBg) {
      // Move background UP (opposite direction) at 50% speed
      const yPos = -(scrolled * 0.5)
      parallaxBg.style.transform = `translate3d(0, ${yPos}px, 0)`
    }

    ticking = false
  })

  ticking = true
}

// Render projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid")
  projectsGrid.innerHTML = ""

  // Set grid class based on screen size
  let gridClass = "desktop"
  if (isMobile) {
    gridClass = "mobile"
  } else if (isTablet) {
    gridClass = "tablet"
  }

  projectsGrid.className = `projects-grid ${gridClass}`

  // Confidential project titles
  const confidentialTitles = [
    "SAP Invent 2023: Ecopulse",
    "SAP Invent '24: Intelligent Controls Compliance System",
    "Reference Objects in Private Cloud (SAP Fiori App Development)"
  ];

  projects.forEach((project, index) => {
    const projectElement = document.createElement("div")
    projectElement.className = `project-item project-${index + 1}`
    projectElement.onclick = (e) => openProject(project.id, e.currentTarget)

    const isConfidential = confidentialTitles.includes(project.title);
    const confidentialLabel = isConfidential ? `<div class='confidential-label' style='position:absolute;top:10px;left:10px;background:#fff0f0;border:1px solid #b00;color:#b00;font-weight:700;padding:2px 10px;border-radius:6px;font-size:0.95em;z-index:2;'>Confidential</div>` : "";

    const projectTitle = project.isFinalist
      ? `${project.title} <span class="finalist-badge">SAP Invent finalist</span>`
      : project.title

    projectElement.innerHTML = `
    <div class="project-frame" style="position:relative;">
        ${confidentialLabel}
        <img src="${project.image}" alt="${projectTitle}" onerror="this.src='https://via.placeholder.com/400x200/cccccc/666666?text=Project+Image'">
        <div class="project-title-overlay">
            <h3 class="project-title-text">${projectTitle}</h3>
        </div>
    </div>
`

    projectsGrid.appendChild(projectElement)

    // Immediately animate-in for mobile view
    if (isMobile) {
      projectElement.classList.add("animate-in");
    }
  })
}

// Setup event listeners
function setupEventListeners() {
  window.addEventListener("resize", handleResize)
  window.addEventListener(
    "scroll",
    () => {
      handleTimelineScroll()
      updateParallax()
    },
    { passive: true },
  )

  // Keyboard navigation for modal
  document.addEventListener("keydown", (e) => {
    if (selectedProject !== null) {
      if (e.key === "Escape") closeProject()
      if (e.key === "ArrowRight") nextProject()
      if (e.key === "ArrowLeft") prevProject()
    }
  })
}

// Handle resize
function handleResize() {
  const newIsMobile = window.innerWidth <= 768
  const newIsTablet = window.innerWidth > 768 && window.innerWidth <= 1200

  if (newIsMobile !== isMobile || newIsTablet !== isTablet) {
    isMobile = newIsMobile
    isTablet = newIsTablet

    // Re-render projects with correct grid class
    renderProjects()

    // Show/hide mobile notice
    const mobileNotice = document.querySelector(".mobile-notice")
    if (mobileNotice) {
      mobileNotice.style.display = isMobile || isTablet ? "block" : "none"
    }

    // Recalculate path if not mobile
    if (!isMobile && !isTablet) {
      setTimeout(calculatePath, 100)
    }
  }
}

// Calculate zigzag path
function calculatePath() {
  if (isMobile) return; // No line for mobile

  const timeline = document.getElementById("timeline");
  const timelineSvg = document.getElementById("timelineSvg");
  const timelinePath = document.getElementById("timelinePath");

  if (!timeline || !timelineSvg || !timelinePath) return;

  const timelineWidth = timeline.offsetWidth;
  const timelineHeight = timeline.offsetHeight;

  // Update SVG viewBox
  timelineSvg.setAttribute("viewBox", `0 0 ${timelineWidth} ${timelineHeight}`);

  const leftMargin = 80;
  const rightMargin = timelineWidth - 80;
  const projectsTextY = 40;

  if (isTablet) {
    // Tablet specific path (2 columns)
    const projectElements = [];
    for (let i = 1; i <= projects.length; i++) {
      const projectEl = document.querySelector(`.project-${i}`);
      if (projectEl) {
        projectElements.push(projectEl);
      }
    }

    if (projectElements.length === 0) return;

    const timelineTop = timeline.getBoundingClientRect().top;
    const rowYs = [];

    // Get Y-coordinates for the start of each row in a 2-column grid
    // Assuming projects are rendered row by row, 2 per row.
    // We'll take the average top of the first project in each conceptual row.
    for (let i = 0; i < projectElements.length; i += 2) {
      rowYs.push(projectElements[i].getBoundingClientRect().top - timelineTop);
    }

    // Use a subset of rowYs for the path if there are too many (e.g., 3-4 points)
    // For 9 projects, we'll have 5 rows: (0,1), (2,3), (4,5), (6,7), (8)
    const path = generateTabletPath(rowYs, leftMargin, rightMargin, projectsTextY, timelineHeight);
    timelinePath.setAttribute("d", path);
  } else { // Desktop specific path (4 columns)
    // Get project positions
    const project1 = document.querySelector(".project-1");
    const project4 = document.querySelector(".project-4");
    const project8 = document.querySelector(".project-8");

    if (!project1 || !project4 || !project8) return;

    const timelineTop = timeline.getBoundingClientRect().top;
    const row1Y = project1.getBoundingClientRect().top - timelineTop;
    const row2Y = project4.getBoundingClientRect().top - timelineTop;
    const row3Y = project8.getBoundingClientRect().top - timelineTop;

    // Generate zigzag path
    const path = generateDesktopZigzagPath(row1Y, row2Y, row3Y, leftMargin, rightMargin, projectsTextY, timelineHeight);
    timelinePath.setAttribute("d", path);
  }
}

// Generate desktop zigzag path (renamed for clarity)
function generateDesktopZigzagPath(row1Y, row2Y, row3Y, leftMargin, rightMargin, projectsTextY, containerHeight) {
  const distanceAboveTiles = 40;
  const cornerRadius = 20;

  const beforeRow1Y = row1Y - distanceAboveTiles;
  const beforeRow2Y = row2Y - distanceAboveTiles;
  const beforeRow3Y = row3Y - distanceAboveTiles;

  const row3TileHeight = 240; // Assuming a standard tile height for calculation
  const distanceBelowTiles = 16;
  const belowRow3Y = row3Y + row3TileHeight + distanceBelowTiles;

  const desiredTailLength = 100;
  const svgBottomMargin = 20;
  const startOfTailY = belowRow3Y + cornerRadius;
  let finalPathY = startOfTailY + desiredTailLength;
  finalPathY = Math.min(finalPathY, containerHeight - svgBottomMargin);
  finalPathY = Math.max(finalPathY, startOfTailY);

  let path = `M ${leftMargin} ${projectsTextY}`;
  path += ` L ${leftMargin} ${beforeRow1Y - cornerRadius}`;
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${leftMargin + cornerRadius} ${beforeRow1Y}`;
  path += ` L ${rightMargin - cornerRadius} ${beforeRow1Y}`;
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${rightMargin} ${beforeRow1Y + cornerRadius}`;
  path += ` L ${rightMargin} ${beforeRow2Y - cornerRadius}`;
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${rightMargin - cornerRadius} ${beforeRow2Y}`;
  path += ` L ${leftMargin + cornerRadius} ${beforeRow2Y}`;
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${leftMargin} ${beforeRow2Y + cornerRadius}`;
  path += ` L ${leftMargin} ${beforeRow3Y - cornerRadius}`;
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${leftMargin + cornerRadius} ${beforeRow3Y}`;
  path += ` L ${rightMargin - cornerRadius} ${beforeRow3Y}`;
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${rightMargin} ${beforeRow3Y + cornerRadius}`;
  path += ` L ${rightMargin} ${belowRow3Y - cornerRadius}`;
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${rightMargin - cornerRadius} ${belowRow3Y}`;
  path += ` L ${leftMargin + cornerRadius} ${belowRow3Y}`;
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${leftMargin} ${belowRow3Y + cornerRadius}`;
  path += ` L ${leftMargin} ${finalPathY}`;

  return path;
}

// New function to generate tablet zigzag path (2 columns)
function generateTabletPath(rowYs, leftMargin, rightMargin, projectsTextY, containerHeight) {
  const cornerRadius = 20;
  const distanceAboveTiles = 40;
  const tileHeight = 240; // Approximate tile height

  let path = `M ${leftMargin} ${projectsTextY}`;

  rowYs.forEach((rowY, index) => {
    const currentY = rowY - distanceAboveTiles;
    const nextPointX = (index % 2 === 0) ? rightMargin : leftMargin; // Zigzag between left and right
    const startX = (index % 2 === 0) ? leftMargin : rightMargin;

    if (index === 0) {
        path += ` L ${startX} ${currentY - cornerRadius}`;
        path += ` A ${cornerRadius} ${cornerRadius} 0 0 ${index % 2 === 0 ? 0 : 1} ${startX + (index % 2 === 0 ? cornerRadius : -cornerRadius)} ${currentY}`;
        path += ` L ${nextPointX - (index % 2 === 0 ? cornerRadius : -cornerRadius)} ${currentY}`;
        path += ` A ${cornerRadius} ${cornerRadius} 0 0 ${index % 2 === 0 ? 1 : 0} ${nextPointX} ${currentY + cornerRadius}`;
    } else {
        path += ` L ${startX} ${currentY - cornerRadius}`;
        path += ` A ${cornerRadius} ${cornerRadius} 0 0 ${index % 2 === 0 ? 0 : 1} ${startX + (index % 2 === 0 ? cornerRadius : -cornerRadius)} ${currentY}`;
        path += ` L ${nextPointX - (index % 2 === 0 ? cornerRadius : -cornerRadius)} ${currentY}`;
        path += ` A ${cornerRadius} ${cornerRadius} 0 0 ${index % 2 === 0 ? 1 : 0} ${nextPointX} ${currentY + cornerRadius}`;
    }

    // Add vertical line to the next row's start point, or end the path
    if (index < rowYs.length - 1) {
        const nextRowY = rowYs[index + 1] - distanceAboveTiles;
        path += ` L ${nextPointX} ${nextRowY - cornerRadius}`;
    } else {
        // For the last row, add a tail to the path
        const belowLastTileY = rowY + tileHeight + 16; // 16px distance below tiles
        const finalTailY = Math.min(belowLastTileY + 100, containerHeight - 20); // 100px tail, 20px bottom margin
        path += ` L ${nextPointX} ${belowLastTileY - cornerRadius}`;
        path += ` A ${cornerRadius} ${cornerRadius} 0 0 ${index % 2 === 0 ? 1 : 0} ${nextPointX - (index % 2 === 0 ? cornerRadius : -cornerRadius)} ${belowLastTileY}`;
        path += ` L ${leftMargin + cornerRadius} ${belowLastTileY}`;
        path += ` A ${cornerRadius} ${cornerRadius} 0 0 ${index % 2 === 0 ? 0 : 1} ${leftMargin} ${belowLastTileY + cornerRadius}`;
        path += ` L ${leftMargin} ${finalTailY}`;
    }

  });

  return path;
}

// Handle timeline scroll animation - Fixed for Safari
function handleTimelineScroll() {
  if (isMobile) return; // No animation for mobile

  const timeline = document.getElementById("timeline");
  const timelinePath = document.getElementById("timelinePath");

  if (!timeline || !timelinePath) return;

  const pathLength = timelinePath.getTotalLength();
  if (pathLength === 0) return;

  // Initialize path animation
  if (!timelinePath.dataset.initialized) {
    timelinePath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    timelinePath.style.strokeDashoffset = pathLength.toString();
    timelinePath.dataset.initialized = "true";
  }

  const timelineRect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  const animationStartScrollY = timelineRect.top + scrollPosition - windowHeight * 0.8;
  const animationEndScrollY = timelineRect.top + scrollPosition + timelineRect.height - windowHeight * 0.2;
  const scrollRange = animationEndScrollY - animationStartScrollY;

  let rawProgress = 0;
  if (scrollRange > 0) {
    rawProgress = (scrollPosition - animationStartScrollY) / scrollRange;
  } else {
    if (timelineRect.top < windowHeight * 0.8 && timelineRect.bottom > windowHeight * 0.2) {
      rawProgress = 1;
    } else if (scrollPosition >= animationEndScrollY) {
      rawProgress = 1;
    } else if (scrollPosition < animationStartScrollY) {
      rawProgress = 0;
    }
  }

  const acceleratedProgress = rawProgress * 1.5;
  const finalProgress = Math.max(0, Math.min(1, acceleratedProgress));

  const dashOffset = pathLength * (1 - finalProgress);
  timelinePath.style.strokeDashoffset = dashOffset.toString();

  // Show end marker when path is fully drawn - Fixed for Safari
  if (finalProgress >= 0.98) {
    // Changed from 0.99 to 0.98 for Safari compatibility
    // Force Safari to recognize the marker by setting it explicitly
    timelinePath.setAttribute("marker-end", "url(#end-circle)");
    // Additional Safari fix - force repaint
    timelinePath.style.display = "none";
    timelinePath.offsetHeight; // Trigger reflow
    timelinePath.style.display = "";
  } else {
    timelinePath.removeAttribute("marker-end");
  }

  // Animate project items
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((project, index) => {
    const rect = project.getBoundingClientRect();
    const isVisible = rect.top < windowHeight * 0.8;
    if (isVisible && !project.classList.contains("animate-in")) {
      setTimeout(() => {
        project.classList.add("animate-in");
      }, index * 100);
    }
  });
}

// Project modal functions - Always start from top
function openProject(projectId, tileElement) {
  // Confidential project titles
  const confidentialTitles = [
    "SAP Invent 2023: Ecopulse",
    "SAP Invent '24: Intelligent Controls Compliance System",
    "Reference Objects in Private Cloud (SAP Fiori App Development)"
  ];
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;
  if (confidentialTitles.includes(project.title)) {
    alert("This project is confidential and not available.");
    return;
  }
  selectedProject = projectId;
  clickedTile = tileElement;

  const modal = document.getElementById("projectModal")
  const modalContent = modal.querySelector(".modal-content")
  const modalImage = document.getElementById("modalImage")
  const modalDescription = document.getElementById("modalDescription")

  // Get tile position and dimensions
  const tileRect = tileElement.getBoundingClientRect()
  // Remove scroll position - always start from current viewport position

  // Set initial modal position and size to match the tile exactly
  modalContent.style.position = "fixed"
  modalContent.style.left = tileRect.left + "px"
  modalContent.style.top = tileRect.top + "px" // Removed scrollTop addition
  modalContent.style.width = tileRect.width + "px"
  modalContent.style.height = tileRect.height + "px"
  modalContent.style.maxWidth = "none"
  modalContent.style.maxHeight = "none"
  modalContent.style.transform = "scale(1)"
  modalContent.style.opacity = "1"
  modalContent.style.borderRadius = "12px"
  modalContent.style.transition = "none"

  // Set modal image and content
  const modalProjectImage = document.getElementById("modalProjectImage");
  modalProjectImage.src = project.image;
  modalProjectImage.alt = project.title;

  // Remove any previous special class from the image itself
  modalProjectImage.classList.remove("modal-image-natural");
  modalProjectImage.classList.remove("modal-image-fit");
  modalProjectImage.classList.remove("modal-image-top");

  // Apply special classes to the image if needed
  const naturalImageProjects = [
    "SAP Learning Fest",
    "Industrial Systems",
    "Flashrad AI",
    "SAP INVENT 2024",
    "SAP Invent '24: Intelligent controls...",
  ];

  if (naturalImageProjects.includes(project.title)) {
    modalProjectImage.classList.add("modal-image-natural");
  }

  const specialProjects = [
    "SAP Learning Fest | AI-Powered Multi-Round Auction in SAP Ariba",
    "Industrial Systems - SAP EAM",
    "AxonRad AI | Product Lead – Radiology AI & Diagnostic ERP",
    "SAP Invent 2023: Ecopulse",
    "SAP Invent '24: Intelligent Controls Compliance System",
    "coviCLOUD – Road to Recovery",
    "ErgoCheck – Smart Posture & Heart Rate Monitoring for Industrial Workers",
    "Netcore Email Campaigning Tool Redesign",
    "Reference Objects in Private Cloud (SAP Fiori App Development)",
  ];

  if (specialProjects.includes(project.title)) {
    modalProjectImage.classList.add("modal-image-fit");
  }

  modalDescription.innerHTML = generateProjectContent(project)

  // Reset modal scroll to top
  modalDescription.scrollTop = 0

  // Show modal immediately at tile position
  modal.style.display = "flex"
  modal.style.background = "rgba(0, 0, 0, 0)"
  document.body.style.overflow = "hidden"

  // Force a reflow to ensure initial styles are applied
  modalContent.offsetHeight

  // Animate to full modal after a brief delay
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      // Calculate center position for final modal
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      const finalWidth = Math.min(1000, viewportWidth - 40)
      // Fix for Safari: Use more flexible height calculation
      const finalHeight = Math.min(viewportHeight * 0.9, 700) // Reduced from 800 to 700
      const centerX = viewportWidth / 2
      const centerY = viewportHeight / 2

      // Enable transition
      modalContent.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"

      // Animate to final position and size
      modalContent.style.left = centerX - finalWidth / 2 + "px"
      modalContent.style.top = centerY - finalHeight / 2 + "px"
      modalContent.style.width = finalWidth + "px"
      modalContent.style.height = finalHeight + "px"
      modalContent.style.maxWidth = finalWidth + "px"
      modalContent.style.maxHeight = finalHeight + "px"
      modalContent.style.borderRadius = "16px"

      // Fade in background
      modal.style.transition = "background-color 0.6s ease"
      modal.style.background = "rgba(0, 0, 0, 0.9)"
      modal.classList.add("active")

      // Apply scroll position after modal has animated open
      if (projectScrollPositions[projectId] !== undefined && projectId === selectedProject) {
        modalDescription.scrollTop = projectScrollPositions[projectId];
      } else {
        modalDescription.scrollTop = 0; // Always start from top for new projects
      }
    })
  })
}

function closeProject() {
  if (!selectedProject || !clickedTile) return

  // Save current scroll position
  const modalDescription = document.getElementById("modalDescription");
  if (modalDescription && selectedProject !== null) {
    projectScrollPositions[selectedProject] = modalDescription.scrollTop;
  }

  const modal = document.getElementById("projectModal")
  const modalContent = modal.querySelector(".modal-content")

  // Get original tile position (current viewport position only)
  const tileRect = clickedTile.getBoundingClientRect()
  // Removed scrollTop calculation

  // Animate back to tile position
  modalContent.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  modalContent.style.left = tileRect.left + "px"
  modalContent.style.top = tileRect.top + "px" // Removed scrollTop addition
  modalContent.style.width = tileRect.width + "px"
  modalContent.style.height = tileRect.height + "px"
  modalContent.style.maxWidth = "none"
  modalContent.style.maxHeight = "none"
  modalContent.style.borderRadius = "12px"

  // Fade out background
  modal.style.transition = "background-color 0.6s ease"
  modal.style.background = "rgba(0, 0, 0, 0)"
  modal.classList.remove("active")

  // Clean up after animation completes
  setTimeout(() => {
    modal.style.display = "none"
    document.body.style.overflow = "auto"

    // Reset modal content styles
    modalContent.style.position = "relative"
    modalContent.style.left = "auto"
    modalContent.style.top = "auto"
    modalContent.style.width = "100%"
    modalContent.style.height = "auto"
    modalContent.style.maxWidth = "1000px"
    modalContent.style.maxHeight = "90vh"
    modalContent.style.transition = ""
    modalContent.style.borderRadius = "16px"

    selectedProject = null
    clickedTile = null
  }, 600)
}

function nextProject() {
  if (selectedProject === null) return
  const currentIndex = projects.findIndex((p) => p.id === selectedProject)
  const nextIndex = (currentIndex + 1) % projects.length

  // Find the next tile element
  const nextTile = document.querySelector(`.project-${nextIndex + 1}`)

  // No need to reset scroll here, openProject will handle it

  openProject(projects[nextIndex].id, nextTile)
}

function prevProject() {
  if (selectedProject === null) return
  const currentIndex = projects.findIndex((p) => p.id === selectedProject)
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length

  // Find the previous tile element
  const prevTile = document.querySelector(`.project-${prevIndex + 1}`)

  // No need to reset scroll here, openProject will handle it

  openProject(projects[prevIndex].id, prevTile)
}

// Generate project content - Fixed to show all content
function generateProjectContent(project) {
  let content = `<h2 style="color: #330033; font-size: 2rem; margin-bottom: 1rem; line-height: 1.2;">${project.title}</h2>`

  if (project.details) {
    // Add metadata section
    content +=
      '<div style="background: #fafafa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.9rem; line-height: 1.4;">'

    // Add all possible metadata fields
    const metadataFields = [
      { key: "role", label: "Role" },
      { key: "company", label: "Company" },
      { key: "client", label: "Client" },
      { key: "duration", label: "Duration" },
      { key: "team", label: "Team" },
      { key: "teamSize", label: "Team Size" },
      { key: "track", label: "Track" },
      { key: "stage", label: "Stage" },
      { key: "context", label: "Context" },
      { key: "techStack", label: "Tech Stack" },
      { key: "productType", label: "Product Type" },
      { key: "domain", label: "Domain" },
      { key: "type", label: "Type" },
      { key: "ipStatus", label: "IP Status" },
    ]

    metadataFields.forEach((field) => {
      if (project.details[field.key]) {
        content += `<strong>${field.label}:</strong> ${project.details[field.key]}<br>`
      }
    })
    content += "</div>"

    let sectionCounter = 1

    const sections = [
      { key: "productVision", title: "Product Vision", isList: false },
      { key: "contextAndEvolution", title: "Context & Evolution", isList: false },
      { key: "projectContext", title: "Project Context", isList: false },
      { key: "challenge", title: "The Challenge", isList: false },
      { key: "hypothesis", title: "Hypothesis", isList: false },
      { key: "myRole", title: "My Role", isList: false },
      { key: "myRoleAndOwnership", title: "My Role & Ownership", isList: true },
      { key: "myRoleAndResponsibility", title: "My Role & Responsibility", isList: true },
      { key: "yourRoleAndContribution", title: "Your Role & Contribution", isList: true },
      { key: "approach", title: "My Approach", isList: true },
      { key: "solutionDescription", title: "Solution Description", isList: false },
      { key: "solution", title: "Solution Overview", isList: true },
      { key: "keyFeatures", title: "Key Features", isList: true },
      { key: "keyFeaturesShaped", title: "Key Features Shaped", isList: true },
      { key: "applicationsDelivered", title: "Applications Delivered", isList: true },
      { key: "keyPersonas", title: "Key Personas", isList: true },
      { key: "userPersonasIdentified", title: "User Personas Identified", isList: true },
      { key: "architectureAndIntegration", title: "Architecture & Integration", isList: true },
      { key: "goToMarket", title: "Go-to-Market & Monetization", isList: false },
      { key: "contributions", title: "Key Contributions", isList: true },
      { key: "coreLearningsAndContributions", title: "Core Learnings & Contributions", isList: true },
      { key: "challengesAndSolutions", title: "Challenges & Solutions", isList: true },
      { key: "uxProcess", title: "UX Process", isList: true },
      { key: "scopeAndLimitations", title: "Scope & Limitations", isList: true },
      { key: "toolsAndTechnologiesUsed", title: "Tools & Technologies Used", isList: true },
      { key: "outcome", title: "Outcome", isList: true },
      { key: "outcomeAndImpact", title: "Outcome & Impact", isList: true },
      { key: "outcomeAndLearning", title: "Outcome & Learning", isList: true },
      { key: "metrics", title: "Success Metrics", isList: true },
      { key: "toolsAndSkills", title: "Tools & Skills Applied", isList: true },
      { key: "skillsAndTools", title: "Skills & Tools", isList: true },
      { key: "whatYoudImproveNow", title: "What You'd Improve Now", isList: false },
      // Remove the links entries from here since we handle them separately
    ]

    // Generate content for each section that exists
    sections.forEach((section) => {
      if (project.details[section.key]) {
        content += `<h4 style="color: #330033; font-weight: 600; margin-bottom: 0.5rem; margin-top: 1.5rem;">${sectionCounter++}. ${section.title}</h4>`

        if (section.isList && Array.isArray(project.details[section.key])) {
          content += '<ul style="margin-bottom: 1rem; padding-left: 1.5rem; line-height: 1.5;">'
          project.details[section.key].forEach((item) => {
            content += `<li style="margin-bottom: 0.5rem;">${item}</li>`
          })
          content += "</ul>"
        } else {
          content += `<p style="margin-bottom: 1rem; line-height: 1.5; color: #555;">${project.details[section.key]}</p>`
        }
      }
    })

    // Add links if they exist - Fixed version
    if (project.details.links && Array.isArray(project.details.links) && project.details.links.length > 0) {
      content += '<div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eee;">'
      content += '<h4 style="color: #330033; font-weight: 600; margin-bottom: 1rem;">Links</h4>'
      content += '<div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">'

      project.details.links.forEach((link) => {
        if (link && typeof link === "object" && link.title && link.url) {
          content += `<a href="${link.url}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 8px 16px; background: #f8f9fa; color: #330033; text-decoration: none; border-radius: 4px; border: 1px solid #dee2e6; font-weight: 500; transition: all 0.3s ease;">🔗 ${link.title}</a>`
        }
      })

      content += "</div></div>"
    }

    // Also handle the old workflowLink and mockupsLink format for backward compatibility
    if (project.details.workflowLink || project.details.mockupsLink) {
      content += '<div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eee;">'
      if (project.details.workflowLink) {
        content += `<a href="${project.details.workflowLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-right: 1rem; margin-bottom: 0.5rem; padding: 8px 16px; background: #f8f9fa; color: #330033; text-decoration: none; border-radius: 4px; border: 1px solid #dee2e6; font-weight: 500;">🔗 Workflow Diagram</a>`
      }
      if (project.details.mockupsLink) {
        content += `<a href="${project.details.mockupsLink}" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-bottom: 0.5rem; padding: 8px 16px; background: #f8f9fa; color: #330033; text-decoration: none; border-radius: 4px; border: 1px solid #dee2e6; font-weight: 500;">🎨 UI Mockups</a>`
      }
      content += "</div>"
    }
  } else {
    // Fallback for projects without detailed information
    content += `<p style="margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.5; color: #555;">${project.description}</p>`
    content += `<div style="display: flex; gap: 1rem; flex-wrap: wrap;">`
    content += `<span style="background: #ffd700; color: #330033; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 500; font-size: 0.9rem;">${project.category}</span>`
    content += `<span style="background: transparent; color: #330033; border: 1px solid #330033; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${project.year}</span>`
    content += `</div>`
  }

  return content
}

// Navigation functions
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
}

// Click outside modal to close
document.getElementById("projectModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeProject()
  }
})
