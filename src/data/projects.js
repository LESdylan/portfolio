// Project data — edit this array to add/remove projects
const projects = [
  {
    id: 'hero',
    title: 'All Projects',
    description: 'Explore the full collection of my work',
    technologies: ['React', 'Node', 'Python', 'Cloud'],
    image: 'https://img.icons8.com/fluency/96/source-code.png',
    link: '/projects',   // internal route or external URL
    isHero: true
  },
  {
    id: 'project-1',
    title: 'VG API',
    description: 'REST API for video game data with caching and rate limiting.',
    technologies: ['Node.js', 'Express', 'Redis'],
    image: 'https://img.icons8.com/color/96/api.png',
    link: 'https://github.com/dylan/vg-api'
  },
  {
    id: 'project-2',
    title: 'Portfolio',
    description: 'This interactive portfolio built with React & Framer Motion.',
    technologies: ['React', 'Tailwind', 'Vite'],
    image: 'https://img.icons8.com/color/96/portfolio.png',
    link: 'https://github.com/dylan/portfolio'
  },
  {
    id: 'project-3',
    title: 'Dashboard',
    description: 'Real-time analytics dashboard with WebSocket updates.',
    technologies: ['React', 'D3.js', 'Socket.io'],
    image: 'https://img.icons8.com/color/96/combo-chart.png',
    link: 'https://github.com/dylan/dashboard'
  },
  {
    id: 'project-4',
    title: 'CLI Tool',
    description: 'Developer CLI for scaffolding and automation.',
    technologies: ['Node.js', 'Commander', 'Chalk'],
    image: 'https://img.icons8.com/color/96/console.png',
    link: 'https://github.com/dylan/cli-tool'
  },
  {
    id: 'project-5',
    title: 'Mobile App',
    description: 'Cross-platform app for habit tracking and goals.',
    technologies: ['React Native', 'Expo', 'Firebase'],
    image: 'https://img.icons8.com/color/96/iphone.png',
    link: 'https://github.com/dylan/mobile-app'
  }
]

export default projects
