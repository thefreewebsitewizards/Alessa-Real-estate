import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function ProductDetailsPage() {
  return (
    <div className="product-details-theme dark bg-background-light dark:bg-background-dark text-black dark:text-white font-display antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 py-8 lg:px-10 lg:py-12">
        <div className="mb-6 lg:mb-10 flex flex-wrap items-center gap-2 text-sm uppercase tracking-wider">
          <a className="text-[#cccc8e] hover:text-white transition-colors" href="#">
            Home
          </a>
          <span className="text-[#cccc8e] material-symbols-outlined text-[14px]">chevron_right</span>
          <a className="text-[#cccc8e] hover:text-white transition-colors" href="#">
            Frames
          </a>
          <span className="text-[#cccc8e] material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-white font-bold">ZeroNine</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] bg-surface-dark rounded-lg overflow-hidden border border-border-dark group">
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                <span className="bg-primary text-background-dark text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                  New Arrival
                </span>
                <span className="bg-white text-background-dark text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                  Free Shipping
                </span>
              </div>
              <img
                alt="Side profile view of the black BMX race frame"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                data-alt="Side profile view of the black BMX race frame"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvWU4HZwMV5cGszD_EtQV9a6-lqax7K402Kd3OqfUcMF1-zS8uK5jHNn1IRX7nEVmIiZex9a9wX0J6NMApbuPDO8q2MCjYLzlYkDJkK1L_jBP3O7UHOVkZ-gUTOGyJ2qocgH2zgD2-wqOVxSZxCeIXKcLGn9gUoQwWnMe6QR-NZ60QSZ9qMgolwe7uQUchxqPvCiLM4D4r0QmtrXSKjtMMomIZv5NzOeblArXIBkh8Tc9K_-eyCzwqrS-5Ai2QhrU1O1yGge4NQw"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <button className="aspect-square w-full rounded-lg overflow-hidden border-2 border-primary cursor-pointer bg-surface-dark">
                <img
                  alt="Close up of headtube weld details"
                  className="w-full h-full object-cover"
                  data-alt="Close up of headtube weld details"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzcXZrV9kIY6zx5jumwMcsNRAzW7dtANBUJ0hIeajfzEoH-CUfo4_Adrn0OTceXY95vyZ8RdodVFjbTSRNEsHyVrRTWGUpTl6DW2zgHqOxiCIHYAzOPV6WdiPOIKWqX7vVbrTwhK8rhqIMQ3khfzQoE6HCg3wKzezO8Jgbz4pdFAeMa-AcsU8Qj-SNMKLJjAfZCrbGN-eHrEW9gTiqG3__dyhNf_MxcimZTe1GSzT0XQlAGxHuFc029vPQco1osd3x4L2w0ExifQ"
                />
              </button>
              <button className="aspect-square w-full rounded-lg overflow-hidden border border-border-dark hover:border-white cursor-pointer bg-surface-dark transition-colors opacity-70 hover:opacity-100">
                <img
                  alt="Rear dropout detail view"
                  className="w-full h-full object-cover"
                  data-alt="Rear dropout detail view"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRqFPXe_XTbQM8qVbXY_Y1-c_M0glTm8HoFlIu5ZAPSwWyR3owZALGswK_yju24rXXtOwAJYbl23aoD3wuw-zqNxbdu0C8qvgKJg0mWnSVC1lK9IhfxnKPyurcXFQZmvN3fhMtQZ-IYofDAiLhfOBkzu-UciyUL36CB99Z9hO7CI7H3-KqVeKDi96LFFjrs_uqvwkhqxlwvlkrFBpn_MmnOb6KhIBUDSW6jooNiS2A7ETkhhCSqOY8688dNywArM0m0GFMAIRXOg"
                />
              </button>
              <button className="aspect-square w-full rounded-lg overflow-hidden border border-border-dark hover:border-white cursor-pointer bg-surface-dark transition-colors opacity-70 hover:opacity-100">
                <img
                  alt="Top down view of frame geometry"
                  className="w-full h-full object-cover"
                  data-alt="Top down view of frame geometry"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARxJRtmjIt_SRggflqDdLcTJ6AXkbc-xo3BMO-g2xK_3nHdMBafL-uRYQ5KvjU6-KDr9-FJiaq_N_off61A8Xs-m8OQeALq91pfosa9Vqu5r_FYYUaLOakRMInsc3_DArpJkqcUk1FhgiwbUNqtiB8SDQp_5RokPvdTw08nVNzqzyslNHgqhCgT-0y_ZCTrvRxCHVzVdfeTOOhERGXkDuQvwJLPvOxvPGP5GBDdmbHZ4GfGIKAFQwE6_MqqdI7cIxULVZIAwMjog"
                />
              </button>
              <button className="aspect-square w-full rounded-lg overflow-hidden border border-border-dark hover:border-white cursor-pointer bg-surface-dark transition-colors opacity-70 hover:opacity-100">
                <img
                  alt="Lifestyle shot of bike on track"
                  className="w-full h-full object-cover"
                  data-alt="Lifestyle shot of bike on track"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8lOP96hfDWb2iEsdCAy4hXZQrhqyOHcr7AvKfay-cxvnlCdPsmSAJN3ncAAv8t2nvD6L19XEdEfpHEpGcsIGAf0TQhpmZWt2lHsVlolAfS3o66tMwIT43L-tgciluV3IMxPga51_Ti1dyU97jX_0S7pYbOeeOByfXQXQsd90-0tTFCaZeMH6Dal7ngZ4gs1S8NgFzaZPU17hLOfXiT9N5v5r3OW_zuN-P_IcAwC28KhwelFGX3S82srD3X3MJC4tIeWBiD1-qzw"
                />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="border-b border-border-dark pb-6 mb-6">
              <h1 className="text-white text-4xl lg:text-5xl font-bold uppercase leading-[0.9] tracking-tight mb-4">
                ZeroNine Factory Race Frame
              </h1>
              <div className="flex items-baseline gap-4 mb-4">
                <p className="text-primary text-4xl font-bold tracking-tight">$499.99</p>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-primary text-[16px] fill">star</span>
                  <span className="material-symbols-outlined text-primary text-[16px] fill">star</span>
                  <span className="material-symbols-outlined text-primary text-[16px] fill">star</span>
                  <span className="material-symbols-outlined text-primary text-[16px] fill">star</span>
                  <span className="material-symbols-outlined text-[#4a4a21] text-[16px]">star</span>
                  <span className="text-[#cccc8e] text-xs ml-1">(12 Reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-[#cccc8e] text-sm font-mono tracking-wider uppercase">Ships directly from warehouse</p>
              </div>
              <p className="text-white/80 text-base leading-relaxed font-body">
                Engineered for podium finishes. The ZeroNine Factory Frame features hydro-formed 6061-T6 aluminum tubing,
                a tapered headtube, and CNC-machined dropouts for maximum stiffness transfer. Built to withstand the torque
                of elite level racing.
              </p>
            </div>
            <div className="flex flex-col gap-6 mb-8">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white text-sm font-bold uppercase tracking-wide">Color</label>
                  <span className="text-primary text-xs uppercase">Matte Black</span>
                </div>
                <div className="flex gap-3">
                  <label className="cursor-pointer">
                    <input defaultChecked className="peer sr-only" name="color" type="radio" />
                    <div className="w-12 h-12 rounded-full bg-[#111] border-2 border-border-dark peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 flex items-center justify-center transition-all"></div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="color" type="radio" />
                    <div className="w-12 h-12 rounded-full bg-[#333] border-2 border-border-dark peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 flex items-center justify-center transition-all"></div>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="color" type="radio" />
                    <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-border-dark peer-checked:border-primary peer-checked:ring-2 peer-checked:ring-primary/20 flex items-center justify-center transition-all"></div>
                  </label>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-white text-sm font-bold uppercase tracking-wide">Size</label>
                  <a className="text-[#cccc8e] text-xs underline decoration-dotted hover:text-white" href="#">
                    Size Chart
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <label className="cursor-pointer relative">
                    <input className="peer sr-only" name="size" type="radio" />
                    <div className="h-12 w-full border border-border-dark rounded bg-surface-dark flex items-center justify-center text-white font-bold text-sm uppercase peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-colors hover:border-white/50">
                      Pro
                    </div>
                  </label>
                  <label className="cursor-pointer relative">
                    <input defaultChecked className="peer sr-only" name="size" type="radio" />
                    <div className="h-12 w-full border border-border-dark rounded bg-surface-dark flex items-center justify-center text-white font-bold text-sm uppercase peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-colors hover:border-white/50">
                      Pro XL
                    </div>
                  </label>
                  <label className="cursor-pointer relative">
                    <input className="peer sr-only" name="size" type="radio" />
                    <div className="h-12 w-full border border-border-dark rounded bg-surface-dark flex items-center justify-center text-white font-bold text-sm uppercase peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-colors hover:border-white/50">
                      Pro XXL
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-10">
              <button className="w-full h-16 bg-primary hover:bg-white text-background-dark text-xl font-bold uppercase tracking-widest rounded transition-all transform active:scale-[0.99] flex items-center justify-center gap-3">
                <span>Add to Cart</span>
                <span className="material-symbols-outlined text-[24px] font-bold">arrow_forward</span>
              </button>
              <p className="text-center text-[#cccc8e] text-xs mt-3">
                Free shipping on orders over $500. 30-day return policy.
              </p>
            </div>
            <div className="flex flex-col border-t border-border-dark">
              <details className="group border-b border-border-dark" open>
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-dark transition-colors">
                  <span className="text-white font-bold uppercase tracking-wider">Specs / Geometry</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="px-4 pb-6 pt-2">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#cccc8e]">Top Tube</span>
                      <span className="text-white font-mono">21.25&quot;</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#cccc8e]">Chainstay</span>
                      <span className="text-white font-mono">14.5&quot; - 15.5&quot;</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#cccc8e]">Head Angle</span>
                      <span className="text-white font-mono">74°</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#cccc8e]">Seat Angle</span>
                      <span className="text-white font-mono">71°</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#cccc8e]">BB Height</span>
                      <span className="text-white font-mono">11.5&quot;</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-[#cccc8e]">Weight</span>
                      <span className="text-white font-mono">3.4 lbs</span>
                    </div>
                  </div>
                </div>
              </details>
              <details className="group border-b border-border-dark">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-dark transition-colors">
                  <span className="text-white font-bold uppercase tracking-wider">Shipping Info</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="px-4 pb-6 pt-2">
                  <p className="text-[#cccc8e] text-sm leading-relaxed">
                    All frames ship via UPS Ground within 24 hours of purchase. Expedited shipping options available at
                    checkout. International shipping is available to select countries.
                  </p>
                </div>
              </details>
              <details className="group border-b border-border-dark">
                <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-dark transition-colors">
                  <span className="text-white font-bold uppercase tracking-wider">Warranty &amp; Returns</span>
                  <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <div className="px-4 pb-6 pt-2">
                  <p className="text-[#cccc8e] text-sm leading-relaxed">
                    Lifetime warranty against manufacturer defects. Crash replacement program available for registered
                    owners. Returns accepted within 30 days of delivery on unbuilt frames.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-border-dark pt-10">
          <h2 className="text-2xl font-bold text-white uppercase mb-8">Complete the Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              className="group block bg-surface-dark rounded-lg overflow-hidden border border-border-dark hover:border-primary transition-colors"
              href="#"
            >
              <div className="aspect-square bg-black relative overflow-hidden">
                <img
                  alt="Carbon fiber race fork"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Carbon fiber race fork"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQO6vHbfiGPpeEcVspU046BukdRsFrRLNC_iRK3Phh_ERi4AdkjVCRuldlEQ2ZsXuZxA3WwM4TrrQpz6v7DeSrlcc_g8KiHo3qYfJBz-1pC74Zxin18gZK3uwHIPGO9P0ZTVNqWDv5hT4Z54vb8hPymMH1ewzZ-nciX7u3b-umP4hx3wPFhTnXwb2NQ3YZKjQsND7m7cD9IgbUcf5vsTAxlV_nBWfSgfNGN7BWFTvjlU8lX778MQjzeCjYb58MUKXjp_bLCl8PpQ"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm uppercase mb-1">Stealth Carbon Fork</h3>
                <p className="text-primary font-bold font-mono">$249.99</p>
              </div>
            </a>
            <a
              className="group block bg-surface-dark rounded-lg overflow-hidden border border-border-dark hover:border-primary transition-colors"
              href="#"
            >
              <div className="aspect-square bg-black relative overflow-hidden">
                <img
                  alt="BMX race handlebars"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="BMX race handlebars"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLiXMCVmMtkdVPj0Nmjog7coIwWR6xLxZ_rQsA_ZLAM2zpWGJcg8KzUL9TcOcY7me9O24e32alWxQNPH_Gs5cxoBdWN2776UJvqgNWVm420VSqgz-O0sJFNmfJDgzv8zMdKuSTGfNVopZVLdc9JgRrluDCL3cpcqmy10TknE1Ux_4KZJl9adP_mUUho4QE04AjSTMxfhW3dLfQj9bVj8K6ZS2KW4xSK1gizDQKJZdIKBfLpInWpZhkL7T5noPXgGXDvasIEr1Ghw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm uppercase mb-1">Pro 8.5&quot; Bars</h3>
                <p className="text-primary font-bold font-mono">$79.99</p>
              </div>
            </a>
            <a
              className="group block bg-surface-dark rounded-lg overflow-hidden border border-border-dark hover:border-primary transition-colors"
              href="#"
            >
              <div className="aspect-square bg-black relative overflow-hidden">
                <img
                  alt="Race cranks set"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="Race cranks set"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBISvj67nhNpTqdtXzA6tqKwPovvN0hWfK9bU_tEgnkr0F0VtzPy9VqVpGIV6YkxFPjR_uPh3V1NQ-Rwd8tvMhawaKDB_n6N6ZCAree9R_7esj60G3IHFVfM0yovODxoLfx3Z_xaJPV_bTIJS3XDWMFWR7tV8kvj_t5F31MeUCmgBYV4x-bscwYllfUEaWzfCH0O7Mw8Z1mdLkeH4i5SsnXnV6cvPEwRhSOe2VqJyUPPm9GM5y--8CbHGZ42_wOVvSX7VXFLu05lw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm uppercase mb-1">Elite Crankset</h3>
                <p className="text-primary font-bold font-mono">$189.99</p>
              </div>
            </a>
            <a
              className="group block bg-surface-dark rounded-lg overflow-hidden border border-border-dark hover:border-primary transition-colors"
              href="#"
            >
              <div className="aspect-square bg-black relative overflow-hidden">
                <img
                  alt="BMX race tires"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  data-alt="BMX race tires"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANURcgPm_N3BTShj2_qpYUYSZxTd5YuOLMH0fZvwKdhceDoOKxufByN7FvZOblQfoknnxyqj7ejuN8SLvEFRqvhV-SmqO-4CP1XbJsj1dtqHD67cohrC2IYGx6S2aG614XpUSTf9EzghcVQ7ElJUSg1zosDcGFJFfcCSFPOZKJCjGc_qgYeFkvA6QiOnxCKGBu50eXZma3HkkVI10FLxDqq_ySh1IhQzLV6DzaViqZmoETtFssu4IAneGD7vJ9_uOZNwn5aV-Etg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-sm uppercase mb-1">PowerBlock Tires</h3>
                <p className="text-primary font-bold font-mono">$34.99</p>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductDetailsPage
