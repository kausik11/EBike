import PageIntro from '../components/common/PageIntro'
import TechnologySection from '../components/sections/TechnologySection'
import SubscribeSection from '../components/sections/SubscribeSection'

const supportCards = [
  {
    title: 'Customer Care Number',
    value: '1800-419-2224',
    caption: '10:00 AM - 07:00 PM',
    href: 'tel:18004192224',
  },
  {
    title: 'Customer Care Email',
    value: 'support@ventureebike.com',
    caption: 'Write to us for service and product queries',
    href: 'mailto:support@ventureebike.com',
  },
  {
    title: 'Roadside Assistance',
    value: '1800-419-2229',
    caption: 'Emergency breakdown support',
    href: 'tel:18004192229',
  },
]

function SupportPage() {
  return (
    <>
      <PageIntro
        eyebrow="Help"
        title="Support"
        description="Need help with your scooter? Reach our support team, explore resources, and stay updated."
      />

      <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-5 sm:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {supportCards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
              data-aos="fade-up"
              data-aos-delay={80 + index * 80}
            >
              <p className="text-sm tracking-[0.08em] text-brand uppercase">{card.title}</p>
              <a
                href={card.href}
                className="mt-2 block break-all font-heading text-xl font-bold text-slate-900 hover:text-brand sm:text-2xl"
              >
                {card.value}
              </a>
              <p className="mt-2 text-sm text-slate-500">{card.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <TechnologySection />
      <SubscribeSection />
    </>
  )
}

export default SupportPage
