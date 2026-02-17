import { useEffect, useMemo, useRef, useState } from 'react'
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

function LandingPage() {
  const heroImageUrl =
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2400&q=80'
  const aboutLeftImageUrl =
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80'
  const aboutInlineImageUrl =
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
  const servicesImageUrl =
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80'
  const servicesSkylineUrl =
    'https://images.unsplash.com/photo-1529619768328-eafa65001f2f?auto=format&fit=crop&w=1200&q=80'
  const connectedPortraitUrl =
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=2400&q=80'
  const newsletterLeftImageUrl =
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=2400&q=80'
  const newsletterCenterImageUrl =
    'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1400&q=80'
  const affiliatesBackgroundUrl =
    'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2600&q=80'
  const networkingGallery = useMemo(
    () => [
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    ],
    [],
  )
  const affiliatesLogos = useMemo(
    () => [
      { label: 'Levain', src: 'https://cdn.simpleicons.org/levain/ffffff' },
      { label: 'NYREM', text: true },
      { label: 'SERHANT.', src: 'https://cdn.simpleicons.org/serhant/ffffff' },
      { label: 'RIVIAN', src: 'https://cdn.simpleicons.org/rivian/ffffff' },
      { label: 'WHITTY DESIGNS', text: true },
      { label: 'CIROC', src: 'https://cdn.simpleicons.org/ciroc/ffffff' },
      { label: 'BULOVA', src: 'https://cdn.simpleicons.org/bulova/ffffff' },
      { label: 'Coca-Cola', src: 'https://cdn.simpleicons.org/cocacola/ffffff' },
      { label: 'REBNY', src: 'https://cdn.simpleicons.org/rebny/ffffff' },
      { label: 'Perrier', src: 'https://cdn.simpleicons.org/perrier/ffffff' },
      { label: 'PIECE OF CAKE', text: true },
    ],
    [],
  )
  const claFoundationImageUrl =
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=80'
  const featuredVideos = useMemo<FeaturedVideo[]>(
    () => [
      {
        id: 'networking',
        label: 'NETWORKING',
        posterUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'cq-unscripted',
        label: 'CQ UNSCRIPTED',
        posterUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
      },
      {
        id: 'your-realtor',
        label: 'YOUR REALTOR',
        posterUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80',
      },
    ],
    [],
  )
  const featuredProperties = useMemo<FeaturedProperty[]>(
    () => [
      {
        id: '432-park-ave-69',
        address: '432 PARK AVE 69',
        details: '5 Bedrooms · 6 Full Baths · 2 Half Baths · 8,040 Sq Ft.',
        price: '55,000,000',
        imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2600&q=80',
      },
      {
        id: '436-west-20th-st',
        address: '436 WEST 20TH ST',
        details: '7 Bedrooms · 8 Full Baths · 3 Half Baths · 10,160 Sq Ft.',
        price: '$35,560,000',
        imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2600&q=80',
      },
      {
        id: '19-park-pl-ph',
        address: '19 PARK PL, PH',
        details: '3 Bedrooms · 3 Full Baths · 1 Half Bath · 2,672 Sq Ft.',
        price: '$10,995,000',
        imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2600&q=80',
      },
      {
        id: '2528-noyack-rd',
        address: '2528 NOYACK RD',
        details: '8 Bedrooms · 7 Full Baths · 2 Half Baths · 8,500 Sq Ft.',
        price: '$8,995,000',
        imageUrl: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=2600&q=80',
      },
      {
        id: '34-w-12th-street',
        address: '34 W 12TH STREET',
        details: '5 Bedrooms · 5 Full Baths · 3 Half Baths · 3,918 Sq Ft.',
        price: '$29,995,000',
        imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2600&q=80',
      },
      {
        id: '125-e-65th-street',
        address: '125 E 65TH STREET',
        details: '6 Bedrooms · 7 Full Baths · 4 Half Baths · 3,542 Sq Ft.',
        price: '$45,500,000',
        imageUrl: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=2600&q=80',
      },
      {
        id: '50-bridge-park-drive-ph2c',
        address: '50 BRIDGE PARK DRIVE, PH2C',
        details: '3 Bedrooms · 3 Full Baths · 1 Half Bath · 3,701 Sq Ft.',
        price: '$5,995,000',
        imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=2600&q=80',
      },
    ],
    [],
  )

  const featuredRowHeightPx = 54
  const featuredScrollRef = useRef<HTMLDivElement | null>(null)
  const networkingGalleryRef = useRef<HTMLDivElement | null>(null)
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

  const featuredTotalSteps = featuredProperties.length + 9
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

  return (
    <div className="curtis-theme bg-black text-white font-display min-h-screen">
      <main>
        <section id="home" className="relative w-full h-[100svh] min-h-[720px] overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              data-alt="Warm architectural interior lighting"
              style={{ backgroundImage: `url('${heroImageUrl}')` }}
            />
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/35" />
          </div>

          <Navbar mode="overlay" />

          <button
            className="fixed right-7 bottom-7 z-[60] h-14 w-14 rounded-full bg-[#2b4d67] shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex items-center justify-center hover:bg-[#345a76] transition-colors"
            type="button"
            aria-label="Chat"
          >
            <span className="material-symbols-outlined text-white text-[26px] leading-none">mode_comment</span>
          </button>

          <div className="absolute left-0 right-0 bottom-0 z-20 bg-[#0c2b43]/70 backdrop-blur-sm">
            <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start">
                <div className="text-center md:text-left">
                  <div className="text-[40px] md:text-[46px] leading-none tracking-wide text-white">
                    <span>10</span>
                    <span className="mx-2">+</span>
                    <span>Years</span>
                  </div>
                  <div className="mt-4 text-[10px] tracking-[0.34em] uppercase text-white/70 font-[var(--font-body)]">
                    Experience in the Real Estate
                    <br />
                    Industry
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-[40px] md:text-[46px] leading-none tracking-wide text-white">
                    <span>Over</span>
                    <span className="mx-3">200M</span>
                  </div>
                  <div className="mt-4 text-[10px] tracking-[0.34em] uppercase text-white/70 font-[var(--font-body)]">
                    In Total Sales:
                    <br />
                    New York
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <div className="text-[40px] md:text-[46px] leading-none tracking-wide text-white">
                    <span>2,000</span>
                    <span>+</span>
                    <span className="ml-3">Affiliates</span>
                  </div>
                  <div className="mt-4 text-[10px] tracking-[0.34em] uppercase text-white/70 font-[var(--font-body)]">
                    Trusted Industry
                    <br />
                    Professionals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f6f6f4] text-[#111]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr_0.95fr]">
            <div className="relative min-h-[520px] lg:min-h-[640px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-alt="Alessa seated in a bright, modern interior"
                style={{ backgroundImage: `url('${aboutLeftImageUrl}')` }}
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
                <div className="text-[10px] tracking-[0.34em] uppercase text-[#2b4d67] font-[var(--font-body)]">
                  About Us
                </div>
                <h2 className="mt-4 text-[44px] sm:text-[52px] leading-[0.95] tracking-wide">
                  MEET ALESSA
                </h2>
                <p className="mt-6 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)] max-w-[420px]">
                  Discover the difference with Alessa Aichinger, a Brooklyn native and seasoned real estate expert dedicated
                  to navigating the complexities of buying, selling, and renting in New York&apos;s dynamic property market.
                </p>

                <div className="mt-12">
                  <div
                    className="w-full max-w-[520px] aspect-[16/9] bg-cover bg-center shadow-[0_24px_55px_rgba(0,0,0,0.25)]"
                    data-alt="Alessa with clients by the pool"
                    style={{ backgroundImage: `url('${aboutInlineImageUrl}')` }}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-10 lg:px-14 py-14 lg:py-20 flex items-start">
              <div className="w-full max-w-[420px] lg:pt-20">
                <p className="text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                  With over nine years of experience, a strong financial background, and a commitment to transparency and
                  client interests, Alessa is your go-to guide for everything from first-time home buying to luxury rentals.
                  Connect with Alessa for unmatched expertise and a truly personalized real estate journey.
                </p>
                <div className="mt-10">
                  <a
                    className="inline-flex items-center justify-center gap-3 bg-[#0c2b43] text-white px-10 py-4 text-[11px] tracking-[0.26em] uppercase font-[var(--font-body)] hover:bg-[#10344f] transition-colors"
                    href="#connect"
                  >
                    <span>Read More</span>
                    <span aria-hidden className="text-[14px] leading-none">
                      +
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="properties" className="bg-[#f6f6f4] text-[#111]">
          <div className="max-w-[1500px] mx-auto px-6 lg:px-10 pt-16 lg:pt-20 pb-8">
            <div className="text-center">
              <div className="text-[10px] tracking-[0.34em] uppercase text-[#2b4d67] font-[var(--font-body)]">
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
              height: `${featuredTotalSteps * 100}vh`,
            }}
          >
            <div className="sticky top-0 h-[100svh] overflow-hidden relative">
              <div className="absolute inset-0 bg-[#f6f6f4]" />
              <div
                className="absolute inset-x-0 bottom-0 bg-cover bg-center"
                data-alt="Featured property"
                style={{
                  top: `${featuredBaseImageTopPx}px`,
                  backgroundImage: `url('${featuredProperties[featuredBaseImageIndex]?.imageUrl ?? featuredProperties[0]?.imageUrl}')`,
                }}
              />
              {featuredActiveIndex > 0 ? (
                <div
                  className="absolute inset-x-0 bottom-0 bg-cover bg-center will-change-transform"
                  data-alt="Featured property"
                  style={{
                    top: `${featuredOverlayImageTopPx}px`,
                    backgroundImage: `url('${featuredProperties[featuredOverlayImageIndex]?.imageUrl ?? featuredProperties[0]?.imageUrl}')`,
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

                          <div className="hidden md:block text-center text-[9px] tracking-[0.32em] uppercase text-black/70 font-[var(--font-body)]">
                            {property.details}
                          </div>

                          <div className="flex items-center gap-4 text-black whitespace-nowrap">
                            <div className="text-[18px] sm:text-[20px] tracking-[0.06em]">{property.price}</div>
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
              className="absolute inset-x-0 z-40 bg-[#f6f6f4]"
              style={{
                top: `${featuredServicesTopPx}px`,
              }}
            >
              <div id="services" className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] min-h-[100svh]">
                <div className="relative min-h-[520px] lg:min-h-[100svh] overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 w-[38%] bg-cover bg-left opacity-35"
                    data-alt="New York skyline"
                    style={{ backgroundImage: `url('${servicesSkylineUrl}')` }}
                  />
                  <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#f6f6f4] via-[#f6f6f4]/70 to-transparent" />
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    data-alt="Alessa in a modern interior"
                    style={{ backgroundImage: `url('${servicesImageUrl}')` }}
                  />
                </div>

                <div className="bg-white text-[#111] px-8 sm:px-12 lg:px-16 py-14 lg:py-16 flex items-center">
                  <div className="max-w-[520px]">
                    <div className="text-[10px] tracking-[0.34em] uppercase text-[#2b4d67] font-[var(--font-body)]">
                      Let&apos;s Connect
                    </div>
                    <h2 className="mt-6 text-[44px] sm:text-[54px] leading-[0.92] tracking-[0.04em]">
                      OUR SERVICES
                    </h2>

                    <div className="mt-12 space-y-10">
                      <div>
                        <div className="text-[#2b4d67] text-[20px] tracking-[0.08em]">
                          REAL ESTATE CONSULTATION
                        </div>
                        <p className="mt-4 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                          Expert guidance for new clients interested in buying, selling, and investing in real estate.
                        </p>
                      </div>

                      <div>
                        <div className="text-[#2b4d67] text-[20px] tracking-[0.08em]">
                          NETWORKING
                        </div>
                        <p className="mt-4 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                          A mentorship program designed to help professionals master networking and expand their industry
                          connections with the support of experienced leaders.
                        </p>
                      </div>

                      <div>
                        <div className="text-[#2b4d67] text-[20px] tracking-[0.08em]">
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
                        className="inline-flex items-center justify-center gap-5 bg-[#0c2b43] text-white px-10 py-4 text-[11px] tracking-[0.26em] uppercase font-[var(--font-body)] hover:bg-[#10344f] transition-colors"
                        href="#connect"
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
                    <div className="text-[10px] tracking-[0.34em] uppercase text-[#2b4d67] font-[var(--font-body)]">
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
                              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                              type="video/mp4"
                            />
                          </video>
                        </div>
                        <div className="mt-10 text-[18px] tracking-[0.08em] text-[#2b4d67] text-center">
                          {video.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div id="connected" className="bg-[#0c2b43] text-white">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-14 lg:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.42fr_0.58fr] min-h-[640px] lg:min-h-[82svh]">
                    <div className="relative flex items-center">
                      <div className="max-w-[420px]">
                        <h2 className="text-[38px] sm:text-[46px] leading-[1.03] tracking-[0.06em]">
                          TOP OF THE
                          <br />
                          CHARTS ON
                          <br />
                          AMAZON
                        </h2>

                        <div className="mt-7 text-[16px] sm:text-[17px] tracking-[0.08em] leading-[1.25] text-white/90">
                          CONNECTED:
                          <br />
                          THE ART OF BUILDING A
                          <br />
                          POWERFUL NETWORK
                        </div>

                        <p className="mt-8 text-[13px] leading-6 text-white/80 font-[var(--font-body)]">
                          If you want to unlock the full potential of your connections and transform them into a six-figure
                          business, Connected is your ultimate guide.
                        </p>

                        <p className="mt-6 text-[13px] leading-6 text-white/80 font-[var(--font-body)]">
                          Get your copy today for $24.99 and start building your path to success!
                        </p>

                        <div className="mt-12 flex flex-col gap-4 w-full max-w-[240px]">
                          <a
                            className="h-12 w-full inline-flex items-center justify-center gap-5 bg-white/10 border border-white/15 text-white text-[10px] tracking-[0.28em] uppercase font-[var(--font-body)] hover:bg-white/15 transition-colors"
                            href="#order"
                          >
                            <span>Order Now</span>
                            <span aria-hidden className="text-[14px] leading-none">
                              +
                            </span>
                          </a>
                          <a
                            className="h-12 w-full inline-flex items-center justify-center gap-5 bg-white/10 border border-white/15 text-white text-[10px] tracking-[0.28em] uppercase font-[var(--font-body)] hover:bg-white/15 transition-colors"
                            href="#learn"
                          >
                            <span>Learn More</span>
                            <span aria-hidden className="text-[14px] leading-none">
                              +
                            </span>
                          </a>
                        </div>
                      </div>

                      <div className="hidden lg:block pointer-events-none absolute left-[6%] bottom-[-28px] text-[96px] tracking-[0.16em] text-white/[0.06] leading-none">
                        AICHINGER
                      </div>
                    </div>

                    <div className="relative mt-12 lg:mt-0 overflow-hidden bg-[#0c2b43]">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        data-alt="Alessa holding book"
                        style={{ backgroundImage: `url('${connectedPortraitUrl}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0c2b43]/15 via-transparent to-[#0c2b43]/10" />
                      <div className="absolute inset-y-0 right-0 w-[58%] bg-white" />
                      <div className="absolute top-10 right-12 text-[10px] tracking-[0.34em] uppercase text-black/60 font-[var(--font-body)]">
                        ALESSA AICHINGER
                      </div>
                      <div className="absolute right-0 left-[42%] top-1/2 -translate-y-1/2 px-10">
                        <div className="relative">
                          <div className="h-[78px] bg-[#0c2b43] flex items-center justify-center">
                            <div className="text-white text-[34px] tracking-[0.22em]">CONNEC</div>
                            <div className="mx-2 h-[52px] w-px bg-white/70" />
                            <div className="text-white text-[34px] tracking-[0.22em]">TED</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-10 right-12 text-[11px] tracking-[0.34em] uppercase text-black/45 font-[var(--font-body)]">
                        THE ART OF BUILDING A POWERFUL NETWORK
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="opportunities" className="bg-[#f6f6f4] text-[#111]">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-14 lg:gap-16 items-center">
                    <div className="max-w-[420px]">
                      <div className="text-[10px] tracking-[0.34em] uppercase text-[#2b4d67] font-[var(--font-body)]">
                        NETWORKING OPPORTUNITIES
                      </div>
                      <h2 className="mt-8 text-[54px] sm:text-[66px] leading-[0.95] tracking-[0.06em]">
                        CONNECT.
                        <br />
                        LEARN.
                        <br />
                        ACTIVATE.
                      </h2>
                      <div className="mt-12">
                        <a
                          className="inline-flex items-center justify-center gap-5 bg-[#0c2b43] text-white px-10 py-4 text-[11px] tracking-[0.26em] uppercase font-[var(--font-body)] hover:bg-[#10344f] transition-colors"
                          href="#connect"
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
                          <div
                            key={`${url}-${index}`}
                            className="snap-start shrink-0 w-[78%] sm:w-[46%] lg:w-[30%] aspect-square bg-cover bg-center"
                            data-alt="Networking moment"
                            style={{ backgroundImage: `url('${url}')` }}
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

              <div id="cla" className="bg-[#f6f6f4] text-[#111]">
                <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-14 lg:gap-16 items-center min-h-[640px] lg:min-h-[82svh]">
                    <div className="max-w-[460px]">
                      <div className="text-[10px] tracking-[0.34em] uppercase text-[#2b4d67] font-[var(--font-body)]">
                        GIVING BACK TO COMMUNITIES
                      </div>
                      <h2 className="mt-8 text-[42px] sm:text-[66px] leading-[0.95] tracking-[0.04em] break-words hyphens-auto">
                        THE CLA
                        <br />
                        FOUNDATION
                      </h2>

                      <p className="mt-10 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                        At CLA Foundation, we&apos;re dedicated to empowering individuals of all ages to connect, learn, and
                        activate their potential. Whether you&apos;re looking to build confidence, make meaningful connections,
                        or access opportunities, the CLA Foundation is here to support your journey. Discover how we can
                        help you unlock new possibilities.
                      </p>

                      <div className="mt-12">
                        <a
                          className="inline-flex items-center justify-center gap-5 bg-[#0c2b43] text-white px-10 py-4 text-[11px] tracking-[0.26em] uppercase font-[var(--font-body)] hover:bg-[#10344f] transition-colors"
                          href="#connect"
                        >
                          <span>Learn More</span>
                          <span aria-hidden className="text-[14px] leading-none">
                            +
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="relative overflow-hidden min-h-[520px] lg:min-h-[82svh]">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        data-alt="CLA Foundation"
                        style={{ backgroundImage: `url('${claFoundationImageUrl}')` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div id="affiliates" className="relative min-h-[100svh] overflow-hidden text-white">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Affiliates background"
                  style={{ backgroundImage: `url('${affiliatesBackgroundUrl}')` }}
                />
                <div className="absolute inset-0 bg-black/55" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/55" />

                <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 py-24 lg:py-28">
                  <div className="text-center">
                    <div className="text-[10px] tracking-[0.34em] uppercase text-white/85 font-[var(--font-body)]">
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
                              <img src={logo.src} alt={logo.label} className="h-8 sm:h-9 w-auto opacity-95" />
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
                              <img src={logo.src} alt={logo.label} className="h-8 sm:h-9 w-auto opacity-95" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="newsletter" className="bg-[#0c2b43] text-white">
                <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.22fr_0.4fr] min-h-[100svh]">
                  <div className="relative min-h-[520px] lg:min-h-[100svh] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      data-alt="Alessa in a modern interior"
                      style={{ backgroundImage: `url('${newsletterLeftImageUrl}')` }}
                    />
                  </div>

                  <div className="relative min-h-[360px] lg:min-h-[100svh] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      data-alt="New York city"
                      style={{ backgroundImage: `url('${newsletterCenterImageUrl}')` }}
                    />
                  </div>

                  <div className="px-8 sm:px-12 lg:px-16 py-14 lg:py-16 flex items-center">
                    <div className="w-full max-w-[560px]">
                      <div className="text-[10px] tracking-[0.34em] uppercase text-white/85 font-[var(--font-body)]">
                        Subscribe Now
                      </div>
                      <h2 className="mt-8 text-[44px] sm:text-[54px] leading-[0.95] tracking-[0.06em]">
                        JOIN 40k+ PEOPLE
                        <br />
                        WHO LOVE OUR
                        <br />
                        NEWSLETTER
                      </h2>

                      <p className="mt-10 text-[12px] leading-6 text-white/80 font-[var(--font-body)] max-w-[520px]">
                        Stay ahead in the real estate game! Subscribe to our mailing list to receive the latest market
                        updates, exclusive alerts on new listings, upcoming events, foundation news, and more—directly to
                        your inbox. Don&apos;t miss out!
                      </p>

                      <form className="mt-16" onSubmit={(event) => event.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                          <label className="block">
                            <div className="text-[10px] tracking-[0.18em] text-white/70 font-[var(--font-body)]">
                              First name
                            </div>
                            <input
                              className="mt-4 w-full bg-transparent border-b border-white/35 focus:border-white/70 outline-none pb-3 text-[13px] font-[var(--font-body)]"
                              type="text"
                              name="firstName"
                              autoComplete="given-name"
                            />
                          </label>

                          <label className="block">
                            <div className="text-[10px] tracking-[0.18em] text-white/70 font-[var(--font-body)]">
                              Last name
                            </div>
                            <input
                              className="mt-4 w-full bg-transparent border-b border-white/35 focus:border-white/70 outline-none pb-3 text-[13px] font-[var(--font-body)]"
                              type="text"
                              name="lastName"
                              autoComplete="family-name"
                            />
                          </label>
                        </div>

                        <label className="block mt-10">
                          <div className="text-[10px] tracking-[0.18em] text-white/70 font-[var(--font-body)]">
                            Email *
                          </div>
                          <input
                            className="mt-4 w-full bg-transparent border-b border-white/35 focus:border-white/70 outline-none pb-3 text-[13px] font-[var(--font-body)]"
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                          />
                        </label>

                        <button
                          type="submit"
                          className="mt-12 w-full h-12 bg-[#5f8197] text-white text-[12px] font-[var(--font-body)] hover:bg-[#6a8aa0] transition-colors"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <footer id="footer" className="relative bg-[#0c2b43] text-white overflow-hidden min-h-[100svh]">
                <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 pt-14 lg:pt-16 pb-28 lg:pb-36">
                  <div className="grid grid-cols-1 lg:grid-cols-[0.32fr_0.36fr_0.32fr] gap-12 lg:gap-16">
                    <div className="text-[10px] tracking-[0.16em] uppercase text-white/90 font-[var(--font-body)] space-y-7">
                      <div>
                        <div>155 WATER STREET</div>
                        <div>BROOKLYN, NY, 11201</div>
                      </div>
                      <div>347.385.1105</div>
                      <div>ALESSA@SERHANT.COM</div>
                      <div>LIC#: 10301222501</div>
                    </div>

                    <div className="text-[10px] tracking-[0.16em] uppercase text-white/90 font-[var(--font-body)]">
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
                        <a className="block hover:text-white transition-colors" href="#connected">
                          My Book
                        </a>
                        <a className="block hover:text-white transition-colors" href="#events">
                          Events
                        </a>
                        <div className="flex items-center justify-between gap-6">
                          <a className="hover:text-white transition-colors" href="#opportunities">
                            NYREM
                          </a>
                          <span className="material-symbols-outlined text-[16px] leading-none text-white/70">
                            keyboard_arrow_down
                          </span>
                        </div>
                        <a className="block hover:text-white transition-colors" href="#cla">
                          CLA Foundation
                        </a>
                        <a className="block hover:text-white transition-colors" href="#about">
                          About Alessa
                        </a>
                        <a className="block hover:text-white transition-colors" href="#connect">
                          Contact
                        </a>
                      </div>
                    </div>

                    <div className="text-[10px] tracking-[0.16em] uppercase text-white/90 font-[var(--font-body)]">
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
                        <div className="pt-6 text-white/80 normal-case tracking-[0.08em] text-[10px]">
                          © 2025 By Alessa Aichinger
                        </div>
                        <a className="pt-4 inline-block underline underline-offset-4 hover:text-white transition-colors" href="#design">
                          Site Design
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-20 lg:mt-24 min-h-[420px] lg:min-h-[520px]">
                    <div className="lg:absolute lg:left-0 lg:top-0 max-w-[720px]">
                      <div className="text-[30px] sm:text-[34px] lg:text-[40px] leading-[0.98] tracking-[0.08em]">
                        INSTAGRAM · LINKEDIN
                        <br />
                        X · FACEBOOK · YOUTUBE
                        <br />
                        TIKTOK
                      </div>
                    </div>

                    <div className="mt-14 lg:mt-0 lg:absolute lg:right-0 lg:bottom-10 flex flex-col items-end gap-8">
                      <div className="text-[40px] sm:text-[46px] lg:text-[52px] tracking-[0.14em] text-white/95">
                        SERHANT.
                      </div>
                      <div className="flex items-end gap-9">
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-14 w-14 border border-white/60 flex items-center justify-center text-[10px] tracking-[0.18em]">
                            EH
                          </div>
                          <div className="text-[8px] tracking-[0.22em] text-white/70 font-[var(--font-body)] uppercase text-center">
                            Equal Housing
                            <br />
                            Opportunity
                          </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="h-14 w-14 border border-white/60 flex items-center justify-center text-[20px] tracking-[0.12em]">
                            R
                          </div>
                          <div className="text-[8px] tracking-[0.22em] text-white/70 font-[var(--font-body)] uppercase text-center">
                            Realtor
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-14 lg:mt-0 lg:absolute lg:left-0 lg:bottom-0 max-w-[620px] text-[9px] leading-5 text-white/70 font-[var(--font-body)]">
                      Alessa Aichinger is committed to providing an accessible website. If you have difficulty accessing
                      content, have difficulty viewing a file on the website, or notice any accessibility problems, please
                      contact us at 201.500.5431 to specify the nature of the accessibility issue and any assistive
                      technology you use. We strive to provide the content you need in the format you require.
                      <div className="mt-4">Copyright © 2024 Alessa Aichinger. All Rights Reserved.</div>
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute left-0 right-0 bottom-[-140px] text-center text-white/[0.22] leading-none tracking-[0.14em]">
                  <div className="text-[11vw] sm:text-[14vw] lg:text-[16vw] whitespace-nowrap">ALESSA AICHINGER</div>
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
