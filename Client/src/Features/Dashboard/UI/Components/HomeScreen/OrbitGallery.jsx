import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const DEFAULT_IMAGES = [
    { id: 1, label: 'PIC1' },
    { id: 2, label: 'PIC2' },
    { id: 3, label: 'PIC3' },
    { id: 4, label: 'PIC4' },
    { id: 5, label: 'PIC5' },
    { id: 6, label: 'PIC6' },
]

export default function OrbitGallery({
    centerImage = 'CENTER',
    images = DEFAULT_IMAGES,
}) {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        setPrefersReducedMotion(mediaQuery.matches)

        const handler = (e) => setPrefersReducedMotion(e.matches)
        mediaQuery.addEventListener('change', handler)
        return () => mediaQuery.removeEventListener('change', handler)
    }, [])

    // Mouse position tracking for subtle 3D parallax tilt
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 })
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 })

    const rotateX = useTransform(smoothY, [-0.5, 0.5], ['8deg', '-8deg'])
    const rotateY = useTransform(smoothX, [-0.5, 0.5], ['-8deg', '8deg'])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const x = (e.clientX - rect.left) / width - 0.5
        const y = (e.clientY - rect.top) / height - 0.5
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    return (
        <div
            className="relative w-full h-137.5 md:h-162.5 flex items-center justify-center overflow-hidden select-none"
            style={{ perspective: '1400px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* 3D Interactive Perspective Wrapper */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="relative w-full h-full flex items-center justify-center will-change-transform"
            >
                {/* ==================== CENTER FOCUS ITEM ==================== */}
                <div
                    style={{ transform: 'translateZ(60px)' }}
                    className="absolute z-30 flex flex-col items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-3xl bg-zinc-900/90 dark:bg-zinc-900/90 backdrop-blur-xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] p-3 text-white text-center will-change-transform"
                >
                    {typeof centerImage === 'string' && centerImage.startsWith('http') ? (
                        <img
                            src={centerImage}
                            alt="Center focal item"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    ) : (
                        <div className="flex flex-col items-center justify-center w-full h-full font-semibold tracking-wider text-sm md:text-base bg-linear-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl border border-white/10">
                            <span className="text-indigo-400 font-bold mb-1">FOCAL</span>
                            <span className="text-white/90">{centerImage}</span>
                        </div>
                    )}
                </div>

                {/* ==================== TILTED 3D ORBIT ==================== */}

                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                        perspective: '10000px',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    {/* Static diagonal tilt */}
                    <div
                        className="relative w-full h-full flex items-center justify-center"
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: 'rotateX(-40deg) rotateZ(0deg)',
                        }}
                    >

                        {/* Rotating orbit */}
                        <motion.div
                            animate={
                                prefersReducedMotion
                                    ? {}
                                    : {
                                        rotateY: [0, 360],
                                    }
                            }
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                            className="absolute inset-0 flex items-center justify-center will-change-transform"
                        >
                            {images.map((item, index) => {
                                const angleDeg = index * (360 / images.length)
                                const angleRad = (angleDeg * Math.PI) / 180

                                const radiusX = 300
                                const radiusZ = 300

                                const x = Math.sin(angleRad) * radiusX
                                const z = Math.cos(angleRad) * radiusZ

                                return (
                                    <div
                                        key={item.id || index}
                                        aria-label={`Gallery image ${index + 1}`}
                                        className="
              absolute
              w-24 h-24
              md:w-32 md:h-32
              flex items-center justify-center
              will-change-transform
            "
                                        style={{
                                            transform: `
                translate3d(
                  ${x}px,
                  0px,
                  ${z}px
                )
              `,
                                            transformStyle: 'preserve-3d',
                                            marginLeft: '-48px',
                                            marginTop: '-48px',
                                        }}
                                    >
                                        <div
                                            className="
                w-full h-full
                rounded-2xl
                bg-zinc-900/80
                backdrop-blur-md
                border border-white/10
                shadow-[0_15px_40px_rgba(0,0,0,0.5)]
                p-2
                text-white
                flex items-center justify-center
                text-xs md:text-sm
                font-medium
              "
                                            style={{
                                                transformStyle: 'preserve-3d',
                                            }}
                                        >
                                            <div
                                                className="
                  w-full h-full
                  flex items-center justify-center
                  bg-white/5
                  rounded-xl
                  border border-white/5
                  text-white/80
                "
                                            >
                                                {item.label || item}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </div>
    )
}