import { useState } from 'react'
import { Link } from 'react-router-dom'

type NavbarMode = 'solid' | 'overlay'

type NavbarProps = {
  mode?: NavbarMode
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: "Let's Connect", href: '#connect' },
  { label: 'Services', href: '#services' },
  { label: 'Construction', href: '#construction' },
  { label: 'My Book', href: '#book' },
  { label: 'Events', href: '#events' },
  { label: 'NYREM', href: '#nyrem' },
]

function Navbar({ mode = 'solid' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const headerClassName =
    mode === 'overlay'
      ? 'absolute inset-x-0 top-0 z-50'
      : 'sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10'

  const innerClassName = mode === 'overlay' ? 'py-7' : 'py-4'

  return (
    <header className={headerClassName}>
      <div className={`max-w-[1500px] mx-auto px-6 lg:px-10 ${innerClassName}`}>
        <div className="flex items-start justify-between gap-8">
          <Link className="leading-none shrink-0" to="/">
            <div className="text-[26px] sm:text-[28px] tracking-[0.16em] text-white">
              CURTIS QUOW
            </div>
            <div className="mt-2 text-[9px] tracking-[0.34em] uppercase text-white/70 font-[var(--font-body)]">
              Redefining the Art of Real Estate
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 pt-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="relative text-[11px] tracking-[0.38em] uppercase text-white/75 hover:text-white transition-colors after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-white/60 hover:after:w-full after:transition-[width] after:duration-300"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-end gap-3 pt-1 shrink-0">
            <div className="flex items-center gap-4">
              <Link className="text-white/70 hover:text-white transition-colors" to="/cart" aria-label="Private">
                <span className="material-symbols-outlined text-[22px] leading-none">lock</span>
              </Link>
              <button
                className="text-white/80 hover:text-white transition-colors"
                onClick={() => setMenuOpen((prev) => !prev)}
                type="button"
                aria-label="Menu"
                aria-expanded={menuOpen}
              >
                <span className="sr-only">Menu</span>
                <span className="flex flex-col gap-[6px] items-end">
                  <span className="block h-[2px] w-7 bg-white/80" />
                  <span className="block h-[2px] w-6 bg-white/80" />
                  <span className="block h-[2px] w-5 bg-white/80" />
                </span>
              </button>
            </div>

            <Link className="flex items-center gap-2 text-[12px] text-white/45 hover:text-white/75 transition-colors font-[var(--font-body)]" to="/signin">
              <span className="material-symbols-outlined text-[18px] leading-none">account_circle</span>
              <span>Log In</span>
            </Link>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="lg:hidden bg-black/80 backdrop-blur-md border-t border-white/10">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-6">
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className="text-[12px] tracking-[0.34em] uppercase text-white/80 hover:text-white transition-colors"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
