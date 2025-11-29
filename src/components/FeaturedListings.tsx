function FeaturedListings() {
  return (
    <div id="listings" className="relative flex min-h-screen w-full flex-col bg-[#f8f7f6] dark:bg-background-dark group/design-root overflow-x-hidden scroll-mt-[80px]">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-none flex-1 px-4 sm:px-6 lg:px-8">
            <div className="text-center py-10 md:py-16">
              <h2 className="text-[32px] font-bold leading-tight tracking-tight text-stone-900 dark:text-stone-100 sm:text-4xl">Featured Listings</h2>
              <p className="text-base font-normal leading-normal text-stone-600 dark:text-stone-400 mt-2">
                A curated selection of the finest properties available for the discerning global clientele.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-background-dark/50 shadow-sm transition-shadow hover:shadow-lg">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Exterior view of a modern penthouse in New York City"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCY1JZ8xJdupihI9z4hdAOD2KX00FjgTmx3l_a-VNBud3ojRfNE5jiSMTiJg7Z1zNhWiH8y6kAyy8PJMpAPx9Is9F_oUcIi_EPyuD9gp2l3x0FAWqNFcvjEPAGS5DpbFmO_oXdP3PVXUhcvH7YVSd8DjSMB2FjZnKXbXG4KR5yXgaJVJ2_vrY1lIGJpk8o3fO_pVOALgFIRQ-MzTEwLlE72x9jqVr7PSuq98GI4E_DnDHJprPdITWeZ0HX5jnJo5J47J4GJRLBF0no")',
                  }}
                ></div>
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-normal text-stone-900 dark:text-stone-100">The Penthouse at 432 Park Avenue</h3>
                  <p className="text-base font-semibold leading-normal text-[#e3aa26] mt-1">$28,500,000</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">Manhattan, New York</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400 mt-3">4,250 sq ft • 4 Beds • 5 Baths</p>
                  <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#e3aa26]/10 text-[#e3aa26] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/20 transition-colors mt-5 dark:bg-[#e3aa26]/20 dark:hover:bg-[#e3aa26]/30">
                    <span className="truncate">View Property</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-background-dark/50 shadow-sm transition-shadow hover:shadow-lg">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Front view of a luxurious villa in Beverly Hills with a pool"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOliHj7vb2zG8Vn_X_3DOaqdtopJPV34Vl2FiGPWD0kyuQwJ5jZMWtnpyAl9EYkIyrb_h6n9gj0ByrIpxGIdCMzbDnGacbvEc-W9ZD-jMuJC-a8XbZFYT3aMWwVc12lVTYFGH32zriPEt0h6Ij9cJup07YkfsofC9ntip2K2EK1rZSuxjqMmZElflDTLyRQ7uYBt2L7LqrfQ16Vpg7F_E54TVZFNq1BgbdAaujErh_AgqbvvHVf8p2E1e4evgj9NmQLcwxx5g2Yyc")',
                  }}
                ></div>
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-normal text-stone-900 dark:text-stone-100">Villa Serenity, Beverly Hills</h3>
                  <p className="text-base font-semibold leading-normal text-[#e3aa26] mt-1">$35,000,000</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">Beverly Hills, California</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400 mt-3">8,500 sq ft • 6 Beds • 8 Baths</p>
                  <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#e3aa26]/10 text-[#e3aa26] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/20 transition-colors mt-5 dark:bg-[#e3aa26]/20 dark:hover:bg-[#e3aa26]/30">
                    <span className="truncate">View Property</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-background-dark/50 shadow-sm transition-shadow hover:shadow-lg">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="A modern estate overlooking the ocean in Malibu"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCBnyzdD6qlR3fuNyEJaReMqnb6pG73bA5iAZ70x3BLbxy-JHBmgTxdIn88uMvxqzevcr7XVjBl6ij-rL36hss5x0GuRdG6erHasfjRx1VKxd_zfBSgjYFLXjyQABX6HjYBp1WjpGLBhtSpw-etFU415CyRNY6wvC6tIxnO3_ylz-kGUDIzgylXa5HUYbk03DTEpe8XpFR1YA3EbsSJvcia22ms5iosGCVToBXXy2Bf2nWXsZGOVQEwoXqpuf5BS9fn99aMBLExA7Q")',
                  }}
                ></div>
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-normal text-stone-900 dark:text-stone-100">Oceanfront Estate, Malibu</h3>
                  <p className="text-base font-semibold leading-normal text-[#e3aa26] mt-1">$42,000,000</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">Malibu, California</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400 mt-3">7,000 sq ft • 5 Beds • 7 Baths</p>
                  <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#e3aa26]/10 text-[#e3aa26] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/20 transition-colors mt-5 dark:bg-[#e3aa26]/20 dark:hover:bg-[#e3aa26]/30">
                    <span className="truncate">View Property</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-background-dark/50 shadow-sm transition-shadow hover:shadow-lg">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Elegant manor on the shore of Lake Como, Italy"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVeaT0_mszNzxf33mSqmkNDjPaM6ZR4U6mR1rMsoIl-YulbZszCQVQi-tUgx40J9Q2UrKvBHcvfmziEGVctz_RNtEmbR6GdnW59TQGbVZ_OqsTvFokieblcCO4WoFNyLVi_wH6aA5HnSu5Qbb1DBnFFsczUUFrqiX-VSH6aoBD7CwOW0TEYAhoEow6xI3r5FXFwOAu63j3v6esyVTWUbiLCairx1CQinuFpHKhGiR2xm2iFKL_Wp3b-YgR4JWjK39cWkMWd6spfx0")',
                  }}
                ></div>
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-normal text-stone-900 dark:text-stone-100">Lakeside Manor, Lake Como</h3>
                  <p className="text-base font-semibold leading-normal text-[#e3aa26] mt-1">$25,000,000</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">Como, Italy</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400 mt-3">9,200 sq ft • 7 Beds • 9 Baths</p>
                  <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#e3aa26]/10 text-[#e3aa26] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/20 transition-colors mt-5 dark:bg-[#e3aa26]/20 dark:hover:bg-[#e3aa26]/30">
                    <span className="truncate">View Property</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-background-dark/50 shadow-sm transition-shadow hover:shadow-lg">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Snowy chalet in Aspen, Colorado, surrounded by pine trees"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzgEUCiTrL5BWnWA0dES97zD33O8PkMkoPocQ39y0c60ghZmN4Ykqwh7bqYFOWId0PBeN9nFoNb76grPYNwr0Z13DkspGal3eWGAA_Ty6Kpq_jXOi-x6ITUwlzHCc-3HA82CZzwA9o-7xBsZb8oC7W_qSNUXrBmDchBWYe46A37CYpiKB1pWYqO6C02bzZlnKwRmwB7JX_msqCKojD9iM8UuYs6DwrlR7yugrogLQT0dDmrd654KKVQon1FeZGpFEntx-KGRkO9I4")',
                  }}
                ></div>
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-normal text-stone-900 dark:text-stone-100">Chalet du Soleil, Aspen</h3>
                  <p className="text-base font-semibold leading-normal text-[#e3aa26] mt-1">$18,750,000</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">Aspen, Colorado</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400 mt-3">6,100 sq ft • 5 Beds • 6 Baths</p>
                  <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#e3aa26]/10 text-[#e3aa26] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/20 transition-colors mt-5 dark:bg-[#e3aa26]/20 dark:hover:bg-[#e3aa26]/30">
                    <span className="truncate">View Property</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-background-dark/50 shadow-sm transition-shadow hover:shadow-lg">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="A sleek modernist villa in Miami Beach with palm trees"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtMn-Qnn5nhyLkQqHQ_j_yI74H40PD1l-GI6-5xlLg8Wr6QyNU1vm0fhuMFcqp9IKaOwJ70WLn0fJoshQZMs1Ck_t4msCI61MiNHZ6m3GwrdQTSvi5TXKDIZH9vHBvyoG4aheMUv4yUQB1vsGaEOa9K3ZxxCDCPeMkfxYKAZ2Li2XLMbqpLtvlIWPkDD1E19qKWMLsYxt3Dqeg4ON1y2Cm22usMkR50qLKdaaRLLF8Jnoaxd1Zuu3oSTu5LDJdXizTC77j9As6hD4")',
                  }}
                ></div>
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-normal text-stone-900 dark:text-stone-100">Modernist Villa, Miami Beach</h3>
                  <p className="text-base font-semibold leading-normal text-[#e3aa26] mt-1">$22,500,000</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">Miami Beach, Florida</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400 mt-3">7,800 sq ft • 6 Beds • 7 Baths</p>
                  <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#e3aa26]/10 text-[#e3aa26] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/20 transition-colors mt-5 dark:bg-[#e3aa26]/20 dark:hover:bg-[#e3aa26]/30">
                    <span className="truncate">View Property</span>
                  </button>
                </div>
              </div>
              <div className="hidden flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-background-dark/50 shadow-sm transition-shadow hover:shadow-lg md:flex xl:hidden">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Sprawling country estate in the Hamptons with a large lawn"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA42Vr-cdbyzXSFmZ8bl1A6oBfw-thfEU17F5ctVStQlDhNoJnjqQhYyevzQOc3a_GtdLrF3z3ZZl_BidYYFJL0QnDhSJtr3Kfi2DmAJmIYoiq00EYVPuIYEnLgFYhhODB3X1P-Fp05gDVp2br1hd_xLs9umM_COLclpAzkmtQjfhH6MW3pJJ1xoHq7QIUR6P4QuzPLJVcTvwvw0CXxaTCArn9nm7J2o81KesV8RFhU1dBw6tkjj_Y2pTvKdU6j0zMo7RqnQS19Btg")',
                  }}
                ></div>
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-normal text-stone-900 dark:text-stone-100">Country Estate, The Hamptons</h3>
                  <p className="text-base font-semibold leading-normal text-[#e3aa26] mt-1">$19,995,000</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">Southampton, New York</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400 mt-3">10,000 sq ft • 8 Beds • 10 Baths</p>
                  <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#e3aa26]/10 text-[#e3aa26] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/20 transition-colors mt-5 dark:bg-[#e3aa26]/20 dark:hover:bg-[#e3aa26]/30">
                    <span className="truncate">View Property</span>
                  </button>
                </div>
              </div>
              <div className="hidden flex-col gap-4 overflow-hidden rounded-xl bg-white dark:bg-background-dark/50 shadow-sm transition-shadow hover:shadow-lg md:flex xl:hidden">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover"
                  data-alt="Urban rooftop oasis in SoHo with city views"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCY3nbKSZ1s8VW0EknxHHLBQu93FlRzw1ReucjspMl-zHUTP8Bm4jjN08BY4rTlxPCE9ZozsLCJfZwKpcurTnYnaEF517YjhDhL0_Q-mXhIwm4mU2IthUaasMAblKD4OE7yvLlv6mw95AL7xsgzuhWdZevEcxjaA82f7FnR8xaA54KmkfehdF2O2F6YiLQX7qwaITiDLPnUmIlF3-vsQbe-AAd46B9rxLLiXKdOxogZ9orT8sms0Os-Ut1APu2O0SFWiO0Kl4h_w2M")',
                  }}
                ></div>
                <div className="p-5 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold leading-normal text-stone-900 dark:text-stone-100">Rooftop Oasis, SoHo</h3>
                  <p className="text-base font-semibold leading-normal text-[#e3aa26] mt-1">$15,200,000</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400">Manhattan, New York</p>
                  <p className="text-sm font-normal leading-normal text-stone-500 dark:text-stone-400 mt-3">3,800 sq ft • 3 Beds • 4 Baths</p>
                  <button className="mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-[#e3aa26]/10 text-[#e3aa26] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e3aa26]/20 transition-colors mt-5 dark:bg-[#e3aa26]/20 dark:hover:bg-[#e3aa26]/30">
                    <span className="truncate">View Property</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex px-4 py-12 justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-stone-900 text-stone-100 text-base font-bold leading-normal tracking-[0.015em] hover:bg-stone-800 dark:bg-stone-200 dark:text-stone-900 dark:hover:bg-stone-300 transition-colors">
                <span className="truncate">View All Listings</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default FeaturedListings
