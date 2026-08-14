import { motion } from 'framer-motion'
import Navbar from './Features/Dashboard/UI/Components/Navbar'
import LandingPage from './Features/Dashboard/UI/Components/HomeScreen/LandingPage'
import CollabPage from './Features/Dashboard/UI/Components/HomeScreen/CollabPage'
import Difference from './Features/Dashboard/UI/Components/HomeScreen/Difference'
import ContactForm from './Features/Dashboard/UI/Components/HomeScreen/ContactForm'
import FloatingContact from './Features/Dashboard/UI/Components/HomeScreen/FloatingContact'
import BackgroundDecor from './Features/Dashboard/UI/Components/BackgroundDecor'
import Infinite3DPhotoStrip from './Features/Dashboard/UI/Components/HomeScreen/Infinite3DPhotoStrip'

const CinematicReveal = ({ children, className = '' }) => {
  return (
    <section className={`relative w-full ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.99 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: 0.65,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  )
}

const App = () => {
  return (
    <div
      className="
        relative min-h-screen overflow-x-hidden
        bg-transparent text-(--ink)
        transition-colors duration-300
        selection:bg-indigo-500 selection:text-white
      "
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

      <main className="relative">

        {/* ================= HERO ================= */}

        <CinematicReveal>
          <LandingPage />
        </CinematicReveal>


        {/* ================= 3D PHOTO STRIP ================= */}

        {/* <section
          className="
            relative
            w-full
            h-[300px]
            md:h-[360px]
            lg:h-[400px]
            flex
            items-center
            justify-center
            overflow-hidden
          "
        >
          <Infinite3DPhotoStrip />
        </section> */}


        {/* ================= COLLAB ================= */}

        <CinematicReveal>
          <CollabPage />
        </CinematicReveal>


        {/* ================= DIFFERENCE ================= */}

        <CinematicReveal>
          <Difference />
        </CinematicReveal>


        {/* ================= CONTACT ================= */}

        <CinematicReveal>
          <ContactForm />
        </CinematicReveal>

      </main>

      <FloatingContact />
    </div>
  )
}

export default App