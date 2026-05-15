import HomeSection from './components/sections/HomeSection'
import EngineeringSection from './components/sections/EngineeringSection'
import ProjectsSection from './components/sections/ProjectsSection'
import ExperienceSection from './components/sections/ExperienceSection'
import SkillsSection from './components/sections/SkillsSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'

import FloatingNavbar from './components/layout/FloatingNavbar'
import Footer from './components/layout/Footer'
import SmoothScroll from './components/layout/SmoothScroll'

function App() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white overflow-x-hidden">
      {/* ── Background layer ── */}
      <div className="fixed inset-0 -z-50 pointer-events-none">
        {/* Base */}
        <div className="absolute inset-0 bg-[#030712]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Top violet glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-violet-600/[.15] blur-[140px]" />

        {/* Bottom indigo glow */}
        <div className="absolute bottom-[-300px] right-[-100px] w-[700px] h-[700px] rounded-full bg-indigo-500/[.10] blur-[140px]" />
      </div>

      <SmoothScroll />
      <FloatingNavbar />

      <div className="relative z-10">
        <HomeSection />
        <EngineeringSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}

export default App