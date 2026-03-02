import PageIntro from '../components/common/PageIntro'
import ModelsSection from '../components/sections/ModelsSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import SustainabilitySection from '../components/sections/SustainabilitySection'
import SubscribeSection from '../components/sections/SubscribeSection'

function VehiclesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Portfolio"
        title="Our Vehicles"
        description="Browse the VENTURE scooter lineup with pricing, range, top speed, charging details, and key features."
      />
      <ModelsSection />
      <FeaturesSection />
      <SustainabilitySection />
      <SubscribeSection />
    </>
  )
}

export default VehiclesPage
