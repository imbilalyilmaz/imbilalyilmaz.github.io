'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { en } from '@/translations/en'
import { tr } from '@/translations/tr'

const Projects = () => {
  const { language } = useLanguage()
  const t = language === 'en' ? en : tr

  const projects = [
    {
      title: t.projects.projects[0].title,
      description: t.projects.projects[0].description,
      tech: ['Go', 'Kubernetes', 'Kubebuilder', 'DevOps'],
      github: 'https://github.com/imbilalyilmaz/k8s-staticsite-operator',
      live: null
    },
    {
      title: t.projects.projects[1].title,
      description: t.projects.projects[1].description,
      tech: ['Python', 'NLP', 'Machine Learning', 'Natural Language Processing'],
      github: null,
      live: null,
      status: t.projects.projects[1].status
    },
    {
      title: t.projects.projects[2].title,
      description: t.projects.projects[2].description,
      tech: ['Python', 'Machine Learning', 'AI', 'Feature Engineering'],
      github: null,
      live: null
    },
    {
      title: t.projects.projects[3].title,
      description: t.projects.projects[3].description,
      tech: ['Kubernetes', 'Kafka', 'Microservices', 'DevOps', 'Linux'],
      github: null,
      live: null
    },
    {
      title: t.projects.projects[4].title,
      description: t.projects.projects[4].description,
      tech: ['Java', 'Python', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
      github: 'https://github.com/imbilalyilmaz/datasist-hackaton',
      live: null
    },
    {
      title: t.projects.projects[5].title,
      description: t.projects.projects[5].description,
      tech: ['Python', 'Deep Learning', 'CNN', 'YOLO', 'Medical Imaging', 'OpenCV'],
      github: null,
      live: null
    }
  ]

  return (
    <section 
      id="projects" 
      className="py-24 md:py-32 px-6"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="projects-heading"
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
          >
            {t.projects.title}
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white border border-slate-200 p-6 flex flex-col hover:border-slate-400 transition-colors duration-200 focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2"
              tabIndex={0}
            >
              <h3 className="text-xl font-medium text-charcoal mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs text-slate-600 bg-slate-100 border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 pt-4 border-t border-slate-200 items-center justify-between">
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      {t.projects.code}
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                      aria-label={`View live ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      {t.projects.live}
                    </a>
                  )}
                </div>
                {project.status && (
                  <span className="text-xs text-slate-500 italic">
                    {project.status}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
