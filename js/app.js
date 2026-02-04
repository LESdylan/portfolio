// ===== Project Data =====
const projects = [
  {
    id: 'hero',
    title: 'All Projects',
    description: 'Explore the full collection of my work',
    technologies: ['React', 'Node', 'Python', 'Cloud'],
    image: 'https://img.icons8.com/fluency/96/source-code.png',
    link: '#projects',
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
    description: 'This interactive portfolio with pure CSS & JS animations.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://img.icons8.com/color/96/portfolio.png',
    link: 'https://github.com/dylan/portfolio'
  },
  {
    id: 'project-3',
    title: 'Dashboard',
    description: 'Real-time analytics dashboard with live updates.',
    technologies: ['React', 'D3.js', 'WebSocket'],
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
];

// ===== Render Grid =====
function renderGrid() {
  const grid = document.getElementById('grid');

  projects.forEach((project, index) => {
    const tile = document.createElement('a');
    tile.href = project.link;
    tile.target = project.link.startsWith('#') ? '_self' : '_blank';
    tile.rel = 'noopener noreferrer';
    tile.className = `tile${project.isHero ? ' hero' : ''}`;
    tile.setAttribute('aria-label', `${project.title}: ${project.description}`);
    tile.style.animationDelay = `${index * 0.08}s`;

    tile.innerHTML = `
      <img class="tile-icon" src="${project.image}" alt="" />
      <h3 class="tile-title">${project.title}</h3>
      <div class="tile-details">
        <p class="tile-desc">${project.description}</p>
        <div class="tile-tags">
          ${project.technologies.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    grid.appendChild(tile);
  });
}

// ===== Hover Interactivity (Domino Effect) =====
function setupHoverEffects() {
  const tiles = document.querySelectorAll('.tile');

  tiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
      tiles.forEach(t => {
        if (t !== tile) t.classList.add('dimmed');
      });
      tile.classList.add('active');
    });

    tile.addEventListener('mouseleave', () => {
      tiles.forEach(t => t.classList.remove('dimmed', 'active'));
    });

    // Keyboard accessibility
    tile.addEventListener('focus', () => {
      tiles.forEach(t => {
        if (t !== tile) t.classList.add('dimmed');
      });
      tile.classList.add('active');
    });

    tile.addEventListener('blur', () => {
      tiles.forEach(t => t.classList.remove('dimmed', 'active'));
    });
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  setupHoverEffects();
});
