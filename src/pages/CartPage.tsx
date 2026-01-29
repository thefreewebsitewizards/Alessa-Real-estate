import { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useCart } from '../data/cart'
import { formatPrice, getProductById } from '../data/products'

function CartPage() {
  const navigate = useNavigate()
  const { items, updateQuantity, removeItem, subtotal, itemCount } = useCart()

  const cartItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductById(item.productId)
          if (!product) {
            return null
          }
          return { product, quantity: item.quantity }
        })
        .filter((item): item is NonNullable<typeof item> => Boolean(item)),
    [items],
  )

  return (
    <div className="cart-theme dark bg-background-light dark:bg-background-dark font-display overflow-hidden h-screen w-screen selection:bg-primary selection:text-black">
      <Navbar />
      <div aria-hidden="true" className="absolute inset-0 z-0 flex flex-col pointer-events-none select-none">
        <div className="flex-1 relative bg-[#111]">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center opacity-40 grayscale"
            data-alt="Action shot of a BMX rider mid-air doing a trick at a skatepark"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRjLaRJQFDxG6sllsVOUTyKt_BkVrysOIi3rUA56TC4Kc9EzcC36z2wqLrQIT4ZSeJtRYfdYvhcAjwVuasNgHah9Ne2dX-cVwho8PrGF8Tk6liDSGGWJ-QfGZRfCj-g_Ux1pvSfdg_7ZPstkDvfOaxXIKuWqsBCDtEg4w9b0T4RasJP9cyIOQjEuoj2u4SBTu7xxVx-w7UVVVDZz_sARjN1zkVrsTtfGEogUk0dVgu5wTaDtS59S8hVqqgU3kQbvmW4MHCqPi9lQ')",
            }}
          ></div>
          <div className="absolute bottom-20 left-10 md:left-20 z-20 max-w-xl">
            <h1 className="text-6xl md:text-8xl font-bold text-white uppercase italic tracking-tighter leading-[0.8]">
              Ride <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Fast</span>
              <br />
              Die Last.
            </h1>
            <button
              className="mt-8 bg-white text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-primary transition-colors"
              onClick={() => navigate('/products')}
              type="button"
            >
              Shop Frames
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px] z-40 transition-opacity duration-300 ease-in-out"></div>
      <div className="absolute top-0 right-0 h-full w-full max-w-[500px] bg-drawer-bg z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out border-l border-drawer-border">
        <header className="flex items-center justify-between px-6 py-5 border-b border-drawer-border shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-white text-xl font-bold leading-tight tracking-tight uppercase">
              Your Cart <span className="text-primary">({itemCount})</span>
            </h2>
          </div>
          <button
            className="group flex items-center justify-center text-gray-400 hover:text-primary transition-colors cursor-pointer p-2 -mr-2"
            onClick={() => navigate('/products')}
            type="button"
          >
            <span className="text-sm font-bold mr-2 uppercase tracking-wider hidden sm:block group-hover:text-white">
              Close
            </span>
            <span className="material-symbols-outlined !text-[28px]">close</span>
          </button>
        </header>
        <div className="flex-1 overflow-y-auto drawer-scroll p-6 space-y-6">
          {cartItems.map((item, index) => (
            <div key={item.product.id}>
              <div className="group flex gap-4 w-full">
                <div className="shrink-0 relative">
                  <div
                    className="bg-center bg-no-repeat bg-cover rounded-sm size-[100px] bg-white/5 border border-white/10"
                    data-alt={item.product.name}
                    style={{
                      backgroundImage: `url("${item.product.image}")`,
                    }}
                  ></div>
                </div>
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <Link
                        className="text-white text-lg font-bold leading-tight uppercase tracking-tight hover:text-primary cursor-pointer transition-colors"
                        to={`/products/${item.product.id}`}
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-white text-lg font-bold leading-tight">{formatPrice(item.product.price)}</p>
                    </div>
                    <p className="text-gray-400 text-sm font-medium mt-1">
                      Team: {item.product.team ?? 'Factory'} | Category: {item.product.category}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center bg-[#2a2a2a] rounded-sm border border-[#333]">
                      <button
                        className="text-white w-8 h-8 flex items-center justify-center hover:bg-[#333] active:text-primary transition-colors text-lg font-medium leading-none pb-1"
                        onClick={() =>
                          item.quantity > 1
                            ? updateQuantity(item.product.id, item.quantity - 1)
                            : removeItem(item.product.id)
                        }
                        type="button"
                      >
                        -
                      </button>
                      <input
                        className="w-8 h-8 p-0 text-center bg-transparent text-white text-sm font-bold border-none focus:ring-0 appearance-none"
                        readOnly
                        type="number"
                        value={item.quantity}
                      />
                      <button
                        className="text-white w-8 h-8 flex items-center justify-center hover:bg-[#333] active:text-primary transition-colors text-lg font-medium leading-none pb-1"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-xs font-bold text-gray-500 uppercase tracking-wider hover:text-red-500 hover:underline underline-offset-4 transition-colors"
                      onClick={() => removeItem(item.product.id)}
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              {index < cartItems.length - 1 ? <div className="h-px bg-drawer-border w-full mt-6"></div> : null}
            </div>
          ))}
        </div>
        <footer className="bg-[#151515] p-6 border-t border-drawer-border shrink-0 z-10 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <p className="text-gray-400 text-base font-medium">Subtotal</p>
              <p className="text-white text-2xl font-bold tracking-tight">{formatPrice(subtotal)}</p>
            </div>
            <div className="flex items-center justify-center gap-2 text-[#666] text-xs uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-base">local_shipping</span>
              <span>Shipping calculated at checkout</span>
            </div>
          </div>
          <button
            className="group relative w-full h-14 bg-primary text-black font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden flex items-center justify-center transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(249,249,6,0.4)]"
            onClick={() => navigate('/signin')}
            type="button"
          >
            <span className="relative z-10 flex items-center gap-2">
              Proceed to Checkout
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </span>
            <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12 opacity-30"></div>
          </button>
          <div className="mt-4 text-center">
            <button
              className="text-gray-500 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors underline underline-offset-4"
              onClick={() => navigate('/products')}
              type="button"
            >
              Continue Shopping
            </button>
          </div>
        </footer>
      </div>
      <Footer />
    </div>
  )
}

export default CartPage
