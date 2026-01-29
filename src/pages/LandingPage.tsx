import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function LandingPage() {
  return (
    <div className="landing-theme dark bg-grit font-display text-white selection:bg-primary selection:text-black min-h-screen flex flex-col">
      <div className="bg-hazard border-b border-primary/20">
        <div className="max-w-[1400px] mx-auto px-4 py-2">
          <p className="text-primary text-xs md:text-sm font-bold tracking-widest text-center uppercase">
            Grand Opening! Limited Stock Available Now
          </p>
        </div>
      </div>
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            data-alt="Close up of black BMX frame weld details with cinematic lighting"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(26,26,26,0.95), rgba(26,26,26,0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGUQw3bPPtOw9_rxi2ToKxyIrFRmvWJEGVduLH-iVy8nnhY09dIfoKgDf8f2dhdkb1kCxVEcqnmyUWIaMcOHp4d6t3gWDDG6QqH4yuZPGgOG1F86dSg9N3qrkdCG07KPF-H2KWeJTctX-UNfppFYnFYerX7JOfS_Y-PQtrYdHe4q1UY5cdGPjwX-9VV9EzJOKKaLbNysP7fwI-bNH1dlB4PAh9ZmEEBzUFOKA89V9uHEt-wNJzEe9K8WLs0TmgjbIVV5n04OXcRQ')",
            }}
          />
          <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-8 w-full">
            <div className="max-w-2xl flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-bold uppercase tracking-widest w-fit">
                <span className="material-symbols-outlined text-sm">bolt</span> New Arrival
              </div>
              <h1 className="text-5xl md:text-8xl font-black italic uppercase leading-[0.85] tracking-tighter text-white">
                Ride <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Aggro.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-lg border-l-4 border-primary pl-4">
                Performance BMX Frames engineered for the streets and the track. Dominate the asphalt.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="bg-primary hover:bg-white text-black font-black uppercase tracking-wider px-8 py-4 rounded text-sm md:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(249,249,6,0.4)]">
                  Shop The Drop
                </button>
                <button className="bg-transparent border border-white/30 text-white hover:border-primary hover:text-primary font-bold uppercase tracking-wider px-8 py-4 rounded text-sm md:text-base transition-colors duration-300">
                  View Specs
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-white/10 bg-[#151515]">
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded hover:border-primary/50 transition-colors group">
                <div className="p-3 bg-black rounded border border-white/10 group-hover:border-primary/50 text-primary">
                  <span className="material-symbols-outlined text-3xl">architecture</span>
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-lg mb-1 group-hover:text-primary transition-colors">
                    Aircraft Grade
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    6061-T6 Aluminum construction for maximum durability and minimal weight.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded hover:border-primary/50 transition-colors group">
                <div className="p-3 bg-black rounded border border-white/10 group-hover:border-primary/50 text-primary">
                  <span className="material-symbols-outlined text-3xl">speed</span>
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-lg mb-1 group-hover:text-primary transition-colors">
                    Built for Speed
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Aerodynamic geometry tested on professional tracks worldwide.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-white/5 bg-white/5 rounded hover:border-primary/50 transition-colors group">
                <div className="p-3 bg-black rounded border border-white/10 group-hover:border-primary/50 text-primary">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase text-lg mb-1 group-hover:text-primary transition-colors">
                    Lifetime Warranty
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    We stand by our welds. Break it (if you can), and we replace it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">
                Latest <span className="text-primary">Drops</span>
              </h2>
              <p className="text-gray-400 mt-2 font-mono text-sm">/// LIMITED QUANTITIES AVAILABLE</p>
            </div>
            <a className="flex items-center gap-2 text-primary font-bold uppercase text-sm tracking-widest hover:text-white transition-colors" href="#">
              View All Products <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative bg-[#222] border border-white/10 rounded overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded uppercase border border-white/20">
                Best Seller
              </div>
              <div className="aspect-square w-full bg-[#111] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Matte black BMX frame studio shot side profile"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAHgGWj_jjgIIzcCx1rXXd8o7CI59MZGePO9Vrvr4zjh2F9guURIarF0E1Hni7wc8xxjTaI6e_ZFew6o5r7j7qGKn3FzH8BH6B0ZlAruGuugSdibKgirDXGBuxFD578kbh3_FYQjT4z8nbbzcT-yg4cv82ASYGGIfNj3PbwWWaoNWAjF2e4CX0VUyiVyxotBVYoXI3x1XeOxNlE-ZNRR-4ewutlDJxasqgVje0cDI_regtYYTc6RFaasoVvtRPRJC5BLPcaK2ZnQ')",
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white uppercase group-hover:text-primary transition-colors">
                    Zeronine Frame
                  </h3>
                  <span className="text-primary font-mono font-bold text-lg">$499.00</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  The ultimate street machine. Matte black finish with reinforced gussets.
                </p>
                <button className="w-full bg-primary hover:bg-white text-black font-bold uppercase tracking-wider py-3 rounded flex items-center justify-center gap-2 transition-all duration-200">
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Add to Cart
                </button>
              </div>
            </div>
            <div className="group relative bg-[#222] border border-white/10 rounded overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-square w-full bg-[#111] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Black and neon yellow motocross style BMX jersey"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVMEcbP4-coaFEmRCgxViVC-YCwnCASRSj7OqVh1V2q0Xvg7CYlF7tsbR1qcZKJoa0s_hMGwIA321j4cvt_taCIfvmHu7lQCcpIMd0Tjd6QNe83xMEh2Jqnx6Ld_RcAiplFBIeIYIP1aBifIDc5feH8y3yMDkKXJeLB7ziUogeo29dIBt-ezEuazor-5Qzyq86Ol3fitDTmxAgw04AV804pYlTip31FbZEvIr4csigSDH_rat3T5RpKvUv9ALzWGzI8W88qLrw8w')",
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white uppercase group-hover:text-primary transition-colors">
                    Aggro Racing Jersey
                  </h3>
                  <span className="text-primary font-mono font-bold text-lg">$59.00</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  Breathable mesh fabric with moisture-wicking technology. Race fit.
                </p>
                <button className="w-full bg-primary hover:bg-white text-black font-bold uppercase tracking-wider py-3 rounded flex items-center justify-center gap-2 transition-all duration-200">
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Add to Cart
                </button>
              </div>
            </div>
            <div className="group relative bg-[#222] border border-white/10 rounded overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-square w-full bg-[#111] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  data-alt="Close up of black rubber handlebar grips with waffle pattern"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9gp5gzI1vk1hGu2mJj0WnruK5rHPylvtcKnt_Jv7JJLSEryeV4USS49tv-0oAtEFZsKEc8OXh16xH4T8vRRXoQvecTX0OcRAyRGyLeVhCgId94ckm3JCL4D4rm-MRCQbTAdGpiySYcPMfKhY1MccbHOcYF9GGRp8fqFWkHgNzRIwTFd66xAvIMpxbG2riPKj8mkobM18W8iYjBqIrgiQxN_N7ZiMh_cY_k6_PQnDEqYwNFEvreMe1UuYJRDOgyYroWGY4sUbV1A')",
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white uppercase group-hover:text-primary transition-colors">
                    Pro Grip Sets
                  </h3>
                  <span className="text-primary font-mono font-bold text-lg">$25.00</span>
                </div>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  Soft compound rubber with classic waffle pattern for maximum control.
                </p>
                <button className="w-full bg-primary hover:bg-white text-black font-bold uppercase tracking-wider py-3 rounded flex items-center justify-center gap-2 transition-all duration-200">
                  <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#111] border-t border-white/10 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-primary/5 skew-x-12 transform origin-bottom-right" />
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-24 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-4">
                Join The <span className="text-primary">Pit Stop</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Get exclusive access to limited drops, team edits, and secret sales. No spam, just speed.
              </p>
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  className="flex-1 bg-[#222] border border-white/20 rounded px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-bold tracking-wider"
                  placeholder="ENTER YOUR EMAIL"
                  type="email"
                />
                <button
                  className="bg-primary hover:bg-white text-black font-black uppercase tracking-wider px-10 py-4 rounded transition-colors duration-200 flex items-center justify-center gap-2"
                  type="button"
                >
                  Subscribe <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage
