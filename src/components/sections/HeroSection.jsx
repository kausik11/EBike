import { Link } from 'react-router-dom'
import useSiteContext from '../../context/useSiteContext'
import { RainbowButton } from '@/components/ui/rainbow-button'

function HeroSection() {
  const { heroSlides, currentSlide, activeSlide, setActiveSlide } = useSiteContext()
  return (
    <section
      className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-[#0a0a0a] sm:min-h-[64vh] lg:min-h-[78vh]"
      data-aos="zoom-out"
    >
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

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 pb-8 sm:px-5 sm:pb-12 lg:-translate-x-6 xl:-translate-x-25" data-aos="fade-up" data-aos-delay="120">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-white/25 bg-black/25 px-4 py-2.5 text-white backdrop-blur-sm sm:px-5 sm:py-3">
            <p className="font-heading text-[0.72rem] font-bold tracking-[0.2em] text-[#a4ce3e] uppercase sm:text-[0.8rem]">
              {currentSlide.name ?? 'demo'}
            </p>
            <h1 className="font-heading text-[clamp(1.35rem,4vw,2.3rem)] leading-none font-bold uppercase">
              {currentSlide.model}
            </h1>
          </div>
          <Link to="/vehicles" aria-label="Explore model">
            <img
              src="https://okinawascooters.com/images/webp/arrow-w.svg"
              alt="Explore"
              className="h-9 w-9 rounded-full bg-white/20 p-2 sm:h-10 sm:w-10 sm:p-2.5"
            />
          </Link>
        </div>
        <div className="mt-4 flex w-full max-w-[340px] gap-2 sm:mt-6 sm:max-w-none sm:gap-3" data-aos="fade-up" data-aos-delay="220">
          <RainbowButton
            asChild
            size="sm"
            variant="outline"
            className="h-9 flex-1 rounded-full px-3 font-heading text-[0.68rem] font-bold tracking-[0.08em] text-slate-900 uppercase transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(255,255,255,0.28)] dark:text-slate-100 dark:hover:shadow-[0_10px_20px_rgba(16,168,224,0.35)] sm:h-10 sm:flex-none sm:px-4 sm:text-[0.74rem] md:h-11 md:px-5 md:text-[0.82rem] lg:h-12 lg:min-w-[180px] lg:px-7 lg:text-[0.94rem] xl:h-14 xl:min-w-[210px] xl:px-9 xl:text-[1.03rem]"
            data-aos="fade-right"
            data-aos-delay="260"
          >
            <Link to="/book-test-ride">Test Ride</Link>
          </RainbowButton>
          <RainbowButton
            asChild
            size="sm"
            className="h-9 flex-1 rounded-full px-3 font-heading text-[0.68rem] font-bold tracking-[0.08em] text-white uppercase [--color-1:#a4ce3e] [--color-2:#10a8e0] [--color-3:#7dd3fc] [--color-4:#38bdf8] [--color-5:#22d3ee] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_10px_20px_rgba(16,168,224,0.45)] dark:text-slate-900 dark:hover:shadow-[0_10px_20px_rgba(255,255,255,0.34)] sm:h-10 sm:flex-none sm:px-4 sm:text-[0.74rem] md:h-11 md:px-5 md:text-[0.82rem] lg:h-12 lg:min-w-[180px] lg:px-7 lg:text-[0.94rem] xl:h-14 xl:min-w-[210px] xl:px-9 xl:text-[1.03rem]"
            data-aos="fade-left"
            data-aos-delay="320"
          >
            <Link to="/vehicles">Buy Now</Link>
          </RainbowButton>
        </div>
      </div>
      <div
        className="absolute top-1/2 right-3 z-10 flex -translate-y-1/2 flex-col gap-2 sm:right-5"
        role="tablist"
        aria-label="Hero slides"
        data-aos="fade-up"
        data-aos-delay="180"
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
