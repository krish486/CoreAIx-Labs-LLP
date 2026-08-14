import { useEffect, useRef, useState } from 'react'
import { useAnimationFrame } from 'framer-motion'

const DEFAULT_IMAGES = [
  { id: 1, label: 'PIC1' },
  { id: 2, label: 'PIC2' },
  { id: 3, label: 'PIC3' },
  { id: 4, label: 'PIC4' },
  { id: 5, label: 'PIC5' },
  { id: 6, label: 'PIC6' },
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

export default function Infinite3DPhotoStrip({
  images = DEFAULT_IMAGES,
  speed = 52,
  cardWidth,
  cardHeight,
  gap,
  depth,
}) {
  const containerRef = useRef(null)
  const cardRefs = useRef([])
  const offsetRef = useRef(0)
  const lastTimeRef = useRef(null)
  const [viewportWidth, setViewportWidth] = useState(1200)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    updateMotionPreference()
    mediaQuery.addEventListener('change', updateMotionPreference)

    return () => mediaQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new ResizeObserver(([entry]) => {
      setViewportWidth(entry.contentRect.width)
    })

    observer.observe(node)
    setViewportWidth(node.clientWidth)

    return () => observer.disconnect()
  }, [])

  const isMobile = viewportWidth < 640
  const isTablet = viewportWidth < 1024

  const width = cardWidth ?? (isMobile ? 132 : isTablet ? 170 : 198)
  const height = cardHeight ?? (isMobile ? 112 : isTablet ? 132 : 154)
  const itemGap = gap ?? (isMobile ? 12 : isTablet ? 18 : 26)
  const maxDepth = depth ?? (isMobile ? 45 : 90)
  const verticalCurve = isMobile ? 12 : 22

  const safeImages = images.length ? images : DEFAULT_IMAGES
  const renderImages = [...safeImages, ...safeImages]
  const step = width + itemGap
  const setWidth = renderImages.length * step

  useAnimationFrame((time) => {
    if (safeImages.length === 0) return

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time
    }

    const delta = Math.min(time - lastTimeRef.current, 34)
    lastTimeRef.current = time

    if (!prefersReducedMotion) {
      offsetRef.current = (offsetRef.current + (speed * delta) / 1000) % setWidth
    }

    const centerDistance = Math.max(viewportWidth / 2, 1)
    const halfSet = setWidth / 2

    cardRefs.current.forEach((card, index) => {
      if (!card) return

      const rawX = index * step - offsetRef.current - halfSet + step / 2
      const x = ((rawX + halfSet) % setWidth + setWidth) % setWidth - halfSet
      const normalizedDistance = clamp(Math.abs(x) / centerDistance, 0, 1)
      const centerFactor = 1 - normalizedDistance ** 2

      const z = centerFactor * maxDepth
      const y = -centerFactor * verticalCurve
      const scale = 0.86 + centerFactor * 0.16
      const rotateY = clamp((x / centerDistance) * 8, -8, 8)
      const opacity = 0.72 + centerFactor * 0.28

      card.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale}) rotateY(${rotateY}deg)`
      card.style.opacity = `${opacity}`
      card.style.zIndex = `${Math.round(100 + z)}`
    })
  })

  return (
    <div
      ref={containerRef}
      className="relative isolate h-32 w-full overflow-hidden sm:h-36 md:h-40"
      style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 50%',
        contain: 'layout',
      }}
      aria-label="Continuous 3D photo strip"
    >
      <div
        className="absolute left-1/2 top-1/2 h-full w-0"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {renderImages.map((item, index) => {
          const key = `${item.id ?? index}-${index}`
          const src = typeof item === 'string' ? item : item.src
          const label = typeof item === 'string' ? item : item.label

          return (
            <div
              key={key}
              ref={(node) => {
                cardRefs.current[index] = node
              }}
              aria-label={`Gallery image ${index + 1}`}
              className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/15 bg-zinc-900/90 p-1.5 text-white shadow-[0_18px_38px_rgba(0,0,0,0.28)] will-change-transform"
              style={{
                width,
                height,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
                opacity: 0.72,
              }}
            >
              {src ? (
                <img
                  src={src}
                  alt={label || `Gallery image ${index + 1}`}
                  draggable="false"
                  className="h-full w-full rounded-[0.85rem] object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-[0.85rem] border border-white/10 bg-white/[0.06] font-['Plus_Jakarta_Sans'] text-xs font-semibold tracking-[0.16em] text-white/75 sm:text-sm">
                  {label}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
