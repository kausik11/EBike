import useSiteContext from '../../context/useSiteContext'

function SustainabilitySection() {
  const { sustainabilityStats } = useSiteContext()

  return (
    <section
      className="mx-auto mt-8 max-w-[1240px] rounded-2xl px-4 py-10 text-center text-slate-50 sm:rounded-3xl sm:px-5 sm:py-14"
      style={{
        background:
          'radial-gradient(circle at 14% 10%, rgba(255, 255, 255, 0.26), transparent 35%), linear-gradient(128deg, #0f172a 0%, #1f2937 52%, #10a8e0 100%)',
      }}
    >
      <h2 className="m-0 font-heading text-[clamp(1.7rem,4vw,3.4rem)] leading-[1.02]">
        <span className="text-[#ffd3b8]">Sustainable</span> Today for a{' '}
        <span className="text-[#ffd3b8]">Greener</span> Tomorrow...
      </h2>
      <button
        type="button"
        className="mt-4 w-full rounded-full bg-white px-6 py-3 font-heading font-bold text-slate-900 sm:w-auto"
      >
        Check Your Savings
      </button>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sustainabilityStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-[14px] border border-white/30 bg-white/10 p-4 backdrop-blur"
          >
            <p className="m-0 opacity-90">{stat.label}</p>
            <h3 className="mt-1 font-heading text-[1.6rem]">{stat.value}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SustainabilitySection
