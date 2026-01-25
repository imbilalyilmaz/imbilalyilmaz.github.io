import React from 'react'
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  GitBranch, 
  Users,
  Languages
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C#', 'C++']
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL']
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'CNN', 'YOLO']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['Docker', 'Kubernetes', 'Cloud Computing', 'Microservices']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Problem Solving', 'Creativity', 'Work Ethic', 'Teamwork', 'Responsibility', 'Time Management']
    },
    {
      title: 'Languages',
      icon: Languages,
      skills: ['English (B2)', 'Turkish (Native)']
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
            Skills
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
