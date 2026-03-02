import { Link } from 'react-router-dom'
import useSiteContext from '../../context/useSiteContext'

function ModelsSection() {
  const { products, currentProduct, activeProduct, setActiveProduct } = useSiteContext()
  const actionButtonClass =
    'rounded-full px-5 py-2.5 text-center font-heading text-sm font-bold uppercase tracking-[0.04em] sm:px-6 sm:py-3 sm:text-base'

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16" id="models" data-aos="fade-up">
      <div className="mb-6">
        <p className="mb-2 inline-block font-heading text-sm font-bold tracking-[0.08em] text-brand uppercase">
          Scooters
        </p>
        <h2
          className="m-0 font-heading text-[clamp(1.8rem,3vw,2.7rem)] tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          High Speed Electric Range
        </h2>
      </div>

      <div
        className="mb-5 flex gap-2.5 overflow-x-auto pb-1 whitespace-nowrap md:flex-wrap"
        role="tablist"
        aria-label="Scooter models"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        {products.map((product, index) => (
          <button
            key={product.name}
            type="button"
            className={`rounded-full border px-4 py-2.5 font-heading text-[0.98rem] font-bold tracking-[0.03em] transition-colors ${
              index === activeProduct
                ? 'glass-soft border-slate-700 bg-slate-800/90 text-white'
                : 'glass-soft border-white/60 text-slate-800 hover:border-slate-800/30'
            }`}
            onClick={() => setActiveProduct(index)}
          >
            {product.name}
          </button>
        ))}
      </div>

      <article
        className="glass-panel grid overflow-hidden rounded-3xl lg:grid-cols-[1.15fr_1fr]"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <div
          className="grid place-items-center p-4"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(243, 111, 33, 0.22), transparent 40%), linear-gradient(120deg, #eff3f9, #f8fafc)',
          }}
        >
          <img
            src={currentProduct.image}
            alt={currentProduct.name}
            className="h-auto max-h-[300px] w-full object-contain lg:max-h-[360px]"
          />
        </div>

        <div className="p-5">
          <div className="flex items-center justify-between gap-4">
            <img
              src={currentProduct.logo}
              alt={`${currentProduct.name} logo`}
              className="h-11 max-w-[70%] w-auto object-contain"
            />
            <img
              className="h-[38px] w-[38px]"
              src="https://okinawascooters.com/images/webp/arrow-circle.svg"
              alt="Model details"
            />
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <div className="glass-soft rounded-[14px] p-3">
              <p className="m-0 text-sm text-[#717785]">Range</p>
              <h3 className="mt-1 font-heading text-[1.22rem]">{currentProduct.range}</h3>
            </div>
            <div className="glass-soft rounded-[14px] p-3">
              <p className="m-0 text-sm text-[#717785]">Top Speed</p>
              <h3 className="mt-1 font-heading text-[1.22rem]">{currentProduct.speed}</h3>
            </div>
            <div className="glass-soft rounded-[14px] p-3">
              <p className="m-0 text-sm text-[#717785]">Charging</p>
              <h3 className="mt-1 font-heading text-[1.22rem]">{currentProduct.charging}</h3>
            </div>
          </div>

          <div className="glass-soft mt-4 rounded-[14px] p-3.5">
            <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.8rem] font-bold text-emerald-800">
              In-stock
            </span>
            <p className="mt-2 text-[#667085]">Ex-Showroom Price*</p>
            <h4 className="mt-1 font-heading text-[1.45rem]">Rs. {currentProduct.price}</h4>
          </div>

          <div className="mt-4 grid gap-2.5 sm:flex sm:flex-wrap" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/book-test-ride"
              className={`${actionButtonClass} w-full bg-white text-slate-900 shadow-[inset_0_0_0_1px_#d8dde4] sm:w-auto`}
              data-aos="fade-right"
              data-aos-delay="240"
            >
              Test Ride
            </Link>
            <Link
              to="/vehicles"
              className={`${actionButtonClass} w-full bg-brand text-white transition-colors hover:bg-brand-dark sm:w-auto`}
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default ModelsSection
