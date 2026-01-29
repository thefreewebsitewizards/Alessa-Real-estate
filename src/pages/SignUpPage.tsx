import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function SignUpPage() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newsletterOptIn, setNewsletterOptIn] = useState(true)
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      return
    }
    navigate('/products')
  }

  return (
    <div className="signup-theme bg-black text-white font-display antialiased selection:bg-primary selection:text-black overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-black z-0"></div>
          <img
            className="h-full w-full object-cover opacity-40 grayscale mix-blend-overlay"
            data-alt="High contrast gritty action shot of a BMX rider performing a jump in an urban skatepark"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEYcvKo3a-U2NBRRgsVFVJum28KplvMO5D1iGksfRtsxGpUB9GfhicqKjIqFbNdwAGdKVANpiX-Fvuz3Kat0f-R5XSSmEMLN-H23UV2GONVbI0rUBY2BAtyMFhC9yYMfrWSMBhZgR5icQLxsA-VU72TNqWmXSkicIT4yAnk9CRFO7YM6l7_cxRtCCRA-l9wW9YH1H24TgW86PGfQPKsNuJ2_4--NBBprU1VHpZdsiU47n-1sDZ4yLpFBlGzyR7Mn9lpx3KKfCQNg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
        <div className="relative z-20 flex h-full grow flex-col">
          <Navbar />
          <div className="flex flex-1 items-center justify-center px-4 py-10">
            <div className="layout-content-container flex flex-col w-full max-w-[480px]">
              <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-8 industrial-shadow">
                <div className="mb-8 text-center">
                  <h2 className="text-white text-3xl font-black italic uppercase leading-tight tracking-[-0.02em]">
                    Join The Crew
                  </h2>
                  <p className="text-gray-400 mt-2 text-sm font-medium">
                    Create your account to track orders and get exclusive gear drops.
                  </p>
                </div>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <label className="flex flex-col flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">Full Name</p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-white h-12 placeholder:text-gray-500 px-4 text-base font-medium leading-normal shadow-lg"
                      placeholder="Enter your name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(event) => setFullName(event.target.value)}
                    />
                  </label>
                  <label className="flex flex-col flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">Email</p>
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-white h-12 placeholder:text-gray-500 px-4 text-base font-medium leading-normal shadow-lg"
                      placeholder="rider@example.com"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </label>
                  <label className="flex flex-col flex-1">
                    <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">Password</p>
                    <div className="flex w-full flex-1 items-stretch rounded-lg shadow-lg relative">
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none rounded-lg text-black focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-white h-12 placeholder:text-gray-500 px-4 pr-12 text-base font-medium leading-normal"
                        placeholder="Create a password"
                        type={passwordVisible ? 'text' : 'password'}
                        minLength={6}
                        required
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <button
                        className="absolute right-0 top-0 h-full flex items-center pr-4 text-gray-500 cursor-pointer hover:text-black"
                        type="button"
                        onClick={() => setPasswordVisible((prev) => !prev)}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                          visibility
                        </span>
                      </button>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group mt-2">
                    <div className="relative flex items-center">
                      <input
                        className="peer sr-only"
                        type="checkbox"
                        checked={newsletterOptIn}
                        onChange={(event) => setNewsletterOptIn(event.target.checked)}
                      />
                      <div className="h-5 w-5 rounded border border-white/40 bg-transparent transition-all peer-checked:bg-primary peer-checked:border-primary peer-checked:text-black flex items-center justify-center group-hover:border-primary">
                        <span className="material-symbols-outlined opacity-0 peer-checked:opacity-100 font-bold" style={{ fontSize: '16px' }}>
                          check
                        </span>
                      </div>
                    </div>
                    <span className="text-gray-300 text-sm font-normal leading-tight pt-0.5 select-none group-hover:text-white transition-colors">
                      Join the newsletter for <span className="text-primary font-bold">drop alerts</span>
                    </span>
                  </label>
                  <button
                    className="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary text-black hover:bg-[#ffff33] active:scale-[0.98] transition-all duration-200"
                    type="submit"
                  >
                    <span className="text-base font-black uppercase tracking-wider">Create Account</span>
                  </button>
                </form>
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-gray-400 text-sm">
                    Already have an account?
                    <Link
                      className="text-white font-bold hover:text-primary hover:underline underline-offset-4 decoration-primary decoration-2 transition-all"
                      to="/signin"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-6 opacity-60">
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest font-bold">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>
                    verified_user
                  </span>
                  Secure
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest font-bold">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>
                    bolt
                  </span>
                  Fast
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default SignUpPage
