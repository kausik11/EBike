import useSiteContext from '../../context/useSiteContext'
import { FiArrowRight } from 'react-icons/fi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { toast } from 'react-toastify'

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
    <section className="mx-auto mt-6 max-w-[1240px] px-4 pb-10 sm:px-5 sm:pb-16">
      <div
        className="glass-dark-panel relative overflow-hidden rounded-2xl px-5 py-9 text-white sm:rounded-3xl sm:px-8 sm:py-10"
        data-aos="fade-up"
      >
        <img
          src="https://okinawascooters.com/images/webp/Mask-scooter2.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 hidden w-[38%] max-w-[460px] md:block"
        />
        <img
          src="https://okinawascooters.com/images/webp/Mask-scooter2-mobile.webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 w-[60%] max-w-[260px] md:hidden"
        />

        <div className="relative z-10">
          <h2
            className="m-0 font-heading text-[clamp(1.8rem,3vw,2.6rem)]"
            data-aos="fade-up"
            data-aos-delay="90"
          >
            Subscribe for Updates
          </h2>
          <p className="mt-1.5 text-[#d8deea]">
            Fill in your email address below to subscribe our newsletter.
          </p>
          <form className="mt-4 flex max-w-[520px] flex-col items-stretch gap-2.5 sm:flex-row sm:items-center" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={subscriberEmail}
              onChange={(event) => setSubscriberEmail(event.target.value)}
              className="w-full flex-1 rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-white outline-none placeholder:text-[#c7cfdf] focus:border-white/70"
              required
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="inline-flex cursor-pointer items-center justify-center self-end rounded-full border border-white/40 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:self-auto"
              data-aos="fade-left"
              data-aos-delay="180"
            >
              <FiArrowRight className="text-xl" />
            </button>
          </form>

          <div className="mt-5">
            <h3 className="m-0 font-heading text-[1.45rem]" data-aos="fade-up" data-aos-delay="200">
              Follow Us at
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <FaFacebookF className="text-[16px] text-white" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <FaTwitter className="text-[16px] text-white" />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Youtube"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <FaYoutube className="text-[16px] text-white" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <FaInstagram className="text-[16px] text-white" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <FaLinkedinIn className="text-[16px] text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
