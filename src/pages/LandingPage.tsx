import { useEffect, useMemo, useRef, useState } from 'react'
import Navbar from '../components/Navbar'

type FeaturedProperty = {
  id: string
  address: string
  details: string
  price: string
  imageUrl: string
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

  const featuredTotalSteps = featuredProperties.length + 2
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
                data-alt="Curtis seated in a bright, modern interior"
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
                  MEET CURTIS
                </h2>
                <p className="mt-6 text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)] max-w-[420px]">
                  Discover the difference with Curtis Quow, a Brooklyn native and seasoned real estate expert dedicated to
                  navigating the complexities of buying, selling, and renting in New York&apos;s dynamic property market.
                </p>

                <div className="mt-12">
                  <div
                    className="w-full max-w-[520px] aspect-[16/9] bg-cover bg-center shadow-[0_24px_55px_rgba(0,0,0,0.25)]"
                    data-alt="Curtis with clients by the pool"
                    style={{ backgroundImage: `url('${aboutInlineImageUrl}')` }}
                  />
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-10 lg:px-14 py-14 lg:py-20 flex items-start">
              <div className="w-full max-w-[420px] lg:pt-20">
                <p className="text-[13px] leading-6 text-[#3a3a3a] font-[var(--font-body)]">
                  With over nine years of experience, a strong financial background, and a commitment to transparency and
                  client interests, Curtis is your go-to guide for everything from first-time home buying to luxury
                  rentals. Connect with Curtis for unmatched expertise and a truly personalized real estate journey.
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
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] min-h-[100svh]">
                <div className="relative min-h-[520px] lg:min-h-[100svh] overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 w-[38%] bg-cover bg-left opacity-35"
                    data-alt="New York skyline"
                    style={{ backgroundImage: `url('${servicesSkylineUrl}')` }}
                  />
                  <div className="absolute inset-y-0 left-0 w-[38%] bg-gradient-to-r from-[#f6f6f4] via-[#f6f6f4]/70 to-transparent" />
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    data-alt="Curtis in a modern interior"
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
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage
