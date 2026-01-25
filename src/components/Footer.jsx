import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:bilalyiilmazz@gmail.com',
      ariaLabel: 'Send email to Bilal Yılmaz'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/imbilalyilmaz',
      ariaLabel: 'Visit LinkedIn profile'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://www.github.com/imbilalyilmaz',
      ariaLabel: 'Visit GitHub profile'
    }
  ]

  return (
    <footer 
      className="bg-charcoal text-slate-300 py-12 px-6"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-400">
            <p>&copy; {currentYear} All rights reserved.</p>
          </div>
          
          <nav aria-label="Social links">
            <ul className="flex gap-6">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-charcoal rounded"
                      aria-label={link.ariaLabel}
                    >
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            Built with React and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
