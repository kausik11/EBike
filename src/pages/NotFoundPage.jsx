import { Link } from 'react-router-dom'
import PageIntro from '../components/common/PageIntro'

function NotFoundPage() {
  return (
    <>
      <PageIntro
        eyebrow="Error"
        title="Page Not Found"
        description="The page you requested does not exist or has been moved."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16">
        <div
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.06)] sm:p-8"
          data-aos="fade-up"
        >
          <p className="text-slate-600">
            Use the navigation or return to the homepage.
          </p>
          <Link
            to="/"
            className="mt-4 inline-flex rounded-full bg-brand px-5 py-2.5 font-heading text-base font-bold text-white transition-colors hover:bg-brand-dark"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            Go Home
          </Link>
        </div>
      </section>
    </>
  )
}

export default NotFoundPage
