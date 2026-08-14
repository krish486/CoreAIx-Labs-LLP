import Navbar from './Features/Dashboard/UI/Components/Navbar'
import LandingPage from './Features/Dashboard/UI/Components/HomeScreen/LandingPage'
import CollabPage from './Features/Dashboard/UI/Components/HomeScreen/CollabPage'
import Difference from './Features/Dashboard/UI/Components/HomeScreen/Difference'
import ContactForm from './Features/Dashboard/UI/Components/HomeScreen/ContactForm'
import FloatingContact from './Features/Dashboard/UI/Components/HomeScreen/FloatingContact'
import BackgroundDecor from './Features/Dashboard/UI/Components/BackgroundDecor'

const App = () => {
  return (
    <div className='relative min-h-screen bg-transparent text-(--ink) transition-colors duration-300'>
      <BackgroundDecor />
      <Navbar />
      <LandingPage />
      <CollabPage />
      <Difference />
      <ContactForm />
      <FloatingContact />
    </div>
  )
}

export default App
