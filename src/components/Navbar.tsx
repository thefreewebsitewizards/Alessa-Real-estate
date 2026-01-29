import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#1A1A1A]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link className="flex items-center gap-2" to="/">
          <span className="material-symbols-outlined text-primary text-3xl">two_wheeler</span>
          <h2 className="text-white text-xl font-bold tracking-tighter uppercase italic">
            Aggro<span className="text-primary">Bikes</span>
          </h2>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-primary transition-colors" to="/products">
            Shop
          </Link>
          <Link className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-primary transition-colors" to="/admin">
            Admin
          </Link>
          <Link className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-primary transition-colors" to="/products">
            Parts
          </Link>
          <Link className="text-sm font-bold uppercase tracking-wider text-gray-300 hover:text-primary transition-colors" to="/team">
            Team
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link className="text-white hover:text-primary transition-colors" to="/signin">
            <span className="material-symbols-outlined">person</span>
          </Link>
          <Link className="relative text-white hover:text-primary transition-colors group" to="/cart">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-black">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
