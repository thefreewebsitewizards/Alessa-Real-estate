function Hero() {
  return (
    <div id="home" className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden scroll-mt-[80px]">
      <div className="layout-container flex h/full grow flex-col">
        <header className="fixed top-0 left-0 right-0 z-50 font-display bg-black/30 backdrop-blur-sm">
          <div className="mx-auto max-w-none px-6 sm:px-10 lg:px-12">
            <div className="flex items-center justify-between whitespace-nowrap  py-5">
              <div className="flex items-center gap-3 text-white">
                {/* <img src="/Alessa.jpg" alt="Alessa logo" className="h-14 w-14 md:h-16 md:w-16 object-contain shrink-0 grayscale invert mix-blend-screen" /> */}
                <span className="text-xl font-bold leading-tight tracking-[-0.015em]">Alessa Aichinger</span>
              </div>
              <div className="hidden md:flex flex-1 justify-end gap-8">
                <nav className="flex items-center gap-9">
                  <a className="text-sm font-medium leading-normal text-white" href="#home">Home</a>
                  <a className="text-sm font-medium leading-normal text-white" href="#about">About</a>
                  <a className="text-sm font-medium leading-normal text-white" href="#listings">Listings</a>
                  <a className="text-sm font-medium leading-normal text-white" href="#services">Services</a>
                  <a className="text-sm font-medium leading-normal text-white" href="#reviews">Reviews</a>
                  <a className="text-sm font-medium leading-normal text-white" href="#media">Media</a>
                </nav>
                <div className="flex gap-2">
                  <a href="#contact" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 backdrop-blur-sm text-white text-sm font-bold leading-normal tracking-[0.015em] border border-white/20 hover:bg-white/20 transition-colors">
                    <span className="truncate">Book a Consultation</span>
                  </a>
                </div>
              </div>
              <button className="md:hidden text-white">
                <span className="material-symbols-outlined !text-3xl">menu</span>
              </button>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          <div
            className="relative flex min-h-screen w/full flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'linear-gradient(75deg, rgba(42, 42, 42, 0.7) 0%, rgba(100, 80, 70, 0.3) 100%), url("/Alessa-hero-section.jpg")',
            }}
          >
            <div className="w-full max-w-none px-6 sm:px-10 lg:px-12 pt-[70px]">
              <div className="flex flex-col gap-8 text-left text-white max-w-2xl">
                <div className="flex flex-col gap-4">
                  <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">Alessa Aichinger</h1>
                  <p className="text-lg font-medium text-champagne/90 md:text-xl">International Luxury Real Estate</p>
                  <h2 className="text-base font-normal leading-normal text-white/90">Luxury Properties • Global Clientele • Multilingual Expertise</h2>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-soft-black text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
                    <span className="truncate">View Listings</span>
                  </button>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent text-white text-base font-bold leading-normal tracking-[0.015em] border border-white/50 hover:bg-white/10 transition-colors">
                    <span className="truncate">Book a Consultation</span>
                  </button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <a className="text-white/80 hover:text-white transition-colors" href="#" dangerouslySetInnerHTML={{
                    __html:
                      '<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c-4.09.023-4.56 1.83-4.638 4.593-.075 2.668.26 3.118.74 3.593.444.444.885.586 1.488.586.72 0 1.34-.146 2.083-.732.553-.435.912-.99 1.09-1.633.195-.72.03-1.5-.47-2.083-.5-.585-1.28-.903-2.083-.903-.78 0-1.428.31-1.928.81-.12.12-.228.24-.324.378-.28.39-.425.82-.425 1.3 0 .42.14.78.42 1.08.28.3.64.44 1.08.44.48 0 .84-.14 1.08-.42.28-.28.42-.64.42-1.08 0-.46-.14-.82-.42-1.08-.28-.3-.64-.46-1.08-.46-.36 0-.66.1-.9.3-.6.48-1.005 1.38-1.005 2.58 0 1.2.405 2.1.99 2.58.24.18.54.3.9.3.48 0 .84-.14 1.08-.42.28-.28.42-.64.42-1.08 0-.46-.14-.82-.42-1.08-.28-.3-.64-.46-1.08-.46-.42 0-.78.14-1.08.42-.3.28-.44.64-.44 1.08 0 .48.14.84.42 1.08.28.28.64.42 1.08.42.48 0 .84-.14 1.08-.42.28-.28.42-.64.42-1.08 0-.42-.14-.78-.42-1.08-.28-.28-.64-.42-1.08-.42-.36 0-.66.1-.9.3-.6.48-1.005 1.38-1.005 2.58 0 1.2.405 2.1.99 2.58.6.48 1.485.72 2.655.72 1.17 0 2.07-.24 2.655-.72.585-.48.99-1.38.99-2.58 0-1.2-.405-2.1-.99-2.58-.24-.2-.54-.3-.9-.3-.48 0-.84.14-1.08.42-.28.28-.42.64-.42 1.08 0 .48.14.84.42 1.08.28.28.64.42 1.08.42h.015c1.17.002 2.055.242 2.64.722.585.48.975 1.38.975 2.58 0 1.2-.39 2.1-.975 2.58-.585.48-1.47.72-2.64.72-.06 0-.12 0-.18-.002-1.185-.015-2.07-.255-2.655-.735-.585-.48-.99-1.38-.99-2.58 0-1.2.405-2.1.99-2.58.24-.2.54-.3.9-.3.48 0 .84.14 1.08.42.28.28.42.64.42 1.08 0 .48.14.84.42 1.08.28.28.64.42 1.08.42.48 0 .84-.14 1.08-.42.28-.28.42-.64.42-1.08 0-.42-.14-.78-.42-1.08-.28-.28-.64-.42-1.08-.42-.36 0-.66.1-.9.3-.6.48-1.005 1.38-1.005 2.58 0 1.2.405 2.1.99 2.58.585.48 1.47.72 2.64.72 1.17 0 2.055-.24 2.64-.72 .585-.48 .975-1.38 .975-2.58 0-1.2-.39-2.1-.975-2.58-.585-.48-1.47-.72-2.64-.72-.045 0-.09 0-.135.002-1.185.015-2.07.255-2.655.735-.585.48-.99 1.38-.99 2.58 0 1.2.405 2.1.99 2.58.585.48 1.47.72 2.64.72 1.17 0 2.055-.24 2.64-.72 .585-.48 .975-1.38 .975-2.58 0-1.2-.39-2.1-.975-2.58-.585-.48-1.47-.72-2.64-.72-1.17 0-2.055 .24-2.64 .72-.585 .48-.975 1.38-.975 2.58 0 .6 .135 1.14 .405 1.62 .27 .48 .645 .9 1.125 1.26 .48 .36 .99 .66 1.53 .9 .54 .24 1.095 .39 1.665 .48 .57 .09 1.155 .135 1.755 .135 2.625 0 4.725-1.065 6.3-3.195 1.575-2.13 2.37-4.74 2.37-7.83 0-2.16-.48-4.005-1.425-5.535-1-1.53-2.37-2.7-4.125-3.51-1.755-.81-3.75-1.215-6-1.215Z" fill-rule="evenodd"></path></svg>',
                  }} />
                  <a className="text-white/80 hover:text-white transition-colors" href="#" dangerouslySetInnerHTML={{
                    __html:
                      '<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>',
                  }} />
                  <a className="text-white/80 hover:text-white transition-colors" href="#" dangerouslySetInnerHTML={{
                    __html:
                      '<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.125 21.32c-3.125-2.228-5.875-6.669-5.875-8.289 0-2.613 2.625-2.953 4.25-1.513.5.456 1.125 1.584 1.125 2.664 0 .288-.088.58-.25.86-2.063 2.052.125 5.289 2.5 5.289.5 0 .875-.413 1.125-.75.25-.338.375-.625.375-1.041 0-.913-.875-1.425-1.375-1.838s-1.375-1.15-1.375-2.725c0-2.313 1.5-4.163 4.013-4.163 2.875 0 4.125 2.113 4.125 4.888 0 4.025-2.875 6.875-6.25 6.875-.875 0-1.625-.463-1.875-.851z"></path></svg>',
                  }} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Hero
