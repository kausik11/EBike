import { Link } from 'react-router-dom'
import useSiteContext from '../../context/useSiteContext'

function HeroSection() {
  const { heroSlides, currentSlide, activeSlide, setActiveSlide } = useSiteContext()
  const actionButtonClass =
    'rounded-full px-6 py-3 font-heading text-base font-bold uppercase tracking-[0.04em]'

  return (
    <section className="relative isolate flex min-h-[64vh] items-end overflow-hidden lg:min-h-[78vh]">
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
            className="w-[min(72vw,360px)]"
          />
          <Link to="/vehicles" aria-label="Explore model">
            <img
              src="https://okinawascooters.com/images/webp/arrow-w.svg"
              alt="Explore"
              className="h-10 w-10 rounded-full bg-white/20 p-2.5"
            />
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/book-test-ride"
            className={`${actionButtonClass} bg-white text-slate-900`}
          >
            Test Ride
          </Link>
          <Link
            to="/vehicles"
            className={`${actionButtonClass} bg-brand text-white transition-colors hover:bg-brand-dark`}
          >
            Buy Now
          </Link>
        </div>
      </div>

      <div className="absolute right-5 bottom-5 z-10 flex gap-2" role="tablist" aria-label="Hero slides">
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
