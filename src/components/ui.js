// ============================================================
// PARALLAX
// ============================================================
function updateParallax() {
  if (ticking) return

  requestAnimationFrame(() => {
    const scrolled = window.pageYOffset
    const parallaxBg = document.getElementById("parallaxBg")
    if (parallaxBg) {
      parallaxBg.style.transform = `translate3d(0, ${-(scrolled * 0.5)}px, 0)`
    }
    ticking = false
  })

  ticking = true
}

// ============================================================
// HERO STAGGER — triggers on first intersection
// ============================================================
function setupHeroStagger() {
  const heroContent = document.getElementById("heroContent")
  if (!heroContent) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heroContent.classList.add("hero-visible")
        }
      })
    },
    { threshold: 0.1 }
  )

  observer.observe(heroContent)
}

// ============================================================
// MAGNETIC MORPH PROFILE
// ============================================================
function setupMagneticMorph() {
  const container = document.getElementById("profileMorph")
  const inner = document.getElementById("profileMorphInner")
  if (!container || !inner) return

  const STRENGTH = 10   // max pixel shift
  const ROT     = 4     // max rotation degrees

  container.addEventListener("mousemove", (e) => {
    const rect = container.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)   // -1 to 1
    const dy = (e.clientY - cy) / (rect.height / 2)  // -1 to 1

    const tx = dx * STRENGTH
    const ty = dy * STRENGTH
    const rx = -dy * ROT
    const ry =  dx * ROT

    inner.style.transform = `translate(${tx}px, ${ty}px) rotateX(${rx}deg) rotateY(${ry}deg)`
  })

  container.addEventListener("mouseleave", () => {
    // Spring back smoothly
    inner.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    inner.style.transform = "translate(0px, 0px) rotateX(0deg) rotateY(0deg)"
    setTimeout(() => {
      inner.style.transition = "transform 0.12s ease-out"
    }, 500)
  })

  container.addEventListener("mouseenter", () => {
    inner.style.transition = "transform 0.12s ease-out"
  })
}

// ============================================================
// SCROLL REVEAL — generic .reveal-on-scroll elements
// ============================================================
function setupScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal-on-scroll")
  if (!revealEls.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    { threshold: 0.12 }
  )

  revealEls.forEach((el) => observer.observe(el))
}

// ============================================================
// PARTICLE BURST — contact buttons
// ============================================================
function setupParticleButtons() {
  const btns = document.querySelectorAll(".particle-btn")
  btns.forEach((btn) => {
    btn.addEventListener("mouseenter", (e) => spawnParticles(e, btn))
  })
}

function spawnParticles(e, btn) {
  const rect = btn.getBoundingClientRect()
  const cx = rect.left + rect.width / 2
  const cy = rect.top + rect.height / 2
  const count = 8

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * 2 * Math.PI
    const dist  = 36 + Math.random() * 24
    const px = Math.cos(angle) * dist
    const py = Math.sin(angle) * dist

    const dot = document.createElement("div")
    dot.className = "particle-dot"
    dot.style.left = cx - 3.5 + "px"
    dot.style.top  = cy - 3.5 + "px"
    dot.style.setProperty("--px", px + "px")
    dot.style.setProperty("--py", py + "px")
    // Slight random delay per particle
    dot.style.animationDelay = Math.random() * 80 + "ms"

    document.body.appendChild(dot)
    setTimeout(() => dot.remove(), 750)
  }
}
