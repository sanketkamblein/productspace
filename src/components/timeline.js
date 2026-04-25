// ============================================================
// TIMELINE PATH CALCULATION
// ============================================================
function calculatePath() {
  const timeline     = document.getElementById("timeline")
  const timelineSvg  = document.getElementById("timelineSvg")
  const timelinePath = document.getElementById("timelinePath")
  if (!timeline || !timelineSvg || !timelinePath) return

  delete timelinePath.dataset.initialized

  if (isMobile || isTablet) {
    // Simple vertical line for mobile/tablet
    const w = timeline.offsetWidth
    const h = timeline.offsetHeight
    timelineSvg.setAttribute("width",   w)
    timelineSvg.setAttribute("height",  h)
    timelineSvg.setAttribute("viewBox", `0 0 ${w} ${h}`)
    timelineSvg.removeAttribute("preserveAspectRatio")
    timelinePath.setAttribute("d", `M 24 0 L 24 ${h}`)
    clearCornerDots()
    return
  }

  // ── Single gutter ratio: all spacing derived from this one value ──
  // x = horizontal clearance (tile edge → line)
  // y = vertical clearance (tile edge → horizontal line segment)
  // x === y === gutter, always.
  const GUTTER_RATIO = 0.07  // 7% of container width
  const containerW   = timeline.offsetWidth
  const gutter       = Math.round(containerW * GUTTER_RATIO)

  // Apply gutter to the grid so CSS layout matches SVG expectations
  const grid = document.getElementById("projectsGrid")
  if (grid && grid.classList.contains("desktop")) {
    grid.style.padding    = `${gutter}px`
    grid.style.columnGap  = `${gutter}px`
    grid.style.rowGap     = `${gutter * 2}px`  // row-gap = 2× gutter so half-gap = gutter = y
  }

  // ── After applying CSS, measure tile positions relative to SVG origin ──
  // Force a reflow so getBoundingClientRect reflects the new grid layout
  timeline.offsetHeight

  const svgRect = timelineSvg.getBoundingClientRect()

  function relTop(el)  { return el.getBoundingClientRect().top  - svgRect.top  }

  const p1  = document.querySelector(".project-1")
  const p4  = document.querySelector(".project-4")
  const p7  = document.querySelector(".project-7")
  const p10 = document.querySelector(".project-10")
  if (!p1 || !p4) return

  const row1Y = relTop(p1)
  const row2Y = relTop(p4)
  const row3Y = p7  ? relTop(p7)  : null
  const row4Y = p10 ? relTop(p10) : null

  const tileH  = p1.getBoundingClientRect().height
  const tileH2 = p4.getBoundingClientRect().height
  const tileH3 = p7  ? p7.getBoundingClientRect().height  : tileH
  const tileH4 = p10 ? p10.getBoundingClientRect().height : tileH

  // Line runs flush to container edges (L=0, R=containerW)
  const L = 0
  const R = containerW

  // Horizontal line segments sit at tile_bottom + gutter (= exact midpoint of row-gap = 2*gutter)
  const mid12 = row1Y + tileH  + gutter
  const mid23 = row3Y !== null ? row2Y + tileH2 + gutter : null
  const mid34 = (row3Y !== null && row4Y !== null) ? row3Y + tileH3 + gutter : null

  // Entry above first tile and exit below last tile — same gutter clearance
  const startY        = row1Y - gutter
  const lastRowBottom = row4Y !== null ? row4Y + tileH4
                      : row3Y !== null ? row3Y + tileH3
                      : row2Y + tileH2
  const endY          = lastRowBottom + gutter

  // SVG dimensions
  const svgW = containerW
  const svgH = Math.max(timeline.offsetHeight, endY + gutter + 20)
  timelineSvg.setAttribute("width",              svgW)
  timelineSvg.setAttribute("height",             svgH)
  timelineSvg.setAttribute("viewBox",            `0 0 ${svgW} ${svgH}`)
  timelineSvg.setAttribute("preserveAspectRatio", "none")

  // Corner radius — proportional to gutter, never so large it touches a tile
  const cr = Math.round(gutter * 0.5)

  // ── Build path ──
  let d = `M ${L} ${startY}`
  d += ` L ${L} ${mid12 - cr}`
  d += ` A ${cr} ${cr} 0 0 0 ${L + cr} ${mid12}`
  d += ` L ${R - cr} ${mid12}`
  d += ` A ${cr} ${cr} 0 0 1 ${R} ${mid12 + cr}`

  if (mid23 !== null) {
    d += ` L ${R} ${mid23 - cr}`
    d += ` A ${cr} ${cr} 0 0 1 ${R - cr} ${mid23}`
    d += ` L ${L + cr} ${mid23}`
    d += ` A ${cr} ${cr} 0 0 0 ${L} ${mid23 + cr}`
  }

  if (mid34 !== null) {
    d += ` L ${L} ${mid34 - cr}`
    d += ` A ${cr} ${cr} 0 0 0 ${L + cr} ${mid34}`
    d += ` L ${R - cr} ${mid34}`
    d += ` A ${cr} ${cr} 0 0 1 ${R} ${mid34 + cr}`
  }

  const onRight = mid34 !== null ? true : mid23 !== null ? false : true
  d += ` L ${onRight ? R : L} ${endY}`

  timelinePath.setAttribute("d", d)

  // End dot
  const endDot = document.getElementById("timelineEndDot")
  if (endDot) {
    endDot.setAttribute("cx", onRight ? R : L)
    endDot.setAttribute("cy", endY)
    endDot.style.display = "block"
  }

  placeCornerDots(L, R, mid12, mid23, mid34)
}

// ============================================================
// CORNER PULSE DOTS
// ============================================================
function clearCornerDots() {
  document.querySelectorAll(".timeline-corner-dot").forEach(el => el.remove())
}

function placeCornerDots(L, R, mid12, mid23, mid34) {
  clearCornerDots()
  const svg = document.getElementById("timelineSvg")
  if (!svg) return

  const corners = [
    { x: L, y: mid12 },
    { x: R, y: mid12 },
  ]
  if (mid23 !== null) {
    corners.push({ x: R, y: mid23 })
    corners.push({ x: L, y: mid23 })
  }
  if (mid34 !== null) {
    corners.push({ x: L, y: mid34 })
    corners.push({ x: R, y: mid34 })
  }

  corners.forEach((c, i) => {
    const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    ring.setAttribute("cx", c.x)
    ring.setAttribute("cy", c.y)
    ring.setAttribute("r", "10")
    ring.setAttribute("class", "timeline-corner-dot corner-ring")
    ring.style.animationDelay = `${i * 0.22}s`
    svg.appendChild(ring)

    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    dot.setAttribute("cx", c.x)
    dot.setAttribute("cy", c.y)
    dot.setAttribute("r", "4")
    dot.setAttribute("class", "timeline-corner-dot corner-dot")
    dot.style.animationDelay = `${i * 0.22}s`
    svg.appendChild(dot)
  })
}

// ============================================================
// TIMELINE SCROLL ANIMATION
// ============================================================
function handleTimelineScroll() {
  const windowHeight = window.innerHeight
  document.querySelectorAll(".project-item").forEach((project, index) => {
    const rect = project.getBoundingClientRect()
    if (rect.top < windowHeight * 0.92 && !project.classList.contains("animate-in")) {
      setTimeout(() => project.classList.add("animate-in"), index * 55)
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

  const timelineRect    = timeline.getBoundingClientRect()
  const scrollPosition  = window.scrollY
  const allTiles        = document.querySelectorAll(".project-item")
  const lastTile        = allTiles[allTiles.length - 1]
  const lastTileAbsBottom = lastTile
    ? lastTile.getBoundingClientRect().bottom + scrollPosition
    : timelineRect.top + scrollPosition + timelineRect.height

  let startScroll, endScroll
  if (isMobile || isTablet) {
    startScroll = timelineRect.top + scrollPosition - windowHeight
    endScroll   = lastTileAbsBottom - windowHeight * 0.5
  } else {
    startScroll = timelineRect.top + scrollPosition - windowHeight * 0.9
    endScroll   = lastTileAbsBottom - windowHeight * 0.15
  }

  const range = endScroll - startScroll
  let raw = range > 0 ? (scrollPosition - startScroll) / range : (timelineRect.top < windowHeight * 0.5 ? 1 : 0)

  if ((isMobile || isTablet) && lastTile && lastTile.getBoundingClientRect().bottom < 0) raw = 1

  const progress = Math.max(0, Math.min(1, raw))
  timelinePath.style.strokeDashoffset = (pathLength * (1 - progress)).toString()

  if (progress >= 0.97) {
    timelinePath.setAttribute("marker-end", "url(#end-circle)")
    if (!isMobile && !isTablet) {
      timelinePath.style.display = "none"
      timelinePath.offsetHeight
      timelinePath.style.display = ""
    }
  } else {
    timelinePath.removeAttribute("marker-end")
  }

  // Show end dot when line fully reaches it
  const endDot = document.getElementById("timelineEndDot")
  if (endDot) {
    if (progress >= 0.97) {
      endDot.classList.add("visible")
    } else {
      endDot.classList.remove("visible")
    }
  }

  // Corner dot visibility
  updateCornerDotVisibility(progress, pathLength, timelinePath)

  // Traveling dot
  if (travelingDot) {
    if (!isMobile && !isTablet && progress > 0.01 && progress < 0.99) {
      travelingDot.style.display = "block"
      try {
        const pt    = timelinePath.getPointAtLength(pathLength * progress)
        const svgEl = document.getElementById("timelineSvg")
        const vb    = svgEl.viewBox.baseVal
        const sr    = svgEl.getBoundingClientRect()
        travelingDot.setAttribute("cx", pt.x)
        travelingDot.setAttribute("cy", pt.y)
        travelingDot.setAttribute("transform",
          `translate(${pt.x * (sr.width / vb.width - 1)}, ${pt.y * (sr.height / vb.height - 1)})`)
      } catch (_) { travelingDot.style.display = "none" }
    } else {
      travelingDot.style.display = "none"
    }
  }
}

function updateCornerDotVisibility(progress, pathLength, pathEl) {
  const rings = document.querySelectorAll(".corner-ring")
  const dots  = document.querySelectorAll(".corner-dot")
  const n = rings.length
  if (n === 0) return

  rings.forEach((ring, i) => {
    const threshold = (i + 1) / (n + 1)
    const visible   = progress >= threshold - 0.02
    ring.style.opacity = visible ? "1" : "0"
    dots[i].style.opacity = visible ? "1" : "0"
  })
}
