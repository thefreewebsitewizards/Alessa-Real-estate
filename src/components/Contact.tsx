function Contact() {
  return (
    <div id="contact" className="bg-[#fbfbf8] dark:bg-[#1b170e] font-display text-[#1b170e] dark:text-[#fbfbf8] scroll-mt-[80px]">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="flex h-full grow flex-col">
          <div className="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col items-center text-center px-4 py-5">
              <h2 className="text-[#4A4441] dark:text-[#e0d9d5] text-3xl sm:text-4xl font-bold leading-tight tracking-[-0.015em]">Contact</h2>
              <p className="mt-4 max-w-2xl text-[#4A4441]/70 dark:text-[#e0d9d5]/70 text-base sm:text-lg">Effortless communication and dedicated support for clients who expect nothing less than excellence.</p>
            </div>
            <main className="flex-1 py-12 md:py-20">
              <div className="overflow-hidden rounded-xl bg-[#EAE0D5] dark:bg-[#1b170e] shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div
                    className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(251, 251, 248, 0.6), rgba(251, 251, 248, 0.6)), url('/contact-section.jpg')",
                    }}
                  >
                    <div className="max-w-md">
                      <p className="text-sm font-medium uppercase tracking-wider text-[#96814f] dark:text-[#a19172]">Get in Touch</p>
                      <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#1b170e] dark:text-[#fbfbf8]">Begin Your<br />Luxury Real Estate Journey</h1>
                      <p className="mt-6 text-lg leading-relaxed text-[#96814f] dark:text-[#a19172]">Connect with Alessa to explore exclusive properties and receive unparalleled guidance in the global luxury market.</p>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 bg-[#fbfbf8] dark:bg-black/20">
                    <form action="#" className="space-y-6" method="POST">
                      <div>
                        <label className="block text-sm font-medium text-[#1b170e] dark:text-[#fbfbf8]" htmlFor="full-name">Full Name</label>
                        <div className="mt-1">
                          <input autoComplete="name" className="block w-full rounded-md border-[#e3aa26]/30 bg-white/50 dark:bg-black/20 shadow-sm focus:border-[#e3aa26] focus:ring-[#e3aa26] sm:text-sm" id="full-name" name="full-name" type="text" placeholder="Enter your full name" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-[#1b170e] dark:text-[#fbfbf8]" htmlFor="phone">Phone</label>
                          <div className="mt-1">
                            <input autoComplete="tel" className="block w-full rounded-md border-[#e3aa26]/30 bg-white/50 dark:bg.black/20 shadow-sm focus:border-[#e3aa26] focus:ring-[#e3aa26] sm:text-sm" id="phone" name="phone" type="text" placeholder="Enter your phone number" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1b170e] dark:text-[#fbfbf8]" htmlFor="email">Email</label>
                          <div className="mt-1">
                            <input autoComplete="email" className="block w-full rounded-md border-[#e3aa26]/30 bg-white/50 dark:bg-black/20 shadow-sm focus:border-[#e3aa26] focus:ring-[#e3aa26] sm:text-sm" id="email" name="email" type="email" placeholder="Enter your email address" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1b170e] dark:text-[#fbfbf8]" htmlFor="interest">Interest</label>
                        <div className="mt-1">
                          <select className="block w-full rounded-md border-[#e3aa26]/30 bg-white/50 dark:bg-black/20 shadow-sm focus:border-[#e3aa26] focus:ring-[#e3aa26] sm:text-sm" id="interest" name="interest">
                            <option>Buy</option>
                            <option>Sell</option>
                            <option>Rent</option>
                            <option>Investment</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1b170e] dark:text-[#fbfbf8]" htmlFor="message">Message</label>
                        <div className="mt-1">
                          <textarea className="block w-full rounded-md border-[#e3aa26]/30 bg-white/50 dark:bg-black/20 shadow-sm focus:border-[#e3aa26] focus:ring-[#e3aa26] sm:text-sm" id="message" name="message" rows={4} placeholder="How can we help you?"></textarea>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#e3aa26] text-[#1b170e] text-base font-bold leading-normal transition-opacity hover:opacity-90" type="submit">
                          <span className="truncate">Send Message</span>
                        </button>
                        <a className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent text-[#e3aa26] dark:text-[#e3aa26] text-base font-bold leading-normal border-2 border-[#e3aa26] transition-colors hover:bg-[#e3aa26]/10" href="https://calendly.com" target="_blank">
                          <span className="truncate">Book a Call</span>
                        </a>
                      </div>
                    </form>
                    <div className="mt-10 pt-6 border-t border-[#e3aa26]/20 flex items-center justify-center gap-6">
                      <a className="text-[#96814f] dark:text-[#a19172] hover:text-[#e3aa26]" href="#">
                        <svg aria-label="Instagram" className="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.75 118.75 0 0112 2.163zm0 1.441c-3.117 0-3.482.01-4.698.067-2.694.123-3.995 1.424-4.118 4.118-.057 1.217-.066 1.583-.066 4.582 0 2.998.01 3.366.066 4.582.123 2.694 1.424 3.995 4.118 4.118 1.217.057 1.583.067 4.698.067 3.117 0 3.482-.01 4.698-.067 2.694-.123 3.995-1.424 4.118-4.118.057-1.217.066-1.583.066-4.582 0-2.998-.01-3.366-.066-4.582-.123-2.694-1.424-3.995-4.118-4.118-1.217-.057-1.583-.067-4.698-.067zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 1.441a3.722 3.722 0 110 7.444 3.722 3.722 0 010-7.444zM16.949 5.596a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>
                      </a>
                      <a className="text-[#96814f] dark:text-[#a19172] hover:text-[#e3aa26]" href="#">
                        <svg aria-label="Facebook" className="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                      </a>
                      <a className="text-[#96814f] dark:text-[#a19172] hover:text-[#e3aa26]" href="#">
                        <svg aria-label="LinkedIn" className="h-6 w-6" fill="currentColor" role="img" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                      </a>
                    </div>
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

export default Contact
