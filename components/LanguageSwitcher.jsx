'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Languages } from 'lucide-react'

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage()

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'tr' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:border-slate-500 hover:text-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 shadow-sm"
      aria-label={`Switch to ${language === 'en' ? 'Turkish' : 'English'}`}
    >
      <Languages className="w-4 h-4" aria-hidden="true" />
      <span className="text-sm font-medium">{language === 'en' ? 'TR' : 'EN'}</span>
    </button>
  )
}

export default LanguageSwitcher
