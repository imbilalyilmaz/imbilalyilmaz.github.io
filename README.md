# Portfolio Website

A modern, minimalist single-page portfolio website built with Next.js and Tailwind CSS. Features a strictly monochromatic design using slate greys, charcoal, and white for a sophisticated, clean aesthetic.

## Features

- **Monochromatic Design**: Sophisticated palette of slate greys, charcoal, and white
- **Typography Focus**: Clean, readable typography with emphasis on whitespace
- **Responsive Layout**: Fully responsive design that works on all devices
- **Accessible**: Built with accessibility in mind, including proper ARIA labels and keyboard navigation
- **Smooth Interactions**: Subtle hover states and smooth scrolling
- **Modern Stack**: Next.js 14, React, Tailwind CSS, and Lucide React icons

## Sections

- **Hero**: Clean introduction with call-to-action
- **Skills**: Tech stack display with categorized skills
- **Education**: Academic background
- **Experience**: Professional experience and internships
- **Projects**: Grid layout showcasing portfolio projects
- **Achievements**: Awards and recognitions
- **Footer**: Minimalist footer with social links

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `.next` directory.

### Start Production Server

```bash
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
portfolio-site/
├── app/
│   ├── layout.jsx      # Root layout with metadata
│   ├── page.jsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Achievements.jsx
│   └── Footer.jsx
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Customization

### Colors

The color palette is defined in `tailwind.config.js`. The monochromatic theme uses:
- Slate greys (50-900)
- Charcoal (#1a1a1a)
- White

### Content

Update the content in each component:
- `components/Hero.jsx` - Hero section text
- `components/Skills.jsx` - Skills and categories
- `components/Education.jsx` - Education information
- `components/Experience.jsx` - Work experience
- `components/Projects.jsx` - Project details
- `components/Achievements.jsx` - Achievements and awards
- `components/Footer.jsx` - Footer links and information

## License

MIT
