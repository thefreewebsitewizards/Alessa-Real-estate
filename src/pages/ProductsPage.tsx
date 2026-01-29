import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function ProductsPage() {
  return (
    <div className="products-theme dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-[1440px] mx-auto w-full flex flex-col md:flex-row">
        <aside className="w-full md:w-72 md:shrink-0 border-r border-neutral-800 p-6 md:min-h-[calc(100vh-64px)] bg-background-dark z-10">
          <div className="sticky top-24 space-y-8">
            <div>
              <h3 className="text-white tracking-widest text-sm font-bold uppercase border-b border-primary/50 pb-2 mb-4">
                Refine Setup
              </h3>
            </div>
            <div>
              <h4 className="text-neutral-400 text-xs font-bold uppercase mb-3 tracking-wider">Components</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    defaultChecked
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Frames</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Forks</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Bars</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Cranks</span>
                </label>
              </div>
            </div>
            <div>
              <h4 className="text-neutral-400 text-xs font-bold uppercase mb-3 tracking-wider">Factory Teams</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    defaultChecked
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">ZeroNine</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Supercross</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    defaultChecked
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Aggro Factory</span>
                </label>
              </div>
            </div>
            <div>
              <h4 className="text-neutral-400 text-xs font-bold uppercase mb-3 tracking-wider">Price Range</h4>
              <div className="px-1 py-2">
                <input
                  className="w-full h-1 bg-neutral-700 rounded-none appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-none"
                  max="1000"
                  min="0"
                  type="range"
                />
                <div className="flex justify-between mt-2 text-xs text-neutral-400 font-mono">
                  <span>$0</span>
                  <span>$1000+</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6 md:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10 pb-6 border-b border-neutral-800">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-2">
                The Garage
              </h2>
              <p className="text-neutral-400 font-mono text-sm max-w-md">
                High-performance BMX racing hardware straight from the factory floor.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-neutral-500 text-xs uppercase font-bold tracking-widest">Sort By:</span>
              <select className="bg-background-dark text-white text-sm font-bold uppercase border-none focus:ring-0 cursor-pointer hover:text-primary transition-colors pl-0 pr-8 py-0">
                <option>Newest Drop</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative bg-surface-dark border border-neutral-800 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="absolute top-0 left-0 z-10">
                <span className="bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block">
                  Limited Drop
                </span>
              </div>
              <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-900">
                <img
                  alt="Carbon fiber BMX racing frame side profile"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                  data-alt="Carbon fiber BMX racing frame side profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAi6nUuLJZPD6FpYpRXFPM3jYJxrMPhql4lqxLOhh5WIxmQ4CYBopWA1_EeWJpq30hqrx6bPI9uuptr7g-u1MxtI87irCObQ1oLi3BB94H-is729IOG3NzHFeheQB6TmYzKXX8ojOtH5N5PUcBzTaQcMiXLu78qCb66SzvsBa2UIco1TNxnB7WoMP4-mDsZmRif_h_rIKvyu4YuBOi6F66aRPHIbf5pl4Bh3lBVcr4evWVqH_rBFmsDPeIE3QV8mmWftRAclkrUNA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-1 text-xs text-neutral-500 uppercase font-mono tracking-widest">Frames</div>
                <h3 className="text-white text-lg font-bold uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                  Mach 1 Carbon XL
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-primary font-bold font-mono text-lg">$699.00</span>
                  <button className="text-white hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative bg-surface-dark border border-neutral-800 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-900">
                <img
                  alt="BMX racing handlebars black metal"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                  data-alt="BMX racing handlebars black metal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMBAvtYNDXl2xycGVgRBQMqetgnA3OHH3as-jrTRO8JZzA8bxwiwjF_uU_oEj5zjvFfJeyaL_xi1nCU4GMEs5_CjzIwkN9n2pW4nd5hJYrv6e1ryCV8qJqsv16wXQTJo3JwlcZD1Sj3TBmyzefjrkaFiZIKHYZrAiarXogSixPsBGTCk_EC7tp00A1hdq2YZuIerQhffd2RqThYVdxVG4VJGLcr71hUUPkABNQYRnD1KPXRb4V3m0ujD4qp7tOO1sQskeZLDFbUw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-1 text-xs text-neutral-500 uppercase font-mono tracking-widest">Control</div>
                <h3 className="text-white text-lg font-bold uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                  Vandal Pro Bars 8.5"
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-primary font-bold font-mono text-lg">$89.00</span>
                  <button className="text-white hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative bg-surface-dark border border-neutral-800 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="absolute top-0 left-0 z-10">
                <span className="bg-white text-black text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block">
                  New Arrival
                </span>
              </div>
              <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-900">
                <img
                  alt="Precision machined BMX sprocket silver"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                  data-alt="Precision machined BMX sprocket silver"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCul7AGZ4hr_8n3X4N01NrtLeWT_VYYhhF4glAtCMhgQqcTtYIV_TJQEHBVJ9mrGGi7XvTo6Z3idyeP76ogWb_bkSfdp1N2NUfW2I0PqGrjJe0j68ywsO3X2Ry0GS8JcIjZ7iEbelwCQxG0ZeRP9eVklpLGrwrEQpdk4BW6ziXTJI1iIdot_1GllYpnB0vHfEcYAPoDK49om0BiC1G2LtYspvo74gRjdLPOyMnzboJb8ga22FrFuy2elkW4CA1Dy8FuwLXFiHuXqQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-1 text-xs text-neutral-500 uppercase font-mono tracking-widest">Drivetrain</div>
                <h3 className="text-white text-lg font-bold uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                  Sector 9 Sprocket
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-primary font-bold font-mono text-lg">$45.00</span>
                  <button className="text-white hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative bg-surface-dark border border-neutral-800 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-900">
                <img
                  alt="BMX bicycle wheel close up spokes"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                  data-alt="BMX bicycle wheel close up spokes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-3vMP9oJ9nTHR0FUWE1viU3D0maUSKLzoj0T6iB_SwQv1ZxUhUoqnQQ_b6pJnIUcup9I2Falmka3VVisf2W63wbHkaMn8s8opIGIcObqg8UbNkVdf3sjtJoOkmuMBVuyntMnHSyU9Z_8huM4FNopPkxHg3gYN-ZblV8e5qXE_GNxGe722Jsi3O5JBENx7Hh4j_76BAdASkts2KYI8Ks33qbsGEWsNyyEpIVEG0_8YaRjUB-LsDXP4AaR04iKMlxaoAZs5m688bg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-1 text-xs text-neutral-500 uppercase font-mono tracking-widest">Wheels</div>
                <h3 className="text-white text-lg font-bold uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                  Turbine Wheelset 20"
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-primary font-bold font-mono text-lg">$349.00</span>
                  <button className="text-white hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative bg-surface-dark border border-neutral-800 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-900">
                <img
                  alt="BMX bicycle pedal close up"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                  data-alt="BMX bicycle pedal close up"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFrp0IaRwW2Nmlik__ISq9lMuJE3gcY6zWXPXmjGXSJFSizKPDe4pCsHkmVPWdEhc4VSN02EohtI7S4l8usmfStMNigB8KdqVXAAy1aGDnnsMWIJExDAcmA3JiGbR_AAnqeo8ZAh_N6xskHgeeVpgQULzDzv-SWOloDaqEAC8PdedEO0qXpHuUFbqLDSswGCbiI4sd0914KJl2rTt5Hz5xmI7IE5Tk_RTs4J6_VLccnNlxZIko2ZL3zjsLEGQZ7egD-iT9L1kcpw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="mb-1 text-xs text-neutral-500 uppercase font-mono tracking-widest">Pedals</div>
                <h3 className="text-white text-lg font-bold uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                  Grip Lock Pedals
                </h3>
                <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-primary font-bold font-mono text-lg">$65.00</span>
                  <button className="text-white hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">add_circle</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="group relative bg-surface-dark border border-neutral-800 hover:border-primary/50 transition-all duration-300 flex flex-col">
              <div className="absolute top-0 left-0 z-10">
                <span className="bg-neutral-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block">
                  Sold Out
                </span>
              </div>
              <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-900">
                <img
                  alt="BMX racing jersey on hanger"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-all duration-500 grayscale"
                  data-alt="BMX racing jersey on hanger"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVqNHq0VtT9Z-l9SJEbpcTQgjTnu7UEdd2blmlygiphnDDW1xzzsdJPFCPH_TbW3MoDAbBMHDYPqg7mgdI7_ti9TAV-Y2d5M1uIhx6LE9yUMa6DlfTBhhnTwV5Mu4nz4ZCKSdR0dK-TJStdD-eu6aJfd0FiiMX4p0yi5HdbSaTb8K7yqqg2THYblJeDI33kx4CWCss5UNYsBIWmFYTZOIjvTTcjjBYSWyds7WUT6mifvHbt9e2wfy6c4wBY_motJW96DemzN9R2g"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col flex-1 opacity-60">
                <div className="mb-1 text-xs text-neutral-500 uppercase font-mono tracking-widest">Apparel</div>
                <h3 className="text-white text-lg font-bold uppercase leading-tight mb-2">Team Jersey '24</h3>
                <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
                  <span className="text-neutral-400 font-bold font-mono text-lg line-through">$55.00</span>
                  <button className="text-neutral-600 cursor-not-allowed">
                    <span className="material-symbols-outlined">block</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <button className="border border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase px-12 py-4 tracking-widest transition-all text-sm">
              Load More Gear
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default ProductsPage
