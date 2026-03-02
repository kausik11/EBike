import useSiteContext from '../../context/useSiteContext'
import { FiArrowRight } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { toast } from 'react-toastify'

const socialLinks = [
  {
    href: 'https://www.facebook.com/',
    label: 'Facebook',
    Icon: FaFacebookF,
    iconClassName: 'text-[#3b5998]',
  },
  {
    href: 'https://x.com/',
    label: 'Twitter',
    Icon: FaTwitter,
    iconClassName: 'text-[#1d9bf0]',
  },
  {
    href: 'https://www.youtube.com/',
    label: 'Youtube',
    Icon: FaYoutube,
    iconClassName: 'text-[#ff0000]',
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    Icon: FaInstagram,
    iconClassName: 'text-[#e1306c]',
  },
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    Icon: FaLinkedinIn,
    iconClassName: 'text-[#0a66c2]',
  },
]

function SubscribeSection() {
  const { subscriberEmail, setSubscriberEmail } = useSiteContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    const email = subscriberEmail.trim()

    if (!email) {
      toast.error('Please enter your email address.')
      return
    }

    toast.success('Subscribed successfully. You will receive updates soon.')
    setSubscriberEmail('')
  }

  return (
    <section className="relative bg-[#eceff2]">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] bg-gradient-to-l from-[#dfe4ea] via-[#e9edf2]/80 to-transparent lg:block" />
      <div className="pointer-events-none absolute right-[10%] top-[17%] hidden h-[250px] w-[136px] rounded-[30px] bg-gradient-to-b from-white to-[#d6dde6] opacity-70 shadow-[0_20px_46px_rgba(96,112,137,0.22)] lg:block" />
      <div className="pointer-events-none absolute right-[15%] bottom-[8%] hidden h-[178px] w-[96px] rounded-[30px] border-[10px] border-[#b7c4d3] opacity-60 lg:block" />
      <img
        src="https://okinawascooters.com/images/webp/Mask-scooter2.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-106px] left-0 z-20 hidden w-[min(42vw,620px)] max-w-none lg:block"
      />

      <div className="mx-auto max-w-[1240px] px-4 py-14 sm:px-5 sm:py-16 lg:py-20" data-aos="fade-up">
        <div className="mx-auto max-w-[560px] text-center">
          <h2
            className="font-heading text-[clamp(2rem,3.1vw,3rem)] leading-[0.92] font-bold text-[#0f1722]"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            Subscribe for Updates
          </h2>
          <p className="mt-3 text-[1.03rem] text-[#4a5667]">
            Fill in your email address below to subscribe our newsletter!
          </p>

          <form className="mx-auto mt-7 max-w-[430px]" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={subscriberEmail}
                onChange={(event) => setSubscriberEmail(event.target.value)}
                className="h-[52px] w-full rounded-full border border-white bg-white/90 px-5 pr-16 text-[0.97rem] text-[#1f2a38] shadow-[0_7px_16px_rgba(91,105,127,0.12)] outline-none placeholder:text-[#7f8b9a] focus:border-brand/50"
                required
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute top-1/2 right-2 inline-flex h-[38px] w-[38px] -translate-y-1/2 items-center justify-center rounded-full border border-[#d8dee8] bg-white text-[#616f82] transition-colors hover:bg-brand hover:text-white"
                data-aos="fade-left"
                data-aos-delay="170"
              >
                <FiArrowRight className="text-[1.05rem]" />
              </button>
            </div>
          </form>

          <div className="mt-9">
            <h3 className="font-heading text-[1.75rem] font-bold text-[#0f1722]" data-aos="fade-up" data-aos-delay="140">
              Follow Us at
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2.5">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-[0_5px_12px_rgba(99,113,135,0.18)] transition-transform hover:-translate-y-0.5"
                >
                  {item.Icon({ className: `text-[0.86rem] ${item.iconClassName}` })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
