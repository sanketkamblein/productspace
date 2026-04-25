// ============================================================
// STATE
// ============================================================
let selectedProject = null
let isMobile = window.innerWidth <= 768
let isTablet = window.innerWidth > 768 && window.innerWidth <= 1200
let clickedTile = null
let projectScrollPositions = {}
let ticking = false

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects()
  setupEventListeners()
  handleResize()
  setupScrollReveal()
  setupHeroStagger()
  setupMagneticMorph()
  setupParticleButtons()

  setTimeout(() => {
    calculatePath()
    handleTimelineScroll()
    fixGridColumns()
  }, 300)

  // Re-measure after images load — tile heights settle
  window.addEventListener("load", () => {
    calculatePath()
    handleTimelineScroll()
    fixGridColumns()
  })

  updateParallax()
})

// ============================================================
// FIX GRID COLUMNS — explicit px widths for cross-browser consistency
// (Chrome/Safari/Edge resolve 1fr differently than Firefox when the
//  grid container has asymmetric or JS-injected padding)
// ============================================================
function fixGridColumns() {
  const grid = document.getElementById("projectsGrid")
  if (!grid) return

  // Read actual computed padding so we handle any media-query value correctly
  const cs          = getComputedStyle(grid)
  const padLeft     = parseFloat(cs.paddingLeft)  || 0
  const padRight    = parseFloat(cs.paddingRight) || 0
  const colGap      = parseFloat(cs.columnGap)    || 0

  if (grid.classList.contains("tablet")) {
    const available = grid.offsetWidth - padLeft - padRight - colGap
    const colWidth  = Math.floor(available / 2)
    grid.style.gridTemplateColumns = `repeat(2, ${colWidth}px)`

  } else if (grid.classList.contains("mobile")) {
    if (window.innerWidth > 540) {
      const available = grid.offsetWidth - padLeft - padRight - colGap
      const colWidth  = Math.floor(available / 2)
      grid.style.gridTemplateColumns = `repeat(2, ${colWidth}px)`
    } else {
      grid.style.gridTemplateColumns = "1fr"
    }
  }
  // Desktop columns are set by calculatePath() in timeline.js
}

// ============================================================
// RENDER PROJECTS
// ============================================================
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid")
  projectsGrid.innerHTML = ""

  let gridClass = "desktop"
  if (isMobile)       gridClass = "mobile"
  else if (isTablet)  gridClass = "tablet"

  projectsGrid.className = `projects-grid ${gridClass}`

  projects.forEach((project, index) => {
    const projectElement = document.createElement("div")
    projectElement.className = `project-item project-${index + 1}`
    projectElement.onclick = (e) => openProject(project.id, e.currentTarget)

    const projectTitle = project.isFinalist
      ? `${project.title} <span class="finalist-badge">SAP Invent finalist</span>`
      : project.title

    if (project.isConfidential) {
      projectElement.innerHTML = `
        <div class="project-frame confidential-tile">
          <div class="confidential-bg">
            <div class="confidential-lock-icon">🔒</div>
            <div class="confidential-coming-label">Coming May 13</div>
          </div>
          <div class="project-badge">${project.badge || project.category}</div>
          <div class="project-title-overlay">
            <h3 class="project-title-text">${projectTitle}</h3>
          </div>
        </div>
      `
    } else {
      projectElement.innerHTML = `
        <div class="project-frame">
          <img src="${project.image}" alt="${projectTitle}" onerror="this.src='https://via.placeholder.com/400x200/cccccc/666666?text=Project+Image'">
          <div class="project-badge">${project.badge || project.category}</div>
          <div class="project-title-overlay">
            <h3 class="project-title-text">${projectTitle}</h3>
          </div>
        </div>
      `
    }

    projectsGrid.appendChild(projectElement)
  })
}

// ============================================================
// EVENT LISTENERS
// ============================================================
function setupEventListeners() {
  window.addEventListener("resize", handleResize)
  window.addEventListener(
    "scroll",
    () => {
      handleTimelineScroll()
      updateParallax()
    },
    { passive: true }
  )

  document.addEventListener("keydown", (e) => {
    if (selectedProject !== null) {
      if (e.key === "Escape")      closeProject()
      if (e.key === "ArrowRight")  nextProject()
      if (e.key === "ArrowLeft")   prevProject()
    }
  })

  document.getElementById("projectModal").addEventListener("click", function (e) {
    if (e.target === this) closeProject()
  })
}

// ============================================================
// RESIZE
// ============================================================
function handleResize() {
  const newIsMobile = window.innerWidth <= 768
  const newIsTablet = window.innerWidth > 768 && window.innerWidth <= 1200

  if (newIsMobile !== isMobile || newIsTablet !== isTablet) {
    isMobile = newIsMobile
    isTablet = newIsTablet

    renderProjects()

    const mobileNotice = document.querySelector(".mobile-notice")
    if (mobileNotice) mobileNotice.style.display = "none"

    setTimeout(() => {
      calculatePath()
      handleTimelineScroll()
      fixGridColumns()
    }, 150)
  } else {
    // Same breakpoint but viewport width changed — recompute explicit column widths
    fixGridColumns()
    calculatePath()
  }
}

// ============================================================
// NAVIGATION
// ============================================================
function scrollToProjects() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
}

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
}
