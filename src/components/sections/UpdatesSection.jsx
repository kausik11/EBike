import useSiteContext from '../../context/useSiteContext'

function UpdatesSection() {
  const { updates } = useSiteContext()

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16">
      <div className="mb-6">
        <h2 className="m-0 font-heading text-[clamp(1.8rem,3vw,2.7rem)] tracking-[0.03em]">
          Updates@{' '}
          <img
            src="https://okinawascooters.com/images/webp/okinawa2.svg"
            alt="VENTURE"
            className="inline w-[120px] align-middle"
          />
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {updates.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[14px] border border-[#e8edf3] bg-white shadow-[0_8px_20px_rgba(17,24,39,0.06)]"
          >
            <img src={item.image} alt={item.title} className="block h-[180px] w-full object-cover sm:h-[230px]" />
            <div className="p-3.5">
              <span className="text-[0.82rem] font-bold text-brand">{item.date}</span>
              <p className="mt-1.5 leading-[1.45]">{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default UpdatesSection
