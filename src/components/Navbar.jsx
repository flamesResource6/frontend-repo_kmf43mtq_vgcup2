import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="font-extrabold text-xl tracking-tight">AIML Portfolio</a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">{item.label}</a>
            ))}
            <div className="h-6 w-px bg-gray-300 mx-2" />
            <div className="flex items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black/90">
                <Mail size={16} /> Contact
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-gray-200">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-gray-700 hover:text-gray-900">{item.label}</a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2 rounded hover:bg-gray-100" aria-label="GitHub"><Github size={18} /></a>
              <a href="#" className="p-2 rounded hover:bg-gray-100" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 text-sm bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black/90">
                <Mail size={16} /> Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
