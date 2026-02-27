import { type MouseEvent, useEffect, useRef, useState } from 'react'
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
  const [overlayVisible, setOverlayVisible] = useState(true)
  const [overlayAtTop, setOverlayAtTop] = useState(true)
  const headerRef = useRef<HTMLElement | null>(null)
  const lastScrollYRef = useRef(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  useEffect(() => {
    if (mode !== 'overlay') {
      return
    }

    lastScrollYRef.current = typeof window === 'undefined' ? 0 : window.scrollY || 0

    const onScroll = () => {
      if (tickingRef.current) {
        return
      }
      tickingRef.current = true

      requestAnimationFrame(() => {
        tickingRef.current = false

        const currentY = window.scrollY || 0
        const prevY = lastScrollYRef.current
        const delta = currentY - prevY
        const atTop = currentY <= 4

        setOverlayAtTop(atTop)

        if (atTop) {
          setOverlayVisible(true)
        } else if (menuOpen) {
          setOverlayVisible(true)
        } else if (delta > 6) {
          setOverlayVisible(false)
        } else if (delta < -6) {
          setOverlayVisible(true)
        }

        lastScrollYRef.current = currentY
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [menuOpen, mode])

  const headerClassName =
    mode === 'overlay'
      ? 'fixed inset-x-0 top-0 z-50'
      : 'sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10 pt-[env(safe-area-inset-top)]'

  const innerClassName = mode === 'overlay' ? 'py-4' : 'py-4'
  const barClassName =
    mode === 'overlay'
      ? [
          'pt-[env(safe-area-inset-top)]',
          overlayAtTop ? 'bg-transparent' : 'bg-[#651649]',
          'transition-transform duration-300 ease-out',
          overlayVisible ? 'translate-y-0' : '-translate-y-full pointer-events-none',
          'will-change-transform',
        ].join(' ')
      : ''

  const onNavLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) {
      return
    }

    event.preventDefault()
    setMenuOpen(false)

    const targetId = href.slice(1)
    const targetEl = document.getElementById(targetId)
    if (!targetEl) {
      return
    }

    const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0
    const targetTop = targetEl.getBoundingClientRect().top + window.scrollY
    const y = Math.max(0, targetTop - headerHeight)

    window.history.replaceState(null, '', href)
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <header ref={headerRef} className={headerClassName}>
      <div className={barClassName}>
        <div className={`max-w-[1500px] mx-auto px-6 lg:px-10 ${innerClassName}`}>
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            <Link className="leading-none shrink-0" to="/">
              <div className="text-white tracking-[0.14em] sm:tracking-[0.16em] leading-none">
                <div className="text-[16px] sm:hidden">ALESSA</div>
                <div className="mt-1 text-[16px] sm:hidden">AICHINGER</div>
                <div className="hidden sm:block text-[28px]">ALESSA AICHINGER</div>
              </div>
              <div className="hidden sm:block mt-2 text-[12px] tracking-[0.34em] uppercase text-white/70 font-[var(--font-body)] font-semibold">
                Redefining the Art of Real Estate
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  className="relative text-[12px] xl:text-[13px] tracking-[0.28em] uppercase text-white/75 hover:text-white transition-colors font-semibold whitespace-nowrap after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-white/60 hover:after:w-full after:transition-[width] after:duration-300"
                  href={item.href}
                  onClick={(event) => onNavLinkClick(event, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 shrink-0">
              <button
                className="text-white/80 hover:text-white transition-colors p-2 -m-2"
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
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[88vw] max-w-[390px] bg-white text-[#651649] shadow-2xl">
            <div className="flex items-center justify-end px-8 pt-7">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="h-10 w-10 flex items-center justify-center text-[#651649]/80 hover:text-[#651649] transition-colors"
              >
                <span className="text-[28px] leading-none" aria-hidden>
                  ×
                </span>
              </button>
            </div>

            <nav className="mt-6 px-8">
              <div className="border-t border-[#651649]/35">
                {[
                  { label: 'HOME', href: '#home' },
                  { label: "LET'S CONNECT", href: '#connect' },
                  { label: 'SERVICES', href: '#services', chevron: true },
                  { label: 'CONSTRUCTION', href: '#construction' },
                  { label: 'MY BOOK', href: '#book' },
                  { label: 'EVENTS', href: '#events' },
                  { label: 'NYREM', href: '#nyrem', chevron: true },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(event) => onNavLinkClick(event, item.href)}
                    className="relative block border-b border-[#651649]/35 py-4 text-center text-[15px] tracking-[0.22em] text-[#651649]/80 hover:text-[#651649] transition-colors font-semibold"
                  >
                    <span className="font-display">{item.label}</span>
                    {item.chevron ? (
                      <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-[20px] text-[#651649]/55">
                        keyboard_arrow_down
                      </span>
                    ) : null}
                  </a>
                ))}
              </div>
            </nav>

            <div className="mt-10 px-8">
              <div className="text-center text-[18px] tracking-[0.14em] text-[#f2b3d0]">ALESSA AICHINGER</div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
