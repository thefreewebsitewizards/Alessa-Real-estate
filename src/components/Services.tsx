function Services() {
  return (
    <div id="services" className="relative flex h-auto min-h-screen w-full flex-col bg-[#F9F6F2] dark:bg-[#2a2522] group/design-root overflow-x-hidden scroll-mt-[80px]">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-16 sm:py-20 lg:py-24">
          <div className="layout-content-container flex flex-col max-w-none w-full flex-1">
            <div className="flex flex-col items-center text-center px-4 pb-12 pt-5">
              <h2 className="text-[#4A4441] dark:text-[#e0d9d5] text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em]">Our Bespoke Services</h2>
              <p className="mt-4 max-w-2xl text-[#4A4441]/70 dark:text-[#e0d9d5]/70 text-base sm:text-lg">Tailored strategies and exceptional service for the world's most discerning clientele.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
              <div className="flex flex-1 flex-col gap-6 rounded-xl border border-[#F5E1E1] dark:border-[#3c3531] bg-white dark:bg-[#312a26] p-8 text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-[#e3aa26]">
                  <span className="material-symbols-outlined !text-5xl">key</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#4A4441] dark:text-[#e0d9d5] text-lg font-bold leading-tight">Buyers Representation</h3>
                  <p className="text-[#4A4441]/70 dark:text-[#e0d9d5]/70 text-sm font-normal leading-normal">Expert guidance to help you find and acquire your perfect luxury property with confidence and ease.</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 rounded-xl border border-[#F5E1E1] dark:border-[#3c3531] bg-white dark:bg-[#312a26] p-8 text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-[#e3aa26]">
                  <span className="material-symbols-outlined !text-5xl">sell</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#4A4441] dark:text-[#e0d9d5] text-lg font-bold leading-tight">Sellers / Luxury Marketing</h3>
                  <p className="text-[#4A4441]/70 dark:text-[#e0d9d5]/70 text-sm font-normal leading-normal">Strategic, high-end marketing designed to showcase your property to a discerning global audience.</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 rounded-xl border border-[#F5E1E1] dark:border-[#3c3531] bg-white dark:bg-[#312a26] p-8 text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-[#e3aa26]">
                  <span className="material-symbols-outlined !text-5xl">analytics</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#4A4441] dark:text-[#e0d9d5] text-lg font-bold leading-tight">Investment Advisory</h3>
                  <p className="text-[#4A4441]/70 dark:text-[#e0d9d5]/70 text-sm font-normal leading-normal">Identifying and securing high-value real estate investment opportunities tailored to your portfolio goals.</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 rounded-xl border border-[#F5E1E1] dark:border-[#3c3531] bg-white dark:bg-[#312a26] p-8 text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-[#e3aa26]">
                  <span className="material-symbols-outlined !text-5xl">language</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#4A4441] dark:text-[#e0d9d5] text-lg font-bold leading-tight">International Client Services</h3>
                  <p className="text-[#4A4441]/70 dark:text-[#e0d9d5]/70 text-sm font-normal leading-normal">Seamless, comprehensive support and expert guidance for our valued clients from all over the world.</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 rounded-xl border border-[#F5E1E1] dark:border-[#3c3531] bg-white dark:bg-[#312a26] p-8 text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-[#e3aa26]">
                  <span className="material-symbols-outlined !text-5xl">real_estate_agent</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#4A4441] dark:text-[#e0d9d5] text-lg font-bold leading-tight">Property Management</h3>
                  <p className="text-[#4A4441]/70 dark:text-[#e0d9d5]/70 text-sm font-normal leading-normal">Comprehensive care for your property, ensuring peace of mind and optimizing your investment's value.</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-6 rounded-xl border border-[#F5E1E1] dark:border-[#3c3531] bg-white dark:bg-[#312a26] p-8 text-center items-center transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="text-[#e3aa26]">
                  <span className="material-symbols-outlined !text-5xl">videocam</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#4A4441] dark:text-[#e0d9d5] text-lg font-bold leading-tight">Property Tours</h3>
                  <p className="text-[#4A4441]/70 dark:text-[#e0d9d5]/70 text-sm font-normal leading-normal">Offering immersive virtual and personalized in-person viewings to explore properties at your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
