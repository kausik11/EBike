import { useEffect } from 'react'
import AOS from 'aos'
import { Outlet, useLocation } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './Header'
import Footer from './Footer'
import useSiteContext from '../../context/useSiteContext'

function RootLayout() {
  const location = useLocation()
  const { isDarkTheme } = useSiteContext()

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
    })
  }, [])

  useEffect(() => {
    AOS.refreshHard()
  }, [location.pathname])

  return (
    <div
      className={`relative isolate overflow-x-hidden transition-colors duration-300 ${
        isDarkTheme ? 'text-slate-100' : 'text-[#1d2229]'
      }`}
    >
      <div className={`premium-bg transition-opacity duration-300 ${isDarkTheme ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true" />
      <div
        className={`fixed inset-0 -z-50 bg-[radial-gradient(70%_55%_at_20%_18%,rgba(16,168,224,0.18),transparent_68%),radial-gradient(45%_40%_at_85%_12%,rgba(164,206,62,0.22),transparent_65%),linear-gradient(180deg,#0b1220_0%,#101828_55%,#0f172a_100%)] transition-opacity duration-300 ${
          isDarkTheme ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2200}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </div>
  )
}

export default RootLayout
