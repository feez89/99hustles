import Hero from '@/components/sections/Hero'
import FeaturedHustles from '@/components/sections/FeaturedHustles'
import LatestEpisodes from '@/components/sections/LatestEpisodes'
import CategoriesSection from '@/components/sections/CategoriesSection'
import StartHereSection from '@/components/sections/StartHereSection'
import EmailCaptureSection from '@/components/sections/EmailCaptureSection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedHustles />
      <LatestEpisodes />
      <CategoriesSection />
      <StartHereSection />
      <EmailCaptureSection
        variant="dark"
        headline="Your free weekly income breakdown."
        subheadline="One real hustle, documented in detail — every single week. Join 10,000+ people who are building smarter."
        ctaText="I want in"
      />
    </>
  )
}
