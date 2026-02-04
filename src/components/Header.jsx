export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-dark/80 backdrop-blur-sm border-b border-white/5">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
          D
        </div>
        <div>
          <h1 className="text-white font-semibold text-lg leading-tight">Dylan</h1>
          <p className="text-muted text-xs">Full-Stack Developer</p>
        </div>
      </div>

      <nav className="hidden sm:flex gap-4 text-sm text-muted">
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="https://github.com/dylan" target="_blank" rel="noopener" className="hover:text-white transition">GitHub</a>
        <a href="https://linkedin.com/in/dylan" target="_blank" rel="noopener" className="hover:text-white transition">LinkedIn</a>
      </nav>
    </header>
  )
}
