import React from 'react'
import { Briefcase, Calendar } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Trainer - Mentor Scholar',
      company: 'T3 Foundation\'s Deneyap Workshop',
      location: 'Çanakkale, TR',
      period: 'November 2024 - Ongoing',
      description: 'Providing training and mentorship to selected students as part of the Deneyap Workshop program.'
    },
    {
      title: 'Project Ecosystem Member',
      company: 'Çanakkale Onsekiz Mart University - BedLab',
      location: 'Çanakkale, TR',
      period: 'October 2024 - Ongoing',
      description: 'Participating in a multidisciplinary project ecosystem focused on deep learning and medical image processing. Collaborating with professionals from computer engineering, electrical and electronic engineering, and medicine. Researching tumor segmentation techniques using AI architectures like CNN-based and YOLO-based models.'
    },
    {
      title: 'AI Intern',
      company: 'Istanbul University TETLab',
      location: 'Istanbul, TR',
      period: 'August 2024 - September 2024',
      description: 'Improved capabilities in artificial intelligence techniques. Worked on image processing models for medical applications.'
    }
  ]

  return (
    <section 
      id="experience" 
      className="py-24 md:py-32 px-6 bg-slate-50"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="experience-heading"
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
          >
            Experience
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="bg-white border border-slate-200 p-6 md:p-8 hover:border-slate-400 transition-colors duration-200 focus-within:ring-2 focus-within:ring-slate-400 focus-within:ring-offset-2"
              tabIndex={0}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-charcoal mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-600 mb-2">
                    <Briefcase className="w-4 h-4" aria-hidden="true" />
                    <span className="text-sm">{exp.company}</span>
                  </div>
                  <p className="text-sm text-slate-500">{exp.location}</p>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm whitespace-nowrap">{exp.period}</span>
                </div>
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
