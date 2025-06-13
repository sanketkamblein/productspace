// Project data
const projects = [
  {
    id: 1,
    title: "SAP Learning Fest | AI-Powered Multi-Round Auction in SAP Ariba",
    category: "Product Role Work",
    description: "AI-driven recommendations to guide sourcing managers during multi-round auction events in SAP Ariba.",
    badge: "Product Management Trainee",
    year: "2023",
    image: "https://via.placeholder.com/300x200/330033/ffffff?text=SAP+Ariba+AI",
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
    },
  },
  {
    id: 2,
    title: "Industrial Systems - SAP EAM",
    category: "UX Design",
    description: "UX-PM for Asset Management Experience in SAP Private and Public Cloud.",
    badge: "UX Product Manager",
    year: "2022",
    image: "https://via.placeholder.com/300x200/4d004d/ffffff?text=SAP+EAM",
    details: {
      role: "UX Product Manager",
      context: "SAP Private and Public Cloud | Asset Management (EAM)",
      duration: "Ongoing",
      team: "Cross-functional (Design, Dev, PM, Cloud Infra)",
      challenge:
        "SAP needed a scalable, consistent UI experience to manage technical systems and objects (like Equipment, Functional Locations) across both Private and Public Cloud deployments.",
      myRole:
        "As a UX-PM hybrid, I led design alignment, investigated UI tech feasibility, and ensured end-user needs were balanced with system constraints.",
      contributions: [
        "Facilitated design discussions between private and public cloud teams to align UI patterns, user journeys, and roadmap dependencies.",
        "Conducted UI tech investigation for advanced network graph visualization (D3.js, Cytoscape, Graph API) to support system connectivity views.",
        "Drove mockup feedback cycles with internal SMEs and customers to shape the evolving product experience.",
      ],
      outcome: [
        "Delivered early-stage concepts and mid-fidelity mockups for System Overview and Interconnectivity.",
        "Improved team alignment by documenting UI reuse potential and edge cases across deployment models.",
        "Positioned design as a proactive voice in early backlog planning and technical evaluation.",
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
    image: "https://via.placeholder.com/300x200/ffd700/330033?text=AxonRad+AI",
    details: {
      role: "Product Lead (joined as co-founder of FlashRad AI)",
      company: "AxonRad AI (formerly Axon Health + FlashRad AI)",
      stage: "MVP Built | Status: Pre-incubation | Domain: Radiology, Diagnostic ERP",
      team: "ML Developer, Use Case Owner, Product Designer, Vendor Engineers",
      productVision:
        "To transform diagnostic radiology reporting by combining AI-driven clinical summarization with a modular healthcare ERP system, tailored for next-generation diagnostic labs in India.",
      contextAndEvolution:
        "Started during an AI health-tech hackathon as FlashRad AI, the product matured into AxonRad AI under the Axon Health umbrella.",
      myRoleAndOwnership: [
        "Spearheaded product strategy across two tracks: Radiology AI – NLP-based summarization of radiology scans (CT, X-Ray) and Healthcare ERP – Patient registration, test workflow, consent, billing.",
        "Defined and prioritized feature sets under developer constraints, ensuring iterative delivery with minimal engineering resources.",
        "Led product discovery with diagnostic center stakeholders, validating needs around speed, compliance, and mobile usability.",
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
    image: "https://via.placeholder.com/300x200/28a745/ffffff?text=EcoPulse",
    details: {
      productType: "IIoT + Sustainability Dashboard",
      company: "YOKOGAWA",
      team: "Sanket Kamble, Sunil Maurya, Mahesh Gonda & Mehul Jain (Development)",
      challenge:
        "Heavy industry manufacturers lack a centralized, user-friendly tool to analyze diverse sensor data—hindering production optimization, proactive maintenance, and sustainability decisions.",
      solution: [
        "Monitors multi-sensor data (temperature, vibration, pressure, energy)",
        "Maps equipment to sensors for traceability",
        "Visualizes real-time data through a comprehensive dashboard",
        "Triggers preventive maintenance using smart business rules",
        "Calculates CO₂ footprint by linking energy consumption with emissions",
      ],
    },
  },
  {
    id: 5,
    title: "SAP Invent '24: Intelligent Controls Compliance System",
    category: "Innovation Work",
    description: "AI-based anomaly detection for vendor invoices in Accounts Payable",
    badge: "Hack for Customers Finalist",
    year: "2024",
    image: "https://via.placeholder.com/300x200/ff6b35/ffffff?text=Compliance+AI",
    details: {
      role: "Product Contributor (UX & AI Collaboration)",
      company: "Asian Paints",
      track: "Hack for Customers Finalist",
      team: "Resolver (5 members)",
      techStack: "SAP BTP, S/4HANA, SAP Data Sphere, AI, GenAI Hub",
      challenge:
        "Asian Paints processes a high volume of vendor invoices in varying formats, making its Accounts Payable (AP) process heavily manual, error-prone, and compliance-sensitive.",
      solution: [
        "Machine Learning for invoice exception detection",
        "Fiori dashboard to visualize and interact with anomalies",
        "GenAI integration for summarizing detected irregularities in plain language",
        "Scalable architecture for future use cases (insurance claims, customer credit behavior)",
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
    image: "https://via.placeholder.com/300x200/007bff/ffffff?text=coviCLOUD",
    details: {
      productType: "Public Health SaaS (Mobile + Web Platform)",
      domain: "Pandemic Response | Healthcare Accessibility | Patient-Centric Services",
      teamSize: "8+ cross-functional members (Product, Public Health, Engineering, Business)",
      challenge:
        "During the COVID-19 pandemic, patients and their caretakers struggled with disjointed, unreliable, and rapidly outdated information regarding bed availability, admission protocols, plasma donors, and verified consultation.",
      solution: [
        "Provide real-time updates on hospital beds, ICU availability, and treatment costs",
        "Enable quick hospital admission via preference-based filtering",
        "Connect patients with verified medical consultation and helpline support",
        "Offer access to plasma donors by location and consent",
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
    image: "https://via.placeholder.com/300x200/6c757d/ffffff?text=ErgoCheck",
    details: {
      productType: "IoT Wearable | HealthTech | Industrial Safety",
      domain: "Ergonomics · Workplace Safety · Human Factors Engineering",
      duration: "1 year (3 months research, 3 months design/dev, thesis at IISc)",
      challenge:
        "Factory workers are exposed to unsafe working postures and high physical stress, which leads to musculoskeletal disorders and chronic fatigue.",
      solution: [
        "Body posture (via IMU sensors)",
        "Heart rate (via optical sensing)",
        "Real-time data tracking via sensors",
        "Visual and haptic alerts for bad posture",
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
    image: "https://via.placeholder.com/300x200/17a2b8/ffffff?text=Netcore+Email",
    details: {
      type: "B2B SaaS | Martech | Retention Suite",
      role: "UX Designer (Lead for Workflow Redesign)",
      duration: "4 months (Design Sprint-based MVP delivery)",
      projectContext:
        "Netcore's product team aimed to improve customer retention by revamping its email campaigning module.",
      keyFeaturesShaped: [
        "AI-backed audience segmentation for higher conversions",
        "Pre-built templates to reduce effort for marketers",
        "Improved workflow clarity, feature discoverability, and broadcast efficiency",
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
    image: "https://via.placeholder.com/300x200/6f42c1/ffffff?text=SAP+Fiori",
    details: {
      type: "Enterprise Asset Management (EAM) | Private Cloud | Fiori Elements",
      role: "UX Designer (Execution & Delivery Focus)",
      client: "Deutsche Bahn",
      duration: "Full delivery cycle (Executional)",
      applicationsDelivered: [
        "Reference Structures App – For managing reusable structural hierarchies across asset types",
        "Reference Equipment App – Allows users to define template-like equipment entities for faster replication",
        "Manager Structure App – An administrative view to oversee and manage Reference Structures",
      ],
    },
  },
]

// State management
let selectedProject = null
let isMobile = window.innerWidth <= 768
let isTablet = window.innerWidth > 768 && window.innerWidth <= 1200

// Initialize the portfolio
document.addEventListener("DOMContentLoaded", () => {
  renderProjects()
  setupEventListeners()
  handleResize()

  // Initialize timeline animation
  setTimeout(() => {
    if (!isMobile) {
      calculatePath()
      handleTimelineScroll()
    }
  }, 500)
})

// Render projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid")
  projectsGrid.innerHTML = ""

  projects.forEach((project, index) => {
    const projectElement = document.createElement("div")
    projectElement.className = `project-item project-${index + 1}`
    projectElement.onclick = () => openProject(project.id)

    projectElement.innerHTML = `
            <div class="project-frame">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-title-overlay">
                    <h3 class="project-title-text">${project.title}</h3>
                </div>
                <div class="project-triangle-marker">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="6,0 0,8 12,8" fill="#330033" />
                    </svg>
                </div>
            </div>
        `

    projectsGrid.appendChild(projectElement)
  })
}

// Setup event listeners
function setupEventListeners() {
  window.addEventListener("resize", handleResize)
  window.addEventListener("scroll", handleTimelineScroll)

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

    // Show/hide mobile notice
    const mobileNotice = document.querySelector(".mobile-notice")
    if (mobileNotice) {
      mobileNotice.style.display = isMobile || isTablet ? "block" : "none"
    }

    // Recalculate path if not mobile
    if (!isMobile) {
      setTimeout(calculatePath, 100)
    }
  }
}

// Calculate zigzag path
function calculatePath() {
  if (isMobile) return

  const timeline = document.getElementById("timeline")
  const timelineSvg = document.getElementById("timelineSvg")
  const timelinePath = document.getElementById("timelinePath")

  if (!timeline || !timelineSvg || !timelinePath) return

  const timelineRect = timeline.getBoundingClientRect()
  const timelineWidth = timeline.offsetWidth
  const timelineHeight = timeline.offsetHeight

  // Update SVG viewBox
  timelineSvg.setAttribute("viewBox", `0 0 ${timelineWidth} ${timelineHeight}`)

  // Calculate path coordinates
  const leftMargin = 80
  const rightMargin = timelineWidth - 80
  const projectsTextY = 40

  // Get project positions
  const project1 = document.querySelector(".project-1")
  const project4 = document.querySelector(".project-4")
  const project8 = document.querySelector(".project-8")

  if (!project1 || !project4 || !project8) return

  const timelineTop = timeline.getBoundingClientRect().top
  const row1Y = project1.getBoundingClientRect().top - timelineTop
  const row2Y = project4.getBoundingClientRect().top - timelineTop
  const row3Y = project8.getBoundingClientRect().top - timelineTop

  // Generate zigzag path
  const path = generateZigzagPath(row1Y, row2Y, row3Y, leftMargin, rightMargin, projectsTextY, timelineHeight)
  timelinePath.setAttribute("d", path)
}

// Generate zigzag path
function generateZigzagPath(row1Y, row2Y, row3Y, leftMargin, rightMargin, projectsTextY, containerHeight) {
  const distanceAboveTiles = 40
  const cornerRadius = 20

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
  finalPathY = Math.min(finalPathY, containerHeight - svgBottomMargin)
  finalPathY = Math.max(finalPathY, startOfTailY)

  let path = `M ${leftMargin} ${projectsTextY}`
  path += ` L ${leftMargin} ${beforeRow1Y - cornerRadius}`
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${leftMargin + cornerRadius} ${beforeRow1Y}`
  path += ` L ${rightMargin - cornerRadius} ${beforeRow1Y}`
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${rightMargin} ${beforeRow1Y + cornerRadius}`
  path += ` L ${rightMargin} ${beforeRow2Y - cornerRadius}`
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${rightMargin - cornerRadius} ${beforeRow2Y}`
  path += ` L ${leftMargin + cornerRadius} ${beforeRow2Y}`
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${leftMargin} ${beforeRow2Y + cornerRadius}`
  path += ` L ${leftMargin} ${beforeRow3Y - cornerRadius}`
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${leftMargin + cornerRadius} ${beforeRow3Y}`
  path += ` L ${rightMargin - cornerRadius} ${beforeRow3Y}`
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${rightMargin} ${beforeRow3Y + cornerRadius}`
  path += ` L ${rightMargin} ${belowRow3Y - cornerRadius}`
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 1 ${rightMargin - cornerRadius} ${belowRow3Y}`
  path += ` L ${leftMargin + cornerRadius} ${belowRow3Y}`
  path += ` A ${cornerRadius} ${cornerRadius} 0 0 0 ${leftMargin} ${belowRow3Y + cornerRadius}`
  path += ` L ${leftMargin} ${finalPathY}`

  return path
}

// Handle timeline scroll animation
function handleTimelineScroll() {
  if (isMobile) return

  const timeline = document.getElementById("timeline")
  const timelinePath = document.getElementById("timelinePath")

  if (!timeline || !timelinePath) return

  const pathLength = timelinePath.getTotalLength()
  if (pathLength === 0) return

  // Initialize path animation
  if (!timelinePath.dataset.initialized) {
    timelinePath.style.strokeDasharray = `${pathLength} ${pathLength}`
    timelinePath.style.strokeDashoffset = pathLength.toString()
    timelinePath.dataset.initialized = "true"
  }

  const timelineRect = timeline.getBoundingClientRect()
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
  timelinePath.style.strokeDashoffset = dashOffset.toString()

  // Show end marker when path is fully drawn
  if (finalProgress >= 0.99) {
    timelinePath.setAttribute("marker-end", "url(#end-circle)")
  } else {
    timelinePath.removeAttribute("marker-end")
  }

  // Animate project items
  const projectItems = document.querySelectorAll(".project-item")
  projectItems.forEach((project, index) => {
    const rect = project.getBoundingClientRect()
    const isVisible = rect.top < windowHeight * 0.8
    if (isVisible && !project.classList.contains("animate-in")) {
      setTimeout(() => {
        project.classList.add("animate-in")
      }, index * 100)
    }
  })
}

// Project modal functions
function openProject(projectId) {
  selectedProject = projectId
  const project = projects.find((p) => p.id === projectId)
  if (!project) return

  const modal = document.getElementById("projectModal")
  const modalImage = document.getElementById("modalImage")
  const modalDescription = document.getElementById("modalDescription")

  // Set modal image
  modalImage.style.backgroundImage = `url(${project.image})`

  // Set modal content
  modalDescription.innerHTML = generateProjectContent(project)

  // Show modal
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProject() {
  selectedProject = null
  const modal = document.getElementById("projectModal")
  modal.classList.remove("active")
  document.body.style.overflow = "auto"
}

function nextProject() {
  if (selectedProject === null) return
  const currentIndex = projects.findIndex((p) => p.id === selectedProject)
  const nextIndex = (currentIndex + 1) % projects.length
  openProject(projects[nextIndex].id)
}

function prevProject() {
  if (selectedProject === null) return
  const currentIndex = projects.findIndex((p) => p.id === selectedProject)
  const prevIndex = (currentIndex - 1 + projects.length) % projects.length
  openProject(projects[prevIndex].id)
}

// Generate project content
function generateProjectContent(project) {
  let content = `<h2 style="color: #330033; font-size: 2rem; margin-bottom: 1rem;">${project.title}</h2>`

  if (project.details) {
    // Add metadata
    content +=
      '<div style="background: #fafafa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.9rem;">'
    if (project.details.role) content += `<strong>Role:</strong> ${project.details.role}<br>`
    if (project.details.company) content += `<strong>Company:</strong> ${project.details.company}<br>`
    if (project.details.duration) content += `<strong>Duration:</strong> ${project.details.duration}<br>`
    if (project.details.team) content += `<strong>Team:</strong> ${project.details.team}<br>`
    content += "</div>"

    let sectionCounter = 1

    // Add sections
    if (project.details.challenge) {
      content += `<h4 style="color: #330033; font-weight: 600; margin-bottom: 0.5rem;">${sectionCounter++}. The Challenge</h4>`
      content += `<p style="margin-bottom: 1rem;">${project.details.challenge}</p>`
    }

    if (project.details.hypothesis) {
      content += `<h4 style="color: #330033; font-weight: 600; margin-bottom: 0.5rem;">${sectionCounter++}. Hypothesis</h4>`
      content += `<p style="margin-bottom: 1rem;">${project.details.hypothesis}</p>`
    }

    if (project.details.approach) {
      content += `<h4 style="color: #330033; font-weight: 600; margin-bottom: 0.5rem;">${sectionCounter++}. My Approach</h4>`
      content += '<ul style="margin-bottom: 1rem; padding-left: 1.5rem;">'
      project.details.approach.forEach((item) => {
        content += `<li style="margin-bottom: 0.25rem;">${item}</li>`
      })
      content += "</ul>"
    }

    if (project.details.solution) {
      content += `<h4 style="color: #330033; font-weight: 600; margin-bottom: 0.5rem;">${sectionCounter++}. Solution Overview</h4>`
      content += '<ul style="margin-bottom: 1rem; padding-left: 1.5rem;">'
      project.details.solution.forEach((item) => {
        content += `<li style="margin-bottom: 0.25rem;">${item}</li>`
      })
      content += "</ul>"
    }

    if (project.details.contributions) {
      content += `<h4 style="color: #330033; font-weight: 600; margin-bottom: 0.5rem;">${sectionCounter++}. Key Contributions</h4>`
      content += '<ul style="margin-bottom: 1rem; padding-left: 1.5rem;">'
      project.details.contributions.forEach((item) => {
        content += `<li style="margin-bottom: 0.25rem;">${item}</li>`
      })
      content += "</ul>"
    }

    if (project.details.outcome) {
      content += `<h4 style="color: #330033; font-weight: 600; margin-bottom: 0.5rem;">${sectionCounter++}. Outcome</h4>`
      content += '<ul style="margin-bottom: 1rem; padding-left: 1.5rem;">'
      project.details.outcome.forEach((item) => {
        content += `<li style="margin-bottom: 0.25rem;">${item}</li>`
      })
      content += "</ul>"
    }

    if (project.details.metrics) {
      content += `<h4 style="color: #330033; font-weight: 600; margin-bottom: 0.5rem;">${sectionCounter++}. Success Metrics</h4>`
      content += '<ul style="margin-bottom: 1rem; padding-left: 1.5rem;">'
      project.details.metrics.forEach((item) => {
        content += `<li style="margin-bottom: 0.25rem;">${item}</li>`
      })
      content += "</ul>"
    }
  } else {
    content += `<p style="margin-bottom: 1.5rem; font-size: 1.1rem;">${project.description}</p>`
    content += `<div style="display: flex; gap: 1rem;">`
    content += `<span style="background: #ffd700; color: #330033; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 500;">${project.category}</span>`
    content += `<span style="background: transparent; color: #330033; border: 1px solid #330033; padding: 0.5rem 1rem; border-radius: 20px;">${project.year}</span>`
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
