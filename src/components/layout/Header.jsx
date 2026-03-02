import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { to: '/new-arrivals', label: 'New Arrivals' },
    { to: '/vehicles', label: 'Vehicles' },
    { to: '/support', label: 'Support' },
  ]

  const navLinkClass = ({ isActive }) =>
    `font-heading text-[1.05rem] font-semibold tracking-[0.03em] transition-colors ${
      isActive ? 'text-brand' : 'text-[#2d3440] hover:text-brand'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block rounded-xl px-3 py-2 font-heading text-base font-semibold tracking-[0.02em] transition-colors ${
      isActive ? 'bg-brand/10 text-brand' : 'text-[#2d3440] hover:bg-slate-100'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/90 backdrop-blur">
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
          <Link
            to="/find-us"
            className="hidden rounded-full bg-slate-900 px-4 py-2 font-heading text-[0.95rem] font-bold tracking-[0.02em] text-white md:inline-flex"
          >
            Find Us
          </Link>
          <button
            type="button"
            className="rounded-full bg-slate-100 px-4 py-2 font-heading text-[0.95rem] font-bold tracking-[0.02em] text-slate-900 lg:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>
          <Link
            to="/about-us"
            className="hidden rounded-full bg-slate-100 px-4 py-2 font-heading text-[0.95rem] font-bold tracking-[0.02em] text-slate-900 lg:inline-flex"
          >
            About
          </Link>
        </div>
      </div>

      <div
        id="mobile-nav-panel"
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'max-h-[400px]' : 'max-h-0'
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
              className="rounded-xl bg-slate-900 px-3 py-2 text-center font-heading text-sm font-bold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Us
            </Link>
            <Link
              to="/about-us"
              className="rounded-xl bg-slate-100 px-3 py-2 text-center font-heading text-sm font-bold text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
