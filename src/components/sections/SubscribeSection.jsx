import useSiteContext from '../../context/useSiteContext'

function SubscribeSection() {
  const { subscriberEmail, setSubscriberEmail } = useSiteContext()

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section className="mx-auto mt-6 max-w-[1240px] px-4 pb-10 sm:px-5 sm:pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 px-5 py-10 text-white sm:px-8">
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
          <h2 className="m-0 font-heading text-[clamp(1.8rem,3vw,2.6rem)]">Subscribe for Updates</h2>
          <p className="mt-1.5 text-[#d8deea]">
            Fill in your email address below to subscribe our newsletter.
          </p>
          <form className="mt-4 flex max-w-[520px] items-center gap-2.5" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={subscriberEmail}
              onChange={(event) => setSubscriberEmail(event.target.value)}
              className="w-full flex-1 rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-white outline-none placeholder:text-[#c7cfdf] focus:border-white/70"
              required
            />
            <button type="submit" aria-label="Subscribe" className="cursor-pointer bg-transparent p-0">
              <img
                src="https://okinawascooters.com/images/webp/read-more.svg"
                alt="Subscribe"
                className="h-11 w-11"
              />
            </button>
          </form>

          <div className="mt-5">
            <h3 className="m-0 font-heading text-[1.45rem]">Follow Us at</h3>
            <div className="mt-2.5 flex gap-2.5">
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <img
                  src="https://okinawascooters.com/images/webp/facebook-icon.svg"
                  alt=""
                  className="h-[18px] w-[18px] object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <img
                  src="https://okinawascooters.com/images/webp/twitter-icon.svg"
                  alt=""
                  className="h-[18px] w-[18px] object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="Youtube"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <img
                  src="https://okinawascooters.com/images/webp/youtube-icon.svg"
                  alt=""
                  className="h-[18px] w-[18px] object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <img
                  src="https://okinawascooters.com/images/insta-icon.png"
                  alt=""
                  className="h-[18px] w-[18px] object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white/10"
              >
                <img
                  src="https://okinawascooters.com/images/webp/linkdin-icon.svg"
                  alt=""
                  className="h-[18px] w-[18px] object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection
