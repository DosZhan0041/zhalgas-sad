import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Flower2, Menu, X } from 'lucide-react'

const navItems = [
  { path: '/', label: 'Басты бет' },
  { path: '/about', label: 'Біз туралы' },
  { path: '/team', label: 'Ұжым' },
  // { path: '/groups', label: 'Топтар' },
  { path: '/attestation', label: 'Аттестация' },
  { path: '/gallery', label: 'Галерея' },
  // { path: '/parents', label: 'Ата-аналарға' },
  // { path: '/documents', label: 'Құжаттар' },
  { path: '/admission', label: 'Қабылдау' },
  // { path: '/menu', label: 'Мәзір' },
  // { path: '/useful', label: 'Пайдалы ақпарат' },
  { path: '/contact', label: 'Байланыс' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <div className="logo-icon-wrap">
            <Flower2 size={24} />
          </div>
          <div className="logo-text">
            <span className="logo-name">Жалғас</span>
            <span className="logo-sub">Жеке меншік сәби-балабақша</span>
          </div>
        </Link>

        <button className="burger" onClick={() => setOpen(!open)} aria-label="Мәзір">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
