import { useState, useCallback } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import ProjectsGrid from './components/ProjectsGrid'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import PageLoader from './components/PageLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading && <PageLoader onComplete={handleLoadComplete} />}
      <div className={`min-h-screen bg-gray-900 relative overflow-x-hidden ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
        <ScrollProgress />
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <ProjectsGrid />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default App
