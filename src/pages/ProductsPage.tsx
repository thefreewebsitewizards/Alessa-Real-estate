import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useCart } from '../data/cart'
import { formatPrice, products } from '../data/products'

function ProductsPage() {
  const { addItem } = useCart()
  const componentOptions = useMemo(() => ['Frames', 'Forks', 'Bars', 'Cranks'], [])
  const teamOptions = useMemo(() => ['ZeroNine', 'Supercross', 'Aggro Factory'], [])
  const [selectedComponents, setSelectedComponents] = useState<string[]>(['Frames'])
  const [selectedTeams, setSelectedTeams] = useState<string[]>(['ZeroNine', 'Aggro Factory'])
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sortOption, setSortOption] = useState('Newest Drop')
  const [visibleCount, setVisibleCount] = useState(6)

  const catalogProducts = useMemo(() => products.filter((product) => product.isCatalog), [])

  const filteredProducts = useMemo(() => {
    let filtered = catalogProducts.filter((product) => product.price <= maxPrice)

    if (selectedComponents.length > 0) {
      filtered = filtered.filter((product) => {
        const component = product.component ?? product.category
        if (!componentOptions.includes(component)) {
          return true
        }
        return selectedComponents.includes(component)
      })
    }

    if (selectedTeams.length > 0) {
      filtered = filtered.filter((product) => {
        const team = product.team ?? ''
        if (!teamOptions.includes(team)) {
          return true
        }
        return selectedTeams.includes(team)
      })
    }

    if (sortOption === 'Price: Low to High') {
      filtered = [...filtered].sort((a, b) => a.price - b.price)
    } else if (sortOption === 'Price: High to Low') {
      filtered = [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [catalogProducts, componentOptions, maxPrice, selectedComponents, selectedTeams, sortOption, teamOptions])

  const visibleProducts = useMemo(
    () => filteredProducts.slice(0, Math.min(filteredProducts.length, visibleCount)),
    [filteredProducts, visibleCount],
  )

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
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                    checked={selectedComponents.includes('Frames')}
                    onChange={(event) => {
                      setSelectedComponents((prev) =>
                        event.target.checked ? [...prev, 'Frames'] : prev.filter((item) => item !== 'Frames'),
                      )
                    }}
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Frames</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                    checked={selectedComponents.includes('Forks')}
                    onChange={(event) => {
                      setSelectedComponents((prev) =>
                        event.target.checked ? [...prev, 'Forks'] : prev.filter((item) => item !== 'Forks'),
                      )
                    }}
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Forks</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                    checked={selectedComponents.includes('Bars')}
                    onChange={(event) => {
                      setSelectedComponents((prev) =>
                        event.target.checked ? [...prev, 'Bars'] : prev.filter((item) => item !== 'Bars'),
                      )
                    }}
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Bars</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                    checked={selectedComponents.includes('Cranks')}
                    onChange={(event) => {
                      setSelectedComponents((prev) =>
                        event.target.checked ? [...prev, 'Cranks'] : prev.filter((item) => item !== 'Cranks'),
                      )
                    }}
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
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                    checked={selectedTeams.includes('ZeroNine')}
                    onChange={(event) => {
                      setSelectedTeams((prev) =>
                        event.target.checked ? [...prev, 'ZeroNine'] : prev.filter((item) => item !== 'ZeroNine'),
                      )
                    }}
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">ZeroNine</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                    checked={selectedTeams.includes('Supercross')}
                    onChange={(event) => {
                      setSelectedTeams((prev) =>
                        event.target.checked ? [...prev, 'Supercross'] : prev.filter((item) => item !== 'Supercross'),
                      )
                    }}
                  />
                  <span className="text-neutral-300 group-hover:text-white text-sm uppercase font-medium">Supercross</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="size-4 rounded-none border-neutral-600 bg-transparent text-primary focus:ring-0 focus:ring-offset-0 focus:border-primary checked:bg-primary checked:border-primary transition-colors"
                    type="checkbox"
                    checked={selectedTeams.includes('Aggro Factory')}
                    onChange={(event) => {
                      setSelectedTeams((prev) =>
                        event.target.checked
                          ? [...prev, 'Aggro Factory']
                          : prev.filter((item) => item !== 'Aggro Factory'),
                      )
                    }}
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
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(Number(event.target.value))}
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
              <select
                className="bg-background-dark text-white text-sm font-bold uppercase border-none focus:ring-0 cursor-pointer hover:text-primary transition-colors pl-0 pr-8 py-0"
                value={sortOption}
                onChange={(event) => setSortOption(event.target.value)}
              >
                <option>Newest Drop</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProducts.map((product) => {
              const badgeTone = product.isSoldOut ? 'neutral' : product.catalogBadge
              const badgeLabel =
                badgeTone === 'primary' ? 'Limited Drop' : badgeTone === 'light' ? 'New Arrival' : badgeTone === 'neutral' ? 'Sold Out' : null
              const categoryLabel = product.component ?? product.category

              return (
                <Link
                  key={product.id}
                  className="group relative bg-surface-dark border border-neutral-800 hover:border-primary/50 transition-all duration-300 flex flex-col"
                  to={`/products/${product.id}`}
                >
                  {badgeLabel ? (
                    <div className="absolute top-0 left-0 z-10">
                      <span
                        className={`text-xs font-bold px-3 py-1 uppercase tracking-wider inline-block ${
                          badgeTone === 'primary'
                            ? 'bg-primary text-black'
                            : badgeTone === 'light'
                              ? 'bg-white text-black'
                              : 'bg-neutral-600 text-white'
                        }`}
                      >
                        {badgeLabel}
                      </span>
                    </div>
                  ) : null}
                  <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-900">
                    <img
                      alt={product.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                        product.isSoldOut
                          ? 'opacity-50 grayscale'
                          : 'opacity-80 group-hover:opacity-100 group-hover:scale-105 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal'
                      }`}
                      data-alt={product.name}
                      src={product.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60" />
                  </div>
                  <div className={`p-5 flex flex-col flex-1 ${product.isSoldOut ? 'opacity-60' : ''}`}>
                    <div className="mb-1 text-xs text-neutral-500 uppercase font-mono tracking-widest">{categoryLabel}</div>
                    <h3
                      className={`text-white text-lg font-bold uppercase leading-tight mb-2 ${
                        product.isSoldOut ? '' : 'group-hover:text-primary transition-colors'
                      }`}
                    >
                      {product.name}
                    </h3>
                    <div className="mt-auto flex items-center justify-between border-t border-neutral-800 pt-4">
                      <span
                        className={`font-bold font-mono text-lg ${product.isSoldOut ? 'text-neutral-400 line-through' : 'text-primary'}`}
                      >
                        {formatPrice(product.price)}
                      </span>
                      {product.isSoldOut ? (
                        <button className="text-neutral-600 cursor-not-allowed" type="button">
                          <span className="material-symbols-outlined">block</span>
                        </button>
                      ) : (
                        <button
                          className="text-white hover:text-primary transition-colors"
                          onClick={(event) => {
                            event.preventDefault()
                            event.stopPropagation()
                            addItem(product.id)
                          }}
                          type="button"
                        >
                          <span className="material-symbols-outlined">add_circle</span>
                        </button>
                      )}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-16 flex justify-center">
            <button
              className="border border-primary text-primary hover:bg-primary hover:text-black font-bold uppercase px-12 py-4 tracking-widest transition-all text-sm"
              type="button"
              onClick={() => setVisibleCount((prev) => Math.min(prev + 3, filteredProducts.length))}
            >
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
