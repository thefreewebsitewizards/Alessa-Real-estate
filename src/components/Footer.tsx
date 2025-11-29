function Footer() {
  return (
    <footer className="mt-12 border-t border-[#e3aa26]/20 py-6 px-6 bg-[#f3e8cd] dark:bg-[#f3e8cd]">
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="/Alessa.png" alt="Alessa logo" className="h-12 w-12 md:h-14 md:w-14 object-contain shrink-0 mix-blend-multiply" />
            <h3 className="font-bold text-lg text-[#1b170e] dark:text-[#fbfbf8]">Alessa Aichinger</h3>
          </div>
          <p className="text-sm text-[#96814f] dark:text-[#a19172]">Global Luxury Real Estate Advisor</p>
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#1b170e] dark:text-[#fbfbf8]">Explore</h3>
          <ul className="mt-2 space-y-1 text-sm text-[#96814f] dark:text-[#a19172]">
            <li><a className="hover:text-[#e3aa26]" href="#">Properties</a></li>
            <li><a className="hover:text-[#e3aa26]" href="#">About Alessa</a></li>
            <li><a className="hover:text-[#e3aa26]" href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg text-[#1b170e] dark:text-[#fbfbf8]">Connect</h3>
          <div className="mt-2 flex justify-center gap-4 md:justify-start">
            <a className="text-[#96814f] dark:text-[#a19172] hover:text-[#e3aa26]" href="#">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.849-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919A118.75 118.75 0 0112 2.163zm0 1.441c-3.117 0-3.482.01-4.698.067-2.694.123-3.995 1.424-4.118 4.118-.057 1.217-.066 1.583-.066 4.582 0 2.998.01 3.366.066 4.582.123 2.694 1.424 3.995 4.118 4.118 1.217.057 1.583.067 4.698.067 3.117 0 3.482-.01 4.698-.067 2.694-.123 3.995-1.424 4.118-4.118.057-1.217.066-1.583.066-4.582 0-2.998-.01-3.366-.066-4.582-.123-2.694-1.424-3.995-4.118-4.118-1.217-.057-1.583-.067-4.698-.067zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 1.441a3.722 3.722 0 110 7.444 3.722 3.722 0 010-7.444zM16.949 5.596a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" /></svg>
            </a>
            <a className="text-[#96814f] dark:text-[#a19172] hover:text-[#e3aa26]" href="#">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
            <a className="text-[#96814f] dark:text-[#a19172] hover:text-[#e3aa26]" href="#">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.49 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.002 3.705a.75.75 0 01.75.75v1.506a.75.75 0 01-1.5 0v-1.506a.75.75 0 01.75-.75zm4.108 1.836a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 1.5a3.663 3.663 0 110 7.326 3.663 3.663 0 010-7.326z" fillRule="evenodd" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-[#e3aa26]/20 pt-8 text-center text-sm text-[#96814f] dark:text-[#a19172]">
        <p>© 2024 Alessa Aichinger. All Rights Reserved. Designed with elegance.</p>
      </div>
    </footer>
  )
}

export default Footer
