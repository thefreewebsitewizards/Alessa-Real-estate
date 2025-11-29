function Testimonials() {
  return (
    <div id="reviews" className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8f7f6] dark:bg-[#211c11] group/design-root overflow-x-hidden scroll-mt-[80px]">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-10 sm:py-16 md:py-20">
          <div className="layout-content-container flex flex-col max-w-none flex-1">
            <div className="px-4 pb-3 pt-5 text-center">
              <h2 className="text-[#1b170e] dark:text-[#f8f7f6] text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em]">A Legacy of Trust</h2>
            </div>
            <div className="relative group">
              <div className="flex flex-col md:flex-row md:overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:snap-x md:snap-mandatory py-4">
                <div className="flex flex-col md:flex-row items-stretch p-4 gap-4 sm:gap-6 w-full">
                  <div className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-[#ffffff] dark:bg-[#2a2418] p-6 sm:p-8 w-full md:w-auto md:min-w-[45%] snap-center">
                    <span className="material-symbols-outlined text-[#e3aa26] text-4xl">format_quote</span>
                    <div>
                      <p className="text-[#1b170e] dark:text-[#f8f7f6] text-base font-medium leading-relaxed">"Alessa's expertise and dedication were unparalleled. She made our international move seamless and stress-free."</p>
                      <p className="text-[#96814f] dark:text-[#a1916a] text-sm font-normal leading-normal mt-4">Anna &amp; Markus L., Vienna</p>
                    </div>
                  </div>
                  <div className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-[#ffffff] dark:bg-[#2a2418] p-6 sm:p-8 w-full md:w-auto md:min-w-[45%] snap-center">
                    <span className="material-symbols-outlined text-[#e3aa26] text-4xl">format_quote</span>
                    <div>
                      <p className="text-[#1b170e] dark:text-[#f8f7f6] text-base font-medium leading-relaxed">"From the initial consultation to the final closing, the process was handled with the utmost professionalism and elegance."</p>
                      <p className="text-[#96814f] dark:text-[#a1916a] text-sm font-normal leading-normal mt-4">Jean-Pierre Dubois, Paris</p>
                    </div>
                  </div>
                  <div className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-[#ffffff] dark:bg-[#2a2418] p-6 sm:p-8 w-full md:w-auto md:min-w-[45%] snap-center">
                    <span className="material-symbols-outlined text-[#e3aa26] text-4xl">format_quote</span>
                    <div>
                      <p className="text-[#1b170e] dark:text-[#f8f7f6] text-base font-medium leading-relaxed">"We were incredibly impressed with the market knowledge and the speed at which our property was sold. Truly a first-class experience."</p>
                      <p className="text-[#96814f] dark:text-[#a1916a] text-sm font-normal leading-normal mt-4">The Chen Family, Hong Kong</p>
                    </div>
                  </div>
                  <div className="flex h-full flex-1 flex-col gap-6 rounded-xl bg-[#ffffff] dark:bg-[#2a2418] p-6 sm:p-8 w-full md:w-auto md:min-w-[45%] snap-center">
                    <span className="material-symbols-outlined text-[#e3aa26] text-4xl">format_quote</span>
                    <div>
                      <p className="text-[#1b170e] dark:text-[#f8f7f6] text-base font-medium leading-relaxed">"Her attention to detail and personalized approach made all the difference. We felt valued and understood throughout the entire journey."</p>
                      <p className="text-[#96814f] dark:text-[#a1916a] text-sm font-normal leading-normal mt-4">Sofia &amp; Leo Rossi, Milan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-6 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#e3aa26]/20 dark:bg-[#e3aa26]/30 text-[#1b170e] dark:text-[#f8f7f6] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/30 dark:hover:bg-[#e3aa26]/40 transition-colors duration-300">
                <span className="truncate">Read More on Google</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-4 p-4 mt-8 sm:mt-12">
              <div className="flex min-w-[158px] flex-1 flex-col items-center text-center gap-2 rounded-xl p-6 bg-[#f8f7f6] dark:bg-[#211c11] border border-[#e6e0d0] dark:border-[#4d422d]">
                <p className="text-[#e3aa26] tracking-light text-3xl font-bold leading-tight">Member</p>
                <p className="text-[#96814f] dark:text-[#a1916a] text-sm font-medium leading-normal">Luxury Portfolio</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col items-center text-center gap-2 rounded-xl p-6 bg-[#f8f7f6] dark:bg-[#211c11] border border-[#e6e0d0] dark:border-[#4d422d]">
                <p className="text-[#e3aa26] tracking-light text-3xl font-bold leading-tight">15</p>
                <p className="text-[#96814f] dark:text-[#a1916a] text-sm font-medium leading-normal">Average Days on Market</p>
              </div>
              <div className="flex min-w-[158px] flex-1 flex-col items-center text-center gap-2 rounded-xl p-6 bg-[#f8f7f6] dark:bg-[#211c11] border border-[#e6e0d0] dark:border-[#4d422d]">
                <p className="text-[#e3aa26] tracking-light text-3xl font-bold leading-tight">5+</p>
                <p className="text-[#96814f] dark:text-[#a1916a] text-sm font-medium leading-normal">Multilingual Transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
