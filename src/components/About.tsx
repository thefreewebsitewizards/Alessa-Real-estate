function About() {
  return (
    <div id="about" className="relative flex h-auto min-h-screen w-full flex-col bg-[#fbfbf8] dark:bg-background-dark group/design-root overflow-x-hidden scroll-mt-[80px]">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-none w-full flex-1">
            <main className="py-12 md:py-20">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-20 items-start">
                <div className="w-full md:col-span-2">
                  <div className="w-full gap-1 overflow-hidden aspect-[2/3] rounded-xl flex">
                    <div
                      className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                      data-alt="Professional portrait of Alessa Aichinger"
                      style={{
                        backgroundImage:
                          'url("/1-Alessa-FINAL.jpg")',
                      }}
                    ></div>
                  </div>
                </div>
                <div className="w-full md:col-span-3 flex flex-col gap-8">
                  <div className="flex flex-wrap justify-between gap-3 px-4">
                    <p className="text-[#1b170e] dark:text-gray-100 text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                      About Alessa Aichinger
                    </p>
                  </div>
                  <p className="text-[#1b170e] dark:text-gray-300 text-base font-normal leading-relaxed pb-3 pt-1 px-4">
                    Alessa Aichinger brings a decade of experience in the luxury real estate market, offering unparalleled service and a deep understanding of the discerning needs of a global clientele. Her dedication to integrity, transparency, and personalized attention ensures a seamless and successful experience for every client she represents. Alessa's passion for architecture and design, combined with her sharp negotiation skills, makes her the ideal partner for your most significant property investments.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-4">
                    <div className="flex flex-1 gap-4 items-center rounded-lg border border-[#e6e0d0] dark:border-[#3a352a] bg-[#fbfbf8] dark:bg-background-dark p-4 flex-row sm:flex-col sm:items-start">
                      <div className="text-[#1b170e] dark:text-[#e3aa26]"><span className="material-symbols-outlined">chat_bubble</span></div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[#1b170e] dark:text-gray-100 text-base font-bold leading-tight">Multilingual</h2>
                        <p className="text-[#96814f] dark:text-gray-400 text-sm font-normal leading-normal">English • German • Spanish • French</p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-4 items-center rounded-lg border border-[#e6e0d0] dark:border-[#3a352a] bg-[#fbfbf8] dark:bg-background-dark p-4 flex-row sm:flex-col sm:items-start">
                      <div className="text-[#1b170e] dark:text-[#e3aa26]"><span className="material-symbols-outlined">public</span></div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[#1b170e] dark:text-gray-100 text-base font-bold leading-tight">International Service</h2>
                        <p className="text-[#96814f] dark:text-gray-400 text-sm font-normal leading-normal">Serving clients across the U.S. &amp; Europe</p>
                      </div>
                    </div>
                    <div className="flex flex-1 gap-4 items-center rounded-lg border border-[#e6e0d0] dark:border-[#3a352a] bg-[#fbfbf8] dark:bg-background-dark p-4 flex-row sm:flex-col sm:items-start">
                      <div className="text-[#1b170e] dark:text-[#e3aa26]"><span className="material-symbols-outlined">diamond</span></div>
                      <div className="flex flex-col gap-1">
                        <h2 className="text-[#1b170e] dark:text-gray-100 text-base font-bold leading-tight">High-End Clientele</h2>
                        <p className="text-[#96814f] dark:text-gray-400 text-sm font-normal leading-normal">Specializing in luxury and exclusive properties</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 mt-4">
                    <a className="inline-flex items-center gap-2 text-[#e3aa26] text-sm font-bold leading-normal group" href="#">
                      Learn More
                      <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                    </a>
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

export default About
