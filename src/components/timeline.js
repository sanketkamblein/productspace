// ============================================================
// TIMELINE PATH CALCULATION
// ============================================================
function calculatePath() {
  const timeline     = document.getElementById("timeline")
  const timelineSvg  = document.getElementById("timelineSvg")
  const timelinePath = document.getElementById("timelinePath")
  if (!timeline || !timelineSvg || !timelinePath) return

  const timelineWidth  = timeline.offsetWidth
  const timelineHeight = timeline.offsetHeight
  timelineSvg.setAttribute("viewBox", `0 0 ${timelineWidth} ${timelineHeight}`)

  // Reset dash state so animation restarts cleanly after resize
  delete timelinePath.dataset.initialized

  if (isMobile || isTablet) {
    // Simple vertical line down the left edge — grows as you scroll
    const x      = 18
    const startY = 20
    const endY   = timelineHeight - 20
    timelinePath.setAttribute("d", `M ${x} ${startY} L ${x} ${endY}`)
    return
  }

  // Desktop: full zigzag
  const leftMargin    = 80
  const rightMargin   = timelineWidth - 80
  const projectsTextY = 40

  const project1 = document.querySelector(".project-1")
  const project4 = document.querySelector(".project-4")
  const project8 = document.querySelector(".project-8")
  if (!project1 || !project4 || !project8) return

  const timelineTop = timeline.getBoundingClientRect().top
  const row1Y = project1.getBoundingClientRect().top - timelineTop
  const row2Y = project4.getBoundingClientRect().top - timelineTop
  const row3Y = project8.getBoundingClientRect().top - timelineTop

  const path = generateDesktopZigzagPath(row1Y, row2Y, row3Y, leftMargin, rightMargin, projectsTextY, timelineHeight)
  timelinePath.setAttribute("d", path)
}

function generateDesktopZigzagPath(row1Y, row2Y, row3Y, leftMargin, rightMargin, projectsTextY, containerHeight) {
  const distanceAboveTiles = 40
  const cornerRadius = 20

  const beforeRow1Y = row1Y - distanceAboveTiles
  const beforeRow2Y = row2Y - distanceAboveTiles
  const beforeRow3Y = row3Y - distanceAboveTiles

  const row3TileHeight   = 240
  const distanceBelowTiles = 16
  const belowRow3Y = row3Y + row3TileHeight + distanceBelowTiles

  const desiredTailLength = 100
  const svgBottomMargin   = 20
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

// ============================================================
// TIMELINE SCROLL ANIMATION
// ============================================================
function handleTimelineScroll() {
  // Animate project items into view (all breakpoints)
  const windowHeight   = window.innerHeight
  const projectItems   = document.querySelectorAll(".project-item")
  projectItems.forEach((project, index) => {
    const rect = project.getBoundingClientRect()
    const threshold = isMobile || isTablet ? windowHeight * 1.2 : windowHeight * 0.9
    if (rect.top < threshold && !project.classList.contains("animate-in")) {
      setTimeout(() => project.classList.add("animate-in"), index * 60)
    }
  })

  const timeline     = document.getElementById("timeline")
  const timelinePath = document.getElementById("timelinePath")
  const travelingDot = document.getElementById("travelingDot")

  if (!timeline || !timelinePath) return

  const pathLength = timelinePath.getTotalLength()
  if (pathLength === 0) return

  if (!timelinePath.dataset.initialized) {
    timelinePath.style.strokeDasharray  = `${pathLength} ${pathLength}`
    timelinePath.style.strokeDashoffset = pathLength.toString()
    timelinePath.dataset.initialized    = "true"
  }

  const timelineRect   = timeline.getBoundingClientRect()
  const scrollPosition = window.scrollY

  // Find the last project tile
  const allTiles   = document.querySelectorAll(".project-item")
  const lastTile   = allTiles[allTiles.length - 1]
  const lastTileAbsBottom = lastTile
    ? lastTile.getBoundingClientRect().bottom + scrollPosition
    : timelineRect.top + scrollPosition + timelineRect.height

  let animationStartScrollY, animationEndScrollY

  if (isMobile || isTablet) {
    // Start: when section top enters viewport
    // End: when the last tile's bottom reaches the middle of the screen
    animationStartScrollY = timelineRect.top + scrollPosition - windowHeight
    animationEndScrollY   = lastTileAbsBottom - windowHeight * 0.5
  } else {
    // Desktop: start when section enters view, end well after last tile
    // so the pace stays slow and steady throughout — no mid-scroll burst
    animationStartScrollY = timelineRect.top + scrollPosition - windowHeight * 0.8
    animationEndScrollY   = lastTileAbsBottom + windowHeight * 0.8
  }

  const scrollRange = animationEndScrollY - animationStartScrollY

  let rawProgress = 0
  if (scrollRange > 0) {
    rawProgress = (scrollPosition - animationStartScrollY) / scrollRange
  } else {
    rawProgress = timelineRect.top < windowHeight * 0.5 ? 1 : 0
  }

  // On mobile/tablet: if the last tile has fully scrolled past the viewport,
  // force completion — the page may not scroll far enough to hit animationEndScrollY
  if ((isMobile || isTablet) && lastTile) {
    const lastTileBottom = lastTile.getBoundingClientRect().bottom
    if (lastTileBottom < 0) rawProgress = 1
  }

  const finalProgress = Math.max(0, Math.min(1, rawProgress))
  timelinePath.style.strokeDashoffset = (pathLength * (1 - finalProgress)).toString()

  if (finalProgress >= 0.97) {
    timelinePath.setAttribute("marker-end", "url(#end-circle)")
    if (!isMobile && !isTablet) {
      // Safari desktop repaint trick
      timelinePath.style.display = "none"
      timelinePath.offsetHeight
      timelinePath.style.display = ""
    }
  } else {
    timelinePath.removeAttribute("marker-end")
  }

  // Traveling dot — desktop only
  if (travelingDot) {
    if (!isMobile && !isTablet && finalProgress > 0.01 && finalProgress < 0.99) {
      travelingDot.style.display = "block"
      try {
        const pt      = timelinePath.getPointAtLength(pathLength * finalProgress)
        const svgEl   = document.getElementById("timelineSvg")
        const svgRect = svgEl.getBoundingClientRect()
        const vb      = svgEl.viewBox.baseVal
        const scaleX  = svgRect.width  / vb.width
        const scaleY  = svgRect.height / vb.height
        travelingDot.setAttribute("cx", pt.x)
        travelingDot.setAttribute("cy", pt.y)
        travelingDot.setAttribute("transform",
          `translate(${pt.x * (scaleX - 1)}, ${pt.y * (scaleY - 1)})`)
      } catch (_) {
        travelingDot.style.display = "none"
      }
    } else {
      travelingDot.style.display = "none"
    }
  }
}
