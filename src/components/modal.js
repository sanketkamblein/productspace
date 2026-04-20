// ============================================================
// PROJECT MODAL
// ============================================================
function openProject(projectId, tileElement) {
  selectedProject = projectId
  clickedTile = tileElement
  const project = projects.find((p) => p.id === projectId)
  if (!project) return

  const modal          = document.getElementById("projectModal")
  const modalContent   = modal.querySelector(".modal-content")
  const modalImage     = document.getElementById("modalImage")
  const modalDescription = document.getElementById("modalDescription")

  const tileRect = tileElement.getBoundingClientRect()

  modalContent.style.position   = "fixed"
  modalContent.style.left       = tileRect.left + "px"
  modalContent.style.top        = tileRect.top + "px"
  modalContent.style.width      = tileRect.width + "px"
  modalContent.style.height     = tileRect.height + "px"
  modalContent.style.maxWidth   = "none"
  modalContent.style.maxHeight  = "none"
  modalContent.style.transform  = "scale(1)"
  modalContent.style.opacity    = "1"
  modalContent.style.borderRadius = "12px"
  modalContent.style.transition = "none"

  const modalProjectImage = document.getElementById("modalProjectImage")
  modalProjectImage.src = project.image
  modalProjectImage.alt = project.title

  modalProjectImage.classList.remove("modal-image-natural", "modal-image-fit", "modal-image-top")

  const naturalImageProjects = [
    "SAP Learning Fest",
    "Industrial Systems",
    "Flashrad AI",
    "SAP INVENT 2024",
    "SAP Invent '24: Intelligent controls...",
  ]

  if (naturalImageProjects.includes(project.title)) {
    modalProjectImage.classList.add("modal-image-natural")
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
  ]

  if (specialProjects.includes(project.title)) {
    modalProjectImage.classList.add("modal-image-fit")
  }

  modalDescription.innerHTML = generateProjectContent(project)
  modalDescription.scrollTop = 0

  modal.style.display    = "flex"
  modal.style.background = "rgba(0, 0, 0, 0)"
  document.body.style.overflow = "hidden"

  modalContent.offsetHeight

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const viewportWidth  = window.innerWidth
      const viewportHeight = window.innerHeight
      const finalWidth  = Math.min(1000, viewportWidth - 40)
      const finalHeight = Math.min(viewportHeight * 0.9, 700)
      const centerX = viewportWidth / 2
      const centerY = viewportHeight / 2

      modalContent.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      modalContent.style.left       = centerX - finalWidth / 2 + "px"
      modalContent.style.top        = centerY - finalHeight / 2 + "px"
      modalContent.style.width      = finalWidth + "px"
      modalContent.style.height     = finalHeight + "px"
      modalContent.style.maxWidth   = finalWidth + "px"
      modalContent.style.maxHeight  = finalHeight + "px"
      modalContent.style.borderRadius = "16px"

      modal.style.transition = "background-color 0.6s ease"
      modal.style.background = "rgba(0, 0, 0, 0.9)"
      modal.classList.add("active")

      if (projectScrollPositions[projectId] !== undefined && projectId === selectedProject) {
        modalDescription.scrollTop = projectScrollPositions[projectId]
      } else {
        modalDescription.scrollTop = 0
      }
    })
  })
}

function closeProject() {
  if (!selectedProject || !clickedTile) return

  const modalDescription = document.getElementById("modalDescription")
  if (modalDescription && selectedProject !== null) {
    projectScrollPositions[selectedProject] = modalDescription.scrollTop
  }

  const modal        = document.getElementById("projectModal")
  const modalContent = modal.querySelector(".modal-content")
  const tileRect     = clickedTile.getBoundingClientRect()

  modalContent.style.transition   = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
  modalContent.style.left         = tileRect.left + "px"
  modalContent.style.top          = tileRect.top + "px"
  modalContent.style.width        = tileRect.width + "px"
  modalContent.style.height       = tileRect.height + "px"
  modalContent.style.maxWidth     = "none"
  modalContent.style.maxHeight    = "none"
  modalContent.style.borderRadius = "12px"

  modal.style.transition = "background-color 0.6s ease"
  modal.style.background = "rgba(0, 0, 0, 0)"
  modal.classList.remove("active")

  setTimeout(() => {
    modal.style.display    = "none"
    document.body.style.overflow = "auto"

    modalContent.style.position   = "relative"
    modalContent.style.left       = "auto"
    modalContent.style.top        = "auto"
    modalContent.style.width      = "100%"
    modalContent.style.height     = "auto"
    modalContent.style.maxWidth   = "1000px"
    modalContent.style.maxHeight  = "90vh"
    modalContent.style.transition = ""
    modalContent.style.borderRadius = "16px"

    selectedProject = null
    clickedTile     = null
  }, 600)
}

function nextProject() {
  if (selectedProject === null) return
  const currentIndex = projects.findIndex((p) => p.id === selectedProject)
  const nextIndex    = (currentIndex + 1) % projects.length
  const nextTile     = document.querySelector(`.project-${nextIndex + 1}`)
  openProject(projects[nextIndex].id, nextTile)
}

function prevProject() {
  if (selectedProject === null) return
  const currentIndex = projects.findIndex((p) => p.id === selectedProject)
  const prevIndex    = (currentIndex - 1 + projects.length) % projects.length
  const prevTile     = document.querySelector(`.project-${prevIndex + 1}`)
  openProject(projects[prevIndex].id, prevTile)
}

// ============================================================
// GENERATE PROJECT CONTENT (modal body)
// ============================================================
function generateProjectContent(project) {
  if (project.isConfidential) {
    return `
      <div style="text-align:center; padding: 1.5rem 1rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 0.5rem;">🔒</div>
        <h2 style="color: #330033; font-size: 1.7rem; margin-bottom: 0.5rem; line-height: 1.3;">Agentic AR Experience</h2>
        <div style="display:inline-block; background:#ffd700; color:#330033; padding:0.3rem 1rem; border-radius:20px; font-weight:600; font-size:0.85rem; margin-bottom:1.25rem; letter-spacing:0.03em;">CONFIDENTIAL — LAUNCHING POST MAY 13, 2026</div>
      </div>

      <div style="background:#fafafa; border-left:4px solid #ffd700; padding:1rem 1.25rem; border-radius:0 8px 8px 0; margin-bottom:1.5rem; font-size:0.95rem; line-height:1.6; color:#555;">
        ${project.details.teaser}
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.5rem; font-size:0.88rem;">
        <div style="background:#fff; border:1px solid #ececec; border-radius:8px; padding:0.75rem 1rem;">
          <div style="color:#999; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.25rem;">Domain</div>
          <div style="color:#330033; font-weight:600;">Finance · Accounts Receivable</div>
        </div>
        <div style="background:#fff; border:1px solid #ececec; border-radius:8px; padding:0.75rem 1rem;">
          <div style="color:#999; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.25rem;">My Role</div>
          <div style="color:#330033; font-weight:600;">End-to-End UX Designer — Private Cloud</div>
        </div>
        <div style="background:#fff; border:1px solid #ececec; border-radius:8px; padding:0.75rem 1rem;">
          <div style="color:#999; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.25rem;">Engagement Since</div>
          <div style="color:#330033; font-weight:600;">July 2025</div>
        </div>
        <div style="background:#fff; border:1px solid #ececec; border-radius:8px; padding:0.75rem 1rem;">
          <div style="color:#999; font-size:0.75rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.25rem;">GTM Date</div>
          <div style="color:#330033; font-weight:600;">May 13, 2026</div>
        </div>
      </div>

      <h4 style="color:#330033; font-weight:600; margin-bottom:0.75rem;">What We Can Share</h4>
      <ul style="margin-bottom:1.5rem; padding-left:1.5rem; line-height:1.6; color:#555; font-size:0.95rem;">
        ${project.details.whatWeCanShare.map(item => `<li style="margin-bottom:0.5rem;">${item}</li>`).join('')}
      </ul>

      <h4 style="color:#330033; font-weight:600; margin-bottom:0.75rem;">My Journey on This Project</h4>
      <ul style="margin-bottom:1.5rem; padding-left:1.5rem; line-height:1.6; color:#555; font-size:0.95rem;">
        ${project.details.myJourney.map(item => `<li style="margin-bottom:0.5rem;">${item}</li>`).join('')}
      </ul>

      <div style="background:#330033; color:#fff; border-radius:8px; padding:1rem 1.25rem; text-align:center; font-size:0.9rem; margin-top:0.5rem;">
        Full case study and work samples will be published here after <strong>May 13, 2026</strong>.
      </div>
    `
  }

  let content = `<h2 style="color: #330033; font-size: 2rem; margin-bottom: 1rem; line-height: 1.2;">${project.title}</h2>`

  if (project.details) {
    content += '<div style="background: #fafafa; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.9rem; line-height: 1.4;">'

    const metadataFields = [
      { key: "role", label: "Role" },
      { key: "company", label: "Company" },
      { key: "customer", label: "Customer" },
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
    ]

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

    if (project.details.links && Array.isArray(project.details.links) && project.details.links.length > 0) {
      content += '<div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eee;">'
      content += '<h4 style="color: #330033; font-weight: 600; margin-bottom: 1rem;">Links</h4>'
      content += '<div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">'

      project.details.links.forEach((link) => {
        if (link && typeof link === "object" && link.title && link.url) {
          if (link.isProtected) {
            content += `<a href="${link.url}" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 16px; background: #330033; color: #ffd700; text-decoration: none; border-radius: 4px; border: 1px solid rgba(255,215,0,0.4); font-weight: 600; font-size: 0.88rem; transition: all 0.3s ease;">${link.title} <span style="font-size:0.72rem; background:rgba(255,215,0,0.15); border-radius:20px; padding:1px 7px; letter-spacing:0.04em;">password protected</span></a>`
          } else {
            content += `<a href="${link.url}" target="_blank" rel="noopener noreferrer" style="display: inline-block; padding: 8px 16px; background: #f8f9fa; color: #330033; text-decoration: none; border-radius: 4px; border: 1px solid #dee2e6; font-weight: 500; transition: all 0.3s ease;">🔗 ${link.title}</a>`
          }
        }
      })

      content += "</div></div>"
    }

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
    content += `<p style="margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.5; color: #555;">${project.description}</p>`
    content += `<div style="display: flex; gap: 1rem; flex-wrap: wrap;">`
    content += `<span style="background: #ffd700; color: #330033; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 500; font-size: 0.9rem;">${project.category}</span>`
    content += `<span style="background: transparent; color: #330033; border: 1px solid #330033; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${project.year}</span>`
    content += `</div>`
  }

  return content
}
