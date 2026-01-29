import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useCart } from '../data/cart'
import { formatPrice, getProductById, products } from '../data/products'

function ProductDetailsPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = useMemo(() => getProductById(productId) ?? products[0], [productId])
  const [activeImageState, setActiveImageState] = useState(() => ({ productId: product.id, index: 0 }))

  useEffect(() => {
    if (productId && !getProductById(productId)) {
      navigate('/products', { replace: true })
    }
  }, [navigate, productId])

  const activeImageIndex = activeImageState.productId === product.id ? activeImageState.index : 0
  const galleryImages = product.gallery?.length ? product.gallery : [product.image]
  const activeImage = galleryImages[activeImageIndex] ?? galleryImages[0]
  const detailTitle = product.detailTitle ?? product.name
  const detailDescription = product.detailDescription ?? product.description
  const detailBadges = product.detailBadges ?? []
  const specs = product.specs ?? []
  const relatedProducts = useMemo(() => {
    const related = (product.relatedIds ?? [])
      .map((id) => getProductById(id))
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
    if (related.length > 0) {
      return related
    }
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product.id, product.relatedIds])

  return (
    <div className="product-details-theme dark bg-background-light dark:bg-background-dark text-black dark:text-white font-display antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 py-8 lg:px-10 lg:py-12">
        <div className="mb-6 lg:mb-10 flex flex-wrap items-center gap-2 text-sm uppercase tracking-wider">
          <Link className="text-[#cccc8e] hover:text-white transition-colors" to="/">
            Home
          </Link>
          <span className="text-[#cccc8e] material-symbols-outlined text-[14px]">chevron_right</span>
          <Link className="text-[#cccc8e] hover:text-white transition-colors" to="/products">
            {product.category}
          </Link>
          <span className="text-[#cccc8e] material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-white font-bold">{product.team ?? product.name}</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] bg-surface-dark rounded-lg overflow-hidden border border-border-dark group">
              {detailBadges.length ? (
                <div className="absolute top-4 left-4 z-10 flex gap-2">
                  {detailBadges.map((badge) => (
                    <span
                      key={badge}
                      className={`text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm ${
                        badge === 'Free Shipping' ? 'bg-white text-background-dark' : 'bg-primary text-background-dark'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}
              <img
                alt={detailTitle}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                data-alt={detailTitle}
                src={activeImage}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {galleryImages.slice(0, 4).map((image, index) => (
                <button
                  key={`${product.id}-${image}`}
                  className={`aspect-square w-full rounded-lg overflow-hidden cursor-pointer bg-surface-dark transition-colors ${
                    activeImageIndex === index
                      ? 'border-2 border-primary'
                      : 'border border-border-dark hover:border-white opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setActiveImageState({ productId: product.id, index })}
                  type="button"
                >
                  <img alt={detailTitle} className="w-full h-full object-cover" data-alt={detailTitle} src={image} />
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="border-b border-border-dark pb-6 mb-6">
              <h1 className="text-white text-4xl lg:text-5xl font-bold uppercase leading-[0.9] tracking-tight mb-4">
                {detailTitle}
              </h1>
              <div className="flex items-baseline gap-4 mb-4">
                <p className="text-primary text-4xl font-bold tracking-tight">{formatPrice(product.price)}</p>
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
                <p className="text-[#cccc8e] text-sm font-mono tracking-wider uppercase">
                  {product.shippingStatus ?? 'Ships directly from warehouse'}
                </p>
              </div>
              <p className="text-white/80 text-base leading-relaxed font-body">
                {detailDescription}
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
                  <a className="text-[#cccc8e] text-xs underline decoration-dotted hover:text-white" href="/size-chart">
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
              <button
                className="w-full h-16 bg-primary hover:bg-white text-background-dark text-xl font-bold uppercase tracking-widest rounded transition-all transform active:scale-[0.99] flex items-center justify-center gap-3"
                onClick={() => addItem(product.id)}
                type="button"
              >
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
                    {specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-[#cccc8e]">{spec.label}</span>
                        <span className="text-white font-mono">{spec.value}</span>
                      </div>
                    ))}
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
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                className="group block bg-surface-dark rounded-lg overflow-hidden border border-border-dark hover:border-primary transition-colors"
                to={`/products/${item.id}`}
              >
                <div className="aspect-square bg-black relative overflow-hidden">
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    data-alt={item.name}
                    src={item.image}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold text-sm uppercase mb-1">{item.name}</h3>
                  <p className="text-primary font-bold font-mono">{formatPrice(item.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductDetailsPage
