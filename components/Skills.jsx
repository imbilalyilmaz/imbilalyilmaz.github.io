'use client'

import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Users,
  Languages
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { en } from '@/translations/en'
import { tr } from '@/translations/tr'

const Skills = () => {
  const { language } = useLanguage()
  const t = language === 'en' ? en : tr

  const skillCategories = [
    {
      title: t.skills.categories.programming,
      icon: Code,
      skills: ['Python', 'Go', 'Java', 'C#', 'C++']
    },
    {
      title: t.skills.categories.databases,
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL']
    },
    {
      title: t.skills.categories.ai,
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'CNN', 'YOLO']
    },
    {
      title: t.skills.categories.cloud,
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'Cloud Computing', 'Microservices']
    },
    {
      title: t.skills.categories.soft,
      icon: Users,
      skills: language === 'en' 
        ? ['Problem Solving', 'Creativity', 'Work Ethic', 'Teamwork', 'Responsibility', 'Time Management']
        : ['Problem Çözme', 'Yaratıcılık', 'Çalışma Etiği', 'Takım Çalışması', 'Sorumluluk', 'Zaman Yönetimi']
    },
    {
      title: t.skills.categories.languages,
      icon: Languages,
      skills: language === 'en' 
        ? ['English (B2)', 'Turkish (Native)']
        : ['İngilizce (B2)', 'Türkçe (Ana Dil)']
    }
  ]

  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 px-6 bg-slate-50"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="skills-heading"
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
          >
            {t.skills.title}
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 p-6 hover:border-slate-400 transition-colors duration-200 focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2"
                tabIndex={0}
                role="article"
                aria-label={`${category.title} skills`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent 
                    className="w-5 h-5 text-slate-600" 
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-medium text-charcoal">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2" role="list">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-sm text-slate-600"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
