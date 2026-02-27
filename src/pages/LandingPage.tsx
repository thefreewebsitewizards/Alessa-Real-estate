import {
  type CSSProperties,
  type HTMLAttributes,
  type MouseEvent,
  type ReactNode,
  type SyntheticEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import Navbar from '../components/Navbar'

type FeaturedProperty = {
  id: string
  address: string
  details: string
  price: string
  imageUrl: string
}

type FeaturedVideo = {
  id: string
  label: string
  posterUrl: string
}

type LazyBackgroundProps = HTMLAttributes<HTMLDivElement> & {
  src: string
  eager?: boolean
  children?: ReactNode
}

function LazyBackground({ src, eager = false, style, children, ...rest }: LazyBackgroundProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(() => eager || typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    if (isVisible) {
      return
    }
    const el = elementRef.current
    if (!el) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px 0px' },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
    }
  }, [isVisible])

  const mergedStyle: CSSProperties | undefined = isVisible
    ? { ...style, backgroundImage: `url('${src}')` }
    : style

  return (
    <div ref={elementRef} style={mergedStyle} {...rest}>
      {children}
    </div>
  )
}

function LandingPage() {
  const heroVideoUrl = '/Alessa%20Video.mp4'
  const aboutLeftImageUrl = '/Alessa1.jpg'
  const aboutInlineImageUrl = '/Alessa2.jpg'
  const servicesImageUrl = '/Alessa3.jpg'
  const servicesSkylineUrl = '/Alessa4.jpg'
  const newsletterLeftImageUrl = '/Alessa6.jpg'
  const newsletterCenterImageUrl = '/Alessa7.jpg'
  const affiliatesBackgroundUrl = '/Alessa-placeholder-image.jpg'
  const networkingGallery = useMemo(
    () => [
      '/Alessa1.jpg',
      '/Alessa2.jpg',
      '/Alessa3.jpg',
      '/Alessa4.jpg',
      '/Alessa5.jpg',
      '/Alessa6.jpg',
      '/Alessa7.jpg',
      '/Alessa-placeholder-image.jpg',
    ],
    [],
  )
  const affiliatesLogos = useMemo<{ label: string; text?: boolean; src?: string }[]>(
    () => [
      { label: 'LEVAIN', text: true },
      { label: 'NYREM', text: true },
      { label: 'SERHANT.', text: true },
      { label: 'RIVIAN', text: true },
      { label: 'WHITTY DESIGNS', text: true },
      { label: 'CIROC', text: true },
      { label: 'BULOVA', text: true },
      { label: 'COCA-COLA', text: true },
      { label: 'REBNY', text: true },
      { label: 'PERRIER', text: true },
      { label: 'PIECE OF CAKE', text: true },
    ],
    [],
  )
  const featuredVideos = useMemo<FeaturedVideo[]>(
    () => [
      {
        id: 'alessa-insta-1',
        label: 'ALESSA INSTA',
        posterUrl: '/Alessa-placeholder-image.jpg',
      },
    ],
    [],
  )
  const heroVideoSegments = useMemo(
    () => [
      { id: 'hero-segment-1', startTime: 0 },
      { id: 'hero-segment-2', startTime: 20 },
      { id: 'hero-segment-3', startTime: 40 },
    ],
    [],
  )
  const featuredProperties = useMemo<FeaturedProperty[]>(
    () => [
      {
        id: '281-park-ave-south',
        address: '281 PARK AVE SOUTH',
        details: 'Commercial · 42,500 Sq Ft · SERHANT. Signature',
        price: 'Price Upon Request',
        imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=70',
      },
      {
        id: '56-north-moore-st',
        address: '56 NORTH MOORE ST',
        details: 'Commercial · SERHANT. Signature',
        price: '$75,000,000',
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1400&q=70',
      },
      {
        id: '432-park-avenue-69',
        address: '432 PARK AVENUE 69',
        details: '5 Beds · 6 Full Baths · 8,040 Sq Ft · SERHANT. Signature',
        price: '$52,000,000',
        imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=70',
      },
      {
        id: '35-east-62nd-street',
        address: '35 E 62ND STREET',
        details: '0 Beds · 5 Full Baths · 25,000 Sq Ft · Listing Courtesy Melissa Karen Post with Serhant',
        price: '$49,900,000',
        imageUrl: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1400&q=70',
      },
      {
        id: '125-e-65th-street',
        address: '125 E 65TH STREET',
        details: '6 Beds · 7 Full Baths · 14,346 Sq Ft · Listing Courtesy Marc Riedel with Serhant',
        price: '$45,500,000',
        imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=70',
      },
      {
        id: '20-greene-st-ph',
        address: '20 GREENE STREET PH',
        details: '3 Beds · 4 Full Baths · 6,814 Sq Ft',
        price: '$35,950,000',
        imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=70',
      },
    ],
    [],
  )

  const featuredRowHeightPx = 54
  const featuredScrollRef = useRef<HTMLDivElement | null>(null)
  const afterSectionsRef = useRef<HTMLDivElement | null>(null)
  const networkingGalleryRef = useRef<HTMLDivElement | null>(null)
  const [afterSectionsHeight, setAfterSectionsHeight] = useState(0)
  const [featuredScrollProgress, setFeaturedScrollProgress] = useState(0)
  const [featuredViewportHeight, setFeaturedViewportHeight] = useState(() => {
    if (typeof window === 'undefined') {
      return 0
    }
    return Math.max(1, window.innerHeight || 1)
  })

  useEffect(() => {
    let rafId = 0

    const update = () => {
      rafId = 0
      const viewportHeight = Math.max(1, window.innerHeight || 1)
      setFeaturedViewportHeight(viewportHeight)

      const el = featuredScrollRef.current
      if (!el) {
        return
      }

      const rect = el.getBoundingClientRect()
      const maxProgress = Math.max(0, rect.height - viewportHeight)
      const nextProgress = Math.min(maxProgress, Math.max(0, -rect.top))
      setFeaturedScrollProgress(nextProgress)
    }

    const onScrollOrResize = () => {
      if (rafId) {
        return
      }
      rafId = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)
    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  useEffect(() => {
    const el = afterSectionsRef.current
    if (!el) {
      return
    }
    let rafId = 0
    const schedule = () => {
      if (rafId) {
        return
      }
      rafId = window.requestAnimationFrame(() => {
        rafId = 0
        setAfterSectionsHeight(el.offsetHeight)
      })
    }
    schedule()
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', schedule)
      return () => {
        if (rafId) {
          window.cancelAnimationFrame(rafId)
        }
        window.removeEventListener('resize', schedule)
      }
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(el)
    return () => {
      observer.disconnect()
      if (rafId) {
        window.cancelAnimationFrame(rafId)
      }
    }
  }, [])

  const featuredStepHeight = Math.max(1, featuredViewportHeight || 1)
  const featuredT = featuredScrollProgress / featuredStepHeight
  const featuredActiveIndex = Math.min(featuredProperties.length - 1, Math.floor(featuredT))
  const featuredStepProgress = Math.max(0, Math.min(1, featuredT - featuredActiveIndex))
  const featuredBaseImageIndex = featuredActiveIndex === 0 ? 0 : featuredActiveIndex - 1
  const featuredOverlayImageIndex = featuredActiveIndex
  const featuredBaseImageTopPx = (featuredBaseImageIndex + 1) * featuredRowHeightPx
  const featuredOverlayImageTopPx = (featuredOverlayImageIndex + 1) * featuredRowHeightPx
  const featuredActiveTopPx = featuredActiveIndex * featuredRowHeightPx
  const featuredActiveEntryDelta = Math.max(0, featuredStepHeight - featuredRowHeightPx - featuredActiveTopPx)
  const featuredActiveTranslateY =
    featuredActiveIndex === 0 ? 0 : Math.max(0, (1 - featuredStepProgress) * featuredActiveEntryDelta)
  const featuredServicesTopPx = featuredProperties.length * featuredStepHeight
  const featuredTotalHeightPx = Math.max(featuredServicesTopPx + afterSectionsHeight, featuredStepHeight)
  const onNetworkingPrev = () => {
    const el = networkingGalleryRef.current
    if (!el) {
      return
    }
    el.scrollBy({ left: -Math.max(240, Math.round(el.clientWidth * 0.72)), behavior: 'smooth' })
  }
  const onNetworkingNext = () => {
    const el = networkingGalleryRef.current
    if (!el) {
      return
    }
    el.scrollBy({ left: Math.max(240, Math.round(el.clientWidth * 0.72)), behavior: 'smooth' })
  }
  const onFeaturedVideoLoaded = (event: SyntheticEvent<HTMLVideoElement>, startTime: number) => {
    const el = event.currentTarget
    if (Number.isFinite(startTime)) {
      el.currentTime = startTime
    }
    void el.play()
  }
  const onAnchorScroll = (event: SyntheticEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) {
      return
    }
    event.preventDefault()
    const targetId = href.slice(1)
    const targetEl = document.getElementById(targetId)
    if (!targetEl) {
      return
    }
    const targetTop = targetEl.getBoundingClientRect().top + window.scrollY
    window.history.replaceState(null, '', href)
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }
  const onContactScroll = (event: MouseEvent<HTMLElement>, href: string) => {
    if (!href.startsWith('#')) {
      return
    }
    event.preventDefault()
    event.stopPropagation()
    const targetId = href.slice(1)
    const targetEl = document.getElementById(targetId)
    if (!targetEl) {
      return
    }
    const targetTop = targetEl.getBoundingClientRect().top + window.scrollY
    window.history.replaceState(null, '', href)
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  return (
    <div className="alessa-theme bg-black text-white font-display min-h-screen">
      <main>
        <section id="home" className="relative w-full">
          <div className="relative w-full h-[100svh] min-h-[720px] overflow-hidden hidden md:block">
            <video
              className="absolute inset-0 w-full h-full object-cover scale-105"
              src={heroVideoUrl}
              autoPlay
              muted
              loop
              preload="metadata"
              playsInline
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/35" />
            <Navbar mode="overlay" />

            <button
              className="fixed right-7 bottom-7 z-[60] h-14 w-14 rounded-full bg-[#b53d79] shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-center hover:bg-[#c04a86] transition-colors"
              type="button"
              aria-label="Chat"
            >
              <span className="material-symbols-outlined text-white text-[26px] leading-none">mode_comment</span>
            </button>
          </div>

          <div className="relative w-full h-[100svh] min-h-[720px] overflow-hidden grid grid-rows-3 md:hidden">
            {heroVideoSegments.map((segment) => (
              <div key={segment.id} className="relative overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={heroVideoUrl}
                  autoPlay
                  muted
                  loop
                  preload="metadata"
                  playsInline
                  onLoadedMetadata={(event) => onFeaturedVideoLoaded(event, segment.startTime)}
                />
                <div className="absolute inset-0 bg-black/35" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/35" />
              </div>
            ))}
            <Navbar mode="overlay" />

            <button
              className="fixed right-7 bottom-7 z-[60] h-14 w-14 rounded-full bg-[#b53d79] shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-center hover:bg-[#c04a86] transition-colors"
              type="button"
              aria-label="Chat"
            >
              <span className="material-symbols-outlined text-white text-[26px] leading-none">mode_comment</span>
            </button>
          </div>

          <div className="bg-[#7a1b5c]/70 backdrop-blur-sm">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start">
                <div className="text-center md:text-left">
                  <div className="text-[40px] md:text-[46px] leading-none tracking-wide text-white">
                    <span>8</span>
                    <span className="mx-2">+</span>
                    <span>Years</span>
                  </div>
                  <div className="mt-4 text-[12px] tracking-[0.34em] uppercase text-white/70 font-[var(--font-body)] font-semibold">
                    Experience in the Real Estate
                    <br />
                    Industry
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-[40px] md:text-[46px] leading-none tracking-wide text-white">
                    <span>$</span>
                    <span className="mx-3">100M</span>
                    <span>+</span>
                  </div>
                  <div className="mt-4 text-[12px] tracking-[0.34em] uppercase text-white/70 font-[var(--font-body)] font-semibold">
                    In Total Sales:
                    <br />
                    New York
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <div className="text-[40px] md:text-[46px] leading-none tracking-wide text-white">
                    <span>4</span>
                    <span className="ml-3">Languages</span>
                  </div>
                  <div className="mt-4 text-[12px] tracking-[0.34em] uppercase text-white/70 font-[var(--font-body)] font-semibold">
                    German · English
                    <br />
                    Spanish · Italian
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f6f6f4] text-[#111]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr_0.95fr]">
            <div className="relative min-h-[520px] lg:min-h-[640px]">
              <LazyBackground
                className="absolute inset-0 bg-cover bg-center"
                data-alt="Alessa seated in a bright, modern interior"
                src={aboutLeftImageUrl}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent lg:from-black/25" />
            </div>

            <div className="relative px-6 sm:px-10 lg:px-14 py-14 lg:py-20">
              <div
                className="absolute inset-0 opacity-[0.22]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 18% 22%, rgba(0,0,0,0.08), transparent 55%), radial-gradient(circle at 82% 30%, rgba(0,0,0,0.06), transparent 55%), radial-gradient(circle at 60% 78%, rgba(0,0,0,0.05), transparent 55%)',
                }}
              />
              <div className="relative">
                <div className="text-[12px] tracking-[0.34em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                  About Alessa
                </div>
                <h2 className="mt-4 text-[44px] sm:text-[52px] leading-[0.95] tracking-wide">
                  ALESSA AICHINGER
                </h2>
                <p className="mt-6 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)] max-w-[420px]">
                  Austrian-born Alessa Aichinger is a star real estate broker who brings local expertise, international
                  perspective, and first-hand investment experience to every deal. She is fluent in four languages and is
                  known for her honesty, creativity, and communication skills. She and her business partner have
                  done over $100M in sales, encompassing commercial transactions and luxury properties throughout Manhattan
                  and Brooklyn.
                </p>
                <p className="mt-6 text-[13px] leading-6 text-[#b53d79] font-[var(--font-body)] font-semibold max-w-[420px]">
                  “I offer tailored consultations, expert advice, and a seamless experience throughout your real estate
                  journey,” says Alessa. “My promise to you is simple: listen to your needs, execute on your goals, and
                  ensure you feel confident and supported every step of the way, 24/7.”
                </p>
                <div className="mt-6 text-[12px] tracking-[0.2em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                  Licensed Real Estate Salesperson · New York City · LIC#: 10401333915
                </div>

                <div className="mt-12">
                  <LazyBackground
                    className="w-full max-w-[520px] aspect-[16/9] bg-cover bg-top shadow-[0_24px_55px_rgba(0,0,0,0.25)]"
                    data-alt="Alessa with clients by the pool"
                    src={aboutInlineImageUrl}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-10 lg:px-14 py-14 lg:py-20 flex items-start">
              <div className="w-full max-w-[420px] lg:pt-20">
                <p className="text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                  Alessa leverages her extensive network and exceptional grasp of trends, pricing, and inventory to create
                  long-term value for her clients. Having previously worked for two of the most influential development
                  companies, The Related Companies and The Moinian Group, she is also a wellspring of local institutional
                  knowledge.
                </p>
                <p className="mt-6 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                  Her familiarity with residential and commercial properties, combined with her success as an investor in
                  the U.S. and Europe, gives her a fresh perspective and unique insights, whether working with buyers,
                  sellers, business owners, or developers—domestically and internationally. She also possesses an
                  established online following, underscoring her ability to connect with a broad audience.
                </p>
                <p className="mt-6 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                  An agent, investor, landlord, and passionate real estate guru, Alessa loves guiding others through major
                  life decisions while helping them achieve their dreams. She was drawn to the industry for its combination
                  of people, places, and vision and continues to be excited by its power to shape communities, change
                  lives, and empower entrepreneurs.
                </p>
                <p className="mt-6 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                  Now a resident of DUMBO, Alessa grew up in a small Austrian town and has lived in five different
                  countries. She holds a bachelor’s degree in political science and languages and a master’s in music and
                  arts business management. Her previous roles include serving as a personal assistant to a celebrity
                  matchmaker, a marketing manager at a music and events space in Harlem, and holding various positions in
                  entertainment, events, music, and films.
                </p>
                <p className="mt-6 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                  Alessa continues to stay involved in the arts by doing commissioned art sales, art walls, organizing art
                  events, and doing singing/songwriting, acting, and On-Air/TV hosting. She is an avid traveler who enjoys
                  immersing herself in different cultures. Giving back to organizations that support people, animals, and
                  the environment is also dear to her heart.
                </p>
                <div className="mt-10 space-y-8">
                  <div>
                    <div className="text-[12px] tracking-[0.34em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                      Experience
                    </div>
                    <div className="mt-4 space-y-2 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                      <div>Worked at the Related Companies and ran multiple buildings for the Moinian Group (in-house)</div>
                      <div>8+ years in Real Estate (Residential and Commercial)</div>
                      <div>DUMBO property owner/resident, real estate investor, expert in Brooklyn and Manhattan</div>
                      <div>First-time home buyers, foreign buyers, luxury rentals and sales, new development, multi-family</div>
                      <div>Investor-friendly agent</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[12px] tracking-[0.34em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                      Interests
                    </div>
                    <div className="mt-4 space-y-2 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                      <div>Music</div>
                      <div>Acting</div>
                      <div>Hosting</div>
                      <div>Brand Collaborations</div>
                      <div>Skiing</div>
                      <div>Traveling</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[12px] tracking-[0.34em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                      Languages
                    </div>
                    <div className="mt-4 space-y-2 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                      <div>German (fluent)</div>
                      <div>English (fluent)</div>
                      <div>Spanish (fluent)</div>
                      <div>Italian (very good)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="properties" className="bg-[#f6f6f4] text-[#111]">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 pt-16 lg:pt-20 pb-8">
            <div className="text-center">
              <div className="text-[12px] tracking-[0.34em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                Our Most Exclusive House, Apartments, Townhomes + More
              </div>
              <h2 className="mt-5 text-[44px] sm:text-[60px] leading-[0.9] tracking-[0.06em]">
                FEATURED PROPERTIES
              </h2>
            </div>
          </div>

          <div className="border-t border-black/35" />

          <div
            ref={featuredScrollRef}
            className="relative"
            style={{
              height: `${featuredTotalHeightPx}px`,
            }}
          >
            <div className="sticky top-0 h-[100svh] overflow-hidden relative">
              <div className="absolute inset-0 bg-[#f6f6f4]" />
              <LazyBackground
                className="absolute inset-x-0 bottom-0 bg-cover bg-center"
                data-alt="Featured property"
                src={featuredProperties[featuredBaseImageIndex]?.imageUrl ?? featuredProperties[0]?.imageUrl}
                style={{
                  top: `${featuredBaseImageTopPx}px`,
                }}
              />
              {featuredActiveIndex > 0 ? (
                <LazyBackground
                  className="absolute inset-x-0 bottom-0 bg-cover bg-center will-change-transform"
                  data-alt="Featured property"
                  src={featuredProperties[featuredOverlayImageIndex]?.imageUrl ?? featuredProperties[0]?.imageUrl}
                  style={{
                    top: `${featuredOverlayImageTopPx}px`,
                    transform: `translateY(${featuredActiveTranslateY}px)`,
                  }}
                />
              ) : null}

              <div className="absolute inset-x-0 top-0 z-30">
                {featuredProperties.map((property, index) => {
                  if (index > featuredActiveIndex) {
                    return null
                  }

                  const isActive = index === featuredActiveIndex
                  const translateY = isActive && index > 0 ? featuredActiveTranslateY : 0
                  const topPx = index * featuredRowHeightPx

                  return (
                    <a
                      key={property.id}
                      className="absolute left-0 right-0 bg-[#f6f6f4] border-b border-black/35 will-change-transform"
                      style={{
                        top: `${topPx}px`,
                        transform: `translateY(${translateY}px)`,
                        zIndex: 30 + index,
                      }}
                      href={`#${property.id}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 h-[54px] flex items-center">
                        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 w-full">
                          <div className="text-[18px] sm:text-[20px] tracking-[0.06em] whitespace-nowrap">
                            {property.address}
                          </div>

                          <div className="hidden md:block text-center text-[11px] tracking-[0.32em] uppercase text-black/70 font-[var(--font-body)] font-semibold">
                            {property.details}
                          </div>

                          <div className="flex items-center gap-3 sm:gap-4 text-black">
                            <button
                              type="button"
                              className="text-[12px] sm:text-[20px] tracking-[0.04em] sm:tracking-[0.06em] leading-tight text-right whitespace-nowrap"
                              onClick={(event) => onContactScroll(event, '#connect')}
                            >
                              {property.price}
                            </button>
                            <span className="text-[22px] leading-none" aria-hidden>
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div
              ref={afterSectionsRef}
              className="absolute inset-x-0 z-40 bg-[#f6f6f4]"
              style={{
                top: `${featuredServicesTopPx}px`,
              }}
            >
              <div id="services" className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] min-h-[100svh]">
                <div className="relative min-h-[520px] lg:min-h-[100svh] overflow-hidden">
                  <LazyBackground
                    className="absolute inset-y-0 left-0 w-[38%] bg-cover bg-left opacity-35"
                    data-alt="New York skyline"
                    src={servicesSkylineUrl}
                  />
                  <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#f6f6f4] via-[#f6f6f4]/70 to-transparent" />
                  <LazyBackground
                    className="absolute inset-0 bg-cover bg-center"
                    data-alt="Alessa in a modern interior"
                    src={servicesImageUrl}
                  />
                </div>

                <div className="bg-white text-[#111] px-8 sm:px-12 lg:px-16 py-14 lg:py-16 flex items-center">
                  <div className="max-w-[520px]">
                    <div className="text-[12px] tracking-[0.34em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                      Let&apos;s Connect
                    </div>
                    <h2 className="mt-6 text-[44px] sm:text-[54px] leading-[0.92] tracking-[0.04em]">
                      OUR SERVICES
                    </h2>

                    <div className="mt-12 space-y-10">
                      <div>
                        <div className="text-[#b53d79] text-[20px] tracking-[0.08em]">
                          REAL ESTATE CONSULTATION
                        </div>
                        <p className="mt-4 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                          Expert guidance for new clients interested in buying, selling, and investing in real estate.
                        </p>
                      </div>

                      <div>
                        <div className="text-[#b53d79] text-[20px] tracking-[0.08em]">
                          NETWORKING
                        </div>
                        <p className="mt-4 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                          A mentorship program designed to help professionals master networking and expand their industry
                          connections with the support of experienced leaders.
                        </p>
                      </div>

                      <div>
                        <div className="text-[#b53d79] text-[20px] tracking-[0.08em]">
                          EVENTS CURATION
                        </div>
                        <p className="mt-4 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                          A comprehensive mentorship program for event professionals aiming to elevate their skills in
                          event curation, marketing, and production.
                        </p>
                      </div>
                    </div>

                    <div className="mt-12">
                      <a
                        className="inline-flex items-center justify-center gap-5 bg-[#7a1b5c] text-white px-10 py-4 text-[12px] tracking-[0.26em] uppercase font-[var(--font-body)] font-semibold hover:bg-[#8a2a68] transition-colors"
                        href="#connect"
                        onClick={(event) => onAnchorScroll(event, '#connect')}
                      >
                        <span>Book Now</span>
                        <span aria-hidden className="text-[14px] leading-none">
                          +
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div id="videos" className="bg-[#f6f6f4] text-[#111]">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-10 pt-24 lg:pt-28 pb-20 lg:pb-28">
                  <div className="text-center">
                    <div className="text-[12px] tracking-[0.34em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                      Let&apos;s Connect
                    </div>
                    <h2 className="mt-8 text-[54px] sm:text-[74px] leading-[0.92] tracking-[0.06em]">
                      FEATURED VIDEOS
                    </h2>
                  </div>

                  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
                    {featuredVideos.map((video) => (
                      <div key={video.id} className="flex flex-col items-center">
                        <div className="w-full max-w-[360px] h-px bg-black/70" />
                        <div className="mt-10 w-full max-w-[360px] aspect-[9/16] bg-[#efefec] overflow-hidden">
                          <video
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            preload="metadata"
                            poster={video.posterUrl}
                          >
                            <source
                              src="/Alessa-insta-video.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <div className="mt-10 text-[18px] tracking-[0.08em] text-[#b53d79] text-center">
                          {video.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="gallery" className="bg-[#f6f6f4] text-[#111]">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-14 lg:gap-16 items-center">
                    <div className="max-w-[420px]">
                      <div className="text-[12px] tracking-[0.34em] uppercase text-[#b53d79] font-[var(--font-body)] font-semibold">
                        NETWORKING OPPORTUNITIES
                      </div>
                      <h2 className="mt-8 text-[54px] sm:text-[66px] leading-[0.95] tracking-[0.06em]">
                        GALLERY
                      </h2>
                      <div className="mt-12">
                        <a
                          className="inline-flex items-center justify-center gap-5 bg-[#7a1b5c] text-white px-10 py-4 text-[12px] tracking-[0.26em] uppercase font-[var(--font-body)] font-semibold hover:bg-[#8a2a68] transition-colors"
                          href="#connect"
                        onClick={(event) => onAnchorScroll(event, '#connect')}
                        >
                          <span>Learn More</span>
                          <span aria-hidden className="text-[14px] leading-none">
                            +
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="relative overflow-hidden">
                      <div
                        ref={networkingGalleryRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth w-full max-w-full snap-x snap-mandatory"
                        style={{
                          scrollbarWidth: 'none',
                          msOverflowStyle: 'none',
                        }}
                      >
                        {networkingGallery.map((url, index) => (
                          <LazyBackground
                            key={`${url}-${index}`}
                            className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[30%] aspect-square bg-cover bg-center"
                            data-alt="Networking moment"
                            src={url}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={onNetworkingPrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 border border-black/15 bg-white/85 hover:bg-white transition-colors flex items-center justify-center"
                        aria-label="Previous"
                      >
                        <span className="text-[18px] leading-none" aria-hidden>
                          ←
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={onNetworkingNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 border border-black/15 bg-white/85 hover:bg-white transition-colors flex items-center justify-center"
                        aria-label="Next"
                      >
                        <span className="text-[18px] leading-none" aria-hidden>
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="affiliates" className="relative min-h-[100svh] overflow-hidden text-white">
                <LazyBackground
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Affiliates background"
                  src={affiliatesBackgroundUrl}
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/55" />

                <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 py-24 lg:py-28">
                  <div className="text-center">
                    <div className="text-[12px] tracking-[0.34em] uppercase text-white/85 font-[var(--font-body)] font-semibold">
                      OVER 2,000+ CONNECTIONS
                    </div>
                    <h2 className="mt-8 text-[42px] sm:text-[56px] lg:text-[66px] leading-[0.92] tracking-[0.06em]">
                      OUR AFFILIATES &amp; SPONSORS
                    </h2>
                  </div>

                  <div className="mt-20 space-y-10">
                    <div className="affiliates-marquee">
                      <div className="affiliates-marquee-track affiliates-marquee-right">
                        {[...affiliatesLogos, ...affiliatesLogos].map((logo, index) => (
                          <div key={`${logo.label}-${index}`} className="affiliates-marquee-item">
                            {logo.text ? (
                              <span className="text-[16px] sm:text-[18px] tracking-[0.18em] uppercase">
                                {logo.label}
                              </span>
                            ) : (
                              <img
                                src={logo.src}
                                alt={logo.label}
                                className="h-8 sm:h-9 w-auto opacity-95"
                                loading="lazy"
                                decoding="async"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="affiliates-marquee">
                      <div className="affiliates-marquee-track affiliates-marquee-left">
                        {[...affiliatesLogos, ...affiliatesLogos].map((logo, index) => (
                          <div key={`${logo.label}-${index}-b`} className="affiliates-marquee-item">
                            {logo.text ? (
                              <span className="text-[16px] sm:text-[18px] tracking-[0.18em] uppercase">
                                {logo.label}
                              </span>
                            ) : (
                              <img
                                src={logo.src}
                                alt={logo.label}
                                className="h-8 sm:h-9 w-auto opacity-95"
                                loading="lazy"
                                decoding="async"
                              />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="newsletter" className="bg-[#7a1b5c] text-white">
                <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.22fr_0.4fr] min-h-[100svh]">
                  <div className="relative min-h-[520px] lg:min-h-[100svh] overflow-hidden">
                    <LazyBackground
                      className="absolute inset-0 bg-cover bg-center"
                      data-alt="Alessa in a modern interior"
                      src={newsletterLeftImageUrl}
                    />
                  </div>

                  <div className="relative min-h-[360px] lg:min-h-[100svh] overflow-hidden">
                    <LazyBackground
                      className="absolute inset-0 bg-cover bg-center"
                      data-alt="New York city"
                      src={newsletterCenterImageUrl}
                    />
                  </div>

                  <div className="px-8 sm:px-12 lg:px-16 py-14 lg:py-16 flex items-center">
                    <div className="w-full max-w-[560px]">
                      <div className="text-[12px] tracking-[0.34em] uppercase text-white/85 font-[var(--font-body)] font-semibold">
                        Subscribe Now
                      </div>
                      <h2 className="mt-8 text-[44px] sm:text-[54px] leading-[0.95] tracking-[0.06em]">
                        JOIN 40k+ PEOPLE
                        <br />
                        WHO LOVE OUR
                        <br />
                        NEWSLETTER
                      </h2>

                      <p className="mt-10 text-[13px] leading-6 text-white/80 font-[var(--font-body)] max-w-[520px] font-semibold">
                        Stay ahead in the real estate game! Subscribe to our mailing list to receive the latest market
                        updates, exclusive alerts on new listings, upcoming events, foundation news, and more—directly to
                        your inbox. Don&apos;t miss out!
                      </p>

                      <form className="mt-16" onSubmit={(event) => event.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                          <label className="block">
                            <div className="text-[12px] tracking-[0.18em] text-white/70 font-[var(--font-body)] font-semibold">
                              First name
                            </div>
                            <input
                              className="mt-4 w-full bg-transparent border-b border-white/35 focus:border-white/70 outline-none pb-3 text-[14px] font-[var(--font-body)] font-semibold"
                              type="text"
                              name="firstName"
                              autoComplete="given-name"
                            />
                          </label>

                          <label className="block">
                            <div className="text-[12px] tracking-[0.18em] text-white/70 font-[var(--font-body)] font-semibold">
                              Last name
                            </div>
                            <input
                              className="mt-4 w-full bg-transparent border-b border-white/35 focus:border-white/70 outline-none pb-3 text-[14px] font-[var(--font-body)] font-semibold"
                              type="text"
                              name="lastName"
                              autoComplete="family-name"
                            />
                          </label>
                        </div>

                        <label className="block mt-10">
                          <div className="text-[12px] tracking-[0.18em] text-white/70 font-[var(--font-body)] font-semibold">
                            Email *
                          </div>
                          <input
                            className="mt-4 w-full bg-transparent border-b border-white/35 focus:border-white/70 outline-none pb-3 text-[14px] font-[var(--font-body)] font-semibold"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                          />
                        </label>

                        <button
                          type="submit"
                          className="mt-12 w-full h-12 bg-[#b53d79] text-white text-[13px] font-[var(--font-body)] font-semibold hover:bg-[#c04a86] transition-colors"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <footer id="connect" className="relative bg-[#7a1b5c] text-white overflow-hidden min-h-[100svh]">
                <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 pt-14 lg:pt-16 pb-28 lg:pb-36">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.32fr_0.36fr_0.32fr] gap-12 lg:gap-16">
                    <div className="text-[12px] tracking-[0.16em] uppercase text-white/90 font-[var(--font-body)] font-semibold space-y-4">
                      <div>Licensed Real Estate Salesperson</div>
                      <div>New York City</div>
                      <div>(332) 201-8444</div>
                      <div>ALESSA@SERHANT.COM</div>
                      <div>LIC#: 10401333915</div>
                    </div>

                    <div className="text-[12px] tracking-[0.16em] uppercase text-white/90 font-[var(--font-body)] font-semibold">
                      <div className="space-y-5">
                        <a className="block hover:text-white transition-colors" href="#home">
                          Home
                        </a>
                        <a className="block hover:text-white transition-colors" href="#services">
                          Let&apos;s Connect
                        </a>
                        <div className="flex items-center justify-between gap-6">
                          <a className="hover:text-white transition-colors" href="#services">
                            Our Services
                          </a>
                          <span className="material-symbols-outlined text-[16px] leading-none text-white/70">
                            keyboard_arrow_down
                          </span>
                        </div>
                        <a className="block hover:text-white transition-colors" href="#construction">
                          Construction
                        </a>
                        <a className="block hover:text-white transition-colors" href="#events">
                          Events
                        </a>
                        <div className="flex items-center justify-between gap-6">
                          <a className="hover:text-white transition-colors" href="#gallery">
                            NYREM
                          </a>
                          <span className="material-symbols-outlined text-[16px] leading-none text-white/70">
                            keyboard_arrow_down
                          </span>
                        </div>
                        <a className="block hover:text-white transition-colors" href="#about">
                          About Alessa
                        </a>
                        <a className="block hover:text-white transition-colors" href="#connect">
                          Contact
                        </a>
                      </div>
                    </div>

                    <div className="text-[12px] tracking-[0.16em] uppercase text-white/90 font-[var(--font-body)] font-semibold">
                      <div className="space-y-5">
                        <a className="block hover:text-white transition-colors" href="#privacy">
                          Privacy Policy
                        </a>
                        <a className="block hover:text-white transition-colors" href="#shipping">
                          Shipping &amp; Return Policy
                        </a>
                        <a className="block hover:text-white transition-colors" href="#terms">
                          Terms &amp; Conditions
                        </a>
                        <div className="pt-6 text-white/80 normal-case tracking-[0.08em] text-[12px] font-semibold">
                          © 2025 By Alessa Aichinger
                        </div>
                        <a className="pt-4 inline-block underline underline-offset-4 hover:text-white transition-colors" href="#design">
                          Site Design
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-20 lg:mt-24 grid grid-cols-1 gap-12 lg:gap-16 items-start">
                    <div className="space-y-10">
                      <div className="flex flex-wrap items-center gap-5">
                        <a
                          className="h-12 w-12 rounded-full border border-white/40 text-white/85 hover:text-white hover:border-white/70 transition-colors inline-flex items-center justify-center"
                          href="https://www.instagram.com/realestate_withalessa"
                          rel="noreferrer"
                          target="_blank"
                          aria-label="Instagram"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                            <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A5.5 5.5 0 1 1 6.5 14 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14 3.5 3.5 0 0 0 12 10.5Zm5.25-3.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                          </svg>
                        </a>
                        <a
                          className="h-12 w-12 rounded-full border border-white/40 text-white/85 hover:text-white hover:border-white/70 transition-colors inline-flex items-center justify-center"
                          href="https://www.facebook.com/realestatewithalessa"
                          rel="noreferrer"
                          target="_blank"
                          aria-label="Facebook"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                            <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V12H8v3h2v6h3v-6h2.5l.5-3H13v-2.5c0-.55.45-1.5 1.5-1.5Z" />
                          </svg>
                        </a>
                        <a
                          className="h-12 w-12 rounded-full border border-white/40 text-white/85 hover:text-white hover:border-white/70 transition-colors inline-flex items-center justify-center"
                          href="https://www.linkedin.com/in/alessaaichinger/"
                          rel="noreferrer"
                          target="_blank"
                          aria-label="LinkedIn"
                        >
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                            <path d="M6.94 8.5H4V20h2.94V8.5Zm-1.47-4A1.72 1.72 0 1 0 7.2 6.22 1.72 1.72 0 0 0 5.47 4.5ZM20 13.1c0-3.1-1.65-4.55-3.85-4.55A3.36 3.36 0 0 0 13 10.16V8.5H10.06V20H13v-6.08c0-1.6.3-3.15 2.28-3.15 1.95 0 1.98 1.83 1.98 3.25V20H20Z" />
                          </svg>
                        </a>
                      </div>

                      <div className="max-w-[620px] text-[11px] leading-5 text-white/70 font-[var(--font-body)] font-semibold">
                        Alessa Aichinger is committed to providing an accessible website. If you have difficulty accessing
                        content, have difficulty viewing a file on the website, or notice any accessibility problems,
                        please contact us at 201.500.5431 to specify the nature of the accessibility issue and any
                        assistive technology you use. We strive to provide the content you need in the format you require.
                        <div className="mt-4">Copyright © 2024 Alessa Aichinger. All Rights Reserved.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute left-0 right-0 bottom-0 text-center text-white/[0.22] leading-none tracking-[0.14em] px-4">
                  <div className="text-[10vw] sm:text-[12vw] lg:text-[14vw] whitespace-normal break-words">ALESSA AICHINGER</div>
                </div>
              </footer>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
