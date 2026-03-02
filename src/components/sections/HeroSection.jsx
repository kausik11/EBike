import { Link } from 'react-router-dom'
import useSiteContext from '../../context/useSiteContext'

function HeroSection() {
  const { heroSlides, currentSlide, activeSlide, setActiveSlide } = useSiteContext()
  const actionButtonClass =
    'rounded-full px-5 py-2.5 text-center font-heading text-sm font-bold uppercase tracking-[0.04em] sm:px-6 sm:py-3 sm:text-base'

  return (
    <section className="relative isolate flex min-h-[58vh] items-end overflow-hidden sm:min-h-[64vh] lg:min-h-[78vh]">
      <img
        src={currentSlide.banner}
        alt={currentSlide.model}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 12% 14%, rgba(243, 111, 33, 0.28), transparent 35%), linear-gradient(to top, rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.2))',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-6 sm:px-5 sm:pb-12">
        <div className="flex items-center gap-3">
          <img
            src={currentSlide.logo}
            alt={currentSlide.model}
            className="w-[min(72vw,360px)] max-w-[240px] sm:max-w-none"
          />
          <Link to="/vehicles" aria-label="Explore model">
            <img
              src="https://okinawascooters.com/images/webp/arrow-w.svg"
              alt="Explore"
              className="h-9 w-9 rounded-full bg-white/20 p-2 sm:h-10 sm:w-10 sm:p-2.5"
            />
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/book-test-ride"
            className={`${actionButtonClass} w-full bg-white text-slate-900 sm:w-auto`}
          >
            Test Ride
          </Link>
          <Link
            to="/vehicles"
            className={`${actionButtonClass} w-full bg-brand text-white transition-colors hover:bg-brand-dark sm:w-auto`}
          >
            Buy Now
          </Link>
        </div>
      </div>

      <div
        className="absolute right-1/2 bottom-4 z-10 flex translate-x-1/2 gap-2 sm:right-5 sm:translate-x-0"
        role="tablist"
        aria-label="Hero slides"
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.model}
            type="button"
            className={`h-[11px] w-[11px] rounded-full border-0 ${
              index === activeSlide ? 'bg-brand' : 'bg-white/45'
            }`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to ${slide.model}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
