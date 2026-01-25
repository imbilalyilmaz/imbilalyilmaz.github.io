'use client'

import { Award, Trophy, Linkedin, Github } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { en } from '@/translations/en'
import { tr } from '@/translations/tr'

const Achievements = () => {
  const { language } = useLanguage()
  const t = language === 'en' ? en : tr

  const achievements = [
    {
      title: t.achievements.achievements[0].title,
      description: t.achievements.achievements[0].description,
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7390295125916127232/",
      github: null
    },
    {
      title: t.achievements.achievements[1].title,
      description: t.achievements.achievements[1].description,
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7375793562157826048/",
      github: null
    },
    {
      title: t.achievements.achievements[2].title,
      description: t.achievements.achievements[2].description,
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7327564632200470528/",
      github: "https://github.com/imbilalyilmaz/datasist-hackaton"
    },
    {
      title: t.achievements.achievements[3].title,
      description: t.achievements.achievements[3].description,
      linkedin: null,
      github: null
    }
  ]

  return (
    <section 
      id="achievements" 
      className="py-24 md:py-32 px-6 bg-slate-50"
      aria-labelledby="achievements-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="achievements-heading"
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
          >
            {t.achievements.title}
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const IconComponent = index < 2 ? Trophy : Award
            return (
              <article
                key={index}
                className="bg-white border border-slate-200 p-6 md:p-8 hover:border-slate-400 transition-colors duration-200 focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2"
                tabIndex={0}
              >
                <div className="flex items-start gap-4">
                  <IconComponent className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" aria-hidden="true" />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-charcoal mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {achievement.description}
                    </p>
                    {(achievement.linkedin || achievement.github) && (
                      <div className="flex gap-3 pt-3 border-t border-slate-200">
                        {achievement.linkedin && (
                          <a
                            href={achievement.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                            aria-label={`View ${achievement.title} on LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4" aria-hidden="true" />
                            LinkedIn
                          </a>
                        )}
                        {achievement.github && (
                          <a
                            href={achievement.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                            aria-label={`View ${achievement.title} on GitHub`}
                          >
                            <Github className="w-4 h-4" aria-hidden="true" />
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
