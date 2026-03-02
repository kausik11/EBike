import useSiteContext from '../../context/useSiteContext'
import { SparklesText } from '@/components/ui/sparkles-text'

function TechnologySection() {
  const { technologyCards } = useSiteContext()

  return (
    <section
      className="glass-panel mx-auto mt-7 max-w-[1240px] rounded-3xl px-4 py-10 sm:px-5 sm:py-16"
      id="support"
      data-aos="fade-up"
    >
      <div className="mb-6">
        <h2
          className="m-0 font-heading text-[clamp(1.8rem,3vw,2.7rem)] tracking-[0.03em]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          TECHNOLOGY
        </h2>
        <p className="mt-1 text-[#6c727c]">
          by{' '}
          <SparklesText
            className="inline-block align-middle font-heading text-xl font-bold text-brand sm:text-2xl"
            sparklesCount={8}
            colors={{ first: '#a4ce3e', second: '#a4ce3e' }}
          >
            VENTURE
          </SparklesText>
        </p>
      </div>

      <div className="grid items-center gap-5 lg:grid-cols-2" data-aos="fade-up" data-aos-delay="100">
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
        {technologyCards.map((card, index) => (
          <article
            key={card.title}
            className="glass-soft rounded-[14px] p-3"
            data-aos="fade-up"
            data-aos-delay={140 + index * 70}
          >
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
