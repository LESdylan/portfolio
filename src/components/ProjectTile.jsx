import { motion } from 'framer-motion'

/**
 * Interactive project tile with mouse-tracking tilt effect
 */
export default function ProjectTile({ project, index, activeId, setActiveId }) {
  const isHero = project.isHero
  const isActive = activeId === project.id

  // spring config for smooth animations
  const spring = { type: 'spring', stiffness: 300, damping: 20 }

  // slight delay based on index for staggered entrance
  const entrance = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: index * 0.07, ...spring }
    }
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative group rounded-2xl overflow-hidden cursor-pointer
        bg-gradient-to-br from-card to-gray-900 border border-white/5
        shadow-lg hover:shadow-accent/20 transition-shadow duration-300
        flex flex-col items-center justify-center text-center p-4
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent
        ${isHero ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''}
      `}
      variants={entrance}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.04, zIndex: 10 }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => setActiveId(project.id)}
      onMouseLeave={() => setActiveId(null)}
      aria-label={`${project.title}: ${project.description}`}
    >
      {/* Glow ring when active */}
      <motion.span
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{ boxShadow: isActive ? '0 0 40px 4px rgba(59,130,246,0.35)' : '0 0 0 0 transparent' }}
        transition={{ duration: 0.25 }}
      />

      {/* Icon / image */}
      <motion.img
        src={project.image}
        alt=""
        className="w-14 h-14 md:w-16 md:h-16 object-contain mb-3 drop-shadow-md"
        animate={{ rotate: isActive ? [0, -6, 6, 0] : 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Title */}
      <h3 className="text-lg md:text-xl font-semibold text-white">{project.title}</h3>

      {/* Reveal on hover */}
      <motion.div
        className="mt-2 text-sm text-muted max-w-[200px]"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
        transition={{ duration: 0.25 }}
      >
        <p className="mb-2">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-1">
          {project.technologies.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-accent/20 text-accent text-xs font-medium">
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.a>
  )
}
