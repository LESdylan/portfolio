export default function Footer() {
  return (
    <footer className="w-full flex items-center justify-center gap-6 py-4 text-xs text-muted bg-dark/60 border-t border-white/5">
      <a href="https://github.com/dylan" target="_blank" rel="noopener" className="hover:text-white transition">GitHub</a>
      <a href="https://linkedin.com/in/dylan" target="_blank" rel="noopener" className="hover:text-white transition">LinkedIn</a>
      <a href="mailto:dylan@example.com" className="hover:text-white transition">Email</a>
      <span className="text-muted/60">© 2026</span>
    </footer>
  )
}
