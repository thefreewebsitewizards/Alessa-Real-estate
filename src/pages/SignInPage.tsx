import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function SignInPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim() || !password.trim()) {
      return
    }
    navigate('/products')
  }

  return (
    <div className="signin-theme dark bg-background-dark font-display min-h-screen flex flex-col overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <main className="flex-grow flex items-center justify-center relative w-full px-4 py-12">
        <div className="absolute inset-0 bg-metal-texture pointer-events-none opacity-40 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="relative z-10 w-full max-w-[480px] flex flex-col">
          <div className="text-center mb-10">
            <div className="inline-block border-2 border-primary/20 bg-black/50 p-4 rounded-full mb-6 shadow-[0_0_15px_rgba(249,249,6,0.1)]">
              <span className="material-symbols-outlined text-primary text-5xl">pedal_bike</span>
            </div>
            <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-none mb-2 drop-shadow-lg">
              Aggro<span className="text-primary">Bikes</span>
            </h2>
            <p className="text-neutral-400 text-sm font-medium tracking-wide uppercase">Industrial Performance Parts</p>
          </div>
          <div className="bg-dark-surface border border-[#333333] p-8 md:p-10 rounded-xl shadow-2xl backdrop-blur-md">
            <form action="#" className="flex flex-col gap-6" method="POST" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-white text-xs font-bold tracking-widest uppercase ml-1" htmlFor="email">
                  Rider Email
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-black/60 z-10">
                    mail
                  </span>
                  <input
                    className="w-full h-14 bg-white text-black font-bold placeholder:text-black/40 border-0 rounded-lg pl-12 pr-4 focus:ring-4 focus:ring-primary/50 focus:bg-white transition-all transform hover:scale-[1.01]"
                    id="email"
                    name="email"
                    placeholder="ENTER YOUR EMAIL"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label className="text-white text-xs font-bold tracking-widest uppercase" htmlFor="password">
                    Password
                  </label>
                  <Link className="text-neutral-400 hover:text-white text-xs transition-colors" to="/signup">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-black/60 z-10">
                    lock
                  </span>
                  <input
                    className="w-full h-14 bg-white text-black font-bold placeholder:text-black/40 border-0 rounded-lg pl-12 pr-4 focus:ring-4 focus:ring-primary/50 focus:bg-white transition-all transform hover:scale-[1.01]"
                    id="password"
                    name="password"
                    placeholder="ENTER PASSWORD"
                    type="password"
                    minLength={6}
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
              </div>
              <button
                className="mt-4 w-full h-14 bg-primary hover:bg-[#dcdc05] text-black text-lg font-black tracking-wider uppercase rounded-lg shadow-[0_0_20px_rgba(249,249,6,0.2)] hover:shadow-[0_0_30px_rgba(249,249,6,0.4)] transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group"
                type="submit"
              >
                <span>Sign In</span>
                <span className="material-symbols-outlined font-bold group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
            <div className="relative py-8">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#333333]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-dark-surface px-4 text-neutral-500 font-medium uppercase text-xs tracking-widest">
                  Or access with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                className="flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#333] text-white py-3 rounded-lg border border-[#444] transition-colors"
                onClick={() => navigate('/products')}
                type="button"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.0003 20.45c-4.6617 0-8.4375-3.7766-8.4375-8.4375 0-4.6617 3.7758-8.4375 8.4375-8.4375 4.6608 0 8.4375 3.7758 8.4375 8.4375 0 4.6609-3.7767 8.4375-8.4375 8.4375zm0-18.5625C6.4173 1.8875 1.8878 6.4178 1.8878 12.0125c0 5.5947 4.5295 10.125 10.1125 10.125 5.5822 0 10.1125-4.5303 10.1125-10.125 0-5.5947-4.5303-10.125-10.1125-10.125zM12.75 16.5v-3h3v-2.25h-3v-2.25h-2.25v2.25h-2.25v2.25h2.25v3h2.25z"></path>
                </svg>
                <span className="text-xs font-bold tracking-wide">GOOGLE</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#333] text-white py-3 rounded-lg border border-[#444] transition-colors"
                onClick={() => navigate('/products')}
                type="button"
              >
                <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.2 12.0125l-1.2-1.2 3.6-3.6h-7.2v-1.2h9.6v9.6h-1.2v-7.2l-3.6 3.6z"></path>
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-2 0h-1.6c0 3.97-3.23 7.2-7.2 7.2v1.6c4.86 0 8.8-3.94 8.8-8.8zm-8.8 8.8c-3.97 0-7.2-3.23-7.2-7.2H2.4c0 4.86 3.94 8.8 8.8 8.8v-1.6z"></path>
                </svg>
                <span className="text-xs font-bold tracking-wide">APPLE</span>
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-neutral-400 text-sm">
              New to the track?
              <Link className="text-primary font-bold hover:underline decoration-2 underline-offset-4 ml-1" to="/signup">
                START YOUR ENGINE
              </Link>
            </p>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-20"></div>
        <div
          className="hidden lg:block absolute left-0 top-0 h-full w-1/4 z-0 opacity-20"
          data-alt="Abstract view of bike tire texture"
          style={{
            background:
              "linear-gradient(90deg, #000 10%, transparent 100%), url('https://images.unsplash.com/photo-1599818818821-6d9b54c0e620?q=80&w=2670&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div
          className="hidden lg:block absolute right-0 top-0 h-full w-1/4 z-0 opacity-20"
          data-alt="Abstract view of bike frame geometry"
          style={{
            background:
              "linear-gradient(-90deg, #000 10%, transparent 100%), url('https://images.unsplash.com/photo-1544673628-9844f23b7264?q=80&w=2574&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </main>
      <Footer />
    </div>
  )
}

export default SignInPage
