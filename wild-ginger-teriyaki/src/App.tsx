import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProofMarquee from './components/SocialProofMarquee'
import MenuPreview from './components/MenuPreview'
import Features from './components/Features'
import TestimonialMasonry from './components/TestimonialMasonry'
import LocationStatus from './components/LocationStatus'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SocialProofMarquee />
        <MenuPreview />
        <Features />
        <TestimonialMasonry />
        <LocationStatus />
      </main>
      <Footer />
    </div>
  )
}

export default App
