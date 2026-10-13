import portfolioData from './data/portfolio.json'
import type { PortfolioData } from './types/portfolio'
import { SignatureVisual } from './components/SignatureVisual'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  const portfolio = portfolioData as PortfolioData

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Subtle signature ambient visuals and interactive light */}
      <SignatureVisual />

      {/* Glassy, sticky navigation */}
      <Navbar personalInfo={portfolio.personalInfo} />

      {/* Main page content sections */}
      <main className="relative z-10 flex flex-col">
        <Hero hero={portfolio.hero} personalInfo={portfolio.personalInfo} />
        <About personalInfo={portfolio.personalInfo} />
        <Skills skills={portfolio.skills} />
        <Experience experience={portfolio.experience} />
        <Projects projects={portfolio.projects} />
        <Achievements achievements={portfolio.achievements} />
        <Services services={portfolio.services} />
        <Contact contact={portfolio.contact} personalInfo={portfolio.personalInfo} />
      </main>

      {/* Clean minimal footer */}
      <Footer personalInfo={portfolio.personalInfo} />
    </div>
  )
}

export default App
