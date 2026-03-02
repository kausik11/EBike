import PageIntro from '../components/common/PageIntro'

function StaticInfoPage({ title, description }) {
  return (
    <>
      <PageIntro eyebrow="Information" title={title} description={description} />

      <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16">
        <div
          className="glass-soft rounded-2xl p-6 sm:p-8"
          data-aos="fade-up"
        >
          <h2
            className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Coming Soon
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            This page scaffold is implemented and routed. You can now add API calls,
            forms, CMS content, or detailed business sections without changing app
            navigation.
          </p>
        </div>
      </section>
    </>
  )
}

export default StaticInfoPage
