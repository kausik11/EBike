function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="mx-auto max-w-[1240px] px-4 pt-8 sm:px-5 sm:pt-14">
      <div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 px-5 py-8 text-white sm:rounded-3xl sm:px-10 sm:py-10"
        data-aos="fade-up"
      >
        <div className="pointer-events-none absolute -top-8 -right-8 h-44 w-44 rounded-full bg-brand/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-14 left-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

        <div className="relative z-10 max-w-3xl">
          {eyebrow ? (
            <p className="mb-2 font-heading text-sm font-bold tracking-[0.12em] text-brand uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className="font-heading text-[clamp(1.8rem,4vw,3.4rem)] leading-[0.95] font-bold"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-200">{description}</p>
        </div>
      </div>
    </section>
  )
}

export default PageIntro
