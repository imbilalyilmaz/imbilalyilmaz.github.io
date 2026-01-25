'use client'

import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { en } from '@/translations/en'
import { tr } from '@/translations/tr'

const Hero = () => {
  const { language } = useLanguage()
  const t = language === 'en' ? en : tr

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-20 md:py-32"
      aria-label="Hero section"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-light text-charcoal tracking-tight text-balance">
          Bilal Yılmaz
        </h1>
        
        <div className="w-24 h-px bg-slate-300 mx-auto my-12"></div>
        
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
          {t.hero.description}
        </p>
        
        <div className="pt-8">
          <button
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center gap-2 px-8 py-3 border border-slate-300 text-slate-700 hover:border-slate-500 hover:text-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="View projects"
          >
            {t.hero.viewWork}
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" aria-hidden="true" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Hero
