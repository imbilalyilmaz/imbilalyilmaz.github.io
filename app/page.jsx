import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Footer from '@/components/Footer'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function Home() {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  )
}
