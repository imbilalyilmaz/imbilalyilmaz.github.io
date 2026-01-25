import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Kubernetes Staticsite Operator',
      description: 'A custom Kubernetes Operator developed with Go and Kubebuilder. It automates the lifecycle management of static websites by watching for custom StaticSite resources and dynamically provisioning the necessary Deployment, Service, and Ingress objects.',
      tech: ['Go', 'Kubernetes', 'Kubebuilder', 'DevOps'],
      github: 'https://github.com/imbilalyilmaz/k8s-staticsite-operator',
      live: null
    },
    {
      title: 'Thesis Compliance Checker',
      description: 'Developing an NLP-based system to automatically verify thesis compliance with academic writing rules. The project checks citations, bibliography consistency, and adherence to formatting guidelines, ensuring overall compliance with thesis regulations.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Natural Language Processing'],
      github: null,
      live: null,
      status: 'Ongoing'
    },
    {
      title: 'Mouse Dynamics Based Authentication',
      description: 'AI-based user authentication system that identifies users based on their mouse movement behavior. Responsible for developing the AI model, with a focus on feature extraction, feature selection, and model training using the collected behavioral data. Supported by TÜBİTAK 2209-A.',
      tech: ['Python', 'Machine Learning', 'AI', 'Feature Engineering'],
      github: null,
      live: null
    },
    {
      title: 'Atlas E-Commerce Modernization',
      description: 'As a finalist in Türk Telekom\'s cloud computing camp, actively participated in modernizing the Atlas E-Commerce Project. Designed a scalable microservices architecture integrating Kubernetes, Kafka, and database technologies with comprehensive DevOps processes.',
      tech: ['Kubernetes', 'Kafka', 'Microservices', 'DevOps', 'Linux'],
      github: null,
      live: null
    },
    {
      title: 'AI-Powered Leave Approval System',
      description: 'Fully integrated AI-powered leave approval system developed for a hackathon. Achieved 1st place among 10 teams. Features intelligent approval workflows and automated decision-making capabilities.',
      tech: ['Java', 'Python', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
      github: 'https://github.com/imbilalyilmaz/datasist-hackaton',
      live: null
    },
    {
      title: 'Medical Image Processing - Tumor Segmentation',
      description: 'Research project focused on tumor segmentation techniques using AI architectures like CNN-based and YOLO-based models. Collaborating in a multidisciplinary project ecosystem at BedLab, working with professionals from computer engineering, electrical engineering, and medicine.',
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
            Projects
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
                      Code
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
                      Live
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
