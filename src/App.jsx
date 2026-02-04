import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectTile from './components/ProjectTile'
import projects from './data/projects'

export default function App() {
  const [activeId, setActiveId] = useState(null)

  return (
    <div className="h-full flex flex-col bg-dark text-white overflow-hidden">
      <Header />

      {/* Main grid area — centered, takes remaining space */}
      <main
        id="projects"
        className="flex-1 flex items-center justify-center px-4 py-6 overflow-hidden"
      >
        <motion.div
          className="grid gap-4 w-full max-w-5xl
                     grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                     auto-rows-[minmax(140px,1fr)]"
          initial="hidden"
          animate="visible"
        >
          {projects.map((p, i) => (
            <ProjectTile
              key={p.id}
              project={p}
              index={i}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
