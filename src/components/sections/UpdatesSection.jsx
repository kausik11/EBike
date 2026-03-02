import useSiteContext from '../../context/useSiteContext'

function UpdatesSection() {
  const { updates } = useSiteContext()

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16" data-aos="fade-up">
      <div className="mb-6">
        <h2
          className="m-0 font-heading text-[clamp(1.8rem,3vw,2.7rem)] tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Updates@{' '}
          <span className="font-heading text-xl font-bold text-brand align-middle sm:text-2xl">VENTURE</span>
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {updates.map((item, index) => (
          <article
            key={item.title}
            className="glass-soft overflow-hidden rounded-[14px]"
            data-aos="fade-up"
            data-aos-delay={90 + index * 90}
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
