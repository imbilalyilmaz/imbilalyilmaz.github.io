import React from 'react'
import { Award, Trophy } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      title: 'Türk Telekom Cloud Computing Camp Finalist',
      description: 'Actively participated in the modernization efforts of the Atlas E-Commerce Project. Designed a scalable microservices architecture integrating Kubernetes, Kafka, and database technologies. Successfully implemented comprehensive technical scenarios related to cloud computing infrastructures and DevOps processes.',
      icon: Trophy
    },
    {
      title: 'Huawei Cloud & BTK Coding Marathon Finalist',
      description: 'Participated as finalists, developing a project in the field of climate action and successfully deploying the solution on Huawei Cloud (2025).',
      icon: Trophy
    },
    {
      title: '1st Place - AI Hackathon',
      description: 'Achieved 1st place among 10 teams in a hackathon organized by Datassist and filika.co. Developed a fully integrated AI-powered leave approval system using Java, Python, Spring Boot, React, TypeScript, and PostgreSQL.',
      icon: Award
    },
    {
      title: '1st Place - Datathon Competition',
      description: 'Secured 1st place in the Datathon competition held at the end of a bootcamp organized by Techcareer, with a machine learning-based solution.',
      icon: Award
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
            Achievements
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
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
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
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
