import { Link } from 'react-router-dom'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import useSiteContext from '../../context/useSiteContext'
import { footerRouteByLabel } from '../../data/staticPages'

const socialLinks = [
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    Icon: FaFacebookF,
    iconClassName: 'text-[#3b5998]',
  },
  {
    href: 'https://x.com/',
    label: 'Twitter',
    Icon: FaTwitter,
    iconClassName: 'text-[#1d9bf0]',
  },
  {
    href: 'https://www.youtube.com/',
    label: 'Youtube',
    Icon: FaYoutube,
    iconClassName: 'text-[#ff0000]',
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    Icon: FaInstagram,
    iconClassName: 'text-[#e1306c]',
  },
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    Icon: FaLinkedinIn,
    iconClassName: 'text-[#0a66c2]',
  },
]

function Footer() {
  const { footerLinksLeft, footerLinksRight } = useSiteContext()

  const getRoute = (label) => footerRouteByLabel[label] || '/'

  return (
    <footer className="bg-[#181b21] text-[#cad2df]">
      <div
        className="mx-auto grid max-w-[1240px] gap-10 px-4 py-11 sm:px-5 sm:py-14 lg:grid-cols-[1.18fr_0.68fr_0.68fr_1fr] lg:gap-8"
        data-aos="fade-up"
      >
        <div className="lg:pr-2">
          <p className="text-[0.9rem] leading-6 text-[#aeb7c4]">
            2026 Copyright VENTURE E-BIKE. All Rights Reserved.
          </p>
          <p className="mt-4 text-[0.88rem] leading-6 text-[#8f99a8]">
            Disclaimer: Under no circumstances shall company be liable for indirect, incidental,
            consequential, special, or exemplary damages. Company can change colors, features,
            and specifications without prior announcements.
          </p>

          <div className="mt-6 border-t border-white/12 pt-5">
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white transition-transform hover:-translate-y-0.5"
                >
                  {item.Icon({ className: `text-[0.85rem] ${item.iconClassName}` })}
                </a>
              ))}
            </div>
            <p className="mt-4 text-[0.76rem] text-[#95a0b1]">
              Website Design and Development by{' '}
              <a href="https://www.stercodigitex.com/" target="_blank" rel="noreferrer" className="text-white hover:text-brand">
                Sterco Digitex
              </a>
            </p>
          </div>
        </div>

        <div>
          <div className="space-y-2.5">
            {footerLinksLeft.map((link) => (
              <Link
                key={link}
                to={getRoute(link)}
                className="block font-heading text-[1.12rem] leading-[1.15] text-[#d2d9e5] transition-colors hover:text-brand"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="space-y-2.5">
            {footerLinksRight.map((link) => (
              <Link
                key={link}
                to={getRoute(link)}
                className="block font-heading text-[1.12rem] leading-[1.15] text-[#d2d9e5] transition-colors hover:text-brand"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:pl-2">
          <a
            href="tel:18004192224"
            className="mb-3 inline-flex items-center gap-2.5 text-[1.74rem] leading-none font-bold text-white transition-colors hover:text-brand"
          >
            <FiPhone className="text-[1.25rem] text-[#a6b0bf]" />
            1800-419-2224
          </a>
          <a
            href="mailto:support@ventureebike.com"
            className="mb-4 inline-flex items-start gap-2.5 break-all text-[1.05rem] font-semibold text-white transition-colors hover:text-brand"
          >
            <FiMail className="mt-[0.18rem] shrink-0 text-[1.13rem] text-[#a6b0bf]" />
            support@ventureebike.com
          </a>

          <div className="mt-2.5 space-y-2.5">
            <Link
              to="/become-a-dealer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/28 px-4 py-2.5 font-heading text-[1.2rem] leading-none font-semibold text-white transition-colors hover:bg-white hover:text-[#131920]"
            >
              Become a Dealer
            </Link>
            <Link
              to="/book-test-ride"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/28 px-4 py-2.5 font-heading text-[1.2rem] leading-none font-semibold text-white transition-colors hover:bg-white hover:text-[#131920]"
            >
              Book Test Ride
            </Link>
            <Link
              to="/roadside-assistance"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/28 px-4 py-2.5 font-heading text-[1.2rem] leading-none font-semibold text-white transition-colors hover:bg-white hover:text-[#131920]"
            >
              Roadside Assistance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
