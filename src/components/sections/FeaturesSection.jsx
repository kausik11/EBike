import useSiteContext from '../../context/useSiteContext'

function FeaturesSection() {
  const { features } = useSiteContext()

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16">
      <div className="mb-6">
        <p className="mt-1 text-[#6c727c]">
          <span className="font-heading text-2xl font-bold text-brand align-middle">VENTURE</span>
        </p>
        <h2 className="m-0 font-heading text-[clamp(1.8rem,3vw,2.7rem)] tracking-[0.03em]">FEATURES</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="flex items-center gap-3 rounded-[14px] border border-[#e7edf3] bg-gradient-to-br from-white to-[#f7fafc] p-4"
          >
            <img src={feature.icon} alt="" aria-hidden="true" className="h-[34px] w-[34px] object-contain" />
            <h3 className="m-0 text-[0.98rem] leading-[1.35]">{feature.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
