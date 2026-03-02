import { Link } from 'react-router-dom'
import useSiteContext from '../../context/useSiteContext'

function ModelsSection() {
  const { products, currentProduct, activeProduct, setActiveProduct } = useSiteContext()
  const actionButtonClass =
    'rounded-full px-6 py-3 font-heading text-base font-bold uppercase tracking-[0.04em]'

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16" id="models">
      <div className="mb-6">
        <p className="mb-2 inline-block font-heading text-sm font-bold tracking-[0.08em] text-brand uppercase">
          Scooters
        </p>
        <h2 className="m-0 font-heading text-[clamp(1.8rem,3vw,2.7rem)] tracking-[0.03em]">
          High Speed Electric Range
        </h2>
      </div>

      <div
        className="mb-5 flex gap-2.5 overflow-x-auto pb-1 whitespace-nowrap md:flex-wrap"
        role="tablist"
        aria-label="Scooter models"
      >
        {products.map((product, index) => (
          <button
            key={product.name}
            type="button"
            className={`rounded-full border px-4 py-2.5 font-heading text-[0.98rem] font-bold tracking-[0.03em] transition-colors ${
              index === activeProduct
                ? 'border-slate-800 bg-slate-800 text-white'
                : 'border-[#d8dde4] bg-white text-slate-800 hover:border-slate-800/30'
            }`}
            onClick={() => setActiveProduct(index)}
          >
            {product.name}
          </button>
        ))}
      </div>

      <article className="grid overflow-hidden rounded-3xl border border-[#e8edf3] bg-white shadow-[0_12px_35px_rgba(17,24,39,0.06)] lg:grid-cols-[1.15fr_1fr]">
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
            <div className="rounded-[14px] border border-[#ecf0f5] bg-[#fbfcfe] p-3">
              <p className="m-0 text-sm text-[#717785]">Range</p>
              <h3 className="mt-1 font-heading text-[1.22rem]">{currentProduct.range}</h3>
            </div>
            <div className="rounded-[14px] border border-[#ecf0f5] bg-[#fbfcfe] p-3">
              <p className="m-0 text-sm text-[#717785]">Top Speed</p>
              <h3 className="mt-1 font-heading text-[1.22rem]">{currentProduct.speed}</h3>
            </div>
            <div className="rounded-[14px] border border-[#ecf0f5] bg-[#fbfcfe] p-3">
              <p className="m-0 text-sm text-[#717785]">Charging</p>
              <h3 className="mt-1 font-heading text-[1.22rem]">{currentProduct.charging}</h3>
            </div>
          </div>

          <div className="mt-4 rounded-[14px] border border-[#ecf0f5] bg-[#fbfcfe] p-3.5">
            <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-0.5 text-[0.8rem] font-bold text-emerald-800">
              In-stock
            </span>
            <p className="mt-2 text-[#667085]">Ex-Showroom Price*</p>
            <h4 className="mt-1 font-heading text-[1.45rem]">Rs. {currentProduct.price}</h4>
          </div>

          <div className="mt-4 flex flex-wrap gap-2.5">
            <Link
              to="/book-test-ride"
              className={`${actionButtonClass} bg-white text-slate-900 shadow-[inset_0_0_0_1px_#d8dde4]`}
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
      </article>
    </section>
  )
}

export default ModelsSection
