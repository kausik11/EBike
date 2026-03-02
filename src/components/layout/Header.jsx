import { Link, NavLink } from 'react-router-dom'

function Header() {
  const navItems = [
    { to: '/new-arrivals', label: 'New Arrivals' },
    { to: '/vehicles', label: 'Vehicles' },
    { to: '/support', label: 'Support' },
  ]

  const navLinkClass = ({ isActive }) =>
    `font-heading text-[1.05rem] font-semibold tracking-[0.03em] transition-colors ${
      isActive ? 'text-brand' : 'text-[#2d3440] hover:text-brand'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 py-3 sm:px-5">
        <Link to="/" className="brand" aria-label="VENTURE E-BIKE">
          <img src="/logo.png" alt="VENTURE logo" className="block w-[140px] sm:w-[170px]" />
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
            className="hidden rounded-full bg-slate-900 px-4 py-2 font-heading text-[0.95rem] font-bold tracking-[0.02em] text-white sm:inline-flex"
          >
            Find Us
          </Link>
          <Link
            to="/about-us"
            className="rounded-full bg-slate-100 px-4 py-2 font-heading text-[0.95rem] font-bold tracking-[0.02em] text-slate-900"
          >
            Menu
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
