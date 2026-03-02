import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiInfo, FiMapPin, FiMenu, FiX } from 'react-icons/fi'
import useSiteContext from '../../context/useSiteContext'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isDarkTheme, toggleTheme } = useSiteContext()

  const navItems = [
    { to: '/new-arrivals', label: 'New Arrivals' },
    { to: '/vehicles', label: 'Vehicles' },
    { to: '/support', label: 'Support' },
  ]

  const navLinkClass = ({ isActive }) =>
    `font-heading text-[1.05rem] font-semibold tracking-[0.03em] transition-colors ${
      isActive ? 'text-brand' : isDarkTheme ? 'text-slate-200 hover:text-brand' : 'text-[#2d3440] hover:text-brand'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block rounded-xl px-3 py-2 font-heading text-base font-semibold tracking-[0.02em] transition-colors ${
      isActive
        ? 'bg-brand/10 text-brand'
        : isDarkTheme
          ? 'text-slate-200 hover:bg-slate-800'
          : 'text-[#2d3440] hover:bg-slate-100'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        isDarkTheme ? 'border-slate-700/60 bg-slate-900/70' : 'border-white/35 bg-white/45'
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3 sm:px-5">
        <Link
          to="/"
          className="brand"
          aria-label="VENTURE E-BIKE"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src="/logo.png" alt="VENTURE logo" className="block w-[120px] sm:w-[170px]" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <AnimatedThemeToggler
            type="button"
            isDark={isDarkTheme}
            onToggle={toggleTheme}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
              isDarkTheme
                ? 'border-slate-500/70 bg-slate-800/85 text-amber-300'
                : 'border-slate-200 bg-white text-slate-900'
            }`}
            aria-label="Toggle theme"
          />
          <Link
            to="/find-us"
            className={`hidden items-center gap-1.5 rounded-full px-4 py-2 font-heading text-[0.95rem] font-bold tracking-[0.02em] md:inline-flex ${
              isDarkTheme ? 'bg-brand text-slate-950' : 'bg-slate-900 text-white'
            }`}
          >
            <FiMapPin className="text-[0.95rem]" />
            Find Us
          </Link>
          <button
            type="button"
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-heading text-[0.95rem] font-bold tracking-[0.02em] lg:hidden ${
              isDarkTheme ? 'bg-slate-700 text-slate-100' : 'bg-slate-100 text-slate-900'
            }`}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {isMobileMenuOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
          <Link
            to="/about-us"
            className={`hidden items-center gap-1.5 rounded-full px-4 py-2 font-heading text-[0.95rem] font-bold tracking-[0.02em] lg:inline-flex ${
              isDarkTheme ? 'bg-slate-700 text-slate-100' : 'bg-slate-100 text-slate-900'
            }`}
          >
            <FiInfo className="text-[0.95rem]" />
            About
          </Link>
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        } ${
          isDarkTheme ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'
        }`}
      >
        <div className="mx-auto max-w-[1240px] px-4 py-3 sm:px-5">
          <nav className="space-y-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={mobileNavLinkClass}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link
              to="/find-us"
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-center font-heading text-sm font-bold ${
                isDarkTheme ? 'bg-brand text-slate-950' : 'bg-slate-900 text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiMapPin />
              Find Us
            </Link>
            <Link
              to="/about-us"
              className={`inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-center font-heading text-sm font-bold ${
                isDarkTheme ? 'bg-slate-700 text-slate-100' : 'bg-slate-100 text-slate-900'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiInfo />
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
