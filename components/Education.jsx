import { GraduationCap } from 'lucide-react'

const Education = () => {
  return (
    <section 
      id="education" 
      className="py-24 md:py-32 px-6"
      aria-labelledby="education-heading"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            id="education-heading"
            className="text-4xl md:text-5xl font-light text-charcoal mb-4"
          >
            Education
          </h2>
          <div className="w-16 h-px bg-slate-300 mx-auto"></div>
        </div>
        
        <div className="bg-white border border-slate-200 p-6 md:p-8 hover:border-slate-400 transition-colors duration-200">
          <div className="flex items-start gap-4">
            <GraduationCap className="w-6 h-6 text-slate-600 mt-1 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="text-xl font-medium text-charcoal mb-2">
                Bachelor's Degree of Computer Engineering
              </h3>
              <p className="text-slate-600 mb-2">
                Çanakkale Onsekiz Mart University
              </p>
              <p className="text-sm text-slate-500">
                2022 - Expected 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
