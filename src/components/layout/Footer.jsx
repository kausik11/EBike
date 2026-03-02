import { Link } from 'react-router-dom'
import { FiActivity, FiMail, FiMapPin, FiPhone, FiTool } from 'react-icons/fi'
import useSiteContext from '../../context/useSiteContext'
import { footerRouteByLabel } from '../../data/staticPages'

function Footer() {
  const { footerLinksLeft, footerLinksRight } = useSiteContext()

  const getRoute = (label) => footerRouteByLabel[label] || '/'

  return (
    <footer className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16">
      <div
        className="glass-panel grid gap-6 rounded-3xl px-5 py-7 lg:grid-cols-[0.95fr_1.6fr]"
        data-aos="fade-up"
      >
        <div>
          <p className="mb-3 text-[0.92rem] leading-6 text-[#5f6674]">
            2026 Copyright VENTURE E-BIKE. All Rights Reserved.
          </p>
          <p className="text-[0.92rem] leading-6 text-[#5f6674]">
            Disclaimer: Company can change colors, features, and specifications
            without prior announcements.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            {footerLinksLeft.map((link) => (
              <Link
                key={link}
                to={getRoute(link)}
                className="mb-2 block text-[0.93rem] text-[#252c39] transition-colors hover:text-brand"
              >
                {link}
              </Link>
            ))}
          </div>
          <div>
            {footerLinksRight.map((link) => (
              <Link
                key={link}
                to={getRoute(link)}
                className="mb-2 block text-[0.93rem] text-[#252c39] transition-colors hover:text-brand"
              >
                {link}
              </Link>
            ))}
          </div>
          <div>
            <a
              href="tel:18004192224"
              className="mb-2 inline-flex items-center gap-2 text-[0.93rem] text-[#252c39] hover:text-brand"
            >
              <FiPhone className="text-brand" />
              1800-419-2224
            </a>
            <a
              href="mailto:support@ventureebike.com"
              className="mb-3 inline-flex items-start gap-2 break-all text-[0.93rem] text-[#252c39] hover:text-brand"
            >
              <FiMail className="mt-0.5 shrink-0 text-brand" />
              support@ventureebike.com
            </a>
            <Link
              to="/become-a-dealer"
              className="mb-2 inline-flex w-full items-center gap-2 rounded-full border border-[#dce3eb] bg-white px-3 py-2 text-left text-[0.93rem] text-slate-900"
            >
              <FiActivity className="text-brand" />
              Become a Dealer
            </Link>
            <Link
              to="/book-test-ride"
              className="mb-2 inline-flex w-full items-center gap-2 rounded-full border border-[#dce3eb] bg-white px-3 py-2 text-left text-[0.93rem] text-slate-900"
            >
              <FiMapPin className="text-brand" />
              Book Test Ride
            </Link>
            <Link
              to="/roadside-assistance"
              className="inline-flex w-full items-center gap-2 rounded-full border border-[#dce3eb] bg-white px-3 py-2 text-left text-[0.93rem] text-slate-900"
            >
              <FiTool className="text-brand" />
              Roadside Assistance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
