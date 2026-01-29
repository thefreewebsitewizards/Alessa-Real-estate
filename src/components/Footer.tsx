import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-4xl">two_wheeler</span>
              <h2 className="text-white text-2xl font-bold tracking-tighter uppercase italic">
                Aggro<span className="text-primary">Bikes</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Born on the asphalt, bred for the podium. Aggro Bikes delivers premium BMX components for riders who
              demand performance and durability.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded bg-[#222] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                className="w-10 h-10 rounded bg-[#222] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                href="https://www.youtube.com/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-xs font-bold">YT</span>
              </a>
              <a
                className="w-10 h-10 rounded bg-[#222] flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors"
                href="https://www.tiktok.com/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="text-xs font-bold">TT</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Shop</h4>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
              <li>
                <Link className="hover:text-primary transition-colors" to="/products">
                  All Products
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/products/zeronine-frame">
                  Frames
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/products">
                  Apparel
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/products">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Support</h4>
            <ul className="flex flex-col gap-3 text-gray-500 text-sm font-medium">
              <li>
                <Link className="hover:text-primary transition-colors" to="/products">
                  Shipping &amp; Returns
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/products">
                  Warranty
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/products">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" to="/products">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-mono uppercase">
          <p>© 2023 Aggro Bikes Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:text-gray-400" to="/products">
              Privacy Policy
            </Link>
            <Link className="hover:text-gray-400" to="/products">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
