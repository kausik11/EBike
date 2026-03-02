import useSiteContext from '../../context/useSiteContext'

function TechnologySection() {
  const { technologyCards } = useSiteContext()

  return (
    <section
      className="mx-auto mt-7 max-w-[1240px] rounded-3xl bg-gradient-to-br from-[#f5f7fb] to-[#eef3f8] px-4 py-10 sm:px-5 sm:py-16"
      id="support"
    >
      <div className="mb-6">
        <h2 className="m-0 font-heading text-[clamp(1.8rem,3vw,2.7rem)] tracking-[0.03em]">TECHNOLOGY</h2>
        <p className="mt-1 text-[#6c727c]">
          by <span className="font-heading text-2xl font-bold text-brand align-middle">VENTURE</span>
        </p>
      </div>

      <div className="grid items-center gap-5 lg:grid-cols-2">
        <div>
          <blockquote className="m-0 font-heading text-[clamp(1.5rem,3vw,2rem)] leading-[1.15] font-bold">
            Creating Innovation in the field of EV Technology
          </blockquote>
          <p className="mt-3 max-w-[52ch] text-[#495163]">
            India is on the fast track of growth. The modern Indian rider needs a
            machine that matches speed, comfort, and sustainability together.
          </p>
        </div>
        <img
          src="https://okinawascooters.com/images/webp/connectivity.webp"
          alt="VENTURE technology"
          className="w-full rounded-[18px] shadow-[0_10px_24px_rgba(17,24,39,0.11)]"
        />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {technologyCards.map((card) => (
          <article key={card.title} className="rounded-[14px] border border-[#e6ebf2] bg-white p-3">
            <img
              src={card.image}
              alt={card.title}
              className="h-[120px] w-full rounded-[10px] object-cover"
            />
            <p className="mt-2 text-[0.92rem] font-semibold">{card.title}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TechnologySection
