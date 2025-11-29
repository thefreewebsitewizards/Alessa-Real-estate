function PodcastMedia() {
  return (
    <div id="media" className="bg-[#fbfbf8] dark:bg-[#1b170e] font-display text-[#1b170e] dark:text-[#fbfbf8] scroll-mt-[80px]">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="flex h-full grow flex-col">
          <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 py-5">
            <main className="flex-1">
              <div className="mt-8 px-4 py-3 sm:px-0">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-[300px] md:min-h-[400px]"
                  data-alt="Abstract soft-focus background with bokeh lights in gold and champagne tones"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("/Media and links cover photo.jpg")',
                  }}
                >
                  <div className="p-6 md:p-10">
                    <h1 className="text-white text-4xl font-bold leading-tight tracking-tight md:text-5xl">Media &amp; Insights</h1>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-4">
                <div className="flex flex-col items-stretch justify-start rounded-xl bg-white/50 dark:bg-black/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-sm @container lg:flex-row lg:items-start">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none lg:w-2/5"
                    data-alt="Professional studio setup with microphone and headphones for podcast recording"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSTMX4qwFPp4NYNZdtSg3TLl3FNZeqVM62Eo58E8sQAmn4roE8bEIVvX8PqfogLFyWIfuScz4PVv6CiyNO1t048QvOsKVfMzWpamiLsGj1rzGxIH-whAd9dxEynUsCTN36epw33I9zSUtavHtBao24Ws4uiMW8bCvkLw3qGauPpkVeiFDjBVoiCwG5nH3EP5fa7XB1slbltaRfCSvO1BRYXTvE83hBYZ9L-g5mSBCdJis7yRZFq6xgI75c3Vxll9MXeBqiXCSEB3E")',
                    }}
                  />
                  <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-3 p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-[#96814f] dark:text-[#a19172]">Latest Podcast Episode</p>
                    <p className="text-2xl font-bold leading-tight tracking-tight text-[#1b170e] dark:text-[#fbfbf8]">Navigating the Global Luxury Market: Trends and Predictions</p>
                    <div className="flex flex-col gap-4">
                      <p className="text-base font-normal leading-relaxed text-[#96814f] dark:text-[#a19172]">
                        Join Alessa as she discusses the latest trends in high-end real estate, offering key insights for discerning investors and homeowners in today' s dynamic global market.
                      </p>
                      <p className="text-sm font-normal text-[#96814f] dark:text-[#a19172]">Published on: October 26, 2023</p>
                    </div>
                    <div className="mt-4 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#e3aa26] text-[#1b170e] text-base font-bold leading-normal gap-2">
                        <span className="material-symbols-outlined">play_circle</span>
                        <span className="truncate">Listen on YouTube</span>
                      </button>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-[#e3aa26] dark:text-[#e3aa26] text-base font-bold leading-normal border-2 border-[#e3aa26]">
                        <span className="truncate">Explore All Episodes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="px-4 pb-3 pt-12 text-2xl font-bold leading-tight tracking-tight text-[#1b170e] dark:text-[#fbfbf8] md:text-3xl">More Insights</h2>
              <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    data-alt="Elegantly staged living room with modern furniture and large windows"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4a-vrNYT6988hhqgEKqPko9sNZqlr6ML3E9159_AK0gll-KksXpVgjvUiuAZPc2i_d2xa4Q3YBNJ9lFn-maPXArNU_MyEPdcMnAS6Rsq5kX15SCig6LJySvcp2SnqZr2NchfuBYQnzkOqIMtGWAuytM9sF1vaNmi6zvcfcYR3FKyoiJw2ndaqvED4AmysE7fSpyS6k3K3cq2MUrEsV3tW1lPug20zSAxqWIrlP2Chq2DsuVFXpArOLaQMH90liANXfJ4JNxhDMN8")',
                    }}
                  />
                  <div className="flex flex-col gap-1 px-2">
                    <p className="text-lg font-bold leading-normal text-[#1b170e] dark:text-[#fbfbf8]">The Art of Staging a Luxury Property</p>
                    <p className="text-sm font-normal leading-normal text-[#96814f] dark:text-[#a19172]">Discover the secrets to presenting a home that captivates sophisticated buyers.</p>
                    <a className="mt-1 text-sm font-bold text-[#e3aa26] dark:text-[#e3aa26]" href="#">Read More →</a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    data-alt="Rolling hills of vineyards in the Champagne region of France under a sunny sky"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChUQVf-y3xixbR6kIS9IEfeyJkQeNMQUsMmrtc9mOj9mJy8kPA5rXW0XLezn6HhLxsZRyQk3-T8G-m7vXHajzJW_wKkwE33_empdNRJiTsvc3697BCBsGsFUGTE7L2HAzZOSXK0e_gykqexxdf83bxSuA678TrIhpDJes61N2bq64MwyYVDiw2u9v4Kbmw5MuZ_f4PDhfubdc3bgxfDBl6z-S51dmggiQECaiS6Wpj_mcs68hFag_2fHjpro_eAcSqU2Q0PNJNlKI")',
                    }}
                  />
                  <div className="flex flex-col gap-1 px-2">
                    <p className="text-lg font-bold leading-normal text-[#1b170e] dark:text-[#fbfbf8]">Investing in Champagne: A Market Analysis</p>
                    <p className="text-sm font-normal leading-normal text-[#96814f] dark:text-[#a19172]">An in-depth look at the rising value of properties in the Champagne region.</p>
                    <a className="mt-1 text-sm font-bold text-[#e3aa26] dark:text-[#e3aa26]" href="#">Read More →</a>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    data-alt="Interior of a modern villa with glass walls overlooking the ocean"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA1YbNjfJtBphlRcgQPck8mFJ3rEtv9w-JW5lu1aCYgO8oxlNI2QTnyIq304lahB9Q--n_Z2lpWZSNjLbWiJvPMpqH-O69E1NRaJwro8-rr6Flzu1q4tAHrRrlLjar8FAsXJWb2cayM69It6V55c_TwZFR9Spy64vYEWc8kipYKG_Aejy4MpWurlut1wzoUZOaW_Elcimqq7s6yxsS_eqRT_1DwjAy31ghCF2Wl8F8tcOZMXEqxkNjm8fxcsrEmeV4TQlUIUkwt1Hk")',
                    }}
                  />
                  <div className="flex flex-col gap-1 px-2">
                    <p className="text-lg font-bold leading-normal text-[#1b170e] dark:text-[#fbfbf8]">Architectural Digest: A Modern Villa Tour</p>
                    <p className="text-sm font-normal leading-normal text-[#96814f] dark:text-[#a19172]">Explore the blend of nature and modern design in this breathtaking coastal estate.</p>
                    <a className="mt-1 text-sm font-bold text-[#e3aa26] dark:text-[#e3aa26]" href="#">Read More →</a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PodcastMedia
