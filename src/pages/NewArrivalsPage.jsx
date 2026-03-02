import PageIntro from '../components/common/PageIntro'
import UpdatesSection from '../components/sections/UpdatesSection'
import ModelsSection from '../components/sections/ModelsSection'
import SubscribeSection from '../components/sections/SubscribeSection'

function NewArrivalsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Latest"
        title="New Arrivals"
        description="Discover the newest VENTURE electric scooters, updated variants, and latest model highlights."
      />
      <UpdatesSection />
      <ModelsSection />
      <SubscribeSection />
    </>
  )
}

export default NewArrivalsPage
