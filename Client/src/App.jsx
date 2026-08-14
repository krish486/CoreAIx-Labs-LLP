import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Navbar from './Features/Dashboard/UI/Components/Navbar'
import LandingPage from './Features/Dashboard/UI/Components/HomeScreen/LandingPage'
import CollabPage from './Features/Dashboard/UI/Components/HomeScreen/CollabPage'
import Difference from './Features/Dashboard/UI/Components/HomeScreen/Difference'
import ContactForm from './Features/Dashboard/UI/Components/HomeScreen/ContactForm'
import FloatingContact from './Features/Dashboard/UI/Components/HomeScreen/FloatingContact'
import BackgroundDecor from './Features/Dashboard/UI/Components/BackgroundDecor'
import OrbitGallery from './Features/Dashboard/UI/Components/HomeScreen/OrbitGallery'

const CinematicReveal = ({ children }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 10%'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  })

  const scale = useTransform(
    smoothProgress,
    [0, 0.35, 0.65, 1],
    [0.9, 1, 1, 0.93]
  )

  const opacity = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  )

  const y = useTransform(
    smoothProgress,
    [0, 0.35, 1],
    [80, 0, -40]
  )

  const rotateX = useTransform(
    smoothProgress,
    [0, 0.35, 1],
    [5, 0, -3]
  )

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full flex items-center justify-center py-12 perspective-[1000px]"
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
          rotateX,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  )
}

const App = () => {
  return (
    <div
      className="relative min-h-screen bg-transparent text-(--ink) transition-colors duration-300 overflow-x-hidden selection:bg-indigo-500 selection:text-white"
      style={{
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}
    >
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <BackgroundDecor />

      <Navbar />

      <main className="relative flex flex-col gap-16 px-4 md:px-12">

        {/* OrbitGallery placed directly over/on top of LandingPage */}
        <CinematicReveal>
          <div className="relative w-full h-full flex flex-col justify-center">
            <LandingPage />
            <div className="mt-8">
              <OrbitGallery />
            </div>
          </div>
        </CinematicReveal>

        <CinematicReveal>
          <CollabPage />
        </CinematicReveal>

        <CinematicReveal>
          <Difference />
        </CinematicReveal>

        <CinematicReveal>
          <ContactForm />
        </CinematicReveal>

      </main>

      <FloatingContact />
    </div>
  )
}

export default App